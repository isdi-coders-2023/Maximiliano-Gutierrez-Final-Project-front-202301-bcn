import { createSlice } from "@reduxjs/toolkit";
import { UiState } from "../../../types/ui/ui";

const initialState: UiState = { isLoading: false };

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
  },
});

export const {
  setIsLoading: setIsLoadingActionCreator,
  unsetIsLoading: unsetIsLoadingActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
