import {
  changeTitleTextActionCreator,
  filmsReducer,
  initialFilmsState,
} from "../filmsSlice";
import { FilmsStateStructure } from "../types";

describe("Given a changeTitleText reducer", () => {
  describe("When it receives a 'Flash' text", () => {
    test("Then it should return a new state with the titleText changed", () => {
      const searchText = "Flash";

      const initialTestFilmsState: FilmsStateStructure = initialFilmsState;

      const expectedFilmsState: FilmsStateStructure = {
        titleText: searchText,
        filmsRated: [],
      };

      const changeTitleTextAction = changeTitleTextActionCreator(searchText);

      const newFilmsState = filmsReducer(
        initialTestFilmsState,
        changeTitleTextAction
      );

      expect(expectedFilmsState).toStrictEqual(newFilmsState);
    });
  });
});
