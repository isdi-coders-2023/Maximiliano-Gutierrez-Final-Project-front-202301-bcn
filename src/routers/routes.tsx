import App from "../components/App/App";
import endpoints from "./types";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import LoginPage from "../Pages/LoginPage/LoginPage";
import UnprotectedRoute from "../components/UnprotectedRoute/UnprotectedRoute";
import HomePage from "../Pages/HomePage/HomePage";
import DetailPage from "../Pages/DetailPage/DetailPage";
import CreatePage from "../Pages/CreatePage/CreatePage";
import FilterPage from "../Pages/FilterPage/FilterPage";
import EditPage from "../Pages/EditPage/EditPage";
import NotFoundPage from "../Pages/NotFounPage/NotFoundPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
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
      {
        path: endpoints.create,
        element: <ProtectedRoute element={<CreatePage />} />,
      },
      {
        path: endpoints.filter,
        element: <ProtectedRoute element={<FilterPage />} />,
      },
      {
        path: endpoints.delete,
        element: <ProtectedRoute element={<HomePage />} />,
      },
      {
        path: endpoints.edit,
        element: <ProtectedRoute element={<EditPage />} />,
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
