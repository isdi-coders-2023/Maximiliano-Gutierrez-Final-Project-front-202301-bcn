import LoginForm from "../../components/LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = () => {
  return (
    <div>
      <LoginPageStyled>
        <div className="wrap-container">
          <div className="wrap-container__text text">
            <h1 className="text__title">Log In</h1>
            <h2 className="text__description">
              Welcome back to Techno Playlist Creator, it's time to create the
              techno playlist you ever wanted!
            </h2>
          </div>
        </div>
        <LoginForm />
      </LoginPageStyled>
    </div>
  );
};

export default LoginPage;
