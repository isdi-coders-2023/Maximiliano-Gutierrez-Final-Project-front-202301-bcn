import { rest } from "msw";

const routes = {
  users: "users/",
  login: "login/",
};

const apiUrl = process.env.REACT_APP_URL_API;

export const handlers = [
  rest.post(`${apiUrl}${routes.users}${routes.login}`, async (req, res, ctx) =>
    res(ctx.status(200), ctx.json({ token: "dasnvjeuthgbd984bgoñs" }))
  ),
];
