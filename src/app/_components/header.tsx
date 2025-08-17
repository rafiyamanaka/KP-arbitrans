"use client";
import { useScroll } from "motion/react";
import { usePathname } from "next/navigation";

import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "./Button";
import Logo from "./Logo";
import { useScrollRange } from "../hooks/useScrollRange";

type HeaderProps = {
  className?: string;
};

function Header({ className }: HeaderProps) {
  // Scroll Logic
  const inRange = useScrollRange("about-us", "footer");

  // Pathname Logic
  const pathname = usePathname();
  const getLinkClass = (href: string) => {
    const isActive = pathname === href || pathname.startsWith(href + "/");

    if (pathname === "/" && !inRange) {
      return isActive ? "text-white" : "text-netral-400";
    } else if (pathname === "/" && inRange) {
      return isActive ? "text-primary" : "text-netral-700";
    } else {
      return isActive ? "text-netral-900" : "text-netral-600";
    }
  };

  return (
    <header
      className={`z-50 px-24 py-4 flex items-center transition-all duration-500 justify-between ${className} ${
        inRange
          ? "fixed top-5 left-30 right-30 bg-white/10 backdrop-blur-sm rounded-xl border shadow-sm border-netral-200 "
          : "top-0 left-0 right-0"
      }  ${
        pathname === "/"
          ? "bg-primary text-white"
          : "bg-white text-primary shadow-sm"
      }`}
    >
      <Logo
        color={pathname === "/" ? `${inRange ? "blue" : "white"}` : "blue"}
      />
      <nav>
        <ul className="flex space-x-8 items-center justify-center font-medium text-base">
          <li>
            <Link href="/" className={getLinkClass("/")}>
              Beranda
            </Link>
          </li>
          <li>
            <Link href="/rental" className={getLinkClass("/rental")}>
              Rental Kendaraan
            </Link>
          </li>
        </ul>
      </nav>
      <Button
        text="Hubungi Kami"
        variant={`${pathname === "/" ? "secondary" : "primary"}`}
        className={`${
          pathname === "/"
            ? `${
                inRange
                  ? "!bg-primary !text-white "
                  : "bg-white text-primary hover:bg-netral-100"
              }  border-none`
            : "bg-primary text-white "
        }`}
      />
    </header>
  );
}

export default Header;
