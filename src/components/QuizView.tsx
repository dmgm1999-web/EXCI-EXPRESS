/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  Check, 
  X, 
  HelpCircle, 
  RotateCcw, 
  ChevronRight, 
  ChevronLeft, 
  ArrowLeft,
  Trophy,
  BookOpen,
  Award,
  Sparkles,
  Lock,
  AlertCircle,
  LogIn
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getQuizQuestionsByLevel, QuizQuestion } from '../data/quiz';
import { translations } from '../translations';

interface QuizViewProps {
  lang: 'en' | 'es' | 'ru';
  isEnrolled?: boolean;
  userEmail?: string | null;
  onRequestSignIn?: () => void;
}

const LOCKED_QUIZ_LEVELS = ['A2', 'B1', 'B2', 'C1', 'C2'];

export default function QuizView({ lang, isEnrolled = false, userEmail = null, onRequestSignIn }: QuizViewProps) {
  const t = translations[lang];

  // Component states
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({}); // maps question index to index of selected option
  const [hasConfirmedAnswer, setHasConfirmedAnswer] = useState<Record<number, boolean>>({}); // maps question index to boolean indicating if option was chosen
  const [quizFinished, setQuizFinished] = useState(false);
  const [lockedNotice, setLockedNotice] = useState<string | null>(null);

  const isLevelLocked = (level: string): boolean => {
    if (isEnrolled) return false;
    return LOCKED_QUIZ_LEVELS.includes(level);
  };

  // Start quiz for a given level (A2, B1, B2, C1, C2 are locked unless enrolled)
  const handleStartQuiz = (level: string) => {
    if (isLevelLocked(level)) {
      if (userEmail) {
        setLockedNotice(
          lang === 'es'
            ? `El correo ${userEmail} no figura como alumno inscrito. Los niveles A2 a C2 permanecen bloqueados.`
            : `The email ${userEmail} is not registered as an enrolled student. Levels A2 to C2 remain locked.`
        );
      } else {
        setLockedNotice(
          lang === 'es'
            ? `El nivel ${level} está bloqueado. Inicia sesión con tu correo inscrito para desbloquear todos los niveles.`
            : `Level ${level} is locked. Sign in with your registered email to unlock all levels.`
        );
      }
      return;
    }
    const levelQuestions = getQuizQuestionsByLevel(level);
    setQuestions(levelQuestions);
    setSelectedLevel(level);
    setCurrentIndex(0);
    setUserAnswers({});
    setHasConfirmedAnswer({});
    setQuizFinished(false);
    setLockedNotice(null);
  };

  // Select option
  const handleSelectOption = (optionIndex: number) => {
    // If already locked/answered, do not allow changes
    if (hasConfirmedAnswer[currentIndex]) return;

    setUserAnswers(prev => ({
      ...prev,
      [currentIndex]: optionIndex
    }));
    setHasConfirmedAnswer(prev => ({
      ...prev,
      [currentIndex]: true
    }));
  };

  // Next question
  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  // Previous question (only if not finalized or to review)
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  // Master calculation
  const correctCount = questions.reduce((count, q, idx) => {
    const ans = userAnswers[idx];
    return ans !== undefined && ans === q.answer ? count + 1 : count;
  }, 0);

  // Perfect 100 grade score
  const finalScorePercent = questions.length > 0 
    ? Math.round((correctCount / questions.length) * 100) 
    : 0;

  // Restart quiz
  const handleRestart = () => {
    if (selectedLevel) {
      handleStartQuiz(selectedLevel);
    }
  };

  // Exit quiz
  const handleExitQuiz = () => {
    setSelectedLevel(null);
    setQuestions([]);
    setCurrentIndex(0);
    setUserAnswers({});
    setHasConfirmedAnswer({});
    setQuizFinished(false);
  };

  // Status message generator based on performance
  const getScoreMessage = () => {
    if (finalScorePercent === 100) return t.perfectionStatus || 'Perfect 100 Score! Flawless grammar mastery.';
    if (finalScorePercent >= 85) return t.greatStatus || 'Excellent result! You have a very strong grammar foundation.';
    if (finalScorePercent >= 60) return t.goodStatus || 'Good effort! Continue practicing to master all nuances.';
    return t.needsPracticeStatus || 'Keep studying! Review the explanations to improve your core grammar.';
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6 md:py-10">
      {/* HEADER SECTION */}
      <div className="text-center mb-8 md:mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-full border border-blue-100 mb-3">
          <Award className="w-4 h-4 text-blue-600" />
          EXCI & CEFR English Exam
        </div>
        <h1 className="text-3xl md:text-5xl font-black tracking-tight uppercase italic text-slate-800">
          {t.quizTitle || 'Grammar Mastery Quiz'}
        </h1>
        <p className="text-sm md:text-base text-slate-500 mt-2 max-w-xl mx-auto">
          {t.quizSubtitle || 'Test your English skills with 53 questions per CEFR level. Perfect score is 100.'}
        </p>
      </div>

      <AnimatePresence mode="wait">
        {/* LEVEL SELECTOR VIEW */}
        {!selectedLevel && (
          <motion.div
            key="level-selector"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="bg-white dark:bg-[#111827] rounded-[32px] p-6 md:p-10 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-100 dark:shadow-none space-y-6"
          >
            {/* Locked Notice Alert */}
            {lockedNotice && (
              <div className="p-4 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 rounded-2xl text-xs text-amber-800 dark:text-amber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-2.5">
                  <Lock className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                  <p className="font-semibold leading-relaxed">{lockedNotice}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end">
                  {!isEnrolled && onRequestSignIn && (
                    <button
                      onClick={onRequestSignIn}
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

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-5">
              <h2 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                {t.selectQuizLevel || (lang === 'es' ? 'Elige tu nivel para comenzar:' : 'Choose your level to start:')}
              </h2>
              {isEnrolled ? (
                <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider rounded-full border border-emerald-200 dark:border-emerald-900/50 flex items-center gap-1.5 w-fit">
                  <Check className="w-3.5 h-3.5" />
                  {lang === 'es' ? 'Acceso Completo • Niveles Desbloqueados' : 'Full Access • All Levels Unlocked'}
                </span>
              ) : (
                <span className="px-3 py-1 bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider rounded-full border border-amber-200 dark:border-amber-900/50 flex items-center gap-1.5 w-fit">
                  <Lock className="w-3.5 h-3.5" />
                  {lang === 'es' ? '(Inicia sesión para desbloquear todo)' : '(Sign in to unlock all)'}
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map((level) => {
                const isLocked = isLevelLocked(level);

                const colors: Record<string, string> = {
                  A1: 'from-emerald-500 to-teal-500 hover:shadow-emerald-100',
                  A2: 'from-green-500 to-emerald-600 hover:shadow-green-100',
                  B1: 'from-blue-500 to-indigo-600 hover:shadow-blue-100',
                  B2: 'from-indigo-500 to-purple-600 hover:shadow-indigo-100',
                  C1: 'from-purple-500 to-pink-600 hover:shadow-purple-100',
                  C2: 'from-red-500 to-rose-600 hover:shadow-red-100'
                };

                const desc: Record<string, string> = {
                  A1: lang === 'es' ? 'Principiante básico' : lang === 'ru' ? 'Начальный базовый' : 'Absolute Beginner',
                  A2: lang === 'es' ? 'Pre-intermedio' : lang === 'ru' ? 'Элементарный' : 'Waystage English',
                  B1: lang === 'es' ? 'Intermedio' : lang === 'ru' ? 'Средний' : 'Threshold English',
                  B2: lang === 'es' ? 'Intermedio alto' : lang === 'ru' ? 'Выше среднего' : 'Vantage Level',
                  C1: lang === 'es' ? 'Avanzado académico' : lang === 'ru' ? 'Продвинутый' : 'Effective Proficiency',
                  C2: lang === 'es' ? 'Maestría nativa' : lang === 'ru' ? 'Профессиональный' : 'Mastery Proficiency'
                };

                return (
                  <button
                    key={level}
                    onClick={() => handleStartQuiz(level)}
                    className={`group relative flex flex-col text-left p-6 rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isLocked
                        ? 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-400 opacity-60 cursor-not-allowed select-none'
                        : 'bg-white dark:bg-[#111827] hover:bg-slate-50 dark:hover:bg-slate-850 border-slate-200 dark:border-slate-800 hover:border-blue-400 shadow-sm hover:shadow-lg hover:-translate-y-1 cursor-pointer'
                    }`}
                  >
                    {/* Level Icon Accent bg */}
                    <div className="absolute right-0 bottom-0 translate-x-4 translate-y-4 opacity-5 text-slate-900 dark:text-white group-hover:scale-110 transition-transform">
                      <span className="text-8xl font-black italic">{level}</span>
                    </div>

                    <div className="flex items-center justify-between w-full mb-4">
                      <div className={`w-10 h-10 rounded-xl ${
                        isLocked
                          ? 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                          : `bg-gradient-to-br ${colors[level]} text-white shadow-md`
                      } flex items-center justify-center font-bold text-sm tracking-wider`}>
                        {level}
                      </div>

                      {isLocked ? (
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200/80 dark:border-amber-900/50 flex items-center gap-1">
                          <Lock className="w-3 h-3" />
                          {lang === 'es' ? 'Bloqueado' : 'Locked'}
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-900/50 flex items-center gap-1">
                          <Check className="w-3 h-3" />
                          {lang === 'es' ? 'Disponible' : 'Available'}
                        </span>
                      )}
                    </div>

                    <h3 className={`font-extrabold text-lg uppercase tracking-tight transition-colors ${
                      isLocked ? 'text-slate-500 dark:text-slate-400' : 'text-slate-800 dark:text-white group-hover:text-blue-600'
                    }`}>
                      {lang === 'es' ? 'Nivel' : lang === 'ru' ? 'Уровень' : 'Level'} {level}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-[180px] font-medium">
                      {desc[level]}
                    </p>

                    {isLocked ? (
                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 dark:text-slate-500 mt-4">
                        <Lock className="w-3.5 h-3.5" />
                        <span>{lang === 'es' ? 'Nivel Bloqueado' : 'Locked Level'}</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 text-[11px] font-bold text-blue-600 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        {lang === 'es' ? 'Ejecutar' : lang === 'ru' ? 'Начать' : 'Start Practice'}
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* ACTIVE QUIZ VIEW */}
        {selectedLevel && !quizFinished && (
          <motion.div
            key="quiz-active"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="bg-white rounded-[32px] p-6 md:p-8 border border-slate-100 shadow-xl shadow-slate-100"
          >
            {/* Top Stats of Current Quiz */}
            <div className="flex flex-wrap items-center justify-between border-b border-slate-100 pb-4 mb-6 gap-3">
              <button
                onClick={handleExitQuiz}
                className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {lang === 'es' ? 'Salir del Quiz' : lang === 'ru' ? 'Выйти из теста' : 'Exit Quiz'}
              </button>

              <div className="flex items-center gap-4 text-xs font-bold">
                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg">
                  {lang === 'es' ? 'Nivel' : lang === 'ru' ? 'Уровень' : 'Level'} {selectedLevel}
                </span>
                <span className="text-blue-600 font-mono">
                  {t.questionCounter} {currentIndex + 1} {t.of} {questions.length}
                </span>
              </div>
            </div>

            {/* Quiz progress bar */}
            <div className="w-full h-2 bg-slate-100 rounded-full mb-8 overflow-hidden">
              <div 
                className="h-full bg-blue-600 transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
              />
            </div>

            {/* Active Question Box */}
            <div className="mb-8">
              <span className="text-[10px] font-black tracking-[0.2em] text-blue-500 uppercase">
                {lang === 'es' ? 'GRAMÁTICA Y COMPRENSIÓN' : lang === 'ru' ? 'ГРАММАТИКА И СТРУКТУРА' : 'GRAMMAR & USAGE'}
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 leading-snug mt-1">
                {questions[currentIndex]?.question}
              </h2>
            </div>

            {/* Answer Options */}
            <div className="space-y-3 mb-8">
              {questions[currentIndex]?.options.map((option, optIdx) => {
                const isSelected = userAnswers[currentIndex] === optIdx;
                const hasAnswered = hasConfirmedAnswer[currentIndex];
                const isCorrectOption = optIdx === questions[currentIndex].answer;

                // Set initial default styling classes
                let buttonStyle = "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300";
                let badge = null;

                if (hasAnswered) {
                  if (isCorrectOption) {
                    // Correct options are ALWAYS marked in green
                    buttonStyle = "bg-green-50 text-green-800 border-green-300 shadow-sm font-semibold";
                    badge = (
                      <span className="inline-flex items-center gap-1 text-[10px] bg-green-200 text-green-900 p-1 md:px-2 md:py-0.5 rounded-full font-bold uppercase tracking-wider ml-auto shrink-0 animate-fade-in">
                        <Check className="w-3 h-3 md:w-3 md:h-3" />
                        <span className="hidden md:inline">{t.correctBadge || 'Correct'}</span>
                      </span>
                    );
                  } else if (isSelected) {
                    // Chosen option is incorrect, mark in red
                    buttonStyle = "bg-red-50 text-red-800 border-red-300 shadow-sm font-semibold";
                    badge = (
                      <span className="inline-flex items-center gap-1 text-[10px] bg-red-200 text-red-900 p-1 md:px-2 md:py-0.5 rounded-full font-bold uppercase tracking-wider ml-auto shrink-0 animate-fade-in">
                        <X className="w-3 h-3 md:w-3 md:h-3" />
                        <span className="hidden md:inline">{t.incorrectBadge || 'Incorrect'}</span>
                      </span>
                    );
                  } else {
                    // Other options when locked
                    buttonStyle = "bg-slate-50 text-slate-400 border-slate-100 opacity-60 pointer-events-none";
                  }
                }

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    disabled={hasAnswered}
                    className={`w-full flex items-center gap-4 p-4 md:p-5 rounded-2xl border text-left text-sm md:text-base font-medium transition-all duration-200 ${buttonStyle}`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black uppercase tracking-wider ${
                      hasAnswered 
                        ? (isCorrectOption ? 'bg-green-600 text-white' : isSelected ? 'bg-red-600 text-white' : 'bg-slate-200 text-slate-500')
                        : 'bg-white border text-slate-500'
                    }`}>
                      {String.fromCharCode(65 + optIdx)}
                    </div>
                    <span className="flex-1 font-semibold">{option}</span>
                    {badge}
                  </button>
                );
              })}
            </div>

            {/* Explanation & Feedback box when answered */}
            {hasConfirmedAnswer[currentIndex] && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-6 rounded-2xl border mb-8 ${
                  userAnswers[currentIndex] === questions[currentIndex].answer
                    ? 'bg-emerald-50/50 border-emerald-100 text-emerald-800'
                    : 'bg-rose-50/30 border-rose-100 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <HelpCircle className={`w-5 h-5 ${userAnswers[currentIndex] === questions[currentIndex].answer ? 'text-emerald-600' : 'text-slate-400'}`} />
                  <h4 className="font-extrabold text-xs uppercase tracking-wider text-slate-800">
                    {t.explanationLabel || 'Grammar Explanation'}
                  </h4>
                </div>
                <p className="text-xs md:text-sm leading-relaxed text-slate-600 font-medium">
                  {lang === 'es' ? questions[currentIndex].explanationEs : lang === 'ru' ? questions[currentIndex].explanationRu : questions[currentIndex].explanationEn}
                </p>
              </motion.div>
            )}

            {/* Navigation buttons */}
            <div className="flex justify-between items-center gap-2 sm:gap-4 mt-6">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 sm:px-5 sm:py-3 border border-slate-200 text-slate-600 hover:bg-slate-50 font-bold text-[10px] sm:text-xs uppercase tracking-normal sm:tracking-widest rounded-xl disabled:opacity-30 disabled:pointer-events-none transition-colors shrink-0"
              >
                <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>{t.previous}</span>
              </button>

              <button
                onClick={handleNext}
                disabled={!hasConfirmedAnswer[currentIndex]}
                className="flex items-center justify-center gap-1.5 px-3.5 py-2.5 sm:px-6 sm:py-3 bg-blue-600 text-white hover:bg-blue-700 font-bold text-[10px] sm:text-xs uppercase tracking-normal sm:tracking-widest rounded-xl disabled:opacity-40 disabled:pointer-events-none transition-all shadow-md active:translate-y-0.5 text-center min-w-0"
              >
                <span className="truncate">
                  {currentIndex === questions.length - 1 
                    ? (lang === 'es' ? 'Finalizar Examen' : lang === 'ru' ? 'Завершить тест' : 'Complete Quiz') 
                    : t.next
                  }
                </span>
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              </button>
            </div>
          </motion.div>
        )}

        {/* COMPLETED/EVALUATION SCORE VIEW */}
        {quizFinished && (
          <motion.div
            key="quiz-finished"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="bg-white rounded-[32px] p-6 md:p-10 border border-slate-100 shadow-xl shadow-slate-100 text-center"
          >
            {/* Top Trophy Banner */}
            <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-500 shadow-inner">
              <Trophy className="w-10 h-10" />
            </div>

            <h2 className="text-3xl font-black uppercase italic tracking-tight text-slate-800">
              {t.quizCompleted || 'Quiz Completed!'}
            </h2>
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mt-1">
              {lang === 'es' ? 'Nivel' : lang === 'ru' ? 'Уровень' : 'Level'} {selectedLevel} • 53 {lang === 'es' ? 'Preguntas evaluadas' : lang === 'ru' ? 'вопросов' : 'Questions Evaluated'}
            </p>

            {/* Final Grade Calibrator (Perfection is 100) */}
            <div className="my-8 inline-block bg-slate-50 border border-slate-100 rounded-[32px] p-8 min-w-[240px]">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">
                {t.finalScore || 'Your Final Grade'}
              </span>
              <div className="text-6xl md:text-7.5xl font-black text-slate-800 font-mono tracking-tight my-2">
                {finalScorePercent}
                <span className="text-base text-slate-400 font-sans font-medium"> / 100</span>
              </div>
              
              <div className="text-sm font-bold text-slate-600">
                {correctCount} {lang === 'es' ? 'correctas' : lang === 'ru' ? 'правильных ответов' : 'correct answers'}
              </div>
            </div>

            <p className="text-sm md:text-base text-slate-600 max-w-xl mx-auto mb-10 font-bold italic leading-relaxed">
              "{getScoreMessage()}"
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <button
                onClick={handleRestart}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 font-black text-xs uppercase tracking-widest rounded-xl shadow-lg shadow-blue-100 transition-all transition-transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <RotateCcw className="w-4 h-4" />
                {t.restartRecording || 'Prueba de Nuevo'}
              </button>

              <button
                onClick={handleExitQuiz}
                className="flex items-center gap-2 px-6 py-3 border border-slate-200 text-slate-600 hover:bg-slate-50 font-black text-xs uppercase tracking-widest rounded-xl transition-all"
              >
                {t.backToDashboard}
              </button>
            </div>

            {/* Complete Itemized Review Board */}
            <div className="border-t border-slate-100 pt-8 text-left">
              <h3 className="text-lg font-extrabold text-slate-800 mb-6 uppercase tracking-tight flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-500 animate-pulse" />
                {lang === 'es' ? 'Revisión Detallada del Examen' : lang === 'ru' ? 'Полноразмерный обзор ответов' : 'Complete Answer Review'}
              </h3>

              <div className="space-y-4">
                {questions.map((q, idx) => {
                  const uAns = userAnswers[idx];
                  const isCorrect = uAns === q.answer;

                  return (
                    <div 
                      key={q.id} 
                      className={`p-4 rounded-2xl border text-sm transition-colors ${
                        isCorrect ? 'bg-emerald-50/20 border-emerald-100' : 'bg-rose-50/20 border-rose-100'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-white ${
                          isCorrect ? 'bg-emerald-500' : 'bg-rose-500'
                        }`}>
                          {isCorrect ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                        </div>

                        <div className="flex-1">
                          <h4 className="font-extrabold text-slate-800">
                            {idx + 1}. {q.question}
                          </h4>
                          
                          <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold">
                            <div>
                              <span className="text-slate-400 font-medium block">
                                {lang === 'es' ? 'Tu selección:' : lang === 'ru' ? 'Ваш ответ:' : 'Your Selection:'}
                              </span>
                              <span className={isCorrect ? 'text-emerald-700' : 'text-rose-700'}>
                                {uAns !== undefined ? q.options[uAns] : '—'}
                              </span>
                            </div>
                            
                            <div>
                              <span className="text-slate-400 font-medium block">
                                {lang === 'es' ? 'Respuesta Correcta:' : lang === 'ru' ? 'Правильный ответ:' : 'Correct Answer:'}
                              </span>
                              <span className="text-emerald-700">
                                {q.options[q.answer]}
                              </span>
                            </div>
                          </div>

                          <p className="mt-3 text-[11px] text-slate-500 font-medium bg-white/60 p-2 rounded-lg border border-slate-100">
                            <strong>{lang === 'es' ? 'Explicación: ' : lang === 'ru' ? 'Пояснение: ' : 'Rule: '}</strong>
                            {lang === 'es' ? q.explanationEs : lang === 'ru' ? q.explanationRu : q.explanationEn}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
