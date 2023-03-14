import Layout from "../Layout/Layout";
import useToken from "../../hooks/useToken/useToken";

const App = () => {
  const { getToken } = useToken();

  getToken();

  return <Layout />;
};

export default App;
