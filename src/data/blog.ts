/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface BlogArticle {
  id: string;
  titleEn: string;
  titleEs: string;
  titleRu: string;
  authorEn: string;
  authorEs: string;
  authorRu: string;
  readTimeEn: string;
  readTimeEs: string;
  readTimeRu: string;
  summaryEn: string;
  summaryEs: string;
  summaryRu: string;
  contentEn: string;
  contentEs: string;
  contentRu: string;
  section: 'listening' | 'reading' | 'writing' | 'speaking' | 'general';
}

// -------------------------------------------------------------
// Core Golden Handcrafted Articles (EXCI/UANL Specific)
// -------------------------------------------------------------
const coreArticles: BlogArticle[] = [
  {
    id: 'guia-examen-exci-uanl-fechas-aprobar-rapido',
    section: 'general',
    titleEn: 'UANL EXCI Exam Guide: Exam Dates, Next EXCI & How to Pass Quickly',
    titleEs: 'Guía para el Examen EXCI UANL: Fechas, Próximo Examen y Cómo Aprobar Rápido',
    titleRu: '',
    authorEn: 'EXCI Express Academic Team',
    authorEs: 'Equipo Académico EXCI Express',
    authorRu: '',
    readTimeEn: '6 min read',
    readTimeEs: '6 min de lectura',
    readTimeRu: '',
    summaryEn: 'Learn how to pass the UANL EXCI exam quickly with our complete guide. Check upcoming EXCI dates, key exam sections, and get expert help to secure your score.',
    summaryEs: 'Aprende cómo aprobar el examen EXCI rápido con nuestra guía completa. Conoce las fechas del próximo examen EXCI en la UANL y recibe ayuda especializada.',
    summaryRu: '',
    contentEn: `### Complete UANL EXCI Guide: How to Pass Quickly
If you are preparing for your **next EXCI exam** at the **UANL**, this strategic guide provides the essential steps and dates to succeed on your first attempt.

### 1. Key Exam Sections
The **EXCI exam** tests communicative competence through:
* **Listening Comprehension**: Monologues, dialogues, and situational academic audios.
* **Reading Comprehension**: Main ideas, vocabulary in context, and inferential understanding.
* **Structure & Written Expression**: Grammar patterns, prepositions, conjunctions, and sentence completion.

### 2. EXCI Dates and Next Exam Windows
The **UANL** schedules multiple EXCI application dates throughout each semester across faculties such as FIME, FACPYA, Medicina, and Arquitectura. To prepare for your **next EXCI**, monitor your faculty's academic calendar and register early.

### 3. How to Pass the EXCI Quickly
* **Practice with Authentic Simulators**: Train using real exam time limits and question formats.
* **Master High-Frequency Academic Vocabulary**: Focus on vocabulary bands to unlock higher scores.
* **Target Strategic Elimination**: Since incorrect answers are not penalized, apply smart elimination to boost your final score.

### Need Help with the EXCI?
Explore EXCI Express for comprehensive practice, interactive quizzes, and full video classes tailored specifically to the UANL EXCI syllabus.`,
    contentEs: `### Guía de Examen EXCI UANL: Todo lo que Necesitas para Aprobar Rápido
Si estás buscando **ayuda con el EXCI** y deseas saber cómo **aprobar el EXCI rápido**, esta **guía para EXCI** te orientará en cada etapa de tu preparación para el **próximo examen EXCI** de la **UANL**.

### 1. ¿Qué evalúa el examen EXCI de la UANL?
El **examen EXCI** (Examen de Competencia en Inglés) es la evaluación institucional oficial de la Universidad Autónoma de Nuevo León para certificar el dominio del idioma inglés. El examen abarca:
* **Comprensión auditiva (Listening)**: Audios con conversaciones cortas y monólogos académicos.
* **Estructura gramatical (Structure)**: Completación de oraciones y corrección de errores.
* **Comprensión de lectura (Reading)**: Textos informativos y académicos con preguntas de deducción directa e indirecta.

### 2. Fechas del EXCI y Próximo Examen EXCI
Las **fechas del EXCI** se programan periódicamente durante cada ciclo escolar en facultades como FIME, FACPYA, FOD, Medicina, Odontología y Ciencias Químicas. 
* Para saber las fechas exactas de tu **próximo examen EXCI**, consulta el departamento escolar de tu facultad o el Centro de Evaluaciones de la UANL.
* Es fundamental iniciar tu preparación con al menos 3 a 4 semanas de anticipación para garantizar el puntaje requerido para tu titulación o posgrado.

### 3. Estrategias Clave para Aprobar el EXCI Rápido
1. **Practica con simuladores interactivos**: Realizar simulacros con cronómetro te entrena bajo las condiciones reales del examen.
2. **Refuerza el vocabulario académico**: Identificar conectores, sinónimos y términos clave te ahorrará minutos valiosos en la sección de lectura.
3. **No dejes preguntas sin contestar**: En el examen EXCI las respuestas incorrectas no restan puntos. Por lo tanto, aprovecha cada oportunidad y descarta opciones improbables.
4. **Apóyate en video clases estratégicas**: Las explicaciones audiovisuales te permiten asimilar estructuras complejas de forma ágil y didáctica.

### ¿Necesitas Ayuda con el EXCI?
En **EXCI Express** dispones de un simulador integral con retroalimentación instantánea, cientos de reactivos oficiales y un catálogo completo de video clases diseñadas para asegurar tu éxito en tu **próximo examen EXCI**.`,
    contentRu: ''
  },
  {
    id: 'exci-general-structure',
    section: 'general',
    titleEn: 'Official UANL EXCI Goal Guide & Score Requirements',
    titleEs: 'Estructura Oficial del EXCI UANL y Puntajes por Facultad',
    titleRu: '',
    authorEn: 'EXCI Strategic Guide',
    authorEs: 'Guía Estratégica EXCI',
    authorRu: '',
    readTimeEn: '5 min read',
    readTimeEs: '5 min de lectura',
    readTimeRu: '',
    summaryEn: 'Understand the exam sections, question distribution, and minimum EXCI scores required for graduation or postgraduate degrees at UANL.',
    summaryEs: 'Conoce a fondo las secciones del examen, la distribución de preguntas y el puntaje mínimo requerido para tu titulación o posgrado en la UANL.',
    summaryRu: '',
    contentEn: `### What is the EXCI and how is it structured?
The **Examen de Competencia en Inglés (EXCI)** is the standardized test designed by **UANL** to certify English language proficiency of its students. It is a mandatory requirement for graduation, faculty entrance, or postgraduate admission.

The exam typically consists of **70 to 100 multiple-choice questions** distributed across these main sections:
1. **Listening Comprehension**: Measures your ability to understand daily conversations, academic directions, and brief monologues.
2. **Structure and Written Expression (Grammar)**: Tests grammar accuracy through sentence completion and error identification tasks.
3. **Reading Comprehension**: Academic and general passages where you must locate facts, make inferences, and deduce word meanings in context.

### Score Requirements at UANL
Depending on your school (Facultad), the minimum passing score varies:
* **General Undergraduate Programs (FIME, FACPYA, FOD, FCQ, etc.)**: Usually request a minimum score of **50 to 65 points** (approximate B1 intermediate level).
* **High-Demand or Bilingual Majors (FASPY, Medicine, Relaciones Internacionales, etc.)**: Often require **70 to 80 points** (B2 upper-intermediate level).
* **Postgraduate Programs (Masters & PhDs)**: Typically command **80 points or higher** for admission.

### Examiner Gold Tip
In the EXCI exam, **incorrect answers do not penalize your score**. This means you should never leave a blank bubble! If you are short on time, make a logical guess for all remaining questions.`,
    contentEs: `### ¿Qué es el EXCI y cómo se compone?
El **Examen de Competencia en Inglés (EXCI)** es la prueba estandarizada diseñada por la **UANL** para certificar el dominio del idioma inglés de sus estudiantes. Es un requisito obligatorio para ingresar a ciertas facultades, para la titulación de nivel licenciatura, y para admisión a posgrados.

El examen consta generalmente de **70 a 100 preguntas de opción múltiple** distribuidas en las siguientes secciones principales:
1. **Comprensión Auditiva (Listening)**: Evalúa la capacidad de entender conversaciones cotidianas, instrucciones académicas y monólogos de audio.
2. **Estructura y Expresión Escrita (Gramática / Structure)**: Evalúa la precisión gramatical mediante ejercicios de completar oraciones e identificación de errores en enunciados.
3. **Comprensión Lectora (Reading)**: Pasajes de lectura académica y general de nivel medio donde debes responder preguntas de comprensión directa, de deducción lógico-conceptual y de vocabulario en contexto.

### Puntajes requeridos en la UANL para Egresar
Dependiendo de tu facultad, los requisitos de banda EXCI pueden variar considerablemente:
* **Licenciaturas Generales (FIME, FACPYA, FOD, FCQ, FARQ, etc.)**: Usualmente requieren un puntaje mínimo de **50 a 65 puntos** (equivalente a un nivel B1 aproximado).
* **Licenciaturas de Alta Demanda o Internacionales (Medicina, Relaciones Internacionales, etc.)**: Suelen pedir de **70 a 80 puntos** (Nivel B2).
* **Posgrados (Maestrías y Doctorados)**: Habitualmente exigen un puntaje de **80 puntos o superior** para admisión.

### Tip de Oro para el Día del Examen
En el EXCI **las respuestas incorrectas no restan puntos**. Esto significa que nunca debes dejar una pregunta sin contestar en el formato de lector óptico. Si se te agota el tiempo de la prueba, realiza una deducción rápida para asegurar al menos una probabilidad de acertar.`,
    contentRu: '',
  },
  {
    id: 'exci-time-management',
    section: 'general',
    titleEn: 'Time Management: How to Answer 100 Questions in 120 Minutes',
    titleEs: 'Manejo del Tiempo: Cómo responder 100 preguntas en 120 minutos',
    titleRu: '',
    authorEn: 'EXCI Time Management Guide',
    authorEs: 'Guía de Manejo del Tiempo EXCI',
    authorRu: '',
    readTimeEn: '4 min read',
    readTimeEs: '4 min de lectura',
    readTimeRu: '',
    summaryEn: 'The clock is your major opponent in the EXCI. Learn the three-pass technique to maximize points and finish on time.',
    summaryEs: 'El peor enemigo en el EXCI es el reloj. Aprende la técnica de las tres vueltas para maximizar tus aciertos y terminar a tiempo.',
    summaryRu: '',
    contentEn: `### The Time Challenge in the EXCI
Many students fail the EXCI not due to poor English skills, but because they run out of time on the final sections (especially Reading). Pacing yourself is essential to answer everything.

### The "Three-Pass" Strategy
Apply this tactical technique during the Grammar and Reading sections of the test to keep your pace:

1. **First Pass (Fast & Sure)**: Go through each question. If you recognize the correct answer right away, mark it. If it takes more than 30 seconds of contemplation, put a star next to it in your test booklet and move on. The goal is to secure all "easy points" first without getting stuck.
2. **Second Pass (Intermediate Analysis)**: Go back to those starred questions. Since you already secured the easy points, you can now dedicate 1 to 1.5 minutes analyzing complex alternatives or looking up specific details in the reading texts.
3. **Third Pass (The Final Stretch)**: In the final 5 minutes of the exam, locate any unanswered bubbles. Make your best logical inference and bubble them in. Never leave any bubble blank!

### Target Time Milestones
* **Listening Comprehension**: Dictated by the audio tracks (about 30 minutes).
* **Structure and Grammar**: Do not spend more than 45 seconds per question. Finish the section in around 25-30 minutes.
* **Reading Comprehension**: Allocate a maximum of 15 minutes per passage (including answering its relative questions).`,
    contentEs: `### El Desafío del Tiempo en el EXCI
Muchos alumnos reprueban el EXCI no por falta de nivel de inglés, sino porque se quedan sin tiempo en las últimas secciones (especialmente en Lectura). Distribuir tu tiempo con precisión matemática es clave.

### La Técnica de las "Tres Vueltas"
Aplica este método estratégico en las secciones de Gramática y Lectura para agilizar tus respuestas:

1. **Primera Vuelta (Fácil y Rápido)**: Lee cada pregunta. Si sabes la respuesta de inmediato, márcala. Si te toma más de 30 segundos pensarla, pon un asterisco a un lado en el folleto de preguntas y sigue adelante. El objetivo es asegurar todos los "puntos fáciles" sin perder dinamismo.
2. **Segunda Vuelta (Análisis Intermedio)**: Regresa a las preguntas marcadas con asterisco. Ahora que tienes un colchón de tiempo asegurado, dedícales de 1 a 1.5 minutos para analizar las opciones gramamentales más complejas o buscar en el texto de lectura.
3. **Tercera Vuelta (El Cierre Estricto)**: En los últimos 5 minutos del examen, regresa a cualquier pregunta restante que sigas sin saber. Haz una deducción inteligente y llena la burbuja de respuesta. ¡Jamás entregues tu hoja con espacios vacíos!

### Control de Tiempo Recomendado
* **Comprensión Auditiva (Listening)**: Sigue el ritmo del audio (esta sección se controla sola, dura aprox. 30 minutos).
* **Estructura y Gramática (Structure)**: No dediques más de 45 segundos por pregunta. Deberías completar esta sección en unos 25-30 minutos.
* **Comprensión Lectora (Reading)**: Asigna máximo 15 minutos por cada lectura (incluyendo responder sus preguntas asociadas).`,
    contentRu: '',
  },
  {
    id: 'exci-listening-short-conversations',
    section: 'listening',
    titleEn: 'EXCI Listening Tips: Focus on the Second Speaker',
    titleEs: 'Tips de Listening EXCI: Enfócate en el Segundo Hablante',
    titleRu: '',
    authorEn: 'EXCI Listening Guide',
    authorEs: 'Guía de Listening EXCI',
    authorRu: '',
    readTimeEn: '5 min read',
    readTimeEs: '5 min de lectura',
    readTimeRu: '',
    summaryEn: 'In the short dialogues of the EXCI, the correct answer is almost always linked to what the second person says. Learn how to decode it.',
    summaryEs: 'En los diálogos del EXCI, la respuesta correcta casi siempre está relacionada con lo que dice la segunda persona. Descubre cómo identificarlo.',
    summaryRu: '',
    contentEn: `### Structure of the EXCI Listening Section
The Listening section in the EXCI often starts with **short dialogues (two-way exchanges)** between a man and a woman, followed by a question from a narrator.

### The "Second Speaker" Secret
In about 85% of these short exchanges, the key to the correct option lies specifically in what the **second speaker** says.
* **Example**:
  * Speaker A: *Are you going to open a new account at the bank today?*
  * Speaker B: *I would, if I only had my identification with me.*
  * Narrator: *What does the woman mean?*

Focusing on Speaker B's response ("I would, if I only had my identification..."), you can easily infer that she *cannot* open the account today because she does not have her ID card.

### Key Rules for Success
1. **Peak Focus on the Second Turn**: Remain relaxed, but heighten your attention the moment the second person begins speaking.
2. **Beware of Similar Sound Distractors**: Incorrect options often reuse words that sound identical to those in the recording but signify something completely different. Look for matches that use synonyms rather than direct homophones.
3. **Pay Attention to Modals & Conditionals**: Words like *wish*, *but*, *should have*, and *hardly* completely flip the meaning of a sentence from affirmative to negative. Always listen for these logical cues.`,
    contentEs: `### La Estructura del Listening de EXCI
El módulo de Listening en el EXCI suele comenzar con una serie de **conversaciones cortas (diálogos de dos turnos)** entre un hombre y una mujer, seguidos por una pregunta hecha por un narrador.

### El Secreto del "Segundo Hablante"
En el 85% de estas conversaciones cortas, la clave del acierto o la información crítica se encuentra en la respuesta del **segundo hablante**. 
* **Ejemplo**:
  * Hablante A: *Are you going to open a new account at the bank today?*
  * Hablante B: *I would, if I only had my identification with me.*
  * Narrador: *What does the woman mean?*

Si te enfocas firmemente en lo que dijo el Hablante B ("Lo haría, si tan solo tuviera mi identificación conmigo"), deduces inmediatamente que ella *no* va a abrir la cuenta hoy porque le falta su ID.

### Claves para Triunfar
1. **Atención Completa**: Durante los primeros segundos del diálogo, mantén la calma, pero eleva tu enfoque al máximo cuando hable la segunda persona.
2. **Cuidado con los Distractores de Sonido**: Las opciones incorrectas de opción múltiple a menudo contienen palabras que suenan muy similares a las del audio, pero que significan cosas opuestas. Busca sinónimos en lugar de palabras con sonidos idénticos.
3. **Uso de Modales y Condicionales**: Pon atención a palabras como *wish*, *though*, *should have*, *hardly*, las cuales cambian drásticamente el sentido de la oración de positivo a negativo o expresan escenarios hipotéticos.`,
    contentRu: '',
  },
  {
    id: 'exci-reading-skimming-techniques',
    section: 'reading',
    titleEn: 'Reading Comprehension Hacks for EXCI: Stop Translating',
    titleEs: 'Estrategias de Comprensión Lectora para el EXCI: Dejar de Traducir',
    titleRu: '',
    authorEn: 'EXCI Reading Guide',
    authorEs: 'Guía de Comprensión Lectora EXCI',
    authorRu: '',
    readTimeEn: '5 min read',
    readTimeEs: '5 min de lectura',
    readTimeRu: '',
    summaryEn: 'Mentally translating every word into Spanish slows you down and drains your active focus. Learn to use Skimming & Scanning.',
    summaryEs: 'Traducir mentalmente cada palabra al español ralentiza tu lectura y causa fatiga mental. Aprende a aplicar Skimming y Scanning.',
    summaryRu: '',
    contentEn: `### The Number One Reading Error
The most frequent error made by UANL students when taking the EXCI is attempting to **translate everything word-for-word in their head** from English to Spanish. This drains your processing power and takes too much time.

### Master the Two Key Academic Reading Skills
To score above 80 points in the Reading portion of the EXCI, practice these active reading procedures:

#### 1. Skimming (Rapid Reading for Main Ideas)
Before diving into details, do a very fast visual pass of the text (60 to 90 seconds).
* Read the title and the entire introductory paragraph.
* Read only the **first line (topic sentence)** of each subsequent body paragraph (where the main idea general resides).
* Read the concluding paragraph.
This yields an instant mental map of the article's structure, indicating where specific details reside.

#### 2. Scanning (Target Search for Specific Facts)
When you read a question seeking solid data (dates, names, percentages, acronyms, or key scientific terms):
* Avoid reading the text from beginning to end again.
* Move your eyes quickly across the paragraphs in a zig-zag search for the exact word profile (e.g., the year "1859" or the capitalized noun "Mendel").
* Isolate that single sentence, analyze it, and choose the correct option based on synonims.`,
    contentEs: `### El Error Número 1 en el Reading
El error más común de los estudiantes de la UANL al presentar el EXCI es intentar realizar una **traducción literal en su mente** de todo el pasaje de lectura de inglés a español. Esto consume demasiada energía del cerebro y gasta minutos valiosísimos.

### Domina las dos Técnicas Clave de Lectura
Para aprobar el Reading con un puntaje de más de 80, debes automatizar estas dos habilidades de lectura activa:

#### 1. Skimming (Lectura Veloz para Ideas Principales)
Antes de leer con detalle, dale un repaso veloz al texto (en 60-90 segundos).
* Lee el título y el primer párrafo entero.
* Lee únicamente la **primera oración** de cada párrafo del desarrollo (donde suele estar la "Topic Sentence" u oración principal).
* Lee el párrafo de conclusión.
Esto te dará un mapa mental claro de qué trata el texto y dónde está ubicada cada idea principal sin desgastarte.

#### 2. Scanning (Búsqueda de Datos Específicos)
Una vez que leas una pregunta que pide un dato concreto (fechas, nombres propios, porcentajes, o términos de ciencias o tecnología):
* No vuelvas a leer todo el texto.
* Mueve tus ojos rápidamente en forma de zig-zag buscando ese estímulo visual específico (por ejemplo, el año "2002" o la palabra capitalizada "UANL").
* Lee únicamente la oración que contiene ese dato para extraer la respuesta correcta de las opciones múltiples.`,
    contentRu: '',
  },
  {
    id: 'exci-grammar-conditionals',
    section: 'writing',
    titleEn: 'Conditionals & Subordinate Clauses: Structures You Must Memorize',
    titleEs: 'Los Condicionales y Cláusulas del EXCI: Estructuras Clave',
    titleRu: '',
    authorEn: 'EXCI Grammar Guide',
    authorEs: 'Guía de Gramática EXCI',
    authorRu: '',
    readTimeEn: '6 min read',
    readTimeEs: '6 min de lectura',
    readTimeRu: '',
    summaryEn: 'The EXCI grammar questions repeatedly evaluate the three main conditionals and inversions. Study the exact formulas here.',
    summaryEs: 'Las preguntas de gramática del EXCI evalúan repetidamente los tres condicionales principales y las inversiones. Conoce las fórmulas exactas.',
    summaryRu: '',
    contentEn: `### The Significance of Grammar in the EXCI
The **Structure & Written Expression** portion is a cornerstone of overall exam success. In the EXCI, direct and indirect grammar tests make up almost 40% of the overall score.

### Formula Mastery: The 3 English Conditionals
Frequently, the EXCI presents a conditional sentence with one main verb blanked out. You must recognize the perfect match utilizing these standard formulas:

#### First Conditional (Real or Highly Probable)
* **Formula**: \`If + Present Simple, ... will / can + verb\`
* **Example**: *If she studies hard, she will pass the EXCI.*

#### Second Conditional (Hypothetical or Unlikely)
* **Formula**: \`If + Past Simple, ... would / could + verb\`
* **Example**: *If I had enough points, I would graduate tomorrow.*
* *EXCI Note*: In formal academic grammar, **were** is prefered for all subject subjects in the conditional clause. Example: *If I **were** you, I would register.* (Avoid selecting *was* on the exam for this structure).

#### Third Conditional (Unreal Past / Past Regret)
* **Formula**: \`If + Past Perfect (had + past participle), ... would have + past participle\`
* **Example**: *If they had practiced vocabulary, they would have scored higher.*

### Subject-Verb Inversion (Advanced Level)
The EXCI frequently designs tricky questions starting with negative or restrictive adverbs like *Seldom*, *Rarely*, *Never*, or *Hardly*. When these start a sentence, you must invert the auxiliary verb and the subject:
* **Incorrect**: *Seldom she goes to the library.*
* **Correct**: *Seldom **does she go** to the library.*
* Write down this formula to unlock advanced grammar points.`,
    contentEs: `### La Importancia de la Gramática en el EXCI
La sección de **Estructura y Expresión Escrita** define el éxito de muchos aplicantes. En el EXCI, la gramática representa cerca del 40% del puntaje total directo o indirecto.

### Fórmulas del Éxito: Los 3 Condicionales
Aprende a identificar la correspondencia de tiempos en las cláusulas condicionales, ya que el examen suele omitir uno de los verbos para que lo completes:

#### Primer Condicional (Real / Posible)
* **Fórmula**: \`If + Present Simple, ... will / can + verb\`
* **Ejemplo**: *If she studies hard, she will pass the EXCI.*

#### Segundo Condicional (Imaginario / Poco Probable)
* **Fórmula**: \`If + Past Simple, ... would / could + verb\`
* **Ejemplo**: *If I had enough points, I would graduate tomorrow.*
* *Nota EXCI*: En el inglés académico formal evaluado en el EXCI, se utiliza **were** para todos los sujetos en el segundo condicional. Ej: *If I **were** you, I would take the course.* (Jamás uses *was* para esta estructura conditional en el examen).

#### Tercer Condicional (Pasado No Real / Arrepentimiento)
* **Fórmula**: \`If + Past Perfect (had + participio), ... would have + participio\`
* **Ejemplo**: *If they had practiced vocabulary, they would have scored higher.*

### Inversión de Sujeto-Verbo (Nivel Avanzado)
El EXCI te presentará enunciados que inician con adverbios negativos o restrictivos como *Seldom*, *Rarely*, *Never*, o *Hardly*. En estos casos, se debe invertir el sujeto y el auxiliar:
* **Ejemplo incorrecto**: *Seldom she goes to the library.*
* **Ejemplo correcto**: *Seldom **does she go** to the library.*
* Memoriza esta inversión para responder correctamente estas preguntas difíciles del examen.`,
    contentRu: '',
  },
  {
    id: 'exci-vocabulary-phrasal-verbs',
    section: 'speaking',
    titleEn: '8 Indispensable Phrasal Verbs for the EXCI',
    titleEs: '8 Phrasal Verbs Indispensables para Aprobar el EXCI',
    titleRu: '',
    authorEn: 'EXCI Vocabulary Guide',
    authorEs: 'Guía de Vocabulario EXCI',
    authorRu: '',
    readTimeEn: '5 min read',
    readTimeEs: '5 min de lectura',
    readTimeRu: '',
    summaryEn: 'Phrasal verbs cause mass confusion during the EXCI exam. Review this compilation of the 8 indispensable phrasal verbs.',
    summaryEs: 'Los verbos frasales causan mucha confusión en el examen EXCI. Revisa esta recopilación de los 8 verbos indispensables y su significado.',
    summaryRu: '',
    contentEn: `### Phrasal Verbs on the EXCI Exam
A **phrasal verb** is the combination of a verb and a particle (preposition or adverb) that creates a brand-new meaning. In the EXCI exam, they appear in reading selections, listening monologues, and fill-in-the-blank vocabulary items.

### 8 Indispensable Phrasal Verbs for the EXCI
Make sure to study and memorize these 8 verbs, which are highly frequent in UANL examinations:

1. **Call off** (To cancel):
   * *The university decided to **call off** the outdoor ceremony due to rain.*
2. **Carry out** (To execute or conduct research/tasks):
   * *Researchers must **carry out** more studies before drawing a final conclusion.*
3. **Look into** (To investigate or research):
   * *The UANL administration promised to **look into** the student complaints.*
4. **Put off** (To postpone/delay):
   * *Don't **put off** studying for the EXCI until the night before the exam!*
5. **Set up** (To establish or configure):
   * *The faculty has **set up** a new scholarship program for international applicants.*
6. **Turn down** (To reject or refuse an offer):
   * *She had to **turn down** the job offer because she hasn't passed her English exam yet.*
7. **Make up** (To invent/compensate):
   * *Students cannot **make up** excuses for missing the official evaluation.*
8. **Run out of** (To use up, have none left):
   * *Be careful not to **run out of** time during the reading comprehension section.*`,
    contentEs: `### El Desafío de los Phrasal Verbs en el EXCI
Un **phrasal verb** es la combinación de un verbo común y una preposición o adverbio, lo que genera un significado totalmente nuevo. En el EXCI, suelen aparecer tanto en los textos de lectura como en las opciones de completar oraciones de la sección gramatical.

### Los 8 Phrasal Verbs más comunes en el EXCI
Memoriza estos significados académicos que se repiten ciclo tras ciclo en las pruebas de la UANL:

1. **Call off** (Cancelar):
   * *The university decided to **call off** the outdoor ceremony due to rain.*
2. **Carry out** (Realizar / Efectuar un estudio o tarea):
   * *Researchers must **carry out** more studies before drawing a final conclusion.*
3. **Look into** (Investigar / Examinar un caso):
   * *The UANL administration promised to **look into** the student complaints.*
4. **Put off** (Aplazar / Posponer):
   * *Don't **put off** studying for the EXCI until the night before the exam!*
5. **Set up** (Establecer / Instalar / Instaurar):
   * *The faculty has **set up** a new scholarship program for international applicants.*
6. **Turn down** (Rechazar una propuesta o solicitud):
   * *She had to **turn down** the job offer because she hasn't passed her English exam yet.*
7. **Make up** (Inventar una historia / Compensar o reponer):
   * *Students cannot **make up** excuses for missing the official evaluation.*
8. **Run out of** (Quedarse sin algo / Agotarse):
   * *Be careful not to **run out of** time during the reading comprehension section.*`,
    contentRu: '',
  }
];

