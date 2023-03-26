import { renderHook } from "@testing-library/react";
import { errorDeleteHandler, errorHandlers } from "../../mocks/handlers";
import { mockPlaylistsExample } from "../../mocks/mocks";
import { server } from "../../mocks/server";
import Wrapper from "../../mocks/Wrapper";
import { loadPlaylistsActionCreator } from "../../store/features/playlistsSlice.tsx/playlistsSlice";
import {
  openModalActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/uiSlice.tsx/uiSlice";
import { store } from "../../store/store";
import usePlaylists from "./usePlaylist";

afterEach(() => {
  jest.clearAllMocks();
});

const spyDispatch = jest.spyOn(store, "dispatch");

describe("Given a usePlaylists custom hook", () => {
  describe("When it's invoked", () => {
    test("Then it should call the dispatch", async () => {
      const {
        result: {
          current: { getPlaylist },
        },
      } = renderHook(() => usePlaylists(), { wrapper: Wrapper });

      await getPlaylist();

      expect(spyDispatch).toHaveBeenCalledWith(
        loadPlaylistsActionCreator(mockPlaylistsExample)
      );
    });
  });

  describe("When it's invoked and the server is down", () => {
    test("Then it should call the dispatch", async () => {
      server.use(...errorHandlers);

      const {
        result: {
          current: { getPlaylist },
        },
      } = renderHook(() => usePlaylists(), { wrapper: Wrapper });

      await getPlaylist();

      expect(spyDispatch).toHaveBeenCalledWith(unsetIsLoadingActionCreator());
    });
  });

  describe("When the deleteExercise function is called and the response is failed", () => {
    test("Then it throw an error", async () => {
      server.use(...errorDeleteHandler);

      const {
        result: {
          current: { deletePlaylist },
        },
      } = renderHook(() => usePlaylists(), { wrapper: Wrapper });

      await deletePlaylist("14");

      expect(spyDispatch).toHaveBeenCalledWith(
        openModalActionCreator({
          isSuccess: false,
          isError: true,
          message: "Playlist couldn't be deleted",
        })
      );
    });
  });
});
