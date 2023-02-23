import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

function Layout() {
  return (
    <div className="layout">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default Layout;
