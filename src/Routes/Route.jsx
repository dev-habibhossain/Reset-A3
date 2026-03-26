import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Pages/Error/Error";
import Apps from "../Pages/Apps/Apps";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children:[
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/apps',
            element: <Apps />
        }

    ]
  },
]);