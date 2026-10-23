/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { type User } from 'firebase/auth';
import { Language, VideoClass } from '../types';
import { DEFAULT_VIDEO_CLASSES } from '../data/defaultVideos';
import { 
  fetchVideosFromGoogleSheet, 
  extractSpreadsheetId, 
  extractSpreadsheetInfo,
  listUserSpreadsheets, 
  createTemplateSpreadsheet 
} from '../services/googleSheetsService';
import { 
  googleSignIn, 
  logout, 
  initAuth 
} from '../services/googleAuthService';
import { 
  Play, 
  CheckCircle2, 
  ArrowLeft, 
  Video, 
  ChevronRight, 
  Info,
  FileSpreadsheet,
  RefreshCw,
  Plus,
  AlertCircle,
  X,
  LogOut,
  Loader2,
  Check,
  Lock,
  LogIn
} from 'lucide-react';

interface VideosViewProps {
  lang: Language;
  onNavigateToDashboard: () => void;
  isEnrolled?: boolean;
  userEmail?: string | null;
  onRequestSignIn?: () => void;
}

/**
 * Splits a video title or extracts modulo and leccion to display
 * the leccion text and numbers directly underneath the modulo without a hyphen.
 */
function extractModuloAndLeccion(video: VideoClass, lang: Language): { modulo?: string; leccion?: string; fullTitle: string } {
  const fullTitle = (lang === 'es' ? video.titleEs : video.titleEn) || video.titleEs || '';
  
  if (video.modulo && video.leccion) {
    return { 
      modulo: video.modulo.replace(/[\-–—:]+$/, '').trim(), 
      leccion: video.leccion.replace(/^[\-–—:]+/, '').trim(), 
      fullTitle 
    };
  }

  if (fullTitle.includes('\n')) {
    const parts = fullTitle.split('\n');
    return {
      modulo: parts[0]?.replace(/[\-–—:]+$/, '').trim(),
      leccion: parts.slice(1).join(' ').replace(/^[\-–—:]+/, '').trim(),
      fullTitle
    };
  }

  // Matches strings like "MODULO 1 - LECCIONES 1 - 3" or "Modulo 1 - Leccion 1" or "Módulo 1: Lecciones 1-3"
  const match = fullTitle.match(/^(.*?m[oó]dulo[^\-–—:\n]*?)\s*(?:[\-–—:]|\s+)\s*(lecci[oó]n(?:es)?[^]*)$/i);
  if (match) {
    return {
      modulo: match[1].replace(/[\-–—:]+$/, '').trim(),
      leccion: match[2].replace(/^[\-–—:]+/, '').trim(),
      fullTitle
    };
  }

  return { fullTitle };
}

/**
 * Validates that an array of video classes has legitimate 11-char YouTube IDs and real titles.
 */
function isCleanVideoList(list: any): list is VideoClass[] {
  if (!Array.isArray(list) || list.length === 0) return false;
  return list.every(
    v =>
      v &&
      typeof v.id === 'string' &&
      /^[a-zA-Z0-9_-]{11}$/.test(v.id) &&
      typeof v.titleEs === 'string' &&
      v.titleEs.length > 1 &&
      v.titleEs !== 'B' &&
      v.titleEs !== 'Título' &&
      v.titleEs !== 'Video ID / URL'
  );
}

