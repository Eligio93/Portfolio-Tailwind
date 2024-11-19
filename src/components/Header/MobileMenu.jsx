import { useState } from "react";
import { Link } from "react-router-dom";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="focus:outLinkne-none h-5 w-5 bg-transparent text-pink-500 lg:hidden"
        onClick={() => setOpen(!open)}
      >
        <div className="w-5 transform">
          <span
            aria-hidden="true"
            className={`absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out ${
              open ? "rotate-45" : "-translate-y-1.5"
            }`}
          ></span>
          <span
            aria-hidden="true"
            className={`absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out ${
              open && "opacity-0"
            }`}
          ></span>
          <span
            aria-hidden="true"
            className={`absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out ${
              open ? "-rotate-45" : "translate-y-1.5"
            }`}
          ></span>
        </div>
      </button>
      <ul
        className={`${open ? "absolute left-0 top-10 z-[100] flex w-full animate-fade-down flex-col items-start gap-4 rounded-md bg-sky-500 p-5 text-white lg:hidden" : "hidden"}`}
      >
        <Link to={"/"}>Home</Link>
        <Link to={"/projects"}>Projects</Link>
        <Link to={"/contacts"}>Contact</Link>
      </ul>
    </>
  );
}
