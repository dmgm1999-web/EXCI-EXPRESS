/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect } from 'react';
import { 
  Search, 
  Volume2, 
  BookOpen, 
  Sparkles, 
  Check, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  GraduationCap, 
  Filter
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getVocabularyList, VocabWord } from '../data/vocabulary';

export function translateCategory(cat: string, targetLang: 'en' | 'es' | 'ru'): string {
  if (cat === 'All') {
    if (targetLang === 'es') return 'Todas';
    if (targetLang === 'ru') return 'Все';
    return 'All';
  }

  const translationsMap: Record<string, Record<'en' | 'es' | 'ru', string>> = {
    'Adjective': {
      en: 'Adjective',
      es: 'Adjetivo',
      ru: 'Прилагательное'
    },
    'Noun': {
      en: 'Noun',
      es: 'Sustantivo',
      ru: 'Существительное'
    },
    'Verb': {
      en: 'Verb',
      es: 'Verbo',
      ru: 'Глагол'
    },
    'Verb / Adj': {
      en: 'Verb / Adj',
      es: 'Verbo / Adjetivo',
      ru: 'Глагол / Прилагательное'
    },
    'Adjective / Noun': {
      en: 'Adjective / Noun',
      es: 'Adjetivo / Sustantivo',
      ru: 'Прилагательное / Существительное'
    },
    'Academic Core': {
      en: 'Academic Core',
      es: 'Núcleo Académico',
      ru: 'Академическая основа'
    },
    'Science & Technology': {
      en: 'Science & Technology',
      es: 'Ciencia y Tecnología',
      ru: 'Наука и технологии'
    },
    'Environment & Geography': {
      en: 'Environment & Geography',
      es: 'Medio Ambiente y Geografía',
      ru: 'Окружающая среда и география'
    },
    'Business & Finance': {
      en: 'Business & Finance',
      es: 'Negocios y Finanzas',
      ru: 'Бизнес и финансы'
    },
    'Society, Culture & Law': {
      en: 'Society, Culture & Law',
      es: 'Sociedad, Cultura y Derecho',
      ru: 'Общество, культура и право'
    },
    'Education & Cognition': {
      en: 'Education & Cognition',
      es: 'Educación y Cognición',
      ru: 'Образование и познание'
    },
    'Visual Trends (Task 1)': {
      en: 'Visual Trends (Task 1)',
      es: 'Tendencias Visuales (Tarea 1)',
      ru: 'Визуальные тренды (Часть 1)'
    },
    'Conjunctions & Transition Devices': {
      en: 'Conjunctions & Transition Devices',
      es: 'Conjunciones y Conectores de Transición',
      ru: 'Союзы и связующие слова'
    }
  };

  const key = cat.trim();
  const entry = translationsMap[key];
  if (entry) {
    return entry[targetLang];
  }
  return cat;
}

interface VocabularyViewProps {
  lang: 'en' | 'es' | 'ru';
}

