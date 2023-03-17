import { useCallback } from "react";
import { loadPlaylistsActionCreator } from "../../store/features/playlistsSlice.tsx/playlistsSlice";
import {
  openModalActionCreator,
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/uiSlice.tsx/uiSlice";
import { useAppDispatch } from "../../store/hooks";
import { PlaylistsDataStructure } from "../../types/playlistsTypes/types";

const apiUrl = process.env.REACT_APP_URL_API;
const pathPlaylists = "playlists/";
const getPlaylistEndpoint = "/";

const usePlaylists = () => {
  const dispatch = useAppDispatch();

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

  return { getPlaylist };
};

export default usePlaylists;
