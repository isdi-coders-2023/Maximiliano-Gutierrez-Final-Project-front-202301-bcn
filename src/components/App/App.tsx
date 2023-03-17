import { useEffect } from "react";
import Layout from "../Layout/Layout";
import useToken from "../../hooks/useToken/useToken";

const App = () => {
  const { getToken } = useToken();

  useEffect(() => {
    getToken();
  }, [getToken]);

  return <Layout />;
};

export default App;
