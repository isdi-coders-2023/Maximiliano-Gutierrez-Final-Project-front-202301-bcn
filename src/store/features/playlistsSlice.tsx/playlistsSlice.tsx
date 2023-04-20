import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  type PlaylistsState,
  type PlaylistsData,
  Playlist,
  PlaylistUpdateStructure,
} from "../../../types/playlistsTypes/types";

const playlistState: PlaylistsState = {
  playlists: [],
  selectedPlaylist: {
    isCreatedByUser: false,
    id: "",
    playlistName: "",
    playlistPhoto: "",
    playlistBpm: 0,
    postedBy: "",
    songs: [],
  },
};

const playlistsSlice = createSlice({
  name: "playlist",
  initialState: playlistState,
  reducers: {
    loadPlaylists: (
      currentPlaylistState,
      action: PayloadAction<PlaylistsData>
    ): PlaylistsState => ({ ...playlistState, playlists: [...action.payload] }),
    getPlaylist: (
      currentPlaylistState: PlaylistsState,
      action: PayloadAction<Playlist>
    ): PlaylistsState => ({
      ...currentPlaylistState,
      selectedPlaylist: action.payload,
    }),
    deletePlaylist: (
      currentPlaylistState: PlaylistsState,
      action: PayloadAction<string>
    ) => ({
      ...playlistState,
      playlists: currentPlaylistState.playlists.filter(
        (playlist) => playlist.id !== action.payload
      ),
    }),
    addPlaylist: (
      currentPlaylistState: PlaylistsState,
      action: PayloadAction<Playlist>
    ): PlaylistsState => ({
      ...currentPlaylistState,
      playlists: [...currentPlaylistState.playlists, action.payload],
    }),
    editPlaylist: (
      currentPlaylistState: PlaylistsState,
      action: PayloadAction<PlaylistUpdateStructure>
    ): PlaylistsState => {
      const index = currentPlaylistState.playlists.findIndex(
        (playlist) => playlist.id === action.payload.id
      );
      if (index !== -1) {
        const updatedPlaylist: Playlist = {
          ...currentPlaylistState.playlists[index],
          ...action.payload,
        };
        currentPlaylistState.playlists[index] = updatedPlaylist;
        currentPlaylistState.selectedPlaylist = updatedPlaylist;
      }
      return currentPlaylistState;
    },
  },
});

export const playlistsReducer = playlistsSlice.reducer;

export const {
  loadPlaylists: loadPlaylistsActionCreator,
  getPlaylist: getPlaylistActionCreator,
  deletePlaylist: deletePlaylistActionCreator,
  addPlaylist: addPlaylistActionCreator,
  editPlaylist: editPlaylistActionCreator,
} = playlistsSlice.actions;
