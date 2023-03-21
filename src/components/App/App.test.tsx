import { renderRouterWithProviders } from "../../testUtil";
import App from "./App";

const mockGetToken = jest.fn();

jest.mock("../../hooks/useToken/useToken", () => () => ({
  getToken: mockGetToken,
}));

describe("Given a App component", () => {
  describe("When it's render", () => {
    test("then the 'getToken' should be invoked", () => {
      renderRouterWithProviders(<App />);

      expect(mockGetToken).toBeCalled();
    });
  });
});
