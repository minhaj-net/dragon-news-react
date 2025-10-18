import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import CetegoryNews from "../Pages/CetegoryNews/CetegoryNews";

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
    element: <h1>Athentication layout</h1>,
  },
  {
    path: "/news",
    element: <h1>News Leyout</h1>,
  },
  {
    path: "/*",
    element: <h1>Error 404 </h1>,
  },
]);
