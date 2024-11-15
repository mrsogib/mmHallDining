import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Book Meals", href: "/mealbooking" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  const profileMenu = [
    { name: "Profile Details", href: "/userprofile" },
    { name: "Sign out", href: "#" },
  ];

  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef(null);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (
      profileMenuRef.current &&
      !profileMenuRef.current.contains(event.target)
    ) {
      setIsProfileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuItemClick = () => {
    setIsProfileMenuOpen(false);
  };

  return (
    <nav className="bg-gray-300 dark:bg-gray-900 shadow">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-4">
            <div className="hidden sm:flex ">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? "bg-orange-500 text-white"
                        : "text-gray-900 dark:text-gray-100 hover:bg-orange-400 hover:text-white",
                      "rounded-md px-3 py-2 flex place-self-center text-sm font-medium"
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              className="bg-gray-400 dark:bg-gray-600 text-gray-800 dark:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
            >
              {darkMode ? "Light" : "Dark"}
            </button>

            <div className="relative ml-4" ref={profileMenuRef}>
              <button
                onClick={toggleProfileMenu}
                className="bg-gray-400 dark:bg-gray-600 text-gray-800 dark:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                Profile
              </button>
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-300 dark:bg-gray-700 shadow-lg rounded-md py-1">
                  {profileMenu.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-2 text-sm text-gray-800 dark:text-gray-100 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                      onClick={handleMenuItemClick}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={toggleMobileMenu}
              className="ml-4 sm:hidden bg-gray-400 dark:bg-gray-600 text-gray-800 dark:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
            >
              Menu
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  classNames(
                    isActive
                      ? "bg-orange-600 text-white"
                      : "text-gray-900 dark:text-gray-100 hover:bg-orange-400 hover:text-white",
                    "rounded-md px-3 py-2 flex place-self-center text-sm font-medium left-0"
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
