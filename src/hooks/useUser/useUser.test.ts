import { renderHook } from "@testing-library/react";
import Wrapper from "../../mocks/Wrapper";
import { store } from "../../store/store";
import { CustomTokenPayload } from "./types";
import useUser from "./useUser";
import decodeToken from "jwt-decode";
import { logoutUserActionCreator } from "../../store/features/userSlice/userSlice";
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

const mockTokenPayload: CustomTokenPayload = {
  email: "leonardofavio@aol.com",
  id: "94105818510",
};

describe("Given a useUser hook", () => {
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
