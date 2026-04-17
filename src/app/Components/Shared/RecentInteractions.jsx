/** @format */

"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faCommentDots,
  faPhone,
  faVideo,
  faArrowRight,
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

export default function RecentInteractions() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const loadEntries = () => {
      try {
        const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
        setEntries(Array.isArray(saved) ? saved : []);
      } catch {
        setEntries([]);
      }
    };

    loadEntries();
    window.addEventListener("storage", loadEntries);

    return () => window.removeEventListener("storage", loadEntries);
  }, []);

  const recentList = useMemo(() => {
    return entries.slice(0, 5);
  }, [entries]);

  if (entries.length === 0) {
    return null;
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="text-lg font-semibold text-slate-900">
          Recent Interactions
        </h2>
        <Link
          href="/apps/Timeline"
          className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-50"
        >
          View All
          <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" />
        </Link>
      </div>

      <div className="space-y-3">
        {recentList.map((entry, index) => {
          const icon = typeIconMap[entry.type] || faCommentDots;
          const badgeClass =
            typeBadgeMap[entry.type] || "bg-slate-100 text-slate-700";

          return (
            <div
              key={`${entry.id}-${index}`}
              className="flex items-center justify-between gap-3 rounded-lg border border-slate-100 bg-slate-50 p-3"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-white p-2 text-slate-700">
                  <FontAwesomeIcon icon={icon} className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">
                    {entry.title}
                  </p>
                  <p className="text-xs text-slate-500">
                    <FontAwesomeIcon icon={faCalendarDays} className="mr-1" />
                    {entry.date}
                  </p>
                </div>
              </div>
              <span
                className={`whitespace-nowrap rounded-full px-2 py-1 text-xs font-semibold ${badgeClass}`}
              >
                {entry.type}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
