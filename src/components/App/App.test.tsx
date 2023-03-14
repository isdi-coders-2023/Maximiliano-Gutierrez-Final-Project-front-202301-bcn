import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtil";
import { UserState } from "../../types/types";
import App from "./App";
import Layout from "../Layout/Layout";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a home icon with in the navigation bar", () => {
      const user: UserState = { email: "", id: "", isLogged: true, token: "" };
      renderRouterWithProviders(<Layout />, { user: user });

      const navigationBar = screen.getByLabelText("home");

      expect(navigationBar).toBeInTheDocument();
    });
  });

  test("Then it should show a navigation bar", () => {
    const user: UserState = { email: "", id: "", isLogged: true, token: "" };
    renderRouterWithProviders(<App />, { user: user });

    const expextedNavigationBar = screen.getByRole("navigation");

    expect(expextedNavigationBar).toBeInTheDocument();
  });
});
