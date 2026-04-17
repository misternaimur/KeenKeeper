/** @format */

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-emerald-50 to-slate-100 px-4">
      <section className="w-full max-w-md rounded-3xl border border-white/40 bg-white/70 backdrop-blur-xl shadow-xl px-8 py-12 text-center transition-all hover:shadow-2xl">
        {/* 404 Badge */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-xl font-bold shadow-sm">
          404
        </div>

        {/* Title */}
        <h1 className="mt-6 text-4xl font-bold text-slate-900 tracking-tight">
          Page not found
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-slate-600 leading-relaxed">
          The page you are looking for doesn’t exist, has been moved, or is
          temporarily unavailable.
        </p>

        {/* Divider */}
        <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {/* Button */}
        <Link
          href="/"
          className="btn btn-success w-full text-white shadow-md hover:shadow-lg transition-all duration-300"
        >
          Go Back Home
        </Link>

        {/* Secondary hint */}
        <p className="mt-5 text-xs text-slate-400">
          If you think this is a mistake, please check the URL and try again.
        </p>
      </section>
    </main>
  );
}
