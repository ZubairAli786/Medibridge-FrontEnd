import React from "react";
import "./Layout.css";

import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <div className="layotParent">
      <Header />

      <div className="Outlet">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
