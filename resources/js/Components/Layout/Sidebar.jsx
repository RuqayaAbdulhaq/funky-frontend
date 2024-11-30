import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavLink from "@/Components/UI/NavLink";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex">
            {/* Hamburger Button for Mobile */}
            <button
                onClick={toggleSidebar}
                className="md:hidden p-4 focus:outline-none"
                aria-label="Toggle Sidebar"
            >
                <i
                    className={`bi bi-list text-gray-700 text-xl font-bold cursor-pointer`}
                ></i>
            </button>

            {/* Sidebar Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-y-0 left-0 w-64 bg-white text-gray-900 z-50 md:relative md:translate-x-0"
                    >
                        <nav className="flex flex-col h-full p-4 space-y-4">
                            <div className="w-full flex items-end justify-between">
                                <h1 className="text-xl font-bold">
                                    Funky Frontend
                                </h1>
                                <i
                                    onClick={toggleSidebar}
                                    className="bi bi-x text-gray-700 text-xl font-bold cursor-pointer"
                                ></i>
                            </div>
                            <NavLink
                                href={route("dashboard")}
                                active={route().current("dashboard")}
                            >
                                Dashboard
                            </NavLink>

                            <NavLink
                                href={route("admin.blogs")}
                                active={route().current("admin.blogs")}
                            >
                                Blogs
                            </NavLink>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Desktop Sidebar */}
            <div className="hidden md:block w-64 bg-white text-gray-900 min-h-screen">
                <nav className="flex flex-col h-full p-4 space-y-4">
                    <h1 className="text-xl font-bold">Funky Frontend</h1>
                    <NavLink
                        href={route("dashboard")}
                        active={route().current("dashboard")}
                    >
                        Dashboard
                    </NavLink>

                    <NavLink
                        href={route("admin.blogs")}
                        active={route().current("admin.blogs")}
                    >
                        Blogs
                    </NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
