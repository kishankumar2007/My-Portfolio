import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
   const [isClicked, setisClicked] = useState(false)
  const [scroll, setScroll] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });
  const handleClick = () =>{
    setisClicked(!isClicked)
  }
  const closeSlider = () =>{
          setisClicked(!isClicked)
  }
  return (
    <>
      <div
        className={` ${
          scroll
            ? " bg-gray-900/90  backdrop-blur-md py-2"
            : "bg-[#030014] py-4"
        } fixed top-0 left-0 right-0 nav w-full flex justify-between items-center px-5  sm:px-20 z-10`}
      >
        <div className="logo text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-violet-800">
          Kishan Kumar
        </div>
        <div onClick={handleClick} className="text-[#e2d3fd] text-2xl md:hidden">&#9776;</div>
        <div className={`menu ${isClicked ?'top-0':'-top-100'} md:hidden transition-all ease duration-400 absolute flex pt-5 flex-col w-screen items-center bg-[#030014]  left-0 right-0 `}>
          <h1 onClick={closeSlider} className="closeSlider absolute right-5 top-5 text-white/90 font-bold">X</h1>
          <NavLink
            to="/"
            className={({ isActive }) => `${
              isActive
                ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-violet-800 border-b-2 m-3 border-violet-700"
                : "text-[#e2d3fd]"
            }     
                text-sm font-semibold  `}
          > Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-violet-800 border-b-2 m-3 border-violet-700"
                  : "text-[#e2d3fd]"
              } m-3 text-sm font-semibold`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-violet-800 border-b-2 m-3 border-violet-700"
                  : "text-[#e2d3fd]"
              } m-3 font-semibold text-sm`
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-violet-800 border-b-2 m-3 border-violet-700"
                  : "text-[#e2d3fd]"
              } m-3 font-semibold text-sm`
            }
          >
            Contact
          </NavLink>
        </div>
        <div className="nav-menu hidden md:flex items-center gap-10">
          <NavLink
            to="/"
            className={({ isActive }) => `${
              isActive
                ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-violet-800 border-b-2 m-3 border-violet-700"
                : "text-[#e2d3fd]"
            }     
                text-sm font-semibold`}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-violet-800 border-b-2 m-3 border-violet-700"
                  : "text-[#e2d3fd]"
              } m-3 text-sm font-semibold`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-violet-800 border-b-2 m-3 border-violet-700"
                  : "text-[#e2d3fd]"
              } m-3 font-semibold text-sm`
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-violet-800 border-b-2 m-3 border-violet-700"
                  : "text-[#e2d3fd]"
              } m-3 font-semibold text-sm`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
