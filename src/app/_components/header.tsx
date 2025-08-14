"use client";

import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  const getLinkClass = (href: string) => {
    const isActive = pathname === href || pathname.startsWith(href + "/");

    if (pathname === "/") {
      return isActive ? "text-white" : "text-netral-400";
    } else {
      return isActive ? "text-netral-900" : "text-netral-600";
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-24 py-4 flex items-center justify-between  ${
        pathname === "/"
          ? "bg-primary text-white"
          : "bg-white text-primary shadow-sm"
      }`}
    >
      <Logo color={pathname === "/" ? "white" : "blue"} />
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

      <button
        className={`px-6 py-3 rounded-xl font-medium  ${
          pathname === "/"
            ? "bg-white text-primary shadow-sm "
            : "bg-primary text-white"
        }`}
      >
        Hubungi Kami
      </button>
    </header>
  );
}

export default Header;
