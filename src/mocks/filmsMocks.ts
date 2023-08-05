import { FilmData } from "../types";

export const filmMock: FilmData = {
  title: "Super Mario Bros",
  poster_path:
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/b5fLqlXhypaD3A02ve5kOhmIx1I.jpg",
  release_date: "2023-03",
  id: 1,
};

export const filmsMock: FilmData[] = [
  filmMock,
  {
    title: "Mario & Luigi",
    poster_path: null,
    release_date: "2023-08",
    id: 2,
  },
];

export const mockTitleText = "Mario";
