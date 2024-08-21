"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface HeaderProps {
  logo: string;
  titleBtn: string;
  width?: number;
  height?: number;
  linkBtn: string;
}

export function Header(props: HeaderProps) {
  const { logo, titleBtn, width, height, linkBtn } = props;
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
              style={{
                width: width ? `${width}px` : undefined,
                height: height ? `${height}px` : undefined,
              }}
              className={`transition-all duration-300 ${
                isSticky ? "h-9 lg:h-12" : "h-8 lg:h-14"
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
                    ? "font-var text-[24px]"
                    : "font-regular text-[18px]"
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
                    ? "font-var text-[24px]"
                    : "font-regular text-[18px]"
                } hover:text-primary`}
              >
                fr
              </span>
            </Link>
          </div>
          <Link
            href={linkBtn}
            className="font-var px-[15px] bg-primary h-[37px] flex items-center justify-center rounded-[4px] text-white hover:bg-primary-600"
            style={{
              fontSize: "20px",
              lineHeight: "22px",
              fontWeight: 664,
            }}
          >
            {titleBtn}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
