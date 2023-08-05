import "@testing-library/jest-dom";

import { server } from "./mocks/server.ts";
import { handlers } from "./mocks/handlers.ts";

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers(...handlers));

afterAll(() => server.close());
