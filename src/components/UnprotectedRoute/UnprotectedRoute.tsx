import { useAppSelector } from "../../store/hooks";
import { Navigate } from "react-router-dom";
import endpoints from "../../routers/types";

interface UnprotectedRouteProps {
  element: JSX.Element;
}

const UnprotectedRoute = ({ element }: UnprotectedRouteProps): JSX.Element => {
  const token = useAppSelector((state) => state.user.token);

  return token ? <Navigate to={endpoints.home} replace={true} /> : element;
};

export default UnprotectedRoute;
