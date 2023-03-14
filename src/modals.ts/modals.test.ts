import { toast } from "react-toastify";
import { showErrorToast, showSuccessToast } from "./modals";

beforeAll(() => {
  jest.clearAllMocks();
});

jest.mock("react-toastify", () => ({
  toast: {
    error: jest.fn(),
    success: jest.fn(),
  },
}));

describe("Given the showErrorToast function", () => {
  describe("When it receives a message 'Wrong credentials'", () => {
    test("Then its toast.error function should be called with its error message", () => {
      const errorMessage = "Wrong credentials";
      const errorOptions = {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      };

      showErrorToast(errorMessage);

      expect(toast.error).toHaveBeenCalledWith(errorMessage, errorOptions);
    });
  });
});

describe("Given a showSuccessToast function", () => {
  describe("When it receives a message 'Succes operation!'", () => {
    test("Then its toat.succes function should be called with its succes message", () => {
      const succesMessage = "Succes operation!";
      const succesOptions = {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      };

      showSuccessToast(succesMessage);

      expect(toast.success).toHaveBeenCalledWith(succesMessage, succesOptions);
    });
  });
});
