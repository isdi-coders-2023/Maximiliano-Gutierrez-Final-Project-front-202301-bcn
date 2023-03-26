import { PlaylistsData } from "../../../types/playlistsTypes/types";
import {
  playlistsReducer,
  loadPlaylistsActionCreator,
  deletePlaylistActionCreator,
} from "./playlistsSlice";

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

  describe("When it receives a state and the deletePlaylist action with the id '11'", () => {
    const testDeletePlaylist: PlaylistsData = [
      {
        playlistName: "Driving",
        playlistPhoto: "adambeyer.jpg",
        playlistBpm: 0,
        id: "10",
        songs: [
          { artistName: "Adam Beyer", trackName: "Your Mind", bpmTrack: 129 },
        ],
      },
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
    test("Then should return the state without the playlist with the id '11'", () => {
      const newState = playlistsReducer(
        {
          playlists: testDeletePlaylist,
          selectedPlaylist: {
            id: "",
            playlistName: "",
            playlistPhoto: "",
            playlistBpm: 0,
            postedBy: "",
            songs: [],
          },
        },
        deletePlaylistActionCreator("11")
      );
      expect(newState.playlists).toEqual([
        {
          playlistName: "Driving",
          playlistPhoto: "adambeyer.jpg",
          playlistBpm: 0,
          id: "10",
          songs: [
            { artistName: "Adam Beyer", trackName: "Your Mind", bpmTrack: 129 },
          ],
        },
      ]);
    });
  });
});
