import ProtectedRoute from "./ProtectedRoute";
import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtil";
import { useAppSelector } from "../../store/hooks";

jest.mock("../../store/hooks", () => ({
  useAppSelector: jest.fn(),
}));

describe("Given a ProtectedRoute component", () => {
  describe("When it is rendered and there is a token", () => {
    test("Then it should show the react element received by props", () => {
      (useAppSelector as jest.Mock).mockReturnValueOnce({
        token: "789456123",
      });
      const element = <div>Protected route</div>;

      renderRouterWithProviders(<ProtectedRoute element={element} />);

      const expectedElement = screen.getByText("Protected route");

      expect(expectedElement).toBeInTheDocument();
    });
  });

  describe("When it is rendered with the text `testing` and user without token", () => {
    test("Then it should show the container with text `testing`", () => {
      const text = "testing";
      const containerWithText = <div>{text}</div>;

      renderRouterWithProviders(<ProtectedRoute element={containerWithText} />);

      const expectedRenderedText = screen.queryByText(text);

      expect(expectedRenderedText).not.toBeInTheDocument();
    });
  });
});
