import { renderHook } from "@testing-library/react";
import useFilms from "./useFilms";
import { filmsMock, mockTitleText } from "../../mocks/filmsMocks";
import { providerWrapper } from "../../utils/testUtils";

describe("Given a getFilms function", () => {
  describe("When it is called", () => {
    test("Then it should return a list of films", async () => {
      const {
        result: {
          current: { getFilms },
        },
      } = renderHook(() => useFilms(), { wrapper: providerWrapper });

      const films = await getFilms(mockTitleText);

      const expectedFilms = filmsMock;

      expect(films?.results).toStrictEqual(expectedFilms);
    });
  });
});
