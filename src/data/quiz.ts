/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  answer: number; // Index of the correct option
  explanationEn: string;
  explanationEs: string;
  explanationRu: string;
}

const a1Raw: [string, string[], number, string, string, string][] = [
  [
    "What ______ you doing right now?",
    ["are", "is", "am", "be"],
    0,
    "In the Present Continuous tense, 'are' is the correct form of the verb 'to be' for the pronoun 'you'.",
    "En el presente continuo, la forma correcta del verbo 'to be' para el pronombre 'you' es 'are'.",
    "В настоящем длительном времени глагол 'to be' принимает форму 'are' для местоимения 'you'."
  ],
  [
    "They arrived ______ Friday at midnight.",
    ["on", "at", "in", "under"],
    0,
    "Always use the preposition 'on' before days of the week like Friday.",
    "Siempre se usa la preposición 'on' con los días de la semana como 'Friday' (viernes).",
    "Перед днями недели (Friday) всегда используется предлог 'on'."
  ],
  [
    "______ is that woman in the red dress?",
    ["Who", "What", "When", "Why"],
    0,
    "We use the interrogative pronoun 'Who' when asking about a person's identity.",
    "Usamos el pronombre interrogativo 'Who' (quién) para preguntar sobre personas.",
    "Для вопросов о людях (кто) используется вопросительное местоимение 'Who'."
  ],
  [
    "How ______ siblings do you have?",
    ["many", "much", "some", "any"],
    0,
    "Use 'many' with plural countable nouns (such as siblings) to ask about quantity.",
    "Utiliza 'many' con sustantivos contables en plural (como 'siblings') para preguntar por la cantidad.",
    "Используйте 'many' с исчисляемыми существительными во множественном числе (siblings)."
  ],
  [
    "I ______ play soccer on Sundays.",
    ["sometimes", "always", "never", "ever"],
    0,
    "With frequency adverbs like 'sometimes', it is placed before the main verb.",
    "Los adverbios de frecuencia como 'sometimes' (a veces) se colocan justo antes del verbo principal.",
    "Наречия частоты (например, 'sometimes') обычно ставятся перед смысловым глаголом."
  ],
  [
    "We gave ______ a nice housewarming gift.",
    ["him", "his", "he", "himself"],
    0,
    "Use the object pronoun 'him' since it receives the action of the verb.",
    "Utiliza el pronombre objeto 'him' ya que actúa como el receptor de la acción del verbo.",
    "Используйте объектное местоимение 'him' (ему), так как оно является дополнением."
  ],
  [
    "Is this gorgeous house ______?",
    ["ours", "our", "we", "us"],
    0,
    "Use the possessive pronoun 'ours' to show ownership when no noun follows.",
    "Usa el pronombre posesivo 'ours' (nuestro/a) cuando no va seguido de ningún sustantivo.",
    "Притяжательное местоимение 'ours' используется в конце предложения, когда после него нет существительного."
  ],
  [
    "This new phone is ______ than your old one.",
    ["better", "good", "best", "more good"],
    0,
    "The comparative adjective form of 'good' is the irregular word 'better'.",
    "La forma comparativa del adjetivo 'good' (bueno) es el comparativo irregular 'better' (mejor).",
    "Сравнительная степень от прилагательного 'good' является исключением и имеет форму 'better'."
  ],
  [
    "She ______ to work by bus every day.",
    ["goes", "go", "going", "gone"],
    0,
    "In the present simple, verbs ending in 'o' take the '-es' suffix with third-person singular subjects (she).",
    "En presente simple, los verbos que terminan en 'o' añaden '-es' ('goes') con sujetos de tercera persona singular (she).",
    "В настоящем времени для третьего лица единственного числа (she) глагол 'go' принимает форму 'goes'."
  ],
  [
    "Where ______ you live?",
    ["do", "does", "are", "is"],
    0,
    "Use the auxiliary verb 'do' to form questions in the present simple when the subject is 'you'.",
    "Se utiliza el verbo auxiliar 'do' para hacer preguntas en presente simple con el pronombre 'you'.",
    "Для образования вопроса в Present Simple с местоимением 'you' используется вспомогательный глагол 'do'."
  ],
  [
    "There ______ two cats asleep on the sofa.",
    ["are", "is", "am", "be"],
    0,
    "We use 'there are' with plural nouns (two cats) to express existence.",
    "Utilizamos 'there are' con sustantivos en plural ('two cats') para indicar existencia.",
    "Конструкция 'there are' используется для указания на существование предметов во множественном числе (two cats)."
  ],
  [
    "I like to drink ______ apple juice in the morning.",
    ["some", "a", "an", "any"],
    0,
    "Use 'some' in positive sentences with uncountable nouns like 'juice'.",
    "Usa 'some' (un poco de / algo de) en oraciones afirmativas con sustantivos incontables como 'juice'.",
    "Местоимение 'some' используется в утвердительных предложениях с неисчисляемыми существительными."
  ],
  [
    "My father is ______ engineer.",
    ["an", "a", "the", "some"],
    0,
    "Use the indefinite article 'an' before words that start with a vowel sound (engineer).",
    "Utiliza el artículo indefinido 'an' antes de palabras que comienzan con un sonido vocálico ('engineer').",
    "Неопределенный артикль 'an' употребляется перед существительными, начинающимися с гласного звука."
  ],
  [
    "Those books over there are ______.",
    ["yours", "your", "you", "yourselves"],
    0,
    "Use the possessive pronoun 'yours' at the end of the sentence to show possession.",
    "Usa el pronombre posesivo 'yours' (tuyo/s) al final de la oración cuando no hay sustantivos después.",
    "Притяжательное местоимение 'yours' выражает принадлежность и используется самостоятельно без существительного."
  ],
  [
    "Does she ______ cheese?",
    ["like", "likes", "liking", "liked"],
    0,
    "After the auxiliary verb 'does' in questions, the main verb must be in its base form.",
    "Tras el verbo auxiliar 'does' en preguntas, el verbo principal debe estar en su forma base ('like').",
    "В вопросительных предложениях с вспомогательным глаголом 'does' смысловой глагол используется в начальной форме."
  ],
  [
    "______ you like to come with me?",
    ["Would", "Do", "Are", "Will"],
    0,
    "We use 'Would you like' as a polite formula for offers and invitations.",
    "Utilizamos la estructura cortés 'Would you like' (¿te gustaría?) para hacer invitaciones.",
    "Конструкция 'Would you like' используется для вежливого приглашения или предложения."
  ],
  [
    "My keys are ______ the kitchen table.",
    ["on", "in", "at", "underneath"],
    0,
    "Use the preposition 'on' to indicate position on top of a flat surface like a table.",
    "Usa la preposición 'on' para indicar que algo está sobre una superficie plana como una mesa.",
    "Предлог 'on' используется для указания нахождения предмета на плоской поверхности (столе)."
  ],
  [
    "I can ______ Spanish very well.",
    ["speak", "speaks", "speaking", "to speak"],
    0,
    "Modal verbs like 'can' must be followed directly by a base verb without 'to'.",
    "Los verbos modales como 'can' siempre van seguidos directamente del verbo en infinitivo sin 'to'.",
    "Сильные модальные глаголы, такие как 'can', требуют после себя инфинитив без частицы 'to'."
  ],
  [
    "She is buying ______ new clothes today.",
    ["some", "a", "an", "any"],
    0,
    "We use 'some' in affirmative sentences with plural countable nouns like 'clothes'.",
    "Usamos 'some' en oraciones afirmativas con sustantivos plurales y contables como 'clothes' (ropa).",
    "'some' употребляется в утвердительных предложениях с существительными во множественном числе."
  ],
  [
    "We ______ not American.",
    ["are", "is", "am", "be"],
    0,
    "The correct plural form of the verb 'to be' for 'we' is 'are'.",
    "La forma plural correcta del verbo 'to be' correspondiente al sujeto 'we' (nosotros) es 'are'.",
    "Для местоимения первого лица множественного числа 'we' глагол 'to be' принимает форму 'are'."
  ],
  [
    "They are ______ the park.",
    ["at", "on", "into", "to"],
    0,
    "Use 'at' to refer to a general location or public place (at the park, at school).",
    "Usa la preposición 'at' para referirte a una ubicación o lugar público general ('at the park').",
    "Предлог 'at' используется для указания на местонахождение в определенной точке пространства или учреждении."
  ],
  [
    "Her car is ______ than mine.",
    ["bigger", "biggest", "big", "more big"],
    0,
    "Single-syllable adjectives ending in consonant-vowel-consonant double the last letter before adding '-er' for comparisons.",
    "Para adjetivos cortos de una sílaba que terminan en consonante-vocal-consonante, se duplica la última letra y se añade '-er'.",
    "Для односложных прилагательных с кратким гласным звуком при сравнении удваивается последняя согласная и добавляется суффикс '-er'."
  ],
  [
    "What is ______ name?",
    ["your", "you", "yours", "yourselves"],
    0,
    "Use the possessive adjective 'your' directly before a noun to show possession.",
    "Usa el adjetivo posesivo 'your' (tu/su) directamente antes del sustantivo 'name' para indicar posesión.",
    "Притяжательное прилагательное 'your' используется перед существительным для указания владения."
  ],
  [
    "Where is ______ airport?",
    ["the", "a", "an", "any"],
    0,
    "Use the definite article 'the' because we are talking about a specific airport in town.",
    "Usamos el artículo definido 'the' porque nos referimos a un aeropuerto específico conocido por el hablante.",
    "Определенный артикль 'the' указывает на конкретный объект, о котором идет речь (например, аэропорт города)."
  ],
  [
    "I do not ______ milk.",
    ["drink", "drinks", "drinking", "drank"],
    0,
    "Use the base form of the verb directly after present auxiliary negative helpers like 'do not'.",
    "Usa la forma base del verbo inmediatamente después de la estructura auxiliar negativa 'do not'.",
    "После отрицательной конструкции Present Simple 'do not' смысловой глагол ставится в начальную форму."
  ],
  [
    "How ______ is this shirt?",
    ["much", "many", "old", "often"],
    0,
    "We use the question phrase 'How much' when asking about the price of an item.",
    "Utilizamos la frase interrogativa 'How much' (¿cuánto cuesta?) para preguntar el precio de los objetos.",
    "Вопросительная фраза 'How much' используется для того, чтобы спросить стоимость товара."
  ],
  [
    "He ______ play football on Sundays.",
    ["doesn't", "don't", "isn't", "aren't"],
    0,
    "For negative sentences in the present simple, we use 'doesn't' with third-person singular subjects (he, she, it).",
    "En oraciones negativas en presente simple, usamos el auxiliar 'doesn't' con la tercera persona singular (he).",
    "В Present Simple отрицание для третьего лица единственного числа (he) строится с помощью 'doesn't'."
  ],
  [
    "Who ______ you?",
    ["are", "is", "be", "am"],
    0,
    "With the subject pronoun 'you', the correct corresponding form of the verb 'to be' is 'are'.",
    "Con el pronombre de sujeto 'you', la forma correcta del verbo 'to be' es 'are' (¿Quién eres tú?).",
    "Для местоимения 'you' верной формой глагола 'to be' является 'are'."
  ],
  [
    "We got ______ orange and two lemons.",
    ["an", "a", "some", "the"],
    0,
    "The word 'orange' starts with a vowel sound, so it requires the indefinite article 'an'.",
    "La palabra 'orange' comienza con un sonido vocálico, por ende requiere el artículo indefinido 'an'.",
    "Слово 'orange' начинается с гласного звука, поэтому перед ним используется неопределенный артикль 'an'."
  ],
  [
    "Is that ______ dog?",
    ["their", "theirs", "them", "they"],
    0,
    "We use the possessive adjective 'their' before a noun to demonstrate that it belongs to them.",
    "Utilizamos el adjetivo posesivo 'their' antes de un sustantivo para indicar que les pertenece a ellos.",
    "Притяжательное местоимение-прилагательное 'their' ставится перед существительным для обозначения владения."
  ],
  [
    "These questions are ______.",
    ["easily", "easy", "easier", "easiest"],
    1,
    "We use the base form adjective 'easy' after the linking verb 'are' to describe the subject.",
    "Usamos el adjetivo descriptivo ordinario 'easy' después del verbo copulativo 'are' para calificar al sujeto.",
    "После глагола-связки 'to be' ('are') для описания подлежащего во множественном числе используется прилагательное 'easy'."
  ],
  [
    "I can hear a bird ______.",
    ["singing", "sings", "sang", "sung"],
    0,
    "Verbs of perception (like hear, see) can be followed by a participle ending in '-ing' to show ongoing actions.",
    "Los verbos de percepción física como 'hear' o 'see' pueden ir seguidos de un participio en '-ing' para acciones en progreso.",
    "После глаголов восприятия (hear) часто употребляется причастие с окончанием '-ing' для демонстрации действия в процессе."
  ],
  [
    "They are ______ in the garden.",
    ["playing", "play", "plays", "played"],
    0,
    "The present continuous tense is constructed with the verb 'to be' ('are') and the main verb ending in '-ing'.",
    "El tiempo presente continuo se construye vinculando el verbo de soporte 'be' con el verbo principal en '-ing'.",
    "Время Present Continuous образуется с помощью соответствующей формы глагола 'to be' и смыслового глагола с окончанием '-ing'."
  ],
  [
    "I go to bed ______ ten o'clock.",
    ["at", "on", "in", "to"],
    0,
    "Always use the preposition 'at' to indicate precise clock times (e.g., at 10:00).",
    "Utiliza siempre la preposición de tiempo 'at' para referirte a horas exactas del reloj.",
    "Для указания точного времени на часах всегда применяется предлог 'at'."
  ],
  [
    "She has got three ______.",
    ["children", "child", "childs", "childrens"],
    0,
    "The noun 'child' is irregular in plural and becomes 'children' (without adding '-s').",
    "El sustantivo 'child' (niño) posee un plural irregular que se escribe 'children' sin añadir la consonante '-s'.",
    "Существительное 'child' имеет неправильную форму множественного числа — 'children'."
  ],
  [
    "This desk is ______ than mine.",
    ["smaller", "smallest", "small", "more small"],
    0,
    "For short, single-syllable adjectives, form the comparative by appending '-er' to the end.",
    "Para adjetivos breves de una sola sílaba, el grado comparativo se construye añadiendo el sufijo '-er'.",
    "Для односложных прилагательных при сравнении к основе слова добавляется суффикс '-er'."
  ],
  [
    "We ______ a test today.",
    ["have", "has", "are", "having"],
    0,
    "With the pronouns I, we, you, and they, use the base possessive verb form 'have' in the present simple.",
    "Con los pronombres en plural como 'we', la forma correcta del verbo de posesión es 'have'.",
    "Для местоимения первого лица множественного числа 'we' используется форма глагола 'have'."
  ],
  [
    "Where was ______ car yesterday?",
    ["her", "hers", "she", "it"],
    0,
    "Use the possessive adjective 'her' directly preceding the noun 'car' to show ownership.",
    "Usa el adjetivo posesivo 'her' justo antes del sustantivo 'car' para expresar que le pertenece a ella.",
    "Притяжательное прилагательное 'her' (её) употребляется перед существительным."
  ],
  [
    "My brother ______ like milk.",
    ["doesn't", "don't", "isn't", "not"],
    0,
    "Use the singular present negative helper 'doesn't' before verbs for third-person singular subjects.",
    "Usa el auxiliar negativo singular 'doesn't' antes de infinitivos con sujetos masculinos de tercera persona singular.",
    "Для третьего лица единственного числа ('my brother' — он) отрицание в настоящем времени строится с помощью вспомогательного глагола 'doesn't'."
  ],
  [
    "Look at ______ birds in the sky!",
    ["those", "this", "that", "these"],
    0,
    "Use 'those' for plural nouns that are far away from the speaker (birds in the sky).",
    "Usa 'those' (aquellos) para referirte a objetos en plural que se sitúan a una distancia visible alejada.",
    "Указательное местоимение 'those' используется для существительных во множественном числе, находящихся на удалении."
  ],
  [
    "He is ______ doctor in a clinic.",
    ["a", "an", "some", "the"],
    0,
    "Use the indefinite article 'a' before profession names that begin with a consonant sound (doctor).",
    "Utiliza el artículo indeterminado 'a' delante del nombre de profesiones que inician con consonante.",
    "Неопределенный артикль 'a' употребляется перед исчисляемыми существительными в единственном числе, начинающимися с согласного звука."
  ],
  [
    "They sleep ______ night.",
    ["at", "on", "in", "to"],
    0,
    "The prepositional time collocation 'at night' is a fixed English idiom.",
    "La frase temporal 'at night' es una expresión de carácter fijo e introductorio del tiempo en inglés.",
    "В английском языке выражение 'ночью' строится с использованием устойчивого предложного сочетания 'at night'."
  ],
  [
    "I enjoy ______ books on weekends.",
    ["reading", "read", "reads", "to read"],
    0,
    "The verb 'enjoy' must always be followed by another verb in the gerund form ending in '-ing'.",
    "El verbo de agrado 'enjoy' exige estrictamente que el siguiente verbo se decline en gerundio finalizado en '-ing'.",
    "Глагол 'enjoy' требует после себя использования смыслового глагола исключительно в форме герундия (с окончанием '-ing')."
  ]
];

