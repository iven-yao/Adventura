import React, { useState } from 'react';
import logo from '../ui/logo.jpg';
import User from './User.js';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className="bg-dark flex items-center justify-between flex-wrap p-3">
                <div className="flex items-center flex-shrink-0 mr-6 lg:mr-72">
                    <img src={logo} className="w-110 h-12 mr-2" alt="Logo" />
                </div>
                <div className="block lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center px-3 py-2 rounded text-zinc-300 hover:text-black-400"
                    >
                        <svg
                            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                        <svg
                            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                        </svg>
                    </button>
                </div>
                <div
                    className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
                >
                    <div className="text-sm lg:flex-grow">
                        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-zinc-300 mr-4">
                            Home
                        </a>
                        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-zinc-300 mr-4">
                            About
                        </a>
                        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-zinc-300 mr-4">
                            Services
                        </a>
                        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-zinc-300 mr-4">
                            Contact
                        </a>
                    </div>
                    <div>
                        <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                            <ul className="py-2" aria-labelledby="user-menu-button">
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-zinc-300 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-zinc-300 dark:hover:text-zinc-300">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-zinc-300 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-zinc-300 dark:hover:text-zinc-300">Settings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-zinc-300 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-zinc-300 dark:hover:text-zinc-300">Earnings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-zinc-300 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-zinc-300 dark:hover:text-zinc-300">Sign out</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex items-center flex-shrink-0 mr-6 lg:mr-72">
                    <User />
                </div>

            </nav>
        </>
    );
}

export default Navbar;


