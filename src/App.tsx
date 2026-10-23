/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { 
  BookOpen, 
  Headphones, 
  PenTool, 
  Mic2, 
  Award, 
  Settings, 
  ChevronRight, 
  BarChart3, 
  Globe, 
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Trophy,
  X,
  Menu,
  RotateCcw,
  History,
  ShieldCheck,
  GraduationCap,
  Volume2,
  Square,
  Brain,
  HelpCircle,
  Sparkles,
  Sun,
  Moon,
  Video,
  Lock,
  UserCheck,
  UserX,
  User,
  LogIn,
  LogOut,
  FileSpreadsheet,
  RefreshCw,
  Check,
  Mail
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { translations } from './translations';
import { Language, Skill, Level, Practice, EvaluationResult } from './types';
import { practices } from './data/practices';
import { evaluatePerformance, translateResult } from './services/geminiService';
import { 
  initAuth, 
  googleSignIn, 
  logout, 
  getCurrentUser 
} from './services/googleAuthService';
import { type User as FirebaseUser } from 'firebase/auth';
import { 
  fetchEnrolledEmailsFromGoogleSheet, 
  extractSpreadsheetInfo 
} from './services/googleSheetsService';

// Import newly customized views
import HistoryView from './components/HistoryView';
import BlogView from './components/BlogView';
import PrivacyView from './components/PrivacyView';
import VocabularyView from './components/VocabularyView';
import QuizView from './components/QuizView';
import VideosView from './components/VideosView';

export default function App() {
  const [lang, setLang] = useState<Language>(() => (localStorage.getItem('lang') as Language) || 'en');
  const [darkMode, setDarkMode] = useState<boolean>(() => localStorage.getItem('darkMode') === 'true');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [view, setView] = useState<'dashboard' | 'practice-list' | 'practice-session' | 'results' | 'history' | 'blog' | 'privacy' | 'vocabulary' | 'quiz' | 'videos'>(() => {
    const saved = localStorage.getItem('view');
    if (saved === 'help') return 'dashboard';
    return (saved as any) || 'dashboard';
  });
  const [selectedSkill, setSelectedSkill] = useState<Skill>(() => (localStorage.getItem('selectedSkill') as Skill) || 'listening');
  const [selectedLevel, setSelectedLevel] = useState<Level>(() => (localStorage.getItem('selectedLevel') as Level) || 'easy');
  const [lockedNotice, setLockedNotice] = useState<string | null>(null);

  // Authentication & Enrollment states
  const [authUser, setAuthUser] = useState<FirebaseUser | null>(() => getCurrentUser());
  const [customEmail, setCustomEmail] = useState<string>(() => localStorage.getItem('exci_custom_email') || '');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [authSuccess, setAuthSuccess] = useState<string | null>(null);

  // Google Sheet & Enrolled Emails state
  const [enrolledEmails, setEnrolledEmails] = useState<string[]>(() => {
    const saved = localStorage.getItem('exci_enrolled_emails');
    try {
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [activeSheetId, setActiveSheetId] = useState<string | null>(() => {
    return localStorage.getItem('exci_google_sheet_id');
  });
  const [isSyncingEmails, setIsSyncingEmails] = useState(false);
  const [sheetSyncError, setSheetSyncError] = useState<string | null>(null);
  const [sheetSyncSuccess, setSheetSyncSuccess] = useState<string | null>(null);

  // Modal form inputs
  const [manualEmailInput, setManualEmailInput] = useState('');
  const [sheetUrlInput, setSheetUrlInput] = useState(() => {
    return localStorage.getItem('exci_google_sheet_id') || '';
  });

  // Current normalized user email and enrolled verification status
  const currentEmail = (authUser?.email || customEmail || '').trim().toLowerCase();
  const isEnrolled = Boolean(
    currentEmail &&
    enrolledEmails.some(e => e.trim().toLowerCase() === currentEmail)
  );

  // Helper to determine if a practice is locked:
  // If the user is enrolled with an email from the "emails" sheet (column "email inscrito"), ALL lessons are unlocked!
  // Otherwise, only the first 3 lessons of each level are unlocked.
  const isPracticeLocked = (practice: Practice): boolean => {
    if (isEnrolled) return false;
    const levelPractices = practices.filter(
      p => p.skill === practice.skill && p.level === practice.level
    );
    const index = levelPractices.findIndex(p => p.id === practice.id);
    return index >= 3;
  };

  const [currentPractice, setCurrentPractice] = useState<Practice | null>(() => {
    const savedId = localStorage.getItem('currentPracticeId');
    if (!savedId) return null;
    const found = practices.find(p => p.id === savedId) || null;
    if (found && isPracticeLocked(found)) return null;
    return found;
  });
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>(() => {
    const saved = localStorage.getItem('userAnswers');
    try {
      return saved ? JSON.parse(saved) : {};
    } catch { return {}; }
  });
  const [writingAnswer, setWritingAnswer] = useState(() => localStorage.getItem('writingAnswer') || '');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [result, setResult] = useState<EvaluationResult | null>(() => {
    const saved = localStorage.getItem('lastResult');
    try {
      return saved ? JSON.parse(saved) : null;
    } catch { return null; }
  });
  const [stats, setStats] = useState(() => {
    if (!isEnrolled || !currentEmail) return { completed: 0, avgBand: 0 };
    const userStats = localStorage.getItem(`stats_${currentEmail}`);
    if (userStats) {
      try { return JSON.parse(userStats); } catch { return { completed: 0, avgBand: 0 }; }
    }
    const saved = localStorage.getItem('stats');
    try {
      return saved ? JSON.parse(saved) : { completed: 0, avgBand: 0 };
    } catch { return { completed: 0, avgBand: 0 }; }
  });

  const [historyList, setHistoryList] = useState<any[]>(() => {
    if (!isEnrolled || !currentEmail) return [];
    const userKey = `evaluationHistory_${currentEmail}`;
    const savedUser = localStorage.getItem(userKey);
    if (savedUser) {
      try { return JSON.parse(savedUser); } catch { return []; }
    }
    const savedLegacy = localStorage.getItem('evaluationHistory');
    if (savedLegacy) {
      try {
        const parsed = JSON.parse(savedLegacy);
        if (Array.isArray(parsed)) {
          return parsed.filter((item: any) => !item.userEmail || item.userEmail === currentEmail);
        }
      } catch { return []; }
    }
    return [];
  });

  // Synchronize historyList and stats when enrolled user changes or logs in/out
  useEffect(() => {
    if (isEnrolled && currentEmail) {
      const userKey = `evaluationHistory_${currentEmail}`;
      const savedUser = localStorage.getItem(userKey);
      if (savedUser) {
        try {
          setHistoryList(JSON.parse(savedUser));
        } catch {
          setHistoryList([]);
        }
      } else {
        const savedLegacy = localStorage.getItem('evaluationHistory');
        if (savedLegacy) {
          try {
            const parsed = JSON.parse(savedLegacy);
            const filtered = Array.isArray(parsed)
              ? parsed.filter((item: any) => !item.userEmail || item.userEmail === currentEmail)
              : [];
            setHistoryList(filtered);
          } catch {
            setHistoryList([]);
          }
        } else {
          setHistoryList([]);
        }
      }

      const statsKey = `stats_${currentEmail}`;
      const savedStats = localStorage.getItem(statsKey);
      if (savedStats) {
        try {
          setStats(JSON.parse(savedStats));
        } catch {
          setStats({ completed: 0, avgBand: 0 });
        }
      }
    } else {
      // Guest or non-enrolled user: grade history is not kept
      setHistoryList([]);
      setStats({ completed: 0, avgBand: 0 });
    }
  }, [currentEmail, isEnrolled]);

  // Persist historyList ONLY for enrolled users
  useEffect(() => {
    if (isEnrolled && currentEmail) {
      const userKey = `evaluationHistory_${currentEmail}`;
      localStorage.setItem(userKey, JSON.stringify(historyList));
      localStorage.setItem('evaluationHistory', JSON.stringify(historyList));
    }
  }, [historyList, isEnrolled, currentEmail]);

  // Sync settings and dashboard state immediately
  useEffect(() => {
    localStorage.setItem('lang', lang);
    localStorage.setItem('view', view);
    localStorage.setItem('selectedSkill', selectedSkill);
    localStorage.setItem('selectedLevel', selectedLevel);
  }, [lang, view, selectedSkill, selectedLevel]);

  // Sync dark theme preferences and update documentElement class
  useEffect(() => {
    localStorage.setItem('darkMode', String(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Sync practice state
  useEffect(() => {
    localStorage.setItem('currentPracticeId', currentPractice?.id || '');
    localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
  }, [currentPractice, userAnswers]);

  // Debounced sync for writing/speaking answers to prevent flickering/performance lag
  useEffect(() => {
    const timeout = setTimeout(() => {
      localStorage.setItem('writingAnswer', writingAnswer);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [writingAnswer]);

  // Consistency Guard: If we are in a sub-view but data is missing or locked, revert to dashboard
  useEffect(() => {
    if (view === 'practice-session' && (!currentPractice || isPracticeLocked(currentPractice))) {
      setView('dashboard');
    }
    if (view === 'results' && !result && !isEvaluating) {
      setView('dashboard');
    }
  }, [view, currentPractice, result, isEvaluating]);

  // Cancel speech synthesis audio playback when leaving a practice session, changing language or changing tasks
  useEffect(() => {
    window.speechSynthesis.cancel();
    setIsAudioPlaying(false);
  }, [view, currentPractice?.id, lang]);

  useEffect(() => {
    if (isEnrolled && currentEmail) {
      localStorage.setItem(`stats_${currentEmail}`, JSON.stringify(stats));
    }
    localStorage.setItem('stats', JSON.stringify(stats));
    if (result) {
      localStorage.setItem('lastResult', JSON.stringify(result));
    } else {
      localStorage.removeItem('lastResult');
    }
  }, [stats, result, isEnrolled, currentEmail]);

  const [isTranslating, setIsTranslating] = useState(false);

  const historyLangs = historyList.map(h => h.lang || '').join(',');

  useEffect(() => {
    let active = true;

    const translateCurrentAndHistory = async () => {
      const resultLang = result?.lang || 'en';
      if (result && result.feedback && resultLang !== lang) {
        setIsTranslating(true);
        try {
          const res = await translateResult(
            result.feedback,
            result.strengths,
            result.improvements,
            lang
          );
          if (active) {
            setResult(prev => {
              if (!prev || (prev.lang || 'en') === lang) return prev;
              return {
                ...prev,
                feedback: res.feedback,
                strengths: res.strengths,
                improvements: res.improvements,
                lang: lang
              };
            });
          }
        } catch (err) {
          console.error("Result translation error in App.tsx:", err);
        } finally {
          if (active) {
            setIsTranslating(false);
          }
        }
      }

      const dirtyIndices = historyList
        .map((h, idx) => (h.feedback && (h.lang || 'en') !== lang ? idx : -1))
        .filter(idx => idx !== -1);

      if (dirtyIndices.length > 0) {
        try {
          const copy = [...historyList];
          const promises = dirtyIndices.map(idx => {
            const item = copy[idx];
            return translateResult(
              item.feedback,
              item.strengths || [],
              item.improvements || [],
              lang
            );
          });

          const translatedResults = await Promise.all(promises);

          if (active) {
            dirtyIndices.forEach((idx, i) => {
              const res = translatedResults[i];
              copy[idx] = {
                ...copy[idx],
                feedback: res.feedback,
                strengths: res.strengths,
                improvements: res.improvements,
                lang: lang
              };
            });
            setHistoryList(copy);
          }
        } catch (err) {
          console.error("History translation error in App.tsx:", err);
        }
      }
    };

    translateCurrentAndHistory();

    return () => {
      active = false;
    };
  }, [lang, result?.lang, historyLangs]);

  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [recognition, setRecognition] = useState<any>(null);
  const [micError, setMicError] = useState<string | null>(null);
  const [onlineApplicants, setOnlineApplicants] = useState(() => Math.floor(Math.random() * (8888 - 1000 + 1)) + 1000);
  const [activeAvatars, setActiveAvatars] = useState<string[]>(['A', 'K', 'M', 'S']);

  useEffect(() => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const interval = setInterval(() => {
      setOnlineApplicants(Math.floor(Math.random() * (8888 - 1000 + 1)) + 1000);
      
      // Update avatars in sync
      const count = Math.floor(Math.random() * 3) + 3; // 3 to 5 avatars
      const newAvatars = Array.from({ length: count }, () => letters[Math.floor(Math.random() * letters.length)]);
      setActiveAvatars(newAvatars);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const t = translations[lang];

  useEffect(() => {
    let interval: any;
    if (isRecording) {
      interval = setInterval(() => setRecordingTime(prev => prev + 1), 1000);
    } else {
      setRecordingTime(0);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const rec = new SpeechRecognition();
      rec.continuous = true;
      rec.interimResults = true;
      rec.lang = lang === 'en' ? 'en-US' : lang === 'es' ? 'es-ES' : 'ru-RU';
      
      rec.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0])
          .map((result: any) => result.transcript)
          .join('');
        setWritingAnswer(transcript);
      };

      rec.onerror = (event: any) => {
        console.error('Speech recognition error', event.error);
        setIsRecording(false);
        if (event.error === 'not-allowed') {
          setMicError('permission-denied');
        } else if (event.error === 'network') {
          setMicError('network-error');
        } else {
          setMicError('error');
        }
      };

      rec.onend = () => {
        setIsRecording(false);
      };

      setRecognition(rec);
    }
  }, [lang]);

  const handleStartRecording = async () => {
    try {
      setMicError(null);
      // Explicitly ask for permission if needed
      await navigator.mediaDevices.getUserMedia({ audio: true });
      if (recognition) {
        recognition.start();
        setIsRecording(true);
      }
    } catch (err) {
      console.error('Mic access denied', err);
      setMicError('permission-denied');
    }
  };

  const handleStopRecording = () => {
    recognition?.stop();
    setIsRecording(false);
  };

  const handleRestartRecording = () => {
    recognition?.stop();
    setIsRecording(false);
    setWritingAnswer('');
    setRecordingTime(0);
    setMicError(null);
  };

  const playListeningAudio = () => {
    if (!currentPractice) return;

    if (isAudioPlaying) {
      window.speechSynthesis.cancel();
      setIsAudioPlaying(false);
    } else {
      window.speechSynthesis.cancel();
      
      const rawText = currentPractice.content;
      // Strip "Transcript: " to make it more professional
      const textToSpeak = rawText.startsWith('Transcript:') 
        ? rawText.replace(/^Transcript:\s*"?/, '').replace(/"?$/, '')
        : rawText;

      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = 'en-GB';
      utterance.rate = 0.9;

      // Explicitly pick a native English voice to make sure Spanish/Russian locales do not corrupt the accent
      const voices = window.speechSynthesis.getVoices();
      const englishVoice = voices.find(v => v.lang === 'en-GB' || v.lang.toLowerCase().includes('en-gb'))
        || voices.find(v => v.lang.startsWith('en-US') || v.lang.toLowerCase().includes('en-us'))
        || voices.find(v => v.lang.toLowerCase().startsWith('en'))
        || null;

      if (englishVoice) {
        utterance.voice = englishVoice;
      }

      utterance.onstart = () => {
        setIsAudioPlaying(true);
      };

      utterance.onend = () => {
        setIsAudioPlaying(false);
      };

      utterance.onerror = () => {
        setIsAudioPlaying(false);
      };

      window.speechSynthesis.speak(utterance);
    }
  };

  const filteredPractices = useMemo(() => {
    return practices.filter(p => p.skill === selectedSkill && p.level === selectedLevel);
  }, [selectedSkill, selectedLevel]);

  const skillIcons = {
    listening: <Headphones className="w-5 h-5" />,
    reading: <BookOpen className="w-5 h-5" />,
    writing: <PenTool className="w-5 h-5" />,
    speaking: <Mic2 className="w-5 h-5" />,
  };

  // Initialize auth listener
  useEffect(() => {
    const unsubscribe = initAuth(
      (user) => {
        setAuthUser(user);
      },
      () => {
        setAuthUser(null);
      }
    );
    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, []);

  // Sync enrolled emails from Google Sheet tab "emails" (column "email inscrito")
  const syncEnrolledEmails = async (sheetId?: string, silent = false) => {
    const targetSheet = sheetId || activeSheetId || localStorage.getItem('exci_google_sheet_id');
    if (!targetSheet) return;

    setIsSyncingEmails(true);
    if (!silent) {
      setSheetSyncError(null);
      setSheetSyncSuccess(null);
    }

    try {
      const { emails } = await fetchEnrolledEmailsFromGoogleSheet(targetSheet, 'emails');
      if (emails && emails.length > 0) {
        setEnrolledEmails(emails);
        localStorage.setItem('exci_enrolled_emails', JSON.stringify(emails));
        if (!silent) {
          setSheetSyncSuccess(
            lang === 'es'
              ? `¡Se sincronizaron ${emails.length} correos inscritos con éxito!`
              : `Successfully synced ${emails.length} enrolled emails!`
          );
        }
      } else if (!silent) {
        setSheetSyncError(
          lang === 'es'
            ? 'No se encontraron correos en la pestaña "emails" (columna "email inscrito"). Verifica el nombre de la pestaña y columna en tu Google Sheet.'
            : 'No emails found in "emails" tab (column "email inscrito"). Check the tab and column names in your Google Sheet.'
        );
      }
    } catch (err: any) {
      if (!silent) {
        setSheetSyncError(
          err.message || (lang === 'es' ? 'Error al sincronizar correos de Google Sheets.' : 'Error syncing emails from Google Sheet.')
        );
      }
    } finally {
      setIsSyncingEmails(false);
    }
  };

  // Sync enrolled emails on mount, window focus, and background interval
  useEffect(() => {
    const storedSheet = activeSheetId || localStorage.getItem('exci_google_sheet_id');
    if (storedSheet) {
      syncEnrolledEmails(storedSheet, true);
    }

    const interval = setInterval(() => {
      const sheet = localStorage.getItem('exci_google_sheet_id');
      if (sheet) syncEnrolledEmails(sheet, true);
    }, 25000);

    const handleFocus = () => {
      const sheet = localStorage.getItem('exci_google_sheet_id');
      if (sheet) {
        setActiveSheetId(sheet);
        syncEnrolledEmails(sheet, true);
      }
    };
    window.addEventListener('focus', handleFocus);

    return () => {
      clearInterval(interval);
      window.removeEventListener('focus', handleFocus);
    };
  }, [activeSheetId]);

  const handleGoogleSignIn = async () => {
    setIsSigningIn(true);
    setAuthError(null);
    setAuthSuccess(null);
    try {
      const res = await googleSignIn();
      if (res?.user) {
        setAuthUser(res.user);
        setAuthSuccess(
          lang === 'es'
            ? `¡Sesión iniciada como ${res.user.displayName || res.user.email}!`
            : `Signed in as ${res.user.displayName || res.user.email}!`
        );
        const sheet = localStorage.getItem('exci_google_sheet_id');
        if (sheet) syncEnrolledEmails(sheet, true);
      }
    } catch (err: any) {
      setAuthError(err.message || (lang === 'es' ? 'Error al iniciar sesión con Google.' : 'Error signing in with Google.'));
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await logout();
      setAuthUser(null);
      setCustomEmail('');
      localStorage.removeItem('exci_custom_email');
      setAuthSuccess(null);
      setAuthError(null);
    } catch (err: any) {
      console.error('Logout error:', err);
    }
  };

  const handleSaveManualEmail = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = manualEmailInput.trim().toLowerCase();
    if (!trimmed) {
      setCustomEmail('');
      localStorage.removeItem('exci_custom_email');
      setAuthSuccess(null);
      setAuthError(null);
      return;
    }
    setCustomEmail(trimmed);
    localStorage.setItem('exci_custom_email', trimmed);

    // Trigger background sync with Google Sheet automatically
    const sheet = localStorage.getItem('exci_google_sheet_id');
    if (sheet) {
      await syncEnrolledEmails(sheet, true);
    }

    // Check if enrolled
    const saved = localStorage.getItem('exci_enrolled_emails');
    let emailList = enrolledEmails;
    try {
      if (saved) emailList = JSON.parse(saved);
    } catch {
      // keep enrolledEmails
    }

    const isMatch = emailList.some(em => em.trim().toLowerCase() === trimmed);
    if (isMatch) {
      setAuthSuccess(
        lang === 'es'
          ? `¡Correo verificado con éxito! Tu acceso ha sido desbloqueado.`
          : `Email verified successfully! Full access unlocked.`
      );
      setAuthError(null);
    } else {
      setAuthError(
        lang === 'es'
          ? `El correo ${trimmed} no figura en la lista de alumnos inscritos.`
          : `The email ${trimmed} was not found on the enrolled students list.`
      );
      setAuthSuccess(null);
    }
  };

  const handleConnectSheet = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = sheetUrlInput.trim();
    if (!trimmed) return;
    setActiveSheetId(trimmed);
    localStorage.setItem('exci_google_sheet_id', trimmed);
    syncEnrolledEmails(trimmed, false);
  };

  const handleStartPractice = (practice: Practice) => {
    if (isPracticeLocked(practice)) {
      if (currentEmail) {
        setLockedNotice(
          lang === 'es'
            ? `Tu correo (${currentEmail}) no figura como alumno inscrito. Solo las primeras 3 lecciones de cada nivel están disponibles.`
            : `Your email (${currentEmail}) is not registered as an enrolled student. Only the first 3 lessons of each level are available.`
        );
      } else {
        setLockedNotice(
          lang === 'es'
            ? 'Esta lección se encuentra bloqueada. Inicia sesión con tu correo inscrito para desbloquear todas las lecciones.'
            : 'This lesson is locked. Sign in with your registered email to unlock all lessons.'
        );
      }
      return;
    }
    setCurrentPractice(practice);
    setUserAnswers({});
    setWritingAnswer('');
    setView('practice-session');
    setLockedNotice(null);
  };

  const handleSubmitPractice = async () => {
    if (!currentPractice) return;
    setIsEvaluating(true);
    setView('results');

    try {
      let contentToEvaluate = '';
      if (currentPractice.skill === 'reading' || currentPractice.skill === 'listening') {
        const score = currentPractice.questions?.reduce((acc, q) => {
          return acc + (userAnswers[q.id] === q.correctAnswer ? 1 : 0);
        }, 0) || 0;
        const total = currentPractice.questions?.length || 1;
        contentToEvaluate = `Multiple choice score: ${score}/${total}. Answers given: ${JSON.stringify(userAnswers)}`;
      } else {
        contentToEvaluate = writingAnswer;
      }

      const evalResult = await evaluatePerformance(
        currentPractice.skill,
        currentPractice.level,
        currentPractice.content,
        contentToEvaluate,
        lang
      );
      
      const evalResultWithLang = {
        ...evalResult,
        lang: lang
      };
      
      setResult(evalResultWithLang);

      // ONLY save to persistent evaluation history log if the user is enrolled with an email from the Google Sheet
      if (isEnrolled && currentEmail) {
        setStats(prev => ({
          completed: prev.completed + 1,
          avgBand: (prev.avgBand * prev.completed + evalResult.band) / (prev.completed + 1)
        }));

        // Append to persistent evaluation history log
        const newHistoryItem = {
          id: Date.now().toString(),
          userEmail: currentEmail,
          practiceId: currentPractice.id,
          practiceTitle: currentPractice.title,
          skill: currentPractice.skill,
          level: currentPractice.level,
          band: evalResult.band,
          cefr: evalResult.cefr,
          feedback: evalResult.feedback,
          strengths: evalResult.strengths,
          improvements: evalResult.improvements,
          userAnswer: currentPractice.skill === 'reading' || currentPractice.skill === 'listening' ? '' : writingAnswer,
          selectedAnswers: currentPractice.skill === 'reading' || currentPractice.skill === 'listening' ? userAnswers : undefined,
          completedAt: new Date().toISOString(),
          lang: lang
        };
        setHistoryList(prev => [newHistoryItem, ...prev]);
      }
    } catch (error) {
      console.error(error);
      setResult({
        band: 0,
        cefr: 'N/A',
        feedback: 'Evaluation failed. Please try again later.',
        strengths: [],
        improvements: [],
        lang: lang
      });
    } finally {
      setIsEvaluating(false);
    }
  };

  const uniqueCompletedCount = useMemo(() => {
    return new Set(
      historyList
        .filter(h => h.practiceId)
        .map(h => h.practiceId)
    ).size;
  }, [historyList]);

  const courseMasteryProgress = useMemo(() => {
    // 40 easy, 40 medium, 40 hard practices in each of the 4 skills = 120 * 4 = 480 total target
    return Math.min(100, Math.round((uniqueCompletedCount / 480) * 100));
  }, [uniqueCompletedCount]);

  const avgBandScore = useMemo(() => {
    const listWithBand = historyList.filter(h => typeof h.band === 'number' && h.band > 0);
    if (listWithBand.length === 0) return stats.avgBand || 0;
    const total = listWithBand.reduce((sum, h) => sum + h.band, 0);
    return total / listWithBand.length;
  }, [historyList, stats.avgBand]);

  const getSkillProgress = (skill: Skill) => {
    if (historyList.length === 0) return 0;
    const completedUniqueForSkill = new Set(
      historyList
        .filter(h => h.skill === skill && h.practiceId)
        .map(h => h.practiceId)
    ).size;
    // We target 120 unique tasks per skill (40 easy, 40 medium, 40 hard)
    return Math.min(100, Math.round((completedUniqueForSkill / 120) * 100));
  };

  return (
    <div className={`h-screen w-full ${darkMode ? 'dark bg-[#090d16] text-slate-100' : 'bg-slate-50 text-slate-900'} font-sans flex flex-col overflow-hidden`}>
      {/* Header Navigation */}
      <header className="h-16 md:h-20 bg-white border-b border-slate-200 px-4 md:px-8 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2 md:gap-3 cursor-pointer" onClick={() => setView('dashboard')}>
          <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg md:text-xl uppercase shrink-0">EE</div>
          <div>
            <h1 className="text-lg md:text-2xl font-black tracking-tight text-slate-800 dark:text-white leading-none">EXCI<span className="text-blue-600">Express</span></h1>
            <p className="hidden sm:block text-[9px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">Guía y Simulador Examen EXCI UANL</p>
          </div>
        </div>
        
        {/* Desktop Header Controls - hidden on mobile */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex gap-4 text-[10px] font-bold text-slate-500 tracking-widest">
            {(['es', 'en'] as Language[]).map((l, idx) => (
              <div key={l} className="flex items-center gap-4">
                <button 
                  onClick={() => setLang(l)}
                  className={`hover:text-blue-600 transition-colors uppercase cursor-pointer ${lang === l ? 'text-blue-600 cursor-default font-black' : ''}`}
                >
                  <span className="hidden md:inline">{l === 'en' ? 'ENGLISH' : 'ESPAÑOL'}</span>
                </button>
                {idx < 1 && <span className="text-slate-300">|</span>}
              </div>
            ))}
          </div>

          {/* Interactive Themes Switch Control */}
          <button 
            onClick={() => setDarkMode(prev => !prev)}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all text-slate-500 dark:text-slate-300 cursor-pointer shrink-0 flex items-center justify-center border border-slate-200 dark:border-slate-800"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? <Sun className="w-4.5 h-4.5 text-amber-500 fill-amber-500" /> : <Moon className="w-4.5 h-4.5 text-slate-750 fill-slate-200" />}
          </button>

          {/* User Auth & Enrollment Button (Desktop) */}
          {currentEmail ? (
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className={`flex items-center gap-2.5 px-3 py-1.5 rounded-2xl border text-xs font-bold transition-all cursor-pointer ${
                isEnrolled
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 hover:bg-emerald-100'
                  : 'bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-200 hover:bg-amber-100'
              }`}
              title={currentEmail}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black text-white shrink-0 ${
                isEnrolled ? 'bg-emerald-600' : 'bg-amber-600'
              }`}>
                {authUser?.photoURL ? (
                  <img src={authUser.photoURL} alt="" className="w-6 h-6 rounded-full" />
                ) : (
                  (currentEmail[0] || 'U').toUpperCase()
                )}
              </div>
              <div className="flex flex-col text-left">
                <span className="max-w-[120px] truncate leading-tight text-[11px] font-bold">
                  {authUser?.displayName || currentEmail.split('@')[0]}
                </span>
                <span className="text-[9px] font-extrabold uppercase tracking-wider flex items-center gap-1 opacity-80">
                  {isEnrolled ? (
                    <>
                      <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                      {lang === 'es' ? 'Inscrito' : 'Enrolled'}
                    </>
                  ) : (
                    <>
                      <Lock className="w-2.5 h-2.5 text-amber-600" />
                      {lang === 'es' ? 'No Inscrito' : 'Not Enrolled'}
                    </>
                  )}
                </span>
              </div>
            </button>
          ) : (
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="flex items-center gap-2 px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer"
            >
              <LogIn className="w-4 h-4" />
              <span>{lang === 'es' ? 'Iniciar Sesión' : 'Sign In'}</span>
            </button>
          )}

          <div className="flex items-center gap-4 pl-8 border-l border-slate-200">
            <div className="text-right">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">{lang === 'es' ? 'Promedio EXCI' : 'Avg EXCI'}</p>
              <p className="text-lg font-bold text-slate-800 leading-none">{Math.round(avgBandScore)} <span className="text-sm font-normal text-slate-500">/ 100</span></p>
            </div>
            <div className="px-3 h-10 rounded-full border-2 border-white ring-1 ring-slate-100 flex items-center justify-center bg-blue-50 text-blue-600 font-extrabold text-xs shadow-sm shrink-0" title={`${uniqueCompletedCount} practices completed out of 480`}>
              {uniqueCompletedCount}/480
            </div>
          </div>
        </nav>

        {/* Mobile Header Controls - visible only on phone/tablet */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Auth Button */}
          {currentEmail ? (
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className={`p-1.5 rounded-xl border flex items-center gap-1 text-[11px] font-bold cursor-pointer ${
                isEnrolled 
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200' 
                  : 'bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-200'
              }`}
              title={currentEmail}
            >
              <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-black text-white shrink-0 ${
                isEnrolled ? 'bg-emerald-600' : 'bg-amber-600'
              }`}>
                {(currentEmail[0] || 'U').toUpperCase()}
              </div>
              {isEnrolled ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              ) : (
                <Lock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              )}
            </button>
          ) : (
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="px-2.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-1 shadow-xs"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span className="text-[11px]">{lang === 'es' ? 'Iniciar Sesión' : 'Sign in'}</span>
            </button>
          )}

          {/* Mobile Theme Switch Button */}
          <button 
            onClick={() => setDarkMode(prev => !prev)}
            className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all text-slate-700 dark:text-slate-300 cursor-pointer shrink-0"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="w-5 h-5 text-amber-500 fill-amber-500" /> : <Moon className="w-5 h-5 text-slate-700 fill-slate-200" />}
          </button>
          
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-1.5 hover:bg-slate-100 rounded-xl transition-all text-slate-700 cursor-pointer shrink-0"
            aria-label="Menu"
          >
            <Menu className="w-5.5 h-5.5" />
          </button>
        </div>
      </header>
      {/* Mobile Drawer Navigation (Hamburger Menu) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-40 md:hidden"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 27, stiffness: 220 }}
              className="fixed right-0 top-0 bottom-0 w-[290px] max-w-[85vw] bg-white z-50 shadow-2xl flex flex-col md:hidden overflow-hidden"
            >
              {/* Top Drawer Header */}
              <div className="p-4 border-b border-slate-100 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg uppercase shrink-0">EE</div>
                  <span className="font-black text-slate-800 text-lg">EXCI<span className="text-blue-600">Express</span></span>
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 hover:bg-slate-100 rounded-xl text-slate-500 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Language Selector Inside Mobile Menu */}
              <div className="px-4 py-3.5 bg-slate-50 border-b border-slate-100 space-y-2 shrink-0">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">
                  {lang === 'es' ? 'Seleccionar idioma' : 'Select Language'}
                </p>
                <div className="grid grid-cols-2 gap-1 bg-slate-200/80 p-0.5 rounded-xl">
                  {(['en', 'es'] as Language[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setIsMobileMenuOpen(false); }}
                      className={`py-2 text-xs font-black rounded-lg transition-all uppercase tracking-wider text-center cursor-pointer ${
                        lang === l 
                          ? 'bg-blue-600 text-white shadow-sm font-extrabold' 
                          : 'text-slate-600 hover:bg-slate-100/55'
                      }`}
                    >
                      {l === 'en' ? 'EN' : 'ES'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Student Account Status Inside Mobile Menu */}
              <div className="px-4 py-3 bg-slate-50 border-b border-slate-100 space-y-2 shrink-0">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">
                    {lang === 'es' ? 'Cuenta de Alumno' : 'Student Account'}
                  </p>
                  {currentEmail && (
                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider ${
                      isEnrolled ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {isEnrolled ? (lang === 'es' ? 'Inscrito' : 'Enrolled') : (lang === 'es' ? 'No Inscrito' : 'Not Enrolled')}
                    </span>
                  )}
                </div>
                {currentEmail ? (
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-xs font-bold text-slate-800 truncate">{currentEmail}</p>
                    <button
                      onClick={() => { setIsAuthModalOpen(true); setIsMobileMenuOpen(false); }}
                      className="text-xs text-blue-600 font-bold hover:underline shrink-0"
                    >
                      {lang === 'es' ? 'Detalles' : 'Details'}
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => { setIsAuthModalOpen(true); setIsMobileMenuOpen(false); }}
                    className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <LogIn className="w-3.5 h-3.5" />
                    <span>{lang === 'es' ? 'Iniciar Sesión' : 'Sign In'}</span>
                  </button>
                )}
              </div>

              {/* Navigation Items */}
              <div className="flex-1 p-4 space-y-1 overflow-y-auto">
                {/* Dashboard */}
                <button
                  onClick={() => { setView('dashboard'); setIsMobileMenuOpen(false); }}
                  className={`w-full relative flex items-center justify-center px-3 py-2.5 rounded-xl transition-all text-sm border font-medium cursor-pointer ${
                    view === 'dashboard'
                      ? 'bg-blue-50 text-blue-700 shadow-sm border-blue-100/60 font-semibold'
                      : 'text-slate-600 hover:bg-slate-50 border-transparent'
                  }`}
                >
                  <BarChart3 className={`absolute left-4 w-5 h-5 shrink-0 ${view === 'dashboard' ? 'text-blue-600' : 'text-slate-400'}`} />
                  <span className="w-full text-center px-6">{t.dashboard}</span>
                </button>

                {/* History */}
                <button
                  onClick={() => { setView('history'); setIsMobileMenuOpen(false); }}
                  className={`w-full relative flex items-center justify-center px-3 py-2.5 rounded-xl transition-all text-sm border font-medium cursor-pointer ${
                    view === 'history'
                      ? 'bg-blue-50 text-blue-700 shadow-sm border-blue-100/60 font-semibold'
                      : 'text-slate-600 hover:bg-slate-50 border-transparent'
                  }`}
                >
                  <History className={`absolute left-4 w-5 h-5 shrink-0 ${view === 'history' ? 'text-blue-600' : 'text-slate-400'}`} />
                  <span className="w-full text-center px-6">{t.gradeHistory}</span>
                  {!isEnrolled && (
                    <Lock className="absolute right-4 w-3.5 h-3.5 text-amber-500" />
                  )}
                </button>

                {/* Blog */}
                <button
                  onClick={() => { setView('blog'); setIsMobileMenuOpen(false); }}
                  className={`w-full relative flex items-center justify-center px-3 py-2.5 rounded-xl transition-all text-sm border font-medium cursor-pointer ${
                    view === 'blog'
                      ? 'bg-blue-50 text-blue-705 shadow-sm border-blue-100/60 font-semibold'
                      : 'text-slate-600 hover:bg-slate-50 border-transparent'
                  }`}
                >
                  <BookOpen className={`absolute left-4 w-5 h-5 shrink-0 ${view === 'blog' ? 'text-blue-600' : 'text-slate-400'}`} />
                  <span className="w-full text-center px-6">{t.adviceBlog}</span>
                </button>

                {/* Videos */}
                <button
                  onClick={() => { setView('videos'); setIsMobileMenuOpen(false); }}
                  className={`w-full relative flex items-center justify-center px-3 py-2.5 rounded-xl transition-all text-sm border font-medium cursor-pointer ${
                    view === 'videos'
                      ? 'bg-blue-50 text-blue-705 shadow-sm border-blue-100/60 font-semibold'
                      : 'text-slate-600 hover:bg-slate-50 border-transparent'
                  }`}
                >
                  <Video className={`absolute left-4 w-5 h-5 shrink-0 ${view === 'videos' ? 'text-blue-600' : 'text-slate-400'}`} />
                  <span className="w-full text-center px-6">{t.videoClases}</span>
                  {!isEnrolled && (
                    <Lock className="absolute right-4 w-3.5 h-3.5 text-amber-500" />
                  )}
                </button>

                {/* Vocabulary */}
                <button
                  onClick={() => { setView('vocabulary'); setIsMobileMenuOpen(false); }}
                  className={`w-full relative flex items-center justify-center px-3 py-2.5 rounded-xl transition-all text-sm border font-medium cursor-pointer ${
                    view === 'vocabulary'
                      ? 'bg-blue-50 text-blue-700 shadow-sm border-blue-100/60 font-semibold'
                      : 'text-slate-600 hover:bg-slate-50 border-transparent'
                  }`}
                >
                  <GraduationCap className={`absolute left-4 w-5 h-5 shrink-0 ${view === 'vocabulary' ? 'text-blue-600' : 'text-slate-400'}`} />
                  <span className="w-full text-center px-6">{t.vocabulary}</span>
                </button>

                {/* Quiz */}
                <button
                  onClick={() => { setView('quiz'); setIsMobileMenuOpen(false); }}
                  className={`w-full relative flex items-center justify-center px-3 py-2.5 rounded-xl transition-all text-sm border font-medium cursor-pointer ${
                    view === 'quiz'
                      ? 'bg-blue-50 text-blue-700 shadow-sm border-blue-100/60 font-semibold'
                      : 'text-slate-600 hover:bg-slate-50 border-transparent'
                  }`}
                >
                  <Brain className={`absolute left-4 w-5 h-5 shrink-0 ${view === 'quiz' ? 'text-blue-600' : 'text-slate-400'}`} />
                  <span className="w-full text-center px-6">{t.quiz}</span>
                </button>


                {/* Privacy */}
                <button
                  onClick={() => { setView('privacy'); setIsMobileMenuOpen(false); }}
                  className={`w-full relative flex items-center justify-center px-3 py-2.5 rounded-xl transition-all text-sm border font-medium cursor-pointer ${
                    view === 'privacy'
                      ? 'bg-blue-50 text-blue-700 shadow-sm border-blue-100/60 font-semibold'
                      : 'text-slate-600 hover:bg-slate-50 border-transparent'
                  }`}
                >
                  <ShieldCheck className={`absolute left-4 w-5 h-5 shrink-0 ${view === 'privacy' ? 'text-blue-600' : 'text-slate-400'}`} />
                  <span className="w-full text-center px-6">{t.privacyPolicy}</span>
                </button>
              </div>

              {/* Bottom Info Section */}
              <div className="p-4 border-t border-slate-100 bg-slate-50 space-y-3 shrink-0">
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">{lang === 'es' ? 'Promedio EXCI' : 'Avg EXCI'}</p>
                    <p className="text-base font-black text-slate-850 leading-none">{Math.round(avgBandScore)} <span className="text-xs font-normal text-slate-500">/ 100</span></p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{lang === 'es' ? 'Terminados' : 'Completed'}</span>
                    <div className="px-2.5 h-8 rounded-full border-2 border-white ring-1 ring-slate-100 flex items-center justify-center bg-blue-50 text-blue-600 font-extrabold text-[10px] shadow-sm shrink-0">
                      {uniqueCompletedCount}/480
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-slate-900 rounded-xl text-white shadow-md relative overflow-hidden">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="relative">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                      <div className="absolute inset-0 w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></div>
                    </div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-emerald-400 leading-none">Live Status</p>
                  </div>
                  <p className="text-sm font-black tracking-tight leading-none">{onlineApplicants.toLocaleString()}</p>
                  <p className="text-[7px] uppercase tracking-tighter opacity-65 leading-none mt-1">
                    {lang === 'es' ? 'Aplicantes de EXCI conectados' : 
                     'Applicants connected right now'}
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Sidebar Navigation */}
        <aside className="hidden md:flex w-64 bg-white border-r border-slate-200 flex-col p-6 shrink-0 justify-between overflow-y-auto gap-0">
          <div className="space-y-6">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-0 block">
              {lang === 'es' ? 'Menú Principal' : 'Main Menu'}
            </p>
            <div className="flex flex-col gap-1.5 flex-1 shrink-0">
              {/* Dashboard Link */}
              <button
                onClick={() => setView('dashboard')}
                className={`w-full relative flex items-center justify-center px-4 py-3 rounded-xl font-medium transition-all group shrink-0 border text-sm cursor-pointer ${
                  view === 'dashboard'
                    ? 'bg-blue-50 text-blue-700 shadow-sm border-blue-100'
                    : 'text-slate-600 hover:bg-slate-50 border-transparent'
                }`}
              >
                <BarChart3 className={`absolute left-4 w-5 h-5 shrink-0 ${view === 'dashboard' ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
                <span className="w-full text-center px-6 font-semibold leading-none">{t.dashboard}</span>
              </button>

              {/* History Link */}
              <button
                onClick={() => setView('history')}
                className={`w-full relative flex items-center justify-center px-4 py-3 rounded-xl font-medium transition-all group shrink-0 border text-sm cursor-pointer ${
                  view === 'history'
                    ? 'bg-blue-50 text-blue-700 shadow-sm border-blue-100'
                    : 'text-slate-600 hover:bg-slate-50 border-transparent'
                }`}
              >
                <History className={`absolute left-4 w-5 h-5 shrink-0 ${view === 'history' ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
                <span className="w-full text-center px-6 font-semibold leading-none">{t.gradeHistory}</span>
                {!isEnrolled && (
                  <Lock className="absolute right-4 w-3.5 h-3.5 text-amber-500" />
                )}
              </button>

              {/* Blog Link */}
              <button
                onClick={() => setView('blog')}
                className={`w-full relative flex items-center justify-center px-4 py-3 rounded-xl font-medium transition-all group shrink-0 border text-sm cursor-pointer ${
                  view === 'blog'
                    ? 'bg-blue-50 text-blue-750 shadow-sm border-blue-100'
                    : 'text-slate-600 hover:bg-slate-50 border-transparent'
                }`}
              >
                <BookOpen className={`absolute left-4 w-5 h-5 shrink-0 ${view === 'blog' ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
                <span className="w-full text-center px-6 font-semibold leading-none">{t.adviceBlog}</span>
              </button>

              {/* Videos Link */}
              <button
                onClick={() => setView('videos')}
                className={`w-full relative flex items-center justify-center px-4 py-3 rounded-xl font-medium transition-all group shrink-0 border text-sm cursor-pointer ${
                  view === 'videos'
                    ? 'bg-blue-50 text-blue-750 shadow-sm border-blue-100'
                    : 'text-slate-600 hover:bg-slate-50 border-transparent'
                }`}
              >
                <Video className={`absolute left-4 w-5 h-5 shrink-0 ${view === 'videos' ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
                <span className="w-full text-center px-6 font-semibold leading-none">{t.videoClases}</span>
                {!isEnrolled && (
                  <Lock className="absolute right-4 w-3.5 h-3.5 text-amber-500" />
                )}
              </button>

              {/* Vocabulary Link */}
              <button
                onClick={() => setView('vocabulary')}
                className={`w-full relative flex items-center justify-center px-4 py-3 rounded-xl font-medium transition-all group shrink-0 border text-sm cursor-pointer ${
                  view === 'vocabulary'
                    ? 'bg-blue-50 text-blue-700 shadow-sm border-blue-100 font-semibold'
                    : 'text-slate-600 hover:bg-slate-50 border-transparent'
                }`}
              >
                <GraduationCap className={`absolute left-4 w-5 h-5 shrink-0 ${view === 'vocabulary' ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
                <span className="w-full text-center px-6 font-semibold leading-none">{t.vocabulary}</span>
              </button>

              {/* Quiz Link */}
              <button
                onClick={() => setView('quiz')}
                className={`w-full relative flex items-center justify-center px-4 py-3 rounded-xl font-medium transition-all group shrink-0 border text-sm cursor-pointer ${
                  view === 'quiz'
                    ? 'bg-blue-50 text-blue-700 shadow-sm border-blue-100'
                    : 'text-slate-600 hover:bg-slate-50 border-transparent'
                }`}
              >
                <Brain className={`absolute left-4 w-5 h-5 shrink-0 ${view === 'quiz' ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
                <span className="w-full text-center px-6 font-semibold leading-none">{t.quiz}</span>
              </button>


              {/* Privacy Link */}
              <button
                onClick={() => setView('privacy')}
                className={`w-full relative flex items-center justify-center px-4 py-3 rounded-xl font-medium transition-all group shrink-0 border text-sm cursor-pointer ${
                  view === 'privacy'
                    ? 'bg-blue-50 text-blue-700 shadow-sm border-blue-100'
                    : 'text-slate-600 hover:bg-slate-50 border-transparent'
                }`}
              >
                <ShieldCheck className={`absolute left-4 w-5 h-5 shrink-0 ${view === 'privacy' ? 'text-blue-600' : 'text-slate-400'}`} />
                <span className="w-full text-center px-6 font-semibold leading-none">{t.privacyPolicy}</span>
              </button>
            </div>
          </div>

          {/* Desktop Live Card - visible on md and up */}
          <div className="mt-auto pt-6 border-t border-slate-100">
            <div className="p-5 bg-slate-900 rounded-2xl text-white shadow-xl relative overflow-hidden group">
              <div className="flex items-center gap-2 mb-3">
                <div className="relative">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <div className="absolute inset-0 w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Live Status</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-black tracking-tight">{onlineApplicants.toLocaleString()}</p>
                <p className="text-[10px] uppercase tracking-tighter opacity-60 leading-tight">
                  {lang === 'es' ? 'Aplicantes de EXCI conectados' : 
                   'Applicants connected right now'}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex -space-x-2 overflow-hidden py-1">
                  <AnimatePresence mode="popLayout">
                    {activeAvatars.map((avatar, i) => (
                      <motion.div 
                        key={`${avatar}-${i}`}
                        initial={{ opacity: 0, x: -10, scale: 0.5 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5, x: 10 }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        className="w-6 h-6 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[8px] font-bold shrink-0 shadow-lg"
                      >
                        {avatar}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  <motion.div 
                    layout
                    className="w-6 h-6 rounded-full border-2 border-slate-900 bg-blue-600 flex items-center justify-center text-[8px] font-bold z-10 shrink-0"
                  >
                    +
                  </motion.div>
                </div>
                <Globe className="w-4 h-4 text-slate-700 group-hover:text-blue-500 transition-colors" />
              </div>
            </div>
          </div>
        </aside>

        {/* Content View */}
        <section className="flex-1 overflow-y-auto p-4 md:p-8 md:block">
          <AnimatePresence mode="wait">
            {view === 'dashboard' && (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="max-w-5xl mx-auto space-y-6 md:space-y-10"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3 md:gap-4">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 tracking-tight uppercase italic">{t.dashboard}</h2>
                    <p className="text-slate-500 text-sm md:text-lg">{t.subtitle}</p>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <span className="px-4 py-1.5 bg-blue-600 text-white rounded-full text-xs font-black uppercase tracking-widest animate-pulse selection:bg-white">{lang === 'es' ? 'Meta EXCI: 100 Pts' : 'EXCI Target: 100 Pts'}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-8">
                  {/* Skill Summary Cards */}
                  {(['listening', 'reading', 'speaking', 'writing'] as Skill[]).map((skill) => (
                    <div 
                      key={skill}
                      onClick={() => { setSelectedSkill(skill); setView('practice-list'); }}
                      className="bg-white rounded-xl md:rounded-[32px] p-4 md:p-8 border border-slate-200 shadow-sm flex flex-col hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/5 transition-all cursor-pointer group"
                    >
                      <div className="flex justify-between items-start mb-3 md:mb-6">
                        <div className="p-2.5 md:p-4 bg-slate-50 rounded-lg md:rounded-2xl group-hover:bg-blue-50 transition-colors">
                          <div className="group-hover:text-blue-600 text-slate-400 transition-colors scale-100 md:scale-125">
                            {skillIcons[skill]}
                          </div>
                        </div>
                        <span className="px-2 py-0.5 md:px-3 md:py-1 bg-slate-100 text-slate-500 rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-widest">{skill}</span>
                      </div>
                      <h3 className="text-lg md:text-2xl font-black mb-1 md:mb-2 uppercase italic">{t[skill]}</h3>
                      <p className="text-[11px] md:text-sm text-slate-500 mb-3.5 md:mb-8 leading-relaxed">
                        {t[`${skill}Desc`] || "Systematic training across all levels. Focused on accuracy and speed."}
                      </p>
                      <div className="mt-auto space-y-2">
                        <div className="flex justify-between text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">
                          <span>Progress</span>
                          <span>{getSkillProgress(skill)}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${getSkillProgress(skill)}%` }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            className="h-full bg-blue-600"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Statistics Bar from Design */}
                <div className="min-h-24 h-auto md:h-24 bg-white border border-slate-200 rounded-[32px] flex flex-col md:flex-row items-center px-6 md:px-10 py-5 md:py-0 gap-4 md:gap-16 shadow-sm overflow-hidden relative">
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-blue-600"></div>
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="w-3 h-3 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
                    <p className="text-sm font-bold text-slate-800 uppercase tracking-wider">
                      {lang === 'es' ? 'Dominio del Curso' : 'Course Mastery'}: {courseMasteryProgress}%
                    </p>
                  </div>
                  <div className="w-full md:flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${courseMasteryProgress}%` }}
                      className="h-full bg-blue-600" 
                    />
                  </div>
                  <div className="flex justify-end w-full md:w-auto shrink-0 border-t border-slate-100 md:border-t-0 pt-3 md:pt-0">
                    <div className="text-center md:text-right">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                        {lang === 'es' ? 'Cursos Completados' : 'Courses Completed'}
                      </p>
                      <p className="text-lg font-black text-blue-600">{uniqueCompletedCount} <span className="text-sm font-normal text-slate-400">/ 480</span></p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {view === 'practice-list' && (
              <motion.div
                key="practice-list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8"
              >
                {/* Locked Notice Alert */}
                {lockedNotice && (
                  <div className="p-4 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 rounded-2xl text-xs text-amber-800 dark:text-amber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
                    <div className="flex items-center gap-2.5">
                      <Lock className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                      <p className="font-semibold leading-relaxed">{lockedNotice}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end">
                      {!isEnrolled && (
                        <button
                          onClick={() => setIsAuthModalOpen(true)}
                          className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer flex items-center gap-1.5 shadow-sm"
                        >
                          <LogIn className="w-3.5 h-3.5" />
                          <span>{lang === 'es' ? 'Iniciar Sesión' : 'Sign In'}</span>
                        </button>
                      )}
                      <button
                        onClick={() => setLockedNotice(null)}
                        className="text-amber-500 hover:text-amber-700 p-1 cursor-pointer shrink-0"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 border-b border-slate-200 dark:border-slate-800 pb-6 md:pb-8">
                  <div>
                    <h2 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white mb-2 tracking-tight uppercase italic flex items-center gap-4">
                      <span className="text-blue-600 scale-125 md:scale-150 shrink-0">{skillIcons[selectedSkill]}</span><span>{t[selectedSkill]}</span>
                    </h2>
                    <p className="text-slate-500 text-sm md:text-base">
                      {lang === 'es' ? 'Selecciona un nivel para comenzar tu sesión intensiva de entrenamiento.' : 'Select a level to start your intensive training session.'}
                    </p>
                    <div className="mt-2.5">
                      {isEnrolled ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider rounded-full border border-emerald-200 dark:border-emerald-900/50">
                          <Check className="w-3.5 h-3.5" />
                          {lang === 'es' ? 'Acceso Completo • Todas las lecciones desbloqueadas' : 'Full Access • All lessons unlocked'}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider rounded-full border border-amber-200 dark:border-amber-900/50">
                          <Lock className="w-3.5 h-3.5" />
                          {lang === 'es' ? '(Inicia sesión para desbloquear todo)' : '(Sign in to unlock all)'}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-1.5 sm:gap-2 bg-white dark:bg-[#111827] p-1.5 rounded-[20px] border border-slate-200 dark:border-slate-800 shadow-sm overflow-x-auto shrink-0 w-full sm:w-auto">
                    {(['easy', 'medium', 'hard'] as Level[]).map((l) => (
                      <button
                        key={l}
                        onClick={() => setSelectedLevel(l)}
                        className={`px-4 sm:px-6 py-2 sm:py-2.5 text-xs font-black rounded-[14px] transition-all uppercase tracking-widest cursor-pointer whitespace-nowrap shrink-0 ${
                          selectedLevel === l ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-none' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
                        }`}
                      >
                        {t[l]}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                  {filteredPractices.length > 0 ? filteredPractices.map((p, idx) => {
                    const isLocked = isPracticeLocked(p);
                    return (
                      <motion.div
                        key={p.id}
                        onClick={() => handleStartPractice(p)}
                        whileHover={isLocked ? {} : { y: -5 }}
                        className={`rounded-[32px] p-8 border transition-all flex flex-col relative overflow-hidden ${
                          isLocked
                            ? 'bg-slate-50/80 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 opacity-60 cursor-not-allowed select-none'
                            : 'bg-white dark:bg-[#111827] border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-none hover:border-blue-400 transition-all cursor-pointer group'
                        }`}
                      >
                        <div className="absolute top-0 right-0 p-4 opacity-5 font-mono text-6xl font-black">
                          {String(idx + 1).padStart(2, '0')}
                        </div>

                        <div className="flex items-center gap-2 mb-6 flex-wrap">
                          <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                            selectedLevel === 'easy' ? 'bg-emerald-50 text-emerald-600' : 
                            selectedLevel === 'medium' ? 'bg-blue-50 text-blue-600' : 'bg-red-50 text-red-600'
                          }`}>
                            {t[selectedLevel]}
                          </span>
                          {isLocked ? (
                            <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200/80 dark:border-amber-900/50 flex items-center gap-1">
                              <Lock className="w-3 h-3" />
                              {lang === 'es' ? 'Bloqueada' : 'Locked'}
                            </span>
                          ) : (
                            <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-900/50 flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" />
                              {lang === 'es' ? 'Disponible' : 'Available'}
                            </span>
                          )}
                        </div>

                        <h3 className={`text-2xl font-black mb-3 leading-tight uppercase pr-8 transition-colors ${
                          isLocked ? 'text-slate-600 dark:text-slate-400' : 'text-slate-900 dark:text-white group-hover:text-blue-600'
                        }`}>
                          {p.title}
                        </h3>
                        <p className="text-slate-500 text-sm mb-10 line-clamp-2 leading-relaxed">
                          {p.description}
                        </p>
                        
                        <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                            {t.practice} {String(idx + 1).padStart(2, '0')}
                          </span>
                          {isLocked ? (
                            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                              <Lock className="w-4 h-4" />
                            </div>
                          ) : (
                            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                              <ChevronRight className="w-5 h-5" />
                            </div>
                          )}
                        </div>
                      </motion.div>
                    );
                  }) : (
                    <div className="col-span-full py-32 text-center flex flex-col items-center gap-6">
                      <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-slate-300">
                        <AlertCircle className="w-10 h-10" />
                      </div>
                      <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">{t.noPractices}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {view === 'practice-session' && currentPractice && (
              <motion.div
                key="practice-session"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-6 lg:gap-8 w-full pb-12"
              >
                <div className="bg-white p-6 md:p-8 rounded-[32px] border border-slate-200 shadow-sm flex flex-col relative w-full h-auto">
                  <div className={`absolute top-0 right-0 p-6 md:p-8 opacity-10 ${currentPractice.skill === 'listening' ? 'hidden md:block' : ''}`}>
                    {skillIcons[currentPractice.skill]}
                  </div>
                  <div className="mb-4 md:mb-6 flex items-center gap-3">
                    <button onClick={() => setView('practice-list')} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400">
                      <ArrowLeft className="w-6 h-6" />
                    </button>
                    <div>
                      <div className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-1">{t[currentPractice.level]} • {t[currentPractice.skill]}</div>
                      <h2 className="text-2xl md:text-3xl font-black tracking-tight uppercase italic">{currentPractice.title}</h2>
                    </div>
                  </div>

                  {currentPractice.skill === 'listening' && (
                    <div className="md:hidden mb-6 flex flex-col items-center justify-center py-3 px-8 bg-slate-50/50 rounded-[24px] border border-slate-100 w-fit mx-auto">
                      <button
                        onClick={playListeningAudio}
                        className="group flex flex-col items-center justify-center gap-2 cursor-pointer select-none focus:outline-none"
                      >
                        {/* Elegant Circular Audio Button */}
                        <div className={`relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                          isAudioPlaying
                            ? 'bg-blue-600 text-white shadow-blue-100 shadow-lg scale-105'
                            : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}>
                          <Headphones className={`w-5 h-5 relative z-10 transition-transform duration-300 ${isAudioPlaying ? 'scale-110' : 'group-hover:scale-110'}`} />
                          
                          {isAudioPlaying && (
                            <>
                              <motion.div 
                                animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="absolute inset-0 bg-blue-400/20 rounded-full z-0"
                              />
                              <motion.div 
                                animate={{ scale: [1, 1.8, 1], opacity: [0.15, 0, 0.15] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                                className="absolute inset-0 bg-blue-400/20 rounded-full z-0"
                              />
                            </>
                          )}
                        </div>

                        {/* Audio Status Descriptions */}
                        <div className="text-center">
                          <p className={`text-[8px] font-black uppercase tracking-[0.2em] mb-0.5 transition-colors duration-300 ${isAudioPlaying ? 'text-blue-600' : 'text-slate-400'}`}>
                            {isAudioPlaying ? 'Now Playing' : 'Listening Track'}
                          </p>
                          <p className="text-[10px] font-black text-slate-800 tracking-wide uppercase">
                            {isAudioPlaying ? t.stopAudio : t.playAudio}
                          </p>
                        </div>
                      </button>
                    </div>
                  )}
                  <div className="text-slate-700 leading-relaxed text-base md:text-lg lg:text-xl font-serif italic whitespace-pre-wrap selection:bg-blue-100">
                    {currentPractice.skill === 'listening' ? (
                      <div className="hidden md:flex h-full flex-col items-center justify-center space-y-8 bg-slate-50 rounded-[32px] border border-dashed border-slate-200 p-12">
                        <div className={`w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl ${isAudioPlaying ? 'shadow-red-100 text-red-600' : 'shadow-blue-100 text-blue-600'} relative transition-all duration-300`}>
                           {isAudioPlaying ? <Volume2 className="w-10 h-10" /> : <Headphones className="w-10 h-10" />}
                           {isAudioPlaying ? (
                             <>
                               <motion.div 
                                 animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
                                 transition={{ duration: 1.5, repeat: Infinity }}
                                 className="absolute inset-0 bg-red-100 rounded-full"
                               />
                               <motion.div 
                                 animate={{ scale: [1, 2.2, 1], opacity: [0.2, 0, 0.2] }}
                                 transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                                 className="absolute inset-0 bg-red-100 rounded-full"
                               />
                             </>
                           ) : (
                             <motion.div 
                               animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                               transition={{ duration: 2.5, repeat: Infinity }}
                               className="absolute inset-0 bg-blue-100 rounded-full"
                             />
                           )}
                        </div>

                        <button 
                           onClick={playListeningAudio}
                           className={`px-8 py-3 rounded-full font-black uppercase text-xs tracking-widest transition-all shadow-lg ${
                             isAudioPlaying 
                               ? 'bg-red-500 text-white hover:bg-red-600 shadow-red-200' 
                               : 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200'
                           }`}
                        >
                          {isAudioPlaying ? t.stopAudio : t.playAudio}
                        </button>
                      </div>
                    ) : currentPractice.content}
                  </div>
                </div>

                <div className="bg-white p-6 md:p-8 rounded-[32px] border border-slate-200 shadow-sm flex flex-col w-full h-auto">
                  <h3 className="font-black text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-4 md:mb-6">{t.practice} Evaluation Area</h3>

                  <div className="space-y-6 md:space-y-8">
                    {(currentPractice.skill === 'reading' || currentPractice.skill === 'listening') && currentPractice.questions?.map((q, qIdx) => (
                      <div key={q.id} className="space-y-4 md:space-y-6">
                        <div className="flex gap-4">
                          <span className="font-mono text-xs w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 font-bold">0{qIdx + 1}</span>
                          <p className="font-bold text-lg md:text-xl leading-snug">{q.text}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-4 md:pl-12">
                          {q.options.map(opt => (
                            <button
                              key={opt}
                              onClick={() => setUserAnswers(prev => ({ ...prev, [q.id]: opt }))}
                              className={`p-4 md:p-5 text-left rounded-[16px] md:rounded-[20px] border-2 transition-all text-sm font-semibold ${
                                userAnswers[q.id] === opt 
                                ? 'border-blue-600 bg-blue-50 text-blue-900 shadow-sm' 
                                : 'border-slate-50 hover:border-slate-200 bg-slate-50/50 text-slate-600'
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}

                    {(currentPractice.skill === 'writing' || currentPractice.skill === 'speaking') && (
                      <div className="h-full flex flex-col gap-4">
                        <div className="p-4 md:p-5 bg-blue-50 rounded-[20px] border border-blue-100 flex gap-3 md:gap-4">
                          <AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-blue-600 shrink-0" />
                          <p className="text-blue-900 text-xs md:text-sm font-medium leading-relaxed italic">
                            {currentPractice.skill === 'speaking' 
                              ? t.speakingSimulation 
                              : t.writingSimulation}
                          </p>
                        </div>

                        {currentPractice.skill === 'speaking' && (
                          <div className="bg-slate-50 p-4 md:p-6 rounded-[24px] border border-slate-100 shadow-inner flex flex-col items-center gap-4">
                            {micError && (
                              <div className="w-full p-4 bg-red-50 border border-red-100 rounded-2xl flex flex-col gap-3 text-red-700 text-xs font-bold">
                                <div className="flex items-center gap-3">
                                  <AlertCircle className="w-4 h-4" />
                                  <span>
                                    {micError === 'permission-denied' 
                                      ? t.micPermission 
                                      : micError === 'network-error' 
                                        ? t.micNetworkError 
                                        : t.micError}
                                  </span>
                                  <button onClick={() => setMicError(null)} className="ml-auto opacity-50 hover:opacity-100">
                                    <X className="w-4 h-4" />
                                  </button>
                                </div>
                                <div className="flex gap-2">
                                  <button 
                                    onClick={() => {
                                      setMicError(null);
                                      handleStartRecording();
                                    }}
                                    className="bg-red-100 px-3 py-1.5 rounded-lg hover:bg-red-200 transition-colors uppercase tracking-wider"
                                  >
                                    Retry
                                  </button>
                                </div>
                              </div>
                            )}
                            <div className="flex items-center gap-4">
                              <AnimatePresence>
                                {isRecording && (
                                  <motion.div 
                                    className="flex items-end gap-1 h-6 px-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                  >
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                                      <motion.div
                                        key={i}
                                        animate={{ height: [10, Math.random() * 24, 10] }}
                                        transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                                        className="w-1 bg-red-500 rounded-full"
                                      />
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                              <div className={`font-mono text-lg md:text-xl font-bold ${isRecording ? 'text-red-500' : 'text-slate-400'}`}>
                                {Math.floor(recordingTime / 60)}:{(recordingTime % 60).toString().padStart(2, '0')}
                              </div>
                            </div>

                            <div className="flex items-center gap-4 md:gap-6">
                              <button
                                onClick={handleRestartRecording}
                                className="p-3 md:p-4 rounded-full bg-slate-200 text-slate-600 hover:bg-slate-300 transition-all"
                                title={t.restartRecording}
                              >
                                <RotateCcw className="w-5 h-5 md:w-6 md:h-6 -scale-x-100" />
                              </button>

                              <button
                                onClick={isRecording ? handleStopRecording : handleStartRecording}
                                className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all shadow-xl ${
                                  isRecording 
                                  ? 'bg-red-500 scale-105 shadow-red-200' 
                                  : 'bg-slate-900 shadow-slate-200'
                                }`}
                              >
                                {isRecording ? <div className="w-5 h-5 bg-white rounded-sm" /> : <Mic2 className="w-5 h-5 md:w-6 md:h-6 text-white" />}
                              </button>

                              <div className="w-10 md:w-14" />
                            </div>
                            
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                              {isRecording ? t.stopRecording : t.startRecording}
                            </p>
                          </div>
                        )}

                        <textarea
                          value={writingAnswer}
                          onChange={(e) => setWritingAnswer(e.target.value)}
                          placeholder={currentPractice.skill === 'speaking' ? "Transcript will appear here automatically as you speak..." : "Your official response here..."}
                          readOnly={currentPractice.skill === 'speaking' && isRecording}
                          className="flex-1 p-4 md:p-6 rounded-[24px] bg-slate-50 border border-slate-100 focus:outline-none focus:border-blue-400 focus:bg-white transition-all resize-none text-sm md:text-base leading-relaxed text-slate-800 placeholder:text-slate-300 shadow-inner min-h-[220px]"
                        />
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 px-4 select-none">
                           <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                             <PenTool className="w-3 h-3" /> Word Count: <span className="text-slate-800 dark:text-slate-200">{writingAnswer.split(/\s+/).filter(x => x.length > 0).length}</span>
                           </div>
                           <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Focus Level: {currentPractice.level}</div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 md:mt-6">
                    <button 
                      onClick={handleSubmitPractice}
                      disabled={writingAnswer.trim().length === 0 && Object.keys(userAnswers).length === 0}
                      className="w-full bg-blue-600 text-white rounded-[16px] py-4 md:py-5 font-black uppercase tracking-[0.2em] text-xs md:text-sm flex items-center justify-center gap-2 hover:bg-blue-700 hover:-translate-y-0.5 transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-xl shadow-blue-600/20"
                    >
                      {t.submit} Exam Results <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {view === 'results' && (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="max-w-4xl mx-auto space-y-10 py-6"
              >
                {isEvaluating ? (
                  <div className="bg-white p-8 md:p-16 lg:p-20 rounded-[32px] md:rounded-[40px] border border-slate-200 text-center space-y-6 md:space-y-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100">
                      <motion.div 
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="w-full h-full bg-blue-600"
                      />
                    </div>
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                      <Loader2 className="w-16 h-16 md:w-24 md:h-24 text-blue-600 animate-spin relative z-10" />
                    </div>
                    <h2 className="text-2xl md:text-4xl font-black tracking-tight uppercase italic">{t.loadingAI}</h2>
                    <p className="text-slate-500 max-w-sm mx-auto text-sm md:text-lg leading-relaxed">Analyzing linguistic patterns, vocabulary complexity, and EXCI evaluation criteria...</p>
                  </div>
                ) : result && (
                  <div className="space-y-6 md:space-y-10">
                    <div className="bg-white p-4 md:p-10 lg:p-12 rounded-2xl md:rounded-[40px] border border-slate-200 shadow-xl relative overflow-hidden">
                      <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-center relative z-10">
                        <div className="text-center space-y-4 shrink-0 mx-auto md:mx-0">
                          <div className="relative w-44 h-44 md:w-56 md:h-56 mx-auto">
                            <svg className="w-full h-full -rotate-90" viewBox="0 0 224 224">
                              <circle cx="112" cy="112" r="102" stroke="currentColor" strokeWidth="14" fill="transparent" className="text-slate-100" />
                              <motion.circle 
                                cx="112" cy="112" r="102" stroke="currentColor" strokeWidth="14" fill="transparent" 
                                initial={{ strokeDashoffset: 641 }}
                                animate={{ strokeDashoffset: 641 - (641 * result.band) / 100 }}
                                strokeDasharray={641}
                                strokeLinecap="round"
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="text-blue-600" 
                              />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center select-none">
                              <span className="text-5xl md:text-7xl font-black text-slate-900 leading-none">{result.band}</span>
                              <span className="text-[9px] md:text-[10px] uppercase font-black text-slate-400 tracking-[0.2em] mt-2 text-center">
                                {lang === 'es' ? 'Puntos EXCI' : 'EXCI Points'}
                              </span>
                            </div>
                          </div>
                          <div className="inline-block bg-slate-900 text-white px-5 py-2 rounded-full font-black text-[10px] md:text-[12px] uppercase tracking-widest shadow-lg">
                            CEFR: {result.cefr}
                          </div>
                        </div>

                        <div className="flex-1 w-full space-y-4 md:space-y-6">
                          <div className="space-y-1 text-center md:text-left">
                            <p className="text-[9px] md:text-[10px] font-black text-blue-600 uppercase tracking-widest">Examiner Feedback</p>
                            <h2 className="text-xl md:text-4xl font-black tracking-tight uppercase italic leading-tight">Professional Assessment</h2>
                          </div>
                          <div className="p-4 md:p-8 bg-slate-50 rounded-xl md:rounded-[32px] border border-slate-100 relative min-h-[100px] md:min-h-[140px] flex items-center">
                             <div className="absolute -top-3 left-4 md:left-8 bg-blue-600 text-white text-[9px] md:text-[10px] font-bold uppercase px-2.5 py-0.5 md:px-3 md:py-1 rounded-full whitespace-nowrap">Official EXCI Standards</div>
                             {isTranslating ? (
                               <div className="w-full flex items-center gap-2 md:gap-3 text-slate-500 animate-pulse py-3 font-sans text-xs md:font-serif italic md:text-lg">
                                 <Loader2 className="w-4 h-4 md:w-5 md:h-5 text-blue-600 animate-spin" />
                                 <span>{lang === 'es' ? 'Traduciendo retroalimentación...' : 'Translating examiner feedback...'}</span>
                               </div>
                             ) : (
                               <p className="text-slate-800 text-[13px] md:text-xl font-sans md:font-serif italic leading-relaxed">"{result.feedback}"</p>
                             )}
                          </div>
                        </div>
                      </div>
                      <Trophy className="absolute right-[-60px] bottom-[-60px] w-96 h-96 text-slate-50 opacity-10 -rotate-12 pointer-events-none" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                      <div className="bg-emerald-50/50 p-4 md:p-8 rounded-xl md:rounded-[32px] border border-emerald-100 space-y-3 md:space-y-6">
                        <h3 className="text-emerald-700 font-black uppercase tracking-[0.3em] text-[9px] md:text-[10px] flex items-center gap-2.5 md:gap-3">
                          <div className="w-5 h-5 md:w-6 md:h-6 bg-emerald-100 rounded-md md:rounded-lg flex items-center justify-center"><CheckCircle2 className="w-2.5 h-2.5 md:w-3 md:h-3" /></div> {t.strengths}
                        </h3>
                        {isTranslating ? (
                          <div className="flex items-center gap-2.5 text-slate-400 animate-pulse py-3 font-sans text-xs italic">
                            <Loader2 className="w-3.5 h-3.5 text-emerald-500 animate-spin" />
                            <span>{lang === 'es' ? 'Traduciendo...' : 'Translating...'}</span>
                          </div>
                        ) : (
                          <ul className="space-y-2.5 md:space-y-4">
                            {result.strengths.map(s => (
                              <li key={s} className="flex gap-2 md:gap-4 text-emerald-950 font-medium md:font-bold text-[13px] md:text-lg leading-snug">
                                <span className="text-emerald-500 shrink-0 font-bold select-none">→</span> {s}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <div className="bg-amber-50/50 p-4 md:p-8 rounded-xl md:rounded-[32px] border border-amber-100 space-y-3 md:space-y-6">
                        <h3 className="text-amber-700 font-black uppercase tracking-[0.3em] text-[9px] md:text-[10px] flex items-center gap-2.5 md:gap-3">
                          <div className="w-5 h-5 md:w-6 md:h-6 bg-amber-100 rounded-md md:rounded-lg flex items-center justify-center"><AlertCircle className="w-2.5 h-2.5 md:w-3 md:h-3" /></div> {t.improvements}
                        </h3>
                        {isTranslating ? (
                          <div className="flex items-center gap-2.5 text-slate-400 animate-pulse py-3 font-sans text-xs italic">
                            <Loader2 className="w-3.5 h-3.5 text-amber-500 animate-spin" />
                            <span>{lang === 'es' ? 'Traduciendo...' : 'Translating...'}</span>
                          </div>
                        ) : (
                          <ul className="space-y-2.5 md:space-y-4">
                            {result.improvements.map(i => (
                              <li key={i} className="flex gap-2 md:gap-4 text-amber-950 font-medium md:font-bold text-[13px] md:text-lg leading-snug">
                                <span className="text-amber-600 shrink-0 font-bold select-none">→</span> {i}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>

                    {!isEnrolled && (
                      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-amber-800 dark:text-amber-200 shadow-xs">
                        <div className="flex items-center gap-2.5">
                          <Lock className="w-4 h-4 text-amber-600 shrink-0" />
                          <p className="font-semibold leading-relaxed">
                            {lang === 'es'
                              ? 'Esta calificación no se guardó en el historial. El historial se guarda exclusivamente para alumnos inscritos.'
                              : 'This grade was not saved to your history. History is saved exclusively for enrolled students.'}
                          </p>
                        </div>
                        <button
                          onClick={() => setIsAuthModalOpen(true)}
                          className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer shrink-0"
                        >
                          {lang === 'es' ? 'Iniciar Sesión' : 'Sign In'}
                        </button>
                      </div>
                    )}

                    <button 
                      onClick={() => setView('dashboard')}
                      className="w-full bg-slate-900 text-white rounded-[16px] md:rounded-[24px] py-4 md:py-6 font-black uppercase tracking-[0.3em] text-[10px] md:text-sm hover:bg-slate-800 hover:-translate-y-0.5 transition-all shadow-2xl shadow-slate-900/10"
                    >
                      Return to Command Center
                    </button>
                  </div>
                )}
              </motion.div>
            )}

            {view === 'history' && (
              <motion.div
                key="history"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <HistoryView 
                  lang={lang} 
                  historyList={historyList} 
                  onClearHistory={() => {
                    setHistoryList([]);
                    setStats({ completed: 0, avgBand: 0 });
                    setResult(null);
                    setWritingAnswer('');
                    setUserAnswers({});
                    localStorage.removeItem('writingAnswer');
                    localStorage.removeItem('userAnswers');
                    if (isEnrolled && currentEmail) {
                      localStorage.removeItem(`evaluationHistory_${currentEmail}`);
                      localStorage.removeItem(`stats_${currentEmail}`);
                    }
                    localStorage.removeItem('evaluationHistory');
                    localStorage.removeItem('stats');
                  }} 
                  onNavigateToDashboard={() => setView('dashboard')} 
                  isEnrolled={isEnrolled}
                  userEmail={currentEmail}
                  onRequestSignIn={() => setIsAuthModalOpen(true)}
                />
              </motion.div>
            )}

            {view === 'blog' && (
              <motion.div
                key="blog"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <BlogView lang={lang} />
              </motion.div>
            )}

            {view === 'videos' && (
              <motion.div
                key="videos"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <VideosView 
                  lang={lang} 
                  onNavigateToDashboard={() => setView('dashboard')}
                  isEnrolled={isEnrolled}
                  userEmail={currentEmail}
                  onRequestSignIn={() => setIsAuthModalOpen(true)}
                />
              </motion.div>
            )}

            {view === 'privacy' && (
              <motion.div
                key="privacy"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <PrivacyView lang={lang} />
              </motion.div>
            )}

            {view === 'vocabulary' && (
              <motion.div
                key="vocabulary"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <VocabularyView lang={lang} />
              </motion.div>
            )}

            {view === 'quiz' && (
              <motion.div
                key="quiz"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <QuizView 
                  lang={lang} 
                  isEnrolled={isEnrolled}
                  userEmail={currentEmail}
                  onRequestSignIn={() => setIsAuthModalOpen(true)}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>

      {/* Persistent Status Bar (Footer replacement) */}
      <footer className="flex h-14 bg-white dark:bg-[#111827] border-t border-slate-200 dark:border-slate-800 px-8 items-center justify-end text-[10px] font-black uppercase tracking-widest text-slate-400 shrink-0">
        <span className="text-slate-400">© 2026 EXCIExpress</span>
      </footer>

      {/* Student Authentication & Google Sheet Enrollment Modal */}
      <AnimatePresence>
        {isAuthModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAuthModalOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-lg bg-white dark:bg-[#111827] rounded-[32px] p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 z-10 max-h-[90vh] overflow-y-auto space-y-6"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${
                    isEnrolled ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600' : 'bg-blue-100 dark:bg-blue-950/60 text-blue-600'
                  }`}>
                    {isEnrolled ? <UserCheck className="w-6 h-6" /> : <User className="w-6 h-6" />}
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-slate-900 dark:text-white leading-tight">
                      {lang === 'es' ? 'Iniciar Sesión' : 'Sign In'}
                    </h2>
                  </div>
                </div>
                <button
                  onClick={() => setIsAuthModalOpen(false)}
                  className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Success / Error alerts */}
              {authSuccess && (
                <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-2xl text-xs text-emerald-800 dark:text-emerald-200 flex items-center justify-between gap-2">
                  <span className="font-semibold">{authSuccess}</span>
                  <button onClick={() => setAuthSuccess(null)} className="text-emerald-600 p-0.5 cursor-pointer">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
              {authError && (
                <div className="p-3 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 rounded-2xl text-xs text-red-800 dark:text-red-200 flex items-center justify-between gap-2">
                  <span className="font-semibold">{authError}</span>
                  <button onClick={() => setAuthError(null)} className="text-red-600 p-0.5 cursor-pointer">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {/* Status Section */}
              <div className={`p-4 rounded-2xl border ${
                isEnrolled 
                  ? 'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-100'
                  : currentEmail
                    ? 'bg-amber-50/70 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-100'
                    : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200'
              }`}>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                      {lang === 'es' ? 'Estado actual' : 'Current Status'}
                    </span>
                  </div>
                  {isEnrolled ? (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 flex items-center gap-1">
                      <Check className="w-3 h-3" />
                      {lang === 'es' ? 'Inscrito • Desbloqueado' : 'Enrolled • Unlocked'}
                    </span>
                  ) : currentEmail ? (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300 border border-amber-200 flex items-center gap-1">
                      <Lock className="w-3 h-3" />
                      {lang === 'es' ? 'No Inscrito' : 'Not Enrolled'}
                    </span>
                  ) : (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {lang === 'es' ? 'Sin iniciar sesión' : 'Guest'}
                    </span>
                  )}
                </div>

                {currentEmail ? (
                  <div className="space-y-1">
                    <p className="text-sm font-bold truncate flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 opacity-70" />
                      <span>{currentEmail}</span>
                    </p>
                    <p className="text-xs leading-relaxed opacity-90">
                      {isEnrolled
                        ? (lang === 'es'
                            ? '¡Felicidades! Tu correo está registrado como alumno inscrito. Tienes acceso ilimitado a todas las lecciones del panel y a todos los niveles del Quiz.'
                            : 'Congratulations! Your email is registered as an enrolled student. You have full access to all lessons and Quiz levels.')
                        : (lang === 'es'
                            ? 'Este correo no se encuentra en la lista de alumnos inscritos. Por esta razón, las lecciones 4+ y los niveles A2-C2 del Quiz permanecen bloqueados.'
                            : 'This email is not found on the enrolled student list. Lessons 4+ and Quiz levels A2-C2 remain locked.')
                      }
                    </p>
                  </div>
                ) : (
                  <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                    {lang === 'es'
                      ? 'Desbloquea el acceso completo, ingresando tu correo inscrito para verificar tu cuenta y desbloquear todas las lecciones y todos los niveles.'
                      : 'Unlock full access by entering your registered email to verify your account and unlock all lessons and all levels.'}
                  </p>
                )}
              </div>

              {/* Manual Email Verification - Only option */}
              <div className="space-y-3">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                  {lang === 'es' ? 'Ingresa tu correo inscrito:' : 'Enter your registered email:'}
                </label>
                <form onSubmit={handleSaveManualEmail} className="flex gap-2">
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      required
                      value={manualEmailInput}
                      onChange={(e) => setManualEmailInput(e.target.value)}
                      placeholder={currentEmail || (lang === 'es' ? 'tu_correo@ejemplo.com' : 'your_email@example.com')}
                      className="w-full pl-10 pr-3.5 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSyncingEmails}
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shrink-0 shadow-sm flex items-center gap-1.5"
                  >
                    {isSyncingEmails && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                    <span>{lang === 'es' ? 'Verificar' : 'Verify'}</span>
                  </button>
                </form>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 text-center pt-0.5 leading-relaxed">
                  {lang === 'es' ? (
                    <>
                      o inscríbete enviando un correo a{' '}
                      <a
                        href="mailto:swiftlenguagesskills@gmail.com"
                        className="font-bold text-blue-600 dark:text-blue-400 hover:underline transition-colors"
                      >
                        swiftlenguagesskills@gmail.com
                      </a>
                    </>
                  ) : (
                    <>
                      or enroll by sending an email to{' '}
                      <a
                        href="mailto:swiftlenguagesskills@gmail.com"
                        className="font-bold text-blue-600 dark:text-blue-400 hover:underline transition-colors"
                      >
                        swiftlenguagesskills@gmail.com
                      </a>
                    </>
                  )}
                </p>
              </div>

              {/* Modal footer (only Cerrar sesión if email is set, no 'Listo' button) */}
              {currentEmail && (
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-start items-center">
                  <button
                    onClick={handleSignOut}
                    className="text-xs text-red-500 hover:text-red-700 font-bold transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>{lang === 'es' ? 'Cerrar sesión' : 'Sign Out'}</span>
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

