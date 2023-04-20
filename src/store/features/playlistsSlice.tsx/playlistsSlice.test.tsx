import {
  Playlist,
  PlaylistsData,
  PlaylistUpdateStructure,
} from "../../../types/playlistsTypes/types";
import {
  playlistsReducer,
  loadPlaylistsActionCreator,
  deletePlaylistActionCreator,
  editPlaylistActionCreator,
  addPlaylistActionCreator,
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

    describe("When it receives a state and the editPlaylist action with an updated playlist", () => {
      const testPlaylists: PlaylistsData = [
        {
          id: "10",
          playlistName: "Driving",
          playlistPhoto: "adambeyer.jpg",
          playlistBpm: 0,
          postedBy: "",
          songs: [
            { artistName: "Adam Beyer", trackName: "Your Mind", bpmTrack: 129 },
          ],
        },
        {
          id: "11",
          playlistName: "Melodic Techno",
          playlistPhoto: "LaytonGiordani.jpg",
          playlistBpm: 0,
          postedBy: "",
          songs: [
            {
              artistName: "Layton Girodani",
              trackName: "New Generation",
              bpmTrack: 132,
            },
          ],
        },
      ];

      const updatedPlaylist: PlaylistUpdateStructure = {
        id: "11",
        playlistName: "Updated Melodic Techno",
      };

      test("Then should return the state with the updated playlist", () => {
        const newState = playlistsReducer(
          {
            playlists: testPlaylists,
            selectedPlaylist: testPlaylists[1],
          },
          editPlaylistActionCreator(updatedPlaylist)
        );

        expect(newState.playlists[1]).toEqual({
          ...testPlaylists[1],
          ...updatedPlaylist,
        });

        expect(newState.selectedPlaylist).toEqual({
          ...testPlaylists[1],
          ...updatedPlaylist,
        });
      });

      describe("When it receives a state and the addPlaylist action with a new playlist", () => {
        const testPlaylists: PlaylistsData = [
          {
            id: "10",
            playlistName: "Driving",
            playlistPhoto: "adambeyer.jpg",
            playlistBpm: 0,
            postedBy: "",
            songs: [
              {
                artistName: "Adam Beyer",
                trackName: "Your Mind",
                bpmTrack: 129,
              },
            ],
          },
          {
            id: "11",
            playlistName: "Melodic Techno",
            playlistPhoto: "LaytonGiordani.jpg",
            playlistBpm: 0,
            postedBy: "",
            songs: [
              {
                artistName: "Layton Girodani",
                trackName: "New Generation",
                bpmTrack: 132,
              },
            ],
          },
        ];

        const newPlaylist: Playlist = {
          id: "12",
          playlistName: "New Playlist",
          playlistPhoto: "newPlaylist.jpg",
          playlistBpm: 0,
          postedBy: "",
          songs: [
            {
              artistName: "New Artist",
              trackName: "New Song",
              bpmTrack: 120,
            },
          ],
        };

        test("Then should return the state with the new playlist added", () => {
          const newState = playlistsReducer(
            {
              playlists: testPlaylists,
              selectedPlaylist: testPlaylists[0],
            },
            addPlaylistActionCreator(newPlaylist)
          );

          expect(newState.playlists.length).toEqual(testPlaylists.length + 1);
          expect(newState.playlists[newState.playlists.length - 1]).toEqual(
            newPlaylist
          );
        });
      });
    });
  });
});
