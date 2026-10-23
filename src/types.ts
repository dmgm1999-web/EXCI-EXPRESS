/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'en' | 'es';

export type Skill = 'listening' | 'reading' | 'writing' | 'speaking';

export type Level = 'easy' | 'medium' | 'hard';

export interface Practice {
  id: string;
  skill: Skill;
  level: Level;
  title: string;
  description: string;
  content: string; // The text to read, or audio URL (simulation), or prompt
  questions?: Question[];
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: string;
}

export interface UserProgress {
  practiceId: string;
  score: number; // Band 0-9
  cefr: string; // A1-C2
  completedAt: Date;
}

export interface EvaluationResult {
  band: number;
  cefr: string;
  feedback: string;
  strengths: string[];
  improvements: string[];
  lang?: string;
}

export interface VideoClass {
  id: string;
  titleEs: string;
  titleEn: string;
  descriptionEs: string;
  descriptionEn: string;
  categoryEs: string;
  categoryEn: string;
  duration: string;
  level: string;
  modulo?: string;
  leccion?: string;
}
