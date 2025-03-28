import React, { useState, useEffect } from "react";
import reactLogo from "../assets/react.svg";
import { Seachbox } from "./Seachbox";
export const Navber = () => {
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleTheme = () => {
    setTheme(!theme);
  };
  return (
    <div className="p-4 shadow-2xl">
      <header className={
        theme ?  'dark' :'light' 
    }>
        <nav className="flex justify-between items-center">
          <img src={reactLogo} alt="logo" />
          <Seachbox></Seachbox>
          <button className="" onClick={handleTheme}>
            {theme ? "Light Mode" : "Dark Mode"}
          </button>
        </nav>
      </header>
    </div>
  );
};
