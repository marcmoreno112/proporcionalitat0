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

export interface Question {
  id: number;
  enunciado: string;
  p1: Questiondata;
  p2: Questiondata;
  fórmula: {
    formulaType: "regla3" | "regla3inversa";
    respuestaCorrecta: string[];
  };
}