const a2Raw: [string, string[], number, string, string, string][] = [
  [
    "He avoids ______ promises he cannot keep.",
    ["making", "to make", "make", "made"],
    0,
    "The transient verb 'avoid' requires a verb in the gerund form (ending in '-ing') as its direct object.",
    "El verbo transitivo 'avoid' (evitar) requiere un verbo de acompañamiento en gerundio finalizado en '-ing'.",
    "Глагол 'avoid' требует после себя использования смыслового глагола в форме герундия (с окончанием '-ing')."
  ],
  [
    "The child walked ______ past the sleeping guard.",
    ["quietly", "quiet", "quieter", "more quiet"],
    0,
    "An adverb like 'quietly' is needed here to modify the manner of the action represented by the verb 'walked'.",
    "Se requiere el adverbio formado 'quietly' (silenciosamente) para calificar la acción expresada por el verbo 'walked'.",
    "Для описания характера действия глагола 'walked' требуется наречие 'quietly' (тихо, бесшумно)."
  ],
  [
    "I looked but found ______ in the drawer.",
    ["nothing", "something", "anything", "everything"],
    0,
    "Use 'nothing' to express a negative amount or complete absence in grammatically affirmative verb clauses.",
    "Usa el pronombre indefinido negativo 'nothing' para expresar una ausencia absoluta en cláusulas de verbo afirmativo.",
    "Отрицательное местоимение 'nothing' используется для выражения полного отсутствия чего-либо в утвердительном предложении."
  ],
  [
    "We ______ go to school on Saturdays.",
    ["don't", "won't", "aren't", "haven't"],
    0,
    "Use the auxiliary verb 'don't' ('do not') to build a negative sentence in the present simple for plural subjects like 'we'.",
    "Utiliza el auxiliar negativo 'don't' para construir la negación en presente simple correspondiente al sujeto plural 'we'.",
    "Для построения отрицания в Present Simple с местоимением множественного числа 'we' используется глагол 'don't'."
  ],
  [
    "They talked ______ the long train trip.",
    ["during", "while", "for", "since"],
    0,
    "Use the preposition 'during' directly before a static noun phrase (the long train trip) to specify when an event occurred.",
    "Empleamos la preposición 'during' directamente antes de una frase nominal para indicar el espacio temporal en que sucede algo.",
    "Предлог 'during' употребляется перед существительными или именными группами для обозначения периода времени."
  ],
  [
    "The weather is ______ today than on Monday.",
    ["better", "good", "best", "more good"],
    0,
    "The word 'better' is the irregular comparative form of 'good' and is used when comparing two distinct elements.",
    "La palabra 'better' actúa como la forma comparativa de adjetivo irregular de 'good' (bueno), empleada para contrastar dos cosas.",
    "Сравнительная степень прилагательного 'good' является исключением и имеет форму 'better' (лучше)."
  ],
  [
    "This red bicycle is not yours; it is ______.",
    ["mine", "my", "me", "myself"],
    0,
    "Use the possessive pronoun 'mine' to express personal ownership of an object without naming the noun again.",
    "Se requiere el pronombre posesivo 'mine' (mío) al final de la frase para denotar posesión omitiendo repetir el sustantivo.",
    "Притяжательное местоимение 'mine' выражает принадлежность первого лица без сопутствующего существительного."
  ],
  [
    "You ______ wear a coat; it's freezing outside.",
    ["should", "could", "might", "would"],
    0,
    "The auxiliary modal verb 'should' is standardly used to express strong recommendations or helpful advise.",
    "El verbo auxiliar modal 'should' se utiliza de manera regular para dar recomendaciones o consejos constructivos.",
    "Модальный глагол 'should' применяется для выражения вежливого совета или рекомендации."
  ],
  [
    "If you ______ me, I will help you tomorrow.",
    ["ask", "asks", "will ask", "asked"],
    0,
    "In the first conditional, the subordinate 'if'-clause uses the simple present tense ('ask') to establish a future possibility.",
    "Dentro del primer condicional, la cláusula condicional 'if' utiliza el presente simple ('ask') para proyectar una hipótesis.",
    "В условных предложениях первого типа (First Conditional) в придаточной части после 'if' используется настоящее время."
  ],
  [
    "She ______ finished her homework already.",
    ["has", "have", "is", "was"],
    0,
    "The auxiliary verb 'has' forms the present perfect tense when combined with third-person singular subjects (she).",
    "El verbo auxiliar 'has' se une al participio 'finished' para estructurar el presente perfecto de la tercera persona singular.",
    "Вспомогательный глагол 'has' используется в Present Perfect для субъектов третьего лица единственного числа (he, she, it)."
  ],
  [
    "The movie was ______ than the book.",
    ["more exciting", "exciting", "most exciting", "excitinger"],
    0,
    "For adjectives of three or more syllables like 'exciting', build the comparative degree by placing the word 'more' in front.",
    "Para adjetivos extensos de tres o más sílabas como 'exciting', la comparación se realiza anteponiendo la palabra 'more'.",
    "При сравнении многосложных прилагательных перед ними ставится слово 'more' для образования сравнительной степени."
  ],
  [
    "They ______ watching TV when the lights went out.",
    ["were", "was", "are", "have"],
    0,
    "Use the plural support past verb 'were' in the past continuous tense for they/we/you subject pronouns.",
    "Usa el verbo de soporte en pasado plural 'were' para estructurar el pasado continuo con el pronombre de sujeto 'they'.",
    "Для множественного числа (they) во времени Past Continuous используется вспомогательный глагол прошедшего времени 'were'."
  ],
  [
    "Have you ______ seen a dolphin?",
    ["ever", "never", "yet", "still"],
    0,
    "We use the adverb 'ever' (at any time) in present perfect questions to ask about entire life experiences.",
    "Empleamos el adverbio 'ever' (alguna vez) en preguntas de presente perfecto para indagar sobre las experiencias vividas.",
    "Наречие 'ever' (когда-либо) типично для вопросительных предложений Present Perfect при расспросах о жизненном опыте."
  ],
  [
    "The desk ______ made of real oak wood.",
    ["is", "are", "be", "does"],
    0,
    "To describe a static singular object in the present continuous passive voice, use 'is' + past participle.",
    "Para conjugar el presente simple pasivo con un objeto singular (the desk) se utiliza el verbo auxiliar 'is' más el participio.",
    "Пассивный залог в настоящем времени для единственного числа (the desk) строится с помощью глагола-связки 'is'."
  ],
  [
    "It is the ______ movie of the year.",
    ["best", "better", "good", "more good"],
    0,
    "The word 'best' acts as the irregular superlative form of 'good' to describe an item of the highest outstanding quality.",
    "La palabra 'best' se erige como el superlativo irregular de 'good' para calificar algo con el nivel de calidad más destacado.",
    "Превосходная степень прилагательного 'good' имеет неправильную форму — 'best' (самый лучший)."
  ],
  [
    "You ______ not drive on the left in France.",
    ["must", "should", "need", "could"],
    0,
    "Use the modal verb 'must' (must not) to convey absolute rules, legal prohibitions, or rigorous requirements.",
    "Usa el modal fuerte 'must' en negativo ('must not') para comunicar prohibiciones legales o reglas de obligado cumplimiento.",
    "Модальный глагол 'must' в связке с отрицанием 'not' выражает строгий запрет, обусловленный правилами или законом."
  ],
  [
    "We walked ______ the beach yesterday.",
    ["along", "through", "in", "at"],
    0,
    "The preposition 'along' means in a line following the length of a natural border, like a beach or path.",
    "La preposición de movimiento 'along' indica que caminamos siguiendo paralelos al borde de algo, como la costa de la playa.",
    "Предлог направления 'along' указывает на движение параллельно краю какого-либо протяженного объекта (вдоль пляжа)."
  ],
  [
    "If I had a yacht, I ______ travel around the world.",
    ["would", "will", "shall", "can"],
    0,
    "In the second conditional (hypothetical scenarios), the main dynamic clause utilizes the modal helper 'would' + base verb.",
    "En el segundo condicional (situaciones imaginarias), la cláusula principal de acción utiliza 'would' + verbo en infinitivo.",
    "Во втором условном предложении (Second Conditional) в главной части используется сослагательное 'would' + глагол."
  ],
  [
    "I haven't eaten breakfast ______.",
    ["yet", "already", "since", "just"],
    0,
    "Use 'yet' at the end of negative clauses to indicate an action that has not occurred so far but is expected soon.",
    "Utiliza el adverbio final 'yet' en presentes perfectos negativos para referir que una acción no ha sucedido aún.",
    "Наречие 'yet' (еще) употребляется в конце отрицательных предложений Present Perfect для обозначения неслучившегося действия."
  ],
  [
    "She speaks English ______ than her sister.",
    ["better", "good", "best", "more good"],
    0,
    "The comparative form of the adverb 'well' is 'better', indicating a superiority in performing an action.",
    "El grado comparativo correspondiente al adverbio de modo 'well' (bien) es la forma irregular 'better' (mejor).",
    "Сравнительная степень наречия 'well' выражается формой 'better' (лучше) при сопоставлении действий."
  ],
  [
    "They decided ______ their holidays in Italy.",
    ["to spend", "spend", "spending", "spent"],
    0,
    "The verb 'decide' belongs to a classification of verbs that must always be accompanied by a 'to'-infinitive complement.",
    "El verbo 'decide' requiere un complemento de acción conjugado estrictamente en infinitivo precedido por 'to'.",
    "После глагола 'decide' всегда следует употреблять инфинитив с частицей 'to' ('to spend')."
  ],
  [
    "We arrived ______ the station on time.",
    ["at", "on", "in", "to"],
    0,
    "Use the preposition 'at' when referencing public buildings, stations, social locations or specific addresses.",
    "Usa la preposición 'at' para dirigirte a puntos específicos del espacio social o de transporte público como las estaciones.",
    "Предлог 'at' употребляется для обозначения конкретного пункта назначения, станции или точки в пространстве."
  ],
  [
    "There are ______ apples in the kitchen.",
    ["some", "any", "a", "an"],
    0,
    "We use the quantifier 'some' in affirmative plural statements to indicate an unspecified moderate amount.",
    "Usamos el cuantificador plural 'some' en oraciones afirmativas para reflejar una cantidad moderada e inespecífica.",
    "Квантификатор 'some' используется в утвердительных предложениях с исчисляемыми существительными во множественном числе."
  ],
  [
    "Is that wallet ______?",
    ["yours", "your", "you", "yourselves"],
    0,
    "We require the possessive pronoun 'yours' here because it functions as the subject descriptor without an attached noun.",
    "Requerimos el pronombre posesivo 'yours' (tuyo) al no haber un sustantivo expreso directamente detrás de la palabra.",
    "Притяжательное местоимение 'yours' используется независимо в конце фразы в качестве именной части сказуемого."
  ],
  [
    "They ______ been studying since morning.",
    ["have", "has", "are", "were"],
    0,
    "The present perfect continuous uses 'have/has' + been + verb-ing. Choose 'have' to complement plural subjects (they).",
    "El presente perfecto continuo se conjuga con 'have' en tercera persona plural seguido del participio pasivo 'been' y el verbo en '-ing'.",
    "Present Perfect Continuous образуется вспомогательным глаголом 'have' для местоимения множественного числа 'they'."
  ],
  [
    "The kids played ______ computer games.",
    ["some", "any", "a", "an"],
    0,
    "Use 'some' in positive statements with plural countable nouns like 'games' to represent indefinite quantities.",
    "Usa el cuantificador afirmativo 'some' para referirte a cantidades plurales de sustantivos contables indeterminados ('games').",
    "В утвердительных предложениях для неопределенного количества предметов во множественном числе используют 'some'."
  ],
  [
    "He ______ to work because of the transit strike.",
    ["walked", "walk", "walks", "walking"],
    0,
    "Use the simple past verb 'walked' to explain a complete and singular action that happened in a past time period.",
    "Se emplea el pasado simple regular 'walked' (caminó) para referirse a una acción ya consumada en el tiempo histórico.",
    "Для описания завершенного, единичного действия в прошлом используется форма прошедшего времени Past Simple 'walked'."
  ],
  [
    "Who ______ you talking to yesterday?",
    ["were", "was", "are", "did"],
    0,
    "The auxiliary verb of the past continuous for the subject pronoun 'you' is always the plural-configured 'were'.",
    "El auxiliar del pasado continuo correspondiente al pronombre de segunda persona 'you' es obligatoriamente 'were'.",
    "С местоимением 'you' в прошедшем длительном времени Past Continuous всегда согласуется глагол 'were'."
  ],
  [
    "We got ______ apple and an orange.",
    ["an", "a", "some", "any"],
    0,
    "Use the indefinite article 'an' before single countable nouns that begin with a vocalic vowel sound (apple).",
    "Usa el artículo indeterminado 'an' precediendo a sustantivos que dan inicio de sonido con vocal como 'apple'.",
    "Артикль 'an' требуется перед исчисляемыми существительными единственного числа, начинающимися с гласного звука."
  ],
  [
    "Is this laptop ______?",
    ["hers", "her", "she", "herself"],
    0,
    "Use the possessive pronoun 'hers' to express ownership in situations where the noun is already understood and omitted.",
    "Usa la forma de pronombre posesivo independiente 'hers' (suyo de ella) al no existir sustantivos anexos al final.",
    "Притяжательное местоимение 'hers' указывает на принадлежность предмета женщине и не требует после себя существительного."
  ],
  [
    "This box is too heavy to ______.",
    ["lift", "lifting", "lifts", "lifted"],
    0,
    "The grammatical structure 'too + adjective + to' is naturally followed by the root verb in its simple infinitive form.",
    "La construcción del modificador de exceso 'too + adjetivo + to' se corona con el infinitivo base de acción del verbo principal.",
    "Конструкция 'too + прилагательное + to' грамматически требует продолжения в виде инфинитива смыслового глагола."
  ],
  [
    "I would go if I ______ free tonight.",
    ["were", "am", "will be", "be"],
    0,
    "In second conditional sentences expressing hypothetical conditions, we use the past subjunctive form 'were' for all subjects.",
    "En los condicionales hipotéticos se utiliza formalmente la declinación subjuntiva de pasado 'were' para todo tipo de sujetos.",
    "В условной части сослагательного наклонения для выражения воображаемых условий традиционно употребляется 'were'."
  ],
  [
    "The school was ______ built five years ago.",
    ["originally", "original", "origin", "originally of"],
    0,
    "We require the adverb 'originally' because it serves to describe and modify the passive verb construction 'was built'.",
    "Se requiere el adverbio 'originally' (originalmente) ya que su función es matizar el verbo en pasiva 'was built'.",
    "Для определения глагольной конструкции в страдательном залоге ('was built') применяется наречие 'originally'."
  ],
  [
    "They are preparing ______ for the presentation.",
    ["themselves", "their", "them", "theirs"],
    0,
    "Use the reflexive pronoun 'themselves' because the subjects ('They') are executing the preparation upon themselves.",
    "Se emplea el pronombre reflexivo de tercera persona plural 'themselves' porque la acción recae directamente sobre ellos mismos.",
    "Возвратное местоимение 'themselves' используется, когда действие направлено на подлежащих, выражающих оных (they)."
  ],
  [
    "How ______ sugar do you put in coffee?",
    ["much", "many", "few", "any"],
    0,
    "We use 'much' with singular uncountable nouns like 'sugar' when configuring questions and negative expressions.",
    "Utilizamos 'much' en combinación con sustantivos incontables en singular (como 'sugar') para cuantificar en preguntas.",
    "Вопросительное слово 'much' применяется с неисчисляемыми существительными, которые нельзя посчитать в штуках."
  ],
  [
    "They ______ in Madrid for three years before.",
    ["lived", "live", "lives", "living"],
    0,
    "The simple past tense 'lived' represents a completed state or duration of habitation finished entirely in the past.",
    "El pasado simple 'lived' expresa un estado de vida prolongado pero enteramente finalizado y consumado en el pasado.",
    "Время Past Simple в виде глагола 'lived' выражает законченное состояние или завершенную деятельность в прошлом."
  ],
  [
    "The student ______ works there is smart.",
    ["who", "which", "whose", "whom"],
    0,
    "We use the relative pronoun 'who' to connect a relative subject clause defining a specific human being (the student).",
    "Empleamos el pronombre de relación 'who' (quien/que) para dar pie a una descripción aclaratoria sobre un individuo.",
    "Относительное местоимение 'who' служит для присоединения придаточного предложения, описывающего человека."
  ],
  [
    "If I ______ you, I would study harder.",
    ["were", "was", "am", "be"],
    0,
    "With advice structures involving 'If I...', formal grammar utilizes the subjunctive 'were' (If I were you).",
    "En las fórmulas verbales fijas para otorgar consejos 'If I...', se prefiere el subjuntivo 'were' por encima de la variante 'was'.",
    "В устоявшемся обороте для дачи советов 'If I were you...' ('На вашем месте...') используется сослагательная форма 'were'."
  ],
  [
    "She ______ not like vegetables.",
    ["does", "do", "is", "has"],
    0,
    "For negative sentences in the present simple, combine 'does not' ('doesn't') with third-person singular subjects (she).",
    "Para conjugar el negativo del presente ordinario se requiere el auxiliar 'does' (does not) con la tercera persona singular.",
    "Для построения отрицания в Present Simple с личным местоимением третьего лица 'she' используется вспомогательный 'does'."
  ],
  [
    "Where are ______ children?",
    ["your", "yours", "you", "yourselves"],
    0,
    "Use the possessive adjective 'your' because it directly modifies and precedes the noun 'children'.",
    "Usa el adjetivo determinativo posesivo 'your' (tus/sus) dado que precede directamente al sustantivo receptor 'children'.",
    "Притяжательное прилагательное 'your' указывает на принадлежность и должно стоять непосредственно перед существительным."
  ],
  [
    "Your score is ______ than last week.",
    ["higher", "highest", "high", "more high"],
    0,
    "For single-syllable adjectives like 'high', the comparative form is built by appending the suffix '-er' (higher).",
    "Para estructurar la comparación de adjetivos cortos de una sola sílaba como 'high', se añade el sufijo comparativo '-er'.",
    "Односложные прилагательные образуют сравнительную степень путем прибавления суффикса '-er' к основе слова."
  ],
  [
    "We must arrive ______ midnight tonight.",
    ["before", "under", "behind", "with"],
    0,
    "The preposition 'before' establishes a temporal boundary or deadline before which an event must conclude.",
    "La preposición de tiempo 'before' (antes de) define un límite temporal prioritario a la hora de realizar una acción.",
    "Предлог времени 'before' используется для обозначения срока, ранее которого событие должно произойти."
  ],
  [
    "I need to buy a ______ things.",
    ["few", "little", "much", "any"],
    0,
    "The phrase 'a few' signifies a small positive amount and is used exclusively with plural countable nouns like 'things'.",
    "La expresión cuantificadora 'a few' indica una pequeña cantidad y acompaña obligatoriamente a sustantivos plurales contables.",
    "Конструкция 'a few' используется со значением 'некоторое количество' только перед исчисляемыми предметами."
  ]
];

