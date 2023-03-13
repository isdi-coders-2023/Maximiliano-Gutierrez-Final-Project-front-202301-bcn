import { render, screen } from "@testing-library/react";
import Loader from "./Loader";

describe("Given a loader element", () => {
  describe("When a page is loading and the content it's in cue to be load", () => {
    test("It should to render a loader with the aria-label attribute: 'The page is loading '", () => {
      render(<Loader />);

      const text = screen.getByRole("dialog", {
        name: "The page is loading",
      });

      expect(text).toBeInTheDocument();
    });
  });
});
