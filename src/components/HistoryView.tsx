/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, 
  Calendar, 
  Headphones, 
  BookOpen, 
  PenTool, 
  Mic2, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  AlertCircle, 
  Trash2,
  FileText,
  Lock,
  Check
} from 'lucide-react';
import { Language } from '../types';

interface HistoryViewProps {
  lang: Language;
  historyList: any[];
  onClearHistory: () => void;
  onNavigateToDashboard: () => void;
  isEnrolled?: boolean;
  userEmail?: string | null;
  onRequestSignIn?: () => void;
}

export default function HistoryView({ 
  lang, 
  historyList, 
  onClearHistory, 
  onNavigateToDashboard,
  isEnrolled = false,
  userEmail = null,
  onRequestSignIn
}: HistoryViewProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const t = {
    en: {
      title: 'Grade Evaluation History',
      subtitle: 'Review all your past submissions, detailed examiner feedback, and progress over time.',
      emptyTitle: 'No evaluations completed yet',
      emptyDesc: 'Start your dynamic EXCI intensive preparation practice and receive strict reviewer comments to build your history log.',
      emptyBtn: 'Back to Dashboard',
      clearBtn: 'Clear All Records',
      date: 'Date & Time',
      band: 'EXCI Score',
      cefr: 'CEFR Assessment',
      feedbackTitle: 'Examiner Detailed Feedback',
      strengths: 'Prominent Strengths',
      improvements: 'Actionable Areas to Correct',
      userResponse: 'Your Submitted Practice Answer',
      selectedAnswers: 'Multiple-Choice Choices Selected',
      question: 'Question',
      yourAns: 'Your Choice',
      correctAns: 'Correct Target',
      correct: 'Correct',
      incorrect: 'Incorrect',
      level: 'Level',
      skill: 'Skill',
      confirmClear: 'Are you sure you want to delete all historical logs? This action is irreversible.',
      confirmYes: 'Yes, Clear All',
      confirmNo: 'Cancel'
    },
    es: {
      title: 'Historial de Calificaciones',
      subtitle: 'Revisa de forma exhaustiva tu progreso histórico, comentarios de examinadores y puntajes EXCI obtenidos.',
      emptyTitle: 'Sin evaluaciones completadas aún',
      emptyDesc: 'Comienza tu preparación intensiva simulando exámenes para recibir calificaciones estrictas y almacenar tus registros académicos.',
      emptyBtn: 'Volver al Inicio',
      clearBtn: 'Limpiar Todo el Historial',
      date: 'Fecha y Hora',
      band: 'Puntaje EXCI',
      cefr: 'Evaluación MCER',
      feedbackTitle: 'Retroalimentación del Examinador',
      strengths: 'Fortalezas Identificadas',
      improvements: 'Áreas Críticas por Corregir',
      userResponse: 'Tu Respuesta de Ensayo Enviada',
      selectedAnswers: 'Respuestas de Opción Múltiple Seleccionadas',
      question: 'Pregunta',
      yourAns: 'Tu opción',
      correctAns: 'Opción correcta',
      correct: 'Correcto',
      incorrect: 'Incorrecto',
      level: 'Nivel',
      skill: 'Habilidad',
      confirmClear: '¿Estás seguro de que deseas borrar todos los registros? Esta acción es irreversible.',
      confirmYes: 'Sí, limpiar todo',
      confirmNo: 'Cancelar'
    },
    ru: {
      title: 'История оценок и отзывов',
      subtitle: 'Подробный анализ всех ваших прошлых ответов, оценок экзаменаторов и прогресса.',
      emptyTitle: 'История пока пуста',
      emptyDesc: 'Пройдите свои первые тренировочные тесты и получите строгую оценку для формирования личной истории баллов.',
      emptyBtn: 'Вернуться на главную',
      clearBtn: 'Очистить историю',
      date: 'Дата и время',
      band: 'Балл EXCI',
      cefr: 'Оценка CEFR',
      feedbackTitle: 'Детализированный отзыв экзаменатора',
      strengths: 'Сильные стороны',
      improvements: 'Рекомендации для исправления',
      userResponse: 'Ваш отправленный ответ',
      selectedAnswers: 'Выбранные ответы теста',
      question: 'Вопрос',
      yourAns: 'Ваш ответ',
      correctAns: 'Правильный ответ',
      correct: 'Верно',
      incorrect: 'Неверно',
      level: 'Уровень',
      skill: 'Навык',
      confirmClear: 'Вы уверены, что хотите стереть историю? Это действие необратимо.',
      confirmYes: 'Да, очистить все',
      confirmNo: 'Отмена'
    }
  }[lang] || {
    title: 'Grade Evaluation History',
    subtitle: 'Review all your past submissions, detailed examiner feedback, and progress over time.',
    emptyTitle: 'No evaluations completed yet',
    emptyDesc: 'Start your dynamic EXCI intensive preparation practice and receive strict reviewer comments to build your history log.',
    emptyBtn: 'Back to Dashboard',
    clearBtn: 'Clear All Records',
    date: 'Date & Time',
    band: 'EXCI Score',
    cefr: 'CEFR Assessment',
    feedbackTitle: 'Examiner Detailed Feedback',
    strengths: 'Prominent Strengths',
    improvements: 'Actionable Areas to Correct',
    userResponse: 'Your Submitted Practice Answer',
    selectedAnswers: 'Multiple-Choice Choices Selected',
    question: 'Question',
    yourAns: 'Your Choice',
    correctAns: 'Correct Target',
    correct: 'Correct',
    incorrect: 'Incorrect',
    level: 'Level',
    skill: 'Skill',
    confirmClear: 'Are you sure you want to delete all historical logs? This action is irreversible.',
    confirmYes: 'Yes, Clear All',
    confirmNo: 'Cancel'
  };

  const getSkillIcon = (skillName: string) => {
    switch (skillName) {
      case 'listening': return <Headphones className="w-4.5 h-4.5" />;
      case 'reading': return <BookOpen className="w-4.5 h-4.5" />;
      case 'writing': return <PenTool className="w-4.5 h-4.5" />;
      case 'speaking': return <Mic2 className="w-4.5 h-4.5" />;
      default: return <Award className="w-4.5 h-4.5" />;
    }
  };

  const levelColor = (level: string) => {
    switch (level) {
      case 'easy': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'medium': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'hard': return 'bg-red-50 text-red-700 border-red-200';
      default: return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  const formattedDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      return d.toLocaleString(lang === 'es' ? 'es-ES' : 'en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return dateStr;
    }
  };

  const handleToggleExpand = (id: string) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  const onClearClick = () => {
    setShowConfirmModal(true);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-2">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 tracking-tight uppercase italic">{t.title}</h2>
          <p className="text-slate-500 text-sm md:text-base">{t.subtitle}</p>
          <div className="mt-3 flex items-center gap-2">
            {isEnrolled ? (
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider rounded-full border border-emerald-200 flex items-center gap-1.5 w-fit">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>{lang === 'es' ? `Historial oficial de: ${userEmail}` : `Official history for: ${userEmail}`}</span>
              </span>
            ) : (
              <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold uppercase tracking-wider rounded-full border border-amber-200 flex items-center gap-1.5 w-fit">
                <Lock className="w-3.5 h-3.5 text-amber-600" />
                <span>{lang === 'es' ? '(Inicia sesión para guardar tu historial)' : '(Sign in to save your history)'}</span>
              </span>
            )}
          </div>
        </div>
        
        {historyList.length > 0 && (
          <button
            onClick={onClearClick}
            className="flex items-center gap-2 px-4 py-2 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 text-xs font-bold rounded-xl transition-all uppercase tracking-wider"
          >
            <Trash2 className="w-4 h-4" />
            <span>{t.clearBtn}</span>
          </button>
        )}
      </div>

      {historyList.length === 0 ? (
        <div className="bg-white rounded-[32px] p-8 md:p-12 text-center border border-slate-200 shadow-sm flex flex-col items-center gap-6 justify-center min-h-[350px]">
          <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 border border-slate-100">
            {!isEnrolled ? <Lock className="w-10 h-10 text-amber-500" /> : <Award className="w-10 h-10" />}
          </div>
          <div className="space-y-2 max-w-lg">
            {isEnrolled && (
              <h3 className="text-xl font-bold text-slate-900">
                {t.emptyTitle}
              </h3>
            )}
            <p className="text-slate-500 text-sm leading-relaxed">
              {!isEnrolled
                ? (lang === 'es'
                    ? 'El historial de calificaciones se guarda exclusivamente para los alumnos inscritos que inicien sesión con su correo registrado.'
                    : 'Grade evaluation history is saved exclusively for enrolled students who sign in with their registered email.')
                : t.emptyDesc}
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {historyList.map((item) => {
            const isExpanded = expandedId === item.id;
            const skillName = item.skill || 'writing';
            const levelName = item.level || 'medium';
            const scoreVal = parseFloat(item.band || '0');
            const displayScore = scoreVal <= 9 && scoreVal > 0 ? Math.round(scoreVal * 11.1) : Math.round(scoreVal);

            return (
              <div 
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all hover:border-slate-300"
              >
                {/* Header of Accordion */}
                <div 
                  onClick={() => handleToggleExpand(item.id)}
                  className="p-5 flex items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 shrink-0">
                      {getSkillIcon(skillName)}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 text-ellipsis overflow-hidden whitespace-nowrap">
                          {skillName === 'listening' ? (lang === 'es' ? 'Escucha' : 'Listening') :
                           skillName === 'reading' ? (lang === 'es' ? 'Lectura' : 'Reading') :
                           skillName === 'speaking' ? (lang === 'es' ? 'Habla' : 'Speaking') :
                           (lang === 'es' ? 'Escritura' : 'Writing')}
                        </span>
                        <span className={`px-2 py-0.5 border text-[9px] font-bold rounded-sm uppercase tracking-wide shrink-0 ${levelColor(levelName)}`}>
                          {levelName === 'easy' ? (lang === 'es' ? 'Fácil' : 'Easy') :
                           levelName === 'medium' ? (lang === 'es' ? 'Medio' : 'Medium') :
                           (lang === 'es' ? 'Difícil' : 'Hard')}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-slate-800 truncate pr-4">{item.practiceTitle}</h4>
                    </div>
                  </div>

                  {/* Score & Controls */}
                  <div className="flex items-center gap-6">
                    <div className="text-right shrink-0">
                      <span className="text-[9px] font-bold text-slate-400 uppercase block leading-none mb-1">EXCI</span>
                      <span className="text-xl font-black text-blue-600 leading-none">{displayScore} <span className="text-[11px] font-normal text-slate-400">/ 100</span></span>
                    </div>

                    <div className="hidden md:flex items-center gap-1.5 text-slate-400 text-xs text-right shrink-0">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{formattedDate(item.completedAt)}</span>
                    </div>

                    <div className="p-1 px-2.5 rounded-lg border border-slate-100 bg-slate-50 hover:bg-slate-100 hover:border-slate-200 transition-colors shrink-0">
                      {isExpanded ? <ChevronUp className="w-4.5 h-4.5 text-slate-500" /> : <ChevronDown className="w-4.5 h-4.5 text-slate-500" />}
                    </div>
                  </div>
                </div>

                {/* Expanded content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="border-t border-slate-150 overflow-hidden bg-slate-50/40"
                    >
                      <div className="p-6 space-y-6 md:p-8">
                        {/* Summary Block */}
                        <div className="flex flex-col sm:flex-row gap-4 p-5 bg-white rounded-xl border border-slate-200 shadow-sm items-stretch sm:items-center">
                          <div className="flex flex-col items-center justify-center p-3 bg-blue-50 border border-blue-100 rounded-lg shrink-0 w-full sm:w-28">
                            <span className="text-xs font-bold text-blue-600 leading-none">PUNTAJE EXCI</span>
                            <span className="text-3xl font-black text-blue-800 leading-tight mt-1">{displayScore}</span>
                            <span className="text-[10px] font-semibold text-blue-600">/ 100 pts</span>
                            <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mt-1">CEFR: {item.cefr}</span>
                          </div>
                          
                          <div className="flex-1 space-y-2">
                            <h5 className="text-xs font-bold text-blue-600 uppercase tracking-wide flex items-center gap-1.5">
                              <FileText className="w-3.5 h-3.5" /> {t.feedbackTitle}
                            </h5>
                            <p className="text-slate-800 italic font-sans leading-relaxed text-[13px] md:text-base md:font-serif">
                              "{item.feedback}"
                            </p>
                          </div>
                        </div>

                        {/* Analytic Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="p-5 bg-emerald-50 text-emerald-950 border border-emerald-100 rounded-xl space-y-3">
                            <h5 className="font-extrabold text-[10px] uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                              <span>{t.strengths}</span>
                            </h5>
                            <ul className="space-y-1.5 text-[13px] md:text-xs text-emerald-950/90 font-medium pl-1">
                              {item.strengths && item.strengths.length > 0 ? (
                                item.strengths.map((str: string, index: number) => (
                                  <li key={index} className="flex gap-2 leading-relaxed">
                                    <span className="text-emerald-500 font-bold">→</span><span>{str}</span>
                                  </li>
                                ))
                              ) : (
                                <li className="italic opacity-60">None logged</li>
                              )}
                            </ul>
                          </div>

                          <div className="p-5 bg-amber-50 text-amber-950 border border-amber-100 rounded-xl space-y-3">
                            <h5 className="font-extrabold text-[10px] uppercase tracking-wider text-amber-700 flex items-center gap-1.5">
                              <AlertCircle className="w-4 h-4 text-amber-500" />
                              <span>{t.improvements}</span>
                            </h5>
                            <ul className="space-y-1.5 text-[13px] md:text-xs text-amber-950/90 font-medium pl-1">
                              {item.improvements && item.improvements.length > 0 ? (
                                item.improvements.map((imp: string, index: number) => (
                                  <li key={index} className="flex gap-2 leading-relaxed">
                                    <span className="text-amber-600 font-bold">→</span><span>{imp}</span>
                                  </li>
                                ))
                              ) : (
                                <li className="italic opacity-60">None logged</li>
                              )}
                            </ul>
                          </div>
                        </div>

                        {/* Submitted Content Display */}
                        {item.userAnswer && (
                          <div className="p-5 bg-white border border-slate-200 rounded-xl space-y-2 max-h-[250px] overflow-y-auto">
                            <h5 className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                              {t.userResponse}
                            </h5>
                            <p className="text-slate-600 text-xs font-mono leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-100 whitespace-pre-wrap">
                              {item.userAnswer}
                            </p>
                          </div>
                        )}

                        {/* Answers selected for test categories */}
                        {item.selectedAnswers && Object.keys(item.selectedAnswers).length > 0 && (
                          <div className="p-5 bg-white border border-slate-200 rounded-xl space-y-3">
                            <h5 className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
                              {t.selectedAnswers}
                            </h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {Object.entries(item.selectedAnswers).map(([qKey, selectedVal]: [string, any], index: number) => (
                                <div key={qKey} className="p-3 bg-slate-50 border border-slate-100 rounded-lg text-xs space-y-1 flex flex-col justify-between">
                                  <p className="font-bold text-slate-800 truncate">Q0{index + 1}: {qKey}</p>
                                  <div className="flex gap-4 text-[10px] mt-2 border-t border-slate-150 pt-2 font-mono">
                                    <span className="text-slate-500">{t.yourAns}: <strong>{selectedVal}</strong></span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      )}

      {/* Custom Confirmation Modal to bypass iframe window.confirm limitations */}
      <AnimatePresence>
        {showConfirmModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="bg-white rounded-[24px] p-6 md:p-8 max-w-sm w-full shadow-2xl border border-slate-100 flex flex-col items-center text-center space-y-5"
            >
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center border border-red-100">
                <Trash2 className="w-5 h-5" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight italic">
                  {lang === 'es' ? '¿Limpiar historial?' : 'Clear History?'}
                </h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                  {t.confirmClear}
                </p>
              </div>

              <div className="flex gap-3 w-full pt-1">
                <button
                  onClick={() => setShowConfirmModal(false)}
                  className="flex-1 px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-all text-xs uppercase tracking-wider text-center"
                >
                  {t.confirmNo}
                </button>
                <button
                  onClick={() => {
                    setShowConfirmModal(false);
                    onClearHistory();
                  }}
                  className="flex-1 px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-black rounded-xl transition-all text-xs uppercase tracking-wider text-center shadow-lg shadow-red-200"
                >
                  {t.confirmYes}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
