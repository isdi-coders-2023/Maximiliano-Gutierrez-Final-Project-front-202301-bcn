import { useAppDispatch } from "../../store/hooks";
import {
  UserCredentials,
  CustomTokenPayload,
  LoginResponse,
  UserRegisterData,
} from "./types";
import decodeToken from "jwt-decode";
import { loginUserActionCreator } from "../../store/features/userSlice/userSlice";
import { User } from "../../types/types";
import { showErrorToast, showSuccessToast } from "../../modals.ts/modals";

interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
  registerUser: (userRegisterData: UserRegisterData) => Promise<void>;
}

const useUser = (): UseUserStructure => {
  const dispatch = useAppDispatch();

  const apiUrl = process.env.REACT_APP_URL_API;
  const usersEndpoint = "users/";
  const loginEndpoint = "login/";
  const registerEndpoint = "register/";

  const loginUser = async (userCredentials: UserCredentials) => {
    try {
      const response = await fetch(
        `${apiUrl}${usersEndpoint}${loginEndpoint}`,
        {
          method: "POST",
          body: JSON.stringify(userCredentials),
          headers: { "Content-Type": "application/json" },
        }
      );

      const { token } = (await response.json()) as LoginResponse;

      const tokenPayload: CustomTokenPayload = decodeToken(token);

      const { id, email } = tokenPayload;

      const logUser: User = {
        email,
        token,
        id,
      };

      dispatch(loginUserActionCreator(logUser));
      localStorage.setItem("token", token);
    } catch {
      showErrorToast("Invalid credentials");
    }
  };

  const registerUser = async (userRegisterData: UserRegisterData) => {
    try {
      await fetch(`${apiUrl}${usersEndpoint}${registerEndpoint}`, {
        method: "POST",
        body: JSON.stringify(userRegisterData),
        headers: { "Content-Type": "application/json" },
      });

      showSuccessToast("User registered successfully");
    } catch {
      showErrorToast("Invalid credentials");
    }
  };

  return { loginUser, registerUser };
};

export default useUser;
