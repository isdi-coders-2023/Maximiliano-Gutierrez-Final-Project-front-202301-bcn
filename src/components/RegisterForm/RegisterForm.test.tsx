import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtil";
import RegisterForm from "./Registerform";

const mockRegisterUser = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  registerUser: mockRegisterUser,
}));

describe("Given a RegisterForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a label with the text 'Email address'", () => {
      const labelText = "Email address";

      renderRouterWithProviders(<RegisterForm />);

      const expectedLabel = screen.getByLabelText(labelText);

      expect(expectedLabel).toBeInTheDocument();
    });

    test("Then it should show a label with the text 'Full name'", () => {
      const labelText = "Full name";

      renderRouterWithProviders(<RegisterForm />);

      const expectedLabel = screen.getByLabelText(labelText);

      expect(expectedLabel).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Create account'", () => {
      const buttonText = "Create account";

      renderRouterWithProviders(<RegisterForm />);

      const expectedButton = screen.getByRole("button", {
        name: buttonText,
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
