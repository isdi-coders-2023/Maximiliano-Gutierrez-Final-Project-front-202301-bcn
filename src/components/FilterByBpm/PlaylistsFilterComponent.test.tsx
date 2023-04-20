import { screen, fireEvent } from "@testing-library/react";
import PlaylistFilterComponent from "./PlaylistsFilterComponent";
import { renderWithProviders } from "../../testUtil";
import usePlaylists from "../../hooks/usePlaylist/usePlaylist";
import React from "react";

jest.mock("../../hooks/usePlaylist/usePlaylist");

describe("Given a component PlaylistFilterComponent", () => {
  const getPlaylistMock = jest.fn();
  const addPlaylistMock = jest.fn();

  beforeEach(() => {
    (usePlaylists as jest.Mock).mockReturnValue({
      getPlaylist: getPlaylistMock,
      addPlaylist: addPlaylistMock,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  describe("When it is rendered", () => {
    test("Then it should show a title with the text 'Filtered Songs:'", () => {
      renderWithProviders(<PlaylistFilterComponent />);
      const title = screen.getByText(/Filtered Songs:/i);
      expect(title).toBeInTheDocument();
    });

    test("Then it should show an input field for playlist name", () => {
      renderWithProviders(<PlaylistFilterComponent />);
      const input = screen.getByPlaceholderText("Playlist name");
      expect(input).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Save Playlist'", () => {
      renderWithProviders(<PlaylistFilterComponent />);
      const button = screen.getByRole("button", { name: /Save Playlist/i });
      expect(button).toBeInTheDocument();
    });
  });

  describe("When the user enters a playlist name and clicks the 'Save Playlist' button", () => {
    test("Then addPlaylist should be called", () => {
      renderWithProviders(<PlaylistFilterComponent />);
      const input = screen.getByPlaceholderText("Playlist name");
      const button = screen.getByRole("button", { name: /Save Playlist/i });

      fireEvent.change(input, { target: { value: "New Playlist" } });
      fireEvent.click(button);

      expect(addPlaylistMock).toHaveBeenCalled();
    });
  });
});
