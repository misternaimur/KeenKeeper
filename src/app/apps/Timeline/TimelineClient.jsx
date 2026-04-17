/** @format */

"use client";

import { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faCommentDots,
  faPhone,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

const storageKey = "keenkeeper_timeline";

const typeIconMap = {
  Call: faPhone,
  Text: faCommentDots,
  Video: faVideo,
};

const typeBadgeMap = {
  Call: "bg-blue-100 text-blue-700",
  Text: "bg-green-100 text-green-700",
  Video: "bg-indigo-100 text-indigo-700",
};

export default function TimelineClient() {
  const [entries, setEntries] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
      return Array.isArray(saved) ? saved : [];
    } catch {
      return [];
    }
  });
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const handleStorageChange = () => {
      try {
        const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
        setEntries(Array.isArray(saved) ? saved : []);
      } catch {
        setEntries([]);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const sortedEntries = useMemo(() => {
    return [...entries].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }, [entries]);

  const filteredEntries = useMemo(() => {
    if (activeFilter === "All") {
      return sortedEntries;
    }

    return sortedEntries.filter((entry) => entry.type === activeFilter);
  }, [activeFilter, sortedEntries]);

  const filterOptions = ["All", "Call", "Text", "Video"];

  return (
    <section className="mx-auto w-full max-w-4xl space-y-6">
      <header className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Timeline
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          All interactions logged from the Friend Details page.
        </p>
      </header>

      <div className="flex items-center gap-3">
        <label htmlFor="filter" className="text-sm font-medium text-slate-700">
          Filter by:
        </label>
        <select
          id="filter"
          value={activeFilter}
          onChange={(e) => setActiveFilter(e.target.value)}
          className="rounded-md border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
        >
          {filterOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {filteredEntries.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-500">
          {entries.length === 0
            ? "No interactions yet. Go to a friend detail page and click Call, Text, or Video."
            : "No entries match this filter."}
        </div>
      ) : (
        <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="absolute bottom-8 left-10 top-8 w-px bg-slate-200" />

          <div className="space-y-5">
            {filteredEntries.map((entry, index) => {
              const icon = typeIconMap[entry.type] || faCommentDots;
              const badgeClass =
                typeBadgeMap[entry.type] || "bg-slate-100 text-slate-700";

              return (
                <article
                  key={`${entry.id}-${index}`}
                  className="relative ml-4 grid gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4 sm:grid-cols-[56px_1fr_auto] sm:items-center"
                >
                  <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm">
                    <FontAwesomeIcon icon={icon} />
                  </div>

                  <div>
                    <p className="text-base font-semibold text-slate-900">
                      {entry.title}
                    </p>
                    <p className="mt-1 inline-flex items-center gap-2 text-sm text-slate-500">
                      <FontAwesomeIcon icon={faCalendarDays} />
                      {entry.date}
                    </p>
                  </div>

                  <span
                    className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold ${badgeClass}`}
                  >
                    {entry.type}
                  </span>
                </article>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
