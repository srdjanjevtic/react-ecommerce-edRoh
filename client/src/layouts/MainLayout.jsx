import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import ScrollToTop from "../utils/ScrollToTop";
import CartMenu from "../pages/CartMenu";

export default function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <CartMenu />
      <Outlet />
    </>
  );
}
