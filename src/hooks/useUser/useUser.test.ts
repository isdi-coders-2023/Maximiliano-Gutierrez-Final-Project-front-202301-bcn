import { renderHook } from "@testing-library/react";
import Wrapper from "../../mocks/Wrapper";
import { store } from "../../store/store";
import { CustomTokenPayload, UserCredentials, UserRegisterData } from "./types";
import useUser from "./useUser";
import decodeToken from "jwt-decode";
import { User } from "../../types/types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../store/features/userSlice/userSlice";
import { openModalActionCreator } from "../../store/features/uiSlice.tsx/uiSlice";
import { ModalPayload } from "../../types/ui/ui";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";

jest.mock("jwt-decode", () => jest.fn());

const spy = jest.spyOn(store, "dispatch");

beforeAll(() => {
  jest.clearAllMocks();
});

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

const mockUserCredentials: UserCredentials = {
  email: "leonardofavio@aol.com",
  password: "leito2000",
};

const mockTokenPayload: CustomTokenPayload = {
  email: "leonardofavio@aol.com",
  id: "94105818510",
};

const mockUserToRegister: UserRegisterData = {
  email: "leonardofavio@aol.com",
  password: "12345678",
  name: "leonardo",
};

const mockedToken = "leomatioli";

describe("Given a useUser hook", () => {
  describe("When invoke the loginUser function to log the user with email 'leonardofavio@aol.com' and password 'leito2000'", () => {
    test("Then the dispatch should be called with the action to log at the user", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      (decodeToken as jest.MockedFunction<typeof decodeToken>).mockReturnValue(
        mockTokenPayload
      );

      const mockUserLogin: User = {
        id: mockTokenPayload.id,
        email: mockUserCredentials.email,
        token: mockedToken,
      };

      await loginUser(mockUserCredentials);

      expect(spy).toHaveBeenCalledWith(loginUserActionCreator(mockUserLogin));
    });

    test("Then it should call the showErrorToast function", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      await loginUser(mockUserCredentials);

      expect(spy).toBeCalled();
    });
  });

  describe("When the logoutUser function is invoked", () => {
    test("Then the dispatch should be called with the action to logout the user", async () => {
      const {
        result: {
          current: { logoutUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      (decodeToken as jest.MockedFunction<typeof decodeToken>).mockReturnValue(
        mockTokenPayload
      );

      await logoutUser();

      expect(spy).toHaveBeenCalledWith(logoutUserActionCreator());
    });
  });

  describe("When the registerUser function is called with a name: 'leonardo', email: 'leonardofavio@aol.com' and password: '12345678'", () => {
    test("Then it should call the dispatch openModal", async () => {
      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      await registerUser(mockUserToRegister);

      expect(spy).toHaveBeenCalledWith(
        openModalActionCreator({
          isError: false,
          message: "The user has been created!",
          isSuccess: true,
        })
      );
    });

    test("Then it should call the dispatch for succes toast", async () => {
      const modalPayload: ModalPayload = {
        isError: false,
        isSuccess: true,
        message: "The user has been created!",
      };

      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      await registerUser(mockUserToRegister);

      expect(spy).toHaveBeenCalledWith(openModalActionCreator(modalPayload));
    });
  });

  describe("When the response is not ok", () => {
    beforeAll(() => {
      server.resetHandlers(...errorHandlers);
    });

    test("Then it should throw an error", async () => {
      const modalPayload: ModalPayload = {
        isError: true,
        message: "Couldn't create user. Try again!",
        isSuccess: false,
      };

      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      await registerUser({
        email: "",
        name: "",
        password: "",
      });

      expect(spy).toHaveBeenCalledWith(openModalActionCreator(modalPayload));
    });
  });
});
