import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="app-container flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
