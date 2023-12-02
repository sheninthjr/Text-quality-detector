import React from "react";

const SideBar = ({ isSidebarOpen }: any) => {
  const sidebarWidthClasses = isSidebarOpen
    ? "md:w-1/6 lg:w-1/6 xl:w-1/6"
    : "hidden md:w-1/6 lg:w-1/6 xl:w-1/6";

  return (
    <div
      className={`bg-slate-950 text-white fixed h-full p-4 ${sidebarWidthClasses}`}
    >
      <div className="text-lg font-medium pt-16">Dashboard</div>
      <div className="pt-20 font-medium font-serif text-xl">
        <a href="synonyms">Synonyms</a>
      </div>
      <div className="pt-10 font-medium font-serif text-xl">
        <a href="predict">Text Prediction</a>
      </div>
      <div className="pt-10 font-medium font-serif text-xl">
        <a href="grammar">Grammar Correction</a>
      </div>
      <div className="flex justify-between bottom-0 fixed pb-20 font-serif font-medium text-xl">
        Settings
      </div>
      <div className="flex justify-between bottom-0 fixed pb-4">
        <div className="text-lg font-medium">UserName</div>
      </div>
    </div>
  );
};

export default SideBar;
