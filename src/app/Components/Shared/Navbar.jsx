/** @format */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../../../assets/logo.png";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();

  const navLinkClass = (href) =>
    pathname === href
      ? "btn btn-sm bg-emerald-700 text-white hover:bg-emerald-800"
      : "btn btn-sm btn-ghost text-slate-700";

  return (
    <header className="border-b border-slate-200 bg-white shadow-sm">
      <div className="navbar container mx-auto">
          <div className="flex-1">
          <Link href="/" className="inline-flex items-center">
            <Image src={logo} alt="Keen Keeper Logo" width={120} priority />
          </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/" className={navLinkClass("/")}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/apps/Timeline" className={navLinkClass("/apps/Timeline")}>
                  Timeline
                </Link>
              </li>
              <li>
                <Link href="/apps/Status" className={navLinkClass("/apps/Status")}>
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
