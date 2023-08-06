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
