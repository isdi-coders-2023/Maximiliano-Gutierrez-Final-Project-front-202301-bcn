import App from "../components/App/App";
import endpoints from "./types";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import LoginPage from "../Pages/LoginPage/LoginPage";
import UnprotectedRoute from "../components/UnprotectedRoute/UnprotectedRoute";
import HomePage from "../Pages/HomePage/HomePage";
import DetailPage from "../Pages/DetailPage/DetailPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <ProtectedRoute element={<HomePage />} /> },
      {
        path: endpoints.details,
        element: <ProtectedRoute element={<DetailPage />} />,
      },

      {
        path: endpoints.login,
        element: <UnprotectedRoute element={<LoginPage />} />,
      },
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
