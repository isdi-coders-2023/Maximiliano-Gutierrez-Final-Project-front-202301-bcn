import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  loadPlaylistsActionCreator,
  getPlaylistActionCreator,
  deletePlaylistActionCreator,
  addPlaylistActionCreator,
  editPlaylistActionCreator,
} from "../../store/features/playlistsSlice.tsx/playlistsSlice";
import {
  openModalActionCreator,
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/uiSlice.tsx/uiSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  ApiResponseStructure,
  Playlist,
  PlaylistsDataStructure,
  PlaylistUpdateStructure,
} from "../../types/playlistsTypes/types";

const apiUrl = process.env.REACT_APP_URL_API;
const pathPlaylists = "playlists/";
const getPlaylistEndpoint = "/";
const deletePlaylistEndpoint = "delete/";
const createPlaylistEndpoint = "create/";
const getUserPlaylistsEndpoint = "users/";
const editPlaylistEndpoint = "edit/";

const usePlaylists = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  const getPlaylist = useCallback(async (): Promise<Playlist[] | undefined> => {
    try {
      dispatch(setIsLoadingActionCreator());

      const response = await fetch(
        `${apiUrl}${pathPlaylists}${getPlaylistEndpoint}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json; charset=UTF-8" },
        }
      );

      if (!response.ok) {
        throw new Error("We couldn't retrieve playlists. Try again!");
      }

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
      return (error as Error).message as unknown as Playlist[];
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
            message: "Playlist couldn't be deleted",
          })
        );
      }
    },
    [dispatch, token]
  );

  const getUserPlaylists = useCallback(async () => {
    try {
      dispatch(setIsLoadingActionCreator());

      const response = await fetch(
        `${apiUrl}${pathPlaylists}${getUserPlaylistsEndpoint}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("We couldn't retrieve events. Try again!");
      }

      const { playlists } = (await response.json()) as PlaylistsDataStructure;

      dispatch(unsetIsLoadingActionCreator());
      dispatch(loadPlaylistsActionCreator(playlists));
    } catch (error) {
      dispatch(unsetIsLoadingActionCreator());
      dispatch(
        openModalActionCreator({
          isError: true,
          isSuccess: false,
          message: "We couldn't retrieve playlists. Try again!",
        })
      );
      return (error as Error).message;
    }
  }, [dispatch, token]);

  const createPlaylist = async (playlistData: FormData) => {
    try {
      dispatch(setIsLoadingActionCreator());

      const response = await fetch(
        `${apiUrl}${pathPlaylists}${createPlaylistEndpoint}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: playlistData,
        }
      );

      const { playlist } = (await response.json()) as ApiResponseStructure;

      dispatch(unsetIsLoadingActionCreator());
      dispatch(
        openModalActionCreator({
          isError: false,
          isSuccess: true,
          message: "The playlist has been created!",
        })
      );

      navigate(`/details/${playlist.id}`);
    } catch (error) {
      dispatch(unsetIsLoadingActionCreator());
      dispatch(
        openModalActionCreator({
          isError: true,
          isSuccess: false,
          message: "The playlist couldn't be created.",
        })
      );
    }
  };

  const addPlaylist = useCallback(
    async (newPlaylist: Playlist) => {
      dispatch(addPlaylistActionCreator(newPlaylist));
    },
    [dispatch]
  );

  const editPlaylistById = useCallback(
    async (id: string, updatedPlaylistData: PlaylistUpdateStructure) => {
      try {
        dispatch(setIsLoadingActionCreator());

        const response = await fetch(
          `${apiUrl}${pathPlaylists}${editPlaylistEndpoint}${id}`,
          {
            method: "PATCH",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedPlaylistData),
          }
        );

        if (!response.ok) {
          throw new Error("The playlist couldn't be updated");
        }

        const { playlist } = (await response.json()) as ApiResponseStructure;

        dispatch(unsetIsLoadingActionCreator());
        dispatch(editPlaylistActionCreator(playlist));
        dispatch(
          openModalActionCreator({
            isError: false,
            isSuccess: true,
            message: "The playlist has been updated!",
          })
        );
      } catch (error) {
        dispatch(unsetIsLoadingActionCreator());
        dispatch(
          openModalActionCreator({
            isError: true,
            isSuccess: false,
            message: "The playlist couldn't be updated.",
          })
        );
      }
    },
    [dispatch, token]
  );

  return {
    getPlaylist,
    getPlaylistById,
    deletePlaylist,
    getUserPlaylists,
    createPlaylist,
    addPlaylist,
    editPlaylistById,
  };
};

export default usePlaylists;
