import { UiState, ModalPayload } from "../../../types/ui/ui";
import {
  uiReducer,
  unsetIsLoadingActionCreator,
  setIsLoadingActionCreator,
  openModalActionCreator,
  closeModalActionCreator,
} from "./uiSlice";

describe("Given a uiReducer function", () => {
  describe("When it receives a new state and an action to setIsLoading", () => {
    test("Then it should return a new state with isLoading true", () => {
      const initialState: UiState = {
        modal: {
          isError: false,
          isSuccess: true,
          message: "",
        },
        isLoading: false,
      };

      const expectedUiState: UiState = {
        isLoading: true,
        modal: {
          isError: false,
          isSuccess: true,
          message: "",
        },
      };

      const setIsLoadingAction = setIsLoadingActionCreator();
      const newIsLoadingState = uiReducer(initialState, setIsLoadingAction);

      expect(newIsLoadingState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it receives a new state and the action to unsetIsLoading", () => {
    test("Then it should return a new state with the property isLoading set as false", () => {
      const initialUiState: UiState = {
        isLoading: true,
        modal: {
          isError: false,
          isSuccess: true,
          message: "",
        },
      };
      const expectedUiState: UiState = {
        isLoading: false,
        modal: {
          isError: false,
          isSuccess: true,
          message: "",
        },
      };

      const unsetIsLoadingAction = unsetIsLoadingActionCreator();
      const newIsLoadingState = uiReducer(initialUiState, unsetIsLoadingAction);

      expect(newIsLoadingState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it is called with a closeModal action after showing a modal for an error with the text 'Wrong credentials'", () => {
    test("Then it should hide the modal", () => {
      const uiInitialState: UiState = {
        isLoading: false,
        modal: {
          isError: true,
          message: "Wrong credentials",
          isSuccess: false,
        },
      };

      const expectedNewState: UiState = {
        isLoading: false,
        modal: { isError: false, message: "", isSuccess: false },
      };

      const closeModalAction = closeModalActionCreator();
      const newUiState = uiReducer(uiInitialState, closeModalAction);

      expect(newUiState).toStrictEqual(expectedNewState);
    });
  });

  describe("When it is called with an openModal action after showing a modal of succes with the text 'Delete was succesful'", () => {
    test("Then it should hide the modal", () => {
      const uiInitialState: UiState = {
        isLoading: false,
        modal: {
          isError: true,
          message: "Delete was susccesful",
          isSuccess: false,
        },
      };

      const modalPayload: ModalPayload = {
        isError: false,
        isSuccess: true,
        message: "Delete was succesful",
      };

      const expectedNewState: UiState = {
        isLoading: false,
        modal: {
          isError: false,
          message: "Delete was succesful",
          isSuccess: true,
        },
      };

      const openModalAction = openModalActionCreator(modalPayload);
      const newUiState = uiReducer(uiInitialState, openModalAction);

      expect(newUiState).toStrictEqual(expectedNewState);
    });
  });
});
