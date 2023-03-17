import UnprotectedRoute from "./UnprotectedRoute";
import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtil";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: jest.fn(),
}));

describe("Given a UnprotectedRoute component", () => {
  describe("When it is rendered and a token doesn't exists", () => {
    test("Then it should show the component that it is receiving with props", () => {
      const component = <h2>Home page</h2>;

      renderRouterWithProviders(<UnprotectedRoute element={component} />);

      const expectedComponent = screen.getByRole("heading");

      expect(expectedComponent).toBeInTheDocument();
    });
  });
});
