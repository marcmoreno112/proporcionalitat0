export interface FilmData {
  poster_path: string | null;
  title: string;
  release_date: string;
  id: number;
}

export interface RatedFilmData extends FilmData {
  comment: string;
  rate: string;
}

export interface Questiondata {
  enunciado: string;
  respuestaCorrecta: string;
  respuestaIncorrecta: string;
  feedbackCorrecto: string;
  feedbackIncorrecto: string;
}

export type Formula =
  | "regla3"
  | "regla3inversa"
  | "aumento"
  | "disminución"
  | "%%"
  | "%total"
  | "%parcial";

export interface Question {
  id: number;
  enunciado: string;
  enunciadoFeedback: string;
  p1: Questiondata;
  p2: Questiondata;
  p3?: Questiondata;
  fórmula: {
    formulaType: Formula;
    respuestaCorrecta: string[];
  };
}
