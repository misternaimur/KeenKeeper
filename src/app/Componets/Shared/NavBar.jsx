/** @format */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faClockRotateLeft,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const pathname = usePathname();

  const linkClassName = (href) =>
    [
      "btn btn-sm transition-colors",
      pathname === href
        ? "btn-black text-white"
        : "btn-ghost text-slate-700 hover:text-white-800",
    ].join(" ");

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-2xl font-bold text-slate-900">
          Keen Keeper
        </Link>

        <nav className="flex items-center gap-2 text-sm font-medium text-slate-700">
          <Link href="/" className={linkClassName("/")}>
            <FontAwesomeIcon icon={faHouse} />
            Home
          </Link>
          <Link href="/timeline" className={linkClassName("/timeline")}>
            <FontAwesomeIcon icon={faClockRotateLeft} />
            Timeline
          </Link>
          <Link href="/status" className={linkClassName("/status")}>
            <FontAwesomeIcon icon={faChartSimple} />
            Status
          </Link>
        </nav>
      </div>
    </header>
  );
}
