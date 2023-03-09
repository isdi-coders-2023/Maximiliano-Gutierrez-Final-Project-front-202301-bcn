import ButtonLogin from "./components/ButtonLogin.tsx/ButtonLogin";

const App = () => {
  return (
    <div className="App">
      <ButtonLogin
        className="login-button"
        isDisabled={false}
        text={"Sign in"}
      />
    </div>
  );
};

export default App;
