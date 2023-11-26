import React from "react";

const SideBar = () => {
  return (
    <>
      <div className="flex justify-center fixed bottom-0 left-0 w-full p-4 h-20">
        <div className="relative w-1/2">
          <input
            type="text"
            placeholder="Jr Detector..."
            className="w-full text-lg text-white bg-slate-800 font-medium rounded-2xl px-4 py-2 focus:outline-none border-2 border-slate-500 focus:border-slate-500 pr-12"
          />
        </div>
      </div>
    </>
  );
};

export default SideBar;