const b1Raw: [string, string[], number, string, string, string][] = [
  [
    "If I had known, I ______ there.",
    ["would never have gone", "would never go", "never went", "will never go"],
    0,
    "In the third conditional (hypothetical past events), the main clause uses 'would + have + past participle' to show regret or alternative outcomes.",
    "En el tercer condicional (eventos hipótesis del pasado), la cláusula de resultado usa 'would + have + participio' para evocar desenlaces alternativos.",
    "В условных предложениях третьего типа (Third Conditional) для прошедших воображаемых ситуаций используется 'would + have + причастие прошедшего времени'."
  ],
  [
    "______ the heavy rain, they played the match.",
    ["Despite", "Although", "In spite", "However"],
    0,
    "The preposition 'Despite' indicates contrast and must be followed directly by a noun phrase (the heavy rain) rather than a clause with a verb.",
    "La preposición concesiva 'Despite' (a pesar de) se antepone de manera directa a un bloque nominal sin verbo conjugado.",
    "Предлог уступки 'Despite' (несмотря на) употребляется непосредственно перед существительным или именной группой без сопутствующего глагола."
  ],
  [
    "She is considering ______ a gap year.",
    ["taking", "to take", "take", "taken"],
    0,
    "The transient verb 'consider' is grammatically classified as requiring a gerund complement (verb ending in '-ing') as its direct object.",
    "El verbo 'consider' pertenece al grupo de verbos ingleses que se complementan de forma exclusiva mediante un gerundio en '-ing'.",
    "Переходный глагол 'consider' относится к категории глаголов, требующих после себя дополнения исключительно в форме герундия."
  ],
  [
    "You cannot obtain a visa ______ you supply biometric files.",
    ["unless", "if", "provided", "as long as"],
    0,
    "The conjunction 'unless' represents a negative condition meaning 'except if' or 'if... not', introducing a vital prerequisite.",
    "La conjunción condicional 'unless' (a menos que / si no) funciona como una exclusión negativa que denota un requisito indispensable.",
    "Подчинительный союз 'unless' (если не) используется для выражения отрицательного условия, являющегося обязательным требованием."
  ],
  [
    "Our grandmother ______ bake pies on Sundays.",
    ["used to", "is used to", "get used to", "use to"],
    0,
    "Use 'used to + infinitive' to talk about regular habits, states, or repeated actions in the past that no longer occur in the present.",
    "Usa 'used to + infinitivo' para expresar hábitos repetidos, estados prolongados u acciones rutinarias ya concluidas en el pasado.",
    "Конструкция 'used to' + инфинитив применяется для констатации регулярных привычек, постоянных состояний или действий из прошлого."
  ],
  [
    "They ______ buy three additional cards.",
    ["had to", "must did", "should have", "need to"],
    0,
    "The past form of the modal of obligation 'must' is constructed using 'had to' to denote absolute past necessity.",
    "Dado que el verbo modal primordial 'must' carece de conjugación propia en pasado, la obligación anterior se expresa mediante 'had to'.",
    "Модальный глагол обязательства 'must' не имеет своей формы прошедшего времени, поэтому в прошлом вместо него используется 'had to'."
  ],
  [
    "We walked silently ______ not wake the baby.",
    ["so as to", "in order to", "so that", "because"],
    0,
    "Use the purposeful clause construct 'so as + to-infinitive' (negated as 'so as not to') to express the specific goal of an action.",
    "Para expresar el propósito de evitar una consecuencia no deseada, se emplea la fórmula de infinitivo negativo 'so as not to'.",
    "Для лаконичного выражения цели совершения какого-либо действия в отрицательной форме используется оборот 'so as not to'."
  ],
  [
    "This is the architect ______ blueprint won the award.",
    ["whose", "who's", "whom", "which"],
    0,
    "Use the relative possessive pronoun 'whose' to establish a relationship of ownership between a person (architect) and a noun (blueprint).",
    "El pronombre relativo posesivo 'whose' (cuyo/cuya) establece una relación directa de pertenencia entre un antecedente humano y un objeto.",
    "Притяжательное относительное местоимение 'whose' (чей) выражает принадлежность предмета (blueprint) человеку (architect)."
  ],
  [
    "He apologized ______ making such a loud noise.",
    ["for", "to", "at", "about"],
    0,
    "The verb 'apologize' takes the fixed preposition 'for' to introduce the noun or gerund naming the reason for the apology.",
    "El régimen preposicional del verbo 'apologize' exige la específica preposición 'for' junto al motivo del arrepentimiento.",
    "Глагольное управление требует обязательного употребления предлога 'for' после глагола 'apologize' перед указанием вины."
  ],
  [
    "By the time we got there, the movie ______ starts.",
    ["had already", "has already", "was already", "would already"],
    0,
    "Use the past perfect tense ('had already + past participle') to demonstrate that an action was completed before another event in the past.",
    "Se utiliza el pasado perfecto ('had already') para explicitar que un proceso se consumó con anterioridad a otro hito del pasado.",
    "Время Past Perfect ('had already') выражает действие, которое произошло и завершилось до определенного момента или события в прошлом."
  ],
  [
    "I am not used ______ in cold weather.",
    ["to working", "to work", "work", "working"],
    0,
    "The structure 'be used to' meaning 'to be accustomed to' requires the preposition 'to' followed strictly by a gerund.",
    "La locución verbal 'be used to' (estar habituado a) requiere que la preposición 'to' se acompañe de un verbo en gerundio.",
    "Устойчивое выражение 'be used to' в значении 'быть привыкшим к' требует после себя предлога 'to' и герундия с окончанием '-ing'."
  ],
  [
    "The driver was accused ______ speeding.",
    ["of", "for", "by", "with"],
    0,
    "The passive verbal structure 'be accused' dictates the selection of the fixed preposition 'of' before the crime or action.",
    "La estructura del verbo pasivo 'be accused' (ser acusado) exige la preposición 'of' para conectar con el delito cometido.",
    "Глагол 'accuse' (обвинять) в пассивной конструкции требует после себя фиксированного предлога 'of' перед совершенным нарушением."
  ],
  [
    "I wish I ______ more before taking the test.",
    ["had learned", "learned", "would learn", "have learned"],
    0,
    "To express dissatisfaction or deep regret regarding a past situation, pair 'wish' with a verb conjugated in the past perfect.",
    "Para formular lamentos sobre oportunidades pasadas que ya no pueden alterarse, la estructura 'wish' se une al pasado perfecto.",
    "Для выражения сожаления о нереализованном действии в прошлом после глагола 'wish' употребляется время Past Perfect."
  ],
  [
    "She let him ______ her laptop.",
    ["use", "to use", "using", "used"],
    1,
    "The causative verb 'let' is grammatically followed by an object pronoun and a bare infinitive verb (without the particle 'to').",
    "El verbo causativo 'let' (permitir) rige un pronombre de objeto y un infinitivo desnudo (sin la partícula condicional 'to').",
    "Каузативный глагол 'let' (позволять) грамматически сочетается с бесчастичным инфинитивом (bare infinitive без частицы 'to')."
  ],
  [
    "They succeeded ______ passing the difficult exam.",
    ["in", "at", "on", "by"],
    0,
    "The verb 'succeed' takes the fixed preposition 'in' which then mandates a gerund (verb ending in '-ing') for any following actions.",
    "El verbo 'succeed' (tener éxito) rige formalmente la preposición 'in' previa a la utilización de un gerundio.",
    "Конструкция с глаголом 'succeed' (преуспевать) требует применения предлога 'in', после которого употребляется герундий."
  ],
  [
    "He ______ have gone to the gym, but I'm not sure.",
    ["might", "must", "should", "would"],
    0,
    "Use 'might have + past participle' to express a weak, hypothetical possibility about a past event that is not fully verified.",
    "Usa 'might have' seguido de participio para aludir a una posibilidad o conjetura débil en el pasado sobre la que reina duda.",
    "Сочетание 'might have' + причастие прошедшего времени указывает на слабую теоретическую вероятность события в прошлом."
  ],
  [
    "The company ______ logo is green is expanding.",
    ["whose", "which", "that", "who"],
    0,
    "The relative pronoun 'whose' indicates possession, showing that the green logo belongs to the aforementioned company.",
    "El pronombre relativo 'whose' denota la pertenencia directa del logotipo verde a la empresa de la cual se está hablando.",
    "Относительное притяжательное местоимение 'whose' выражает обладание признаком, связывая компанию и её зеленый логотип."
  ],
  [
    "We would be grateful if you ______ reply promptly.",
    ["could", "will", "would have", "can"],
    0,
    "In polite and formal letters, the second conditional structure uses 'if you could + base verb' to make courteous requests.",
    "En la correspondencia formal, se recurre al segundo condicional con 'if you could' para modular un ruego de forma cortés.",
    "В вежливых письменных обращениях второй тип сослагательного условия принимает вспомогательный 'could' для выражения любезности."
  ],
  [
    "The police suggested ______ the window at night.",
    ["locking", "to lock", "lock", "that lock"],
    0,
    "The verb 'suggest' is followed directly by a gerund (verb ending in '-ing') when introducing a general recommendation.",
    "El verbo de recomendación 'suggest' rige gramaticalmente la colocación directa de un gerundio en la acción recomendada.",
    "Глагол рекомендации 'suggest' требует после себя использования смыслового глагола в форме герундия без промежуточных союзов."
  ],
  [
    "You are not allowed ______ photos here.",
    ["to take", "taking", "take", "taken"],
    0,
    "The passive modal construct 'be allowed' is followed by a full infinitive ('to' + verb) to mark permissions.",
    "La estructura del sujeto pasivo 'be allowed' (permitirse) rige de modo obligatorio un infinitivo completo precedido de 'to'.",
    "Пассивный оборот разрешения 'be allowed' соотносится с последующим глаголом исключительно в форме инфинитива с частицей 'to'."
  ],
  [
    "He acts as if he ______ everything.",
    ["knew", "knows", "know", "has known"],
    0,
    "Use 'as if + past simple' to describe a highly hypothetical, imaginary, or completely untrue present state.",
    "Usa la conjunción comparativa 'as if' (como si) acompañada de pasado simple para recrear escenarios presentes imaginarios o irreales.",
    "Сравнительный союз 'as if' (как будто) требует прошедшего времени Past Simple для демонстрации нереальности утверждения."
  ],
  [
    "It was ______ a wonderful day that we stayed out.",
    ["such", "so", "very", "much"],
    0,
    "Use 'such' before a singular countable noun phrase ('such + a/an + adjective + noun') to signify high intensity leading to a result.",
    "Usa el especificador 'such' acompañando a una frase nominal indefinida con adjetivo para graduar la importancia del evento.",
    "Для усиления значения перед существительным с прилагательным в единственном числе употребляется конструкция 'such + a/an'."
  ],
  [
    "I look forward ______ the new gallery.",
    ["to visiting", "to visit", "visiting", "visit"],
    0,
    "The idiomatic phrasal verb 'look forward to' treats 'to' as a preposition, requiring any following verb to be a gerund.",
    "En la frase preestablecida 'look forward to' (esperar con ansias), el elemento 'to' es preposición y exige el uso del gerundio.",
    "В выражении предвкушения 'look forward to' элемент 'to' — предлог, вследствие чего за ним следует герундий с окончанием '-ing'."
  ],
  [
    "______ I understand your point, I still disagree.",
    ["Although", "Despite", "However", "In spite of"],
    0,
    "The conjunction 'Although' is used to connect a subordinate concession clause containing a complete subject and verb.",
    "La conjunción concesiva 'Although' (aunque) se sitúa al inicio para introducir una cláusula subordinada provista de sujeto y verbo.",
    "Союз уступки 'Although' (хотя) применяется для связи контрастирующих смысловых предложений с подлежащим и сказуемым."
  ],
  [
    "Every member must attend the briefing, ______?",
    ["mustn't they", "don't they", "won't they", "shouldn't they"],
    0,
    "In tag questions, singular indefinite pronouns (such as every member or everyone) are represented by the plural pronoun 'they'.",
    "En las preguntas de confirmación (tag questions), sustantivos colectivos neutros de tercera persona se resumen en el plural 'they'.",
    "В разделительных вопросах неопределенные местоимения вроде 'every member' заменяются во внутренней конструкции на 'they'."
  ],
  [
    "The report needs ______ before the deadline.",
    ["to be written", "to write", "writing both", "written"],
    0,
    "To express necessity in the passive voice, use 'need' followed by the passive infinitive 'to be + past participle'.",
    "Para reflejar de forma pasiva una necesidad sobre un documento, se recurre a la estructura infinitiva pasiva 'to be' con participio.",
    "Для выражения пассивной необходимости по отношению к неодушевленному объекту применяется инфинитив 'to be' + причастие."
  ],
  [
    "The customer complained ______ the delayed delivery.",
    ["about", "for", "to", "with"],
    0,
    "The verb 'complain' is paired idiomatic with the preposition 'about' when stating the cause of dissatisfaction.",
    "El régimen gramatical de 'complain' (quejarse) se empareja de modo estándar con 'about' para señalar lo que origina la molestia.",
    "Смысловой глагол 'complain' сочетается с предлогом 'about' при перечислении непосредственных причин возмущения."
  ],
  [
    "They denied ______ the secret document.",
    ["stealing", "to steal", "steal", "having stolen on"],
    0,
    "The transitive verb 'deny' takes a gerund (verb ending in '-ing') as its direct object to report denying an action.",
    "Se requiere un verbo declinado en gerundio tras el verbo principal 'deny' para manifestar la denegación de un supuesto.",
    "Глагол опровержения 'deny' синтаксически требует употребления последующей деятельности в значении герундия."
  ],
  [
    "If they ______ sooner, they would have caught the train.",
    ["had left", "left", "would leave", "have left"],
    0,
    "In the third conditional, the conditional 'if'-clause is conjugated using the past perfect tense ('had + past participle').",
    "Dentro del tercer condicional, la sección condicional introducida por 'if' se conjuga estrictamente en pasado perfecto ('had left').",
    "В условных предложениях третьего типа (Third Conditional) в придаточном предложении с 'if' всегда стоит время Past Perfect."
  ],
  [
    "He managed ______ the fire before anyone was hurt.",
    ["to extinguish", "extinguishing", "extinguish", "extinguishes"],
    0,
    "The verb 'manage' (succeeding in a difficult task) grammatically requires a full 'to'-infinitive complement.",
    "El verbo de logro 'manage' (lograr/gestionar) requiere invariablemente de un infinitivo completo precedido de la partícula 'to'.",
    "Глагол преодоления трудностей 'manage' требует после себя использования смыслового действия в виде инфинитива с 'to'."
  ],
  [
    "She was prevented ______ entering the facility.",
    ["from", "to", "against", "for"],
    0,
    "The verb phrase 'be prevented' is linked to a prohibitive action using the preposition 'from' + gerund (-ing).",
    "La locución pasiva de impedimento 'be prevented' se une al hecho prohibido usando la preposición 'from' seguida de gerundio.",
    "Устойчивая пассивная форма 'be prevented' соединяется с последующим ограничением посредством предлога 'from' и герундия."
  ],
  [
    "Neither of the options ______ acceptable.",
    ["is", "are", "be", "being"],
    0,
    "The pronoun 'Neither' acts as a singular subject, requiring the singular verb form 'is' despite the plural noun 'options'.",
    "El pronombre indefinido distributivo 'Neither' (ninguno de los dos) funciona como sujeto singular y rige el verbo singular 'is'.",
    "Местоимение 'Neither' грамматически выступает в роли единственного числа, требуя после себя глагола 'is' вместо 'are'."
  ],
  [
    "It is important ______ there on time.",
    ["to be", "being", "been", "be"],
    0,
    "After abstract evaluation clauses starting with 'It is + adjective', use a 'to'-infinitive to specify the action.",
    "Posterior a una expresión de valoración abstracta del tipo 'It is + adjetivo', se debe enlazar un infinitivo precedido de 'to'.",
    "После обобщающих оценочных оборотов вроде 'It is important/vital' употребляется инфинитив с частицей 'to' ('to be')."
  ],
  [
    "They will have built the bridge ______ next summer.",
    ["by", "until", "for", "since"],
    0,
    "Use 'by' to set a definite future deadline or date before which an action in the future perfect will complete.",
    "Usa la preposición 'by' en complementos del futuro perfecto para estipular la fecha límite máxima en que se completará la acción.",
    "Предлог 'by' служит для установления фиксированного предела времени (дедлайна), до наступления которого завершится будущее действие."
  ],
  [
    "His explanation was ______ confusing.",
    ["extremely", "extreme", "extremeness", "more extreme"],
    0,
    "Adjectives like 'confusing' are grammatically modified using an adverb of degree such as 'extremely'.",
    "Los adjetivos como 'confusing' se intensifican sintácticamente anteponiendo un adverbio de grado regular terminado en '-ly'.",
    "Для качественного усиления признака, выраженного прилагательным 'confusing', перед ним ставится наречие степени 'extremely'."
  ],
  [
    "The project is ______ completed.",
    ["almost", "already", "just", "yet"],
    0,
    "The adverb 'almost' indicates a state of near completion, modifying the passive participle 'completed'.",
    "El adverbio de aproximación 'almost' (casi) califica un estado de conclusión inminente en combinación con 'completed'.",
    "Наречие 'almost' (почти) используется для демонстрации очень близкого к финальной точке незавершенного состояния."
  ],
  [
    "Which course do you think I should ______?",
    ["take", "do", "make", "pass"],
    0,
    "The correct lexical collocation in English for participating in a structured class is 'to take a course'.",
    "La colocación léxica de vocabulario natural para matricularse y realizar una capacitación es 'to take a course'.",
    "Устойчивое лексическое сочетание в английском языке для обозначения обучения на учебных курсах — 'to take a course'."
  ],
  [
    "She spent three hours ______ her reading.",
    ["finishing", "to finish", "in finishing", "finish"],
    0,
    "The verb pattern 'spend time' requires any following action representing the activity to be conjugated as a gerund.",
    "La estructura temporal 'spend + tiempo' demanda que la actividad realizada se decline directamente en gerundio en '-ing'.",
    "После устойчивого оборота затраты ресурсов 'spend time' глагол-продолжение ставится в форму герундия с окончанием '-ing'."
  ],
  [
    "They promised ______ me a call when they arrived.",
    ["to give", "giving", "give", "given"],
    0,
    "Verbs of future commitment like 'promise' require a full infinitive with the particle 'to' as their grammatical object.",
    "Los verbos que implican compromisos a futuro como 'promise' exigen enlazarse con un infinitivo con to ('to give').",
    "Глаголы изъявления намерений и обещаний наподобие 'promise' грамматически требуют после себя инфинитива с 'to'."
  ],
  [
    "I don't mind ______ for a few minutes.",
    ["waiting", "to wait", "wait", "waited"],
    0,
    "The idiomatic verb 'mind' in negative statements requires a gerund ('-ing' form) to express objection or acceptance.",
    "El verbo 'mind' (importar/molestar) en oraciones negativas rige inequívocamente la imposición de un verbo en gerundio.",
    "Выражение невозражения 'don't mind' требует после себя использования последующего действия исключительно в качестве герундия."
  ],
  [
    "The house ______ roof was damaged is being repaired.",
    ["whose", "which", "that", "where"],
    0,
    "The possessive relative pronoun 'whose' designates ownership, showing that the damaged roof belongs to the house.",
    "Se elige el pronombre relativo 'whose' (cuyo/cuya) para referirse por posesión a un elemento inanimado antecedente (the house).",
    "Относительное местоимение 'whose' используется для придания характера притяжательности как одушевленным, так и неодушевленным вещам."
  ],
  [
    "We might go for a picnic, depending ______ the weather.",
    ["on", "of", "to", "at"],
    0,
    "The participle adjective 'depending' forms an idiomatic prepositional phrase using the fixed partner 'on'.",
    "La locución preposicional de condición 'depending' se construye forzosamente en conjunto con la preposición 'on'.",
    "Устойчивое словосочетание зависимости 'depending' требует обязательного применения последующего предлога 'on'."
  ],
  [
    "She was too tired ______ any further.",
    ["to walk", "walking", "walk", "for walking"],
    0,
    "The structure 'too + adjective' is paired with a 'to'-infinitive to show that an excess prevents an action from happening.",
    "La estructura restrictiva 'too + adjetivo' se asocia a un infinitivo con 'to' para indicar que un exceso imposibilita la acción.",
    "Переизбыток свойства по формуле 'too + прилагательное' требует смыслового инфинитива с 'to', отменяющего выполнимость действия."
  ]
];

