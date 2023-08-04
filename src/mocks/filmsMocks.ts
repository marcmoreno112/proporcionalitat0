import { FilmData } from "../types";

export const filmMock: FilmData = {
  filmTitle: "Super Mario Bros",
  posterUrl:
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/b5fLqlXhypaD3A02ve5kOhmIx1I.jpg",
  releaseDate: "2023-03",
};

export const filmsMock: FilmData[] = [
  filmMock,
  {
    filmTitle: "Atrapaalmas",
    posterUrl:
      "https://www.themoviedb.org/t/p/w1280/nxXdasJvK2wdEW5JHEOeezIzjnH.jpg",
    releaseDate: "2023-08",
  },
];
