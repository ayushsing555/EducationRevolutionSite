import React, {useState} from "react";
import {Link} from "react-router-dom";
import logo from '../assests/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {name: "Home", to: "/"},
    {name: "About", to: "/about"},
    {name: "Lightning", to: "#lightning"},
    {name: "Courses", to: "#courses"},
    {name: "Admin", to: "#admin"},
    {name: "Daily Quiz", to: "#daily-quiz"},
    {name: "Quizzes", to: "#quizzes"},
    {name: "Create Quiz", to: "#create-quiz"},
    {name: "Logout", to: "#logout"},
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-white text-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <img src={logo} alt="Logo" className="h-8 w-8" />
            </div>

            {/* Desktop Menu - Hidden on mobile */}
            <ul className="hidden lg:flex space-x-12 text-sm">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className="relative hover:text-gray-800 transition duration-300 after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-purple-600 after:left-0 after:bottom-[-4px] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Hamburger Menu Button - Only visible on mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden focus:outline-none text-gray-800"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu with updated styling */}
          <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden mt-4`}>
            <ul className="flex flex-col space-y-4 text-sm">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className="relative hover:text-gray-800 transition duration-300 after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-purple-600 after:left-0 after:bottom-[-4px] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 block"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;