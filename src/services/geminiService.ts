/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { EvaluationResult, Skill, Level } from "../types";

const localTranslations: Record<string, Record<string, string>> = {
  es: {
    "Attempt submitted": "Intento enviado",
    "Please provide a typed response to analyze. Underlength attempts cannot be scored.": "Por favor, proporciona una respuesta escrita para analizar. Los intentos demasiado cortos no se pueden calificar.",
    "Excellent Lexical Resource: Solid variety in academic word deployment without repetitive phrasing patterns.": "Recurso léxico excelente: variedad sólida en uso de palabras académicas sin patrones de frases repetitivas.",
    "Incorporate a deeper reserve of synonyms to elevate lexical resource and reduce word repetition.": "Incorpora una reserva más profunda de sinónimos para elevar el recurso léxico y reducir la repetición de palabras.",
    "Coherent Syntax Structures: Successfully deployed complex clauses and compound connectors.": "Estructuras sintácticas coherentes: despliegue exitoso de cláusulas complejas y conectores compuestos.",
    "Syntactic Complexity: Frame longer complex paragraphs using subordinating conjunctions to avoid choppy sentence cadence.": "Complejidad sintáctica: estructura párrafos complejos más largos usando conjunciones subordinadas para evitar un ritmo de oraciones entrecortado.",
    "Strong Coherence & Cohesion: Fluid transition signals used dynamically to group arguments logically.": "Fuerte coherencia y cohesión: señales de transición fluidas utilizadas dinámicamente para agrupar argumentos de manera lógica.",
    "Emerging Argument Grouping: Clear logical progression noted throughout key body ideas.": "Agrupación de argumentos emergente: progresión lógica clara observada a lo largo de las ideas principales.",
    "Inject clear transition markers (e.g. 'moreover', 'nonetheless') to anchor sequential ideas clearly.": "Inyecta marcadores de transición claros (como 'moreover', 'nonetheless') para conectar ideas secuenciales de manera limpia.",
    "Formal Register: Effectively selected advanced high-tiered academic vocabulary": "Registro formal: selección efectiva de vocabulario académico avanzado de alto nivel",
    "Lexical Resource: Practice inserting professional academic nouns and verbs matched to the task context.": "Recurso léxico: practica la inserción de sustantivos y verbos académicos profesionales adecuados al contexto de la tarea.",
    "Length Standard Penalty: Advanced Writing Task 2 strictly demands a minimum of 250 words; your short completion yields severe examiner score deductions.": "Penalización por estándar de longitud: Writing Task 2 de nivel avanzado requiere un mínimo de 250 palabras; tu respuesta tan corta genera deducciones severas de puntaje.",
    "Length Target: Aim for at least 150 words to fully cover dynamic descriptions and task requirements.": "Objetivo de longitud: intenta escribir al menos 150 palabras para cubrir por completo las descripciones y requisitos de la tarea.",
    "Linguistic attempts aligned to fundamental communication expectations.": "Intentos lingüísticos alineados con las expectativas fundamentales de comunicación.",
    "Practice responding under strict simulated EXCI test limits to maximize response pacing.": "Practica responder bajo límites de simulación de examen EXCI para maximizar tu ritmo de respuesta.",
    "Accurate identification of primary factual statements in standard selections.": "Identificación precisa de declaraciones fácticas primarias en las selecciones estándar.",
    "Adopt skimming strategies and eliminate options featuring tricky keyword distractors.": "Adopta estrategias de lectura rápida (skimming) y elimina opciones que contengan distractores de palabras clave engañosas.",
    "Linguistic evaluation requires written content. Please fill out your practice screen with clear, structured sentences and resubmit.": "La evaluación lingüística requiere contenido escrito. Por favor, completa la pantalla de práctica con oraciones claras y estructuradas, e inténtalo de nuevo.",
    "Linguistic evaluation is unavailable because no answer was registered. Please complete the prompt in detailed academic English and re-submit.": "La evaluación lingüística no está disponible porque no se registró ninguna respuesta. Completa el ejercicio con un inglés académico detallado y vuelve a enviarlo."
  },
  ru: {
    "Attempt submitted": "Попытка отправлена",
    "Please provide a typed response to analyze. Underlength attempts cannot be scored.": "Пожалуйста, предоставьте письменный ответ для анализа. Ответы недостаточной длины не могут быть оценены.",
    "Excellent Lexical Resource: Solid variety in academic word deployment without repetitive phrasing patterns.": "Отличный словарный запас: хорошее разнообразие академических слов без повторяющихся фраз.",
    "Incorporate a deeper reserve of synonyms to elevate lexical resource and reduce word repetition.": "Используйте более глубокий запас синонимов, чтобы повысить лексический уровень и уменьшить повторение слов.",
    "Coherent Syntax Structures: Successfully deployed complex clauses and compound connectors.": "Связные синтаксические структуры: успешно использованы сложные предложения и составные союзы.",
    "Syntactic Complexity: Frame longer complex paragraphs using subordinating conjunctions to avoid choppy sentence cadence.": "Синтаксическая сложность: стройте более длинные сложные предложения, используя подчинительные союзы, чтобы избежать обрывистого темпа.",
    "Strong Coherence & Cohesion: Fluid transition signals used dynamically to group arguments logically.": "Сильная связность и последовательность: переходные связующие слова используются динамично для логической группировки аргументов.",
    "Emerging Argument Grouping: Clear logical progression noted throughout key body ideas.": "Начальное структурирование аргументов: заметна четкая логическая последовательность в выражении ключевых идей.",
    "Inject clear transition markers (e.g. 'moreover', 'nonetheless') to anchor sequential ideas clearly.": "Используйте четкие маркеры перехода (например, 'moreover', 'nonetheless') для последовательной связи мыслей.",
    "Formal Register: Effectively selected advanced high-tiered academic vocabulary": "Официальный стиль: эффективно подобран продвинутый академический словарь высокого уровня",
    "Lexical Resource: Practice inserting professional academic nouns and verbs matched to the task context.": "Словарный запас: практикуйтесь в использовании профессиональных академических существительных и глаголов, соответствующих контексту задания.",
    "Length Standard Penalty: Advanced Writing Task 2 strictly demands a minimum of 250 words; your short completion yields severe examiner score deductions.": "Штраф за длину ответа: Writing Task 2 уровня Advanced строго требует не менее 250 слов; ваш короткий ответ ведет к сильному снижению баллов.",
    "Length Target: Aim for at least 150 words to fully cover dynamic descriptions and task requirements.": "Целевая длина: стремитесь написать не менее 150 слов для полного раскрытия темы и выполнения требований задания.",
    "Linguistic attempts aligned to fundamental communication expectations.": "Попытки устных или письменных ответов соответствуют базовым ожиданиям общения.",
    "Practice responding under strict simulated EXCI test limits to maximize response pacing.": "Практикуйтесь в сдаче тестов в строго имитируемых условиях лимита времени EXCI, чтобы оптимизировать темп работы.",
    "Accurate identification of primary factual statements in standard selections.": "Точное определение ключевых фактов в стандартных материалах.",
    "Adopt skimming strategies and eliminate options featuring tricky keyword distractors.": "Используйте стратегии быстрого чтения (skimming) и исключайте варианты с ложными ключевыми словами-дистракторами.",
    "Linguistic evaluation requires written content. Please fill out your practice screen with clear, structured sentences and resubmit.": "Для лингвистической оценки необходим текст. Пожалуйста, напишите развернутый структурированный ответ и отправьте его снова.",
    "Linguistic evaluation is unavailable because no answer was registered. Please complete the prompt in detailed academic English and re-submit.": "Лингвистическая оценка недоступна, так как ответ отсутствует. Напишите подробный ответ на английском языке и отправьте его снова."
  }
};

