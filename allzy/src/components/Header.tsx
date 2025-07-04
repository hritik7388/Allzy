"use client";

import { Moon, Home, List, ShoppingCart, Info, Settings, User, Search, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false); // Replace with real auth logic

    return (
        <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 shadow-md bg-[#f1ecca] border-b border-gray-300 relative">
            {/* App Name */}
            <div className="text-2xl font-bold text-orange-500">Allzy</div>

            {/* Mobile menu button */}
            <button className="md:hidden text-gray-900" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X /> : <Menu />}
            </button>

            {/* Search bar */}
            <div className="hidden md:flex flex-1 mx-10 relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search className="w-5 h-5 text-gray-900" />
                </span>
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-900 focus:outline-none focus:ring-2 focus:ring-red-300 text-black placeholder:text-black"
                />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
                <a href="#" className="text-gray-900 hover:text-red-500 hover:drop-shadow-[0_0_6px_red] transition">
                    <Home />
                </a>
                <a href="#" className="text-gray-900 hover:text-red-500 hover:drop-shadow-[0_0_6px_red] transition">
                    <List />
                </a>
                <a href="#" className="text-gray-900 hover:text-red-500 hover:drop-shadow-[0_0_6px_red] transition">
                    <ShoppingCart />
                </a>
                <a href="#" className="text-gray-900 hover:text-red-500 hover:drop-shadow-[0_0_6px_red] transition">
                    <Info />
                </a>
                <a href="#" className="text-gray-900 hover:text-red-500 hover:drop-shadow-[0_0_6px_red] transition">
                    <Settings />
                </a>

                {/* Conditional: Profile or Sign In/Up */}
                {loggedIn ? (
                    <a href="/profile" className="text-gray-900 hover:text-red-500 hover:drop-shadow-[0_0_6px_red] transition">
                        <User />
                    </a>
                ) : (
                    <a
                        href="/signin"
                        className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-md transition"
                    >
                        Sign In / Sign Up
                    </a>
                )}
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-gray-100 border-t border-gray-300 px-6 py-4 flex flex-col space-y-4 md:hidden z-50">
                    {/* Search Bar */}
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <Search className="w-5 h-5 text-gray-900" />
                        </span>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-900 focus:outline-none focus:ring-2 focus:ring-red-300 text-black placeholder:text-black"
                        />
                    </div>

                    {/* Links */}
                    <a href="#" className="flex items-center gap-2 text-gray-900 hover:text-red-500">
                        <Home /> Home
                    </a>
                    <a href="#" className="flex items-center gap-2 text-gray-900 hover:text-red-500">
                        <List /> List
                    </a>
                    <a href="#" className="flex items-center gap-2 text-gray-900 hover:text-red-500">
                        <ShoppingCart /> Cart
                    </a>
                    <a href="#" className="flex items-center gap-2 text-gray-900 hover:text-red-500">
                        <Info /> Info
                    </a>
                    <a href="#" className="flex items-center gap-2 text-gray-900 hover:text-red-500">
                        <Settings /> Settings
                    </a>

                    {/* Conditional: Profile or Sign In/Up (Mobile) */}
                    {loggedIn ? (
                        <a href="/profile" className="flex items-center gap-2 text-gray-900 hover:text-red-500">
                            <User /> Account
                        </a>
                    ) : (
                        <a
                            href="/signin"
                            className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-md text-center"
                        >
                            Sign In / Sign Up
                        </a>
                    )}
                </div>
            )}
        </header>
    );
}
