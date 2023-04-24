import { screen } from "@testing-library/react";
import PlaylistFilterComponent from "./PlaylistsFilterComponent";
import { renderWithProviders } from "../../testUtil";
import usePlaylists from "../../hooks/usePlaylist/usePlaylist";

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
  });
});
