import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Link from "next/link";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="rounded-none shadow-sm px-24 py-16 bg-primary/10">
      <div className="flex sm:items-start sm:justify-between">
        <div>
          <Logo color="blue" />
          <p className="font-medium text-netral-700 mt-4">
            Rental Mudah. Kendaraan Siap. Langsung Berangkat!
          </p>
        </div>
        <ul className="flex items-center gap-8 ">
          <li>
            <Link
              href="/"
              className={`hover:underline ${
                pathname === "/" ? "text-netral-900" : "text-netral-600"
              }`}
            >
              Beranda
            </Link>
          </li>
          <li>
            <Link
              href="/rental"
              className={`hover:underline ${
                pathname === "/" ? " text-netral-600" : "text-netral-900"
              }`}
            >
              Rental Kendaraan
            </Link>
          </li>
        </ul>
      </div>
      <hr className="border-t border-netral-500 my-12" />
      <span className="block text-sm text-netral-600 sm:text-center">
        © 2025{" "}
        <a href="https://arbitrans.com/" className="hover:underline">
          ARBITRANS
        </a>{" "}
        | . All Rights Reserved.
      </span>
    </footer>
  );
}