const b2Raw: [string, string[], number, string, string, string][] = [
  [
    "This is the formula ______ key variables can be calibrated.",
    ["whereby", "to which", "of whom", "in which"],
    0,
    "The relative adverb 'whereby' is a formal term meaning 'by which' or 'through which', describing the method used to achieve a result.",
    "El adverbio relativo formal 'whereby' (por el cual / mediante el cual) especifica el método preciso por el que se produce un efecto.",
    "Относительное наречие высокого стиля 'whereby' (посредством которого) описывает метод или инструмент достижения цели."
  ],
  [
    "If only we ______ in that room last night!",
    ["had slept", "would have slept", "slept", "would sleep"],
    0,
    "Use 'If only + past perfect' (had slept) to express deep regret or desire for a different outcome of a past historical situation.",
    "La fórmula de lamento 'If only' (si tan solo si) rige pasado perfecto para manifestar tristeza o arrepentimiento por hechos pasados.",
    "Конструкция сожаления 'If only' требует употребления времени Past Perfect для выражения сильного сожаления о прошедшем."
  ],
  [
    "The committee congratulated the researchers ______ their findings.",
    ["on", "with", "in", "about"],
    0,
    "The verb 'congratulate' has a strict prepositional requirement of 'on' before introducing the reason or milestone of celebration.",
    "El verbo transitivo 'congratulate' (felicitar) rige de manera obligatoria la preposición 'on' antes del motivo de la felicitación.",
    "Глагол 'congratulate' требует после себя использования фиксированного предлога 'on' перед упоминанием повода для поздравления."
  ],
  [
    "They locked the archive door ______ any documents be misplaced.",
    ["lest", "unless", "fearing", "so that"],
    0,
    "The conjunction 'lest' means 'for fear that' or 'to prevent any risk that', and is paired with a subjunctive verb (be) or auxiliary 'should'.",
    "La conjunción formal 'lest' (para evitar que / no sea que) introduce un propósito de prevención, rigiendo verbo en subjuntivo.",
    "Союз предостережения 'lest' (чтобы не, дабы избежать) вводит примыкающее предложение со значением цели и сослагательным наклонением."
  ],
  [
    "The general designer, ______ blueprints were approved, was promoted.",
    ["whose", "whom", "who", "which"],
    0,
    "The possessive relative pronoun 'whose' is used to connect people (general designer) to objects that belong to them (blueprints).",
    "Utilizamos el pronombre relativo 'whose' (cuyos/cuyas) para trazar una pertenencia de diseño asociada al sujeto original.",
    "Притяжательное относительное местоимение 'whose' (чей) выражает принадлежность неодушевленного предмета одушевленному лицу."
  ],
  [
    "She ______ have left already, but we're not totally sure.",
    ["might", "could", "must", "should"],
    0,
    "Use 'might have + past participle' to state a weak, speculative speculation regarding a past possibility without certainty.",
    "Empleamos 'might have' para conjeturar una posibilidad remota del pasado sobre la cual no se posee certeza demostrable.",
    "Модальный перфект 'might have' выражает слабую, неуверенную догадку о совершении действия в прошлом."
  ],
  [
    "The global carbon volume ______ to rise by 12% next season.",
    ["is estimated", "estimates", "has estimated", "is estimating"],
    0,
    "The passive reporting formula 'is estimated + to-infinitive' is used to convey calculated forecasts from objective sources.",
    "La voz pasiva de reporte técnico 'is estimated' (se estima) se utiliza para citar previsiones de carácter general o científico.",
    "Пассивный оборот 'is estimated' представляет собой классическую формулу объективного прогнозирования от третьих лиц."
  ],
  [
    "He praised the team after ______ their records.",
    ["having studied", "to study", "study", "studied"],
    0,
    "After temporal prepositions like 'after', use the perfect gerund (having studied) to establish that an action completed prior to the praise.",
    "Tras una preposición temporal se emplea el gerundio perfecto 'having studied' para denotar prioridad cronológica del hecho.",
    "После предлогов времени (например, 'after') используется перфектный герундий для демонстрации предшествования действия."
  ],
  [
    "Hardly ______ entered the room when the alarm went off.",
    ["had the director", "the director had", "did the director", "has the director"],
    0,
    "Beginning a sentence with the negative adverb 'Hardly' requires standard subject-auxiliary inversion in the past perfect (had the director).",
    "Dar inicio a la oración con el adverbio restrictivo 'Hardly' (apenas) rige obligatoriamente la inversión del sujeto y el auxiliar.",
    "Начало предложения с отрицательного наречия 'Hardly' требует обязательной инверсии подлежащего и вспомогательного глагола в Past Perfect."
  ],
  [
    "It is vital that all managers ______ present.",
    ["be", "are", "were", "been"],
    0,
    "Subordinating adjectives like 'vital', 'important', or 'essential' trigger the present subjunctive mood, using the root form 'be'.",
    "Los adjetivos de importancia capital como 'vital' demandan una subordinada en subjuntivo, empleando la forma básica 'be'.",
    "Оценочные прилагательные важности (например, 'vital') требуют после себя сослагательного наклонения в форме инфинитива без 'to' ('be')."
  ],
  [
    "By tomorrow night, we ______ have finalized it.",
    ["will", "would", "shall", "having"],
    0,
    "The future perfect tense requires 'will have + past participle' to project the completion of an action before a future deadline.",
    "El tiempo futuro perfecto asocia el auxiliar modal 'will' con 'have' para proyectar la culminación del evento antes de un límite.",
    "Время Future Perfect ('will have' + причастие прошедшего времени) выражает уверенное завершение действия к моменту в будущем."
  ],
  [
    "Under no circumstances ______ you accept cash.",
    ["should", "you should", "must you to", "ought you"],
    0,
    "Negative phrases like 'Under no circumstances' placed at the start of a clause trigger subject-auxiliary inversion (should you).",
    "La expresión inhibitoria inicial 'Under no circumstances' fuerza la inversión del verbo auxiliar modal con el pronombre de sujeto.",
    "Отрицательное выражение 'Under no circumstances' в начале предложения вызывает обязательную инверсию глагола и подлежащего."
  ],
  [
    "Never ______ seen such a stellar performance before.",
    ["have I", "I have", "had I been", "I will"],
    0,
    "The negative adverb 'Never' placed at the beginning of a clause triggers subject-auxiliary inversion (have I).",
    "El adverbio negativo inicial 'Never' exige sistemáticamente invertir el orden normal del pronombre e instituir 'have I'.",
    "Отрицательное наречие 'Never' при вынесении в начало предложения по правилам грамматики требует инверсии ('have I')."
  ],
  [
    "The research team ______ working on vaccine for years.",
    ["has been", "have had", "is being", "was been"],
    0,
    "The present perfect continuous is structured as 'has been working' to describe a continuous action spanning a duration up to now.",
    "El presente perfecto continuo se conjuga con 'has been' para documentar un proceso de investigación iniciado en el pasado y vigente.",
    "Время Present Perfect Continuous ('has been working') описывает длительное действие, длящееся определенный период вплоть до настоящего."
  ],
  [
    "It is high time we ______ taking study seriously.",
    ["started", "start", "should start", "will start"],
    0,
    "The subjunctive construction 'It is high time' requires the past simple form (started) to signal an action that is long overdue.",
    "La frase condicional de reproche 'It is high time' impone obligatoriamente un pasado simple con valor coercitivo en presente.",
    "Устойчивая конструкция 'It is high time' выражает опоздание действия и требует после себя сослагательного Past Simple."
  ],
  [
    "I object ______ treated like a child.",
    ["to being", "to be", "being", "for being"],
    0,
    "The phrasal verb 'object' requires the preposition 'to' followed directly by a gerund (-ing) for any subsequent action.",
    "El verbo de oposición 'object' exige la preposición obligatoria 'to' seguida de gerundio en pasiva ('to being').",
    "Глагол возражения 'object' управляется предлогом 'to', после которого следующая деятельность ставится в форму герундия."
  ],
  [
    "We look forward to ______ the financial audit next month.",
    ["conducting", "conduct", "to conduct", "conducted"],
    0,
    "In the phrasal verb 'look forward to', the particle 'to' serves as a preposition, which mandates a gerund (conducting).",
    "En la expresión preestablecida 'look forward to' (esperar con ansia), 'to' es preposición y exige que el verbo vaya en '-ing'.",
    "Фразовый глагол 'look forward to' включает в себя 'to' как предлог направления, за которым обязательно следует герундий."
  ],
  [
    "Only when you review metrics ______ see the flaws.",
    ["will you", "you will", "did you", "you can"],
    0,
    "When a sentence begins with 'Only when...', the main clause undergoes subject-auxiliary inversion (will you).",
    "El uso de la estructura restrictiva inicial 'Only when...' obliga a aplicar inversión sujeto-auxiliar en el bloque de resultado.",
    "Ограничительное наречное выражение 'Only when...' в начале предложения вызывает инверсию в последующей главной части."
  ],
  [
    "The suspect admitted ______ the confidential files.",
    ["having shared", "to share", "share", "having shared of"],
    0,
    "The verb 'admit' can take a perfect gerund (having shared) to reference and acknowledge a complete past action.",
    "Muchos verbos de declaración como 'admit' asocian un gerundio perfecto para evidenciar la realización de un acto anterior.",
    "Глагол признания 'admit' грамматически может управляться перфектным герундием для подчеркивания свершившегося факта."
  ],
  [
    "She succeeded ______ registering for the elite course.",
    ["in", "to", "at", "for"],
    0,
    "The verb 'succeed' takes the fixed preposition 'in', which is then followed by a gerund ending in '-ing'.",
    "El verbo de superación 'succeed' rige formalmente la preposición de ámbito 'in' antes de la colocación de un gerundio.",
    "Глагол достижения 'succeed' требует предлога 'in', после которого употребляется сопутствующий герундий."
  ],
  [
    "They recommended that he ______ the design audit.",
    ["undertake", "undertakes", "undertook", "should have undertaken"],
    0,
    "Verbs of recommendation like 'recommend' trigger the subjunctive mood in the 'that'-clause, requiring the base verb 'undertake'.",
    "Los verbos de recomendación como 'recommend' rigen el modo subjuntivo normativo, descartando añadir '-s' en tercera persona.",
    "Глаголы пожелания и рекомендации вроде 'recommend' вызывают сослагательное наклонение (Subjunctive) с базовой формой глагола."
  ],
  [
    "I had no sooner sat down ______ the doorbell rang.",
    ["than", "when", "then", "until"],
    0,
    "The correlative conjunction 'no sooner' is paired with 'than' to indicate that one event occurred immediately after another.",
    "La locución correlativa temporal 'no sooner' se empareja de modo estándar con 'than' para señalar inmediatez extrema.",
    "Отрицательное наречное выражение 'no sooner' (не успел я) вступает в классическую парную корреляцию с союзом 'than' (как)."
  ],
  [
    "The manager had the engine ______ by a mechanic.",
    ["repaired", "repair", "to repair", "repairing"],
    0,
    "The causational structure 'have + object + past participle' describes arranging for an action to be performed by someone else.",
    "La construcción causativa de orden 'have + objeto + participio' indica que delegamos en un especialista completar una tarea.",
    "Каузативная конструкция управления 'have + объект + причастие прошедшего времени' означает делегирование работы специалисту."
  ],
  [
    "Were we ______ the budget, the project would fail.",
    ["to cut", "cut", "cutting", "having cut"],
    0,
    "The inverted second conditional structures of hypothesis use the subjunctive format 'Were we to + verb'.",
    "La inversión hipotética formal del segundo condicional se construye con la fórmula condicional invertida 'Were we to'.",
    "Инверсия второго типа условных предложений для вежливой гипотезы строится по вспомогательной схеме 'Were we to + глагол'."
  ],
  [
    "The report left questions. ______ , it was useful.",
    ["Nevertheless", "Furthermore", "Thus", "In contrast"],
    0,
    "The transition adverb 'Nevertheless' indicates concession or contrast, meaning 'in spite of that' or 'however'.",
    "El conector de contraste 'Nevertheless' (no obstante) sirve para ponderar una mitigación o tolerancia lógica ante un hecho negativo.",
    "Переходное наречие уступки 'Nevertheless' (тем не менее) служит для введения контрастирующей, но полезной информации."
  ],
  [
    "I have difficulty ______ these equations.",
    ["solving", "to solve", "of solving", "to solving"],
    0,
    "The common expression 'have difficulty' requires a gerund companion (verb ending in '-ing') to complete its meaning.",
    "La expresión consagrada 'have difficulty' exige el uso directo de un gerundio en la actividad que presenta complejidad.",
    "Устоявшееся словосочетание затруднения 'have difficulty' требует герундиального продолжения со смысловым глаголом."
  ],
  [
    "The corporate software is ______ with critical errors.",
    ["rife", "fraught", "filled", "bound"],
    0,
    "The adjective 'rife' pairs with the preposition 'with' to describe something that is widespread, abundant or filled with negative items.",
    "El adjetivo predilecto 'rife' se asocia con 'with' para aducir que una circunstancia negativa está ampliamente extendida.",
    "Прилагательное 'rife' управляется предлогом 'with' и означает повсеместную распространенность нежелательных явлений."
  ],
  [
    "Little ______ realize that the server was under attack.",
    ["did they", "they did", "have they", "they had"],
    0,
    "Placing the restrictive adverb 'Little' at the start of a clause triggers subject-auxiliary inversion (did they).",
    "El uso del término limitador 'Little' al frente de la frase provoca obligatoriamente la inversión auxiliar simple 'did they'.",
    "Вынесение наречия преуменьшения 'Little' в начало фразы вызывает инверсию вспомогательного глагола прошедшего времени 'did'."
  ],
  [
    "He insisted ______ seeing the original receipts.",
    ["on", "to", "in", "about"],
    0,
    "The verb 'insist' requires the fixed preposition 'on', which then dictates a gerund for any subsequent verb actions.",
    "El régimen gramatical del verbo 'insist' (insistir) demanda la preposición 'on' antes de acomodar un gerundio.",
    "Глагол настоятельного требования 'insist' обязательно сочетается с предлогом 'on' перед следующими за ним действиями."
  ],
  [
    "The suspect denied ______ any fraud.",
    ["having", "to have", "have", "had"],
    0,
    "The verb 'deny' takes a direct gerund companion to refer to and deny participation in a past action.",
    "El verbo 'deny' (negar) se construye de modo usual con un gerundio simple en '-ing' para evadir implicaciones delictivas.",
    "Глагол 'deny' (отрицать) грамматически согласуется с герундием в качестве прямого существительного объекта."
  ],
  [
    "We would appreciate your ______ us soon.",
    ["notifying", "notify", "to notify", "notified"],
    0,
    "A possessive adjective (such as 'your') is formally used before a gerund to specify who performs the action.",
    "En la gramática formal, se coloca un adjetivo posesivo ('your') antes de un gerundio para definir la autoría de un hecho.",
    "В строгом литературном стиле перед герундием используется притяжательное местоимение для указания исполнителя действия."
  ],
  [
    "My expansion is ______ upon venture capital.",
    ["contingent", "relying", "depended", "dependent"],
    0,
    "The expression 'contingent upon' is an academic way of saying dependent on, specifying external parameters.",
    "La locución adjetivada 'contingent upon' (supeditado a / contingente de) señala una dependencia inexorable de condiciones.",
    "Формальное выражение зависимости 'contingent upon' означает прямую обусловленность какими-либо внешними условиями."
  ],
  [
    "______ that they supply data, the visa is issued.",
    ["Provided", "Unless", "As long so", "But for"],
    0,
    "The conditional conjunction 'Provided' (or 'Provided that') is used to express that an outcome depends entirely on a condition.",
    "El conector condicional positivo 'Provided' (siempre que / condicionado a) introduce un requisito afirmativo y excluyente.",
    "Условный союз 'Provided' (при условии, что) вводит рамки строгого, но достаточного требования для свершения действия."
  ],
  [
    "The lecture was so structured ______ to leave no questioning.",
    ["as", "that", "so", "than"],
    0,
    "The pattern 'so + adjective + as + to-infinitive' is used to express a planned or inevitable degree of result.",
    "La ecuación idiomática 'so + adjetivo + as + infinitivo con to' sirve para recalcar un grado calibrado de forma deliberada.",
    "Конструкция 'so + прилагательное + as + инфинитив' служит для констатации выверенной степени следствия."
  ],
  [
    "She had no intention ______ accepting default resolutions.",
    ["of", "to", "for", "against"],
    0,
    "The noun 'intention' takes the preposition 'of' followed by a gerund to describe what actions are intended.",
    "El sustantivo de propósito 'intention' rige la preposición específica 'of' vinculada a un gerundio en '-ing'.",
    "Существительное 'intention' (намерение) требует за собой предлога 'of' и глагола в форме герундия с окончанием '-ing'."
  ],
  [
    "They were accused ______ replicating designs.",
    ["of", "for", "by", "with"],
    0,
    "The passive formulation 'be accused' requires the fixed preposition 'of' before stating the offense.",
    "La frase descriptiva de culpa penal 'be accused' exige acoplar la preposición 'of' previa a enunciar los cargos.",
    "Обвинение в пассивной форме требует предлога 'of' перед классификацией проступка по уставу управления глаголов."
  ],
  [
    "No sooner ______ we arrived than it began.",
    ["had", "were", "have", "would"],
    0,
    "The correlative conjunction 'No sooner' triggers past perfect inversion (had + subject) and is completed by 'than'.",
    "La locución correlativa 'No sooner' exige una inversión con 'had' en el pasado perfecto para reflejar concomitancia temporal.",
    "Оборот 'No sooner' (не успели мы) вызывает инверсию прошедшего времени по формуле вспомогательного глагола 'had'."
  ],
  [
    "The findings are ______ associated with performance.",
    ["closely", "close", "closer", "closest"],
    0,
    "Use the adverb 'closely' to modify passive participles like 'associated' to indicate a strong and intimate correlation.",
    "Usamos el adverbio calibrador 'closely' (estrechamente) para ponderar el nivel de conexión del participio de relación.",
    "Наречие 'closely' (тесно, тесно связанный) применяется для модификации причастия связи в высоком научном стиле."
  ],
  [
    "I absolutely refuse to be ______ under these terms.",
    ["treated", "treat", "treating", "treatment"],
    0,
    "In the passive form, the verb 'be' after 'refuse to be' must be followed by a past participle (treated).",
    "Tras la declaración voluntaria pasiva 'refuse to be', se impone colocar un verbo conjugado en participio pasivo.",
    "В пассивной рамке после волеизъявления 'refuse to be' смысловой глагол ставится в форму пассивного причастия прошедшего времени."
  ],
  [
    "Where did they find this template ______?",
    ["originally", "original", "origin", "originally of"],
    0,
    "We require the adverb of origin 'originally' to modify the past action verb 'did find'.",
    "Se requiere el adverbio temporal descriptivo 'originally' para calificar el génesis de la acción expresada por 'did find'.",
    "Нам необходимо наречие 'originally' (первоначально, изначально) для уточнения обстоятельств совершенного действия."
  ],
  [
    "Your foundation is ______ than before.",
    ["better", "good", "best", "more good"],
    0,
    "The comparative degree of the irregular adjective 'good' is 'better', which is used to compare a present and past state.",
    "El grado de comparación superior para el adjetivo irregular 'good' es la forma irregular 'better' (mejor).",
    "Для сопоставления качеств в сравнительной степени используется неправильная форма прилагательного 'good' — 'better'."
  ],
  [
    "They decided ______ to proceed.",
    ["not", "no", "don't", "to not"],
    0,
    "To negate an infinitive in formal English, place the negative particle 'not' directly before the 'to'-infinitive ('not to proceed').",
    "Para negar de forma correcta e institucional un infinitivo en inglés, la partícula 'not' precede directamente al nexo 'to'.",
    "Грамматическое отрицание инфинитива в английском языке строится путем постановки частицы 'not' перед элементом 'to'."
  ],
  [
    "I need to check a ______ files.",
    ["few", "little", "much", "any"],
    0,
    "Use the quantifier phrase 'a few' with plural countable nouns like 'files' to represent a small positive quantity.",
    "Se elige la locución contable 'a few' (unos pocos) al estar modulando un sustantivo contable en plural ('files').",
    "Конструкция 'a few' употребляется для выражения небольшого положительного объема исключительно перед исчисляемыми объектами."
  ]
];

