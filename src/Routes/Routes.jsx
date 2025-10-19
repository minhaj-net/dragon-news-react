import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import CetegoryNews from "../Pages/CetegoryNews/CetegoryNews";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "/cetegory/:id",
        Component: CetegoryNews,
        loader: () => fetch("/news.json"),
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
    Component: NewsDetails,
    loader: () => fetch("/news.json"),
  },
  {
    path: "/*",
    element: <h1>Error 404 </h1>,
  },
]);
