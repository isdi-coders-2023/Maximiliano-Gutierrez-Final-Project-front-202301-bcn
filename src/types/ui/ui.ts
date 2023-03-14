export interface UiState {
  isLoading: boolean;
  modal: { message: string; isError: boolean; isSuccess: boolean };
}

export interface ModalPayload {
  message: string;
  isError: boolean;
  isSuccess: boolean;
}
