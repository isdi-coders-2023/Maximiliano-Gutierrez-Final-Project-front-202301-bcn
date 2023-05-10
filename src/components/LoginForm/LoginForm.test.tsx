import { renderRouterWithProviders } from "../../testUtil";
import { act, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import userEvent from "@testing-library/user-event";

const mockLoginUser = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  loginUser: mockLoginUser,
}));

describe("Given a component LoginForm", () => {
  describe("When it is rendered", () => {
    test("Then it should show a label with the text 'Email'", () => {
      const label = "Email";

      renderRouterWithProviders(<LoginForm />);

      const expectedLabel = screen.getByLabelText(label);

      expect(expectedLabel).toBeInTheDocument();
    });
  });

  test("Then it should show a label with the text 'Password'", () => {
    const label = "Password";

    renderRouterWithProviders(<LoginForm />);

    const expectedLabel = screen.getByLabelText(label);

    expect(expectedLabel).toBeInTheDocument();
  });

  test("Then it should show a label with the text 'Email'", () => {
    const label = "Email";

    renderRouterWithProviders(<LoginForm />);

    const expectedLabel = screen.getByLabelText(label);

    expect(expectedLabel).toBeInTheDocument();
  });

  describe("When the user types in its email 'juantenorio@gmail.com' in the input", () => {
    test("Then 'juantenorio@gmail.com' should be displayed in the input", async () => {
      const label = "Email";
      const introducedEmail = "juantenorio@gmail.com";

      renderRouterWithProviders(<LoginForm />);

      const emailInput = screen.getByLabelText(label);

      await act(async () => await userEvent.type(emailInput, introducedEmail));

      expect(emailInput).toHaveValue(introducedEmail);
    });
  });

  describe("When the user types in its password", () => {
    test("Then the password input should display hidden value in it", async () => {
      const label = "Password";
      const introducedPassword = "aijuna";

      renderRouterWithProviders(<LoginForm />);

      const passwordInput = screen.getByLabelText(label);

      await act(
        async () => await userEvent.type(passwordInput, introducedPassword)
      );

      expect(passwordInput).toHaveValue(introducedPassword);
    });
  });
});
