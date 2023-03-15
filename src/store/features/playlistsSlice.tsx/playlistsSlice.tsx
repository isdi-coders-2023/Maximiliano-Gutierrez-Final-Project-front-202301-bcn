import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlaylistsData } from "../../../types/playlistsTypes/types";

const initialState: PlaylistsData = [];
const playlistsSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    loadPlaylists: (
      currentPlaylistState,
      action: PayloadAction<PlaylistsData>
    ) => [...action.payload],
  },
});

export const { loadPlaylists: loadPlaylistsActionCreator } =
  playlistsSlice.actions;
export const playlistsReducer = playlistsSlice.reducer;
