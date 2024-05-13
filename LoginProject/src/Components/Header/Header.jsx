import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { Logout } from '../../Logout';
import { useAuth } from '../../auth';

export default function Header() {
    const {isLoggedIn} = useAuth();
    
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-4">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://asset.brandfetch.io/idKvKR3Cea/idPCglRaAU.png"
                            className="mr-3 h-16"
                            alt="Logo"
                        />
                    </Link>
                    
                    <div className="flex items-center lg:order-2">
                        {isLoggedIn ? (
                        <Link
                            to="/logout"
                            className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-semibold rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Logout
                        </Link>
                        ):(
                        <>
                        
                        <Link
                            to="/login"
                            className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-semibold rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        </> )} 
                        
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-semibold lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-indigo-700" : "text-gray-700"} border-b border-gray-100 text-lg hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-indigo-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}