"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export function Header() {
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
          isSticky ? "h-9 lg:h-12" : "h-8 lg:h-14"
        }`}
      />
        </div>
        <div className="lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/"
            className="rounded-3xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Join Apolo
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
