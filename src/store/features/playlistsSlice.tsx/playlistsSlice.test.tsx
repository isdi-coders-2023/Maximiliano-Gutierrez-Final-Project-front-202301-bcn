import { PlaylistsData } from "../../../types/playlistsTypes/types";
import { playlistsReducer, loadPlaylistsActionCreator } from "./playlistsSlice";

const playlists: PlaylistsData = [
  {
    playlistName: "Driving",
    playlistPhoto: "adambeyer.jpg",
    playlistBpm: 0,
    id: "",
    postedBy: "",
    songs: [
      { artistName: "Adam Beyer", trackName: "Your Mind", bpmTrack: 129 },
    ],
  },
];

describe("Given a playListsReducer", () => {
  describe("When it receives a loadPlaylist action", () => {
    test("Then should return the initial state", () => {
      const newState = playlistsReducer(
        {
          playlists: [],
          selectedPlaylist: {
            id: "",
            playlistName: "",
            playlistPhoto: "",
            playlistBpm: 0,
            postedBy: "",
            songs: [],
          },
        },
        loadPlaylistsActionCreator(playlists)
      );
      expect(newState.playlists).toEqual(playlists);
    });
  });
});
