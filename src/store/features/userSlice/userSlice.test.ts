import { UserState, User } from "../../../types/types";
import {
  initialState,
  loginUserActionCreator,
  logoutUserActionCreator,
  userReducer,
} from "./userSlice";

describe("Given a user reducer", () => {
  describe("When receives an user and an action to login user", () => {
    test("Then it should return the given user with property isLogged set to true", () => {
      const user: User = {
        id: "12",
        email: "leongieco@aol.com",
        token: "89jf28h9fn'f2¡01weflfew",
      };

      const expectedState: UserState = {
        id: "12",
        email: "leongieco@aol.com",
        token: "89jf28h9fn'f2¡01weflfew",
        isLogged: true,
      };

      const loginUsearAction = loginUserActionCreator(user);
      const newUserState = userReducer(initialState, loginUsearAction);

      expect(newUserState).toStrictEqual(expectedState);
    });
  });

  describe("When it receives a new state and the action to log out the user", () => {
    test("Then it should return the user with its isLogged property set to false", () => {
      const logoutAction = logoutUserActionCreator();

      const newUserState = userReducer(initialState, logoutAction);

      expect(newUserState).toStrictEqual(initialState);
    });
  });
});
