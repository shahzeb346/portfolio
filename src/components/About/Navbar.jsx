


import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom"; // if using router elsewhere

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skill", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">SK Creation</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          {navigation.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="hover:text-indigo-600">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-indigo-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-3 text-gray-700 font-medium bg-white">
          {navigation.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="block hover:text-indigo-600"
                onClick={() => setIsOpen(false)} // close menu on click
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
