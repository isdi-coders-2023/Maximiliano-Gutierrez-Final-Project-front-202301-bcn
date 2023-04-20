import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtil";
import CreatePage from "./CreatePage";

describe("Given a CreatePage component", () => {
  describe("When it is rendered", () => {
    test("Then it should render correctly", () => {
      renderRouterWithProviders(<CreatePage />);

      const title = screen.getByText(/Create your/i);
      expect(title).toBeInTheDocument();

      const submitButton = screen.getByRole("button", { name: /create/i });
      expect(submitButton).toBeInTheDocument();
    });
  });
});
