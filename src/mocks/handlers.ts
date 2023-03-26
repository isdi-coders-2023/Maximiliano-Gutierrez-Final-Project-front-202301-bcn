import { rest } from "msw";
import { mockPlaylistsExample } from "./mocks";

const routes = {
  users: "users/",
  login: "login/",
  playlists: "playlists/",
  delete: "delete/",
};

const apiUrl = process.env.REACT_APP_URL_API;

export const handlers = [
  rest.post(`${apiUrl}${routes.users}${routes.login}`, async (req, res, ctx) =>
    res(ctx.status(200), ctx.json({ token: "dasnvjeuthgbd984bgoñs" }))
  ),

  rest.get(
    `${process.env.REACT_APP_URL_API}${routes.playlists}`,
    async (req, res, ctx) =>
      res(ctx.status(200), ctx.json({ playlists: mockPlaylistsExample }))
  ),
];

export const errorHandlers = [
  rest.get(
    `${process.env.REACT_APP_URL_API}${routes.playlists}`,
    (req, res, ctx) => {
      return res(ctx.status(404));
    }
  ),
];

export const errorDeleteHandler = [
  rest.delete(`${apiUrl}/playlists/delete/*`, async (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: "The playlist couldn't be deleted" })
    );
  }),
];
