import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UiState, ModalPayload } from "../../../types/ui/ui";

const initialState: UiState = {
  isLoading: false,
  modal: { isError: false, message: "", isSuccess: false },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setIsLoading: (currentState): UiState => ({
      ...currentState,
      isLoading: true,
    }),
    unsetIsLoading: (currentState): UiState => ({
      ...currentState,
      isLoading: false,
    }),
    openModal: (
      currentUiState,
      action: PayloadAction<ModalPayload>
    ): UiState => ({
      ...currentUiState,
      modal: {
        isError: action.payload.isError,
        message: action.payload.message,
        isSuccess: action.payload.isSuccess,
      },
    }),
    closeModal: (currentUiState): UiState => ({
      ...currentUiState,
      modal: {
        message: initialState.modal.message,
        isError: false,
        isSuccess: false,
      },
    }),
  },
});

export const {
  setIsLoading: setIsLoadingActionCreator,
  unsetIsLoading: unsetIsLoadingActionCreator,
  closeModal: closeModalActionCreator,
  openModal: openModalActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
