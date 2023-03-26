import { useCallback } from "react";
import {
  loadPlaylistsActionCreator,
  getPlaylistActionCreator,
  deletePlaylistActionCreator,
} from "../../store/features/playlistsSlice.tsx/playlistsSlice";
import {
  openModalActionCreator,
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/uiSlice.tsx/uiSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  Playlist,
  PlaylistsDataStructure,
} from "../../types/playlistsTypes/types";

const apiUrl = process.env.REACT_APP_URL_API;
const pathPlaylists = "playlists/";
const getPlaylistEndpoint = "/";
const deletePlaylistEndpoint = "delete/";

const usePlaylists = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.user);

  const getPlaylist = useCallback(async () => {
    try {
      dispatch(setIsLoadingActionCreator());

      const response = await fetch(
        `${apiUrl}${pathPlaylists}${getPlaylistEndpoint}`
      );

      const { playlists } = (await response.json()) as PlaylistsDataStructure;

      dispatch(unsetIsLoadingActionCreator());
      dispatch(loadPlaylistsActionCreator(playlists));
    } catch (error) {
      dispatch(unsetIsLoadingActionCreator());
      dispatch(
        openModalActionCreator({
          isError: true,
          isSuccess: false,
          message: "Error to load playlists",
        })
      );
      return (error as Error).message;
    }
  }, [dispatch]);

  const getPlaylistById = useCallback(
    async (id: string) => {
      try {
        dispatch(setIsLoadingActionCreator());

        const response = await fetch(`${apiUrl}${pathPlaylists}${id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("We couldn't retrieve playlists. Try again!");
        }

        const playlist = (await response.json()) as { playlist: Playlist };

        dispatch(unsetIsLoadingActionCreator());
        dispatch(getPlaylistActionCreator(playlist.playlist));
      } catch (error) {
        dispatch(unsetIsLoadingActionCreator());
        dispatch(
          openModalActionCreator({
            isError: true,
            isSuccess: false,
            message: "Error to load playlist",
          })
        );
      }
    },
    [dispatch, token]
  );

  const deletePlaylist = useCallback(
    async (id: string) => {
      try {
        dispatch(setIsLoadingActionCreator());

        const response = await fetch(
          `${apiUrl}${pathPlaylists}${deletePlaylistEndpoint}${id}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("The playlist couldn't be deleted");
        }

        dispatch(unsetIsLoadingActionCreator());
        dispatch(deletePlaylistActionCreator(id));
        dispatch(
          openModalActionCreator({
            isError: false,
            isSuccess: true,
            message: "Playlist delete correctly",
          })
        );
      } catch (error) {
        dispatch(unsetIsLoadingActionCreator());
        dispatch(
          openModalActionCreator({
            isSuccess: false,
            isError: true,
            message: "Playlist delete correctly",
          })
        );
      }
    },
    [dispatch, token]
  );

  return { getPlaylist, getPlaylistById, deletePlaylist };
};

export default usePlaylists;

// Give me a given when then test for the deletePlaylist function
