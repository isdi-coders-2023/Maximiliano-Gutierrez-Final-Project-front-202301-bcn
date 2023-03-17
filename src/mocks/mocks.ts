import {
  PlaylistsData,
  PlaylistsDataStructure,
} from "../types/playlistsTypes/types";
import { UiState } from "../types/ui/ui";

export const mockPlaylistsExample: PlaylistsData = [
  {
    playlistName: "Driving",
    playlistPhoto: "adambeyer.jpg",
    playlistBpm: 0,
    id: "",
    songs: [
      { artistName: "Adam Beyer", trackName: "Your Mind", bpmTrack: 129 },
    ],
  },
];

export const mockPlaylistsExample2: PlaylistsData = [
  {
    playlistName: "Melodic Techno",
    playlistPhoto: "hernancattaneo.jpg",
    playlistBpm: 120,
    id: "",
    songs: [
      { artistName: "Hernan Cattaneo", trackName: "Altair", bpmTrack: 120 },
    ],
  },
];

export const mockPlaylistsList: PlaylistsDataStructure = {
  playlists: [mockPlaylistsExample[0], mockPlaylistsExample2[0]],
};

export const mockIsLoading: UiState = {
  isLoading: false,
  modal: { isError: false, isSuccess: false, message: "" },
};

export const preloadedUi: UiState = {
  modal: {
    isError: false,
    message: "Deletetion success",
    isSuccess: true,
  },
  isLoading: true,
};

export const preloaderErrorUi: UiState = {
  modal: {
    isError: true,
    isSuccess: false,
    message: "Error to load playlists",
  },
  isLoading: false,
};

export const preloadedStateLoggedIn = {
  user: {
    email: "",
    id: "",
    isLogged: true,
    token: "",
  },
};
