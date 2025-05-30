import { FilmData, Question, RatedFilmData } from "../../types";

export interface FilmsStateStructure {
  titleText: string;
  filmsRated: RatedFilmData[];
  detailFilm: FilmData;
}

export interface ProporStateStructure {
  titleText: string;
  filmsRated: Question[];
  detailFilm: FilmData;
}
