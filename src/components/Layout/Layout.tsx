import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import LayoutScreen from "./LayoutScreen/LayoutScreen";

const Layout = (): JSX.Element => {
  return (
    <>
      <LayoutScreen />
      <ToastContainer hideProgressBar />
      <Outlet />
    </>
  );
};

export default Layout;
