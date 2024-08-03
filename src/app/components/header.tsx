"use client";
import { useEffect, useState } from "react";

export interface HeaderProps {
  children?: any;
}

export function Header(props: HeaderProps) {
  const { children } = props;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        isSticky ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-6 lg:px-8">
        <div className="flex items-center">
          <img
            src="https://joinapolo.com/app/themes/child/assets/images/logo-apolo.svg"
            alt="logo-header"
            className={`transition-all duration-300 ${
              isSticky ? "h-12" : "h-14"
            }`}
          />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>{" "}
          </button>
        </div>
        {children}
      </div>
    </header>
  );
}

export default Header;
