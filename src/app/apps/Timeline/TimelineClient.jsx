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
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
      setEntries(Array.isArray(saved) ? saved : []);
    } catch {
      setEntries([]);
    }
  }, []);

  const sortedEntries = useMemo(() => {
    return [...entries].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }, [entries]);

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

      {sortedEntries.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-500">
          No interactions yet. Go to a friend detail page and click Call, Text,
          or Video.
        </div>
      ) : (
        <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="absolute bottom-8 left-10 top-8 w-px bg-slate-200" />

          <div className="space-y-5">
            {sortedEntries.map((entry, index) => {
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
