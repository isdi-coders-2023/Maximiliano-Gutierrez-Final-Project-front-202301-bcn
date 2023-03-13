import { screen } from "@testing-library/react";
import renderWithProviders from "../../testUtil";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it is rendered with the user loged", () => {
    test("Then it should show a navigatio bar", () => {
      renderWithProviders(<Layout />, {
        user: { isLogged: true, email: "", id: "", token: "" },
      });

      const navigationBar = screen.getByRole("navigation");

      expect(navigationBar).toBeInTheDocument();
    });
  });
});