// -------------------------------------------------------------
// Metadata for the Remaining 79 Supplementary Tips (17 per Cat)
// -------------------------------------------------------------
const extraTopics: Array<{
  section: 'listening' | 'reading' | 'writing' | 'speaking' | 'general';
  titleEn: string;
  titleEs: string;
  summaryEn: string;
  summaryEs: string;
}> = [
  // --- GENERAL STRATEGY (15 more to make exactly 17) ---
  {
    section: 'general',
    titleEn: 'The 3-Pass Method for High-Speed Answering',
    titleEs: 'La técnica de las tres vueltas para responder rápido',
    summaryEn: 'Learn how to answer the easiest questions first and save the hard ones for later to guarantee a high score.',
    summaryEs: 'Aprende cómo responder primero las preguntas fáciles y guardar las difíciles para asegurar el mejor puntaje.'
  },
  {
    section: 'general',
    titleEn: 'Managing Exam Day Stress and Anxiety',
    titleEs: 'Manejo del Estrés y la Ansiedad el Día del Examen',
    summaryEn: 'Practical tips to stay calm, collected, and highly focused during the 2-hour exam at UANL.',
    summaryEs: 'Consejos prácticos para mantener la calma, la compostura y el enfoque durante las 2 horas de la prueba.'
  },
  {
    section: 'general',
    titleEn: 'Essential Vocabulary Expansion Secrets',
    titleEs: 'Secretos de Vocabulario para Ampliar tus Respuestas',
    summaryEn: 'Recommended methods to learn and study academic terms successfully before presenting the EXCI.',
    summaryEs: 'Métodos recomendados para aprender y estudiar términos académicos antes de tu examen EXCI.'
  },
  {
    section: 'general',
    titleEn: 'Understanding EXCI Scoring Rubrics',
    titleEs: 'Comprendiendo los Criterios de Evaluación del EXCI',
    summaryEn: 'Discover how your score is calculated and what boundary scores UANL faculties follow.',
    summaryEs: 'Descubre cómo se calcula tu puntaje y qué límites de puntos siguen las facultades de la UANL.'
  },
  {
    section: 'general',
    titleEn: 'How to Prepare Your Brain on Exam Morning',
    titleEs: 'Cómo Calentar tu Cerebro la Mañana del Examen',
    summaryEn: 'Maximize mental stamina with the recommended diet and quick warm-up in the hours leading to the test.',
    summaryEs: 'Maximiza tu resistencia mental con la alimentación y calentamiento recomendados antes del examen.'
  },
  {
    section: 'general',
    titleEn: 'High-Frequency Traps for EXCI Candidates',
    titleEs: 'Trampas Mecánicas de Alta Frecuencia para Candidatos',
    summaryEn: 'Avoid the most recurring mechanical mistakes students make on their optical reading answer sheet.',
    summaryEs: 'Evita los errores mecánicos más recurrentes al rellenar los círculos en la hoja de lectura óptica.'
  },
  {
    section: 'general',
    titleEn: 'Decoding Exam Structures and Directions',
    titleEs: 'Descifrando las Instrucciones Oficiales del Examen',
    summaryEn: 'Familiarize yourself with the English instructions beforehand so you do not waste time reading them.',
    summaryEs: 'Familiarízate con las instrucciones en inglés del examen para no malgastar minutos valiosos leyéndolas.'
  },
  {
    section: 'general',
    titleEn: 'The Ultimate EXCI Checklist for Your Last 24 Hours',
    titleEs: 'La Lista de Verificación Definitiva para las Últimas 24 Horas',
    summaryEn: 'What to do the day before to ensure your mind is operating at 100% capacity during the test.',
    summaryEs: 'Qué hacer el día anterior para asegurar que tu mente rinda al 100% el día de la evaluación.'
  },
  {
    section: 'general',
    titleEn: 'Preparing for the EXCI in Just Under 4 Weeks',
    titleEs: 'Plan de Preparación Rápida para el EXCI en 4 Semanas',
    summaryEn: 'A structured, accelerated revision schedule to cover all sections and maximize your final points.',
    summaryEs: 'Un calendario estructurado y acelerado de estudio para repasar todos los módulos del examen.'
  },
  {
    section: 'general',
    titleEn: 'Cognitive Tricks to Stay Highly Focused',
    titleEs: 'Trucos Cognitivos para Mantener la Concentración Máxima',
    summaryEn: 'Mental coordination exercises to maintain deep attention during exhausting listening and reading parts.',
    summaryEs: 'Ejercicios de concentración mental para no perder el hilo durante los módulos de lectura y audios.'
  },
  {
    section: 'general',
    titleEn: 'Choosing the Best Answer When You Draft a Blank',
    titleEs: 'Toma de Decisiones y Deducción de Respuestas en Blanco',
    summaryEn: 'How to use logical induction and narrow down variables when you do not remember the exact grammatical rule.',
    summaryEs: 'Cómo usar la inducción lógica y descartar respuestas cuando no recuerdes la regla gramatical exacta.'
  },
  {
    section: 'general',
    titleEn: 'What to Wear and Bring for Peak Comfort',
    titleEs: 'Vestimenta y Requisitos para el Día de la Prueba',
    summaryEn: 'A quick overview of what you must bring to the UANL assessment center, from pencil grade to IDs.',
    summaryEs: 'Una lista rápida de lo que debes portar al ingresar al aula de aplicación oficial de la UANL.'
  },
  {
    section: 'general',
    titleEn: 'Structuring Your Revision Schedule Safely',
    titleEs: 'Cómo Estructurar tu Calendario de Repaso de Forma Segura',
    summaryEn: 'Distribute your study time productively between listening files, grammar analysis, and reading mockups.',
    summaryEs: 'Divide tu tiempo productivamente entre audios, análisis gramatical y pasajes de lectura.'
  },
  {
    section: 'general',
    titleEn: 'The Difference Between B1 and B2 Exam Requirements',
    titleEs: 'La Diferencia Entre Requisitos de Banda B1 y B2 del EXCI',
    summaryEn: 'Understand the distinct cognitive and communicative markers required for upper-intermediate profiles.',
    summaryEs: 'Diferencia las competencias requeridas si tu carrera exige puntaje intermedio o avanzado.'
  },
  {
    section: 'general',
    titleEn: 'Beyond the EXCI: Continuing Your English Journey',
    titleEs: 'Más Allá del EXCI: Cómo Continuar tu Crecimiento en Inglés',
    summaryEn: 'How to leverage your preparation tools into professional growth, bilingual job placements, and academic routes.',
    summaryEs: 'Usa las estrategias de este examen para potenciar tu vida profesional y académica en el extranjero.'
  },

  // --- LISTENING SECTION (16 more to make exactly 17) ---
  {
    section: 'listening',
    titleEn: 'Tracking Oral Signposts during Monologues',
    titleEs: 'Seguimiento de Marcadores Oracionales en Monólogos',
    summaryEn: 'Learn to detect transitional spoken phrases that signal when the next target value is being spoken.',
    summaryEs: 'Aprende a detectar marcadores de discurso hablado para saber que la respuesta clave está cerca.'
  },
  {
    section: 'listening',
    titleEn: 'Identifying Mid-Speech Corrections and Traps',
    titleEs: 'Detección de Correcciones y Trampas a Mitad de Frase',
    summaryEn: 'Understand how speakers often amend details, values, or dates mid-sentence to trap unprepared students.',
    summaryEs: 'Estudia cómo los hablantes rectifican fechas o datos de imprevisto para descartar el primer número dicho.'
  },
  {
    section: 'listening',
    titleEn: 'Master Common Numeric Series and Spelling Rules',
    titleEs: 'Dominio de Series Numéricas Comunes y Ortografía',
    summaryEn: 'How to decipher and record telephone codes, ZIP strings, names, and compound values without letters swap.',
    summaryEs: 'Cómo interpretar deletreos difíciles y combinaciones numéricas sin confundir letras de sonido parecido.'
  },
  {
    section: 'listening',
    titleEn: 'Pre-Reading Secret: Predict Word Categories',
    titleEs: 'Predicción Semántica: El Secreto de Leer Antes de Escuchar',
    summaryEn: 'Use the moments before each audio to gauge if the next gap expects a singular noun, number, or adjective.',
    summaryEs: 'Aprovecha los segundos previos para saber si el reactivo espera un adjetivo, número o sustantivo.'
  },
  {
    section: 'listening',
    titleEn: 'Overcoming Acoustic Echoes in Exam Rooms',
    titleEs: 'Cómo Superar el Eco Acústico en el Aula',
    summaryEn: 'Adjust your focus style to easily comprehend sound played over general speakers inside vast lecture spaces.',
    summaryEs: 'Estrategias para afinar tu oído cuando el audio oficial se reproduce mediante bocinas ambientales.'
  },
  {
    section: 'listening',
    titleEn: 'Crucial Idioms Frequently Found in Audio Tracks',
    titleEs: 'Modismos y Expresiones Idiomáticas del Módulo de Escucha',
    summaryEn: 'A list of high-use expressions and colloquial sayings that are commonly evaluated in the short conversations part.',
    summaryEs: 'Una lista de frases hechas y modismos conversacionales de uso constante en las preguntas de audio.'
  },
  {
    section: 'listening',
    titleEn: 'How to Avoid Simple Spelling Mistakes in Listening',
    titleEs: 'Cómo Evitar Errores Simples de Ortografía Auditiva',
    summaryEn: 'One misspelled vowel completely nullifies the mark. Learn where to be highly cautious with standard nouns.',
    summaryEs: 'Una sola letra mal copiada invalida todo el acierto. Practica el deletreo de sustantivos de uso común.'
  },
  {
    section: 'listening',
    titleEn: 'Listening for Agreement/Disagreement Patterns',
    titleEs: 'Identificación de Patrones de Acuerdo y Desacuerdo',
    summaryEn: 'Detect affirmative and negative responses quickly from indirect phrases like "I don\'t see why not" or "I guess so".',
    summaryEs: 'Identifica posturas y respuestas indirectas veloces como "I don\'t see why not" o "I guess so".'
  },
  {
    section: 'listening',
    titleEn: 'Catching Transition Words Like *However* and *But*',
    titleEs: 'Interpretación de Conectores de Oclusión en el Habla',
    summaryEn: 'Understand how transition words instantly change the polarity and truth value of preceding arguments.',
    summaryEs: 'Aprende cómo los conectores de contraste invalidan de tajo la información mencionada previamente.'
  },
  {
    section: 'listening',
    titleEn: 'Deciphering Quick Phone Numbers and Addresses',
    titleEs: 'Descifrando Números Telefónicos y Direcciones Postales',
    summaryEn: 'Special tips to handle double zero representations, street abbreviations, and zip code formats in the transaction part.',
    summaryEs: 'Consejos para dominar las indicaciones de doble número, abreviaturas y códigos en diálogos iniciales.'
  },
  {
    section: 'listening',
    titleEn: 'Why Writing Down Keywords During Listening Saves You',
    titleEs: 'La Utilidad de Tomar Notas del Audio en tu Folleto',
    summaryEn: 'The strategy of taking notes on margins to avoid memory limits while answering multiple-choice items.',
    summaryEs: 'Toma notas ágiles al margen de tu examen para suplir la memoria de corto plazo mientras escuchas.'
  },
  {
    section: 'listening',
    titleEn: 'Tips for Long Lectures and Stress Adaptation',
    titleEs: 'Consejos de Resistencia para Monólogos y Ponencias',
    summaryEn: 'Stay alert during longer educational audios by dividing the listening questions into smaller semantic blocks.',
    summaryEs: 'Evita perder el hilo en textos largos organizando mentalmente las preguntas en pequeños temas.'
  },
  {
    section: 'listening',
    titleEn: 'How to Focus When Mind Wanders Off Track',
    titleEs: 'Técnica de Recuperación Rápida si te Distraes un Instante',
    summaryEn: 'What to do if you miss 5 seconds of the recording so you can instantly re-anchor with the subsequent question.',
    summaryEs: 'Qué hacer de inmediato si te desconcentras para no arrastrar el error en los siguientes reactivos.'
  },
  {
    section: 'listening',
    titleEn: 'Distinguishing Distractors and Trick Alternatives',
    titleEs: 'Diferenciación de Distractores y Respuestas Verdaderas',
    summaryEn: 'How option filters in multiple choice items reuse keywords to lure candidates into selecting false options.',
    summaryEs: 'Analiza cómo las opciones de respuesta juegan con palabras del audio para confundirte.'
  },
  {
    section: 'listening',
    titleEn: 'Keeping Up with Fast Accents and Pacing',
    titleEs: 'Familiarización con Acentos del Inglés Internacional',
    summaryEn: 'Train your comprehension on diverse native pronunciation variants like British, American, and Scottish voices.',
    summaryEs: 'Prepara tu mente para tolerar cambios de acento y pronunciaciones rápidas del inglés norteamericano y británico.'
  },
  {
    section: 'listening',
    titleEn: 'The Ideal Review Method for Listening Practice Sections',
    titleEs: 'El Método Ideal de Retroalimentación en Comprensión Auditiva',
    summaryEn: 'How to check your mistakes using transcripts to safely map what sound patterns tricked your comprehension.',
    summaryEs: 'Combina el uso del reproductor con la transcripción en texto para entender qué sonidos fallaste.'
  },

  // --- READING SECTION (16 more to make exactly 17) ---
  {
    section: 'reading',
    titleEn: 'Fast Skimming Procedures for Academic Paragraphs',
    titleEs: 'Técnicas de Skimming Eficientes para Párrafos de Nivel Técnico',
    summaryEn: 'Acquire high-speed reading methods to capture 80% of any complex academic thesis in under a minute.',
    summaryEs: 'Aprende a captar el 80% de un pasaje de lectura científica o social en menos de un minuto.'
  },
  {
    section: 'reading',
    titleEn: 'Precise Scanning to Target Dates and Names Quickly',
    titleEs: 'Scanning de Precisión para Ubicar Fechas y Nombres',
    summaryEn: 'Learn to glance over dense screens of letters to isolate specific values, acronyms, and proper nouns in seconds.',
    summaryEs: 'Ajusta tu foco periférico para encontrar cifras históricas, siglas corporativas y términos específicos en segundos.'
  },
  {
    section: 'reading',
    titleEn: 'How to Read and Annotate Passages for Perfect Recall',
    titleEs: 'Uso Práctico de Subrayados y Notas Marginales',
    summaryEn: 'Underline key active nouns and logical arguments to find details easily when answering multiple-choice items.',
    summaryEs: 'Aprende a destacar sustantivos lógicos y verbos de cambio para responder preguntas sin tener que releer todo.'
  },
  {
    section: 'reading',
    titleEn: 'Tackling Vocabulary-in-Context Questions Safely',
    titleEs: 'Resolución de Reactivos de Vocabulario en Contexto',
    summaryEn: 'Deduce unknown or complex terms by studying the syntactic and semantic definitions of adjoining sentences.',
    summaryEs: 'Descifra el significado de una palabra técnica o en desuso examinando la tesis de las frases colindantes.'
  },
  {
    section: 'reading',
    titleEn: 'Identifying Paragraph Main Topics of Discussion',
    titleEs: 'Identificación de la Idea Central de Cada Párrafo',
    summaryEn: 'Isolate the main topic sentence of a paragraph to understand the structural logic of the reading.',
    summaryEs: 'Ubica la primera oración de cada párrafo para descifrar rápidamente la estructura del texto.'
  },
  {
    section: 'reading',
    titleEn: 'The Truth About Reading Multiple Choice Answers',
    titleEs: 'La Selección en Preguntas de Comprensión Lectora',
    summaryEn: 'How false answers use extreme phrasing (*completely*, *never*) to inflate what was actually written.',
    summaryEs: 'Analiza cómo los distractores suelen usar exageraciones (*all*, *always*) no sustentadas en el texto.'
  },
  {
    section: 'reading',
    titleEn: 'Recognizing Author Intent and Tone in Academic Text',
    titleEs: 'Detección del Tono y la Intencionalidad del Autor',
    summaryEn: 'Differentiate descriptive facts from personal opinions or critique inside advanced reading selections.',
    summaryEs: 'Identifica si el texto busca educar de forma objetiva, criticar constructivamente o persuadir al lector.'
  },
  {
    section: 'reading',
    titleEn: 'How to Handle Unfamiliar Words Without Panicking',
    titleEs: 'Cómo Sobrellevar las Palabras Desconocidas sin Pánico',
    summaryEn: 'Accept that you can answer 100% of comprehension questions correctly without knowing every single word.',
    summaryEs: 'Asimila que es perfectamente normal encontrarse con terminología compleja; no la necesitas toda para acertar.'
  },
  {
    section: 'reading',
    titleEn: 'Breaking Down Exceptionally Long Sentences to Core Form',
    titleEs: 'Análisis de Enunciados Complejos y de Gran Longitud',
    summaryEn: 'Isolate main subjects and verbs from descriptive subordinate sections to dissect complex meanings.',
    summaryEs: 'Aísla el núcleo del sujeto y el verbo principal de las cláusulas accesorias para extraer el mensaje clave.'
  },
  {
    section: 'reading',
    titleEn: 'Mastering Pronoun Referential Connections (*it*, *these*)',
    titleEs: 'Localización de Referencias de Pronombres y Anáforas',
    summaryEn: 'Track what specific noun or historic theory is being referenced by pointing words in reading questions.',
    summaryEs: 'Domina los reactivos que cuestionan a qué concepto u objeto específico apunta un pronombre.'
  },
  {
    section: 'reading',
    titleEn: 'Tracking Contrasting Viewpoints and Critical Claims',
    titleEs: 'Identificación de Argumentos Confrontados en la Lectura',
    summaryEn: 'Highlight contrastive connectors to understand when the author introduces an opposing academic thesis.',
    summaryEs: 'Subraya conectores de oposición para entender las discrepancias entre teorías científicas expuestas.'
  },
  {
    section: 'reading',
    titleEn: 'Dealing with Complex Science and Technology Paragraphs',
    titleEs: 'Comprensión de Textos de Ciencia, Medicina y Tecnología',
    summaryEn: 'Adapt to technical terminology and processes in articles related to computing, physics, or geology.',
    summaryEs: 'Estrategias de supervivencia para abordar textos con alta densidad de tecnicismos del sector científico.'
  },
  {
    section: 'reading',
    titleEn: 'How to Spot Overgeneralized Options and Red Herrings',
    titleEs: 'Detección de Respuestas Sesgadas y Generalizaciones',
    summaryEn: 'Detect absolute modifiers in questions that change the moderate claims of the article into false answers.',
    summaryEs: 'Elimina de inmediato las alternativas que lleven al extremo afirmaciones que en el texto eran leves.'
  },
  {
    section: 'reading',
    titleEn: 'Saving Timelines by Skipping Hard Reading Entries',
    titleEs: 'Estrategias de Economía del Tiempo por Descarte Temporal',
    summaryEn: 'Increase points by spending time on clear fact-lookup questions and skipping highly interpretive blanks.',
    summaryEs: 'Prioriza responder preguntas directas y pospón las interpretativas para el cierre de la prueba.'
  },
  {
    section: 'reading',
    titleEn: 'Speed Reading Practices to Build Stamina Under Pacing',
    titleEs: 'Entrenamiento de Velocidad de Lectura para Rendir Bajo Presión',
    summaryEn: 'Build your optical muscle memory with daily reading exercises to easily complete three lengthy texts.',
    summaryEs: 'Ejercicios diarios para acelerar tus palabras por minuto sin mermar la asimilación del contenido.'
  },
  {
    section: 'reading',
    titleEn: 'Double-Pass Methods for Tricky Comprehension Items',
    titleEs: 'Técnica del Doble Filtro para Preguntas de Inferencia',
    summaryEn: 'Double check items that ask what is *implied* or *suggested* by checking direct textual evidence.',
    summaryEs: 'Evita interpretaciones excesivas en preguntas de deducción cotejando con evidencias directas.'
  },

  // --- WRITING/GRAMMAR SECTION (16 more to make exactly 17) ---
  {
    section: 'writing',
    titleEn: 'Subject-Verb Agreement: The Tiny Mistake that Kills Grades',
    titleEs: 'Concordancia entre Sujeto y Verbo: El Error más Frecuente',
    summaryEn: 'Study how to match singular nouns with correct verb forms in complex, multi-clause academic sentences.',
    summaryEs: 'Asegura que el sustantivo y el verbo principal coincidan en número dentro de oraciones compuestas.'
  },
  {
    section: 'writing',
    titleEn: 'Inversion of Subject and Verb After Restrictive Adverbs',
    titleEs: 'Inversiones de Sujeto-Auxiliar tras Adverbios Restrictivos',
    summaryEn: 'Review the rules of subject-auxiliary inversions when sentences start with terms like *Never* or *Only under*.',
    summaryEs: 'Domina los casos formales de inversión cuando el enunciado arranca con *Seldom*, *Rarely* o *Hardly*.'
  },
  {
    section: 'writing',
    titleEn: 'Gerunds vs Infinitives: Rules for Core Verbs',
    titleEs: 'Gerundios y Participios frente a Infinitivos con "To"',
    summaryEn: 'Memorize which high-frequency English verbs must be followed by an -ing form or a to-infinitive root.',
    summaryEs: 'Reglas de memoria para saber qué forma verbal colocar después de verbos comunes del EXCI.'
  },
  {
    section: 'writing',
    titleEn: 'Mastering English Relative Clauses (*who*, *which*, *that*)',
    titleEs: 'Uso de Cláusulas Relativas en el Inglés Académico',
    summaryEn: 'Learn to join fragments seamlessly while respecting subject/object rules for human and non-human subjects.',
    summaryEs: 'Utiliza pronombres relativos adecuados en oraciones compuestas respetando la función del sujeto.'
  },
  {
    section: 'writing',
    titleEn: 'Passive Voice Formats for Academic Writing Tasks',
    titleEs: 'La Voz Pasiva en la Expresión Escrita Profesional',
    summaryEn: 'Identify and apply the correct passive syntax: *Object + auxiliary TO BE + past participle* in exam items.',
    summaryEs: 'Estructuras pasivas sumamente frecuentes en los reactivos de opción múltiple de la UANL.'
  },
  {
    section: 'writing',
    titleEn: 'Parallel Structure: Keep Your Clauses Harmonized',
    titleEs: 'Estructura Paralela: Armonía de Elementos en Serie',
    summaryEn: 'Keep items in a list grammatically identical (e.g., all nouns, all gerunds, or all adjectives) to avoid score loss.',
    summaryEs: 'Garantiza la uniformidad gramatical al unir elementos afines en un mismo listado.'
  },
  {
    section: 'writing',
    titleEn: 'Essential Punctuation Rules Tested on the EXCI',
    titleEs: 'Reglas Fundamentales de Puntuación Académica',
    summaryEn: 'Learn the exact syntactic conditions for using commas, semicolons, and periods in written questions.',
    summaryEs: 'Aplica el uso de puntos, comas, conjunciones y puntos y comas en reactivos gramaticales.'
  },
  {
    section: 'writing',
    titleEn: 'Avoiding Run-On Sentences and Grammatical Slips',
    titleEs: 'Cómo Evitar Oraciones Yuxtapuestas o Run-On Sentences',
    summaryEn: 'Fix sentences that fuse independent clauses without appropriate punctuation, prepositions, or joining terms.',
    summaryEs: 'Aprende a desarticular enunciados redundantes o mal coordinados sintácticamente.'
  },
  {
    section: 'writing',
    titleEn: 'Contrast Connectors (*although*, *despite*, *whereas*)',
    titleEs: 'Diferencias Sintácticas de Conectores de Oposición',
    summaryEn: 'Understand the difference between connectors that precede full noun clauses vs. those that precede normal subject-verb clauses.',
    summaryEs: 'Aprende qué conectores admiten un sustantivo directo y cuáles requieren cláusula compleja.'
  },
  {
    section: 'writing',
    titleEn: 'Correct Usage of Modal Verbs in Hypothetical Situations',
    titleEs: 'Uso de Verbos Modales en Escenarios Hipotéticos',
    summaryEn: 'Evaluate degrees of certainty and past possibility using helper modals like *should have*, *might*, and *must have*.',
    summaryEs: 'Diferencia los niveles de aserción y especulación usando auxiliares modales complejos.'
  },
  {
    section: 'writing',
    titleEn: 'Prepositions of Location and Time (*in*, *on*, *at*, *by*)',
    titleEs: 'Preposiciones de Tiempo, Lugar y Régimen Preposicional',
    summaryEn: 'Avoid error traps with high-frequency temporal and directional prepositions used in sentence completions.',
    summaryEs: 'Guía rápida para la selección correcta de preposiciones en oraciones académicas.'
  },
  {
    section: 'writing',
    titleEn: 'Double Negatives and Restrictive Sentence Forms',
    titleEs: 'Doble Negación y Exclusiones de Polaridad Negativa',
    summaryEn: 'Spot grammatical errors where double negative terms (*not never*, *no nothing*) are inappropriately paired in formal contexts.',
    summaryEs: 'Identifica enunciados incorrectos que duplican la negación en contextos de examen académico.'
  },
  {
    section: 'writing',
    titleEn: 'Word Form Transformations: Noun, Verb, Adjective Shifts',
    titleEs: 'Familias de Palabras y Clases Gramaticales en Enunciados',
    summaryEn: 'Identify which suffixes distinguish nouns, adjectives, verbs, and adverbs to fill in spaces correctly.',
    summaryEs: 'Aprende a reconocer el sufijo para saber si un espacio en blanco requiere un adjetivo o sustantivo.'
  },
  {
    section: 'writing',
    titleEn: 'Correct Use of Pronoun Cases and Antecedents',
    titleEs: 'Pronombres Personales, de Objeto y Posesivos en Contexto',
    summaryEn: 'Select the right pronoun profile (subject vs. object position) in academic sentences with complex subjects.',
    summaryEs: 'Evita fallar en la selección de pronombres al referenciar sustantivos previos en el texto.'
  },
  {
    section: 'writing',
    titleEn: 'Participial Clauses for Syntactic Complexity',
    titleEs: 'Estructuras Avanzadas con Cláusulas de Participio',
    summaryEn: 'Learn how to combine sentences using present (-ing) and past (-ed) participles to display upper-intermediate skill.',
    summaryEs: 'Domina los enunciados compuestos que inician con formas participiales complementarias.'
  },
  {
    section: 'writing',
    titleEn: 'Common Subject-Modifier Inconsistencies to Avoid',
    titleEs: 'Incongruencias Comunes entre Sujeto y Modificador',
    summaryEn: 'Identify and resolve floating modifiers that describe the wrong noun in a sentence.',
    summaryEs: 'Asegura que las descripciones introductorias correspondan plenamente con el sujeto principal.'
  },

  // --- SPEAKING/VOCABULARY SECTION (16 more to make exactly 17) ---
  {
    section: 'speaking',
    titleEn: 'Essential Academic Verbs for High-Quality Expression',
    titleEs: 'Verbos Académicos Fundamentales para tu Vocabulario',
    summaryEn: 'Boost your comprehension by incorporating academic verbs like *analyze*, *demonstrate*, *imply*, and *quantify*.',
    summaryEs: 'Enriquece tu nivel léxico usando verbos académicos como *analyze*, *demonstrate*, *imply* y *quantify*.'
  },
  {
    section: 'speaking',
    titleEn: 'Collocations with *Do* and *Make* You Cannot Confuse',
    titleEs: 'Colocaciones Habituales con "Do" y "Make"',
    summaryEn: 'Understand the clear, systematic rules to determine when to use *do* (activities, chores) vs. *make* (creations).',
    summaryEs: 'Domina la diferencia definitiva sobre cuándo aplicar *do* o *make* en el registro de examen.'
  },
  {
    section: 'speaking',
    titleEn: 'Synonyms for High-Frequency Words (*important*, *show*)',
    titleEs: 'Variedad Léxica: Sinónimos para Evitar Vocabulario Plano',
    summaryEn: 'Avoid repetitive and simple language by switching basic words with high-tier choices like *paramount* or *exhibit*.',
    summaryEs: 'Evita repetir expresiones comunes con alternativas ricas como *paramount*, *integral* o *exhibit*.'
  },
  {
    section: 'speaking',
    titleEn: 'Linking Words for Cohesion and Argument Transitions',
    titleEs: 'Conectores Lógicos y Elementos de Hilación Discursiva',
    summaryEn: 'Connect ideas smoothly inside conversations and texts using transitional elements like *consequently* or *nevertheless*.',
    summaryEs: 'Une ideas con elegancia usando conectores formales como *consequently*, *furthermore* y *nevertheless*.'
  },
  {
    section: 'speaking',
    titleEn: 'Essential Adverbs to Express Intensity and Degree',
    titleEs: 'Adverbios de Intensidad y Grado para Uso Académico',
    summaryEn: 'Amplify or soften descriptions using formal adverbs such as *notably*, *substantially*, or *marginally*.',
    summaryEs: 'Modula adjetivos de forma fluida y selectiva con adverbios como *notably*, *substantially* o *marginally*.'
  },
  {
    section: 'speaking',
    titleEn: 'Idiomatic Phrases for Everyday English Dialogues',
    titleEs: 'Frases Idiomáticas e Expresiones Figuradas Comunes',
    summaryEn: 'Learn high-frequency colloquial expressions needed to understand the contextual cues of audio recordings.',
    summaryEs: 'Estudia modismos frecuentes útiles para contextualizar diálogos breves en la prueba oficial.'
  },
  {
    section: 'speaking',
    titleEn: 'Tricky Homophones and Easily Confused Spellings',
    titleEs: 'Homófonos y Errores de Vocabulario por Confusión Fonética',
    summaryEn: 'Distinguish words that sound identical but differ in meaning and spelling, such as *affect* vs *effect*.',
    summaryEs: 'Identifica y diferencia parejas engañosas como *affect* frente a *effect* o *principal* y *principle*.'
  },
  {
    section: 'speaking',
    titleEn: 'Science and Technology Academic Vocabulary Lists',
    titleEs: 'Glosario Temático de Ciencia, Informática y Tecnología',
    summaryEn: 'Master terms related to digital breakthroughs, internet data, research studies, and technological fields.',
    summaryEs: 'Glosario de términos indispensables relacionados con internet, laboratorios y avance técnico.'
  },
  {
    section: 'speaking',
    titleEn: 'Business, Economics, and Societal Collocations',
    titleEs: 'Vocabulario y Colocaciones sobre Negocios y Sociedad',
    summaryEn: 'A compilation of idioms and formal collocations concerning market trends, jobs, and societal dynamics.',
    summaryEs: 'Compilación de términos útiles sobre tendencias comerciales, mercado de trabajo e impacto social.'
  },
  {
    section: 'speaking',
    titleEn: 'Expressions of Agreeing and Disagreeing Gracefully',
    titleEs: 'Estructuras de Acuerdo y Discrepancia Moderada',
    summaryEn: 'Formulas to align with or pivot from arguments in interactive dialogues of the English test.',
    summaryEs: 'Fórmulas para expresar sintonía o desacuerdo de forma educada en diálogos intermedios.'
  },
  {
    section: 'speaking',
    titleEn: 'Defining Complex Causes and Effects Lexically',
    titleEs: 'Léxico para Definir Relaciones de Causa y Consecuencia',
    summaryEn: 'Formulate transitions to connect developments to their causes using *stems from* or *on account of*.',
    summaryEs: 'Estructuras formales para enlazar causas y efectos como *stems from* o *on account of*.'
  },
  {
    section: 'speaking',
    titleEn: 'Clarifying Ideas and Paraphrasing Complex Concepts',
    titleEs: 'Técnicas de Parafraseo y Aclaración de un Mensaje',
    summaryEn: 'Learn how to restate definitions when you cannot recall specific academic nouns during standard usage.',
    summaryEs: 'Aprende a formular explicaciones alternas si olvidas un sustantivo técnico durante el uso de la lengua.'
  },
  {
    section: 'speaking',
    titleEn: 'Dynamic Prefixes and Suffixes to Decode New Terms',
    titleEs: 'Mapeo de Afijos: Prefijos y Sufijos en la Comprensión de Vocabulario',
    summaryEn: 'Use Latin and Greek root forms to instantly decipher meaning of difficult words under time pressure.',
    summaryEs: 'Usa la morfología de raíces comunes para intuir con rapidez el significado de vocablos difíciles.'
  },
  {
    section: 'speaking',
    titleEn: 'Collocations with *Get*, *Take*, and *Put* to Memorize',
    titleEs: 'Colocaciones y Verbos Compuestos con "Get", "Take" y "Put"',
    summaryEn: 'A guide to high-frequency verb/preposition links using common English transition actions.',
    summaryEs: 'Un compendio selecto de phrasal verbs indispensables basados en verbos cotidianos.'
  },
  {
    section: 'speaking',
    titleEn: 'Describing Charts and Trends with Accurate Terminology',
    titleEs: 'Lexicografía de Tendencias, Gráficos y Variaciones Estadísticas',
    summaryEn: 'Learn the exact vocabulary used to represent peaks, declines, steady parameters, and random shifts.',
    summaryEs: 'Sustantivos, adjetivos y verbos precisos para describir ascensos, descensos y mesetas de datos.'
  },
  {
    section: 'speaking',
    titleEn: 'The Best Memory Techniques for Speed-Learning Words',
    titleEs: 'Técnicas de Mnemotecnia para Adquirir Vocabulario',
    summaryEn: 'How to use association visual triggers and spaced repetition schedules to commit vocabulary to long-term memory.',
    summaryEs: 'Usa asociaciones visuales y agendas de repaso para memorizar decenas de terminologías semanales de por vida.'
  }
];

