import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  type PlaylistsState,
  type PlaylistsData,
  Playlist,
} from "../../../types/playlistsTypes/types";

const playlistState: PlaylistsState = {
  playlists: [],
  selectedPlaylist: {
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
    ): PlaylistsState => ({
      ...playlistState,
      playlists: currentPlaylistState.playlists.filter(
        (playlist) => playlist.id !== action.payload
      ),
    }),
  },
});

export const playlistsReducer = playlistsSlice.reducer;

export const {
  loadPlaylists: loadPlaylistsActionCreator,
  getPlaylist: getPlaylistActionCreator,
  deletePlaylist: deletePlaylistActionCreator,
} = playlistsSlice.actions;
