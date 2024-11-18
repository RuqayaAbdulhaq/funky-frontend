import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Logo2 from "./Logo3";

function Links(props) {
    return (
        <nav>
            <ul className="list-none flex flex-col md:flex-row items-center gap-5 justify-between text-secondary-gray pt-4 md:pt-0">
                <li>
                    <a
                        className="py-3 px-0 block text-primary-dark underline underline-offset-8"
                        href="#"
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        className="py-3 px-0 block hover:text-primary-dark hover:underline underline-offset-8"
                        href="#"
                    >
                        Blogs
                    </a>
                </li>
                <li>
                    <a
                        className="py-3 px-0 block hover:text-primary-dark hover:underline underline-offset-8"
                        href="#"
                    >
                        About
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default function Navbar(props) {

    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY,"change",(latest) => {
            setScrolled(latest > 0);
    })

    const drawerRef = useRef(null);

    const toggleDrawerHandler = () => {
        if (drawerRef.current) {
            if (drawerRef.current.classList.contains("hidden")) {
                drawerRef.current.classList.remove("hidden");
            } else {
                drawerRef.current.classList.add("hidden");
            }
        }
    };

    return (
        <header className={`${scrolled ? "bg-white/50 backdrop-blur-xl " : ""} sticky top-0 left-0 relative z-[100] w-full px-[20px] flex flex-wrap justify-between items-center py-4`}>
            <div className="w-fit flex justify-between items-center">
                <a href="#" className="text-xl text-white">
                    <Logo2 />
                </a>
            </div>

            <label
                htmlFor="menu-toggle"
                className="cursor-pointer md:hidden block"
            >
                <i className="bi bi-list text-neutral-dark text-xl"></i>
            </label>
            <input
                className="hidden"
                onClick={toggleDrawerHandler}
                type="checkbox"
                id="menu-toggle"
            />

            <div
                className="hidden md:flex md:items-center md:w-auto w-full"
                id="menu"
            >
                <Links />
            </div>

            {/* Extract Drawer into a Component  */}
            <div
                ref={drawerRef}
                id="nav-drawer"
                className="hidden fixed top-0 left-0 h-screen p-4 overflow-y-auto  bg-white z-40 w-80 dark:bg-gray-800"
                tabIndex="-1"
                aria-labelledby="drawer-label"
            >
                <button
                    onClick={toggleDrawerHandler}
                    type="button"
                    data-drawer-hide="drawer-example"
                    aria-controls="drawer-example"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                    <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>

                <Links />
            </div>
        </header>
    );
}
