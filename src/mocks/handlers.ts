import { rest } from "msw";
import { mockPlaylists } from "./mocks";

const routes = {
  users: "users/",
  login: "login/",
  playlists: "/playlists/",
  delete: "delete/",
  create: "create/",
  id: ":id",
  detail: "detail/",
  register: "register",
};

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_URL_API}${routes.users}${routes.login}`,
    (req, res, ctx) => res(ctx.status(200), ctx.json({ token: "leomatioli" }))
  ),
  rest.get(
    `${process.env.REACT_APP_URL_API}${routes.playlists}`,
    (req, res, ctx) => res(ctx.status(200), ctx.json(mockPlaylists))
  ),
  rest.post(
    `${process.env.REACT_APP_URL_API}${routes.users}${routes.register}`,
    (req, res, ctx) => res(ctx.status(200))
  ),
  rest.get(
    `${process.env.REACT_APP_URL_API}${routes.playlists}${routes.users}`,
    (req, res, ctx) => res(ctx.status(200), ctx.json(mockPlaylists))
  ),
  rest.delete(
    `${process.env.REACT_APP_URL_API}${routes.playlists}${routes.delete}${routes.id}`,
    (req, res, ctx) => res(ctx.status(200))
  ),
  rest.get(
    `${process.env.REACT_APP_URL_API}${routes.playlists}${routes.id}`,
    (req, res, ctx) => res(ctx.status(200), ctx.json(mockPlaylists))
  ),
];

export const errorHandlers = [
  rest.get(
    `${process.env.REACT_APP_URL_API}${routes.playlists}`,
    (req, res, ctx) => res(ctx.status(404))
  ),
  rest.get(
    `${process.env.REACT_APP_URL_API}${routes.playlists}${routes.users}`,
    (req, res, ctx) => res(ctx.status(400))
  ),
  rest.post(
    `${process.env.REACT_APP_URL_API}${routes.users}${routes.register}`,
    (req, res, ctx) => res(ctx.status(400))
  ),
  rest.delete(
    `${process.env.REACT_APP_URL_API}${routes.playlists}${routes.delete}${routes.id}`,
    (req, res, ctx) => res(ctx.status(400))
  ),
  rest.get(
    `${process.env.REACT_APP_URL_API}${routes.playlists}${routes.id}`,
    (req, res, ctx) => res(ctx.status(400))
  ),
];
