import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="relative p-3">
      <>
        <nav className="relative">
          <MobileMenu />
          <ul className="hidden justify-end gap-10 pt-10 text-white lg:flex">
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
      </>
    </header>
  );
}
