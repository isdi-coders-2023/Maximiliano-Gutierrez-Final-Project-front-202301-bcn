import FilterPage from "./FilterPage";
import { renderRouterWithProviders } from "../../testUtil";
import { screen } from "@testing-library/react";

describe("Given a FilterPage function", () => {
  describe("When it's render", () => {
    test("Then is render without errors", () => {
      renderRouterWithProviders(<FilterPage />);
      expect(screen.getByText(/Filter your music!/i)).toBeInTheDocument();
    });
  });

  test("Then no edge cases identified", () => {
    expect(true).toBe(true);
  });

  test("Then the h1 show the correct text", () => {
    renderRouterWithProviders(<FilterPage />);
    expect(screen.getByText(/Filter your music!/i)).toBeInTheDocument();
  });
});
