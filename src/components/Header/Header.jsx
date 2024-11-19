import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between p-5 backdrop-blur-xl">
      <MobileMenu />
      <div className="hidden items-center gap-3 lg:flex"></div>
      <nav className="relative hidden lg:flex">
        <ul className="flex justify-end gap-10 text-white">
          <li className="text-lg font-bold hover:text-sky-500">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="text-lg font-bold hover:text-pink-500">
            <Link to="/projects">Projects </Link>
          </li>
          <li className="text-lg font-bold hover:text-green-500">
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
