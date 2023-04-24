import { useAppDispatch } from "../../store/hooks";
import {
  UserCredentials,
  CustomTokenPayload,
  LoginResponse,
  UserRegisterData,
} from "./types";
import decodeToken from "jwt-decode";
import useToken from "../useToken/useToken";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../store/features/userSlice/userSlice";
import { User } from "../../types/types";
import { showErrorToast } from "../../modals.ts/modals";
import {
  unsetIsLoadingActionCreator,
  setIsLoadingActionCreator,
  openModalActionCreator,
} from "../../store/features/uiSlice.tsx/uiSlice";
import { useNavigate } from "react-router-dom";

interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
  registerUser: (userRegisterData: UserRegisterData) => Promise<void>;
  logoutUser: () => void;
}

const joinPaths = (...paths: string[]) => {
  return paths.join("/").replace(/\/+/g, "/");
};

const useUser = (): UseUserStructure => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { removeToken } = useToken();

  const apiUrl = process.env.REACT_APP_URL_API!;
  const usersEndpoint = "users/";
  const loginEndpoint = "login/";
  const registerEndpoint = "register/";

  const loginUser = async (userCredentials: UserCredentials) => {
    try {
      dispatch(setIsLoadingActionCreator());
      const response = await fetch(
        joinPaths(apiUrl, usersEndpoint, loginEndpoint),
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

      dispatch(unsetIsLoadingActionCreator());
      dispatch(loginUserActionCreator(logUser));

      localStorage.setItem("token", token);
    } catch {
      showErrorToast("Invalid credentials");
    }
  };

  const logoutUser = () => {
    removeToken();
    dispatch(logoutUserActionCreator());
  };

  const registerUser = async (registerUserData: UserRegisterData) => {
    try {
      dispatch(setIsLoadingActionCreator());
      const response = await fetch(
        joinPaths(apiUrl, usersEndpoint, registerEndpoint),
        {
          method: "POST",
          body: JSON.stringify(registerUserData),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error("Couldn't create user. Try again!");
      }

      dispatch(
        openModalActionCreator({
          isError: false,
          message: "The user has been created!",
          isSuccess: true,
        })
      );
      dispatch(unsetIsLoadingActionCreator());
      navigate("/login");
    } catch (error) {
      dispatch(
        openModalActionCreator({
          isError: true,
          message: "Couldn't create user. Try again!",
          isSuccess: false,
        })
      );
    }
  };

  return { loginUser, registerUser, logoutUser };
};

export default useUser;
