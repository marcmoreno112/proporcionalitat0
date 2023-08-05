import { rest } from "msw";
import { apiUrl } from "../hooks/useFilms/useFilms";
import { filmsMock, mockTitleText } from "./filmsMocks";

const apiKey = import.meta.env.VITE_API_KEY;

const titleText = mockTitleText;

export const handlers = [
  rest.get(
    `${apiUrl}?api_key=${apiKey}&query=${titleText}`,
    (_req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ films: filmsMock }));
    }
  ),
];
