import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header/Header";
import LatestNews from "../Components/Latest/LatestNews";
import Navbar from "../Components/Navbar/Navbar";
import LeftAside from "../Components/MainLayout/LeftAside";
import RightAside from "../Components/MainLayout/RightAside";

const Layout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto ">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-11/12 mx-auto">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-4 mt-8  ">
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default Layout;
