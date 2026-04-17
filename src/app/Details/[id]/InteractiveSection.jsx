/** @format */

"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faEllipsis,
  faPhone,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

export default function InteractiveSection({ friend }) {
  const [recentInteractions, setRecentInteractions] = useState([]);

  const saveToTimeline = (entry) => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      const storageKey = "keenkeeper_timeline";
      const existing = JSON.parse(localStorage.getItem(storageKey) || "[]");
      localStorage.setItem(storageKey, JSON.stringify([entry, ...existing]));
    } catch {
      // Keep UI working even if storage is blocked.
    }
  };

  const formatDate = () =>
    new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  const checkInActions = [
    {
      label: "Call",
      type: "Call",
      icon: faPhone,
      toastText: `Call logged with ${friend.name}!`,
      buttonClass: "hover:bg-blue-50 hover:text-blue-700",
    },
    {
      label: "Text",
      type: "Text",
      icon: faCommentDots,
      toastText: `Text logged with ${friend.name}!`,
      buttonClass: "hover:bg-green-50 hover:text-green-700",
    },
    {
      label: "Video",
      type: "Video",
      icon: faVideo,
      toastText: `Video logged with ${friend.name}!`,
      buttonClass: "hover:bg-indigo-50 hover:text-indigo-700",
    },
  ];

  const handleCheckIn = ({ type, icon, toastText }) => {
    const newEntry = {
      type,
      title: `${type} with ${friend.name}`,
      date: formatDate(),
      icon,
    };

    const timelineEntry = {
      id: `${type}-${friend.name}-${formatDate()}-${recentInteractions.length}`,
      type,
      title: `${type} with ${friend.name}`,
      date: formatDate(),
    };

    setRecentInteractions((prev) => [newEntry, ...prev]);
    saveToTimeline(timelineEntry);
    toast.success(toastText, { duration: 2500 });
  };

  return (
    <>
      <Toaster
        containerStyle={{
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      <section className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
            <p className="text-3xl font-bold text-slate-800">
              {friend.days_since_contact}
            </p>
            <p className="mt-1 text-sm text-slate-500">Days Since Contact</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
            <p className="text-3xl font-bold text-slate-800">{friend.goal}</p>
            <p className="mt-1 text-sm text-slate-500">Goal (Days)</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
            <p className="text-2xl font-bold text-slate-800">
              {friend.next_due_date}
            </p>
            <p className="mt-1 text-sm text-slate-500">Next Due</p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Relationship Goal
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Connect every{" "}
                <span className="font-semibold">{friend.goal} days</span>
              </p>
            </div>
            <button className="rounded-md border border-slate-200 px-3 py-1.5 text-sm text-slate-600">
              Edit
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            Quick Check-In
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {checkInActions.map((action) => (
              <button
                key={action.label}
                onClick={() => handleCheckIn(action)}
                className={`flex h-20 flex-col items-center justify-center gap-1 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition-colors ${action.buttonClass}`}
              >
                <FontAwesomeIcon icon={action.icon} />
                <span className="text-xs font-medium">{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-5 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <h2 className="text-lg font-semibold text-slate-900">
              Recent Interactions
            </h2>
            <button className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-1.5 text-sm text-slate-600">
              <FontAwesomeIcon icon={faEllipsis} />
              Full History
            </button>
          </div>

          <div className="space-y-4">
            {recentInteractions.map((item, index) => (
              <div
                key={`${item.type}-${item.date}-${index}`}
                className="flex flex-col items-start justify-between gap-3 border-b border-slate-100 pb-4 last:border-b-0 last:pb-0 sm:flex-row sm:items-center sm:gap-4"
              >
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-slate-100 p-3 text-slate-700">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">{item.type}</p>
                    <p className="text-sm text-slate-500">{item.title}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-400 sm:text-right">
                  {item.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
