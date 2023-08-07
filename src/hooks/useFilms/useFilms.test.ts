import { renderHook } from "@testing-library/react";
import useFilms from "./useFilms";
import { filmsMock, mockTitleText } from "../../mocks/filmsMocks";
import { providerWrapper } from "../../utils/testUtils";

describe("Given a getFiltered function", () => {
  describe("When it is called", () => {
    test("Then it should return a list of films", async () => {
      const {
        result: {
          current: { getFilteredFilms },
        },
      } = renderHook(() => useFilms(), { wrapper: providerWrapper });

      const films = await getFilteredFilms(mockTitleText);

      const expectedFilms = filmsMock;

      expect(expectedFilms).toStrictEqual(films?.results);
    });
  });
});
