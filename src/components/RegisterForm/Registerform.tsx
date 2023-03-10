import { Link } from "react-router-dom";
import { useState } from "react";
import ButtonLogin from "../ButtonLogin/ButtonLogin";
import RegisterFormStyled from "./RegisterFormStyled";
import useUser from "../../hooks/useUser/useUser";

const RegisterForm = (): JSX.Element => {
  const { registerUser } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

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

  const handleName = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setName(value);
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await registerUser({ email, password, name });
  };

  const areFieldsEmpty = email === "" || password === "" || name === "";

  return (
    <RegisterFormStyled className="register-form" onSubmit={onSubmitHandler}>
      <div className="register-form__section">
        <label
          htmlFor="name"
          className="register-form__title"
          aria-label="fullname"
        >
          Full name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Full name"
          className="register-form__field"
          autoComplete="off"
          onChange={handleName}
        />
      </div>
      <div className="register-form__section">
        <label
          htmlFor="email"
          className="register-form__title"
          aria-label="email"
        >
          Email address
        </label>
        <input
          type="email"
          id="email"
          placeholder="youremail@aol.com"
          className="register-form__field"
          autoComplete="off"
          onChange={handleEmail}
        />
      </div>
      <div className="register-form__section">
        <label
          htmlFor="password"
          className="register-form__title"
          aria-label="password"
        >
          Password
        </label>
        <input
          aria-label="password-textbox"
          type="password"
          id="password"
          placeholder="Introduce your password"
          className="register-form__field"
          autoComplete="off"
          onChange={handlePassword}
        />
      </div>
      <ButtonLogin
        className="button-register"
        text={"Create account"}
        isDisabled={areFieldsEmpty}
      />
      <div className="link">
        Do you have account? <Link to="login/">Log in</Link>
      </div>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
