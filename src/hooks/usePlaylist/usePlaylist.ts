import { useCallback } from "react";
import {
  loadPlaylistsActionCreator,
  getPlaylistActionCreator,
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
          throw new Error("We couldn't retrieve events. Try again!");
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

  return { getPlaylist, getPlaylistById };
};

export default usePlaylists;
