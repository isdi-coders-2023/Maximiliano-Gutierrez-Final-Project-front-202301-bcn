import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtil";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the title 'Page not found!'", () => {
      const expectedTitle = /page not found!/i;

      renderRouterWithProviders(<NotFoundPage />);
      const heading = screen.getByRole("heading", { name: expectedTitle });

      expect(heading).toBeInTheDocument();
    });
  });
});
