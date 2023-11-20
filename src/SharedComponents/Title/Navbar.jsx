import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const drawerRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="block text-gray-800 hover:bg-gray-200 lg:hover:bg-inherit lg:text-white py-2">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className="block text-gray-800 hover:bg-gray-200 lg:hover:bg-inherit lg:text-white py-2"
        >
          Menu
        </NavLink>
      </li>
      <li>
        <NavLink to="/order" className="block text-gray-800 hover:bg-gray-200 lg:hover:bg-inherit lg:text-white py-2">
          Order
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="block text-gray-800 hover:bg-gray-200 lg:hover:bg-inherit lg:text-white py-2">
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-gray-800 bg-opacity-50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a href="#" className="text-white text-lg font-bold">
            Your Logo
          </a>
        </div>
        {/* Desktop menu */}
        {isLargeScreen && (
          <div className="hidden lg:flex lg:items-center lg:w-auto">
            <ul className="lg:flex lg:justify-end space-x-8">{navLinks}</ul>
          </div>
        )}
        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>
        {/* Drawer */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
            <div className="flex justify-end h-full">
              <div ref={drawerRef} className="bg-white w-64 h-full shadow-lg">
                {/* Drawer content */}
                <div className="flex justify-end items-center bg-gray-200 p-4">
                  <button
                    onClick={closeMenu}
                    className="text-gray-800 focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
                <ul className="p-4" onClick={toggleMenu}>{navLinks}</ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