const c1Raw: [string, string[], number, string, string, string][] = [
  [
    "They filed blueprints in vaults ______ be stolen by rivals.",
    ["lest they should", "so that they can", "because they would", "for fear of"],
    0,
    "The formal conjunction 'lest' introduces a negative purpose meaning 'to prevent' or 'for fear that'. It is paired with the subjunctive base form or with 'should' (lest they should).",
    "La conjunción adversativa formal 'lest' expresa el propósito negativo de prevenir un percance, rigiendo la estructura con el auxiliar 'should' o el verbo base en subjuntivo.",
    "Союз 'lest' (чтобы не) выражает нежелательную цель в официальном стиле и употребляется со вспомогательным глаголом 'should' или глаголом в форме сослагательного наклонения."
  ],
  [
    "The policy was drafted ______ the assumption that prices are stable.",
    ["under", "by", "on", "with"],
    2,
    "The standard academic collocation is 'on the assumption that', which serves as a prepositional phrase meaning taking something for granted as premises.",
    "El sintagma preposicional normativo e idiomático es 'on the assumption that' (bajo el supuesto de que / asumiendo que), descartando otras preposiciones.",
    "Стандартный академический предложный оборот — 'on the assumption that' (исходя из предположения, что), где существительное 'assumption' требует предлога 'on'."
  ],
  [
    "There are no grounds ______ to validate these theories.",
    ["whatsoever", "whereby", "whose", "whomever"],
    0,
    "The postpositive emphatic adverb 'whatsoever' is placed after a negative noun phrase (no grounds) to add strong emphasis, equivalent to 'at all'.",
    "El adverbio enfático pospositivo 'whatsoever' se coloca directamente tras un sustantivo afectado por una negación para intensificar el rechazo intelectual.",
    "Эмфатическое наречие 'whatsoever' (абсолютно никаких) помещается после отрицательного существительного для максимального усиления отрицания."
  ],
  [
    "______ did they lose funding, they also faced lawsuits.",
    ["Not only", "No sooner", "Hardly", "Scarcely"],
    0,
    "When the correlative limiting phrase 'Not only' begins a sentence, it triggers mandatory subject-auxiliary inversion in the first clause, paired later with 'but also'.",
    "La estructura correlativa de adición 'Not only' colocada al principio de la oración exige aplicar la inversión del sujeto y el auxiliar (did they lose).",
    "Отрицательный союз накопления 'Not only', будучи вынесенным на первое место в предложении, вызывает обязательную инверсию глагола."
  ],
  [
    "The committee, ______ audit, published instructions.",
    ["having completed", "to complete", "complete", "completed"],
    0,
    "A perfect active participle clause (having completed) is used to show that the action of completing the audit was fully achieved before publishing instructions.",
    "La cláusula reducida de participio perfecto 'having completed' se prefiere para indicar de manera inequívoca que la acción previa se consumó totalmente.",
    "Оборот с перфектным активным причастием 'having completed' указывает на то, что действие завершилось непосредственно перед главным событием."
  ],
  [
    "We accept ______ applicant proves to be persistent.",
    ["whichever", "whosoever", "whomever", "wherever"],
    1,
    "The relative pronoun 'whosoever' is a highly formal version of 'whoever' acting as the subject of the clause (proves to be persistent).",
    "El pronombre relativo nominativo formal 'whosoever' (quienquiera que) sirve como sujeto activo de la oración subordinada condicional.",
    "Устаревшее и официальное местоимение 'whosoever' (кто бы ни) функционирует как подлежащее в придаточном предложении."
  ],
  [
    "She chose to rewrite the draft ______ submitting it.",
    ["rather than", "instead of", "not", "except"],
    0,
    "The subordinating phrase 'rather than' is used to express a rational or deliberate preference, followed here by a gerund or a bare infinitive.",
    "La locución coordinativa de contraste preferente 'rather than' (más bien que / antes que) ilustra una opción elegida deliberadamente.",
    "Конструкция сравнения и предпочтения 'rather than' (а не, вместо того чтобы) указывает на осознанный выбор альтернативы."
  ],
  [
    "You must supply records; ______ marks are voided.",
    ["otherwise", "conversely", "meanwhile", "nonetheless"],
    0,
    "The transitional adverb 'otherwise' introduces the negative consequence or penalty that will result if the preceding condition is not met.",
    "El adverbio conjuntivo 'otherwise' (de lo contrario / si no) introduce la sanción o perjuicio directo que acarreará omitir la premisa anterior.",
    "Соединительное наречие 'otherwise' (иначе, в противном случае) указывает на неблагоприятные последствия невыполнения условия."
  ],
  [
    "Hardly ______ entered the chamber when voting commenced.",
    ["had the speaker", "the speaker had", "did the speaker", "has the speaker"],
    0,
    "Placing 'Hardly' at the start of a sentence triggers past perfect inversion (had + subject) and requires the correlative conjunction 'when' in the next clause.",
    "El adverbio temporal restrictivo 'Hardly' (apenas) al inicio obliga a invertir el orden del auxiliar en pasado perfecto ('had the speaker').",
    "Наречие 'Hardly' (едва) в начале предложения по правилам академического синтаксиса требует инверсии подлежащего и Past Perfect."
  ],
  [
    "It is of paramount importance that protocol ______ observed.",
    ["be", "is", "were", "been"],
    0,
    "The mandatory subclause adjective phrase 'of paramount importance that' triggers the present subjunctive mood, requiring the root form of the verb (be).",
    "La locución adjetivada de exigencia 'of paramount importance that' rige formalmente el modo subjuntivo, demandando la forma base 'be' del verbo.",
    "Конструкция высшей важности 'of paramount importance that' требует употребления сослагательного наклонения в базовой форме глагола 'be'."
  ],
  [
    "The director behaved ______ he owned the enterprise.",
    ["as though", "as like", "similar to", "whereas"],
    0,
    "The conjunction 'as though' is used to introduce an imaginary or hypothetical scenario that acts as a comparison, triggering the past subjunctive.",
    "La conjunción comparativa modal 'as though' (como si) se utiliza para construir analogías hipotéticas de índole especulativa.",
    "Союз 'as though' (как будто) вводит гипотетическое сравнение, требующее за собой сослагательного наклонения прошедшего времени."
  ],
  [
    "Only by dedicating hours ______ achieve a perfect score.",
    ["will you", "you will", "did you", "you would"],
    0,
    "The restrictive initial prepositional clause 'Only by + gerund' triggers mandatory subject-auxiliary inversion in the main predicate (will you).",
    "La expresión limitadora inicial 'Only by...' (solo mediante) altera el orden habitual de la frase principal, forzando la inversión 'will you'.",
    "Ограничительный оборот 'Only by...' (только посредством) в начале фразы вызывает инверсию подлежащего и модального глагола."
  ],
  [
    "Never ______ seen such high levels of lexical diversity.",
    ["have I", "I have", "had I been", "I did"],
    0,
    "The introductory frequency adverb 'Never' requires a inverted subject-auxiliary order (have I) to emphasize the uniqueness of the event.",
    "El adverbio negativo inicial 'Never' exige con rigor académico colocar el verbo auxiliar antes del pronombre ('have I').",
    "Отрицательное наречие 'Never' при вынесении в абсолютное начало предложения влечет за собой инверсию вспомогательного глагола."
  ],
  [
    "The body ______ deliberating on terms for months.",
    ["has been", "is being", "was been", "has had"],
    0,
    "The present perfect continuous form 'has been deliberating' is required to document a continuous activity spanning a duration that reaches the present.",
    "El presente perfecto continuo se conjuga mediante 'has been' para referirse a un debate corporativo que continúa vigente hasta ahora.",
    "Здесь используется время Present Perfect Continuous ('has been deliberating') для описания действия, продолжающегося до речевого момента."
  ],
  [
    "It is high time community ______ on climate issues.",
    ["acted", "act", "should act", "will act"],
    0,
    "The fixed advisory construction 'It is high time' triggers the unreal past subjunctive (acted) to convey that the action is overdue.",
    "La fórmula crítica 'It is high time' (ya es hora de que) rige de forma exclusiva un pasado simple con sentido coercitivo sobre el presente.",
    "Грамматическая модель 'It is high time' выражает упрек в задержке и строго требует сослагательного наклонения во времени Simple Past."
  ],
  [
    "Many scientists strongly object ______ treated as collectors.",
    ["to being", "to be", "being", "for being"],
    0,
    "The intransitive verb 'object' requires the preposition 'to' followed by a gerund. In the passive context of this sentence, 'to being' is used.",
    "El verbo intransitivo de rechazo 'object' requiere la preposición 'to' acoplada de forma indisoluble a la versión pasiva del gerundio.",
    "Предосудительный глагол 'object' сочетается с предлогом 'to', за которым следует пассивный герундий 'being' + причастие."
  ],
  [
    "We look forward ______ your comprehensive thesis.",
    ["to receiving", "to receive", "receive", "receiving"],
    0,
    "In the idiomatic expression 'look forward to', 'to' acts as a preposition, necessitating a gerund ending in '-ing' (to receiving).",
    "Dentro del modismo formal 'look forward to', el término 'to' es preposición formal y obliga al uso de un gerundio subordinado.",
    "В идиоматическом выражении 'look forward to' частица 'to' играет роль предлога, поэтому за ней должен следовать герундий."
  ],
  [
    "Only after months of tests ______ identify system flaws.",
    ["did they", "they did", "have they", "they had"],
    0,
    "Starting a sentence with the restrictive adverbial phrase 'Only after...' mandates inversion of the subject and the auxiliary verb (did they).",
    "Al encabezar el enunciado con la frase limitante 'Only after...', se activa por regla la inversión del sujeto y el auxiliar past simple.",
    "Вынесение фразы ограничения 'Only after...' на передний план требует обязательной инверсии вспомогательного глагола в главной части."
  ],
  [
    "The CEO admitted ______ proprietary customer data.",
    ["having shared", "to share", "share", "having shared of"],
    0,
    "Verbs expressing confession like 'admit' optionally take a perfect gerund (having shared) to emphasize that the act was completed prior to admitting.",
    "El verbo declarativo de asunción 'admit' admite de forma natural el gerundio perfecto para catalogar un hecho de origen anterior.",
    "Глагол 'admit' (признавать) в качестве объектного дополнения требует перфектного герундия для четкой ссылки на прошлое."
  ],
  [
    "She succeeded ______ securing contested fellowship.",
    ["in", "to", "at", "for"],
    0,
    "The prepositional verb 'succeed' takes the invariant preposition 'in' to specify the domain of success, followed by the gerund.",
    "El verbo de logro 'succeed' exige de manera excluyente el uso de la preposición 'in' ante la acción que se cumplimentó.",
    "Глагол успешного выполнения 'succeed' управляется предлогом 'in', за которым обязательно употребляется герундий."
  ],
  [
    "They recommended that the committee ______ parameters.",
    ["adopt", "adopts", "adopted", "should have adopted"],
    0,
    "The mandative verb 'recommend' triggers a subjunctive 'that'-subclause where any action must use the base form of the verb (adopt).",
    "El verbo de iniciativa 'recommend' rige el modo subjuntivo normativo, bloqueando modificaciones gramaticales de concordancia singular.",
    "Глагол директивного характера 'recommend' вводит придаточное предложение сослагательного наклонения с использованием инфинитива без 'to'."
  ],
  [
    "No sooner was the blueprint uploaded ______ critiques began.",
    ["than", "when", "then", "until"],
    0,
    "The correlative negative comparative adverb 'No sooner' works in tandem with the comparative conjunction 'than' to connect the immediate subsequent event.",
    "La estructura temporal de inmediatez 'No sooner' exige ser complementada en la segunda cláusula por la conjunción 'than'.",
    "Отрицательное наречие коррелятивного сопоставления 'No sooner' образует устойчивый синтаксический тандем с союзом 'than'."
  ],
  [
    "The director had the hall ______ with safety nets.",
    ["reinforced", "reinforce", "to reinforce", "reinforcing"],
    0,
    "The passive causative structure 'have + object + past participle' describes arranging for something to be carried out (reinforced).",
    "La fórmula causativa pasiva 'had the hall reinforced' denota que se ordenó y financió la mejora a través de un tercero contratado.",
    "Каузативный оборот пассивного залога 'have + объект + причастие прошедшего времени' употребляется для обозначения выполненной услуги."
  ],
  [
    "Were we ______ structural design, the arch would collapse.",
    ["to alter", "alter", "altering", "having altered"],
    0,
    "An inverted non-assertive conditional clause expressing hypothetical future actions is structured with 'Were + subject + to-infinitive'.",
    "La inversión elegante de segundo condicional para supuestos altamente hipotéticos se erige con la construcción clásica 'Were we to alter'.",
    "Пафосная предикативная инверсия второго типа условных предложений для гипотез будущего времени оформляется формулой 'Were we to + глагол'."
  ],
  [
    "The report was highly analytical. ______ , it had minor errors.",
    ["Nonetheless", "Furthermore", "Thus", "In contrast"],
    0,
    "The transition adverb 'Nonetheless' indicates concession and contrast, indicating that the second statement qualifies the first.",
    "El conector discursivo de matiz adversativo 'Nonetheless' (no obstante / sin embargo) se emplea para contrarrestar de forma formal.",
    "Противопоставительное наречие уступки 'Nonetheless' (тем не менее) соединяет полярные по смыслу суждения на академическом уровне."
  ],
  [
    "I have great difficulty ______ complex acoustic patterns.",
    ["deciphering", "to decipher", "of deciphering", "to deciphering"],
    0,
    "The formula 'have difficulty' (or 'have trouble') is followed by a gerund ending in '-ing' without an intervening preposition.",
    "La colocación de complicación activa 'have difficulty' rige directamente un gerundio de acción en gerundio simple sin preposiciones.",
    "Идиоматическое устойчивое выражение 'have difficulty' требует непосредственного примыкания герундия без промежуточных предлогов."
  ],
  [
    "The software is ______ with critical security loopholes.",
    ["rife", "fraught", "filled", "bound"],
    0,
    "The adjective 'rife' means widespread or filled to abundance with something negative, and it has a strict prepositional companion 'with'.",
    "El adjetivo de propagación nociva 'rife' exige acoplarse con la preposición 'with' para reflejar abundancia de fallos.",
    "Прилагательное негативного широкого изобилия 'rife' грамматически сочетается с фиксированным предлогом 'with'."
  ],
  [
    "Little ______ suspect that metrics had been altered.",
    ["did we", "we did", "have we", "we had"],
    0,
    "The limiting initial adverb 'Little' triggers subject-auxiliary inversion, converting the statement into 'Little did we suspect'.",
    "El modificador de grado restrictivo 'Little' ubicado en la cabecera de la frase impone la inversión simple auxiliar 'did we'.",
    "Отрицательное наречие степени малости 'Little' при размещении в начале повествования вызывает классическую инверсию прошедшего времени."
  ],
  [
    "The dean insisted ______ launching investigation.",
    ["on", "to", "in", "about"],
    0,
    "The prepositional verb 'insist' requires 'on' before welcoming a nominal gerund clause representing the mandatory action.",
    "El verbo intransitivo de orden y firmeza 'insist' rige la preposición específica 'on' seguida de la forma verbal acabada en '-ing'.",
    "Глагол 'insist' (настаивать) требует за собой обязательного предложного управления 'on', после которого следует смысловой герундий."
  ],
  [
    "The candidate categorically denied ______ exam rules.",
    ["violating", "to violate", "violate", "violated"],
    0,
    "The verb 'deny' represents rejection of culpability and demands a direct gerund (violating) as its accusative companion.",
    "El verbo de exculpación 'deny' demanda gramaticalmente un gerundio directo para manifestar que la supuesta acción no tuvo lugar.",
    "Юридический глагол 'deny' (отрицать) по всем нормам грамматики требует в качестве дополнения использование формы герундия."
  ],
  [
    "We would appreciate your ______ files immediately.",
    ["submitting", "submit", "to submit", "submitted"],
    0,
    "An formal gerund requires its agent to be specified using a possessive pronoun or possessive adjective (your submitting).",
    "En la prosa académica formal, los gerundios se introducen mediante adjetivos posesivos ('your') para recalcar la atribución.",
    "Перед герундием в строгом книжном стиле принято использовать притяжательное местоимение ('your') для указания агента действия."
  ],
  [
    "The project launch is ______ upon favorable approvals.",
    ["contingent", "relying", "depended", "dependent"],
    0,
    "The compound formal adjective construction 'contingent upon' means dependent on, specifying key conditional terms.",
    "La expresión de sujeción condicional 'contingent upon' (condicionado a / supeditado a) denota consecuencias directas de requisitos.",
    "Академическое устойчивое определение 'contingent upon' выражает прямую зависимость от последующих внешних согласований."
  ],
  [
    "______ that they supply biometric data, the visa will be issued.",
    ["Provided", "Unless", "As long as to", "But for"],
    0,
    "The conditional expression 'Provided that' introduces an essential conditional premise, acting as a refined replacement for 'if'.",
    "La conjunción condicional afirmativa 'Provided' (siempre que) indica una condición previa e ineludible de cumplimiento.",
    "Официальный условный союз 'Provided' или 'Provided that' (при условии, что) ставит совершение действия в строгие рамки требований."
  ],
  [
    "The manual was so structured ______ to minimize search times.",
    ["as", "that", "so", "than"],
    0,
    "The correlative structure 'so + adjective + as + to-infinitive' is utilized to convey targeted design intentions and specific outcomes.",
    "La ecuación correlativa 'so + adjetivo + as + infinitivo' manifiesta un grado de estructuración calibrado intencionalmente.",
    "Коррелятивная пара по типу 'so + прилагательное + as + инфинитив с to' применяется для выражения намеренного результата."
  ],
  [
    "She had no intention ______ revising blueprints.",
    ["of", "to", "for", "against"],
    0,
    "The noun 'intention' takes the prepositional complement 'of' followed directly by a gerund describing the targeted action.",
    "El sustantivo abstracto 'intention' exige ir acompañado de la preposición 'of' previa a la inserción de un gerundio.",
    "Отглагольное существительное намерения 'intention' требует предлога 'of' перед упоминанием герундиального действия."
  ],
  [
    "They were accused ______ violating treaty terms.",
    ["of", "for", "by", "with"],
    0,
    "The passive forensic construct 'be accused' is paired with the invariant preposition 'of' before the crime or infraction is stated.",
    "La estructura delictiva pasiva 'be accused' exige de modo unívoco la preposición 'of' antecediendo al cargo de imputación.",
    "Конструкция обвинения в пассивном залоге 'be accused' требует фиксации вины предлогом 'of' согласно нормам управления."
  ],
  [
    "No sooner ______ we left than the storm hit.",
    ["had", "were", "have", "would"],
    0,
    "The correlative negative comparative adverb 'No sooner' triggers past perfect inversion (had we) in the main clause, linked with 'than'.",
    "El conector de inmediatez extrema 'No sooner' exige forzar la inversión con el auxiliar en pasado perfecto ('had we left').",
    "Парный союз немедленного действия 'No sooner' требует инверсии подлежащего и вспомогательного прошедшего перфекта 'had'."
  ],
  [
    "The core findings are ______ associated with parameters.",
    ["closely", "close", "closer", "closest"],
    0,
    "We use the adverb 'closely' to qualify relational participles like 'associated' to indicate a tight and direct scientific connection.",
    "Utilizamos el adverbio clasificador 'closely' (de forma estrecha o íntima) para calificar la naturaleza de la correlación.",
    "Научное наречие близости 'closely' применяется для указания на неразрывную связь между сравниваемыми параметрами."
  ],
  [
    "I refuse to be ______ under these restrictive conditions.",
    ["categorized", "categorize", "categorizing", "category"],
    0,
    "In the passive infinite voice, the verb 'be' after 'refuse to be' must be completed by a passive past participle (categorized).",
    "La voz pasiva de rechazo 'refuse to be' exige de forma categórica un participio de verbo regular terminado en '-ed'.",
    "Пассивная семантическая форма после 'refuse to be' требует заполнения позиции причастием прошедшего времени (-ed)."
  ],
  [
    "Where was the formula ______ developed?",
    ["originally", "original", "origin", "originally of"],
    0,
    "Use the adverb of origin 'originally' to modify the passive verb structure 'was developed' to specify historical genesis.",
    "El adverbio temporal de génesis 'originally' se emplea para calificar el origen cronológico de un descubrimiento o invención.",
    "Наречие исторического начала 'originally' служит для модификации глагола создания и описывает первоначальный момент начала."
  ],
  [
    "Your essays are significantly ______ than last week.",
    ["better", "good", "best", "more good"],
    0,
    "The comparative form of the irregular adjective 'good' is 'better', which here quantifies a significant improvement over a prior state.",
    "El término comparativo irregular correspondiente al adjetivo 'good' es 'better' (mejor), acoplado al nexo de contraste 'than'.",
    "Для нерегулярного прилагательного 'good' сравнительная степень образуется заменой основы на супплетивное слово 'better'."
  ],
  [
    "They decided ______ to proceed with the legal appeal.",
    ["not", "no", "don't", "to not"],
    0,
    "To correctly negate an infinitive phrase in formal English, place the negative particle 'not' before the preposition 'to' (not to proceed).",
    "Para efectuar la negación infinitiva de carácter formal, se antepone estrictamente la partícula 'not' antes de 'to'.",
    "Грамматически верное отрицание инфинитива в формальной деловой речи требует препозиции частицы 'not' перед элементом 'to'."
  ],
  [
    "I need to correct a ______ typographical errors.",
    ["few", "little", "much", "any"],
    0,
    "Use the quantifier phrase 'a few' with plural countable nouns (typographical errors) to indicate a small countable quantity.",
    "Empleamos la locución de cuantía mínima 'a few' debido a que 'errors' constituye un sustantivo contable en plural.",
    "Квантификатор малого положительного объема 'a few' употребляется перед исчисляемыми существительными во множественном числе."
  ]
];