export default function VideosView({ 
  lang, 
  onNavigateToDashboard,
  isEnrolled = false,
  userEmail = null,
  onRequestSignIn
}: VideosViewProps) {
  // Video classes state (defaults to built-in list, validates cache, then syncs with Google Sheet if configured)
  const [videoList, setVideoList] = useState<VideoClass[]>(() => {
    const cached = localStorage.getItem('exci_cached_videos');
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        if (isCleanVideoList(parsed)) {
          return parsed.map((v: VideoClass) => {
            const { modulo, leccion } = extractModuloAndLeccion(v, 'es');
            return {
              ...v,
              modulo: modulo || v.modulo,
              leccion: leccion || v.leccion,
              titleEs: modulo && leccion ? `${modulo}\n${leccion}` : v.titleEs,
              titleEn: modulo && leccion ? `${modulo}\n${leccion}` : v.titleEn,
              descriptionEs: v.descriptionEs === 'Lección estratégica audiovisual para el examen de inglés EXCI UANL.' ? '' : (v.descriptionEs || ''),
              descriptionEn: v.descriptionEn === 'Lección estratégica audiovisual para el examen de inglés EXCI UANL.' ? '' : (v.descriptionEn || ''),
            };
          });
        }
      } catch {
        // fallback
      }
    }
    return DEFAULT_VIDEO_CLASSES;
  });

  const [activeVideo, setActiveVideo] = useState<VideoClass>(() => videoList[0] || DEFAULT_VIDEO_CLASSES[0]);
  const [watchedVideos, setWatchedVideos] = useState<string[]>(() => {
    const saved = localStorage.getItem('watchedVideos');
    try {
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Google Sheets state
  const [activeSheetId, setActiveSheetId] = useState<string | null>(() => {
    return localStorage.getItem('exci_google_sheet_id');
  });
  const [activeSheetTitle, setActiveSheetTitle] = useState<string | null>(() => {
    return localStorage.getItem('exci_google_sheet_title');
  });
  const [isSheetModalOpen, setIsSheetModalOpen] = useState(false);
  const [inputSheetUrl, setInputSheetUrl] = useState(() => {
    const saved = localStorage.getItem('exci_google_sheet_id');
    if (saved && saved.startsWith('http')) return saved;
    if (saved) return `https://docs.google.com/spreadsheets/d/${saved}`;
    return '';
  });
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncError, setSyncError] = useState<string | null>(null);
  const [syncSuccess, setSyncSuccess] = useState<string | null>(null);

  // Google Auth & Drive state
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [driveFiles, setDriveFiles] = useState<Array<{ id: string; name: string }>>([]);
  const [isLoadingDrive, setIsLoadingDrive] = useState(false);
  const [isCreatingTemplate, setIsCreatingTemplate] = useState(false);

  // Initialize auth state
  useEffect(() => {
    const unsubscribe = initAuth(
      (user) => {
        setAuthUser(user);
        loadDriveSpreadsheets();
      },
      () => {
        setAuthUser(null);
        setDriveFiles([]);
      }
    );
    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, []);

  // Sync watched videos with localStorage
  useEffect(() => {
    localStorage.setItem('watchedVideos', JSON.stringify(watchedVideos));
  }, [watchedVideos]);

  // Automatic synchronization with Google Sheet:
  // 1. Immediately on initial mount
  // 2. Periodically in background every 25 seconds
  // 3. Automatically when the user switches back to this browser tab
  useEffect(() => {
    if (!activeSheetId) return;

    handleLoadFromSheet(activeSheetId, false);

    const interval = setInterval(() => {
      handleLoadFromSheet(activeSheetId, false);
    }, 25000);

    const handleFocus = () => {
      handleLoadFromSheet(activeSheetId, false);
    };
    window.addEventListener('focus', handleFocus);

    return () => {
      clearInterval(interval);
      window.removeEventListener('focus', handleFocus);
    };
  }, [activeSheetId]);

  const loadDriveSpreadsheets = async () => {
    setIsLoadingDrive(true);
    try {
      const files = await listUserSpreadsheets();
      setDriveFiles(files);
    } catch {
      // Ignored if user hasn't granted Drive scopes yet
    } finally {
      setIsLoadingDrive(false);
    }
  };

  const handleSignIn = async () => {
    setIsSigningIn(true);
    setSyncError(null);
    try {
      const result = await googleSignIn();
      if (result) {
        setAuthUser(result.user);
        loadDriveSpreadsheets();
      }
    } catch (err: any) {
      if (!err?.message?.includes('popup-closed-by-user') && err?.code !== 'auth/popup-closed-by-user') {
        setSyncError(err.message || 'Error al iniciar sesión con Google.');
      }
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await logout();
      setAuthUser(null);
      setDriveFiles([]);
    } catch (err: any) {
      console.error('Logout error:', err);
    }
  };

  const handleLoadFromSheet = async (sheetIdOrUrl: string, showModalSuccess = true) => {
    const trimmed = sheetIdOrUrl.trim();
    if (!trimmed) {
      setSyncError(
        lang === 'es' 
          ? 'Por favor introduce una URL o ID de Google Sheet.' 
          : 'Please enter a valid Google Sheet URL or ID.'
      );
      return;
    }

    const { spreadsheetId } = extractSpreadsheetInfo(trimmed);
    if (!spreadsheetId) {
      setSyncError(
        lang === 'es' 
          ? 'Por favor introduce una URL o ID de Google Sheet válido.' 
          : 'Please enter a valid Google Sheet URL or ID.'
      );
      return;
    }

    setIsSyncing(true);
    setSyncError(null);
    setSyncSuccess(null);

    try {
      const { videos, sheetTitle } = await fetchVideosFromGoogleSheet(trimmed, 'videos');
      
      if (!videos || videos.length === 0) {
        throw new Error(
          lang === 'es'
            ? 'No se encontraron filas con video clases válidas en la hoja. Asegúrate de que la pestaña se llame "videos" (o "Videos") y contenga enlaces o IDs de YouTube.'
            : 'No recognizable video rows were found in the sheet. Make sure the tab is named "videos" and contains YouTube links or IDs.'
        );
      }

      setVideoList(videos);
      setActiveSheetId(trimmed);
      setActiveSheetTitle(sheetTitle || spreadsheetId);
      setInputSheetUrl(trimmed.startsWith('http') ? trimmed : `https://docs.google.com/spreadsheets/d/${spreadsheetId}`);
      
      // Update cache
      localStorage.setItem('exci_google_sheet_id', trimmed);
      if (sheetTitle) localStorage.setItem('exci_google_sheet_title', sheetTitle);
      localStorage.setItem('exci_cached_videos', JSON.stringify(videos));

      // Update active video if current is not in new list
      setActiveVideo(prev => {
        const found = videos.find(v => v.id === prev?.id);
        return found || videos[0];
      });

      const successMsg = lang === 'es' 
        ? `¡Se cargaron ${videos.length} video clases con éxito desde Google Sheets!` 
        : `Successfully loaded ${videos.length} video lessons from Google Sheets!`;

      setSyncSuccess(successMsg);

      if (showModalSuccess) {
        setTimeout(() => setIsSheetModalOpen(false), 1400);
      }
      setTimeout(() => setSyncSuccess(null), 6000);
    } catch (err: any) {
      setSyncError(err.message || (lang === 'es' ? 'Error al leer la hoja de Google Sheets.' : 'Error reading Google Sheet.'));
    } finally {
      setIsSyncing(false);
    }
  };

  const handleDisconnectSheet = () => {
    setActiveSheetId(null);
    setActiveSheetTitle(null);
    localStorage.removeItem('exci_google_sheet_id');
    localStorage.removeItem('exci_google_sheet_title');
    localStorage.removeItem('exci_cached_videos');
    setVideoList(DEFAULT_VIDEO_CLASSES);
    setActiveVideo(DEFAULT_VIDEO_CLASSES[0]);
    setInputSheetUrl('');
    setSyncSuccess(lang === 'es' ? 'Se restableció el catálogo predeterminado de videos.' : 'Restored default video catalog.');
    setTimeout(() => setSyncSuccess(null), 3000);
  };

  const handleCreateTemplate = async () => {
    const confirmed = window.confirm(
      lang === 'es'
        ? '¿Deseas crear una nueva hoja "EXCI Video Clases - UANL" en tu Google Drive con la pestaña "videos" y los 10 videos base precargados?'
        : 'Do you want to create a new "EXCI Video Clases - UANL" spreadsheet in your Google Drive with the "videos" tab prefilled?'
    );
    if (!confirmed) return;

    setIsCreatingTemplate(true);
    setSyncError(null);
    try {
      const { id, spreadsheetUrl } = await createTemplateSpreadsheet(DEFAULT_VIDEO_CLASSES);
      setInputSheetUrl(spreadsheetUrl);
      await handleLoadFromSheet(id, true);
      window.open(spreadsheetUrl, '_blank');
    } catch (err: any) {
      setSyncError(err.message || 'Error al crear la hoja en Google Drive.');
    } finally {
      setIsCreatingTemplate(false);
    }
  };

  const toggleWatched = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setWatchedVideos(prev => 
      prev.includes(id) ? prev.filter(vId => vId !== id) : [...prev, id]
    );
  };

  const getYoutubeIframeUrl = (id: string) => {
    return `https://www.youtube.com/embed/${id}?rel=0&autoplay=0&cc_load_policy=0`;
  };

  const text = {
    en: {
      title: "Video Lessons",
      subtitle: "Deepen your focus with physical classes, strategic updates, and teacher guidance for the EXCI exam.",
      nowPlaying: "Now Watching Class",
      classProgress: "Class Progress",
      markedAsWatched: "Mark as Completed",
      completed: "Completed",
      duration: "Duration",
      level: "Level",
      category: "Category",
      instructorTip: "Specialist Advice",
      viewMore: "Load Video Class",
      instructorTipContent: "Videos provide intuitive patterns regarding phonetic elements and text structures. Follow closely and mark lectures as completed.",
      backToDashboard: "Back to Dashboard",
      sheetConnectedBadge: "Google Sheet Synced",
      sheetTabBadge: "Tab: videos",
      syncNow: "Sync",
      configureSheet: "Google Sheet Setup",
      useDefaults: "Reset to Default",
      connectSheetPrompt: "Connect Google Sheet",
      connectSheetDesc: "Fetch your video lessons dynamically from the 'videos' tab of any Google Sheet.",
      syncing: "Syncing...",
      sheetSetupTitle: "Google Sheets Video Integration",
      sheetSetupSubtitle: "Load video classes dynamically from the 'videos' tab of your Google Spreadsheet.",
      pasteUrlLabel: "Google Sheet URL or Spreadsheet ID",
      pasteUrlPlaceholder: "https://docs.google.com/spreadsheets/d/...",
      loadSheetBtn: "Load 'videos' Sheet",
      createTemplateBtn: "Create sample template in my Google Drive",
      signedInAs: "Signed in as",
      signOut: "Sign out",
      signInPrompt: "Sign in with Google to browse your Drive spreadsheets and access private sheets:",
      drivePickerLabel: "Or select a spreadsheet from your Google Drive:",
      selectDriveSheet: "-- Select a spreadsheet --",
      columnsHelpTitle: "Required Sheet Structure:",
      columnsHelpContent: "Your spreadsheet must have a tab named 'videos' (or 'Videos') with columns for Video ID / URL, Title, Description, Duration, Level, and Category.",
    },
    es: {
      title: "Video Clases",
      subtitle: "Profundiza tu preparación con clases en video, actualizaciones estratégicas y retroalimentación experta para el EXCI.",
      nowPlaying: "Visualizando Video Clase",
      classProgress: "Progreso del Curso",
      markedAsWatched: "Marcar como Completada",
      completed: "Completada",
      duration: "Duración",
      level: "Nivel",
      category: "Categoría",
      instructorTip: "Consejo del Instructor",
      viewMore: "Cargar Video Clase",
      instructorTipContent: "Las sesiones audiovisuales refuerzan tu memoria sobre factores clave del EXCI. Lleva registro de tus clases terminadas para asegurar tu dominio.",
      backToDashboard: "Volver a Inicio",
      sheetConnectedBadge: "Google Sheet Sincronizada",
      sheetTabBadge: "Pestaña: videos",
      syncNow: "Sincronizar",
      configureSheet: "Configurar Google Sheet",
      useDefaults: "Restablecer Predeterminados",
      connectSheetPrompt: "Conectar Google Sheet",
      connectSheetDesc: "Carga las video clases en vivo desde la pestaña 'videos' de tu Google Spreadsheet.",
      syncing: "Sincronizando...",
      sheetSetupTitle: "Integración con Google Sheets",
      sheetSetupSubtitle: "Obtén tus video clases dinámicamente desde la hoja 'videos' de tu documento.",
      pasteUrlLabel: "Enlace (URL) o ID de tu Google Sheet",
      pasteUrlPlaceholder: "https://docs.google.com/spreadsheets/d/...",
      loadSheetBtn: "Cargar Hoja 'videos'",
      createTemplateBtn: "Crear plantilla de ejemplo en mi Google Drive",
      signedInAs: "Sesión iniciada como",
      signOut: "Cerrar sesión",
      signInPrompt: "Inicia sesión con Google para acceder a tus hojas privadas y a tu Google Drive:",
      drivePickerLabel: "O elige una hoja directamente desde tu Google Drive:",
      selectDriveSheet: "-- Seleccionar hoja de cálculo --",
      columnsHelpTitle: "Estructura requerida de la hoja:",
      columnsHelpContent: "El documento debe tener una pestaña nombrada 'videos' o 'Videos' con columnas para Video ID o URL, Título, Descripción, Duración, Nivel y Categoría.",
    }
  };

  const t = text[lang] || text['en'];
  const completionPercent = videoList.length > 0 ? Math.round((watchedVideos.length / videoList.length) * 100) : 0;
  const currentVideo = activeVideo || videoList[0] || DEFAULT_VIDEO_CLASSES[0];

  const renderActiveTitle = (video: VideoClass) => {
    const { modulo, leccion, fullTitle } = extractModuloAndLeccion(video, lang);
    if (modulo && leccion) {
      return (
        <div className="space-y-1.5 mt-1">
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white leading-none uppercase italic tracking-tight">
            {modulo}
          </h3>
          <h4 className="text-lg md:text-xl font-black text-blue-600 dark:text-blue-400 leading-tight uppercase italic tracking-wide">
            {leccion}
          </h4>
        </div>
      );
    }
    return (
      <h3 className="text-xl md:text-2xl font-black text-slate-850 dark:text-white leading-tight uppercase italic mt-1">
        {fullTitle}
      </h3>
    );
  };

  const renderCardTitle = (video: VideoClass) => {
    const { modulo, leccion, fullTitle } = extractModuloAndLeccion(video, lang);
    if (modulo && leccion) {
      return (
        <div className="space-y-1">
          <div className="text-base font-black text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors uppercase italic leading-tight">
            {modulo}
          </div>
          <div className="text-xs font-black text-blue-600 dark:text-blue-400 uppercase italic tracking-wide leading-snug">
            {leccion}
          </div>
        </div>
      );
    }
    return (
      <h4 className="text-md font-black text-slate-800 dark:text-white group-hover:text-blue-600 transition-colors uppercase italic leading-snug">
        {fullTitle}
      </h4>
    );
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 md:space-y-8 pb-16">
      
      {/* Header and Back Button */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <div className="flex items-center gap-3">
            <button 
              onClick={onNavigateToDashboard}
              className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-500 cursor-pointer"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white uppercase italic tracking-tight flex items-center gap-2">
              <Video className="w-8 h-8 text-blue-600 shrink-0" />
              <span>{t.title}</span>
            </h2>
          </div>
          <div className="mt-2 pl-11">
            {isEnrolled ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider rounded-full border border-emerald-200 dark:border-emerald-900/50">
                <Check className="w-3.5 h-3.5" />
                {lang === 'es' ? 'Acceso Completo • Video Clases Desbloqueadas' : 'Full Access • Video Lessons Unlocked'}
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider rounded-full border border-amber-200 dark:border-amber-900/50">
                <Lock className="w-3.5 h-3.5" />
                {lang === 'es' ? '(Inicia sesión para desbloquear todo)' : '(Sign in to unlock all)'}
              </span>
            )}
          </div>
        </div>

        {/* Progress Tracker Widget */}
        <div className="self-end sm:self-auto">
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm shrink-0 min-w-[270px] sm:min-w-[300px] relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-600"></div>
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-6 text-xs">
                <span className="font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-[11px] shrink-0">
                  {t.classProgress}
                </span>
                <span className="font-extrabold text-blue-600 text-sm tabular-nums">
                  {isEnrolled ? completionPercent : 0}%
                </span>
              </div>
              <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 transition-all duration-500"
                  style={{ width: `${isEnrolled ? completionPercent : 0}%` }}
                ></div>
              </div>
              <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 text-right uppercase">
                {isEnrolled ? watchedVideos.length : 0} / {videoList.length} {lang === 'es' ? 'Vistos' : 'Watched'}
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Sync Diagnostic Messages (only when active) */}
      {syncError && (
        <div className="p-3.5 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 rounded-xl text-xs text-rose-800 dark:text-rose-200 flex items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-2.5">
            <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />
            <p className="leading-relaxed">{syncError}</p>
          </div>
          <button
            onClick={() => setSyncError(null)}
            className="text-rose-400 hover:text-rose-600 p-1 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Active Cinema Player & Video Details */}
      <div className="space-y-4 md:space-y-6">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl relative aspect-video flex items-center justify-center">
          {isEnrolled && currentVideo?.id ? (
            <iframe
              src={getYoutubeIframeUrl(currentVideo.id)}
              title={lang === 'es' ? currentVideo.titleEs : currentVideo.titleEn}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
              id={`player-${currentVideo.id}`}
            ></iframe>
          ) : !isEnrolled ? (
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-slate-900 via-slate-950 to-black overflow-hidden">
              {currentVideo?.id && (
                <img 
                  src={`https://img.youtube.com/vi/${currentVideo.id}/hqdefault.jpg`}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-10 filter blur-md pointer-events-none"
                />
              )}
              <div className="relative z-20 max-w-md mx-auto space-y-4">
                <div className="w-14 h-14 md:w-16 md:h-16 mx-auto rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center shadow-xl shadow-amber-500/10">
                  <Lock className="w-7 h-7 md:w-8 md:h-8 text-amber-400" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-black text-white uppercase italic tracking-tight">
                    {lang === 'es' ? 'Video Clases Bloqueadas' : 'Video Lessons Locked'}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                    {lang === 'es'
                      ? '(Inicia sesión para desbloquear las video clases)'
                      : '(Sign in to unlock video lessons)'}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-slate-500 text-sm">
              {lang === 'es' ? 'Selecciona una video clase del catálogo.' : 'Select a video class from the catalog.'}
            </div>
          )}
        </div>

        {/* Active Video Info Metadata */}
        {currentVideo && (
          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl md:rounded-3xl p-6 md:p-8 space-y-4 md:space-y-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-xs">
                    {lang === 'es' ? `Clase ${String(videoList.findIndex(v => v.id === currentVideo.id) + 1).padStart(2, '0')}` : `Lesson ${String(videoList.findIndex(v => v.id === currentVideo.id) + 1).padStart(2, '0')}`}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-100/60 dark:border-blue-900/40">
                    {lang === 'es' ? currentVideo.categoryEs : currentVideo.categoryEn}
                  </span>
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 leading-none mt-2">
                  {t.nowPlaying}
                </p>
                {renderActiveTitle(currentVideo)}
              </div>

              {/* Actions: Watched Action Toggle */}
              <div className="flex items-center gap-2 flex-wrap">
                <button
                  onClick={() => {
                    if (!isEnrolled) {
                      if (onRequestSignIn) onRequestSignIn();
                      return;
                    }
                    toggleWatched(currentVideo.id);
                  }}
                  className={`px-5 py-2.5 rounded-xl font-bold uppercase tracking-wider text-xs flex items-center gap-2 transition-all cursor-pointer select-none border ${
                    !isEnrolled
                      ? 'bg-amber-500/10 border-amber-500/30 text-amber-700 dark:text-amber-300 font-bold'
                      : watchedVideos.includes(currentVideo.id)
                        ? 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/40 text-emerald-600 dark:text-emerald-400 font-extrabold shadow-sm'
                        : 'bg-blue-600 hover:bg-blue-700 text-white border-blue-600 shadow-md shadow-blue-500/10 hover:-translate-y-0.5'
                  }`}
                >
                  {!isEnrolled ? (
                    <>
                      <Lock className="w-4 h-4 text-amber-500" />
                      <span>{lang === 'es' ? 'Clase Bloqueada' : 'Class Locked'}</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className={`w-4 h-4 ${watchedVideos.includes(currentVideo.id) ? 'fill-emerald-100 dark:fill-emerald-950/20 text-emerald-600 dark:text-emerald-400' : ''}`} />
                      <span>{watchedVideos.includes(currentVideo.id) ? t.completed : t.markedAsWatched}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {currentVideo.descriptionEs && currentVideo.descriptionEs !== 'Lección estratégica audiovisual para el examen de inglés EXCI UANL.' && (
              <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                {lang === 'es' ? currentVideo.descriptionEs : currentVideo.descriptionEn}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Grid: All Video Cards */}
      <div className="space-y-4 md:space-y-6 pt-6 md:pt-10 border-t border-slate-200 dark:border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white uppercase italic tracking-tight">
            {lang === 'es' ? "Catálogo Completo de Clases" : "Complete Video Catalog"}
          </h3>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            {videoList.length} {lang === 'es' ? 'clases disponibles' : 'lessons available'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {videoList.map((vc) => {
              const isCurrent = currentVideo?.id === vc.id;
              const isWatched = watchedVideos.includes(vc.id);
              return (
                <motion.div
                  key={vc.id}
                  onClick={() => {
                    setActiveVideo(vc);
                    if (window.innerWidth < 1024) {
                      window.scrollTo({ top: 180, behavior: 'smooth' });
                    } else {
                      window.scrollTo({ top: 200, behavior: 'smooth' });
                    }
                  }}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ y: -4 }}
                  className={`bg-white dark:bg-[#111827] rounded-[24px] border border-slate-200 dark:border-slate-800 flex flex-col hover:border-blue-500/80 hover:shadow-xl hover:shadow-slate-200/40 dark:hover:shadow-black/80 transition-all cursor-pointer group overflow-hidden ${
                    isCurrent ? 'ring-2 ring-blue-600 border-transparent dark:ring-blue-500' : ''
                  }`}
                >
                  {/* YouTube Thumbnail with Play Button Overlay */}
                  <div className="relative aspect-video bg-slate-900 overflow-hidden">
                    <img 
                      src={`https://img.youtube.com/vi/${vc.id}/hqdefault.jpg`} 
                      alt=""
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const img = e.currentTarget;
                        if (img.src.includes('hqdefault')) {
                          img.src = `https://img.youtube.com/vi/${vc.id}/mqdefault.jpg`;
                        } else {
                          img.style.display = 'none';
                        }
                      }}
                    />
                    
                    {/* Play/Lock overlay */}
                    <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center transition-colors group-hover:bg-slate-900/50">
                      <div className={`w-11 h-11 rounded-full flex items-center justify-center shadow-md transition-all ${
                        !isEnrolled
                          ? 'bg-amber-500 text-slate-950 scale-100 group-hover:scale-110 shadow-amber-500/20'
                          : isCurrent 
                            ? 'bg-blue-600 text-white scale-110' 
                            : 'bg-white/95 text-slate-800 scale-100 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white'
                      }`}>
                        {!isEnrolled ? (
                          <Lock className="w-5 h-5 text-slate-950" />
                        ) : (
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        )}
                      </div>
                    </div>

                    {/* Badge: Number and Category */}
                    <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
                      <span className="px-2.5 py-0.5 bg-blue-600 text-white rounded-md text-[9px] font-black tracking-wider uppercase shadow-xs">
                        {lang === 'es' ? `Clase ${String(videoList.findIndex(v => v.id === vc.id) + 1).padStart(2, '0')}` : `Lesson ${String(videoList.findIndex(v => v.id === vc.id) + 1).padStart(2, '0')}`}
                      </span>
                      <span className="px-2.5 py-0.5 bg-slate-900/85 text-white/95 rounded-md text-[9px] font-bold tracking-wider uppercase backdrop-blur-xs">
                        {lang === 'es' ? vc.categoryEs : vc.categoryEn}
                      </span>
                    </div>

                    {/* Completion Status / Locked Badge */}
                    {!isEnrolled ? (
                      <div className="absolute top-2 right-2 bg-amber-500 text-slate-950 px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider flex items-center gap-1 shadow-md">
                        <Lock className="w-2.5 h-2.5" />
                        <span>{lang === 'es' ? 'Bloqueada' : 'Locked'}</span>
                      </div>
                    ) : isWatched ? (
                      <div className="absolute top-2 right-2 bg-emerald-500 text-white p-1 rounded-full shadow-md">
                        <CheckCircle2 className="w-3.5 h-3.5 fill-current text-white text-emerald-500" />
                      </div>
                    ) : null}
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      {isCurrent && (
                        <div className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                          ● {lang === 'es' ? 'ACTIVO' : 'ACTIVE'}
                        </div>
                      )}

                      {renderCardTitle(vc)}

                      {vc.descriptionEs && vc.descriptionEs !== 'Lección estratégica audiovisual para el examen de inglés EXCI UANL.' && (
                        <p className="text-slate-400 dark:text-slate-400 text-xs line-clamp-2 leading-relaxed">
                          {lang === 'es' ? vc.descriptionEs : vc.descriptionEn}
                        </p>
                      )}
                    </div>

                    {/* Footer elements */}
                    <div className="mt-6 pt-4 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
                      {!isEnrolled ? (
                        <span className="text-[9px] font-black uppercase tracking-wider flex items-center gap-1 text-amber-600 dark:text-amber-400">
                          <Lock className="w-3 h-3" />
                          <span>{lang === 'es' ? 'Bloqueada' : 'Locked'}</span>
                        </span>
                      ) : (
                        <button
                          onClick={(e) => toggleWatched(vc.id, e)}
                          className={`text-[9px] font-black uppercase tracking-wider flex items-center gap-1 hover:opacity-85 ${
                            isWatched ? 'text-emerald-600 dark:text-emerald-500' : 'text-slate-400'
                          }`}
                        >
                          <CheckCircle2 className="w-3 h-3" />
                          <span>{isWatched ? t.completed : t.markedAsWatched}</span>
                        </button>
                      )}

                      <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-all flex items-end gap-1 select-none">
                        <span>{t.viewMore}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Google Sheets Configuration Modal */}
      <AnimatePresence>
        {isSheetModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl max-w-xl w-full p-6 md:p-8 shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsSheetModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-1.5 pr-8">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-emerald-600/10 text-emerald-600 dark:text-emerald-400 rounded-xl">
                    <FileSpreadsheet className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase italic tracking-tight">
                    {t.sheetSetupTitle}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {t.sheetSetupSubtitle}
                </p>
              </div>

              {/* Status messages */}
              {syncError && (
                <div className="p-3.5 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 rounded-xl text-xs text-rose-700 dark:text-rose-300 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div className="leading-snug">{syncError}</div>
                </div>
              )}

              {syncSuccess && (
                <div className="p-3.5 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50 rounded-xl text-xs text-emerald-700 dark:text-emerald-300 flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="leading-snug">{syncSuccess}</div>
                </div>
              )}

              {/* Google Account Card */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                    Google Workspace
                  </span>
                  {authUser && (
                    <button
                      onClick={handleSignOut}
                      className="text-[11px] font-bold text-slate-500 hover:text-rose-500 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>{t.signOut}</span>
                    </button>
                  )}
                </div>

                {authUser ? (
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm shadow-xs uppercase">
                      {authUser.displayName?.[0] || authUser.email?.[0] || 'G'}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-slate-800 dark:text-white truncate">
                        {authUser.displayName || authUser.email}
                      </p>
                      <p className="text-[10px] text-slate-400 truncate">
                        {authUser.email}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2.5">
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {t.signInPrompt}
                    </p>
                    {/* Official Google Sign-in styled button */}
                    <button
                      onClick={handleSignIn}
                      disabled={isSigningIn}
                      className="inline-flex items-center gap-3 px-4 py-2.5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold rounded-xl border border-slate-300 dark:border-slate-700 shadow-xs transition-all cursor-pointer disabled:opacity-60"
                    >
                      <svg className="w-4 h-4 shrink-0" viewBox="0 0 48 48">
                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                        <path fill="none" d="M0 0h48v48H0z"></path>
                      </svg>
                      <span>{isSigningIn ? 'Conectando...' : 'Iniciar sesión con Google'}</span>
                    </button>
                  </div>
                )}

                {/* Google Drive picker if signed in */}
                {authUser && driveFiles.length > 0 && (
                  <div className="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-300 block">
                      {t.drivePickerLabel}
                    </label>
                    <select
                      onChange={(e) => {
                        if (e.target.value) {
                          setInputSheetUrl(`https://docs.google.com/spreadsheets/d/${e.target.value}`);
                        }
                      }}
                      className="w-full text-xs p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100"
                    >
                      <option value="">{t.selectDriveSheet}</option>
                      {driveFiles.map(file => (
                        <option key={file.id} value={file.id}>
                          {file.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              {/* Input URL Section */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide block">
                  {t.pasteUrlLabel}
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputSheetUrl}
                    onChange={(e) => setInputSheetUrl(e.target.value)}
                    placeholder={t.pasteUrlPlaceholder}
                    className="flex-1 text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                  />
                  <button
                    onClick={() => handleLoadFromSheet(inputSheetUrl, true)}
                    disabled={isSyncing || !inputSheetUrl.trim()}
                    className="px-4 py-2.5 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50 shrink-0"
                  >
                    {isSyncing ? <Loader2 className="w-4 h-4 animate-spin" /> : <RefreshCw className="w-4 h-4" />}
                    <span>{isSyncing ? t.syncing : t.loadSheetBtn}</span>
                  </button>
                </div>
              </div>

              {/* Template creation button */}
              {authUser && (
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={handleCreateTemplate}
                    disabled={isCreatingTemplate || isSyncing}
                    className="w-full py-2.5 px-4 text-xs font-bold border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 bg-emerald-50/60 dark:bg-emerald-950/20 hover:bg-emerald-100/60 dark:hover:bg-emerald-950/40 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isCreatingTemplate ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
                    <span>{t.createTemplateBtn}</span>
                  </button>
                </div>
              )}

              {/* Instructions on expected format */}
              <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 text-[11px] space-y-2 text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5 font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider">
                  <Info className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{t.columnsHelpTitle}</span>
                </div>
                <p className="leading-relaxed">
                  {t.columnsHelpContent}
                </p>
                <div className="font-mono text-[10px] bg-white dark:bg-slate-800 p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 overflow-x-auto whitespace-nowrap">
                  A: Video URL / ID | B: Título | C: Title (EN) | D: Descripción | E: Duración | F: Nivel | G: Categoría
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
