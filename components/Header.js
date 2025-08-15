"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSignUpMode, setIsSignUpMode] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    checkScreenSize();
    handleScroll();

    window.addEventListener("resize", checkScreenSize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleAuthMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  const menuItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Services", href: "#services" },
  ];

  return (
    <>
      <header
        className={`absolute top-0 left-0 w-full z-[999] transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="relative flex items-center justify-between w-full px-4 sm:px-6 lg:px-14 py-4">
          {/* Logo */}
          <div className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <img
              src="assets/images/logo.svg"
              alt="Logo"
              className="h-6 sm:h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation - centered */}
          <nav className="hidden lg:flex items-center gap-8 bg-[#fbf6f8] border border-white border-solid rounded-[20px] h-16 px-10 shadow-sm">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-[#8987a1] text-base font-bold hover:opacity-80 cursor-pointer hover:text-[#252432] transition-all duration-300 whitespace-nowrap  focus:outline-offset-2 focus:rounded after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-[#4d47ff] after:to-[#3d37ef] after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full"
                style={{ fontFamily: "Inter" }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Auth buttons */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <span
              onClick={toggleAuthMode}
              className={`text-base font-normal cursor-pointer transition-all duration-300 hover:scale-105 focus:outline-2 focus:outline-[#4d47ff] focus:outline-offset-2 focus:rounded ${
                isSignUpMode
                  ? "text-[#8987a1] opacity-80 hover:opacity-100"
                  : "text-white bg-[#4d47ff] hover:bg-[#3d37ef] h-12 px-6 rounded-[10px] flex items-center justify-center shadow-md hover:shadow-lg font-bold relative overflow-hidden before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-all before:duration-500 hover:before:left-full"
              }`}
              style={{ fontFamily: "Raleway" }}
            >
              Sign In
            </span>
            <button
              onClick={toggleAuthMode}
              className={`text-base transition-all duration-300 transform hover:scale-105 focus:outline-2 focus:outline-[#4d47ff] focus:outline-offset-2 focus:rounded ${
                isSignUpMode
                  ? "relative overflow-hidden bg-[#4d47ff] h-12 px-6 rounded-[10px] flex items-center justify-center hover:bg-[#3d37ef] shadow-md hover:shadow-lg font-bold text-white before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-all before:duration-500 hover:before:left-full"
                  : "text-[#8987a1] font-normal opacity-80 hover:opacity-100"
              }`}
              style={{ fontFamily: "Raleway" }}
            >
              Sign Up
            </button>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className={`relative w-10 h-10 flex flex-col justify-center items-center bg-[#fbf6f8] border border-white rounded-lg hover:bg-[#f0ebee] transition-all duration-300 shadow-sm hover:shadow-md focus:outline-2 focus:outline-[#4d47ff] focus:outline-offset-2 focus:rounded ${
                isMobileMenuOpen ? "" : ""
              }`}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span
                className={`block w-5 h-0.5 bg-[#8987a1] transition-all duration-300 transform origin-center ${
                  isMobileMenuOpen
                    ? "rotate-45 translate-x-1 translate-y-1"
                    : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-[#8987a1] mt-1 transition-all duration-300 transform origin-center ${
                  isMobileMenuOpen ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-[#8987a1] mt-1 transition-all duration-300 transform origin-center ${
                  isMobileMenuOpen
                    ? "-rotate-45 translate-x-1.5 -translate-y-1.5"
                    : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile/Tablet Sidebar Menu */}
      <div
        className={`fixed inset-0 z-[1000] transition-all duration-300 ${
          isMobileMenuOpen ? "visible" : "invisible"
        } lg:hidden`}
      >
        <div
          className={`absolute inset-0 bg-black backdrop-blur transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-50" : "opacity-0"
          }`}
          onClick={toggleMobileMenu}
        />

        <div
          className={`absolute top-0 right-0 h-full w-80 sm:w-96 bg-gradient-to-br from-white to-[#fbf6f8] transform transition-all duration-500 ease-out shadow-[-10px_0_25px_rgba(0,0,0,0.1)] ${
            isMobileMenuOpen ? "translate-x-0 shadow-2xl" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <img
              src="assets/images/logo.svg"
              alt="Logo"
              className="h-6 w-auto transition-transform duration-300 hover:scale-105"
            />
            <button
              onClick={toggleMobileMenu}
              className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 focus:outline-2 focus:outline-[#4d47ff] focus:outline-offset-2 focus:rounded"
              aria-label="Close menu"
            >
              <svg
                className="w-5 h-5 text-gray-600 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="py-8">
            {menuItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={toggleMobileMenu}
                className={`relative overflow-hidden block px-6 py-4 text-lg font-semibold text-[#8987a1] hover:text-[#252432] hover:bg-[#fbf6f8] transition-all duration-300 transform hover:translate-x-2 hover:scale-105 focus:outline-2 focus:outline-[#4d47ff] focus:outline-offset-2 focus:rounded before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-[rgba(77,71,255,0.1)] before:to-transparent before:transition-all before:duration-500 hover:before:left-full ${
                  isMobileMenuOpen ? "animate-slideInRight" : ""
                }`}
                style={{
                  fontFamily: "Inter",
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#4d47ff] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  {item.name}
                </div>
              </a>
            ))}
          </nav>

          <div
            className={`absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100 bg-gradient-to-r from-[#fbf6f8] to-[#f8f3f6] ${
              isMobileMenuOpen ? "animate-fadeInScale" : ""
            }`}
          >
            <div className="flex flex-col gap-4">
              <button
                onClick={toggleAuthMode}
                className={`w-full py-3 text-lg transition-all duration-300 transform hover:scale-105 focus:outline-2 focus:outline-[#4d47ff] focus:outline-offset-2 focus:rounded ${
                  isSignUpMode
                    ? "text-[#8987a1] font-normal hover:text-[#252432]"
                    : "bg-gradient-to-r from-[#4d47ff] to-[#3d37ef] hover:from-[#3d37ef] hover:to-[#2d27df] shadow-lg hover:shadow-xl rounded-[10px] text-white font-bold"
                }`}
                style={{ fontFamily: "Raleway" }}
              >
                Sign In
              </button>
              <button
                onClick={toggleAuthMode}
                className={`w-full py-3 text-lg transition-all duration-300 transform hover:scale-105 focus:outline-2 focus:outline-[#4d47ff] focus:outline-offset-2 focus:rounded ${
                  isSignUpMode
                    ? "bg-gradient-to-r from-[#4d47ff] to-[#3d37ef] hover:from-[#3d37ef] hover:to-[#2d27df] shadow-lg hover:shadow-xl rounded-[10px] text-white font-bold"
                    : "text-[#8987a1] font-normal hover:text-[#252432]"
                }`}
                style={{ fontFamily: "Raleway" }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
