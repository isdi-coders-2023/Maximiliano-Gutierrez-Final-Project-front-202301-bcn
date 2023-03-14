import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtil";
import Layout from "./Layout";
import { UserState } from "../../types/types";

describe("Given a Layout component", () => {
  describe("When it is rendered with the user loged", () => {
    test("Then it should show a home icon with in the navigation bar", () => {
      const user: UserState = { email: "", id: "", isLogged: true, token: "" };
      renderRouterWithProviders(<Layout />, { user: user });

      const navigationBar = screen.getByLabelText("home");

      expect(navigationBar).toBeInTheDocument();
    });
  });

  test("Then it should show a plus icon in the navigation bar", () => {
    const user: UserState = {
      email: "",
      id: "",
      isLogged: true,
      token: "",
    };
    renderRouterWithProviders(<Layout />, { user: user });

    const navigationBar = screen.getByLabelText("plus icon");

    expect(navigationBar).toBeInTheDocument();
  });
});

test("Then it should show a up arrow icon in the navigation bar to filter", () => {
  const user: UserState = {
    email: "",
    id: "",
    isLogged: true,
    token: "",
  };
  renderRouterWithProviders(<Layout />, { user: user });

  const navigationBar = screen.getByLabelText("filter");

  expect(navigationBar).toBeInTheDocument();
});

test("Then it should show a logout icon in the navigation bar to logout", () => {
  const user: UserState = {
    email: "",
    id: "",
    isLogged: true,
    token: "",
  };
  renderRouterWithProviders(<Layout />, { user: user });

  const navigationBar = screen.getByLabelText("logout");

  expect(navigationBar).toBeInTheDocument();
});
