import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

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
          "Estudia las guías básicas de gramática para comenzar a escribir oraciones correctas en inglés."
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
          "Leverage standard grammar guide sheets to begin framing correct sentences."
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
      : "Linguistic evaluation is unavailable because no answer was registered. Please complete the prompt in detailed academic English and re-submit.";
    const lists = getLocalizedList('empty');
    return { isVeracityViolation: true, band: 0.0, cefr: 'N/A', feedbackMsg, strengths: lists.strengths, improvements: lists.improvements };
  }

  const words = trimmed.toLowerCase().match(/\b[a-z']+\b/g) || [];
  
  if (words.length === 0) {
    const feedbackMsg = lang === 'es'
      ? "El texto ingresado no contiene palabras válidas o está compuesto únicamente por números y símbolos. Escribe una respuesta real en inglés."
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
      ? "Se ha detectado texto en un idioma extranjero (como español), o una lista estéril de palabras inconexas. Las respuestas deben redactarse íntegramente en inglés para ser evaluadas correctamente."
      : "We detected non-English language or an incoherent list of keywords. EXCI submissions must be composed entirely in English to calibrate proper examiner analysis.";
    const lists = getLocalizedList('non_english');
    return { isVeracityViolation: true, band: 0, cefr: 'N/A', feedbackMsg, strengths: lists.strengths, improvements: lists.improvements };
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
      : "Artificial keyword flooding or repetitive single-word spam was identified. Continuous word repetition prevents vocabulary assessment and is severely penalized under EXCI criteria (10 Points obtained).";
    const lists = getLocalizedList('repetitive');
    return { isVeracityViolation: true, band: 10, cefr: 'A1', feedbackMsg, strengths: lists.strengths, improvements: lists.improvements };
  }

  // Extremely underlength response verification
  if (skill === 'writing' && words.length < 15) {
    const feedbackMsg = lang === 'es'
      ? `Tu respuesta es críticamente corta (solo ${words.length} palabras). El examinador del EXCI te asigna una calificación estricta de 15 puntos debido a que no logras formular ninguna descripción, idea o argumento lógico (Task Completion deficiente).`
      : `Your writing submission is critically short (only ${words.length} words). Under the official EXCI evaluation rules, this gets assigned an extreme score of 15 Points because you did not formulate any coherent paragraphs, descriptions, or arguments.`;
    const lists = getLocalizedList('short_writing');
    return { isVeracityViolation: true, band: 15, cefr: 'A1', feedbackMsg, strengths: lists.strengths, improvements: lists.improvements };
  }

  if (skill === 'speaking' && words.length < 4) {
    const feedbackMsg = lang === 'es'
      ? `Respuesta hablada críticamente abreviada (solo ${words.length} palabras). Se califica de forma precisa con una puntuación de 20 puntos de 100. Ensaya el uso de conjunciones y frases completas en lugar de enunciados simples.`
      : `Critically abbreviated spoken attempt (only ${words.length} words). Evaluator issues a strict 20 Points assessment. Push yourself to describe your points thoroughly using full clauses rather than single word indicators.`;
    const lists = getLocalizedList('short_speaking');
    return { isVeracityViolation: true, band: 20, cefr: 'A1', feedbackMsg, strengths: lists.strengths, improvements: lists.improvements };
  }

  return { isVeracityViolation: false, band: -1, cefr: "", feedbackMsg: "", strengths: [], improvements: [] };
}

async function generateContentWithRetryAndFallback(
  ai: any,
  params: {
    model?: string;
    contents: any;
    config?: any;
  }
) {
  const primaryModel = params.model || "gemini-3.5-flash";
  const fallbackModel = "gemini-3.1-flash-lite";

  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      console.log(`[Gemini API] Requesting ${primaryModel} (Attempt ${attempt}/2)...`);
      const response = await ai.models.generateContent({
        ...params,
        model: primaryModel,
      });
      if (response && response.text) {
        return response;
      }
      throw new Error(`Empty text returned from ${primaryModel}`);
    } catch (err: any) {
      console.warn(`[Gemini API] Attempt ${attempt} failed with model ${primaryModel}:`, err.message || err);
      if (attempt < 2) {
        const delay = attempt * 1500;
        console.log(`[Gemini API] Sleeping ${delay}ms before retrying...`);
        await sleep(delay);
      }
    }
  }

  console.warn(`[Gemini API] Primary model ${primaryModel} failed. Transitioning to fallback model: ${fallbackModel}...`);
  try {
    const response = await ai.models.generateContent({
      ...params,
      model: fallbackModel,
    });
    if (response && response.text) {
      console.log(`[Gemini API] Successfully generated content using fallback model ${fallbackModel}`);
      return response;
    }
    throw new Error(`Empty text returned from fallback model ${fallbackModel}`);
  } catch (err: any) {
    console.error(`[Gemini API] Fallback model ${fallbackModel} also failed:`, err.message || err);
    throw err;
  }
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for evaluation
  app.post("/api/evaluate", async (req, res) => {
    try {
      const { skill, level, prompt, userAnswer, lang } = req.body;

      const veracity = checkSubmissionVeracity(userAnswer || "", skill, lang);
      if (veracity.isVeracityViolation) {
        return res.json({
          band: veracity.band,
          cefr: veracity.cefr,
          feedback: veracity.feedbackMsg,
          strengths: veracity.strengths,
          improvements: veracity.improvements
        });
      }

      if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'MY_GEMINI_API_KEY') {
        console.warn("Gemini API key is missing or placeholder. Running advanced local evaluation.");
        const fallback = localHeuristicBackendEvaluation(skill, level, userAnswer, lang);
        return res.json(fallback);
      }

      // Initialize GoogleGenAI SDK with server-side API Key and user-agent header
      const ai = new GoogleGenAI({ 
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      let languageName = "English";
      if (lang === 'es') languageName = "Spanish/Español";

      let systemInstruction = "";
      let modelPromptInput = "";
      let score = 0;
      let total = 1;
      const isMultipleChoice = (skill === 'reading' || skill === 'listening');
      if (isMultipleChoice) {
        const scoreMatch = userAnswer.match(/Multiple choice score: (\d+)\/(\d+)/);
        if (scoreMatch) {
          score = parseInt(scoreMatch[1], 10);
          total = parseInt(scoreMatch[2], 10);
        }
      }

      if (isMultipleChoice) {
        systemInstruction = `You are an expert EXCI (Examen de Competencia en Inglés) Reading and Listening Examiner.
        The user has completed an EXCI practice exam for the ${skill} skill at ${level} difficulty.
        
        The user answered exactly ${score} questions correctly out of ${total} total questions.
        
        Calculate the EXCI score directly on a 0 to 100 point scale using the ratio of correct responses:
        EXCI points = Math.round((${score} / ${total}) * 100).
        
        Official EXCI to CEFR scoring alignment guidelines:
        - 85 to 100 points: CEFR C1 (Advanced / Sofisticado)
        - 70 to 84 points: CEFR B2 (Upper Intermediate / Avanzado)
        - 50 to 69 points: CEFR B1 (Intermediate / Intermedio)
        - 35 to 49 points: CEFR A2 (Elementary / Básico)
        - 0 to 34 points: CEFR A1 (Beginner / Principiante)
        
        CRITICAL RULES:
        1. Set the returned "band" field to an integer from 0 to 100 on the EXCI points scale.
        2. Set the returned "cefr" field matching the points score.
        3. Do NOT evaluate their writing grammar or word count. Instead, write a detailed, highly accurate examiner "feedback" string explaining their Reading/Listening comprehension. Use the contents of the passage/audio-transcript "${prompt}" to explain contextually why their choices highlight scanning/skimming capabilities or where they should pay attention to synonym traps and distractors.
        4. Write the returned "feedback" field, all items in the "strengths" array, and all items in the "improvements" array entirely in the ${languageName} language. Use terms aligned with official EXCI standards ("Calificación EXCI", "MCER").
        5. Provide the outcome in JSON format matching the schema exactly.`;

        modelPromptInput = `Evaluate the EXCI Reading/Listening performance. 
        Task Passage / Audio Transcript Context: "${prompt}" 
        User answered: ${score} correct out of ${total} questions. Detailed user answers: "${userAnswer}". 
        Generate highly personalized, content-specific examiner feedback in ${languageName}.`;
      } else {
        systemInstruction = `You are a strict, professional EXCI certified examiner from UANL. 
        Strictly evaluate the user's performance for the ${skill} skill at ${level} difficulty.
        Task Prompt / Resource: "${prompt}"
        User Response: "${userAnswer}"

        SCORING STANDARDS ARE EXTREMELY ALIGNED TO UANL EXCI CRITERIA (0 to 100 Points total):
        1. Task Completion (up to 30 points): Does the response fully address all parts of the prompt in mature detail? Underlength responses (e.g., <150 words for Writing task) must get penalized.
        2. Coherence and Cohesion (up to 25 points): Are paragraphs well-structured? Are cohesive devices used naturally?
        3. Lexical Resource (up to 25 points): Is there a wide range of academic and formal vocabulary? Is word repetition minimized?
        4. Grammatical Range and Accuracy (up to 20 points): Use of complex syntax and grammatical accuracy. Basic spelling or grammar mistakes reduce these points heavily.

        EXCI to CEFR Level Alignment:
        - 85 - 100: C1 Caliber (Highly fluent, academic precision)
        - 70 - 84: B2 Caliber (Communicates complex ideas successfully, standard graduation target for bilingual programs)
        - 50 - 69: B1 Caliber (Satisfactory communication, standard undergraduate graduation requirement)
        - 35 - 49: A2 Caliber (Incomplete grammar/lexicon, elementary)
        - 0 - 34: A1 Caliber (Very basic or incomplete attempt)

        CRITICAL EVALUATION VERACITY:
        If the response is completely off-topic, keyboard-mashing, repeats words continuously to force length, or is written in a language other than English, you MUST assign an EXCI score of exactly 0 to 15 points, with CEFR "N/A" or "A1". Be authentic and completely honest. Do not award passing scores (50+) to invalid or off-topic gibberish.

        Evaluate with absolute objectivity. Do not award high EXCI scores (like 80+) unless the answer is genuinely exceptional.

        CRITICAL LANGUAGE REQUIREMENT:
        You MUST write the final returned "feedback" field, all string items inside the "strengths" array, and all string items inside the "improvements" array entirely in the ${languageName} language. Do not translate official standardized EXCI terms (like "Calificación EXCI", "MCER", "Coherencia"), but all the analytical text sentences must be presented in ${languageName} so the student can understand standard examiner feedback.

        Provide the outcome in JSON format matching the schema exactly.`;

        modelPromptInput = `Strictly examine this EXCI submission and evaluate accuracy, complexity, length requirements, grammar, and cohesion, reporting an EXCI score from 0 to 100.`;
      }

      const response = await generateContentWithRetryAndFallback(ai, {
        contents: modelPromptInput,
        config: {
          systemInstruction,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              band: { type: Type.INTEGER, description: "Strict EXCI score from 0 to 100 (integer points)" },
              cefr: { type: Type.STRING, description: "Evaluated CEFR grade (A1, A2, B1, B2, C1)" },
              feedback: { type: Type.STRING, description: `Strict external examiner feedback written in ${languageName}` },
              strengths: { type: Type.ARRAY, items: { type: Type.STRING }, description: `List of real, notable strengths written in ${languageName}` },
              improvements: { type: Type.ARRAY, items: { type: Type.STRING }, description: `Honest, actionable, and critical areas requiring immediate refinement written in ${languageName}` },
            },
            required: ["band", "cefr", "feedback", "strengths", "improvements"],
          },
        },
      });

      const text = response.text;
      if (!text) {
        throw new Error("Empty response from Gemini server");
      }

      const result = JSON.parse(text);
      res.json(result);
    } catch (error) {
      console.error("AI Evaluation error in server backend:", error);
      const fallback = localHeuristicBackendEvaluation(req.body.skill, req.body.level, req.body.userAnswer || "", req.body.lang);
      res.json(fallback);
    }
  });

  // API Route for Help AI Chat Assistant
  app.post("/api/help-chat", async (req, res) => {
    try {
      const { messages, lang } = req.body;

      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Invalid messages format. Must be an array of messages." });
      }

      if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'MY_GEMINI_API_KEY') {
        console.warn("Gemini API key is missing or placeholder. Running fallback chat response.");
        const fallbackText = getLocalHelpChatFallback(messages, lang);
        return res.json({ text: fallbackText });
      }

      // Initialize GoogleGenAI SDK with server-side API Key and user-agent header
      const ai = new GoogleGenAI({ 
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      const systemInstruction = `You are "EXCIExpress Support AI", an expert and warm AI tutor and platform guide.
      Your goal is to assist students regarding the EXCIExpress application, English grammar rules, English vocabulary, and EXCI exam formats, core strategies, and minimum score requirements for UANL faculties.

      ### SECTION 1: ABOUT THE APPLICATION
      Explain how to use the "EXCIExpress" platform if asked:
      - The main features: Dashboard (Panel de Control), Skills Practice (Listening, Reading, Writing, Speaking), Advice Blog (Consejos), Vocabulary list, and the Grammar Quiz.
      - Practice: Go to Practice, select a Level (Easy, Medium, Hard), choose a Skill, and start.
      - Audio Player: Click "Play Audio Recording" for Listening. Audio plays dynamically.
      - Microphone recording: For Speaking, click "Start Recording" to speak, or type your response manually.
      - Essay / Writing evaluation: Submit your writing and get graded with EXCI scores ranging from 0 to 100 points, feedback, concrete strengths, and areas for improvement.
      - Grammar Quiz: 53 comprehensive questions spanning levels A1 to C1. Perfect score is 100. Let users test their level!

      ### SECTION 2: EXCI & GRAMMAR EXPERTISE
      - Provide helpful, structured answers regarding English grammar, and UANL EXCI strategies or minimum score targets (usually 50 to 80 points depending on the faculty).
      - Answer in the same language as the user's prompt (usually Spanish, or English).

      Maintain a friendly, professional, encouraging, and informative tone. Keep answers readable with structured formatting (bulleted lists or paragraphs where necessary).`;

      // Transform messages into Gemini Contents format with alternating roles:
      // 1. Map senders to 'user' or 'model' roles.
      // 2. Ensure first message in history is from 'user' (skip any welcome messages at the start of conversation array).
      // 3. Merge consecutive messages with identical roles.
      const formatted = messages
        .map((msg: any) => {
          const role = (msg.sender === 'ai' || msg.sender === 'model') ? 'model' : 'user';
          const text = (msg.text || "").trim();
          return { role, text };
        })
        .filter(m => m.text.length > 0);

      const contents: any[] = [];
      for (const m of formatted) {
        if (contents.length === 0) {
          if (m.role === 'user') {
            contents.push({
              role: 'user',
              parts: [{ text: m.text }]
            });
          }
        } else {
          const last = contents[contents.length - 1];
          if (last.role === m.role) {
            // Merge consecutive messages from same role to satisfy alternating rule
            last.parts[0].text += "\n" + m.text;
          } else {
            contents.push({
              role: m.role,
              parts: [{ text: m.text }]
            });
          }
        }
      }

      if (contents.length === 0) {
        throw new Error("No valid user messages found in chat history to initiate Gemini conversation");
      }

      const response = await generateContentWithRetryAndFallback(ai, {
        contents: contents,
        config: {
          systemInstruction,
        },
      });

      const text = response.text;
      if (!text) {
        throw new Error("Empty response from Gemini server");
      }

      res.json({ text });
    } catch (error) {
      console.error("AI Help Chat error in server:", error);
      const fallbackText = getLocalHelpChatFallback(req.body.messages || [], req.body.lang);
      res.json({ text: fallbackText });
    }
  });

  // API Route for translating feedback dynamically
  app.post("/api/translate", async (req, res) => {
    try {
      const { feedback, strengths, improvements, lang } = req.body;

      if (!lang) {
        return res.json({ feedback, strengths, improvements });
      }

      const hasApiKey = process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'MY_GEMINI_API_KEY';
      if (!hasApiKey) {
        console.warn("Gemini API key is missing or placeholder for translation. Running fallback translation.");
        const fallback = localHeuristicTranslate(feedback, strengths, improvements, lang);
        return res.json(fallback);
      }

      // Initialize GoogleGenAI SDK with server-side API Key & User-Agent
      const ai = new GoogleGenAI({ 
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      let languageName = "English";
      if (lang === 'es') languageName = "Spanish/Español";

      const systemInstruction = `You are an elite, professional EXCI translation assistant.
      Your task is to translate an EXCI examiner's evaluation result into ${languageName}.
      The input will contain "feedback" (a string description), "strengths" (an array of strings), and "improvements" (an array of strings).

      RULES:
      1. Translate all text accurately, preserving its original tone, severity, constructive criticism, and semantic context.
      2. Do NOT translate standardized EXCI terms (like "EXCI Score", "CEFR", "feedback"), but translate the comments explaining these terms.
      3. Your output MUST match the requested JSON schema EXACTLY. All keys must be returned.`;

      const response = await generateContentWithRetryAndFallback(ai, {
        contents: `Translate the following EXCI evaluation structure into ${languageName}:
        - Feedback: "${feedback}"
        - Strengths: ${JSON.stringify(strengths)}
        - Improvements: ${JSON.stringify(improvements)}`,
        config: {
          systemInstruction,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              feedback: { type: Type.STRING },
              strengths: { type: Type.ARRAY, items: { type: Type.STRING } },
              improvements: { type: Type.ARRAY, items: { type: Type.STRING } },
            },
            required: ["feedback", "strengths", "improvements"],
          },
        },
      });

      const text = response.text;
      if (!text) {
        throw new Error("Empty response from Gemini server for translation");
      }

      const result = JSON.parse(text);
      res.json(result);
    } catch (error) {
      console.error("AI Translation API error in backend:", error);
      const fallback = localHeuristicTranslate(req.body.feedback || "", req.body.strengths || [], req.body.improvements || [], req.body.lang);
      res.json(fallback);
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

const localBackendTranslations: Record<string, Record<string, string>> = {
  es: {
    "Attempt submitted": "Intento enviado",
    "Please provide a typed response to analyze. Underlength attempts cannot be scored.": "Por favor, proporciona una respuesta escrita para analizar. Los intentos demasiado cortos no se pueden calificar.",
    "Excellent Lexical Variety: Creative range in word usage avoiding redundant or repetitive expressions.": "Excelente variedad léxica: rango creativo en el uso de palabras evitando expresiones redundantes o repetitivas.",
    "Enrich your active vocabulary: Use advanced synonyms to reduce excessive vocabulary repetition.": "Enriquece tu vocabulario activo: usa sinónimos avanzados para reducir la repetición excesiva de vocabulario.",
    "Varied Syntactic Structures: Effective utilization of compound clauses and complex subordinators.": "Estructuras sintácticas variadas: utilización efectiva de cláusulas complejas y subordinadores compuestos.",
    "Sentence Length Dynamics: Build extended sentences using linking words instead of repetitive simple sentences.": "Dinámica de longitud de oraciones: construye oraciones extendidas usando conectores en lugar de oraciones simples repetitivas.",
    "High Cohesion Density: Transitional terms are placed fluidly to direct readers through the core logic.": "Alta densidad de cohesión: los términos de transición se colocan fluidamente para guiar a los lectores a través de la lógica principal.",
    "Cohesive Attempt: Successfully maps distinct ideas together with key transition components.": "Intento cohesivo: mapea con éxito ideas distintas junto con componentes de transición clave.",
    "Cohesive Transitions: Add logical markers (like 'furthermore', 'however') to connect successive thoughts cleanly.": "Transiciones cohesivas: agrega marcadores lógicos (como 'furthermore', 'however') para conectar pensamientos sucesivos limpiamente.",
    "Sophisticated Lexicon: Selected precise academic vocabulary matching EXCI requirements.": "Léxico sofisticado: vocabulario académico preciso seleccionado que coincide con los requisitos del examen EXCI.",
    "Lexical Selection: Introduce formal, context-specific nouns and verbs to improve standard task score registers.": "Selección léxica: introduce sustantivos y verbos formales del contexto específico para mejorar los registros estándar de la tarea.",
    "Length Target Deduction: Advanced practices strictly require at least 250 words; underlength responses limit exam score growth.": "Deducción de objetivo de longitud: las prácticas avanzadas requieren estrictamente al menos 250 palabras; las respuestas cortas limitan la calificación del examen.",
    "Length Standard: Aim to supply at least 150 words to demonstrate depth in vocabulary expansion.": "Estándar de longitud: intenta suministrar al menos 150 palabras para demostrar profundidad en la expansión del vocabulario.",
    "Basic completion of literal query aspects.": "Completado básico del aspecto de la consulta literal.",
    "Ensure consistent grammatical alignment when building complex multiline thoughts.": "Asegura una alineación gramatical consistente cuando construyas pensamientos multilínea complejos.",
    "Systematic identification of correct statements in multiple choice options.": "Identificación sistemática de las respuestas correctas en las opciones de opción múltiple.",
    "Work on scanning velocity and elimination of distractor keywords in hard questions.": "Trabaja en la velocidad de escaneo y eliminación de palabras clave distractoras en preguntas difíciles.",
    "Linguistic evaluation is unavailable because no answer was registered. Please complete the prompt in detailed academic English and re-submit.": "La evaluación lingüística no está disponible porque no se registró ninguna respuesta. Completa el ejercicio con un inglés académico detallado y vuelve a enviarlo."
  }
};

function localHeuristicBackendEvaluation(skill: string, level: string, answer: string, lang?: string): any {
  const trimmed = answer.trim();
  const wordCount = trimmed.split(/\s+/).filter(w => w.length > 0).length;
  
  let band = 35;
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
      let baseScore = 40;
      if (wordCount >= 250) {
        baseScore = 75;
      } else if (wordCount >= 150) {
        baseScore = 65;
      } else if (wordCount >= 85) {
        baseScore = 55;
      }

      const words = answer.toLowerCase().match(/\b\w+\b/g) || [];
      const uniqueWords = new Set(words);
      const vocabDensity = words.length > 0 ? uniqueWords.size / words.length : 0;

      if (vocabDensity > 0.65) {
        baseScore += 5;
        strengths.push("Excellent Lexical Variety: Creative range in word usage avoiding redundant or repetitive expressions.");
      } else {
        improvements.push("Enrich your active vocabulary: Use advanced synonyms to reduce excessive vocabulary repetition.");
      }

      const sentences = answer.split(/[.!?]+/).filter(s => s.trim().length > 0);
      const avgSentenceLength = sentences.length > 0 ? words.length / sentences.length : 0;

      if (avgSentenceLength > 16) {
        baseScore += 5;
        strengths.push("Varied Syntactic Structures: Effective utilization of compound clauses and complex subordinators.");
      } else if (avgSentenceLength > 0 && avgSentenceLength < 9) {
        baseScore -= 5;
        improvements.push("Sentence Length Dynamics: Build extended sentences using linking words instead of repetitive simple sentences.");
      }

      if (cohesiveCount >= 4) {
        baseScore += 5;
        strengths.push("High Cohesion Density: Transitional terms are placed fluidly to direct readers through the core logic.");
      } else if (cohesiveCount > 0) {
        strengths.push("Cohesive Attempt: Successfully maps distinct ideas together with key transition components.");
      } else {
        baseScore -= 5;
        improvements.push("Cohesive Transitions: Add logical markers (like 'furthermore', 'however') to connect successive thoughts cleanly.");
      }

      if (academicCount >= 3) {
        baseScore += 5;
        strengths.push(`Sophisticated Lexicon: Selected precise academic vocabulary matching EXCI requirements.`);
      } else {
        improvements.push("Lexical Selection: Introduce formal, context-specific nouns and verbs to improve standard task score registers.");
      }

      if (level === 'hard') {
        if (wordCount < 250) {
          baseScore -= 10;
          improvements.push("Length Target Deduction: Advanced practices strictly require at least 250 words; underlength responses limit exam score growth.");
        }
      } else if (level === 'medium') {
        if (wordCount < 150) {
          baseScore -= 5;
          improvements.push("Length Standard: Aim to supply at least 150 words to demonstrate depth in vocabulary expansion.");
        }
      }

      band = Math.max(10, Math.min(100, Math.round(baseScore)));
      
      if (band >= 85) { cefr = 'C1'; }
      else if (band >= 70) { cefr = 'B2'; }
      else if (band >= 50) { cefr = 'B1'; }
      else if (band >= 35) { cefr = 'A2'; }
      else { cefr = 'A1'; }

      if (strengths.length === 0) strengths.push("Basic completion of literal query aspects.");
      if (improvements.length === 0) improvements.push("Ensure consistent grammatical alignment when building complex multiline thoughts.");
    }
  } else {
    // Reading or Listening multiple choice fallback scoring
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
        improvements.push("Revisa paso a paso la lectura o transcripción para identificar y corregir errores específicos de distracción.");
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
    if (localBackendTranslations[lang] && localBackendTranslations[lang][key]) {
      return localBackendTranslations[lang][key];
    }
    return key;
  };

  let feedback = "";
  if (wordCount === 0 && !isMultipleChoice) {
    feedback = translateKey("Linguistic evaluation is unavailable because no answer was registered. Please complete the prompt in detailed academic English and re-submit.");
  } else if (skill === 'writing') {
    if (lang === 'es') {
      const formattedStrengths = strengths.slice(0, 2).map(x => translateKey(x).replace(/^[A-Z\síóúáé\+:]+:\s*/i, '')).join(", ").toLowerCase();
      const formattedImprovements = improvements.map(x => translateKey(x).replace(/\.$/, '')).join("; ");
      feedback = `Auditoría de portafolio de escritura: se identificaron ${wordCount} palabras. La revisión del examinador encuentra una expresión de nivel CEFR ${cefr}, apuntando a un puntaje EXCI de ${band} puntos de 100 bajo criterios oficiales estrictos de la UANL. Las principales fortalezas incluyen ${formattedStrengths}. Asegúrate de abordar las áreas vitales de mejora: ${formattedImprovements}.`;
    } else if (lang === 'ru') {
      const formattedStrengths = strengths.slice(0, 2).map(x => translateKey(x).replace(/^[A-Z\sА-Яа-яЁё&íóúáé\+:]+:\s*/i, '')).join(", ").toLowerCase();
      const formattedImprovements = improvements.map(x => translateKey(x).replace(/\.$/, '')).join("; ");
      feedback = `Аудит письменной работы: выявлено ${wordCount} слов. Оценка эксперта определяет уровень выражения как CEFR ${cefr}, что соответствует баллу EXCI в ${band}. Основные сильные стороны включают: ${formattedStrengths}. Немедленно уделите внимание областям для улучшения: ${formattedImprovements}.`;
    } else {
      feedback = `Writing Portfolio Audit: Identified ${wordCount} words. Examiner review finds a CEFR ${cefr} caliber expression, pointing to an EXCI score of ${band} Points under rigid official criteria. Main strengths include ${strengths.slice(0, 2).map(x => x.replace(/^[A-Z\s&:]+:\s*/, '')).join(", ").toLowerCase()}. Ensure to address the vital score areas: ${improvements.map(x => x.replace(/\.$/, '')).join("; ")}.`;
    }
  } else if (skill === 'speaking') {
    if (lang === 'es') {
      const formattedImprovements = improvements.slice(0, 2).map(x => translateKey(x)).join("; ");
      feedback = `Evaluación de discurso verbal: respuesta hablada evaluada que contiene ${wordCount} palabras. Notamos una expresión oral que alcanza ${band} puntos EXCI, indicando capacidades CEFR ${cefr}. Áreas de enfoque pendientes: ${formattedImprovements}. Integra frases de enlace para unir ideas de manera fluida.`;
    } else if (lang === 'ru') {
      const formattedImprovements = improvements.slice(0, 2).map(x => translateKey(x)).join("; ");
      feedback = `Оценка устной речи: оценен устный ответ, содержащий ${wordCount} слов. Мы отметили выражение мыслей на балл EXCI в ${band}, указывающее на навыки уровня CEFR ${cefr}. Особые области для улучшения: ${formattedImprovements}. Используйте связующие фразы для более плавного перехода между мыслями.`;
    } else {
      feedback = `Verbal Discourse Evaluation: Assessed spoken response containing ${wordCount} words. We noted oral expression reaching an EXCI score of ${band} Points, indicating ${cefr} capabilities. Outstanding focus areas: ${improvements.slice(0, 2).join("; ")}. Integrate linking phrases to smoothly join ideas.`;
    }
  } else {
    if (lang === 'es') {
      feedback = `Auditoría del examen de práctica estándar: Has obtenido un puntaje de ${score} de ${total} respuestas correctas. Tu rendimiento refleja una comprensión sólida de los hechos a nivel CEFR ${cefr}. Practica la lectura rápida (skimming) del contenido para mejorar la gestión general del tiempo y precisión.`;
    } else if (lang === 'ru') {
      feedback = `Стандартный аудит тренировочного examen de práctica: Вы набрали ${score} из ${total} правильных ответов. Ваши результаты отражают твердое понимание фактов на уровне CEFR ${cefr}. Практикуйте быстрое чтение текста (skimming), чтобы улучшить управление временем.`;
    } else {
      feedback = `Standard Practice Exam Audit: You scored ${score} out of ${total} correct answers. Performance reflects solid factual comprehension at CEFR ${cefr} level. Practice skimming content swiftly to improve overall time management and selection accuracy.`;
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

function localHeuristicTranslate(feedback: string, strengths: string[], improvements: string[], lang: string): any {
  if (!lang) {
    return { feedback, strengths, improvements };
  }

  const translateKey = (key: string): string => {
    if (lang === 'en') {
      // Try to find the english equivalent from spanish translation dictionary
      for (const [enKey, localized] of Object.entries(localBackendTranslations.es || {})) {
        if (localized === key) return enKey;
        if (key.includes(localized)) {
          return key.replace(localized, enKey);
        }
      }
      return key;
    }
    
    // Fallback dictionary
    const dic: Record<string, Record<string, string>> = {
      es: {
        "Evaluation failed. Please try again later.": "La evaluación falló. Por favor, inténtelo de nuevo más tarde.",
        "Linguistic evaluation requires written content. Please fill out your practice screen with clear, structured sentences and resubmit.": "La evaluación lingüística requiere contenido escrito. Por favor, completa la pantalla de práctica con oraciones claras y estructuradas, e inténtalo de nuevo.",
        "Linguistic evaluation is unavailable because no answer was registered. Please complete the prompt in detailed academic English and re-submit.": "La evaluación lingüística no está disponible porque no se registró ninguna respuesta. Completa el ejercicio con un inglés académico detallado y vuelve a enviarlo."
      }
    };

    if (dic[lang] && dic[lang][key]) {
      return dic[lang][key];
    }
    
    // Also check localBackendTranslations for es
    if (localBackendTranslations[lang] && localBackendTranslations[lang][key]) {
      return localBackendTranslations[lang][key];
    }

    return key;
  };

  return {
    feedback: translateKey(feedback),
    strengths: strengths.map((s: string) => translateKey(s)),
    improvements: improvements.map((i: string) => translateKey(i))
  };
}

function getLocalHelpChatFallback(messages: any[], lang?: string): string {
  const lastMsg = messages && messages.length > 0 ? messages[messages.length - 1].text.toLowerCase() : "";
  const isEs = lang === 'es';
  
  if (lastMsg.includes("hola") || lastMsg.includes("hello") || lastMsg.includes("hi")) {
    if (isEs) {
      return `¡Hola! Actualmente estoy funcionando en modo de simulación fuera de línea, ¡pero aún puedo informarte sobre EXCIExpress!
Puedes practicar las cuatro secciones del EXCI (Listening, Reading, Writing, Speaking) en diferentes niveles, probar nuestra baraja de Vocabulario, resolver nuestro Cuestionario de Gramática de 53 preguntas o consultar consejos de profesores de la UANL en nuestro Blog de Tips.
¿Cómo te puedo ayudar hoy?`;
    }
    return `Hello! I'm currently running in offline simulation mode, but I can still tell you about EXCIExpress!
You can practice all four EXCI sections (Listening, Reading, Writing, Speaking) at different levels, try our Vocabulary deck, attempt our 53-question Grammar Quiz, or check out professional UANL teacher tips in our Blog.
How can I help you today?`;
  }
  
  if (lastMsg.includes("uanl") || lastMsg.includes("facultad") || lastMsg.includes("titul") || lastMsg.includes("score") || lastMsg.includes("puntaje") || lastMsg.includes("exci")) {
    if (isEs) {
      return `Los puntajes mínimos requeridos (metas EXCI) en la UANL varían según tu facultad:
- **Licenciaturas Generales (FIME, FACPYA, FARQ, FOD, etc.)**: Requieren de **50 a 65 puntos** (Nivel CEFR B1).
- **Programas Internacionales / Alta Demanda (Medicina, Relaciones Internacionales)**: Exigen de **70 a 80 puntos** (Nivel CEFR B2).
- **Posgrados (Maestrías y Doctorados)**: Demandan **80 puntos o más** para ser admitido.`;
    }
    return `The minimum EXCI scores (targets) required by UANL schools depend on your program:
- **General Bachelor Majors (FIME, FACPYA, FARQ, FOD, etc.)**: Require between **50 and 65 Points** (CEFR B1).
- **International / High-Demand Majors (Medicine, International Relations)**: Require **70 to 80 Points** (CEFR B2).
- **Postgraduate Programs (Masters & PhDs)**: Typically command **80 Points or more** for academic admission.`;
  }

  if (lastMsg.includes("grammar") || lastMsg.includes("gramatica") || lastMsg.includes("quiz") || lastMsg.includes("ejercicio") || lastMsg.includes("exam")) {
    if (isEs) {
      return `El examen EXCI consta de tres áreas principales evaluadas mediante preguntas de opción múltiple:
- **Comprensión Auditiva (Listening)**: Evalúa diálogos cortos de dos turnos, diálogos largos e instrucciones académicas.
- **Estructura y Expresión Escrita (Gramática)**: Ejercicios de completar oraciones e identificación de errores.
- **Comprensión Lectora (Reading)**: Pasajes y lecturas académicas de opción múltiple.
      
¡En EXCIExpress además incluimos simulaciones del Writing (Ensayos) y Speaking (Grabación por micrófono) calificados automáticamente de 0 a 100 puntos por nuestra IA!`;
    }
    return `The official EXCI exam features three main sections evaluated through multiple-choice questions:
- **Listening Comprehension**: Measures short exchanges, long discussions, and speech markers.
- **Structure and Grammar**: Sentence completion items and error identification.
- **Reading Comprehension**: Academic and informative passages with reading questions.
      
In EXCIExpress, we also provide Writing (Essays) and Speaking (Microphone voice recording) modules graded from 0 to 100 points instantly by our state-of-the-art AI evaluation!`;
  }

  if (isEs) {
    return `Actualmente estoy funcionando en modo fuera de línea porque la conexión con la IA en el servidor está temporalmente desconectada o la clave de API no está configurada. Por favor, verifica tu conexión a internet o actualiza la página. ¡Hazme saber si deseas información automatizada sobre cómo usar EXCIExpress o los puntajes mínimos del EXCI para estudiar o titularte en la UANL!`;
  }
  return `I'm currently running in offline backup mode because the server-side AI connection is temporarily returning an error or GEMINI_API_KEY is not defined in this environment. Please verify your internet connection, refresh the page, or configure your API key. Let me know if you would like automated info on how to use EXCIExpress or graduation/admission threshold scores for UANL!`;
}

startServer();
