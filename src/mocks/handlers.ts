import { rest } from "msw";
import { searchFilmsApiUrl } from "../hooks/useFilms/useFilms";
import { filmsMock } from "./filmsMocks";

export const handlers = [
  rest.get(`${searchFilmsApiUrl}`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ results: filmsMock }));
  }),
];
