import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../Components/Header/Header";
import LatestNews from "../Components/Latest/LatestNews";
import Navbar from "../Components/Navbar/Navbar";
import LeftAside from "../Components/MainLayout/LeftAside";
import RightAside from "../Components/MainLayout/RightAside";
import Loading from "../Pages/Loading/Loading";

const Layout = () => {
  const {state}=useNavigation()
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
        <aside className="col-span-3 sticky top-10 h-fit">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          {state=="loading"? <Loading></Loading>: <Outlet></Outlet>} 
        </section>
        <aside className="col-span-3 sticky top-10 h-fit">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default Layout;
