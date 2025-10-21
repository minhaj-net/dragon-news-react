import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import CetegoryNews from "../Pages/CetegoryNews/CetegoryNews";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../Pages/Loading/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
     Loading:<Loading></Loading>,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "/cetegory/:id",
        Component: CetegoryNews,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement:<Loading></Loading>
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/news-details/:id",
    element:(
      <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>
    ),
    loader: () => fetch("/news.json"),
     hydrateFallbackElement:<Loading></Loading>
  },
  {
    path: "/*",
    element: <h1>Error 404 </h1>,
  },
]);
