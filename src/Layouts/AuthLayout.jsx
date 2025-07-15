import React from "react";
import Navbar from "../Components/DaisyUi/Navbar";
import Home from "../Pages/Home/Home";
import Footer from "../Components/DaisyUi/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="grid min-h-screen w-full grid-rows-[auto_1fr_auto]">
      {/* HEADER SECTION */}
      <header className="w-full">
        <div className="mx-auto max-w-screen px-4 sm:px-6 lg:px-8">
          <Navbar />
        </div>
      </header>
      {/* MAIN CONTENT SECTION */}
      <main className="w-full">
        <div className="mx-auto max-w-6xl lg:max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
          <Outlet></Outlet>
        </div>
      </main>
      {/* FOOTER SECTION */}
      <footer className="w-full">
        <div className="">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