const c2Raw: [string, string[], number, string, string, string][] = [
  [
    "This is the mesh ______ heat radiation is neutralized.",
    ["whereby", "wherefore", "wherein", "whatsoever"],
    2,
    "The compound relative adverb 'wherein' is a highly formal term meaning 'in which' or 'in what place/respect', specifying containment within a system.",
    "El adverbio relativo culto 'wherein' (en el cual / en donde) indica ubicación, situación o circunscripción técnica dentro de un objeto.",
    "Высокоформальный союзный адгезив 'wherein' (в котором, внутри которого) указывает на физическое или абстрактное нахождение элемента внутри структуры."
  ],
  [
    "They restructuring ______ boosting investments.",
    ["with a view to", "on the point of", "for the sake of", "by dint of"],
    0,
    "The multi-word prepositional idiom 'with a view to' means 'with the purpose or hope of' and must be followed by a gerund ending in '-ing' (boosting).",
    "La locución idiomática de finalidad 'with a view to' (con miras a / con el fin de) exige estrictamente ser secundada por un gerundio.",
    "Устойчивый многословный предлог цели 'with a view to' (с прицелом на, с намерением) грамматически сочетается только с последующим герундием."
  ],
  [
    "His credentials, ______ severe testing, were stellar.",
    ["notwithstanding", "nonetheless", "conversely", "thereby"],
    0,
    "The preposition 'notwithstanding' is a formal synonym of 'in spite of' or 'despite' and can be placed before or after the noun segment it modifies.",
    "La preposición literaria 'notwithstanding' (no obstante / a pesar de) se emplea para denotar una concesión formal frente a una rigurosa prueba.",
    "Книжный уступчивый предлог 'notwithstanding' (вопреки, несмотря на) может стоять как перед существительным, так и непосредственно после него."
  ],
  [
    "Scaffold requires reinforcing arches ______ under stress collapse.",
    ["lest it collapse", "fearing it falls", "for fear of collapsing", "so that it stands"],
    0,
    "The conjunction 'lest' introduces a negative clause of purpose ('for fear that' or 'to prevent any risk that') and triggers the bare subjunctive form (collapse).",
    "La conjunción preventiva 'lest' (para evitar que no / para que no) rige el uso del subjuntivo puro sin marcas en tercera persona ('lest it collapse').",
    "Официальный союз предостережения 'lest' (чтобы не случилось...) требует употребления сослагательного наклонения без вспомогательного глагола."
  ],
  [
    "We award fellowship to ______ presents best methodology.",
    ["whosoever", "whomsoever", "whomever", "whichsoever"],
    0,
    "The nominative relative pronoun 'whosoever' is used as the subject of the clause ('presents best methodology'), serving as a formal version of 'whoever'.",
    "Utilizamos el relativo nominativo arcaico 'whosoever' (quienquiera que / todo aquel que) como sujeto ejecutor directo del verbo 'presents'.",
    "Субъектное относительное местоимение 'whosoever' (кто бы ни) употребляется во главе придаточного предложения в качестве подлежащего."
  ],
  [
    "They would have exited Chapter 11 ______ for injection.",
    ["had it not been", "without", "but for", "had there not been"],
    0,
    "The inverted third conditional construction 'had it not been for' is used to talk about the absolute past condition that prevented a certain outcome.",
    "La cláusula condicional invertida de pasado 'had it not been for' (de no haber sido por) plantea un precondicionante crítico e irreversible.",
    "Инвертированное условное предложение третьего типа 'had it not been for' (если бы не...) описывает прошедшее превалирующее условие."
  ],
  [
    "General emissions ______ to peak by the next decade.",
    ["is projected", "estimates", "has forecasted", "is projecting"],
    0,
    "The passive analytical matrix 'is projected + to-infinitive' is utilized to report scientific predictions with objective authority.",
    "La locución pasiva de estimación 'is projected' (se proyecta) armoniza con el infinitivo para reflejar predicciones de base científica o estadística.",
    "Аналитический пассивный оборот прогнозирования 'is projected' согласуется с инфинитивом для выражения объективных расчетов."
  ],
  [
    "He undertook vocabulary audit ______ refining lexical scores.",
    ["with a view to", "so as to", "in order to", "for the sake of"],
    0,
    "The finality idiom 'with a view to' functions as a prepositional phrase, which mandates the use of a gerund ending in '-ing' (refining).",
    "La estructura teleológica de alto nivel 'with a view to' (con el propósito de) exige que el verbo de acción subsiguiente adopte la forma del gerundio.",
    "Идиома высшей степени формальности 'with a view to' управляет последующим герундием, отсекая использование простых инфинитивов."
  ],
  [
    "Hardly ______ crossed threshold when computer failed.",
    ["had the inspector", "the inspector had", "did the inspector", "has the inspector"],
    0,
    "Placing the frequency limiting adverb 'Hardly' at the baseline of a clause triggers immediate inversion of the past perfect auxiliary (had the inspector).",
    "El adverbio restrictivo inicial 'Hardly' (apenas) impone de forma inapelable la alteración de la sintaxis ordinaria ('had the inspector').",
    "Синтаксическое правило инверсии при вынесении наречия времени 'Hardly' в начало влечет расположение перфектного глагола 'had' перед субъектом."
  ],
  [
    "The recommended that all blueprints ______ archived.",
    ["be", "are", "were", "been"],
    0,
    "The mandative reporting structure using a verb like 'recommend' followed by a 'that'-clause requires the subjunctive root form of 'be'.",
    "Un verbo de exhortación solemne como 'recommend' rige un modo subjuntivo directo, haciendo que la forma sea simplemente 'be'.",
    "Повелительное контекстное управление после глагола 'recommend' требует внедрения сослагательного наклонения в базовом виде 'be'."
  ],
  [
    "By term's end, they ______ collected all details.",
    ["will have", "will", "would have", "having"],
    0,
    "The future perfect tense uses 'will have + past participle' to state that an action is projected to be fully completed by a specified future point.",
    "El tiempo futuro perfecto asocia el auxiliar modal 'will' con 'have' para proyectar el cumplimiento acabado de un proceso en el porvenir.",
    "Время Future Perfect ('will have' + причастие прошедшего времени) служит для фиксации завершенности действий к назначенному периоду."
  ],
  [
    "Under no circumstances ______ candidate be allowed to repeat.",
    ["should", "you should", "must to", "ought"],
    0,
    "Placing 'Under no circumstances' at the beginning of a clause forces subject-auxiliary inversion, making 'should candidate be' correct.",
    "La locución limitativa adverbial inicial 'Under no circumstances' requiere activar la inversión sistemática del verbo auxiliar modal.",
    "Отрицательная конструкция 'Under no circumstances' на первом месте по правилам высокого стиля вызывает безусловную инверсию."
  ],
  [
    "Never ______ seen such high levels of lexical diversity.",
    ["have I", "I have", "had I been", "I will"],
    0,
    "Placing 'Never' at the start of a sentence triggers inversion of the subject and the helper verb, resulting in 'Never have I seen...'.",
    "El adverbio temporal restrictivo 'Never' (nunca) al principio del enunciado trastoca la sintaxis común, forzando la inversión 'have I'.",
    "Вынос отрицания 'Never' в абсолютное начало предложения обязывает использовать инверсию по формуле вспомогательного глагола."
  ],
  [
    "The research council ______ reviewing the draft for months.",
    ["has been", "is being", "was been", "having been"],
    0,
    "The present perfect continuous form 'has been' is used with a present participle to describe research work spanning a continuous duration.",
    "El presente perfecto continuo se conjuga con 'has been' para designar un escrutinio científico que ha perseverado durante meses.",
    "Для классического описания непрекращавшейся работы ученого совета в течение долгого времени задействуется время Present Perfect Continuous."
  ],
  [
    "It is high time state ______ the loop holes.",
    ["revised", "revise", "should revise", "will revise"],
    0,
    "The fixed construction 'It is high time' triggers the past simple subjunctive (revised) to communicate that remedial action is long overdue.",
    "El sintagma condicional-crítico 'It is high time' (va siendo hora de que) exige un verbo en pasado simple con valor imperativo actual.",
    "Сложная синтаксическая конструкция 'It is high time' выражает упрек в промедлении ситуации и жестко требует глагола в Simple Past."
  ],
  [
    "Elder scholars object ______ treated as mere collectables.",
    ["to being", "to be", "being", "for being"],
    0,
    "The verb 'object' requires the preposition 'to' followed by a gerund. In a passive context, this must be structured as 'to being'.",
    "El verbo intransitivo 'object' rige de modo incuestionable la preposición 'to' amalgamada con el gerundio pasivo de proceso ('to being').",
    "Глагол принципиального несогласия 'object' сочетается с управляющим предлогом 'to', за которым следует пассивный герундий (-ing)."
  ],
  [
    "We look forward ______ structural parameters soon.",
    ["to analyzing", "to analyze", "analyze", "analyzing"],
    0,
    "In the phrasal verb phrase 'look forward to', the element 'to' acts as a preposition, which mandates a gerund ending in '-ing' (to analyzing).",
    "La expresión consagrada de espera gozosa 'look forward to' trata la partícula 'to' como preposición formal, exigiendo el gerundio.",
    "Фразовый тандем 'look forward to' выражает нетерпеливое предвкушение и по правилам требует после себя предложного герундия (-ing)."
  ],
  [
    "Only after audits ______ discover the system flaws.",
    ["did they", "they did", "have they", "they had"],
    0,
    "Placing 'Only after...' at the beginning of a sentence triggers subject-auxiliary inversion in the main clause (did they).",
    "El inicio de un enunciado con la locución restrictiva compleja 'Only after...' (solo tras) desencadena la inversión del sujeto en el nexo principal.",
    "Препозиция ограничительного выражения 'Only after...' (только после) влечет за собой инверсивную перестановку вспомогательного глагола."
  ],
  [
    "The manager admitted ______ confidential info to rivals.",
    ["having shared", "to share", "share", "having shared of"],
    0,
    "The reporting verb 'admit' can govern a perfect gerund (having shared) to securely denote admitting to a prior committed action.",
    "El verbo de declaración 'admit' (admitir) rige un gerundio perfecto para enfatizar la consumación anterior del hecho incriminado.",
    "Глагол признания 'admit' по нормам академического согласования дополняется перфектным герундием для явной ссылки на былое."
  ],
  [
    "She succeeded ______ securing contested research fellowship.",
    ["in", "to", "at", "for"],
    0,
    "The prepositional verb 'succeed' takes the invariant preposition 'in' to specify the domain of success, followed by the gerund.",
    "El verbo de éxito 'succeed' requiere formalmente la preposición 'in' ante la acción expresada en gerundio.",
    "В глагольной паре достижения цели 'succeed' используется фиксированное предложное управление 'in' перед герундием."
  ],
  [
    "They recommended legislative council ______ parameters.",
    ["adopt", "adopts", "adopted", "should have adopted"],
    0,
    "The demand verb 'recommend' triggers a subjunctive subclause where the base form of the verb (adopt) must be used regardless of subject person.",
    "El verbo de recomendación institucional 'recommend' exige el modo subjuntivo normativo, obviando inflexiones de singular.",
    "Управляющее воздействие глагола 'recommend' вводит сослагательное наклонение во вторичном предложении с формой чистого инфинитива."
  ],
  [
    "No sooner was blueprint finalized ______ critique started.",
    ["than", "when", "then", "until"],
    0,
    "The comparative correlative conjunction 'No sooner' works in conjunction with 'than' to indicate that one event followed another instantly.",
    "La estructura adverbial comparativa restrictiva 'No sooner' exige ser complementada por la conjunción de enlace temporal 'than'.",
    "Выражение временной стремительности 'No sooner' образует жесткую синтаксическую сцепку исключительно со словом 'than'."
  ],
  [
    "The manager had files ______ by certified team.",
    ["evaluated", "evaluate", "to evaluate", "evaluating"],
    0,
    "The passive causative structure 'have + object + past participle' describes arranging for something to be carried out (repaired).",
    "La fórmula causativa pasiva 'have + objeto + participio' indica que delegamos en un especialista completar una tarea.",
    "Каузативная конструкция управления 'have + объект + причастие прошедшего времени' означает делегирование работы специалисту."
  ],
  [
    "Were we ______ details, the arch would collapse.",
    ["to alter", "alter", "altering", "having altered"],
    0,
    "An inverted non-assertive conditional clause expressing hypothetical future actions is structured with 'Were + subject + to-infinitive'.",
    "La inversión elegante de segundo condicional para supuestos altamente hipotéticos se erige con la construcción clásica 'Were we to alter'.",
    "Пафосная предикативная инверсия второго типа условных предложений для гипотез будущего времени оформляется формулой 'Were we to + глагол'."
  ],
  [
    "The report was highly specific. ______ , it had minor issues.",
    ["Nonetheless", "Furthermore", "Thus", "In contrast"],
    0,
    "The transition adverb 'Nonetheless' indicates concession and contrast, indicating that the second statement qualifies the first.",
    "El conector discursivo de matiz adversativo 'Nonetheless' (no obstante / sin embargo) se emplea para contrarrestar de forma formal.",
    "Противопоставительное наречие уступки 'Nonetheless' (тем не менее) соединяет полярные по смыслу суждения на академическом уровне."
  ],
  [
    "I have severe difficulty ______ these mathematical proofs.",
    ["disproving", "to disprove", "of disproving", "to disproving"],
    0,
    "The formula 'have difficulty' (or 'have trouble') is followed by a gerund ending in '-ing' without an intervening preposition.",
    "La colocación de complicación activa 'have difficulty' rige directamente un gerundio de acción en gerundio simple sin preposiciones.",
    "Идиоматическое устойчивое выражение 'have difficulty' требует непосредственного примыкания герундия без промежуточных предлогов."
  ],
  [
    "The codebase is ______ with critical security vulnerabilities.",
    ["rife", "fraught", "filled", "bound"],
    0,
    "The adjective 'rife' means widespread or filled to abundance with something negative, and it has a strict prepositional companion 'with'.",
    "El adjetivo de propagación nociva 'rife' exige acoplarse con la preposición 'with' para reflejar abundancia de fallos.",
    "Прилагательное негативного широкого изобилия 'rife' грамматически сочетается с фиксированным предлогом 'with'."
  ],
  [
    "Little ______ suspect that details had been altered.",
    ["did we", "we did", "have we", "we had"],
    0,
    "The limiting initial adverb 'Little' triggers subject-auxiliary inversion, converting the statement into 'Little did we suspect'.",
    "El modificador de grado restrictivo 'Little' ubicado en la cabecera de la frase impone la inversión simple auxiliar 'did we'.",
    "Отрицательное наречие степени малости 'Little' при размещении в начале повествования вызывает классическую инверсию прошедшего времени."
  ],
  [
    "The dean insisted ______ launching deep legal inquiry.",
    ["on", "to", "in", "about"],
    0,
    "The prepositional verb 'insist' requires 'on' before welcoming a nominal gerund clause representing the mandatory action.",
    "El verbo intransitivo de orden y firmeza 'insist' rige la preposición específica 'on' seguida de la forma verbal acabada en '-ing'.",
    "Глагол 'insist' (настаивать) требует за собой обязательного предложного управления 'on', после которого следует смысловой герундий."
  ],
  [
    "The candidate categorically denied ______ exam guidelines.",
    ["violating", "to violate", "violate", "violated"],
    0,
    "The verb 'deny' represents rejection of culpability and demands a direct gerund (violating) as its accusative companion.",
    "El verbo de exculpación 'deny' demanda gramaticalmente un gerundio directo para manifestar que la supuesta acción no tuvo lugar.",
    "Юридический глагол 'deny' (отрицать) по всем нормам грамматики требует в качестве дополнения использование формы герундия."
  ],
  [
    "We would appreciate your ______ details immediately.",
    ["submitting", "submit", "to submit", "submitted"],
    0,
    "An formal gerund requires its agent to be specified using a possessive pronoun or possessive adjective (your submitting).",
    "En la prosa académica formal, los gerundios se introducen mediante adjetivos posesivos ('your') para recalcar la atribución.",
    "Перед герундием в строгом книжном стиле принято использовать притяжательное местоимение ('your') для указания агента действия."
  ],
  [
    "The project launch is ______ upon approvals.",
    ["contingent", "relying", "depended", "dependent"],
    0,
    "The compound formal adjective construction 'contingent upon' means dependent on, specifying key conditional terms.",
    "La expresión de sujeción condicional 'contingent upon' (condicionado a / supeditado a) denota consecuencias directas de requisitos.",
    "Акадмическое устойчивое определение 'contingent upon' выражает прямую зависимость от последующих внешних согласований."
  ],
  [
    "______ that they supply data, the visa is approved.",
    ["Provided", "Unless", "As long as to", "But for"],
    0,
    "The conditional expression 'Provided that' introduces an essential conditional premise, acting as a refined replacement for 'if'.",
    "La conjunción condicional afirmativa 'Provided' (siempre que) indica una condición previa e ineludible de cumplimiento.",
    "Официальный условный союз 'Provided' или 'Provided that' (при условии, что) ставит совершение действия в строгие рамки требований."
  ],
  [
    "The manual was so structured ______ to minimize search times.",
    ["as", "that", "so", "than"],
    0,
    "The correlative structure 'so + adjective + as + to-infinitive' is used to convey targeted design intentions and specific outcomes.",
    "La ecuación correlativa 'so + adjetivo + as + infinitivo' manifiesta un grado de estructuración calibrado intencionalmente.",
    "Коррелятивная пара по типу 'so + прилагательное + as + инфинитив с to' применяется для выражения намеренного результата."
  ],
  [
    "She had no intention ______ revising final blueprints.",
    ["of", "to", "for", "against"],
    0,
    "The noun 'intention' takes the prepositional complement 'of' followed directly by a gerund describing the targeted action.",
    "El sustantivo abstracto 'intention' exige ir acompañado de la preposición 'of' previa a la inserción de un gerundio.",
    "Отглагольное существительное намерения 'intention' требует предлога 'of' перед упоминанием герундиального действия."
  ],
  [
    "They were accused ______ violating international treaty.",
    ["of", "for", "by", "with"],
    0,
    "The passive forensic construct 'be accused' is paired with the invariant preposition 'of' before the crime or infraction is stated.",
    "La estructura delictiva pasiva 'be accused' exige de modo unívoco la preposición 'of' antecediendo al cargo de imputación.",
    "Конструкция обвинения в пассивном залоге 'be accused' требует фиксации вины предлогом 'of' согласно нормам управления."
  ],
  [
    "No sooner ______ we left office than crisis hit.",
    ["had", "were", "have", "would"],
    0,
    "The correlative negative comparative adverb 'No sooner' triggers past perfect inversion (had we) in the main clause, linked with 'than'.",
    "El conector de inmediatez extrema 'No sooner' exige forzar la inversión con el auxiliar en pasado perfecto ('had we left').",
    "Парный союз немедленного действия 'No sooner' требует инверсии подлежащего и вспомогательного прошедшего перфекта 'had'."
  ],
  [
    "The core details are ______ associated with parameters.",
    ["closely", "close", "closer", "closest"],
    0,
    "We use the adverb 'closely' to qualify relational participles like 'associated' to indicate a tight and direct scientific connection.",
    "Utilizamos el adverbio clasificador 'closely' (de forma estrecha o íntima) para calificar la naturaleza de la correlación.",
    "Научное наречие близости 'closely' применяется для указания на неразрывную связь между сравниваемыми параметрами."
  ],
  [
    "I refuse to be ______ under these highly restrictive conditions.",
    ["categorized", "categorize", "categorizing", "category"],
    0,
    "In the passive infinite voice, the verb 'be' after 'refuse to be' must be completed by a passive past participle (categorized).",
    "La voz pasiva de rechazo 'refuse to be' exige de forma categórica un participio de verbo regular terminado en '-ed'.",
    "Пассивная семантическая форма после 'refuse to be' требует заполнения позиции причастием прошедшего времени (-ed)."
  ],
  [
    "Where was the formula ______ developed?",
    ["originally", "original", "origin", "originally of"],
    0,
    "Use the adverb of origin 'originally' to modify the passive verb structure 'was developed' to specify historical genesis.",
    "El adverbio temporal de génesis 'originally' se emplea para calificar el origen cronológico de un descubrimiento o invención.",
    "Наречие исторического начала 'originally' служит для модификации глагола создания и описывает первоначальный момент начала."
  ],
  [
    "Your essays are significantly ______ than last week's templates.",
    ["better", "good", "best", "more good"],
    0,
    "The comparative form of the irregular adjective 'good' is 'better', which here quantifies a significant improvement over a prior state.",
    "El término comparativo irregular correspondiente al adjetivo 'good' es 'better' (mejor), acoplado al nexo de contraste 'than'.",
    "Для нерегулярного прилагательного 'good' сравнительная степень образуется заменой основы на супплетивное слово 'better'."
  ],
  [
    "They decided ______ to proceed with legal appeal.",
    ["not", "no", "don't", "to not"],
    0,
    "To correctly negate an infinitive phrase in formal English, place the negative particle 'not' before the preposition 'to' (not to proceed).",
    "Para efectuar la negación infinitiva de carácter formal, se antepone estrictamente la partícula 'not' antes de 'to'.",
    "Грамматически верное отрицание инфинитива в формальной деловой речи требует препозиции частицы 'not' перед элементом 'to'."
  ],
  [
    "I need to correct a ______ typographical errors.",
    ["few", "little", "much", "any"],
    0,
    "Use the quantifier phrase 'a few' with plural countable nouns (typographical errors) to indicate a small countable quantity.",
    "Empleamos la locución de cuantía mínima 'a few' debido a que 'errors' constituye un sustantivo contable en plural.",
    "Квантификатор малого положительного объема 'a few' употребляется перед исчисляемыми существительными во множественном числе."
  ]
];

