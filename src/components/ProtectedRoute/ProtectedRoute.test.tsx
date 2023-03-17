import ProtectedRoute from "./ProtectedRoute";
import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtil";
import { useAppSelector } from "../../store/hooks";
import * as ReactRouterDom from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: jest.fn(),
}));

jest.mock("../../store/hooks", () => ({
  useAppSelector: jest.fn(),
}));

describe("Given a ProtectedRoute component", () => {
  describe("When it is rendered and a token exists", () => {
    test("Then it should show the component that it is receiving with props", () => {
      (useAppSelector as jest.Mock).mockReturnValueOnce({
        token: "nif2398g2m'uv2¡934t21",
      });

      const component = <div>Login page</div>;

      renderRouterWithProviders(<ProtectedRoute element={component} />);

      const expectedComponent = screen.getByText("Login page");

      expect(expectedComponent).toBeInTheDocument();
    });
  });

  describe("When it is rendered and a token does not exist", () => {
    test("Then it should show the component that it is receiving with props", () => {
      const component = <div>Login page</div>;

      renderRouterWithProviders(<ProtectedRoute element={component} />);

      expect(ReactRouterDom.Navigate).toHaveBeenCalled();
    });
  });
});
