import { filmMock } from "../../../mocks/filmsMocks";
import {
  filmsReducer,
  initialFilmsState,
  selectDetailFilmActionCreator,
} from "../filmsSlice";
import { FilmsStateStructure } from "../types";

describe("Given a selectDetailFilm reducer", () => {
  describe("When it receives a film", () => {
    test("Then it should return a new state with the film", () => {
      const film = filmMock;

      const initialTestFilmsState: FilmsStateStructure = initialFilmsState;

      const expectedFilmsState: FilmsStateStructure = {
        detailFilm: film,
        filmsRated: [],
        titleText: "",
      };

      const selectDetailFilmAction = selectDetailFilmActionCreator(film);

      const newFilmsState = filmsReducer(
        initialTestFilmsState,
        selectDetailFilmAction
      );

      expect(expectedFilmsState).toStrictEqual(newFilmsState);
    });
  });
});
