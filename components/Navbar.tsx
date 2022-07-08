const Navbar = () => {
    return (
        <nav className="border-gray-200 px-2 py-2.5 bg-gray-700">
            <div className="container flex justify-between items-center mx-auto">
                <span className="text-xl font-semibold text-white">PM2</span>

                <ul className="flex flex-row space-x-8 text-sm font-medium">
                    <li>
                        <a href="#" className="hover:text-gray-50 text-gray-400">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-50 text-gray-400">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-50 text-gray-400">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-50 text-gray-400">
                            Pricing
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-50 text-gray-400">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
