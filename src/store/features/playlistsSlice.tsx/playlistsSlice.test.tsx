import { PlaylistsData } from "../../../types/playlistsTypes/types";
import { playlistsReducer, loadPlaylistsActionCreator } from "./playlistsSlice";

const playlists: PlaylistsData = [
  {
    playlistName: "Driving",
    playlistPhoto: "adambeyer.jpg",
    playlistBpm: 0,
    songs: [
      { artistName: "Adam Beyer", trackName: "Your Mind", bpmTrack: 129 },
    ],
  },
];

describe("Given a playListsReducer", () => {
  describe("When it receives a loadPlaylist action", () => {
    test("Then should return the initial state", () => {
      const newState = playlistsReducer(
        [],
        loadPlaylistsActionCreator(playlists)
      );
      expect(newState).toEqual(playlists);
    });
  });

  describe("When it receives a new state and the action to load the playlists", () => {
    test("Then it should return at least one playlist", () => {
      const newState = playlistsReducer(
        playlists,
        loadPlaylistsActionCreator(playlists)
      );
      expect(newState).toHaveLength(1);
    });
  });
});
