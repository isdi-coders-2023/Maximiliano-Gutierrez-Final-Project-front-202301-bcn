import {
  Playlist,
  PlaylistsData,
  PlaylistsDataStructure,
  PlaylistsState,
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

export const mockTestDeletePlaylistById1: PlaylistsData = [
  {
    playlistName: "Driving",
    playlistPhoto: "adambeyer.jpg",
    playlistBpm: 0,
    id: "10",
    songs: [
      {
        artistName: "Adam Beyer",
        trackName: "Your Mind",
        bpmTrack: 129,
      },
    ],
  },
];

export const mockTestDeletePlaylistById2: PlaylistsData = [
  {
    playlistName: "Melodic Techno",
    playlistPhoto: "LaytonGiordani.jpg",
    playlistBpm: 0,
    id: "11",
    songs: [
      {
        artistName: "Layton Girodani",
        trackName: "New Generation",
        bpmTrack: 132,
      },
    ],
  },
];

export const mockTestDeletePlaylistByIdList: PlaylistsData = [
  mockTestDeletePlaylistById1[0],
  mockTestDeletePlaylistById2[0],
];

export const mockPlaylistCreate: Playlist = {
  playlistName: "Peak Time",
  playlistPhoto: "Enrico Sangiuliano.jpg",
  playlistBpm: 0,
  id: "10",
  postedBy: "",
  songs: [
    {
      artistName: "Adam Beyer",
      trackName: "Your Mind",
      bpmTrack: 129,
    },
  ],
};

export const mockPlaylists: PlaylistsState = {
  playlists: [mockTestDeletePlaylistById1[0], mockTestDeletePlaylistById2[0]],
  selectedPlaylist: {
    playlistName: "Driving",
    playlistPhoto: "adambeyer.jpg",
    playlistBpm: 0,
    id: "10",
    songs: [
      {
        artistName: "Adam Beyer",
        trackName: "Your Mind",
        bpmTrack: 129,
      },
    ],
  },
};

export const usePlaylistMock = {
  createPlaylist: jest.fn(),
  deletePlaylistById: jest.fn(),
  editPlaylistById: jest.fn(),
  getPlaylistById: jest.fn(),
  getPlaylists: jest.fn(),
};
