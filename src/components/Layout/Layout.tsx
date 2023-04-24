import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import Loader from "../Loader/Loader";
import { useAppSelector } from "../../store/hooks";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import BottomNavigation from "../BottomNavigation/BottomNavigation";

const protectedRoutes = [
  "/",
  "/details/:id",
  "/create",
  "/filter",
  "/delete/:id",
  "/edit/:id",
];

const Layout = (): JSX.Element => {
  const { isLoading } = useAppSelector((state) => state.ui);
  const { isLogged } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isLogged && protectedRoutes.includes(location.pathname)) {
      navigate("/register");
    }
  }, [isLogged, navigate, location]);

  return (
    <>
      <ToastContainer hideProgressBar />
      {isLoading && <Loader />}

      <Outlet />
      {isLogged && <BottomNavigation />}
    </>
  );
};

export default Layout;