export default function VocabularyView({ lang }: VocabularyViewProps) {
  const vocabFullList = useMemo(() => getVocabularyList(), []);
  
  // Browsing States
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedBand, setSelectedBand] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Interactive Quiz State
  const [quizWord, setQuizWord] = useState<VocabWord | null>(null);
  const [quizOptions, setQuizOptions] = useState<string[]>([]);
  const [selectedAns, setSelectedAns] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // Synchronize vocabulary quiz options with selected word and chosen language
  useEffect(() => {
    const list = getVocabularyList();
    const handcrafted = list.slice(0, 84);
    
    // Pick current word, or select a new random handcrafted word if none exists yet
    const activeWord = quizWord && handcrafted.some(w => w.id === quizWord.id)
      ? quizWord 
      : (handcrafted[Math.floor(Math.random() * handcrafted.length)] || list[0]);
    
    setQuizWord(activeWord);
    
    const correctText = getTranslation(activeWord);
    const optionsSet = new Set<string>();
    optionsSet.add(correctText);

    while (optionsSet.size < 4) {
      const randWord = handcrafted[Math.floor(Math.random() * handcrafted.length)];
      const randText = getTranslation(randWord);
      if (randText) optionsSet.add(randText);
    }
    
    setQuizOptions(Array.from(optionsSet).sort(() => Math.random() - 0.5));
  }, [lang]);

  function handleNextQuiz() {
    const list = getVocabularyList();
    const handcrafted = list.slice(0, 84);
    const randomWord = handcrafted[Math.floor(Math.random() * handcrafted.length)] || list[0];
    
    setQuizWord(randomWord);
    setSelectedAns(null);
    setIsCorrect(null);

    const correctText = getTranslation(randomWord);
    const optionsSet = new Set<string>();
    optionsSet.add(correctText);

    while (optionsSet.size < 4) {
      const randWord = handcrafted[Math.floor(Math.random() * handcrafted.length)];
      const randText = getTranslation(randWord);
      if (randText) optionsSet.add(randText);
    }

    setQuizOptions(Array.from(optionsSet).sort(() => Math.random() - 0.5));
  }

  function handleSelectAns(option: string) {
    if (selectedAns || !quizWord) return;
    setSelectedAns(option);
    const correctText = getTranslation(quizWord);
    setIsCorrect(option === correctText);
  }

  // Words matching the text search term
  const wordsMatchingSearch = useMemo(() => {
    const term = searchTerm.toLowerCase();
    if (!term) return vocabFullList;
    return vocabFullList.filter(item => 
      item.word.toLowerCase().includes(term) ||
      item.translationEs.toLowerCase().includes(term) ||
      item.translationRu.toLowerCase().includes(term) ||
      item.definitionEn.toLowerCase().includes(term)
    );
  }, [searchTerm, vocabFullList]);

  // Get categories available for the currently selected band and current search term
  const categories = useMemo(() => {
    const set = new Set<string>();
    wordsMatchingSearch.forEach(item => {
      const matchesBand = selectedBand === 'All' || item.band === selectedBand;
      if (matchesBand) {
        set.add(item.category);
      }
    });
    return ['All', ...Array.from(set).sort()];
  }, [wordsMatchingSearch, selectedBand]);

  // Get bands available for the currently selected category and current search term
  const bands = useMemo(() => {
    const set = new Set<string>();
    wordsMatchingSearch.forEach(item => {
      const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
      if (matchesCat) {
        set.add(item.band);
      }
    });
    return ['All', ...Array.from(set).sort((a, b) => parseFloat(a) - parseFloat(b))];
  }, [wordsMatchingSearch, selectedCategory]);

  // Manage safe resets for category and band dropdowns so they don't get stuck on empty matches
  useEffect(() => {
    if (selectedCategory !== 'All' && !categories.includes(selectedCategory)) {
      setSelectedCategory('All');
    }
  }, [categories, selectedCategory]);

  useEffect(() => {
    if (selectedBand !== 'All' && !bands.includes(selectedBand)) {
      setSelectedBand('All');
    }
  }, [bands, selectedBand]);

  // Translate a word to Spanish, Russian or English
  function getTranslation(wordObj: VocabWord) {
    if (lang === 'es') return wordObj.translationEs;
    if (lang === 'ru') return wordObj.translationRu;
    return wordObj.translationEn;
  }

  // Definition helper based on current language
  function getDefinition(wordObj: VocabWord) {
    if (lang === 'es') return wordObj.definitionEs;
    if (lang === 'ru') return wordObj.definitionRu;
    return wordObj.definitionEn;
  }

  // Filtered List matching rules
  const filteredWords = useMemo(() => {
    setCurrentPage(1); // Revert to page 1 on search change
    return wordsMatchingSearch.filter(item => {
      const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesBand = selectedBand === 'All' || item.band === selectedBand;
      return matchesCat && matchesBand;
    });
  }, [wordsMatchingSearch, selectedCategory, selectedBand]);

  // Pagination Slice
  const paginatedWords = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredWords.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredWords, currentPage]);

  const totalPages = Math.ceil(filteredWords.length / itemsPerPage);

  // Play word sound using SpeechSynthesis
  const playWordAudio = (wordText: string) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(wordText);
    utterance.lang = 'en-GB'; // British English for standard pronunciation
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 select-none">
      {/* Title & Introduction Segment */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-slate-200 pb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-2 tracking-tight uppercase italic flex items-center gap-2.5 sm:gap-3">
            <span className="text-blue-600"><BookOpen className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10" /></span> 
            {lang === 'es' ? 'Vocabulario Académico' : lang === 'ru' ? 'Академический Словарь' : 'Academic Vocabulary'}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base md:text-lg">
            {lang === 'es' 
              ? 'Explora 1,000 términos clave de alto impacto diseñados para escalar tu nivel para el EXCI rápidamente.' 
              : lang === 'ru' 
                ? 'Изучите 1 000 ключевых и академических слов для быстрого повышения вашего балла EXCI.' 
                : 'Accelerate your EXCI preparation. Browse 1,000 high-scoring academic stems, phrasal verbs, and connectors.'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Columns - Interactive Search & Main Directory Grid */}
        <div className={lang === 'en' ? "lg:col-span-3 space-y-6" : "lg:col-span-2 space-y-6"}>
          
          {/* Filtering Controller */}
          <div className="bg-white p-5 rounded-[24px] border border-slate-200 shadow-sm space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={
                  isMobile 
                    ? (lang === 'es' ? 'Buscar palabra...' : lang === 'ru' ? 'Поиск слов...' : 'Search word...')
                    : (lang === 'es' ? 'Buscar por término, traducción o definición...' : lang === 'ru' ? 'Поиск по слову, переводу или дефиниции...' : 'Search by word, translation or definition...')
                }
                className="w-full bg-slate-50 border border-slate-100 focus:outline-none focus:border-blue-500 focus:bg-white transition-all pl-12 pr-4 py-3 sm:py-3.5 rounded-xl font-medium text-xs sm:text-sm"
              />
            </div>

            <div className="flex flex-wrap gap-3 items-center">
              {/* Category Filter */}
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-lg max-w-full">
                <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="text-[10px] font-bold uppercase text-slate-500 tracking-wider shrink-0">
                  {lang === 'es' ? 'Categoría' : lang === 'ru' ? 'Категория' : 'Category'}:
                </span>
                <select 
                  value={selectedCategory} 
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-transparent text-xs font-bold text-slate-700 outline-none cursor-pointer py-1 max-w-[120px] sm:max-w-[240px] md:max-w-none truncate"
                >
                  {categories.map(c => (
                    <option key={c} value={c}>
                      {translateCategory(c, lang)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Band Filter */}
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-lg max-w-full">
                <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="text-[10px] font-bold uppercase text-slate-500 tracking-wider shrink-0">
                  {lang === 'es' ? 'Puntaje' : lang === 'ru' ? 'Балл' : 'EXCI Level'}:
                </span>
                <select 
                  value={selectedBand} 
                  onChange={(e) => setSelectedBand(e.target.value)}
                  className="bg-transparent text-xs font-bold text-slate-700 outline-none cursor-pointer max-w-[120px] sm:max-w-none truncate"
                >
                  <option value="All">{lang === 'es' ? 'Cualquiera' : lang === 'ru' ? 'Любой' : 'Any'}</option>
                  {bands.filter(b => b !== 'All').map(b => (
                    <option key={b} value={b}>
                      {lang === 'es' ? 'Puntaje' : 'Band'} {b}+
                    </option>
                  ))}
                </select>
              </div>

              {searchTerm || selectedCategory !== 'All' || selectedBand !== 'All' ? (
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                    setSelectedBand('All');
                  }}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 ml-auto"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> {lang === 'es' ? 'Restaurar filtros' : lang === 'ru' ? 'Сбросить' : 'Reset filters'}
                </button>
              ) : null}
            </div>
          </div>

          {/* Words Listing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {paginatedWords.length > 0 ? paginatedWords.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: (index % 6) * 0.05 }}
                className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 group transition-all relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[9px] font-black uppercase tracking-widest text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded-md">
                      {translateCategory(item.category, lang)}
                    </span>
                    <span className="text-[10px] font-black tracking-tight text-white bg-slate-900 px-2.5 py-0.5 rounded-full ring-2 ring-slate-100">
                      {lang === 'es' ? 'Puntaje' : 'Band'} {item.band}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-1.5">
                    <h4 className="text-xl font-black text-slate-900 leading-tight tracking-tight group-hover:text-blue-600 transition-colors uppercase italic">
                      {item.word}
                    </h4>
                    <button 
                      onClick={() => playWordAudio(item.word)}
                      className="p-1.5 hover:bg-blue-50 text-slate-400 hover:text-blue-600 rounded-full transition-colors shrink-0"
                      title="Profound Pronunciation"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Phonogram */}
                  <div className="font-mono text-xs text-slate-400 font-medium mb-3">
                    {item.ipa}
                  </div>

                  {/* Translation in language */}
                  <div className="text-sm font-black text-slate-800 border-l-2 border-slate-250 pl-2.5 py-0.5 mb-2.5 bg-slate-50/50 rounded-r-md">
                    {getTranslation(item)}
                  </div>

                  {/* Definition */}
                  <p className="text-xs text-slate-500 leading-relaxed font-normal italic mb-3">
                    "{getDefinition(item)}"
                  </p>
                </div>

                {/* Example sentence */}
                <div className="mt-2 pt-2.5 border-t border-slate-100">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                    {lang === 'es' ? 'Ejemplo de uso' : lang === 'ru' ? 'Пример использования' : 'Usage Example'}
                  </p>
                  <p className="text-xs text-slate-600 font-medium leading-normal bg-slate-50 p-2 rounded-lg">
                    {item.exampleEn}
                  </p>
                </div>
              </motion.div>
            )) : (
              <div className="col-span-full py-16 text-center bg-white rounded-[32px] border border-slate-200">
                <p className="font-bold text-sm text-slate-400 uppercase tracking-widest">
                  {lang === 'es' ? 'Sin coincidencias' : lang === 'ru' ? 'Слова не найдены' : 'No words match criteria'}
                </p>
              </div>
            )}
          </div>

          {/* Pagination bar */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between bg-white px-6 py-4 rounded-xl border border-slate-200">
              <span className="text-xs font-semibold text-slate-500">
                {lang === 'es' 
                  ? `Mostrando ${filteredWords.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1}-${Math.min(currentPage * itemsPerPage, filteredWords.length)} de ${filteredWords.length} términos`
                  : lang === 'ru'
                    ? `Показано ${filteredWords.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1}-${Math.min(currentPage * itemsPerPage, filteredWords.length)} из ${filteredWords.length} слов`
                    : `Showing ${filteredWords.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1}-${Math.min(currentPage * itemsPerPage, filteredWords.length)} of ${filteredWords.length} items`}
              </span>

              <div className="flex gap-1">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                  className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed text-slate-600"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <div className="px-4 py-2 border border-slate-250 bg-slate-50/50 rounded-lg text-xs font-bold text-slate-800">
                  {currentPage} / {totalPages}
                </div>
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                  className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed text-slate-600"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Right Columns - Quick Quiz Widget & Progress Panel */}
        {lang !== 'en' && (
          <div className="space-y-6">
            <div className="p-6 bg-slate-9 border border-slate-200 bg-white rounded-[32px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-5">
              <Sparkles className="w-24 h-24" />
            </div>

            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-ping"></div>
              <p className="text-[10px] font-black tracking-widest uppercase text-blue-600">
                {lang === 'es' ? 'Práctica Interactiva' : lang === 'ru' ? 'Практика слов' : 'Quick Study Method'}
              </p>
            </div>

            <h3 className="text-2xl font-black mb-1 leading-snug uppercase italic">
              {lang === 'es' ? 'Repaso Rápido' : lang === 'ru' ? 'Быстрый Тест' : 'EXCI Flashcard'}
            </h3>
            <p className="text-xs text-slate-500 mb-6 font-normal">
              {lang === 'es' 
                ? '¿Puedes seleccionar la traducción correcta para este término académico?' 
                : lang === 'ru' 
                  ? 'Сможете угадать верный перевод академического термина?' 
                  : 'Test your understanding on high-impact vocabulary.'}
            </p>

            {quizWord && (
              <div className="space-y-6">
                {/* Term and IPA */}
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                  <div className="text-2xl font-black text-slate-900 tracking-tight uppercase italic mb-1 flex items-center justify-center gap-2">
                    {quizWord.word}
                    <button 
                      onClick={() => playWordAudio(quizWord.word)}
                      className="p-1 text-slate-400 hover:text-blue-600 rounded-full shrink-0"
                    >
                      <Volume2 className="w-4.5 h-4.5" />
                    </button>
                  </div>
                  <span className="font-mono text-xs text-slate-400">{quizWord.ipa}</span>
                  <div className="mt-2 text-[9px] uppercase font-bold tracking-widest text-[#2563EB] bg-[#EFF6FF] px-2 py-0.5 rounded inline-block">
                    {lang === 'es' ? 'Puntaje' : 'Band'} {quizWord.band} • {translateCategory(quizWord.category, lang)}
                  </div>
                </div>

                {/* Options List */}
                <div className="space-y-2.5">
                  {quizOptions.map((opt) => {
                    const isSelected = selectedAns === opt;
                    const correctText = getTranslation(quizWord);
                    const isCorrectOption = opt === correctText;
                    
                    let btnClass = "border-slate-100 hover:border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100";
                    if (selectedAns) {
                      if (isCorrectOption) {
                        btnClass = "border-emerald-200 bg-emerald-50 text-emerald-900";
                      } else if (isSelected) {
                        btnClass = "border-red-200 bg-red-50 text-red-900";
                      } else {
                        btnClass = "opacity-40 border-slate-100 bg-slate-50 text-slate-500 cursor-not-allowed";
                      }
                    }

                    return (
                      <button
                        key={opt}
                        disabled={!!selectedAns}
                        onClick={() => handleSelectAns(opt)}
                        className={`w-full p-3.5 text-left rounded-xl border-2 transition-all font-semibold text-xs flex items-center justify-between ${btnClass}`}
                      >
                        <span>{opt}</span>
                        {selectedAns && isCorrectOption && <Check className="w-4 h-4 text-emerald-600 shrink-0" />}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation Card */}
                {selectedAns && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`p-4 rounded-xl text-xs space-y-2 ${isCorrect ? 'bg-emerald-50/60 border border-emerald-100 text-emerald-900' : 'bg-red-50/60 border border-red-100 text-red-900'}`}
                  >
                    <p className="font-black uppercase tracking-widest text-[9px]">
                      {isCorrect 
                        ? (lang === 'es' ? '¡Excelente!' : lang === 'ru' ? 'Превосходно!' : 'Excellent Correct Answer!')
                        : (lang === 'es' ? 'Respuesta Incorrecta' : lang === 'ru' ? 'Неверно' : 'Incorrect Choice')
                      }
                    </p>
                    <p className="font-medium">
                      <strong className="uppercase italic">{quizWord.word}</strong>: "{getDefinition(quizWord)}"
                    </p>
                    <p className="font-mono text-[10px] opacity-70 italic">
                      "{quizWord.exampleEn}"
                    </p>
                  </motion.div>
                )}

                <button
                  onClick={handleNextQuiz}
                  className="w-full bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] py-3.5 rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" /> {lang === 'es' ? 'Siguiente Palabra' : lang === 'ru' ? 'Следующее Слово' : 'Next Card'}
                </button>
              </div>
            )}
          </div>

        </div>
        )}
      </div>
    </div>
  );
}
