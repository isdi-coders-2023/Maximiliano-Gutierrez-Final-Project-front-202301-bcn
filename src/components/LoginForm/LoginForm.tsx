import { useState } from "react";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser/useUser";
import ButtonLogin from "../ButtonLogin/ButtonLogin";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  const { loginUser } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(value);
  };

  const handlePassword = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(value);
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await loginUser({ email, password });
  };

  const fieldsEmpty = email === "" || password === "";

  return (
    <LoginFormStyled className="login-form" onSubmit={onSubmitHandler}>
      <div className="login-form__section">
        <div className="container-email">
          <label
            htmlFor="email"
            className="login-form__title"
            aria-label="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Introduce your email"
            className="login-form__field"
            autoComplete="off"
            onChange={handleEmail}
          />
        </div>
      </div>
      <div className="login-form__section section">
        <div className="container-email">
          <label
            htmlFor="password"
            className="login-form__title"
            aria-label="password"
          >
            Password
          </label>
          <input
            aria-label="password-textbox"
            type="password"
            id="password"
            placeholder="Introduce your password"
            className="login-form__field"
            autoComplete="off"
            onChange={handlePassword}
          />
        </div>
      </div>
      <ButtonLogin
        className="button-login"
        isDisabled={fieldsEmpty}
        text={"Log in"}
      />
      <div className="link">
        Don't have an account? <Link to="/sign-up">Sign up</Link>
      </div>
    </LoginFormStyled>
  );
};

export default LoginForm;
