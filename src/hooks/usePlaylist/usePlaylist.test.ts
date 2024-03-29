import { renderHook } from "@testing-library/react";
import { errorHandlers } from "../../mocks/handlers";
import { server } from "../../mocks/server";
import Wrapper from "../../mocks/Wrapper";
import { deletePlaylistActionCreator } from "../../store/features/playlistsSlice.tsx/playlistsSlice";
import {
  openModalActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/uiSlice.tsx/uiSlice";
import { store } from "../../store/store";
import usePlaylist from "./usePlaylist";
import "react-router-dom";

afterEach(() => {
  jest.clearAllMocks();
});

const spyDispatch = jest.spyOn(store, "dispatch");

const mockedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

describe("Given a usePlaylists custom hook", () => {
  describe("When it's invoked and the server is down", () => {
    test("Then it should call the dispatch", async () => {
      server.use(...errorHandlers);

      const {
        result: {
          current: { getPlaylist },
        },
      } = renderHook(() => usePlaylist(), { wrapper: Wrapper });

      await getPlaylist();

      expect(spyDispatch).toHaveBeenCalledTimes(3);
    });
  });

  describe("When the deleteExercise function is called and the response is failed", () => {
    test("Then it throw an error", async () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { deletePlaylist },
        },
      } = renderHook(() => usePlaylist(), { wrapper: Wrapper });

      await deletePlaylist("14");

      expect(spyDispatch).toHaveBeenCalledWith(
        openModalActionCreator({
          isSuccess: false,
          isError: true,
          message: "Playlist couldn't be deleted",
        })
      );
    });
    test("Then it should should call the unsetIsLoadingActionCreator discpath", async () => {
      const {
        result: {
          current: { deletePlaylist },
        },
      } = renderHook(() => usePlaylist(), { wrapper: Wrapper });

      await deletePlaylist("14");

      expect(spyDispatch).toHaveBeenCalledWith(unsetIsLoadingActionCreator());
    });
    test("Then it should call the dispatch", async () => {
      const {
        result: {
          current: { deletePlaylist },
        },
      } = renderHook(() => usePlaylist(), { wrapper: Wrapper });

      await deletePlaylist("14");

      expect(spyDispatch).toHaveBeenCalledWith(
        deletePlaylistActionCreator("14")
      );
    });
  });

  describe("When getPlaylist function is called and the response is successful", () => {
    test("Then it should call the dispatch with loadPlaylistsActionCreator", async () => {
      server.restoreHandlers(); // Restaurar los controladores de respuesta predeterminados

      const {
        result: {
          current: { getPlaylist },
        },
      } = renderHook(() => usePlaylist(), { wrapper: Wrapper });

      await getPlaylist();

      expect(spyDispatch).toHaveBeenCalledWith({
        payload: [
          {
            id: "10",
            playlistBpm: 0,
            playlistName: "Driving",
            playlistPhoto: "adambeyer.jpg",
            songs: [
              {
                artistName: "Adam Beyer",
                bpmTrack: 129,
                trackName: "Your Mind",
              },
            ],
          },
          {
            id: "11",
            playlistBpm: 0,
            playlistName: "Melodic Techno",
            playlistPhoto: "LaytonGiordani.jpg",
            songs: [
              {
                artistName: "Layton Girodani",
                bpmTrack: 132,
                trackName: "New Generation",
              },
            ],
          },
        ],
        type: "playlist/loadPlaylists",
      });
    });

    describe("When deletePlaylist function is called and the response is successful", () => {
      test("Then it should call the dispatch with deletePlaylistActionCreator", async () => {
        server.restoreHandlers();

        const {
          result: {
            current: { deletePlaylist },
          },
        } = renderHook(() => usePlaylist(), { wrapper: Wrapper });

        await deletePlaylist("10");

        expect(spyDispatch).toHaveBeenCalledWith(
          deletePlaylistActionCreator("10")
        );
      });
    });
  });
});
