// import { ratedFilmMock } from "../../../mocks/filmsMocks";
// import { FilmData } from "../../../types";
// import {
//   addRatedFilmActionCreator,
//   filmsReducer,
//   initialFilmsState,
// } from "../filmsSlice";
// import { FilmsStateStructure } from "../types";

// describe("Given an addRatedFilm reducer", () => {
//   describe("When it receives a rated film", () => {
//     test("Then it should return a new state with the rated film", () => {
//       const ratedFilm = ratedFilmMock;

//       const initialTestFilmsState: FilmsStateStructure = initialFilmsState;

//       const expectedFilmsState: FilmsStateStructure = {
//         detailFilm: {} as FilmData,
//         filmsRated: [ratedFilm],
//         titleText: "",
//       };

//       const addRatedFilmAction = addRatedFilmActionCreator(ratedFilm);

//       const newFilmsState = filmsReducer(
//         initialTestFilmsState,
//         addRatedFilmAction
//       );

//       expect(expectedFilmsState).toStrictEqual(newFilmsState);
//     });
//   });
// });
