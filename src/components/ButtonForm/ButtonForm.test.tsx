import { screen } from "@testing-library/react";
import renderWithProviders from "../../testUtil";
import ButtonForm from "./ButtonForm";

describe("Given a Button component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'Create'", () => {
      const buttonText = "Create";

      renderWithProviders(
        <ButtonForm text={buttonText.toUpperCase()} isDisabled />
      );

      const expectedButton = screen.getByRole("button", {
        name: buttonText.toUpperCase(),
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
