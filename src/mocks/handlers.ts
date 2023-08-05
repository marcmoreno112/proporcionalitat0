import { rest } from "msw";
import { apiUrl } from "../hooks/useFilms/useFilms";
import { filmsMock } from "./filmsMocks";

export const handlers = [
  rest.get(`${apiUrl}`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ results: filmsMock }));
  }),
];
