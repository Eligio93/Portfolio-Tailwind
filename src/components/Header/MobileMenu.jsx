import { useState } from "react"

export default function MobileMenu() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <button
                className="relative w-10 h-10 text-white bg-transparent focus:outline-none md:hidden"
                onClick={() => setOpen(!open)}>
                <div className="absolute block w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                    <span
                        aria-hidden="true"
                        className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? "rotate-45" : "-translate-y-1.5"
                            }`}></span>
                    <span
                        aria-hidden="true"
                        className={`block absolute  h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open && "opacity-0"
                            }`}></span>
                    <span
                        aria-hidden="true"
                        className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${open ? "-rotate-45" : "translate-y-1.5"
                            }`}></span>
                </div>
            </button>
            <ul className={`${open ? "w-full absolute top-10 text-white flex flex-col items-start gap-4  bg-indigo-600 p-5 md:hidden" : "hidden"}`}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </>
    )
}