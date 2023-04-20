import { fireEvent, screen } from "@testing-library/react";
import FilterByBpm from "./FilterByBpm";
import { Playlist } from "../../types/playlistsTypes/types";
import renderWithProviders from "../../testUtil";

const examplePlaylists: Playlist[] = [
  {
    id: 1,
    playlistName: "Test Playlist",
    songs: [
      { id: "1", trackName: "Song 1", artistName: "Artist 1", bpmTrack: 120 },
      { id: "2", trackName: "Song 2", artistName: "Artist 2", bpmTrack: 122 },
    ],
  },
];

describe("Given a FilterByBpm component", () => {
  describe("When it's rendered", () => {
    test("Then filter options should be displayed correctly", () => {
      const onFilteredSongs = jest.fn();

      renderWithProviders(
        <FilterByBpm
          playlists={examplePlaylists}
          onFilteredSongs={onFilteredSongs}
        />
      );
      const filterOption120 = screen.getByLabelText("120 bpm or less");
      const filterOption122 = screen.getByLabelText("122 bpm");

      expect(filterOption120).toBeInTheDocument();
      expect(filterOption122).toBeInTheDocument();
    });
  });
  describe("When a bpm filter option is selected", () => {
    test("Then the songs should be filtered by the selected bpm", () => {
      const onFilteredSongs = jest.fn();
      renderWithProviders(
        <FilterByBpm
          playlists={examplePlaylists}
          onFilteredSongs={onFilteredSongs}
        />
      );
      const filterOption120 = screen.getByLabelText("120 bpm or less");

      fireEvent.click(filterOption120);

      expect(onFilteredSongs).toHaveBeenCalledWith(
        expect.arrayContaining([
          {
            id: "1",
            trackName: "Song 1",
            artistName: "Artist 1",
            bpmTrack: 120,
          },
        ])
      );
    });
  });

  describe("When a selected bpm filter option is deselected", () => {
    test("Then the songs should be unfiltered", () => {
      const onFilteredSongs = jest.fn();
      renderWithProviders(
        <FilterByBpm
          playlists={examplePlaylists}
          onFilteredSongs={onFilteredSongs}
        />
      );
      const filterOption120 = screen.getByLabelText("120 bpm or less");

      fireEvent.click(filterOption120); // Select filter
      fireEvent.click(filterOption120); // Deselect filter

      expect(onFilteredSongs).toHaveBeenLastCalledWith([]);
    });
  });
});
