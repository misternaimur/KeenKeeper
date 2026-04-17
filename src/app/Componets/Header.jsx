/** @format */

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <section className="bg-slate-100/60 py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 md:text-5xl">
            Friends to keep close in your life
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 md:text-base">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          <Link
            href="/timeline"
            className="btn btn-sm mt-6 border-emerald-700 bg-emerald-700 text-white hover:border-emerald-800 hover:bg-emerald-800"
          >
            <FontAwesomeIcon icon={faPlus} />
            Add a Friend
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-slate-200 bg-white px-6 py-5 text-center shadow-sm">
            <p className="text-3xl font-bold text-slate-800">10</p>
            <p className="mt-1 text-sm text-slate-500">Total Friends</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white px-6 py-5 text-center shadow-sm">
            <p className="text-3xl font-bold text-slate-800">3</p>
            <p className="mt-1 text-sm text-slate-500">On Track</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white px-6 py-5 text-center shadow-sm">
            <p className="text-3xl font-bold text-slate-800">6</p>
            <p className="mt-1 text-sm text-slate-500">Need Attention</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white px-6 py-5 text-center shadow-sm">
            <p className="text-3xl font-bold text-slate-800">12</p>
            <p className="mt-1 text-sm text-slate-500">
              Interactions This Month
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
