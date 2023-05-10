import EditPage from "./EditPage";
import { renderRouterWithProviders } from "../../testUtil";
import { screen } from "@testing-library/react";
import * as ReactRouterDom from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: jest.fn(),
}));

describe("Given an EditPage page", () => {
  describe("When it's render", () => {
    test("tpasses selected playlist prop to create form", () => {
      const selectedPlaylist = {
        playlistPhoto: "",
        playlistName: "Test Playlist",
        songs: [],
      };
      const location = {
        pathname: "/your-pathname",
        search: "",
        state: { selectedPlaylist },
        hash: "",
        key: "",
      };
      jest.spyOn(ReactRouterDom, "useLocation").mockReturnValue(location);
      renderRouterWithProviders(<EditPage />);
      expect(screen.getByTestId("initial-values")).toHaveTextContent(
        JSON.stringify(selectedPlaylist)
      );
    });
  });
});
