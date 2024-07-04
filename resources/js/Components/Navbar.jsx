export default function Navbar(props) {
    return (
        <header className="flex flex-wrap justify-between items-center py-4">
            <div className="w-fit flex justify-between items-center bg-primary">
                <a href="#" className="text-xl text-white">
                    F.F LOGO
                </a>
            </div>

            <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
                <svg
                    className="fill-current text-secondary-gray"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                >
                    <title>menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </label>
            <input className="hidden" type="checkbox" id="menu-toggle" />

            <div
                className="hidden md:flex md:items-center md:w-auto w-full"
                id="menu"
            >
                <nav>
                    <ul className="md:flex items-center gap-5 justify-between text-secondary-gray pt-4 md:pt-0">
                        <li>
                            <a className="py-3 px-0 block text-primary-dark underline underline-offset-8" 
                            href="#">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="py-3 px-0 block hover:text-primary-dark hover:underline underline-offset-8" 
                            href="#">
                                Blogs
                            </a>
                        </li>
                        <li>
                            <a className="py-3 px-0 block hover:text-primary-dark hover:underline underline-offset-8" 
                            href="#">
                                About
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