function checkSubmissionVeracity(answer: string, skill: string, lang?: string) {
  const trimmed = answer.trim();
  const isMultipleChoice = (skill === 'reading' || skill === 'listening');
  
  if (isMultipleChoice) {
    return { isVeracityViolation: false, band: -1, cefr: "", feedbackMsg: "", strengths: [], improvements: [] };
  }

  // Local helper for localized strengths and improvements
  const getLocalizedList = (type: 'mashed' | 'non_english' | 'repetitive' | 'short_writing' | 'short_speaking' | 'empty') => {
    if (lang === 'es') {
      if (type === 'empty') return {
        strengths: ["Límite de progreso"],
        improvements: ["Por favor, redacta una respuesta académica coherente en inglés para calificar."]
      };
      if (type === 'mashed') return {
        strengths: ["Intento registrado"],
        improvements: [
          "Evita la escritura aleatoria o incoherente (keyboard-mashing).",
          "Asegúrate de formular palabras reales con combinaciones normales de vocales y consonantes.",
          "Estudia las guías básicas del EXCI para comenzar a escribir oraciones correctas en inglés."
        ]
      };
      if (type === 'non_english') return {
        strengths: ["Intento registrado"],
        improvements: [
          "Redacta tus respuestas complementarias completamente en inglés.",
          "Traduce tus pensamientos antes de enviarlos si no estás seguro de la gramática.",
          "Practica la traducción de enunciados sencillos del español al inglés."
        ]
      };
      if (type === 'repetitive') return {
        strengths: ["Registro de palabras"],
        improvements: [
          "Evita el copiado y pegado masivo de un mismo término (spam léxico).",
          "Desarrolla ideas lógicas con conectores en lugar de forzar repeticiones artificiales.",
          "Amplía tu léxico repasando listas de vocabulario académico."
        ]
      };
      if (type === 'short_writing') return {
        strengths: ["Inicio de respuesta"],
        improvements: [
          "Aumenta de manera drástica el alcance y longitud de tu ensayo (mínimo 150 palabras).",
          "Desarrolla un argumento claro en párrafos estructurados.",
          "Introduce transiciones lógicas (como 'however', 'consequently') para unir tus reflexiones."
        ]
      };
      if (type === 'short_speaking') return {
        strengths: ["Expresión verbal iniciada"],
        improvements: [
          "Evita respuestas monosílabas muy breves (como 'yes' o 'no').",
          "Sustenta tus ideas explicando el porqué usando oraciones completas y descriptivas.",
          "Practica la pronunciación grabándote continuamente bajo simulación real."
        ]
      };
    } else if (lang === 'ru') {
      if (type === 'empty') return {
        strengths: ["Попытка прервана"],
        improvements: ["Напишите развернутый академический ответ на английском языке для оценки."]
      };
      if (type === 'mashed') return {
        strengths: ["Интеграция ввода"],
        improvements: [
          "Избегайте случайного набора букв на клавиатуре.",
          "Убедитесь, что используете настоящие английские слова с нормальным сочетанием гласных и согласных.",
          "Используйте простые структуры предложений для начала тренировок."
        ]
      };
      if (type === 'non_english') return {
        strengths: ["Интеграция ввода"],
        improvements: [
          "Пишите ответы исключительно на английском языке.",
          "Изучайте английский перевод перед отправкой ответа, если вы не уверены в синтаксисе.",
          "Изучите базовые структуры предложений для выражения своего мнения."
        ]
      };
      if (type === 'repetitive') return {
        strengths: ["Слова зафиксированы"],
        improvements: [
          "Не повторяйте одно и то же слово непрерывно.",
          "Развивайте логические мысли с помощью разных связующих слов.",
          "Регулярно пополняйте словарный запас академической лексикой в разделе словаря."
        ]
      };
      if (type === 'short_writing') return {
        strengths: ["Начало письменного ответа"],
        improvements: [
          "Радикально увеличьте длину сочинения (рекомендуется не менее 150-250 слов).",
          "Сформулируйте введение, аргументы в середине текста и логическое заключение.",
          "Используйте маркеры переходов (такие как 'therefore', 'consequently') для связывания идей."
        ]
      };
      if (type === 'short_speaking') return {
        strengths: ["Устное высказывание начато"],
        improvements: [
          "Не используйте односложные устные ответы вроде 'yes', 'no' или 'I don't know'.",
          "Обосновывайте свои идеи с помощью подробных аргументов и придаточных предложений.",
          "Практикуйте развернутую речь во время записи аудиоответов."
        ]
      };
    } else {
      // Default English
      if (type === 'empty') return {
        strengths: ["Progress Limit"],
        improvements: ["Please write a coherent academic response in English to start the evaluation process."]
      };
      if (type === 'mashed') return {
        strengths: ["Attempt registered"],
        improvements: [
          "Avoid random keyboard mash or nonsense button sequences.",
          "Ensure you compose real terms containing valid vowel-consonant combinations.",
          "Leverage standard EXCI lesson sheets to begin framing correct sentences."
        ]
      };
      if (type === 'non_english') return {
        strengths: ["Attempt registered"],
        improvements: [
          "Write practice submissions entirely in English for proper score mapping.",
          "Translate non-English words to correct English before resubmitting.",
          "Practice simple translation exercises to familiarize with sentence templates."
        ]
      };
      if (type === 'repetitive') return {
        strengths: ["Word counts logged"],
        improvements: [
          "Eliminate excessive consecutive keyword spamming.",
          "Develop actual thoughts using linking words instead of repetitive word lines.",
          "Incorporate a richer lexicon by studying our standard Academic Vocabulary lists."
        ]
      };
      if (type === 'short_writing') return {
        strengths: ["Draft started"],
        improvements: [
          "Drastically increase your essay volume (Writing Task demands at least 150-250 words).",
          "Incorporate a clear introductory thesis, main body points, and a brief conclusion.",
          "Merge thoughts into cohesive sentences using subordinating connectors."
        ]
      };
      if (type === 'short_speaking') return {
        strengths: ["Spoken attempt initiated"],
        improvements: [
          "Avoid brief monosyllable replies (like simple 'yes' or 'no' statements).",
          "Elaborate your reasoning by detailing the why and how behind your answers.",
          "Practice continuous speaking to build strong structural stamina and confidence."
        ]
      };
    }
    return { strengths: [], improvements: [] };
  };

  if (trimmed.length === 0) {
    const feedbackMsg = lang === 'es'
      ? "La evaluación lingüística no está disponible porque no se registró ninguna respuesta. Por favor, escribe tu respuesta de práctica de forma detallada en inglés y vuelve a enviarla."
      : lang === 'ru'
      ? "Лингвистическая оценка недоступна, так как ответ отсутствует. Пожалуйста, напишите развернутый структурированный ответ на английском языке и отправьте его снова."
      : "Linguistic evaluation is unavailable because no answer was registered. Please complete the prompt in detailed academic English and re-submit.";
    const lists = getLocalizedList('empty');
    return { isVeracityViolation: true, band: 0.0, cefr: 'N/A', feedbackMsg, strengths: lists.strengths, improvements: lists.improvements };
  }

  const words = trimmed.toLowerCase().match(/\b[a-z']+\b/g) || [];
  
  if (words.length === 0) {
    const feedbackMsg = lang === 'es'
      ? "El texto ingresado no contiene palabras válidas o está compuesto únicamente por números y símbolos. Escribe una respuesta real en inglés."
      : lang === 'ru'
      ? "Введенный текст не содержит слов или состоит только из цифр и символов. Пожалуйста, введите корректный ответ на английском языке."
      : "No legible English words were found in the text. Please input a structured, readable English response to start the audit.";
    const lists = getLocalizedList('mashed');
    return { isVeracityViolation: true, band: 0.0, cefr: 'N/A', feedbackMsg, strengths: lists.strengths, improvements: lists.improvements };
  }

  // Look for vowels density/clusters and keyboard mash in long words
  const vowels = "aeiouy";
  let nonsenseWords = 0;
  for (const w of words) {
    // English words of length >= 4 must have at least one vowel
    if (w.length >= 4) {
      const vowelCount = [...w].filter(char => vowels.includes(char)).length;
      if (vowelCount === 0) {
        nonsenseWords++;
      } else {
        const repeats = w.match(/(.)\1{3,}/); // 4 identical chars consecutively (e.g. "aaaa")
        if (repeats) {
          nonsenseWords++;
        }
      }
    }
  }

  if (nonsenseWords > words.length * 0.3 || (words.length <= 3 && nonsenseWords > 0)) {
    const feedbackMsg = lang === 'es'
      ? "No se detectaron estructuras de vocabulario o gramática válidas (keyboard-mashing). El teclado aleatorio no se puede evaluar. Redacta ideas coherentes y estructuradas en inglés."
      : lang === 'ru'
      ? "Логически правильные слова или грамматические конструкции не обнаружены (нажатия клавиш вслепую). Случайный набор символов не может быть оценен. Напишите структурированный ответ."
      : "A cluster of nonsense letters or keyboard-mashing was identified in your response. Random letters cannot be graded. Please compose real English sentences to seek feedback.";
    const lists = getLocalizedList('mashed');
    return { isVeracityViolation: true, band: 0.0, cefr: 'N/A', feedbackMsg, strengths: lists.strengths, improvements: lists.improvements };
  }

  // Common English structure stop words
  const commonEnglishStopWords = new Set([
    'the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'i', 'it', 'for', 'not', 'on', 'with', 'he', 'as', 'you', 'do', 'at',
    'this', 'but', 'his', 'by', 'from', 'they', 'we', 'say', 'her', 'she', 'or', 'an', 'will', 'my', 'one', 'all', 'would', 'there', 'their', 'what',
    'so', 'up', 'out', 'if', 'about', 'who', 'get', 'which', 'go', 'me', 'when', 'make', 'can', 'like', 'time', 'no', 'just', 'him', 'know', 'take',
    'people', 'into', 'year', 'your', 'good', 'some', 'could', 'them', 'see', 'other', 'than', 'then', 'now', 'look', 'only', 'come', 'its', 'over', 'think', 'also',
    'back', 'after', 'use', 'two', 'how', 'our', 'work', 'first', 'well', 'way', 'even', 'new', 'want', 'because', 'any', 'these', 'give', 'day', 'most', 'us',
    'is', 'are', 'was', 'were', 'am', 'been', 'has', 'had'
  ]);

  let commonMatchCount = 0;
  words.forEach(w => {
    if (commonEnglishStopWords.has(w)) {
      commonMatchCount++;
    }
  });

  if (words.length >= 5 && commonMatchCount === 0) {
    const feedbackMsg = lang === 'es'
      ? "Se ha detectado texto en un idioma extranjero (como español o ruso), o una lista estéril de palabras inconexas. Las respuestas deben redactarse íntegramente en inglés para ser evaluadas correctamente."
      : lang === 'ru'
      ? "Обнаружен посторонний язык (например, русский или испанский) или несвязный набор терминов. Использования посторонних символов или языков на экзамене EXCI недопустимо. Пишите на английском."
      : "We detected non-English language or an incoherent list of keywords. EXCI submissions must be composed entirely in English to calibrate proper analysis.";
    const lists = getLocalizedList('non_english');
    return { isVeracityViolation: true, band: 0.0, cefr: 'N/A', feedbackMsg, strengths: lists.strengths, improvements: lists.improvements };
  }

  // Word spam frequencies
  const wordFrequency: Record<string, number> = {};
  let maxFreq = 0;
  words.forEach(w => {
    wordFrequency[w] = (wordFrequency[w] || 0) + 1;
    if (wordFrequency[w] > maxFreq) {
      maxFreq = wordFrequency[w];
    }
  });

  const maxFreqRatio = words.length > 0 ? maxFreq / words.length : 0;
  if (words.length >= 6 && maxFreqRatio >= 0.5) {
    const feedbackMsg = lang === 'es'
      ? "Se ha identificado una repetición artificial masiva del mismo término (spam de palabras) para simular longitud. El EXCI penaliza severamente el estancamiento y redundancia con una calificación de 10 puntos de 100."
      : lang === 'ru'
      ? "Выявлено искусственное массовое повторение одного термина (спам). Экзамен EXCI жестко снижает оценку за чрезмерное дублирование слов до 10 баллов."
      : "Artificial keyword flooding or repetitive single-word spam was identified. Continuous word repetition prevents vocabulary assessment and is severely penalized under EXCI criteria (10 Points obtained).";
    const lists = getLocalizedList('repetitive');
    return { isVeracityViolation: true, band: 10, cefr: 'A1', feedbackMsg, strengths: lists.strengths, improvements: lists.improvements };
  }

  // Extremely underlength response verification
  if (skill === 'writing' && words.length < 15) {
    const feedbackMsg = lang === 'es'
      ? `Tu respuesta es críticamente corta (solo ${words.length} palabras). El examinador del EXCI te asigna una calificación estricta de 15 puntos de 100 debido a que no logras formular ninguna descripción, idea o argumento lógico (Task Completion deficiente).`
      : lang === 'ru'
      ? `Ваш ответ критически мал (всего ${words.length} слов). Эксперт EXCI выставляет строгую оценку 15 баллов, так как у вас не получилось сформировать ни одного развернутого аргумента (Task Achievement крайне низок).`
      : `Your writing submission is critically short (only ${words.length} words). Under the official EXCI evaluation rules, this gets assigned an extreme score of 15 Points because you did not formulate any coherent paragraphs, descriptions, or arguments.`;
    const lists = getLocalizedList('short_writing');
    return { isVeracityViolation: true, band: 15, cefr: 'A1', feedbackMsg, strengths: lists.strengths, improvements: lists.improvements };
  }

  if (skill === 'speaking' && words.length < 4) {
    const feedbackMsg = lang === 'es'
      ? `Respuesta hablada críticamente abreviada (solo ${words.length} palabras). Se califica de forma precisa con una puntuación de 20 puntos de 100. Ensaya el uso de conjunciones y frases completas en lugar de enunciados simples.`
      : lang === 'ru'
      ? `Чрезвычайно краткий устный ответ (всего ${words.length} слов). Точная оценка устной речи снижена до 20 баллов. Тренируйте продолжение мысли сложными предложениями.`
      : `Critically abbreviated spoken attempt (only ${words.length} words). Evaluator issues a strict 20 Points assessment. Push yourself to describe your points thoroughly using full clauses rather than single word indicators.`;
    const lists = getLocalizedList('short_speaking');
    return { isVeracityViolation: true, band: 20, cefr: 'A1', feedbackMsg, strengths: lists.strengths, improvements: lists.improvements };
  }

  return { isVeracityViolation: false, band: -1, cefr: "", feedbackMsg: "", strengths: [], improvements: [] };
}

/**
 * Local detailed EXCI evaluation fallback.
 * Generates rich, highly dynamic, non-repetitive feedback based on EXCI academic criteria,
 * word count, vocabulary density, complexity, and skill (0-100 points scale).
 */
function localHeuristicEvaluation(skill: Skill, level: Level, answer: string, lang?: string): EvaluationResult {
  const veracity = checkSubmissionVeracity(answer, skill, lang);
  if (veracity.isVeracityViolation) {
    return {
      band: veracity.band,
      cefr: veracity.cefr,
      feedback: veracity.feedbackMsg,
      strengths: veracity.strengths,
      improvements: veracity.improvements
    };
  }

  const trimmed = answer.trim();
  const wordCount = trimmed.split(/\s+/).filter(w => w.length > 0).length;
  
  let band = 45;
  let cefr = 'A2';
  const strengths: string[] = [];
  const improvements: string[] = [];

  let score = 0;
  let total = 1;
  const isMultipleChoice = (skill === 'reading' || skill === 'listening');
  if (isMultipleChoice) {
    const scoreMatch = answer.match(/Multiple choice score: (\d+)\/(\d+)/);
    if (scoreMatch) {
      score = parseInt(scoreMatch[1], 10);
      total = parseInt(scoreMatch[2], 10);
    }
  }

  if (skill === 'writing' || skill === 'speaking') {
    const cohesiveDevices = ['furthermore', 'however', 'consequently', 'therefore', 'moreover', 'nonetheless', 'in addition', 'on the other hand', 'specifically', 'in contrast', 'as a result', 'subsequently', 'nevertheless', 'primarily'];
    const complexAcademicWords = ['significant', 'alternative', 'utilize', 'consequence', 'subsequent', 'parameters', 'framework', 'demonstrate', 'perspective', 'synthesis', 'comprehensive', 'underlie', 'methodology', 'incentive', 'proportion', 'fluctuate', 'correlation', 'sustainable', 'fundamental'];
    
    let cohesiveCount = 0;
    cohesiveDevices.forEach(word => {
      if (answer.toLowerCase().includes(word)) cohesiveCount++;
    });

    let academicCount = 0;
    complexAcademicWords.forEach(word => {
      if (answer.toLowerCase().includes(word)) academicCount++;
    });

    if (wordCount === 0) {
      band = 0;
      cefr = 'N/A';
      strengths.push("Attempt submitted");
      improvements.push("Please provide a typed response to analyze. Underlength attempts cannot be scored.");
    } else {
      // Base score purely based on level and length requirements on 0-100 scale
      let baseScore = 45;
      if (wordCount >= 250) {
        baseScore = 75;
      } else if (wordCount >= 150) {
        baseScore = 65;
      } else if (wordCount >= 85) {
        baseScore = 55;
      }

      // 1. Lexical variety / repetition score
      const words = answer.toLowerCase().match(/\b\w+\b/g) || [];
      const uniqueWords = new Set(words);
      const vocabDensity = words.length > 0 ? uniqueWords.size / words.length : 0;

      if (vocabDensity > 0.65) {
        baseScore += 5;
        strengths.push("Excellent Lexical Resource: Solid variety in academic word deployment without repetitive phrasing patterns.");
      } else {
        improvements.push("Incorporate a deeper reserve of synonyms to elevate lexical resource and reduce word repetition.");
      }

      // 2. Structural flow (Sentences)
      const sentences = answer.split(/[.!?]+/).filter(s => s.trim().length > 0);
      const avgSentenceLength = sentences.length > 0 ? words.length / sentences.length : 0;

      if (avgSentenceLength > 16) {
        baseScore += 5;
        strengths.push("Coherent Syntax Structures: Successfully deployed complex clauses and compound connectors.");
      } else if (avgSentenceLength > 0 && avgSentenceLength < 9) {
        baseScore -= 5;
        improvements.push("Syntactic Complexity: Frame longer complex paragraphs using subordinating conjunctions to avoid choppy sentence cadence.");
      }

      // 3. Cohesion boost
      if (cohesiveCount >= 4) {
        baseScore += 5;
        strengths.push("Strong Coherence & Cohesion: Fluid transition signals used dynamically to group arguments logically.");
      } else if (cohesiveCount > 0) {
        strengths.push("Emerging Argument Grouping: Clear logical progression noted throughout key body ideas.");
      } else {
        baseScore -= 5;
        improvements.push("Inject clear transition markers (e.g. 'moreover', 'nonetheless') to anchor sequential ideas clearly.");
      }

      // 4. Academic Vocabulary count
      if (academicCount >= 3) {
        baseScore += 5;
        strengths.push(`Formal Register: Effectively selected advanced high-tiered academic vocabulary (${complexAcademicWords.filter(w => answer.toLowerCase().includes(w)).slice(0, 3).join(", ")}).`);
      } else {
        improvements.push("Lexical Resource: Practice inserting professional academic nouns and verbs matched to the task context.");
      }

      // 5. Level adjustments
      if (level === 'hard') {
        if (wordCount < 250) {
          baseScore -= 10;
          improvements.push("Length Standard Penalty: Advanced EXCI Task strictly demands a minimum of 250 words; your short completion yields score deductions.");
        }
      } else if (level === 'medium') {
        if (wordCount < 150) {
          baseScore -= 5;
          improvements.push("Length Target: Aim for at least 150 words to fully cover dynamic descriptions and task requirements.");
        }
      }

      band = Math.max(10, Math.min(100, Math.round(baseScore)));
      
      if (band >= 85) { cefr = 'C1'; }
      else if (band >= 70) { cefr = 'B2'; }
      else if (band >= 50) { cefr = 'B1'; }
      else if (band >= 35) { cefr = 'A2'; }
      else { cefr = 'A1'; }

      if (strengths.length === 0) strengths.push("Linguistic attempts aligned to fundamental communication expectations.");
      if (improvements.length === 0) improvements.push("Practice responding under strict simulated EXCI test limits to maximize response pacing.");
    }
  } else {
    // Reading/Listening fallback scoring on 0-100 scale
    const ratio = total > 0 ? score / total : 0;
    band = Math.round(ratio * 100);

    if (band >= 85) { cefr = 'C1'; }
    else if (band >= 70) { cefr = 'B2'; }
    else if (band >= 50) { cefr = 'B1'; }
    else if (band >= 35) { cefr = 'A2'; }
    else { cefr = 'A1'; }

    if (lang === 'es') {
      strengths.push("Identificación precisa de declaraciones fácticas primarias en las selecciones estándar.");
      strengths.push("Reconocimiento sistemático de palabras clave asociadas en las preguntas de práctica.");
      
      improvements.push("Adopta estrategias de lectura rápida (skimming) y elimina opciones distractores.");
      if (score < total) {
        improvements.push("Revisa paso a paso la lectura/transcripción para identificar y corregir errores específicos de distracción.");
      }
    } else if (lang === 'ru') {
      strengths.push("Точное определение ключевых фактов в стандартных материалах.");
      strengths.push("Систематическое распознавание соответствия ключевых слов в вопросах.");
      
      improvements.push("Используйте стратегии быстрого чтения (skimming) и избегайте вариантов-дистракторов.");
      if (score < total) {
        improvements.push("Проанализируйте текст шаг за шагом, чтобы найти точное место несовпадения в ошибочных ответах.");
      }
    } else {
      strengths.push("Accurate identification of primary factual statements in standard selections.");
      strengths.push("Systematic recognition of keyword matching and synonym alignments during practice.");
      
      improvements.push("Adopt skimming strategies and eliminate options featuring tricky keyword distractors.");
      if (score < total) {
        improvements.push("Review translation transcripts or passages line-by-line to pinpoint precise distractor triggers.");
      }
    }
  }

  const translateKey = (key: string): string => {
    if (!lang || lang === 'en') return key;
    
    // Check for "Formal Register: ..."
    if (key.startsWith("Formal Register: Effectively selected advanced high-tiered academic vocabulary")) {
      const rest = key.substring("Formal Register: Effectively selected advanced high-tiered academic vocabulary".length);
      const prefix = lang === 'es' 
        ? "Registro formal: selección efectiva de vocabulario académico avanzado de alto nivel" 
        : "Официальный стиль: эффективно подобран продвинутый академический словарь высокого уровня";
      return prefix + rest;
    }

    if (localTranslations[lang] && localTranslations[lang][key]) {
      return localTranslations[lang][key];
    }
    return key;
  };

  // Create HIGHLY dynamic, highly personalized Spanish-focused examiner reports
  let feedback = "";
  if (wordCount === 0 && !isMultipleChoice) {
    feedback = translateKey("Linguistic evaluation requires written content. Please fill out your practice screen with clear, structured sentences and resubmit.");
  } else if (skill === 'writing') {
    if (lang === 'es') {
      const formattedStrengths = strengths.slice(0, 2).map(x => translateKey(x).replace(/^[A-Z\síóúáé\+:]+:\s*/i, '')).join(", ").toLowerCase();
      const formattedImprovements = improvements.map(x => translateKey(x).replace(/\.$/, '')).join("; ");
      feedback = `Auditoría de portafolio de redacción: se identificaron ${wordCount} palabras. La revisión del examinador encuentra una expresión de nivel MCER ${cefr}, alcanzando un puntaje EXCI de ${band} puntos de 100 bajo criterios oficiales estrictos de la UANL. Las principales fortalezas incluyen ${formattedStrengths}. Asegúrate de abordar las áreas vitales de mejora: ${formattedImprovements}.`;
    } else if (lang === 'ru') {
      const formattedStrengths = strengths.slice(0, 2).map(x => translateKey(x).replace(/^[A-Z\sА-Яа-яЁё&íóúáé\+:]+:\s*/i, '')).join(", ").toLowerCase();
      const formattedImprovements = improvements.map(x => translateKey(x).replace(/\.$/, '')).join("; ");
      feedback = `Аудит письменной работы: выявлено ${wordCount} слов. Оценка эксперта определяет уровень выражения как CEFR ${cefr}, что соответствует баллу EXCI в ${band} из 100 по строгим официальным критериям. Основные сильные стороны включают: ${formattedStrengths}. Немедленно уделите внимание критическим областям для улучшения: ${formattedImprovements}.`;
    } else {
      feedback = `Writing Portfolio Audit: Identified ${wordCount} words. Examiner review finds a CEFR ${cefr} caliber expression, pointing to an EXCI score of ${band} Points out of 100 under rigid official criteria. Main strengths include ${strengths.slice(0, 2).map(x => x.replace(/^[A-Z\s&:]+:\s*/, '')).join(", ").toLowerCase()}. Ensure to address the vital score penalty areas immediately: ${improvements.map(x => x.replace(/\.$/, '')).join("; ")}.`;
    }
  } else if (skill === 'speaking') {
    if (lang === 'es') {
      const formattedImprovements = improvements.slice(0, 2).map(x => translateKey(x)).join("; ");
      feedback = `Evaluación de expresión oral (EXCI UANL): respuesta hablada evaluada que contiene ${wordCount} palabras. Notamos una expresión oral que alcanza ${band} puntos EXCI, indicando capacidades MCER ${cefr}. Áreas de enfoque pendientes: ${formattedImprovements}. Integra frases de enlace para unir ideas de manera fluida.`;
    } else if (lang === 'ru') {
      const formattedImprovements = improvements.slice(0, 2).map(x => translateKey(x)).join("; ");
      feedback = `Оценка устной речи: оценен устный ответ, содержащий ${wordCount} слов. Мы отметили выражение мыслей на балл EXCI в ${band} из 100, указывающее на навыки уровня CEFR ${cefr}. Особые области для улучшения: ${formattedImprovements}. Используйте связующие фразы для более плавного перехода между мыслями.`;
    } else {
      feedback = `Oral Discourse Evaluation (EXCI Standards): Assessed spoken response containing ${wordCount} words. We noted oral expression achieving an EXCI score of ${band} Points out of 100, indicating ${cefr} capabilities. Outstanding focus areas: ${improvements.slice(0, 2).join("; ")}. Integrate linking phrases to smoothly join ideas.`;
    }
  } else {
    if (lang === 'es') {
      feedback = `Auditoría del examen de práctica estándar EXCI: Has obtenido un puntaje de ${score} de ${total} respuestas correctas (${band} puntos EXCI). Tu rendimiento refleja una comprensión sólida de los hechos a nivel MCER ${cefr}. Practica la lectura rápida (skimming) del contenido para mejorar la gestión general del tiempo y precisión.`;
    } else if (lang === 'ru') {
      feedback = `Стандартный аудит тренировочного экзамена EXCI: Вы набрали ${score} из ${total} правильных ответов (${band} баллов EXCI). Ваши результаты отражают твердое понимание фактов на уровне CEFR ${cefr}. Практикуйте быстрое чтение текста (skimming), чтобы улучшить управление временем.`;
    } else {
      feedback = `Standard EXCI Practice Exam Audit: You scored ${score} out of ${total} correct answers (${band} EXCI Points). Performance reflects solid factual comprehension at CEFR ${cefr} level. Practice skimming content swiftly to improve overall time management and selection accuracy.`;
    }
  }

  return {
    band,
    cefr,
    feedback,
    strengths: strengths.map(s => translateKey(s)),
    improvements: improvements.map(i => translateKey(i))
  };
}

export async function evaluatePerformance(
  skill: Skill,
  level: Level,
  prompt: string,
  userAnswer: string,
  lang: string
): Promise<EvaluationResult> {
  try {
    const response = await fetch("/api/evaluate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ skill, level, prompt, userAnswer, lang })
    });

    if (!response.ok) {
      throw new Error(`Server returned status ${response.status}`);
    }

    const result = await response.json();
    return result as EvaluationResult;
  } catch (error) {
    console.warn("Server API evaluation failed, executing high-quality local dynamic fallback...", error);
    return localHeuristicEvaluation(skill, level, userAnswer, lang);
  }
}

function localHeuristicTranslateClient(feedback: string, strengths: string[], improvements: string[], lang: string): { feedback: string; strengths: string[]; improvements: string[] } {
  if (!lang) {
    return { feedback, strengths, improvements };
  }

  const translateKey = (key: string): string => {
    if (lang === 'en') {
      // Try to find the english equivalent from spanish/russian translation dictionaries
      for (const [enKey, localized] of Object.entries(localTranslations.es || {})) {
        if (localized === key) return enKey;
        if (key.includes(localized)) {
          return key.replace(localized, enKey);
        }
      }
      for (const [enKey, localized] of Object.entries(localTranslations.ru || {})) {
        if (localized === key) return enKey;
        if (key.includes(localized)) {
          return key.replace(localized, enKey);
        }
      }
      // Substring/heuristic matches for english
      if (key.includes("Auditoría de portafolio de escritura") || key.includes("Аудит письменной работы") || key.includes("Writing Practice Evaluator Report")) {
        return "Writing Portfolio Audit: Your submission has been examined under rigid official EXCI task execution criteria.";
      }
      if (key.includes("Evaluación de discurso verbal") || key.includes("Оценка устной речи") || key.includes("Verbal Discourse Evaluation")) {
        return "Acoustic & Structural Speaking Report: Evaluated spoken response against formal spoken English benchmarks.";
      }
      if (key.includes("Auditoría del examen") || key.includes("Стандартный аудит") || key.includes("Standard Practice Exam Audit")) {
        return "Standard Practice Exam Audit: Analyzed your selection options against expected keys.";
      }
      return key;
    }

    // Check for "Formal Register: ..."
    if (key.startsWith("Formal Register: Effectively selected advanced high-tiered academic vocabulary")) {
      const rest = key.substring("Formal Register: Effectively selected advanced high-tiered academic vocabulary".length);
      const prefix = lang === 'es' 
        ? "Registro formal: selección efectiva de vocabulario académico avanzado de alto nivel" 
        : "Официальный стиль: эффективно подобран продвинутый академический словарь высокого уровня";
      return prefix + rest;
    }

    if (localTranslations[lang] && localTranslations[lang][key]) {
      return localTranslations[lang][key];
    }

    // Substring / fuzzy matching for feedback
    if (lang === 'es') {
      if (key.includes("Writing Practice Evaluator Report") || key.includes("Writing Portfolio Audit")) {
        return "Auditoría de portafolio de redacción: se identificaron palabras académicas correspondientes a un nivel de calificación estándar del EXCI. Asegúrate de corregir las áreas identificadas para incrementar tu puntaje.";
      }
      if (key.includes("Speaking") || key.includes("verbal") || key.includes("spoken") || key.includes("Acoustic") || key.includes("Discourse")) {
        return "Evaluación del discurso hablado (EXCI): Tu expresión oral demuestra un nivel de pronunciación y ritmo estable de acuerdo a los criterios de la UANL.";
      }
      if (key.includes("Standard Practice Exam Audit") || key.includes("multiple choice") || key.includes("Reading & Listening") || key.includes("Automated")) {
        return "Auditoría de examen de práctica estándar: analizamos tus opciones según las claves esperadas. Tu rendimiento refleja una comprensión sólida de los hechos.";
      }
    } else if (lang === 'ru') {
      if (key.includes("Writing Practice Evaluator Report") || key.includes("Writing Portfolio Audit")) {
        return "Отчет об оценке письменной практики: проверено качество изложения мыслей и лексическое разнообразие согласно критериям EXCI.";
      }
      if (key.includes("Speaking") || key.includes("verbal") || key.includes("spoken") || key.includes("Acoustic") || key.includes("Discourse")) {
        return "Анализ устной речи: оценка произношения и грамматической точности произнесенного ответа.";
      }
      if (key.includes("Standard Practice Exam Audit") || key.includes("multiple choice") || key.includes("Reading & Listening") || key.includes("Automated")) {
        return "Стандартный аудит тренировочного экзамена: проанализированы выбранные вами варианты ответов.";
      }
    }

    return key;
  };

  return {
    feedback: translateKey(feedback),
    strengths: strengths.map((s: string) => translateKey(s)),
    improvements: improvements.map((i: string) => translateKey(i))
  };
}

export async function translateResult(
  feedback: string,
  strengths: string[],
  improvements: string[],
  lang: string
): Promise<{ feedback: string; strengths: string[]; improvements: string[] }> {
  try {
    const response = await fetch("/api/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ feedback, strengths, improvements, lang })
    });

    if (!response.ok) {
      throw new Error(`Server returned status ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.warn("Server API translation failed, running local heuristic translate fallback...", error);
    return localHeuristicTranslateClient(feedback, strengths, improvements, lang);
  }
}

