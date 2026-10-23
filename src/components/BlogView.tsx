/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { blogArticles, BlogArticle } from '../data/blog';
import { Language } from '../types';
import { 
  BookOpen, 
  Clock, 
  ArrowLeft, 
  ChevronRight, 
  Filter, 
  PenTool, 
  Headphones, 
  Mic2, 
  Sparkles,
  Award,
  ChevronDown
} from 'lucide-react';

interface BlogViewProps {
  lang: Language;
}

export default function BlogView({ lang }: BlogViewProps) {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'listening' | 'reading' | 'writing' | 'speaking' | 'general'>('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Robust click & touch-outside handling for mobile / cross-browser compatibility
  useEffect(() => {
    if (!isDropdownOpen) return;
    const handleOutsideInteraction = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideInteraction, { passive: true });
    document.addEventListener('touchstart', handleOutsideInteraction, { passive: true });
    return () => {
      document.removeEventListener('mousedown', handleOutsideInteraction);
      document.removeEventListener('touchstart', handleOutsideInteraction);
    };
  }, [isDropdownOpen]);

  const t = {
    en: {
      title: 'EXCI Study Tips',
      subtitle: 'Strategic guides and study techniques designed to successfully pass the UANL English Competence Exam (EXCI).',
      readMore: 'View Full Tips',
      backToBlog: 'Back to Study Tips',
      author: 'Advisor',
      publishedBy: 'EXCI Academics & Instructors',
      sections: {
        all: 'All Tips',
        listening: 'Listening Section',
        reading: 'Reading Section',
        writing: 'Structure & Grammar',
        speaking: 'Vocabulary & Usage',
        general: 'General Strategy'
      },
      tagline: 'EXCI UANL',
      noArticles: 'No tips currently found under this section filter.',
    },
    es: {
      title: 'Tips de Estudio EXCI',
      subtitle: 'Guías estratégicas y tácticas de estudio para aprobar con éxito el examen de competencia en inglés (EXCI) de la UANL.',
      readMore: 'Ver Consejos Completos',
      backToBlog: 'Volver a los Tips de Estudio',
      author: 'Asesor',
      publishedBy: 'Asesores y Preparadores del EXCI UANL',
      sections: {
        all: 'Todos los Tips',
        listening: 'Comprensión Auditiva',
        reading: 'Comprensión Lectora',
        writing: 'Estructura y Gramática',
        speaking: 'Vocabulario y Uso',
        general: 'Estrategia General'
      },
      tagline: 'EXCI UANL',
      noArticles: 'No se encontraron consejos de estudio bajo esta sección.',
    },
    ru: {
      title: 'Tips de Estudio EXCI',
      subtitle: 'Guías estratégicas y tácticas de estudio para aprobar con éxito el examen de competencia en inglés (EXCI) de la UANL.',
      readMore: 'Ver Consejos Completos',
      backToBlog: 'Volver a los Tips de Estudio',
      author: 'Asesor',
      publishedBy: 'Asesores y Preparadores del EXCI UANL',
      sections: {
        all: 'Todos los Tips',
        listening: 'Comprensión Auditiva',
        reading: 'Comprensión Lectora',
        writing: 'Estructura y Gramática',
        speaking: 'Vocabulario y Uso',
        general: 'Estrategia General'
      },
      tagline: 'EXCI UANL',
      noArticles: 'No se encontraron consejos de estudio bajo esta sección.',
    }
  }[lang] || {
    title: 'EXCI Study Tips',
    subtitle: 'Strategic guides and study techniques designed to successfully pass the UANL English Competence Exam (EXCI).',
    readMore: 'View Full Tips',
    backToBlog: 'Back to Study Tips',
    author: 'Advisor',
    publishedBy: 'EXCI Academics & Instructors',
    sections: {
      all: 'All Tips',
      listening: 'Listening Section',
      reading: 'Reading Section',
      writing: 'Structure & Grammar',
      speaking: 'Vocabulary & Usage',
      general: 'General Strategy'
    },
    tagline: 'EXCI UANL',
    noArticles: 'No tips currently found under this section filter.',
  };

  const filteredArticles = useMemo(() => {
    if (activeFilter === 'all') return blogArticles;
    return blogArticles.filter(a => a.section === activeFilter);
  }, [activeFilter]);

  const formatContent = (text: string) => {
    if (!text) return '';
    return text
      .split('\n')
      .map((line) => {
        // Remove leading # characters and their trailing spaces
        let cleaned = line.replace(/^#+\s*/, '');
        
        const isStarBullet = /^\s*\*\s+/.test(line);
        const isHyphenBullet = /^\s*-\s+/.test(line);
        
        // Strip out all * symbols (representing bold or bullet points)
        cleaned = cleaned.replace(/\*/g, '');
        
        if (isStarBullet) {
          return '• ' + cleaned.trim();
        } else if (isHyphenBullet) {
          // Replace leading hyphen bullet with a beautiful circle bullet '•'
          return '• ' + cleaned.replace(/^\s*-\s+/, '').trim();
        }
        return cleaned;
      })
      .join('\n');
  };

  const getSectionIcon = (section: string) => {
    switch (section) {
      case 'listening': return <Headphones className="w-4 h-4" />;
      case 'reading': return <BookOpen className="w-4 h-4" />;
      case 'writing': return <PenTool className="w-4 h-4" />;
      case 'speaking': return <Mic2 className="w-4 h-4" />;
      default: return <Award className="w-4 h-4" />;
    }
  };

  const getSectionColor = (section: string) => {
    switch (section) {
      case 'listening': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'reading': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'writing': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'speaking': return 'bg-orange-100 text-orange-700 border-orange-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-2">
      <AnimatePresence mode="wait">
        {!selectedArticle ? (
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="border-b border-slate-200 pb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-amber-100 text-amber-800 border border-amber-200 rounded-full text-[10px] font-black uppercase tracking-widest">{t.tagline}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 tracking-tight uppercase italic">{t.title}</h2>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">{t.subtitle}</p>
            </div>

            {/* Filter Buttons */}
            {/* Desktop Filter Row */}
            <div className="hidden md:flex flex-wrap gap-2.5 p-2 bg-slate-50 border border-slate-200 rounded-[20px]">
              {(Object.keys(t.sections) as Array<keyof typeof t.sections>).map((filterKey) => {
                const isActive = activeFilter === filterKey;
                return (
                  <button
                    key={filterKey}
                    type="button"
                    onClick={() => setActiveFilter(filterKey as any)}
                    className={`px-4 py-2.5 text-xs font-black rounded-[14px] transition-all whitespace-nowrap uppercase tracking-widest flex items-center gap-2 cursor-pointer ${
                      isActive 
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/10 border border-blue-600' 
                        : 'bg-white text-slate-600 hover:text-slate-800 border border-slate-200/80 hover:bg-slate-100 hover:shadow-sm'
                    }`}
                  >
                    {filterKey !== 'all' && <span className="pointer-events-none">{getSectionIcon(filterKey)}</span>}
                    <span className="pointer-events-none">{t.sections[filterKey]}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Filter Dropdown Pill */}
            <div ref={dropdownRef} className="relative md:hidden select-none z-[25]">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDropdownOpen(!isDropdownOpen);
                }}
                className="w-full flex items-center justify-between px-5 py-3.5 bg-white border border-slate-200 rounded-[20px] shadow-sm hover:border-blue-400 focus:outline-none transition-all font-black text-xs uppercase tracking-widest text-slate-800 cursor-pointer"
              >
                <div className="flex items-center gap-2.5 max-w-[85%]">
                  <span className="text-slate-400 shrink-0">{lang === 'es' ? 'Categoría' : 'Category'}:</span>
                  <span className="text-slate-900 truncate font-black">{t.sections[activeFilter]}</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-blue-600' : ''}`} />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    key="dropdown"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 4 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.12, ease: "easeOut" }}
                    className="absolute left-0 right-0 mt-1 bg-white border border-slate-200 rounded-[20px] shadow-xl overflow-hidden z-20 divide-y divide-slate-100"
                  >
                    {(Object.keys(t.sections) as Array<keyof typeof t.sections>).map((filterKey) => {
                      const isSelected = activeFilter === filterKey;
                      return (
                        <button
                          key={filterKey}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveFilter(filterKey as any);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full flex items-center gap-3 px-5 py-3.5 text-xs font-black uppercase tracking-widest text-left transition-colors cursor-pointer ${
                            isSelected 
                              ? 'bg-blue-50/70 text-blue-700 font-black' 
                              : 'text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          <span className={isSelected ? 'text-blue-600' : 'text-slate-400'}>
                            {filterKey === 'all' ? <Filter className="w-4 h-4" /> : getSectionIcon(filterKey)}
                          </span>
                          <span className="flex-grow">{t.sections[filterKey]}</span>
                          {isSelected && (
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Articles Grid */}
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {filteredArticles.map((article, index) => {
                  const titleStr = lang === 'es' ? article.titleEs : article.titleEn;
                  const summaryStr = lang === 'es' ? article.summaryEs : article.summaryEn;
                  const readTimeStr = lang === 'es' ? article.readTimeEs : article.readTimeEn;

                  return (
                    <motion.div
                      key={article.id}
                      onClick={() => setSelectedArticle(article)}
                      whileHover={{ y: -4 }}
                      className="bg-white rounded-[24px] border border-slate-200 p-6 flex flex-col justify-between hover:shadow-xl hover:border-blue-400 cursor-pointer transition-all group relative overflow-hidden"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <button 
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveFilter(article.section);
                            }}
                            className={`px-2.5 py-1 text-[9px] font-black rounded-full border uppercase tracking-wider hover:opacity-80 transition-opacity cursor-pointer ${getSectionColor(article.section)}`}
                            title={lang === 'es' ? 'Filtrar por esta categoría' : 'Filter by this category'}
                          >
                            <span className="pointer-events-none">
                              {t.sections[article.section] || article.section}
                            </span>
                          </button>
                          <span className="text-[10px] text-slate-400 font-bold flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {readTimeStr}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors uppercase leading-tight line-clamp-2">
                          {titleStr}
                        </h3>

                        <p className="text-slate-500 text-xs md:text-sm leading-relaxed line-clamp-3">
                          {summaryStr}
                        </p>
                      </div>

                      <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                          <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                          <span>{lang === 'es' ? 'Tip Estratégico' : 'Strategic Tip'}</span>
                        </div>
                        <span className="text-blue-600 text-[10px] font-black uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          <span className="hidden md:inline">{t.readMore}</span>
                          <span className="md:hidden">
                            {lang === 'es' ? 'Leer' : 'Read'}
                          </span>
                          <ChevronRight className="w-4 h-4" />
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div className="py-20 text-center flex flex-col items-center gap-4">
                <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">{t.noArticles}</p>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.article
            key="reader"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            className="bg-white rounded-[32px] border border-slate-200 shadow-sm p-6 md:p-10 lg:p-12 space-y-8"
          >
            {/* Nav Back */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="flex items-center gap-2 text-slate-500 hover:text-slate-800 text-xs font-bold uppercase tracking-widest bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl transition-all"
            >
              <ArrowLeft className="w-4 h-4" /> {t.backToBlog}
            </button>

            {/* Reading Header */}
            <div className="space-y-4 border-b border-slate-100 pb-6">
              <div className="flex items-center gap-3">
                <button 
                  type="button"
                  onClick={() => {
                    setActiveFilter(selectedArticle.section);
                    setSelectedArticle(null);
                  }}
                  className={`px-3 py-1 text-xs font-black rounded-full border uppercase tracking-widest hover:opacity-80 transition-opacity cursor-pointer ${getSectionColor(selectedArticle.section)}`}
                  title={lang === 'es' ? 'Filtrar por esta categoría' : 'Filter by this category'}
                >
                  <span className="pointer-events-none">
                    {t.sections[selectedArticle.section] || selectedArticle.section}
                  </span>
                </button>
                <span className="text-xs text-slate-400 font-bold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> 
                  {lang === 'es' ? selectedArticle.readTimeEs : selectedArticle.readTimeEn}
                </span>
              </div>

              <h1 className="text-2xl md:text-3.5xl font-black leading-tight text-slate-900 tracking-tight uppercase italic max-w-3xl">
                {lang === 'es' ? selectedArticle.titleEs : selectedArticle.titleEn}
              </h1>
            </div>

            {/* Reading Content */}
            <div className="text-slate-700 leading-relaxed text-base md:text-lg lg:text-xl font-sans space-y-6 prose max-w-none whitespace-pre-line select-text antialiased tracking-normal">
              {formatContent(lang === 'es' ? selectedArticle.contentEs : selectedArticle.contentEn)}
            </div>

            {/* Footer Sign-off */}
            <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-extrabold text-slate-400 uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-500 animate-pulse" />
                <span>{lang === 'es' ? 'Lineamientos Oficiales de Preparación EXCI' : 'Official EXCI Preparation Guidelines'}</span>
              </div>
              <span>© 2026 EXCIExpress Learning Hub</span>
            </div>
          </motion.article>
        )}
      </AnimatePresence>
    </div>
  );
}
