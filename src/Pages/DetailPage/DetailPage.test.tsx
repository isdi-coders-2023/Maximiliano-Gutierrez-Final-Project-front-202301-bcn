import { renderRouterWithProviders } from "../../testUtil";
import DetailPage from "./DetailPage";
import { screen } from "@testing-library/react";

describe("Given a DetailPage", () => {
  describe("When it rendered", () => {
    test("Then it should to display a image background with the name 'Artist in playlist'", () => {
      const expectedText = "Artist in playlist";

      renderRouterWithProviders(<DetailPage />);

      const expectedHeading = screen.getByRole("img", {
        name: expectedText,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
