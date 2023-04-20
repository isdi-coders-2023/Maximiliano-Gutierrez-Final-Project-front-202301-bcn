import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DeleteButton from "./DeleteButton";
import { renderRouterWithProviders } from "../../testUtil";

const mockDeletePlaylist = jest.fn();

jest.mock("../../hooks/usePlaylist/usePlaylist", () => () => ({
  deletePlaylist: mockDeletePlaylist,
}));

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a DeleteButton component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the given text", () => {
      const buttonText = "Delete Playlist";
      const playlistId = "1";

      renderRouterWithProviders(
        <DeleteButton text={buttonText} id={playlistId} />
      );

      const expectedButton = screen.getByText(buttonText);

      expect(expectedButton).toBeInTheDocument();
    });
  });

  describe("When the button is clicked", () => {
    test("Then the deletePlaylist function from the usePlaylists hook should be called with the given id", async () => {
      const buttonText = "Delete Playlist";
      const playlistId = "1";

      renderRouterWithProviders(
        <DeleteButton text={buttonText} id={playlistId} />
      );

      const deleteButton = screen.getByText(buttonText);
      userEvent.click(deleteButton);

      await waitFor(() =>
        expect(mockDeletePlaylist).toHaveBeenCalledWith(playlistId)
      );
    });

    describe("When the button is clicked and deletePlaylist throws an error", () => {
      test("Then the navigate function should not be called", async () => {
        const buttonText = "Delete Playlist";
        const playlistId = "1";
        const errorMessage = "An error occurred.";

        mockDeletePlaylist.mockRejectedValueOnce(new Error(errorMessage));

        renderRouterWithProviders(
          <DeleteButton text={buttonText} id={playlistId} />
        );

        const deleteButton = screen.getByText(buttonText);
        userEvent.click(deleteButton);

        await waitFor(() =>
          expect(mockDeletePlaylist).toHaveBeenCalledTimes(1)
        );

        expect(mockNavigate).not.toHaveBeenCalled();
      });
    });
  });
});
