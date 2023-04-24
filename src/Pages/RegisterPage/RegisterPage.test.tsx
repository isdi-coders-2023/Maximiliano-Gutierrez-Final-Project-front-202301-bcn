import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtil";
import RegisterPage from "./RegisterPage";

describe("Given a Login page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'Create account'", () => {
      const textButton = "Create account";

      renderRouterWithProviders(<RegisterPage />);

      const expectedButton = screen.getByRole("button", {
        name: textButton,
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });

  test("Then it should show a heading with the text 'Sign Up'", () => {
    const headingText = "Sign Up";

    renderRouterWithProviders(<RegisterPage />);

    const expectedHeading = screen.getByRole("heading", {
      name: headingText,
    });

    expect(expectedHeading).toBeInTheDocument();
  });
});
