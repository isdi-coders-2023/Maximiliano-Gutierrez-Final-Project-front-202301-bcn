import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtil";
import LoginPage from "./LoginPage";

describe("Given a Login page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'Log in'", () => {
      const textButton = "Log in";

      renderRouterWithProviders(<LoginPage />);

      const expectedButton = screen.getByRole("button", {
        name: textButton,
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });

  test("Then it should show a heading with the text 'Log In'", () => {
    const headingText = "Log In";

    renderRouterWithProviders(<LoginPage />);

    const expectedHeading = screen.getByRole("heading", {
      name: headingText,
    });

    expect(expectedHeading).toBeInTheDocument();
  });
});
