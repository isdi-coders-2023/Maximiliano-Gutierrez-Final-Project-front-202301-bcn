import { UiState } from "../../../types/ui/ui";
import { uiReducer } from "./uiSlice";

describe("Given a uiReducer function", () => {
  describe("When it receives a new state and an action to setIsLoading", () => {
    test("Then it should return a new state with isLoading true", () => {
      const initialState: UiState = {
        isLoading: false,
      };

      const action = {
        type: "ui/setIsLoading",
        payload: true,
      };

      const newState = uiReducer(initialState, action);

      expect(newState.isLoading).toBe(true);
    });
  });

  describe("When it receives a new state and an action to unsetIsLoading", () => {
    test("Then it should return a new state with isLoading false", () => {
      const initialState: UiState = {
        isLoading: true,
      };

      const action = {
        type: "ui/unsetIsLoading",
        payload: false,
      };

      const newState = uiReducer(initialState, action);

      expect(newState.isLoading).toBe(false);
    });
  });
});
