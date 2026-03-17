import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layouts/MainLayout";
import Products from "../Pages/Products/Products";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children:[
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/products',
            element: <Products />
        }

    ]
  },
]);