// Total 53 unique questions per level.
export const quizData: Record<string, QuizQuestion[]> = {
  A1: [
    {
      id: "a1-1",
      question: "Hello, my name _____ John.",
      options: ["am", "is", "are", "be"],
      answer: 1,
      explanationEn: "The link verb 'is' is the mandatory third-person singular form of 'to be' needed to match the singular noun subject 'my name'.",
      explanationEs: "El verbo de unión 'is' es la forma en tercera persona del singular obligatoria del verbo 'to be' para concordar con el sujeto singular 'my name'.",
      explanationRu: "Глагол-связка 'is' является обязательной формой глагола 'to be' в третьем лице единственного числа для согласования с подлежащим 'my name' (моё имя)."
    },
    {
      id: "a1-2",
      question: "She _____ to the school every day.",
      options: ["go", "going", "goes", "went"],
      answer: 2,
      explanationEn: "In the Present Simple tense, active verbs taking third-person singular subjects (he, she, it) must end in the '-s' or '-es' suffix.",
      explanationEs: "En el tiempo presente simple, los verbos que acompañan a sujetos en tercera persona singular (he, she, it) deben terminar con el sufijo '-s' o '-es' (goes).",
      explanationRu: "В настоящем простом времени (Present Simple) глаголы при подлежащем в третьем лице единственного числа (he, she, it) требуют обязательного окончания '-s' или '-es' (goes)."
    },
    {
      id: "a1-3",
      question: "They _____ Russian students.",
      options: ["am", "is", "are", "have"],
      answer: 2,
      explanationEn: "For plural subject pronouns like 'they', the corresponding plural present form of the verb 'to be' is always 'are'.",
      explanationEs: "Para pronombres de sujeto en plural como 'they' (ellos/ellas), la forma conjugada del presente correspondiente para el verbo 'to be' es siempre 'are'.",
      explanationRu: "Для местоимений множественного числа, таких как 'they' (они), соответствующая форма настоящего времени глагола 'to be' всегда будет 'are'."
    },
    {
      id: "a1-4",
      question: "Where _____ you live?",
      options: ["do", "does", "are", "is"],
      answer: 0,
      explanationEn: "Use the auxiliary helper verb 'do' to properly format questions in the present simple tense when the subject is the pronoun 'you'.",
      explanationEs: "Utiliza el verbo auxiliar 'do' para estructurar correctamente preguntas en presente simple cuando el sujeto directo es 'you'.",
      explanationRu: "Для грамматически верного построения вопросительных предложений в Present Simple при подлежащем 'you' используется вспомогательный глагол 'do'."
    },
    {
      id: "a1-5",
      question: "I have _____ apple in my bag.",
      options: ["a", "an", "the", "some"],
      answer: 1,
      explanationEn: "The indefinite article 'an' must be used preceding countable, singular nouns (like 'apple') that begin with a spoken vowel sound.",
      explanationEs: "Se debe emplear el artículo indefinido 'an' precediendo a sustantivos singulares contables (como 'apple') que inician con un sonido vocálico.",
      explanationRu: "Неопределенный артикль 'an' обязательно используется перед исчисляемыми существительными в единственном числе, начинающимися с гласного звука (apple)."
    },
    {
      id: "a1-6",
      question: "We _____ got a big house in London.",
      options: ["has", "have", "are", "do"],
      answer: 1,
      explanationEn: "For expressing possession with plural pronouns like 'we', the auxiliary phrase 'have got' is the standard grammatical selection.",
      explanationEs: "Para reflejar posesión o pertenencia combinada con pronombres plurales como 'we' (nosotros), se utiliza el verbo auxiliar 'have got'.",
      explanationRu: "Для выражения владения при подлежащем во множественном числе, таком как 'we' (мы), используется устойчивая конструкция 'have got'."
    },
    {
      id: "a1-7",
      question: "_____ books on the table are mine.",
      options: ["This", "That", "These", "Them"],
      answer: 2,
      explanationEn: "The demonstrative pronoun 'These' is used to identify plural countable nouns (books) that are positioned near the speaker.",
      explanationEs: "El pronombre demostrativo plural 'These' (estos/estas) se utiliza para referirse a objetos en plural que se encuentran próximos al hablante.",
      explanationRu: "Указательное местоимение множественного числа 'These' (эти) применяется для обозначения находящихся поблизости предметов (books)."
    },
    {
      id: "a1-8",
      question: "Mary doesn't _____ coffee in the morning.",
      options: ["like", "likes", "liking", "liked"],
      answer: 0,
      explanationEn: "Following present negative auxiliaries like 'doesn't', the main verb must drop any third-person suffix and stand in its bare infinitive form (like).",
      explanationEs: "Tras un verbo auxiliar de negación como 'doesn't', el verbo principal siempre debe emplearse en su forma base infinitiva pura (like).",
      explanationRu: "После отрицательного вспомогательного глагола 'doesn't' основной смысловой глагол ставится исключительно в начальную форму без окончания '-s' (like)."
    },
    {
      id: "a1-9",
      question: "Is this _____ pen?",
      options: ["you", "your", "yours", "me"],
      answer: 1,
      explanationEn: "Use the possessive adjective 'your' immediately before a noun (pen) to indicate ownership belonging to the listener.",
      explanationEs: "Usa el adjetivo posesivo atributivo 'your' justo antes del sustantivo (pen) para señalar que le pertenece a tu interlocutor.",
      explanationRu: "Притяжательное прилагательное 'your' (твой/ваш) употребляется непосредственно перед определяемым существительным (pen) для выражения обладания."
    },
    {
      id: "a1-10",
      question: "My father is a doctor. He works in a _____.",
      options: ["school", "hospital", "office", "hotel"],
      answer: 1,
      explanationEn: "Based on lexical context and work environment vocabulary, medically trained doctors perform their professional duties inside a hospital.",
      explanationEs: "Teniendo en cuenta el contexto laboral y de vocabulario elemental, el edificio o clínica donde trabaja un doctor se denomina 'hospital'.",
      explanationRu: "Исходя из контекста профессиональной деятельности и лексики, медицинские работники (doctors) ведут прием в больнице (hospital)."
    },
    ...a1Raw.map((raw, index) => {
      const qIndex = index + 11;
      return {
        id: `a1-${qIndex}`,
        question: raw[0],
        options: raw[1],
        answer: raw[2],
        explanationEn: raw[3],
        explanationEs: raw[4],
        explanationRu: raw[5]
      };
    })
  ],
  A2: [
    {
      id: "a2-1",
      question: "We _____ to Spain last summer on holiday.",
      options: ["go", "gone", "went", "were going"],
      answer: 2,
      explanationEn: "Use the irregular simple past verb form 'went' to denote a fully completed event that occurred in a defined past timeframe ('last summer').",
      explanationEs: "Se utiliza la forma verbal de pasado simple irregular 'went' (fui/fuimos) para señalar una acción completamente concluida en un periodo de tiempo determinado en el pasado ('last summer').",
      explanationRu: "Используйте неправильную форму простого прошедшего времени (Simple Past) 'went' для выражения полностью завершенного действия в точно указанный период в прошлом ('last summer')."
    },
    {
      id: "a2-2",
      question: "_____ you ever been to New York?",
      options: ["Do", "Did", "Have", "Has"],
      answer: 2,
      explanationEn: "In the present perfect tense, combine the auxiliary 'Have' with 'ever been' to inquire about life experiences of the subject pronoun 'you'.",
      explanationEs: "En el tiempo presente perfecto, se debe combinar el auxiliar 'Have' con 'ever been' para preguntar sobre la experiencia de vida acumulada del pronombre de sujeto 'you'.",
      explanationRu: "При вопросе о жизненном опыте в настоящем совершенном времени (Present Perfect) для местоимения 'you' используется вспомогательный глагол 'Have' в сочетании со словом 'ever' (когда-либо)."
    },
    {
      id: "a2-3",
      question: "This laptop is _____ than that one.",
      options: ["more expensive", "expensive", "expensiver", "most expensive"],
      answer: 0,
      explanationEn: "For long adjectives consisting of three or more syllables (ex-pen-sive), form the comparative relationship by placing the modifier 'more' before the adjective, followed by 'than'.",
      explanationEs: "Para adjetivos extensos de tres o más sílabas (como 'expensive'), el grado comparativo se construye anteponiendo de forma estricta la palabra 'more' al adjetivo, seguido del nexo 'than'.",
      explanationRu: "Для образования сравнительной степени многосложных прилагательных (состоящих из трех и более слогов, как 'expensive') перед ними ставится слово 'more', а после — союз сравнения 'than'."
    },
    {
      id: "a2-4",
      question: "If it _____ tomorrow, we will stay at home.",
      options: ["rain", "rains", "will rain", "rained"],
      answer: 1,
      explanationEn: "Under first conditional rules, the subordinate 'if'-clause handles future possibilities by employing a Present Simple verb (rains) to set the condition.",
      explanationEs: "Bajo las reglas del primer condicional, la cláusula condicional introducida por 'if' proyecta una posibilidad futura empleando el verbo en presente simple ('rains').",
      explanationRu: "В условных предложениях первого типа (First Conditional), описывающих будущие события, в условной части после союза 'if' всегда используется настоящее простое время (Present Simple) — 'rains'."
    },
    {
      id: "a2-5",
      question: "I _____ a movie when you called me.",
      options: ["watch", "was watching", "watched", "am watching"],
      answer: 1,
      explanationEn: "Apply Past Continuous ('was watching') to represent an ongoing background activity that was interrupted by a finished action in the Simple Past ('called').",
      explanationEs: "Utiliza el tiempo pasado continuo ('was watching') para representar una actividad prolongada en el pasado que se vio súbitamente interrumpida por una acción corta en pasado simple ('called').",
      explanationRu: "Используйте прошедшее длительное время (Past Continuous) 'was watching' для выражения процесса в прошлом, который был прерван другим коротким точечным действием в прошедшем времени (Simple Past 'called')."
    },
    {
      id: "a2-6",
      question: "You _____ touch that wire. It's extremely dangerous.",
      options: ["mustnot", "must not", "need not", "don't have to"],
      answer: 1,
      explanationEn: "The negative modal phrase 'must not' is standardly required to express an absolute prohibition or a strict instruction to prevent harm.",
      explanationEs: "La locución modal negativa 'must not' (no debes) se utiliza de manera formal para manifestar una prohibición rigurosa basada en el peligro inmediato.",
      explanationRu: "Отрицательный модальный глагол 'must not' выражает категорический, строгий запрет на совершение действия ввиду высокой степени опасности или правил безопасности."
    },
    {
      id: "a2-7",
      question: "This is _____ interesting book I've ever read.",
      options: ["the most", "more", "most", "the more"],
      answer: 0,
      explanationEn: "To formulate the superlative degree of a complex multisyllabic adjective like 'interesting', apply the definite article phrase 'the most' before the word.",
      explanationEs: "Para estructurar el grado superlativo de adjetivos de tres o más sílabas como 'interesting', se antepone obligatoriamente la frase 'the most' (el más).",
      explanationRu: "Превосходная степень для многосложных прилагательных (таких как 'interesting') образуется путем добавления определенного артикля и наречия 'the most' (самый) перед прилагательным."
    },
    {
      id: "a2-8",
      question: "They've lived here _____ ten years now.",
      options: ["since", "for", "during", "ago"],
      answer: 1,
      explanationEn: "Use 'for' to introduce a duration or length of time (ten years). In contrast, 'since' is reserved for establishing a specific starting point in the past.",
      explanationEs: "Usa la preposición 'for' (durante / hace) para expresar una duración acumulada de tiempo ('ten years'). Usa 'since' solo si te refieres a un punto de inicio específico.",
      explanationRu: "Предлог 'for' используется для указания общей длительности или периода времени (ten years), в то время как предлог 'since' обозначает конкретную начальную точку действия."
    },
    {
      id: "a2-9",
      question: "I would speak to him if I _____ his number.",
      options: ["know", "knew", "will know", "have known"],
      answer: 1,
      explanationEn: "The second conditional depicts hypothetical, unreal situations in the present; the condition clause following 'if' must employ the Simple Past form ('knew').",
      explanationEs: "El segundo condicional plantea hipótesis o situaciones no reales en el presente; la cláusula condicional 'if' debe usar el verbo en pasado simple ('knew').",
      explanationRu: "В гипотетических условных предложениях второго типа (Second Conditional), относящихся к настоящему времени, в части после союза 'if' употребляется простое прошедшее время (Simple Past) — 'knew'."
    },
    {
      id: "a2-10",
      question: "She decided _____ a new car next week.",
      options: ["to buy", "buying", "buy", "bought"],
      answer: 0,
      explanationEn: "The verb 'decide' grammatically commands an infinitive complement introduced with 'to' ('to buy') to name the chosen path of action.",
      explanationEs: "El verbo infinitivo de decisión 'decide' rige y exige un complemento de infinitivo obligatoriamente introducido por la preposición 'to' (to buy).",
      explanationRu: "Глагол намерения 'decide' грамматически требует после себя дополнения в форме инфинитива с частицей 'to' ('to buy') для указания принятого решения."
    },
    ...a2Raw.map((raw, index) => {
      const qIndex = index + 11;
      return {
        id: `a2-${qIndex}`,
        question: raw[0],
        options: raw[1],
        answer: raw[2],
        explanationEn: raw[3],
        explanationEs: raw[4],
        explanationRu: raw[5]
      };
    })
  ],
  B1: [
    {
      id: "b1-1",
      question: "The book _____ was written by Shakespeare is on the shelf.",
      options: ["who", "which", "whose", "whom"],
      answer: 1,
      explanationEn: "Use the relative pronoun 'which' (or 'that') to introduce a defining relative clause that describes an inanimate noun or object (such as 'the book').",
      explanationEs: "Se utiliza el pronombre relativo 'which' (el cual / que) para introducir cláusulas relativas que describen o proporcionan información sobre objetos inanimados o conceptos (como 'the book').",
      explanationRu: "Используйте относительное местоимение 'which' (который) для ввода определительного придаточного предложения, описывающего неодушевленные предметы или отвлеченные понятия ('the book')."
    },
    {
      id: "b1-2",
      question: "I regret _____ you that the event has been canceled.",
      options: ["to tell", "telling", "tell", "having told"],
      answer: 0,
      explanationEn: "The phrase 'regret to tell' (or 'regret to inform') is a fixed formal construction used to introduce bad news with a sense of respectful disappointment.",
      explanationEs: "La estructura formal e idiomática 'regret + to-infinitive' (lamentar tener que decir) se emplea para introducir malas noticias o decisiones decepcionantes.",
      explanationRu: "Формальный оборот 'regret to tell' (сожалеть о том, что приходится сообщить) выражает вежливое и официальное сожаление при передаче неприятной новости."
    },
    {
      id: "b1-3",
      question: "How long _____ English before you moved to London?",
      options: ["are you studying", "had you been studying", "have you studied", "did you study"],
      answer: 1,
      explanationEn: "Use the Past Perfect Continuous tense ('had you been studying') to emphasize the cumulative duration of an action that was occurring continuously up until a specific point in the past ('before you moved').",
      explanationEs: "Utiliza el tiempo pasado perfecto continuo ('had you been studying') para recalcar la duración acumulada de una acción que se estuvo desarrollando continuamente en el pasado hasta un hito también pasado ('before you moved').",
      explanationRu: "Для выражения длительного действия, которое началось, продолжалось и развивалось в прошлом вплоть до определенного прошедшего момента ('before you moved'), используется прошедшее совершенное длительное время (Past Perfect Continuous)."
    },
    {
      id: "b1-4",
      question: "The room _____ cleaned when I arrived yesterday afternoon.",
      options: ["was been", "was being", "is being", "had being"],
      answer: 1,
      explanationEn: "The Past Continuous Passive voice structure 'was being cleaned' represents an action that was actively in progress at the precise past moment of another event ('yesterday afternoon when I arrived').",
      explanationEs: "La estructura de voz pasiva del pasado continuo 'was being cleaned' (estaba siendo limpiada) describe un proceso en progreso en el pasado simultáneo a otra acción puntual ('when I arrived').",
      explanationRu: "Пассивная форма прошедшего длительного времени (Past Continuous Passive) — 'was being cleaned' — указывает на то, что над объектом производилось длительное незавершенное действие в конкретный прошедший момент времени."
    },
    {
      id: "b1-5",
      question: "You _____ have told me about the schedule changes; I wasted an hour.",
      options: ["should", "ought", "might", "should have"],
      answer: 0,
      explanationEn: "Since 'have' is already in the sentence, use the modal 'should' to complete the 'should have + past participle' structure, which expresses regret or criticism about a past event.",
      explanationEs: "Dado que 'have' ya está presente en la oración, se debe utilizar el verbo modal 'should' para completar la estructura 'should have + participio de pasado', la cual expresa lamento o crítica sobre un hecho pasado.",
      explanationRu: "Поскольку вспомогательный глагол 'have' уже присутствует в предложении, для завершения модальной конструкции упрека или сожаления о прошлом 'should have + причастие' необходим модальный глагол 'should'."
    },
    {
      id: "b1-6",
      question: "I look forward to _____ you at the global EXCI summit.",
      options: ["meet", "meeting", "have met", "be meeting"],
      answer: 1,
      explanationEn: "In the idiomatic phrase 'look forward to', the word 'to' acts as a preposition, which grammatically commands a gerund noun complement ending in '-ing' ('meeting').",
      explanationEs: "En la frase idiomática 'look forward to' (esperar con ansias), el elemento 'to' funciona como una preposición, exigiendo de forma obligatoria que el verbo subsiguiente se presente en gerundio ('meeting').",
      explanationRu: "В устойчивом словосочетании 'look forward to' элемент 'to' является предлогом, а не частицей инфинитива, поэтому после него обязательно используется герундий (глагол с окончанием '-ing') — 'meeting'."
    },
    {
      id: "b1-7",
      question: "Neither my brother nor my cousins _____ attending the exhibition.",
      options: ["is", "are", "be", "has"],
      answer: 1,
      explanationEn: "Under proximity agreement rules for twin subjects joined by 'neither... nor', the verb must agree in number with the subject noun situated closest to it ('my cousins', which is plural, requiring 'are').",
      explanationEs: "De acuerdo con las reglas de concordancia por proximidad, en sujetos compuestos unidos por 'neither... nor', la conjugación del verbo coincide en número con el sujeto directo más cercano, que en este caso es el plural 'my cousins'.",
      explanationRu: "По правилу согласования сказуемого с ближайшим к нему подлежащим в предложениях с союзом 'neither... nor...', глагол согласуется со вторым существительным во множественном числе ('my cousins'), требуя глагола 'are'."
    },
    {
      id: "b1-8",
      question: "By this time tomorrow, they _____ to Rome.",
      options: ["will fly", "fly", "will have flown", "will be flying"],
      answer: 2,
      explanationEn: "Form the Future Perfect tense ('will have flown') to establish that an action will be completed or achieved before a specified deadline or future event ('by this time tomorrow').",
      explanationEs: "Utilizamos la conjugación del futuro perfecto 'will have flown' para asegurar que una acción ya estará totalmente completada para un determinado límite en el futuro ('by this time tomorrow').",
      explanationRu: "Будущее совершенное время (Future Perfect) 'will have flown' используется для описания действия, которое уже завершится и будет иметь результат до определенного момента в будущем ('by this time tomorrow')."
    },
    {
      id: "b1-9",
      question: "He speaks English fluently, _____ he?",
      options: ["doesn't", "is", "isn't", "don't"],
      answer: 0,
      explanationEn: "In a tag question, a positive main clause in the Present Simple tense requires a matching negative auxiliary tag ('doesn't he?') utilizing the correct singular pronoun support.",
      explanationEs: "En una pregunta con muletilla (tag question), si la cláusula principal es afirmativa en presente simple, el apéndice de confirmación final debe formularse utilizando el auxiliar negativo correspondiente ('doesn't he?').",
      explanationRu: "В разделительных вопросах (Tag Questions), если первая часть предложения является утвердительной в Present Simple, во второй части ('хвостике') всегда используется отрицательный вспомогательный глагол в третьем лице единственного числа ('doesn't he?')."
    },
    {
      id: "b1-10",
      question: "I wish I _____ more free time to practice listening tests.",
      options: ["had", "have", "would have", "had have"],
      answer: 0,
      explanationEn: "To express a present wish or desire for a hypothetical, unattainable, or currently untrue scenario, the verb following 'I wish' must stand in the simple past form ('had').",
      explanationEs: "Para expresar un deseo en presente sobre un escenario imaginario o que actualmente no es real, la cláusula que sigue a 'I wish' debe construirse en pasado simple ('had').",
      explanationRu: "Для выражения сожаления о нереальности желаемой ситуации в настоящем времени после конструкции 'I wish' употребляется простое прошедшее время (Simple Past) — 'had'."
    },
    ...b1Raw.map((raw, index) => {
      const qIndex = index + 11;
      return {
        id: `b1-${qIndex}`,
        question: raw[0],
        options: raw[1],
        answer: raw[2],
        explanationEn: raw[3],
        explanationEs: raw[4],
        explanationRu: raw[5]
      };
    })
  ],
  B2: [
    {
      id: "b2-1",
      question: "Hardly _____ entered the classroom when the exam bell rang.",
      options: ["had the teacher", "the teacher had", "did the teacher", "has the teacher arrived"],
      answer: 0,
      explanationEn: "When restrictive negative adverbials like 'Hardly' or 'Scarcely' initiate a clause, they trigger a mandatory Subject-Auxiliary Inversion. Thus, the auxiliary verb 'had' must precede the subject 'the teacher' ('Hardly had the teacher entered...').",
      explanationEs: "Cuando adverbios restrictivos de valor negativo como 'Hardly' (Apenas) inician una oración, se produce una inversión obligatoria de sujeto y auxiliar (Subject-Auxiliary Inversion). Por ende, el auxiliar 'had' precede al sujeto 'the teacher'.",
      explanationRu: "Если предложение начинается с отрицательных ограничительных наречий, таких как 'Hardly' (Едва), происходит обязательная инверсия подлежащего и вспомогательного глагола. В данном случае вспомогательный глагол прошедшего времени 'had' ставится перед подлежащим 'the teacher'."
    },
    {
      id: "b2-2",
      question: "It's high time you _____ studying seriously for your EXCI exam.",
      options: ["start", "started", "should start", "will start"],
      answer: 1,
      explanationEn: "The idiomatic structure 'It's high time' (or 'It's about time') demands a Past Subjunctive verb (which takes the simple past form, 'started') to convey critical urgency about a present or future action that should have already begun.",
      explanationEs: "La locución idiomática de reclamo o urgencia 'It's high time' (Ya es hora de que / Ya va siendo hora) rige obligatoriamente el subjuntivo de pasado (con forma de pasado simple: 'started') para demandar una actividad que ya debió haber comenzado.",
      explanationRu: "Устойчивая конструкция 'It's high time' (Давно пора, чтобы...) требует после себя сослагательного наклонения настоящего времени, которое грамматически совпадает по форме с простым прошедшим временем (Simple Past) — 'started'."
    },
    {
      id: "b2-3",
      question: "I'd rather you _____ make so much noise while I am writing.",
      options: ["don't", "didn't", "not", "won't"],
      answer: 1,
      explanationEn: "To express a present or future preference regarding another person's behavior, the construction 'I would rather you' ('I'd rather you') must be followed by a Past Subjunctive verb form (using simple past negation, 'didn't').",
      explanationEs: "Para reflejar una preferencia o ruego directo en presente sobre el comportamiento de otra persona, la estructura 'I would rather you' exige un verbo en pasado simple de subjuntivo ('didn't').",
      explanationRu: "Для выражения предпочтения или вежливого требования относительно действий другого лица в настоящем или будущем времени, конструкция 'I'd rather you' ('Я бы предпочел, чтобы ты...') требует использования глагола в форме простого прошедшего времени (в отрицании — 'didn't')."
    },
    {
      id: "b2-4",
      question: "The police are looking into the matter; 'looking into' means _____.",
      options: ["avoiding", "investigating", "challenging", "postponing"],
      answer: 1,
      explanationEn: "The highly frequent phrasal verb 'look into' is defined in formal and lexical contexts as to examine, explore, or systematically investigate a situation, mystery, or crime.",
      explanationEs: "El verbo frasal (phrasal verb) de amplia circulación 'look into' se traduce y define de manera precisa como investigar, indagar, inspeccionar o examinar sistemáticamente un asunto, incidente o delito.",
      explanationRu: "Фразовый глагол 'look into' означает собирать сведения о ситуации, разбираться в обстоятельствах, детально изучать или расследовать инцидент или дело."
    },
    {
      id: "b2-5",
      question: "She had no sooner arrived _____ the storm started raging.",
      options: ["when", "than", "then", "until"],
      answer: 1,
      explanationEn: "The correlative pair 'no sooner' must be structurally paired with 'than' later in the compound sentence (forming 'no sooner... than...') to express that one past event occurred immediately after another.",
      explanationEs: "El conector compuesto correlativo 'no sooner' (apenas... cuando) exige de manera estrictamente obligatoria asociarse con el nexo 'than' para introducir el segundo suceso que ocurre de forma casi instantánea.",
      explanationRu: "Сложный коррелятивный союз 'no sooner' (не успела она..., как...) грамматически требует употребления во второй части предложения парного союза 'than' для связки последовательных, стремительно сменяющих друг друга процессов в прошлом."
    },
    {
      id: "b2-6",
      question: "We should have the generator _____ before the storm cuts the power.",
      options: ["repair", "to repair", "repaired", "repairing"],
      answer: 2,
      explanationEn: "This is a Passive Causative structure. The grammatical pattern 'have + object + past participle' ('have the generator repaired') is employed when arranging for an action or service to be completed on an object by someone else.",
      explanationEs: "Se trata de una estructura causativa pasiva. El patrón sintáctico 'have + objeto + participio de pasado' ('have the generator repaired') expresa la acción de encargar a un tercero la reparación o modificación de un artefacto.",
      explanationRu: "Данное предложение представляет собой каузативную конструкцию в пассивном залоге (Passive Causative). Структура 'have + дополнение + причастие II прошедшего времени' ('have the generator repaired') означает, что действие выполняется профессионалом по нашему поручению."
    },
    {
      id: "b2-7",
      question: "Were you _____ your contract, you would be penalized severely.",
      options: ["break", "to break", "breaking", "broken"],
      answer: 1,
      explanationEn: "This represents an inverted second conditional. By omitting 'If' and placing 'Were' in the initial position, the construction 'Were you to break' replaces 'If you broke', expressing a highly speculative or formal future condition.",
      explanationEs: "Esta oración representa un segundo condicional invertido de alta formalidad. Al omitir el condicional 'If' y colocar el subjuntivo 'Were' al comienzo, se activa la estructura formal de subjuntivo e infinitivo 'Were you to break'.",
      explanationRu: "Это инвертированное условное предложение второго типа (Inverted Second Conditional). При опущении союза 'If' и выносе вспомогательного 'Were' в начало, условная связь выражается книжным литературным оборотом 'Were you to + глагол' (Если бы вам пришлось нарушить...)."
    },
    {
      id: "b2-8",
      question: "Your arguments are strong. _____, they lack statistical support.",
      options: ["Furthermore", "Nevertheless", "As a result", "In contrast"],
      answer: 1,
      explanationEn: "The transition adverb 'Nevertheless' functions as an adversative connectors used to mark contrast or express concession, signaling that the statement in the clause stands in opposition to the preceding context.",
      explanationEs: "El adverbio de transición 'Nevertheless' (No obstante / Sin embargo) funciona como un conector de contraste concesivo para matizar argumentos fuertes, señalando que el enunciado subsiguiente limita o rebate ligeramente lo anterior.",
      explanationRu: "Связующее вводное слово 'Nevertheless' (Тем не менее / Всё же) используется для выражения уступки или противопоставления, указывая на то, что новая информация сужает или частично противоречит ранее заявленному тезису."
    },
    {
      id: "b2-9",
      question: "They recommended that he _____ more academic articles daily.",
      options: ["reads", "read", "should have read", "reading"],
      answer: 1,
      explanationEn: "The presence of recommending verbs like 'recommend', 'suggest', or 'demand' followed by a 'that'-clause triggers the present subjunctive mood, requiring the base or bare form of the verb ('read'), regardless of third-person singular subjects.",
      explanationEs: "La presencia de verbos de mandato, sugerencia o recomendación seguida de una cláusula introducida por 'that' exige el uso del modo subjuntivo en inglés, requiriendo la forma base o infinitiva del verbo sin '-s' ('read') para la tercera persona.",
      explanationRu: "Использование глаголов рекомендации или побуждения ('recommend', 'suggest') в главной части предложения перед придаточным с союзом 'that' требует сослагательного наклонения (Mandative Subjunctive), где смысловой глагол употребляется в базовой форме ('read') без окончания третьего лица '-s'."
    },
    {
      id: "b2-10",
      question: "I have difficulty _____ complex passive voices under high test stress.",
      options: ["to understand", "understanding", "of understanding", "for understanding"],
      answer: 1,
      explanationEn: "The idiomatic expression 'have difficulty' (or 'have trouble' / 'have a hard time') is structurally followed directly by a gerund ending in '-ing' ('understanding') rather than a 'to'-infinitive complement.",
      explanationEs: "La locución fija 'have difficulty' (tener dificultad) rige formalmente un complemento verbal en gerundio finalizado con el sufijo '-ing' ('understanding'), descartando por completo el infinitivo con 'to'.",
      explanationRu: "Устойчивое словосочетание 'have difficulty' (испытывать трудности с чем-либо) синтаксически требует после себя обязательного употребления герундия (глагола с окончанием '-ing') — 'understanding'."
    },
    ...b2Raw.map((raw, index) => {
      const qIndex = index + 11;
      return {
        id: `b2-${qIndex}`,
        question: raw[0],
        options: raw[1],
        answer: raw[2],
        explanationEn: raw[3],
        explanationEs: raw[4],
        explanationRu: raw[5]
      };
    })
  ],
  C1: [
    {
      id: "c1-1",
      question: "Under no circumstances _____ speak during the listening segment.",
      options: ["you should", "should you", "must you to", "you ought to"],
      answer: 1,
      explanationEn: "In formal English syntax, placing restrictive or negative prepositional phrases like 'Under no circumstances' at the start of a sentence triggers a mandatory inversion of the subject and auxiliary verb ('should you').",
      explanationEs: "En sintaxis inglesa formal, cuando una frase preposicional negativa o sumamente restrictiva como 'Under no circumstances' (Bajo ninguna circunstancia) encabeza una oración, se requiere de forma obligatoria la inversión entre el auxiliar modal y el sujeto ('should you').",
      explanationRu: "В формальном английском синтаксисе вынос ограничительной или отрицательной предложной группы, такой как 'Under no circumstances' (Ни при каких обстоятельствах), в начало предложения вызывает обязательную инверсию подлежащего и вспомогательного/модального глагола ('should you')."
    },
    {
      id: "c1-2",
      question: "So _____ was the noise that the library visitors could not read.",
      options: ["strong", "deafening", "such", "high"],
      answer: 1,
      explanationEn: "To highlight absolute intensity, C1 syntax employs inversions starting with 'So + Adjective'. Here, 'So deafening' is grammatically qualified and structurally linked to 'was the noise that...', emphasizing the overwhelming quality of the past event.",
      explanationEs: "Para enfatizar la intensidad absoluta en el registro superior, se emplea la inversión sintáctica formada por 'So + Adjetivo + Auxiliar + Sujeto + that'. El adjetivo descriptivo 'deafening' (ensordecedor) se acopla perfectamente a esta inversión de realce.",
      explanationRu: "Для стилистического выделения высокой интенсивности признака используется инвертированная конструкция 'So + прилагательное + вспомогательный глагол + подлежащее + союз that'. Прилагательное 'deafening' (оглушительный) идеально завершает данный смысловой и грамматический рисунок."
    },
    {
      id: "c1-3",
      question: "Had I _____ the potential risks, I would have aborted the flight.",
      options: ["foreseen", "foresee", "foreseeing", "had foreseen"],
      answer: 0,
      explanationEn: "This is an inverted third conditional. When the conditional conjunction 'If' is omitted, the auxiliary 'Had' is placed first, and the verb must stand in its past participle form ('foreseen'). This is equivalent to 'If I had foreseen'.",
      explanationEs: "Se trata de un tercer condicional invertido de carácter literario y formal. Al prescindir de la conjunción 'If' y realizar la inversión anteponiendo el auxiliar 'Had', el verbo principal adopta obligatoriamente su forma de participio pasado ('foreseen').",
      explanationRu: "Речь идет об инвертированном условном предложении третьего типа (Inverted Third Conditional). При опущении союза 'If' вспомогательный глагол 'Had' выносится вперед, а смысловой глагол ставится в форму причастия прошедшего времени (третью форму) — 'foreseen'."
    },
    {
      id: "c1-4",
      question: "You should avoid _____ complex templates on the writing test.",
      options: ["utilizing", "to utilize", "utilization of", "utilize"],
      answer: 0,
      explanationEn: "The verb 'avoid' is a transitive verb that syntactically commands a direct gerund complement ending in '-ing' ('utilizing') to indicate the activity being bypassed.",
      explanationEs: "El verbo transitivo de evasión o rechazo 'avoid' (evitar) exige gramaticalmente que la acción complementaria directa se formule como un gerundio finalizado en '-ing' ('utilizing').",
      explanationRu: "Переходный глагол 'avoid' (избегать) синтаксически управляет герундием (глаголом с окончанием '-ing') — 'utilizing' — для обозначения действия, которого умышленно избегают."
    },
    {
      id: "c1-5",
      question: "The project got delayed, _____ was a disaster for the corporation.",
      options: ["which", "that", "what", "it"],
      answer: 0,
      explanationEn: "In non-defining relative clauses that modify or comment on the entire preceding clause or statement, the relative pronoun must be 'which', always separated by a comma (', which was a disaster...'). The pronoun 'that' cannot be used here.",
      explanationEs: "En las cláusulas relativas explicativas cuya función es calificar o comentar la totalidad del enunciado que les precede, el único pronombre relativo admitido es 'which', antecedido siempre por una coma.",
      explanationRu: "В нелимитирующих придаточных предложениях, которые комментируют или дают оценку всей предшествующей ситуации целиком, используется только относительное местоимение 'which' с предшествующей запятой (', which...'). Местоимение 'that' в этой роли недопустимо."
    },
    {
      id: "c1-6",
      question: "It is essential that every candidate _____ their passport at the entrance.",
      options: ["presents", "present", "presenting", "will present"],
      answer: 1,
      explanationEn: "This is the Mandative Subjunctive. The adjective 'essential' paired with the subordinating conjunction 'that' requires the subjunctive mood in the subordinate clause, which manifests as the bare infinitive form ('present') regardless of candidate person or number.",
      explanationEs: "Esta oración ejemplifica el subjuntivo obligatorio (Mandative Subjunctive). El adjetivo de importancia 'essential' seguido de 'that' impone el uso de la forma base verbal infinitiva pura ('present') prescindiendo de marcas de tercera persona.",
      explanationRu: "Это сослагательное наклонение побуждения (Mandative Subjunctive). Прилагательное высокой важности 'essential' вкупе с союзом 'that' требует использования сослагательного наклонения в придаточной части, где глагол принимает только базовую форму инфинитива ('present') без окончания '-s'."
    },
    {
      id: "c1-7",
      question: "The company's performance was subpar, _____ requiring structural reforms.",
      options: ["thereby", "thus", "because", "nevertheless"],
      answer: 1,
      explanationEn: "The adverbial connector 'thus' is ideal for introducing a reduced participial clause denoting a logical consequence that flows directly from the main clause ('thus requiring structural reforms').",
      explanationEs: "El conector adverbial de consecuencia 'thus' (por lo tanto / de este modo) se utiliza formalmente para dar paso de forma fluida a una cláusula reducida de participio que expresa un resultado lógico directo.",
      explanationRu: "Связующее наречие следствия 'thus' (таким образом / тем самым) идеально подходит для введения сокращенного деепричастного оборота, выражающего логическое следствие или прямой результат действия из главной части."
    },
    {
      id: "c1-8",
      question: "Little _____ realize that the scientific findings were forged.",
      options: ["did we", "we did", "we had", "had we"],
      answer: 0,
      explanationEn: "Combining the restrictive negative adverb 'Little' in the initial emphasis slot forces Subject-Auxiliary Inversion. Since the reference is to a simple past state of awareness, we use the inversion 'did we' followed by the bare verb 'realize'.",
      explanationEs: "La colocación del adverbio restrictivo de conocimiento 'Little' (Poco / En absoluto) en posición de énfasis oracional activa una inversión de sujeto y auxiliar en pasado simple, requiriendo el orden 'did we' seguido del infinitivo base 'realize'.",
      explanationRu: "Вынос отрицательного наречия степени 'Little' (Мало кто / Едва ли) в начало предложения для смыслового акцента требует немедленной инверсии подлежащего и вспомогательного глагола прошедшего времени ('did we realize')."
    },
    {
      id: "c1-9",
      question: "She worked indefatigably, _____ achieving her high academic credentials.",
      options: ["thereby", "nonetheless", "whereas", "although"],
      answer: 0,
      explanationEn: "The formal adverb 'thereby' meaning 'by that means' or 'as a result of that action' is used in academic register to connect two actions, typically preceding an '-ing' participle clause ('thereby achieving...').",
      explanationEs: "El adverbio formal 'thereby' (con lo cual / de ese modo) indica el medio, instrumento o consecuencia de una actividad académica anterior, precediendo de manera canónica a un participio verbal continuo.",
      explanationRu: "Книжное наречие 'thereby' означает 'тем самым', 'посредством этого' или 'в результате чего' и используется в академическом и публицистическом стиле перед причастной формой на '-ing' для связи двух событий."
    },
    {
      id: "c1-10",
      question: "Try _____ he might, the speaker failed to convince the listeners.",
      options: ["as", "though", "like", "although"],
      answer: 0,
      explanationEn: "This is a concessive inversion pattern. The structure 'Verb (bare infinitive) + as (or though) + Subject + might' is a highly advanced concessive expression meaning 'even though he tried very hard'.",
      explanationEs: "Se trata de un patrón de inversión concesiva avanzada. La fórmula estructural 'Verbo base + as + Sujeto + might' (Try as he might) posee un significado equivalente a 'Por más que lo intentara' o 'Aunque se esforzara mucho'.",
      explanationRu: "Это уступительная инверсивная конструкция. Оборот 'глагол в начальной форме (Try) + союз as + подлежащее (he) + вспомогательный глагол (might)' является продвинутой уступительной структурой со значением 'Как бы он ни старался'."
    },
    ...c1Raw.map((raw, index) => {
      const qIndex = index + 11;
      return {
        id: `c1-${qIndex}`,
        question: raw[0],
        options: raw[1],
        answer: raw[2],
        explanationEn: raw[3],
        explanationEs: raw[4],
        explanationRu: raw[5]
      };
    })
  ],
  C2: [
    {
      id: "c2-1",
      question: "Were the core parameters _____ differently, the algorithm would have crashed.",
      options: ["to calibrate", "to be calibrated", "calibrating", "calibrated"],
      answer: 1,
      explanationEn: "This is a passive voice subjunctive within an inverted condition: 'Were [they] to be calibrated' is equivalent to the formal conditional 'If the core parameters were to be calibrated'. It requires the passive infinitive 'to be calibrated' to align with the non-agentive subject.",
      explanationEs: "Ejemplifica el uso del subjuntivo pasivo en una oración condicional invertida de registro erudito: 'Were [they] to be calibrated' equivale a 'Si los parámetros principales fuesen a calibrarse'. Exige el uso del infinitivo pasivo 'to be calibrated' para acoplarse con el sujeto inanimado.",
      explanationRu: "Оборот представляет собой страдательный залог сослагательного наклонения в инвертированном условном предложении: 'Were they to be calibrated' (Если бы параметры были откалиброваны...) эквивалентно книжной условной конструкции 'If they were to be calibrated'."
    },
    {
      id: "c2-2",
      question: "But for your timely intervention, the scenario _____ ended in absolute catastrophe.",
      options: ["would have", "had", "will have", "would be"],
      answer: 0,
      explanationEn: "The formal prepositional phrase 'But for + [noun]' introduces a negative hypothetical condition, carrying the exact meaning 'If it had not been for your intervention'. Because it relates to an alternate past outcome, the main clause requires the past conditional form 'would have ended'.",
      explanationEs: "La locución de registro alto 'But for' (De no haber sido por / A menos que mediara) establece una hipótesis condicional negativa en el pasado. Dado que se refiere a un desenlace de pasado alternativo no consumado, la consecuencia requiere obligatoriamente 'would have'.",
      explanationRu: "Официально-деловой предложный оборот 'But for + существительное' (Если бы не...) выражает гипотетическое отрицательное условие в прошлом. Поскольку описывается альтернативный исход прошлого, в главной части обязательно используется форма 'would have + причастие III'."
    },
    {
      id: "c2-3",
      question: "Such was the sheer complexity of the task _____ even senior managers failed.",
      options: ["as", "that", "than", "when"],
      answer: 1,
      explanationEn: "This is a correlative inversion of result: 'Such + was/were + subject + that-clause'. It positions the intense noun clause at the front of the sentence for dramatic emphasis, demanding the correlating connector 'that' to introduce the subsequent result.",
      explanationEs: "Se trata de una inversión correlativa de consecuencia literaria: 'Such + was + sujeto + that...'. Coloca la cualidad extrema al frente para brindar realce semántico, requiriendo de forma indiscutible el nexo coordinante 'that' para enunciar el efecto de dicha cualidad.",
      explanationRu: "Это инверсия следствия с коррелирующим союзом: 'Such was the complexity... that...' (Такова была сложность..., что даже...). Вынос существительного степени в начало предложения для стилистического эффекта грамматически требует союза 'that' в придаточном."
    },
    {
      id: "c2-4",
      question: "The director demanded that all relevant records _____ made accessible immediately.",
      options: ["are", "were", "be", "been"],
      answer: 2,
      explanationEn: "The verb 'demand' is a mandative verb that triggers the subjunctive mood when followed by a 'that'-clause. Consequently, the relative verb must take the base form 'be' in the passive voice, omitting modal auxiliaries or past indicators.",
      explanationEs: "El verbo de mandato directo 'demand' (demandar / exigir) impone la activación inmediata del modo subjuntivo en la cláusula con 'that'. En consecuencia, el auxiliar de voz pasiva debe figurar estrictamente en su forma infinitiva base pura 'be'.",
      explanationRu: "Глагол сильного требования 'demand' в главном предложении управляет сослагательным наклонением (Mandative Subjunctive) в придаточном. Из-за этого вспомогательный глагол пассивного залога используется исключительно в базовой форме инфинитива 'be'."
    },
    {
      id: "c2-5",
      question: "He was on _____ of resigning when the news of his promotion came.",
      options: ["the verge", "the point", "the threshold", "the boundary"],
      answer: 0,
      explanationEn: "The specific prepositional idiom 'on the verge of + [gerund / noun]' is lexicalized to indicate being on the absolute brink of an action or event. While 'on the point of' also exists, it is styled with different prepositional constraints in standard usage.",
      explanationEs: "La locución idiomática de inminencia es 'on the verge of' (al borde de / a punto de), la cual se complementa de forma natural con un sustantivo o gerundio de acción para representar una resolución casi consumada.",
      explanationRu: "Устойчивая идиоматическая конструкция 'on the verge of + герундий' (быть на грани или на пороге совершения чего-либо) используется для обозначения крайней близости совершения какого-то важного или резкого шага."
    },
    {
      id: "c2-6",
      question: "No sooner had the scientific team published their results _____ a critical review emerged.",
      options: ["when", "than", "then", "until"],
      answer: 1,
      explanationEn: "The negative correlation pattern 'No sooner [inversive past perfect] ... than ...' dictates that the consecutive event is introduced exclusively by 'than'. This indicates that the critical review appeared immediately upon publication.",
      explanationEs: "La correlatividad clásica literaria de 'No sooner' exige acoplarse con 'than' en la segunda parte de la oración. Sirve para describir dos acciones sucesivas instantáneas, descartando conectores como 'when' (que se asocia con 'Hardly').",
      explanationRu: "Строгая литературная парная связка 'No sooner... than...' употребляется для выражения немедленной последовательности действий (Не успели они..., как...). Использование союза 'when' здесь является грубой грамматической ошибкой."
    },
    {
      id: "c2-7",
      question: "Much as I _____ the elegance of your theory, it cannot be validated.",
      options: ["appreciate", "will appreciate", "appreciated", "have appreciated"],
      answer: 0,
      explanationEn: "The concessive formula 'Much as + subject + verb (present simple)' acts as an advanced, stylized equivalent of 'Even though I appreciate'. The verb must appear in its present indicative form to comment on a current state of thought.",
      explanationEs: "La fórmula concesiva elegante 'Much as + sujeto + verbo (en presente simple)' significa 'Por mucho que yo aprecie' o 'A pesar de que valoro'. El verbo principal debe situarse en presente indicativo de concordancia lógica ('appreciate').",
      explanationRu: "Сложная уступительная конструкция высокого стиля 'Much as I appreciate...' (Как бы сильно я ни ценил... / При всём уважении к...) требует за собой употребления глагола в форме настоящего времени (Present Simple) — 'appreciate'."
    },
    {
      id: "c2-8",
      question: "In no way _____ the candidate be allowed to repeat the speaking section.",
      options: ["can", "should", "will", "is"],
      answer: 1,
      explanationEn: "Positioning the restrictive negative adjunct 'In no way' at the opening of the sentence prompts Subject-Auxiliary Inversion. Under official examination rules, the modal 'should' is used here to depict formal obligation or strong recommendation indicating prohibited actions.",
      explanationEs: "Anteponer el adjunto negativo restrictivo 'In no way' (De ninguna manera) causa una inversión sintáctica. Por directrices de regulaciones oficiales, se prefiere el verbo modal de deber 'should' para plasmar una prohibición u obligación formal rigurosa.",
      explanationRu: "Помещение отрицательного обстоятельства 'In no way' (Никоим образом) во главе предложения вызывает инверсию. По смыслу официального запрета идеальным выбором становится вспомогательный модальный глагол 'should' перед подлежащим."
    },
    {
      id: "c2-9",
      question: "The newly enacted tax regulations are _____ with economic loopholes.",
      options: ["rife", "fraught", "filled", "bound"],
      answer: 0,
      explanationEn: "Lexically, the adjective 'rife' combines with the preposition 'with' to construct 'rife with', meaning abundant or filled with negative, undesirable, or contentious developments (like loopholes).",
      explanationEs: "Dilema de colocación léxica avanzada: el adjetivo 'rife' rige con la preposición 'with' ('rife with') para calificar que un determinado escenario, ley o área está infestado, plagado o lleno de anomalías perjudiciales.",
      explanationRu: "Продвинутая лексическая сочетаемость: прилагательное 'rife' управляет только предлогом 'with' ('rife with') для выражения того, что официальный документ или ситуация изобилует нежелательными лазейками или изъянами."
    },
    {
      id: "c2-10",
      question: "He argued that the core principles are _____ immutable.",
      options: ["virtually", "absolutely", "inherently", "totally"],
      answer: 2,
      explanationEn: "This is a C2-level semantic collocation. The adverb 'inherently' pairs meticulously with 'immutable' ('inherently immutable') to describe something that is intrinsically, fundamentally, and deeply unchangeable by its very nature.",
      explanationEs: "Se trata de una colocación refinada de nivel de maestría C2. El adverbio 'inherently' (intrínsecamente) se asocia de forma natural con 'immutable' (inmutable) para describir que una propiedad es inalterable por su propia esencia constitutiva.",
      explanationRu: "Высокоуровневая семантическая коллокация: наречие 'inherently' (по своей природе / изначально) образует устойчивое интеллектуальное словосочетание с прилагательным 'immutable' (неизменный), подчеркивая внутреннюю суть объекта."
    },
    ...c2Raw.map((raw, index) => {
      const qIndex = index + 11;
      return {
        id: `c2-${qIndex}`,
        question: raw[0],
        options: raw[1],
        answer: raw[2],
        explanationEn: raw[3],
        explanationEs: raw[4],
        explanationRu: raw[5]
      };
    })
  ]
};

export function getQuizQuestionsByLevel(level: string): QuizQuestion[] {
  const list = quizData[level];
  if (!list) return [];
  // Ensure we return exactly 53 questions as required by the user!
  const questions = list.slice(0, 53);
  
  // Shuffle option choices so correct answers are interspersed randomly across A, B, C, and D
  return questions.map(q => {
    const optionsWithIndices = q.options.map((option, index) => ({
      option,
      isCorrect: index === q.answer
    }));

    // Fisher-Yates shuffle
    for (let i = optionsWithIndices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = optionsWithIndices[i];
      optionsWithIndices[i] = optionsWithIndices[j];
      optionsWithIndices[j] = temp;
    }

    const shuffledOptions = optionsWithIndices.map(item => item.option);
    const newAnswerIndex = optionsWithIndices.findIndex(item => item.isCorrect);

    return {
      ...q,
      options: shuffledOptions,
      answer: newAnswerIndex !== -1 ? newAnswerIndex : q.answer
    };
  });
}
