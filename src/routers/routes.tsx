import App from "../App";
import endpoints from "./types";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import LoginPage from "../Pages/LoginPage/LoginPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <ProtectedRoute element={<App />} /> },
      { path: endpoints.login, element: <LoginPage /> },
    ],
  },
];

export const router = createBrowserRouter(routes);

export const getComponentRouter = (ui: React.ReactElement) =>
  createBrowserRouter([
    {
      path: "/",
      element: ui,
    },
  ]);
