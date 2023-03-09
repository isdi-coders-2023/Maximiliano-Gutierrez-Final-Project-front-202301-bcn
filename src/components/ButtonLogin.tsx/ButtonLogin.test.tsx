import { screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../styles/GlobalStyles";
import theme from "../../styles/Theme";
import renderWithProviders from "../../testUtil";
import ButtonLogin from "./ButtonLogin";

describe("Given a Button component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'Sign in'", () => {
      const buttonText = "Sign in";

      renderWithProviders(
        <ThemeProvider theme={theme}>
          <GlobalStyles />

          <ButtonLogin
            isDisabled={false}
            className="login-button"
            text={buttonText}
          />
        </ThemeProvider>
      );

      const expectedButton = screen.getByRole("button", {
        name: buttonText,
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });

  test("it should be disabled when isDisabled is true", () => {
    renderWithProviders(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ButtonLogin
          isDisabled={true}
          className="login-button"
          text="Sign in"
        />
      </ThemeProvider>
    );

    const button = screen.getByRole("button", { name: "Sign in" });

    expect(button).toBeDisabled();
  });

  test("it should have the correct class when a className prop is passed", () => {
    renderWithProviders(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ButtonLogin
          isDisabled={false}
          className="custom-class"
          text="Sign in"
        />
      </ThemeProvider>
    );

    const button = screen.getByRole("button", { name: "Sign in" });
    expect(button).toHaveClass("custom-class");
  });
});