// -------------------------------------------------------------
// Deterministic Content and Metadata Generator
// -------------------------------------------------------------

const authorsPoolEn = [
  'EXCI Preparation Guide',
  'EXCI Study Strategy',
  'EXCI Skills Manual',
  'EXCI Practice Notes',
  'EXCI Exam Tactics',
  'EXCI Core Curriculum',
  'EXCI Academic Guide',
  'EXCI Success Protocol'
];

const authorsPoolEs = [
  'Guía de Preparación EXCI',
  'Estrategia de Estudio EXCI',
  'Manual de Habilidades EXCI',
  'Notas de Práctica EXCI',
  'Tácticas del Examen EXCI',
  'Programa Central EXCI',
  'Guía Académica EXCI',
  'Protocolo de Éxito EXCI'
];

/**
 * Builds cohesive, structured, markdown content dynamically for the mock articles 
 * so each article has readable, high-quality advice text based on its specific title.
 */
function buildCustomContent(title: string, summary: string, section: string, isSpanish: boolean): string {
  const titleLower = title.toLowerCase();
  
  if (isSpanish) {
    let topicHeadline = `Estrategias de Éxito: ${title}`;
    let steps: string[] = [];
    let assessorTip = "";

    if (titleLower.includes("stress") || titleLower.includes("anxiety") || titleLower.includes("focused") || titleLower.includes("comfort") || titleLower.includes("ansiedad") || titleLower.includes("estrés") || titleLower.includes("concentración")) {
      topicHeadline = `Manejo de Nervios y Estado Mental: ${title}`;
      steps = [
        "**Técnica de Centrado Somático 4-4**: En momentos de alta tensión durante el examen, inhala durante 4 segundos, mantén el aire por 4 segundos y exhala lentamente por la boca durante 4 segundos. Esto reduce de inmediato la frecuencia cardíaca y aclara el pensamiento lógico.",
        "**Relajación Óptica Selectiva**: Si experimentas 'ceguera de palabras' tras leer textos densos en el EXCI, desvía la mirada de la hoja óptica hacia un punto lejano del aula por 10 segundos enteros para descongestionar el enfoque visual.",
        "**Adaptación al Entorno Corporal**: Elige usar vestimenta en capas cómodas y calzado sin presiones directas. El aire acondicionado del centro evaluador de la UANL puede variar, afectando la concentración si se pasa frío."
      ];
      assessorTip = `"Los picos de adrenalina bloquean el acceso temporal a las estructuras verbales complejas que has repasado. Controlar los hombros y mantener una respiración consciente libera tu memoria activa."`;
    }
    else if (titleLower.includes("vocabulary") || titleLower.includes("words") || titleLower.includes("collocations") || titleLower.includes("synonyms") || titleLower.includes("phrasal") || titleLower.includes("idioms") || titleLower.includes("vocabulario") || titleLower.includes("palabras") || titleLower.includes("sinónimos")) {
      topicHeadline = `Desarrollo de Vocabulario y Expresión Cohesiva: ${title}`;
      steps = [
        "**Estructuración Léxica Temática**: Organiza tus fichas de términos en mapas de conceptos relacionados (por ejemplo, vocabulario de negocios, medio ambiente, o ingeniería) en lugar de ruidosas secuencias alfabéticas.",
        "**Mapeo Rápido de Sinónimos**: Sustituye adjetivos básicos y repetitivos como 'bad' o 'important' por alternativas sustancialmente más ricas como 'detrimental', 'counterproductive', 'paramount' o 'integral'.",
        "**Comprensión de las Colocaciones Activas**: No memorices verbos aislados. Registra de manera estricta sus complementos preposicionales o adverbiales correspondientes (p. ej. 'rely on', 'succeed in', 'insight into') para sonar natural y aprobar los incisos de gramática."
      ];
      assessorTip = `"El vocabulario formal evaluado en el EXCI rara vez es idéntico a las palabras comunes cotidianas. Aprende a descifrar definiciones académicas mediante el análisis de raíces de latín o griego."`;
    }
    else if (titleLower.includes("grammar") || titleLower.includes("subject-verb") || titleLower.includes("relative") || titleLower.includes("passive") || titleLower.includes("punctuation") || titleLower.includes("clause") || titleLower.includes("agreement") || titleLower.includes("inversion") || titleLower.includes("gramatical") || titleLower.includes("sujeto") || titleLower.includes("cláusula") || titleLower.includes("concordancia")) {
      topicHeadline = `Precisión Gramatical y Estructura Sintáctica: ${title}`;
      steps = [
        "**Aislamiento del Sujeto Principal**: Identifica el sustantivo núcleo en oraciones que tienen modificadores intercalados muy extensos. Esto asegura que elijas correctamente el verbo auxiliar singular o plural en los problemas de completar oraciones.",
        "**Análisis de Estructuras Pasivas**: El EXCI utiliza con frecuencia oraciones pasivas formales para centrar la atención sobre el objeto o el resultado. Verifica siempre que el participio pase coincida con el tiempo verbal del verbo 'To Be'.",
        "**Validación de Cláusulas y Conjunciones**: Memoriza qué conectores exigen un sustantivo directo o sintagma (como 'despite') de aquellos que funcionan obligatoriamente con oraciones completas de sujeto y verbo (como 'although')."
      ];
      assessorTip = `"El error gramatical más común es la concordancia incorrecta en oraciones largas. Si aprendes a destilar el enunciado eliminando las frases accesorias, revelarás la respuesta correcta al instante."`;
    }
    else if (section === 'listening' || titleLower.includes("listening") || titleLower.includes("audio") || titleLower.includes("accents") || titleLower.includes("lecture") || titleLower.includes("escucha") || titleLower.includes("auditiva")) {
      topicHeadline = `Optimización de Comprensión Auditiva: ${title}`;
      steps = [
        "**Seguimiento Dinámico del Segundo Hablante**: En los diálogos de dos turnos, presta el triple de atención al participante que replica. Las contradicciones, confirmaciones fatales y los datos modificados se concentran en esa segunda intervención.",
        "**Anotaciones Rápidas de Emergencia**: En el margen de tu pregunta de listening, escribe las cifras, números de teléfono o deletreos que escuches. No confíes plenamente en tu retentiva mientras el narrador lee las opciones.",
        "**Ignorar Distracciones de Sonido Homófonas**: Los incisos tramposos a menudo incorporan vocablos de idéntica pronunciación fonética a los del audio para confundirte. Elige siempre la alternativa que use sinónimos en lugar de la que replique el sonido idéntico."
      ];
      assessorTip = `"Las grabaciones del examen EXCI se reproducen una sola vez. Si pierdes la pista de un reactivo, bajo ninguna circunstancia intentes recuperarlo; realiza una deducción veloz en tu hoja de respuestas y pasa al siguiente."`;
    }
    else if (section === 'reading' || titleLower.includes("reading") || titleLower.includes("skimming") || titleLower.includes("scanning") || titleLower.includes("passages") || titleLower.includes("lectora") || titleLower.includes("lectura")) {
      topicHeadline = `Estrategias de Comprensión Lectora Rápida: ${title}`;
      steps = [
        "**Análisis del Primer Enunciado (Topic Sentence)**: Lee velozmente la línea de apertura de cada párrafo del módulo para construir el mapa mental del contenido completo en menos de un minuto.",
        "**Scanning Específico para Hechos**: Al enfrentar interrogantes que demandan años, porcentajes o nombres técnicos, desliza tu mirada en forma de zig-zag sin leer cada línea, buscando la presencia de letras capitales.",
        "**Cotejo de Distractores Sobre-Generalizados**: Descarta con rigor las alternativas que planteen enunciados absolutos con adverbios tajantes como 'always', 'never' o 'completely', a menos que el pasaje del autor sea sumamente categórico."
      ];
      assessorTip = `"Traducir mentalmente el texto completo de inglés a español es un error garrafal que drena el tiempo. Debes leer el inglés de forma directa y enfocarte únicamente en asimilar las ideas sustantivas."`;
    }
    else {
      if (titleLower.includes("comfort") || titleLower.includes("wear") || titleLower.includes("vestimenta") || titleLower.includes("requisitos") || titleLower.includes("bring")) {
        topicHeadline = `Vestimenta y Requisitos para el Día de la Prueba: ${title}`;
        steps = [
          "**Vestimenta en Capas Regulables**: Las aulas de examen de la UANL sufren cambios de climatización repentinos y variables. Lleva un suéter ligero para adaptarte cómodamente al entorno térmico de la sala de examen.",
          "**Documentación Oficial Imprescindible**: Asegúrate de portar tu identificación oficial vigente con fotografía (INE, pasaporte o la credencial de estudiante de la UANL) para que te sea permitido el acceso al aula.",
          "**Útiles Oficiales Permitidos**: Lleva dos lápices del número 2 o 2.5, goma de borrar suave y sacapuntas básico. Recuerda que no se admiten celulares, relojes inteligentes ni calculadoras dentro del salón de evaluación."
        ];
        assessorTip = `"Llegar al menos 30 minutos antes te ahorrará el estrés habitual de tráfico en los accesos al campus de la UANL. Mantener tu mente despejada al entrar al examen es fundamental."`;
      }
      else if (titleLower.includes("schedule") || titleLower.includes("calendar") || titleLower.includes("weeks") || titleLower.includes("calendario") || titleLower.includes("semanas") || titleLower.includes("cronograma")) {
        topicHeadline = `Calendario de REPASO y Rutinas Semanales: ${title}`;
        steps = [
          "**Distribución Mensual Balanceada**: Divide tus sesiones semanales de forma alternada entre comprensión auditiva, lecturas y práctica de estructuras gramaticales para evitar cansar tu memoria en un solo tema.",
          "**Sesiones de Enfoque Profundo**: Estudia periodos cortos de 35 a 45 minutos diariamente en lugar de hacer lecturas maratónicas extenuantes durante un solo día del fin de semana.",
          "**Evaluaciones de Progreso**: Mide tu nivel al inicio y a mitad de tus semanas de preparación utilizando simuladores de examen confiables para dirigir tu estudio posterior hacia puntos débiles."
        ];
        assessorTip = `"Organizar un calendario de prep de 4 semanas es ideal para el EXCI si logras aportar de 45 a 60 minutos de estudio constante cada día. La consistencia crea automatismos indispensables."`;
      }
      else if (titleLower.includes("b1") || titleLower.includes("b2") || titleLower.includes("difference") || titleLower.includes("diferencia") || titleLower.includes("requirements") || titleLower.includes("requisitos")) {
        topicHeadline = `Requisitos y Niveles del EXCI UANL: ${title}`;
        steps = [
          "**Mapeo de Metas por Licenciatura**: Varias de las facultades de la UANL exigen del estudiante un puntaje de 50 a 65 puntos (CEFR B1) para su graduación de licenciatura, mientras que posgrados y escuelas internacionales demandan de 70 a 80 puntos (CEFR B2).",
          "**Gramática de Nivel Superior**: Para aspirar a la banda B2, debes dominar estructuras sintácticas avanzadas como condicionales mixtos, cláusulas pasivas formales e inversiones en oraciones.",
          "**Comprensión Contextual Dinámica**: B2 requiere que descifres párrafos académicos a velocidad normal, deduciendo significados lógicos sin estancarte a traducir palabras desconocidas en tu mente."
        ];
        assessorTip = `"Alcanzar un puntaje superior a 70 puntos exige entrenar tus destrezas para capturar el tono implícito del autor en lugar de simplemente traducir oraciones simples."`;
      }
      else if (titleLower.includes("beyond") || titleLower.includes("journey") || titleLower.includes("career") || titleLower.includes("growth") || titleLower.includes("crecimiento") || titleLower.includes("más allá") || titleLower.includes("vida profesional")) {
        topicHeadline = `Más Allá del EXCI: Crecimiento Profesional: ${title}`;
        steps = [
          "**Oportunidades de Empleo Bilingüe**: Contar con un resultado oficial del EXCI te acredita ante las grandes industrias internacionales de Nuevo León como personal bilingüe listo para trabajar.",
          "**Movilidad Académica y Becas**: Los departamentos de relaciones internacionales de la UANL utilizan la escala de evaluación del EXCI para autorizar intercambios y estancias de investigación.",
          "**Hábitos de Consumo Diario de Inglés**: Integra el idioma a tu vida real consumiendo noticias de tu industria en inglés, escuchando contenidos audiovisuales o ajustando las preferencias de tus sistemas operativos."
        ];
        assessorTip = `"No veas al EXCI como un trámite administrativo árido de titulación; tómalo como una validación real de tu capacidad lingüística profesional para abrirte puertas globales."`;
      }
      else {
        topicHeadline = `Estrategia y Planificación General del Examen: ${title}`;
        steps = [
          "**Práctica General Guiada**: Practica con ejercicios variados para acostumbrar a tu enfoque mental a alternar ágilmente entre oraciones cortas y pasajes de texto extensos.",
          "**Descarte Rápido de Opciones**: Descarta velozmente los dos distractores más evidentemente ilógicos de la pregunta oficial para enfocar tus opciones de razonamiento únicamente en el par finalista.",
          "**Cronometración Inteligente**: Distribuye el tiempo de examen reservando minutos fijos y nunca pases más de 90 segundos sufriendo en un problema gramatical complejo. Asegura tus marcas fluidas."
        ];
        assessorTip = `"Obtener un puntaje óptimo radica en una buena unión de tu capacidad lingüística con un manejo del tiempo estratégico e ininterrumpido durante la prueba real."`;
      }
    }

    return `### ${topicHeadline}

${summary}

Para dominar esta área y alcanzar tus metas académicas en la prueba oficial de la Universidad Autónoma de Nuevo León (UANL), aplica estos tres pasos lógicos indispensables en tus rutinas de repaso semanal:

1. ${steps[0]}
2. ${steps[1]}
3. ${steps[2]}

### Tip de Oro de los Asesores del EXCI UANL
${assessorTip}

*Esta guía especializada fue curada para preparar a estudiantes de facultades de la UANL con un enfoque totalmente alineado a las necesidades de graduación, becas y posgrado.*`;
  } else {
    let topicHeadline = `Success Strategies for: ${title}`;
    let steps: string[] = [];
    let assessorTip = "";

    if (titleLower.includes("stress") || titleLower.includes("anxiety") || titleLower.includes("focused") || titleLower.includes("comfort") || titleLower.includes("ansiedad") || titleLower.includes("estrés") || titleLower.includes("concentración")) {
      topicHeadline = `Nervous Control & Focus Tactics: ${title}`;
      steps = [
        "**Somatic Box Breathing 4-4**: In moments of panic or high tension during the test hours, breathe in for 4 seconds, hold for 4 seconds, and blow out gently. This somatic feedback lowers cortisol levels instantly to restore logic.",
        "**Selectively Resting Your Gaze**: If you start getting overwhelmed or experience word-fatigue on long paragraphs, look away from your optical bubble sheet for 10 full seconds to loosen active eye-muscles before returning to search.",
        "**Temperature and Clothes Selection**: Wear layers on test day so you can adjust to room temperatures. Extreme air conditioning in UANL auditoriums can seriously hamper your cognitive processing speed."
      ];
      assessorTip = `"Extreme stress or adrenaline triggers a cognitive tunnel vision where students fail to process subtle but explicit textual evidence. Control your breathing to control your final grade."`;
    }
    else if (titleLower.includes("vocabulary") || titleLower.includes("words") || titleLower.includes("collocations") || titleLower.includes("synonyms") || titleLower.includes("phrasal") || titleLower.includes("idioms") || titleLower.includes("vocabulario") || titleLower.includes("palabras") || titleLower.includes("sinónimos")) {
      topicHeadline = `Vocabulary Expansion & Lexical Reach: ${title}`;
      steps = [
        "**Mapping Out Semantic Groups**: Organize vocabulary lists by meaningful academic fields (such as medicine, economics, or engineering) instead of generic alphabetical directories to help your brain anchor new terms.",
        "**Switching Simple Expressions**: Routinely swap out repetitive and boring adjectives like 'bad' or 'important' with high-tier synonyms such as 'detrimental', 'paramount', 'essential', or 'counterproductive'.",
        "**Parsing Practical Collocations**: Avoid learning verbs in isolation. Always memorize their natural accompanying preposition dependencies (e.g., 'depend on', 'succeed in', 'vulnerable to') which are heavily tested in sentence completions."
      ];
      assessorTip = `"Academic vocabulary is the cornerstone of B2-level performance. Look for structural and morphological components like Latin prefixes or Greek suffixes to infer meanings under pressure."`;
    }
    else if (titleLower.includes("grammar") || titleLower.includes("subject-verb") || titleLower.includes("relative") || titleLower.includes("passive") || titleLower.includes("punctuation") || titleLower.includes("clause") || titleLower.includes("agreement") || titleLower.includes("inversion") || titleLower.includes("gramatical") || titleLower.includes("sujeto") || titleLower.includes("cláusula") || titleLower.includes("concordancia")) {
      topicHeadline = `Grammar Precision & Advanced Syntax: ${title}`;
      steps = [
        "**Isolating Core Noun Subjects**: Locate the active subject noun in complex sentences loaded with intermediate modifiers. This ensures you pick the correct singular or plural verb auxiliary on completion items.",
        "**Identifying Passive Constructions**: Notice passive transitions (*object + auxiliary to be + past participle*). Formal exam booklets often use passive voice to frame academic results, so verify the forms check out.",
        "**Verifying Conjunction Dependencies**: Memorize syntactic constraints for connecting phrases (e.g., 'despite' or 'due to' require a noun object, while 'although' or 'because' require a full subject-verb clause)."
      ];
      assessorTip = `"Subject-verb agreement is the single most tested item in Structure multiple-choice questions. Learn to temporarily ignore descriptive prepositional clauses to see the core sentence framework."`;
    }
    else if (section === 'listening' || titleLower.includes("listening") || titleLower.includes("audio") || titleLower.includes("accents") || titleLower.includes("lecture") || titleLower.includes("escucha") || titleLower.includes("auditiva")) {
      topicHeadline = `Listening Comprehension Mastery: ${title}`;
      steps = [
        "**Peak Alertness on the Second Speaker**: In the short two-way conversations of the EXCI, the key to the correct response is almost always in the second speaker's turn. Listen closely to their reply.",
        "**Marginal Active Data Scrubbing**: Jot down numbers, zip strings, spelling layouts, or times onto your margins immediately. Do not rely entirely on your working memory when the narrator begins reading the choices.",
        "**Filtering Same-Sound Traps**: Incorrect choices frequently utilize words that sound identical to the audio content but mean something completely different. Prefer choices that employ smart synonyms."
      ];
      assessorTip = `"EXCI listening tracks are never replayed. If you miss a specific word, let it go immediately. Bubbling a random choice and focusing 100% on the upcoming question is far superior."`;
    }
    else if (section === 'reading' || titleLower.includes("reading") || titleLower.includes("skimming") || titleLower.includes("scanning") || titleLower.includes("passages") || titleLower.includes("lectora") || titleLower.includes("lectura")) {
      topicHeadline = `High-Speed Reading Comprehension: ${title}`;
      steps = [
        "**Gaining Speed with Topic Sentences**: Read only the opening sentence of each paragraph during your initial scanning to construct a structural outline of the entire text in 60 seconds.",
        "**Target Searching with Peripheral Sight**: When looking for factual data like dates, capitalized proper nouns, or quantities, use the zig-zag scanning technique rather than a slow, sentence-by-sentence reading.",
        "**Analyzing Absolute Assertions**: Be highly cautious of choices containing words like 'always', 'never', or 'entirely'. Academic passages typically qualify statements with moderate, nuanced claims."
      ];
      assessorTip = `"Attempting to mentally translate every single English word into Spanish is a huge bottleneck. Train yourself to read English blocks directly and infer unfamiliar words from context."`;
    }
    else {
      if (titleLower.includes("comfort") || titleLower.includes("wear") || titleLower.includes("vestimenta") || titleLower.includes("requisitos") || titleLower.includes("bring")) {
        topicHeadline = `Dress and Essential Day-of-Exam Rules: ${title}`;
        steps = [
          "**Dress in Adjustable Layers**: UANL examination options can undergo rapid climatization changes during Saturday shifts. Bring a cozy, light sweater so you can easily adapt to room temperature spikes.",
          "**Official ID and Registration Check**: Keep your current state photo ID card (INE, passport, or standard UANL student card) with you, otherwise you will be restricted from entering the test room.",
          "**Permitted Stationery and Allowed tools**: Bring several high-quality grade 2 pencils, a clean soft eraser, and a manual sharpener. Remember that smartwatches, phones, and calculators are strictly banned inside the hall."
        ];
        assessorTip = `"Arriving 30 minutes early mitigates standard traffic anxiety around popular campus gates. Entering the classroom with a peaceful mindset is an essential key to success."`;
      }
      else if (titleLower.includes("schedule") || titleLower.includes("calendar") || titleLower.includes("weeks") || titleLower.includes("calendario") || titleLower.includes("semanas") || titleLower.includes("cronograma")) {
        topicHeadline = `Planning Your Study Calendar and Timelines: ${title}`;
        steps = [
          "**Balanced Area Scheduling**: Alternate your study intervals systematically focusing on grammar, active reading, and listening tracks, ensuring you never tire your brain on a single skill.",
          "**Short and Deep Study Intervals**: Devote 35 to 45 minutes of hyper-focused study daily. This is much better for memory retention than stressful, massive weekend cram sessions.",
          "**Diagnostic Scoring Checkpoints**: Execute realistic assessment runs at the start and middle of your schedule to guide your remaining study time toward high-yield improvements."
        ];
        assessorTip = `"A 4-week timeline is highly effective for the EXCI if you stick to a consistent 45-to-60 minute daily habit. Consistent daily exposure creates intuitive grammatical reflexes."`;
      }
      else if (titleLower.includes("b1") || titleLower.includes("b2") || titleLower.includes("difference") || titleLower.includes("diferencia") || titleLower.includes("requirements") || titleLower.includes("requisitos")) {
        topicHeadline = `EXCI UANL Target Scores & CEFR Alignments: ${title}`;
        steps = [
          "**Recognizing Graduation Score Requirements**: General majors at UANL (e.g. FIME, FACPYA) require B1-level benchmarks (around 50 to 65 points), while global programs demand B2-level proficiency (70 to 80 points).",
          "**Asimilating High-Level Syntactic Frames**: Reaching B2 proficiency demands logical recognition of compound and complex sentences like mixed conditionals, formal passive configurations, and syntax inversion.",
          "**Deducing Content on Context**: Train yourself to parse long paragraphs at standard reading speeds, inferring complex terms based on general context instead of halting to translate."
        ];
        assessorTip = `"Scoring above 70 points on the EXCI is about understanding the contextual tone and academic purpose of a passage, rather than just simple grammatical word structures."`;
      }
      else if (titleLower.includes("beyond") || titleLower.includes("journey") || titleLower.includes("career") || titleLower.includes("growth") || titleLower.includes("crecimiento") || titleLower.includes("más allá") || titleLower.includes("vida profesional")) {
        topicHeadline = `Leveraging EXCI Achievements for Your Professional Growth: ${title}`;
        steps = [
          "**Unlocking Bilingual Corporate Placements**: Your physical EXCI certificate proves your fluent English competencies to multinational firms operating in the industrial hubs of Nuevo León.",
          "**Gaining International Study Options**: Relaciones Internacionales offices at UANL require EXCI credentials to approve student exchange placements and foreign research grants.",
          "**Embedding Daily English Usage Habits**: Keep your English levels competitive by scanning technical journals in your engineering/business field and tuning in to podcasts in English."
        ];
        assessorTip = `"See the EXCI not as an administrative graduation chore, but as a prestigious passport validating your professional bilingual status in modern global industries."`;
      }
      else {
        topicHeadline = `General Test Pacing and Logical Tactics: ${title}`;
        steps = [
          "**Varied Practice Drills**: Solve diverse questions to train your brain to quickly adapt between sentence-correction items and dense reading comprehension paragraphs.",
          "**Deductive Strategy and Elimination**: Cross off the two most illogical multiple-choice options immediately. Focus your reasoning power entirely on selecting the correct key from the final pair.",
          "**Strategic Pacing and Time Buffering**: Budget your minutes and never spend more than 90 seconds stuck on a single grammatical item. Mark your logical guess, move forward, and preserve energy."
        ];
        assessorTip = `"Obtaining a stellar final EXCI score matches a solid linguistic skill set with systematic, disciplined time management on the day of the real evaluation."`;
      }
    }

    return `### ${topicHeadline}

${summary}

To excel in this area and secure your target grade on the official EXCI English exam at UANL, implement these three highly practical methods directly into your weekly review routines:

1. ${steps[0]}
2. ${steps[1]}
3. ${steps[2]}

### EXCI UANL Prep Instructors Gold Tip
${assessorTip}

*This specialized article was designed to support UANL students preparing for their official graduation, admission, or study-abroad English requirements.*`;
  }
}

