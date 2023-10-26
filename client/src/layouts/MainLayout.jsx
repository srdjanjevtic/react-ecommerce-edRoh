import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import ScrollToTop from "../utils/ScrollToTop";

export default function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Outlet />
    </>
  );
}
