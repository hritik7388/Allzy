'use client'

import {
  Moon,
  Home,
  List,
  ShoppingCart,
  Info,
  Settings,
  User,
  Search,
  Menu,
  X
} from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md bg-gray-100 border-b border-gray-300 relative">
      {/* App Name */}
      <div className="text-2xl font-bold text-gray-900">
        Allzy
      </div>

      {/* Hamburger Icon for Mobile */}
      <button
        className="md:hidden text-gray-900"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      {/* Center - Search Bar (Hidden on mobile) */}
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

      {/* Right Side - Icons + Dark Mode Toggle (Hidden on mobile) */}
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
        <button
          aria-label="Toggle Dark Mode"
          className="p-2 rounded-md transition hover:text-red-500 hover:drop-shadow-[0_0_6px_red]"
        >
          <Moon className="w-6 h-6 text-gray-900" />
        </button>
        <a href="#" className="text-gray-900 hover:text-red-500 hover:drop-shadow-[0_0_6px_red] transition">
          <User />
        </a>
      </div>

      {/* Mobile Dropdown Menu */}
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
          <button
            aria-label="Toggle Dark Mode"
            className="flex items-center gap-2 text-gray-900 hover:text-red-500"
          >
            <Moon /> Dark Mode
          </button>
          <a href="#" className="flex items-center gap-2 text-gray-900 hover:text-red-500">
            <User /> Account
          </a>
        </div>
      )}
    </header>
  )
}
