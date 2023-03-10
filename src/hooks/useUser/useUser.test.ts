import { renderHook } from "@testing-library/react";
import Wrapper from "../../mocks/Wrapper";
import { store } from "../../store/store";
import { CustomTokenPayload, UserCredentials } from "./types";
import useUser from "./useUser";
import decodeToken from "jwt-decode";
import { User } from "../../types/types";
import { loginUserActionCreator } from "../../store/features/userSlice/userSlice";

jest.mock("jwt-decode", () => jest.fn());

const spy = jest.spyOn(store, "dispatch");

beforeAll(() => {
  jest.clearAllMocks();
});

const mockUserCredentials: UserCredentials = {
  email: "leonardofavio@aol.com",
  password: "leito2000",
};

const mockTokenPayload: CustomTokenPayload = {
  email: "leonardofavio@aol.com",
  id: "94105818510",
};

const mockedToken = "dasnvjeuthgbd984bgoñs";

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

      expect(spy).not.toBeCalled();
    });
  });
});
