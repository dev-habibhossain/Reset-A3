import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import AppDetails from "../Pages/Apps/AppDetails";
import Apps from "../Pages/Apps/Apps";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Installation from "../Pages/Installation/Installation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/apps",
        element: <Apps />,
      },
      {
        path: "/app/:id",
        element: <AppDetails />,
      },
      {
        path: "/installation",
        element: <Installation />,
      },
    ],
  },
]);
