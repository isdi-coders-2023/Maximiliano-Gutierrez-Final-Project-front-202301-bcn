import { renderRouterWithProviders } from "../../testUtil";
import { act, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import userEvent from "@testing-library/user-event";
import { UserCredentials } from "../../hooks/useUser/types";

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

  describe("When the user submits the form with values in it", () => {
    test("The loginUser function from the useUser hook should be called", async () => {
      const emailInputPlaceholderText = "Introduce your email";
      const passwordInputPlaceholderText = "Introduce your password";

      const mockUser: UserCredentials = {
        email: "leomattioli@aol.com",
        password: "balcarce",
      };

      renderRouterWithProviders(<LoginForm />);

      const emailInputPlaceholder = screen.getByPlaceholderText(
        emailInputPlaceholderText
      );

      const passwordInputPlaceholder = screen.getByPlaceholderText(
        passwordInputPlaceholderText
      );

      const submitButton = screen.getByRole("button");

      await act(
        async () => await userEvent.type(emailInputPlaceholder, mockUser.email)
      );

      await act(
        async () =>
          await userEvent.type(passwordInputPlaceholder, mockUser.password)
      );
      await act(async () => await userEvent.click(submitButton));

      expect(mockLoginUser).toHaveBeenCalledWith(mockUser);
    });
  });
});
