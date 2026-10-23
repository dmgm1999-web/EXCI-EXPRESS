/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, Lock, EyeOff, GraduationCap, Database, UserCheck } from 'lucide-react';
import { Language } from '../types';

interface PrivacyViewProps {
  lang: Language;
}

export default function PrivacyView({ lang }: PrivacyViewProps) {
  const t = {
    en: {
      title: 'Privacy Policy',
      tagline: 'SECURE & PRIVATE BY DESIGN',
      subtitle: 'Transparency matters. Learn how we protect your security and privacy while preparing for the EXCI.',
      educationalTitle: 'Strictly Educational Focus',
      educationalText: 'EXCIExpress is an educational platform designed solely for preparation, practice, and skill evaluation for the EXCI exam. It is not affiliated, endorsed, or partnered with official administering institutions.',
      verificationTitle: 'Student Verification & Secure Access',
      verificationText: 'The email entered to verify enrolled student status is handled confidentially and used solely to unlock lessons, video classes, and tiered practice levels. It is never shared with third parties or used for promotional purposes.',
      localPersTitle: 'Full Local History Control (LocalStorage)',
      localPersText: 'Your evaluation logs, scores, and practice statistics are stored locally and privately inside your browser using LocalStorage. You have complete control to wipe this data anytime with a single click from the History screen.',
      noRecordTitle: 'Local Voice Processing & Audio Privacy',
      noRecordText: 'During speaking practice, your voice is processed directly on your device using your browser built-in speech recognition API. We do NOT record, upload, store, or transmit your audio streams to any external servers.',
      noGatherTitle: 'No Trackers or Data Selling',
      noGatherText: 'We do NOT collect invasive tracking cookies, deploy behavioral surveillance tools, or sell student information. Your preparation sessions remain entirely private and confidential.',
      secAud: 'Educational Sandbox secure protocol active.'
    },
    es: {
      title: 'Políticas de Privacidad',
      tagline: 'DISEÑO SEGURO Y PRIVADO',
      subtitle: 'La transparencia es fundamental. Conoce cómo cuidamos tu privacidad y protegemos tu experiencia de estudio.',
      educationalTitle: 'Enfoque Estrictamente Educativo',
      educationalText: 'EXCIExpress es un simulador enfocado en la práctica intensiva y la autoevaluación para el examen EXCI. Nuestra herramienta fue creada puramente para fines educativos y no tiene afiliación oficial con los administradores directos de la prueba.',
      verificationTitle: 'Verificación de Alumnos y Acceso Seguro',
      verificationText: 'El correo electrónico ingresado para verificar la condición de alumno inscrito se utiliza de manera confidencial exclusivamente para habilitar el acceso a las lecciones, video clases y niveles de práctica. No se comparte con terceros ni se utiliza con fines publicitarios.',
      localPersTitle: 'Control Total del Historial (LocalStorage)',
      localPersText: 'El historial de calificaciones, puntajes y estadísticas de estudio se almacenan de manera local y privada en tu propio navegador mediante LocalStorage. Puedes borrar este registro por completo en cualquier momento con un solo clic desde la pantalla de Historial.',
      noRecordTitle: 'Grabaciones de Voz Locales',
      noRecordText: 'Durante la práctica del Habla (Speaking), tu voz se procesa de manera inmediata en tu dispositivo mediante el reconocimiento de voz de tu navegador. Ningún audio ni grabación se transmitirá o almacenará en servidores externos.',
      noGatherTitle: 'Sin Rastreadores ni Venta de Información',
      noGatherText: 'No recopilamos datos de navegación invasivos, no utilizamos herramientas de seguimiento publicitario ni comercializamos información de los estudiantes. Toda tu preparación se mantiene en un entorno seguro y confidencial.',
      secAud: 'Protocolo de entorno seguro educativo activo.'
    },
    ru: {
      title: 'Политика конфиденциальности',
      tagline: 'БЕЗОПАСНОСТЬ И ПРИВАТНОСТЬ ПО УМОЛЧАНИЮ',
      subtitle: 'Прозрачность имеет значение. Узнайте, как мы защищаем вашу конфиденциальность во время подготовки.',
      educationalTitle: 'Строго образовательные цели',
      educationalText: 'EXCIExpress — независимая образовательная платформа для подготовки и тренировки навыков перед экзаменом EXCI.',
      verificationTitle: 'Проверка учащихся и безопасный доступ',
      verificationText: 'Email, используемый для проверки статуса учащегося, обрабатывается конфиденциально только для открытия доступа к урокам и видеоклассам.',
      localPersTitle: 'Полный контроль над историей (LocalStorage)',
      localPersText: 'История ваших оценок и статистика хранятся исключительно локально в вашем браузере через LocalStorage. Вы можете стереть эти данные в любой момент.',
      noRecordTitle: 'Локальная обработка записей голоса',
      noRecordText: 'Во время практики говорения голос обрабатывается прямо в браузере. Аудиозаписи не сохраняются и не передаются на внешние серверы.',
      noGatherTitle: 'Без трекеров и продажи информации',
      noGatherText: 'Мы не используем навязчивые трекеры и не продаем данные пользователей. Ваша подготовка остается полностью конфиденциальной.',
      secAud: 'Безопасный протокол активен.'
    }
  }[lang] || {
    title: 'Privacy Policy',
    tagline: 'SECURE & PRIVATE BY DESIGN',
    subtitle: 'Transparency matters. Learn how we protect your security and privacy while preparing for the EXCI.',
    educationalTitle: 'Strictly Educational Focus',
    educationalText: 'EXCIExpress is an educational platform designed solely for preparation, practice, and skill evaluation for the EXCI exam. It is not affiliated, endorsed, or partnered with official administering institutions.',
    verificationTitle: 'Student Verification & Secure Access',
    verificationText: 'The email entered to verify enrolled student status is handled confidentially and used solely to unlock lessons, video classes, and tiered practice levels. It is never shared with third parties or used for promotional purposes.',
    localPersTitle: 'Full Local History Control (LocalStorage)',
    localPersText: 'Your evaluation logs, scores, and practice statistics are stored locally and privately inside your browser using LocalStorage. You have complete control to wipe this data anytime with a single click from the History screen.',
    noRecordTitle: 'Local Voice Processing & Audio Privacy',
    noRecordText: 'During speaking practice, your voice is processed directly on your device using your browser built-in speech recognition API. We do NOT record, upload, store, or transmit your audio streams to any external servers.',
    noGatherTitle: 'No Trackers or Data Selling',
    noGatherText: 'We do NOT collect invasive tracking cookies, deploy behavioral surveillance tools, or sell student information. Your preparation sessions remain entirely private and confidential.',
    secAud: 'Educational Sandbox secure protocol active.'
  };

  const cards = [
    {
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
      title: t.educationalTitle,
      desc: t.educationalText,
    },
    {
      icon: <UserCheck className="w-6 h-6 text-blue-600" />,
      title: t.verificationTitle,
      desc: t.verificationText,
    },
    {
      icon: <Database className="w-6 h-6 text-blue-600" />,
      title: t.localPersTitle,
      desc: t.localPersText,
    },
    {
      icon: <Lock className="w-6 h-6 text-blue-600" />,
      title: t.noRecordTitle,
      desc: t.noRecordText,
    },
    {
      icon: <EyeOff className="w-6 h-6 text-blue-600" />,
      title: t.noGatherTitle,
      desc: t.noGatherText,
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-2">
      {/* Header */}
      <div className="border-b border-slate-200 pb-6 text-left">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 border border-blue-200 rounded-full text-[10px] font-black uppercase tracking-widest leading-normal whitespace-normal break-words max-w-full">
            {t.tagline}
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 tracking-tight uppercase italic flex items-start md:items-center gap-2 sm:gap-3 break-words">
          <ShieldCheck className="w-8 h-8 mt-0.5 md:mt-0 text-blue-600 shrink-0" /> 
          <span className="flex-1 min-w-0">{t.title}</span>
        </h2>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">{t.subtitle}</p>
      </div>

      {/* Grid items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {cards.map((card, idx) => (
          <div 
            key={idx}
            className={`bg-white rounded-[24px] border border-slate-200 p-6 shadow-sm flex flex-col gap-4 relative overflow-hidden group hover:border-blue-400 transition-all ${
              idx === cards.length - 1 ? 'md:col-span-2' : ''
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
              {card.icon}
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-black text-slate-800 uppercase tracking-tight italic">
                {card.title}
              </h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer lock statement */}
      <div className="p-5 bg-slate-900 rounded-[24px] text-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-bold uppercase tracking-wider shadow-md">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-emerald-400">{t.secAud}</span>
        </div>
        <span className="opacity-50 font-mono">CONFIDENTIAL LEARNING SANDBOX</span>
      </div>
    </div>
  );
}
