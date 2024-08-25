"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BTN_CLASS } from "../constants";

interface HeaderProps {
  logo: string;
  titleBtn: string;
  linkBtn: string;
}

export function Header(props: HeaderProps) {
  const { logo, titleBtn, linkBtn } = props;
  const [isSticky, setIsSticky] = useState(false);
  const [currentLocale, setCurrentLocale] = useState<string>("en");

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

  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith("/fr")) {
      setCurrentLocale("fr");
    } else {
      setCurrentLocale("en");
    }
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-body transition-all duration-300 ${
        isSticky ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between lg:py-2 sm:py-5 px-4 sm: lg:px-4">
        <div className="flex items-center">
          <Link href="/">
            <img
              src={logo}
              alt="logo-header"
              className={`transition-all duration-300 ${
                isSticky ? "h-9 lg:h-[70px]" : "h-8 lg:h-[80px]"
              }`}
            />
          </Link>
        </div>
        <div className="flex lg:flex lg:flex-1 lg:justify-end items-center gap-6">
          <div className="flex gap-4 items-center justify-center lg:h-[53px]">
            <Link href="/en">
              <span
                className={`cursor-pointer ${
                  currentLocale === "en"
                    ? "font-bold text-[19px]"
                    : "font-light text-[19px]"
                } hover:text-primary`}
              >
                en
              </span>
            </Link>
            <span>/</span>
            <Link href="/fr">
              <span
                className={`cursor-pointer ${
                  currentLocale === "fr"
                    ? "font-bold text-[19px]"
                    : "font-light text-[19px]"
                } hover:text-primary`}
              >
                fr
              </span>
            </Link>
          </div>
          <Link
            href={linkBtn}
            className={BTN_CLASS}
          >
            {titleBtn}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
