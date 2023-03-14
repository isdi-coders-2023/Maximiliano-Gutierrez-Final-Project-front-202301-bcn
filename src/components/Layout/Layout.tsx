import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import HomePage from "../../Pages/HomePage/HomePage";
import Loader from "../Loader/Loader";
import { useAppSelector } from "../../store/hooks";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Layout = (): JSX.Element => {
  const { isLoading } = useAppSelector((state) => state.ui);
  const { isLogged } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      navigate("/login");
    }
  }, [isLogged, navigate]);

  return (
    <>
      <ToastContainer hideProgressBar />
      {isLoading && <Loader />}
      {isLogged && <HomePage />}
      <Outlet />
    </>
  );
};

export default Layout;
