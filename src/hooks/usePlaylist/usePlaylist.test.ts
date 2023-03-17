import { renderHook } from "@testing-library/react";
import { errorHandlers } from "../../mocks/handlers";
import { mockPlaylistsExample } from "../../mocks/mocks";
import { server } from "../../mocks/server";
import Wrapper from "../../mocks/Wrapper";
import { loadPlaylistsActionCreator } from "../../store/features/playlistsSlice.tsx/playlistsSlice";
import { unsetIsLoadingActionCreator } from "../../store/features/uiSlice.tsx/uiSlice";
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
});
