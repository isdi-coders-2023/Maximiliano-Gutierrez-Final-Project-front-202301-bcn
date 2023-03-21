import CardList from "./CardList";
import { renderRouterWithProviders } from "../../testUtil";
import { mockPlaylistsExample } from "../../mocks/mocks";
import { screen } from "@testing-library/react";

describe("Given a CardList component", () => {
  describe("When it is rendered", () => {
    test("Then it should display a CardList component", () => {
      renderRouterWithProviders(
        <CardList tracksFromPlaylist={mockPlaylistsExample} />
      );

      const expectedImageCard = screen.getByAltText("Layton Giordani");

      expect(expectedImageCard).toBeInTheDocument();
    });
  });
});
