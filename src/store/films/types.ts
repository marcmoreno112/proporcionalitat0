import { FilmData, RatedFilmData } from "../../types";

export interface FilmsStateStructure {
  titleText: string;
  filmsRated: RatedFilmData[];
  detailFilm: FilmData;
}
