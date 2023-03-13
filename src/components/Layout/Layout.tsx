import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import LayoutScreen from "./LayoutScreen/LayoutScreen";
import Loader from "../Loader/Loader";
import { useAppSelector } from "../../store/hooks";

const Layout = (): JSX.Element => {
  const { isLoading } = useAppSelector((state) => state.ui);

  return (
    <>
      <LayoutScreen />
      <ToastContainer hideProgressBar />
      {isLoading && <Loader />}
      <Outlet />
    </>
  );
};

export default Layout;
