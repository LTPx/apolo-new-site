"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

interface HeaderProps {
  logo: string;
  titleBtn: string;
}

export function Header(props: HeaderProps) {
  const { logo, titleBtn } = props;
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
          <Link href="/">
            <img
              src={logo}
              alt="logo-header"
              className={`transition-all duration-300 ${
                isSticky ? "h-9 lg:h-12" : "h-8 lg:h-14"
              }`}
            />
          </Link>
        </div>
        <div className="lg:flex lg:flex-1 lg:justify-end items-center gap-6">
          <div className="flex gap-4 items-center">
            <span className="text-md font-semibold text-gray-700 hover:text-primary cursor-pointer">
              EN
            </span>
            <span>/</span>
            <span className="text-md font-semibold text-gray-700 hover:text-primary cursor-pointer">
              FR
            </span>
          </div>
          <Link
            href="/jobs"
            className="text-md font-semibold text-gray-700 hover:text-primary"
          >
            Jobs
          </Link>
          <Link
            href="/"
            className="rounded-3xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {titleBtn}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