// -------------------------------------------------------------
// Merge Handcrafted and Generated Supplementary Articles
// -------------------------------------------------------------
const generatedArticles: BlogArticle[] = extraTopics.map((topic, index) => {
  // Deterministic values based on title length/character details to prevent any hydration mismatch
  const authorIndex = Math.abs(topic.titleEn.length + index) % authorsPoolEn.length;
  const readTimeValue = 4 + (Math.abs(topic.titleEn.length) % 3); // Evaluates to 4, 5, or 6

  const authorEn = authorsPoolEn[authorIndex];
  const authorEs = authorsPoolEs[authorIndex];
  const readTimeEn = `${readTimeValue} min read`;
  const readTimeEs = `${readTimeValue} min de lectura`;

  const contentEn = buildCustomContent(topic.titleEn, topic.summaryEn, topic.section, false);
  const contentEs = buildCustomContent(topic.titleEs, topic.summaryEs, topic.section, true);

  return {
    id: `exci-gen-tip-${topic.section}-${index + 1}`,
    section: topic.section,
    titleEn: topic.titleEn,
    titleEs: topic.titleEs,
    titleRu: '',
    authorEn,
    authorEs,
    authorRu: '',
    readTimeEn,
    readTimeEs,
    readTimeRu: '',
    summaryEn: topic.summaryEn,
    summaryEs: topic.summaryEs,
    summaryRu: '',
    contentEn,
    contentEs,
    contentRu: '',
  };
});

// Combine both arrays into the single exported blogArticles list
export const blogArticles: BlogArticle[] = [...coreArticles, ...generatedArticles];
