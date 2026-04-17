/** @format */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../../../assets/logo.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faClockRotateLeft,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const pathname = usePathname();

  const navLinkClass = (href) =>
    pathname === href
      ? "btn btn-sm bg-emerald-700 text-white hover:bg-emerald-800"
      : "btn btn-sm btn-ghost text-slate-700";

  return (
    <header className="border-b border-slate-200 bg-white shadow-base-300">
      <div className="navbar container mx-auto flex-col gap-3 px-4 py-3 sm:flex-row sm:py-2">
        <div className="flex-1 justify-center sm:justify-start">
          <Link href="/" className="inline-flex items-center">
            <Image
              src={logo}
              alt="Keen Keeper Logo"
              width={120}
              className="h-auto w-24 sm:w-30"
              priority
            />
          </Link>
        </div>
        <div className="flex-none w-full sm:w-auto">
          <ul className="menu menu-horizontal w-full justify-center gap-2 px-1 sm:gap-5">
            <li>
              <Link href="/" className={navLinkClass("/")}>
                <FontAwesomeIcon icon={faHouse} />
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/apps/Timeline"
                className={navLinkClass("/apps/Timeline")}
              >
                <FontAwesomeIcon icon={faClockRotateLeft} />
                Timeline
              </Link>
            </li>
            <li>
              <Link
                href="/apps/Status"
                className={navLinkClass("/apps/Status")}
              >
                <FontAwesomeIcon icon={faChartSimple} />
                Stats
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
