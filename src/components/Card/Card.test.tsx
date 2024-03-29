import { screen } from "@testing-library/react";
import Card from "./Card";
import { renderRouterWithProviders } from "../../testUtil";
import { mockPlaylistsExample } from "../../mocks/mocks";

describe("Given a Card component", () => {
  describe("When it is rendered", () => {
    test("Then it should display a Card component wit a 'role' heading and name Driving", () => {
      renderRouterWithProviders(<Card playlist={mockPlaylistsExample[0]} />);

      const expectedImageCard = screen.getByRole("heading", {
        name: "Driving",
      });

      expect(expectedImageCard).toBeInTheDocument();
    });
  });

  test("Then it should display a Card component wit a 'role' heading and name Driving", () => {
    renderRouterWithProviders(<Card playlist={mockPlaylistsExample[0]} />);

    const expectedImageCard = screen.getByRole("img", {
      name: "Artist in playlist",
    });

    expect(expectedImageCard).toBeInTheDocument();
  });
});
