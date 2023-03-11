import { Navigate } from "react-router-dom";
import endpoints from "../../routers/types";
import { useAppSelector } from "../../store/hooks";

interface ProtectedRouteProps {
  element: JSX.Element;
}

const ProtectedRoute = ({ element }: ProtectedRouteProps): JSX.Element => {
  const { token } = useAppSelector((state) => state.user);

  return token ? element : <Navigate to={endpoints.login} replace={true} />;
};

export default ProtectedRoute;
