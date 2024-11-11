import { useState } from "react"
import MobileMenu from "./MobileMenu"

export default function Header() {


    return (
        <header className="relative max-w-screen-xl mx-auto">
            <>
                <nav>
                    <MobileMenu />
                    <ul className="hidden md:flex justify-center text-white gap-36 py-7 border-b">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </>
        </header>
    )
}