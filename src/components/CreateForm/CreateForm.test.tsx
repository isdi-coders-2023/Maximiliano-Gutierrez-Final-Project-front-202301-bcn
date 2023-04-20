import { screen, fireEvent } from "@testing-library/react";
import CreateForm from "./CreateForm";
import { renderRouterWithProviders } from "../../testUtil";
import usePlaylists from "../../hooks/usePlaylist/usePlaylist";

jest.mock("../../hooks/usePlaylist/usePlaylist");

describe("Given a component CreateForm", () => {
  const createPlaylistMock = jest.fn();
  const editPlaylistByIdMock = jest.fn();
  const getPlaylistMock = jest.fn();

  beforeEach(() => {
    (usePlaylists as jest.Mock).mockReturnValue({
      createPlaylist: createPlaylistMock,
      editPlaylistById: editPlaylistByIdMock,
      getPlaylist: getPlaylistMock,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("When it is rendered", () => {
    test("Then it should show a label with the text 'Playlist Name:'", () => {
      renderRouterWithProviders(<CreateForm />);
      const label = screen.getByText(/Playlist Name:/i);
      expect(label).toBeInTheDocument();
    });

    test("Then it should show a label with the text 'Playlist Photo:'", () => {
      renderRouterWithProviders(<CreateForm />);
      const label = screen.getByText(/Playlist Photo:/i);
      expect(label).toBeInTheDocument();
    });

    test("Then it should show an input field for playlist name", () => {
      renderRouterWithProviders(<CreateForm />);
      const input = screen.getByLabelText(/Playlist Name:/i);
      expect(input).toBeInTheDocument();
    });

    test("Then it should show a select field for each song", () => {
      renderRouterWithProviders(<CreateForm />);
      const selectElements = screen.getAllByRole("combobox");
      expect(selectElements.length).toBe(5);
    });

    test("Then it should show a disabled 'Create' button", () => {
      renderRouterWithProviders(<CreateForm />);
      const button = screen.getByRole("button", { name: /Create/i });
      expect(button).toBeDisabled();
    });

    describe("When the user enters a playlist name", () => {
      test("Then the 'Create' button should be enabled", () => {
        renderRouterWithProviders(<CreateForm />);
        const input = screen.getByLabelText(/Playlist Name:/i);
        const button = screen.getByRole("button", { name: /Create/i });
        fireEvent.change(input, { target: { value: "My Playlist" } });
        expect(button).toBeEnabled();
      });
    });
  });
});
