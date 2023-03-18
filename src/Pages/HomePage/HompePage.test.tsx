import { screen } from "@testing-library/react";
import { mockPlaylistsList } from "../../mocks/mocks";
import { renderRouterWithProviders } from "../../testUtil";
import HomePage from "./HomePage";

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppSelector: () => mockPlaylistsList.playlists,
}));

describe("Given a HomePage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a list of cards with a heading", () => {
      const headerText = "Melodic Techno";

      renderRouterWithProviders(<HomePage />);

      const expectedHeaderCard = screen.getByRole("heading", {
        name: headerText,
      });

      expect(expectedHeaderCard).toBeInTheDocument();
    });
  });
});
