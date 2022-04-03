import { rest } from "msw";
import DummyData from './dummy-data/stores.json'

export const handlers = [
  rest.get("/stores", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(DummyData)
    );
  }),
];
