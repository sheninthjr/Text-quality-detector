"use client";
import React, { useState } from "react";
import SideBar from "./SideBar";

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevIsSidebarOpen) => !prevIsSidebarOpen);
  };

  return (
    <div>
      <div className="bg-black h-16 p-4 fixed top-0 w-full z-10 shadow-md shadow-slate-700">
        <div className="flex justify-between items-center">
          <div className="flex font-semibold text-lg">
            <a href="">Sheninth Jr Analyzer</a>
          </div>
          <div
            className="cursor-pointer block md:hidden"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <span>&times;</span> : <span>&#x2192;</span>}
          </div>
        </div>
      </div>
      {isSidebarOpen && <SideBar isSidebarOpen={isSidebarOpen} />}
    </div>
  );
};

export default NavBar;
