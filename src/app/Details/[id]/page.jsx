/** @format */

import Image from "next/image";
import { readFile } from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArchive,
  faCalendarDays,
  faCommentDots,
  faEllipsis,
  faFileLines,
  faPhone,
  faTrash,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

async function getFriends() {
  const filePath = path.join(process.cwd(), "public", "friends.json");
  const fileContents = await readFile(filePath, "utf8");

  return JSON.parse(fileContents);
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const friends = await getFriends();
  const friend = friends.find((item) => item.id === Number(resolvedParams.id));

  return {
    title: friend
      ? `${friend.name} | KeenKeeper`
      : "Friend Details | KeenKeeper",
  };
}

export default async function FriendDetailsPage({ params }) {
  const resolvedParams = await params;
  const friends = await getFriends();
  const friend = friends.find((item) => item.id === Number(resolvedParams.id));

  if (!friend) {
    notFound();
  }

  const statusStyles =
    friend.status === "overdue"
      ? "bg-red-100 text-red-700"
      : friend.status === "on-track"
        ? "bg-emerald-100 text-emerald-700"
        : "bg-amber-100 text-amber-700";

  const recentInteractions = [
    {
      type: "Text",
      title: "Asked for career advice",
      date: "Jan 28, 2026",
      icon: faCommentDots,
    },
    {
      type: "Call",
      title: "Industry conference meetup",
      date: "Jan 22, 2026",
      icon: faPhone,
    },
    {
      type: "Video",
      title: "Asked for career advice",
      date: "Jan 18, 2026",
      icon: faVideo,
    },
    {
      type: "Note",
      title: "Shared a quick life update",
      date: "Jan 12, 2026",
      icon: faFileLines,
    },
  ];

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10">
      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <aside className="space-y-4">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <div className="overflow-hidden rounded-full border-4 border-slate-100 shadow-sm">
                <Image
                  src={friend.picture}
                  alt={friend.name}
                  width={96}
                  height={96}
                  className="h-24 w-24 object-cover"
                />
              </div>

              <h1 className="mt-4 text-2xl font-bold text-slate-900">
                {friend.name}
              </h1>
              <span
                className={`mt-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${statusStyles}`}
              >
                {friend.status}
              </span>
              <p className="mt-3 max-w-xs text-sm italic text-slate-500">
                “{friend.bio}”
              </p>
              <p className="mt-2 text-xs text-slate-400">Preferred: email</p>
            </div>
          </section>

          <div className="space-y-3">
            <button className="flex w-full items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm">
              <FontAwesomeIcon icon={faCalendarDays} />
              Snooze 2 Weeks
            </button>
            <button className="flex w-full items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm">
              <FontAwesomeIcon icon={faArchive} />
              Archive
            </button>
            <button className="flex w-full items-center justify-center gap-2 rounded-md border border-red-200 bg-white px-4 py-3 text-sm font-medium text-red-500 shadow-sm">
              <FontAwesomeIcon icon={faTrash} />
              Delete
            </button>
          </div>
        </aside>

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
            <div className="flex items-center justify-between gap-4">
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
            <div className="mt-4 grid grid-cols-3 gap-3">
              <button className="flex h-20 flex-col items-center justify-center gap-1 rounded-xl border border-slate-200 bg-slate-50 text-slate-700">
                <FontAwesomeIcon icon={faPhone} />
                <span className="text-xs font-medium">Call</span>
              </button>
              <button className="flex h-20 flex-col items-center justify-center gap-1 rounded-xl border border-slate-200 bg-slate-50 text-slate-700">
                <FontAwesomeIcon icon={faCommentDots} />
                <span className="text-xs font-medium">Text</span>
              </button>
              <button className="flex h-20 flex-col items-center justify-center gap-1 rounded-xl border border-slate-200 bg-slate-50 text-slate-700">
                <FontAwesomeIcon icon={faVideo} />
                <span className="text-xs font-medium">Video</span>
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-5 flex items-center justify-between gap-4">
              <h2 className="text-lg font-semibold text-slate-900">
                Recent Interactions
              </h2>
              <button className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-1.5 text-sm text-slate-600">
                <FontAwesomeIcon icon={faEllipsis} />
                Full History
              </button>
            </div>

            <div className="space-y-4">
              {recentInteractions.map((item) => (
                <div
                  key={`${item.type}-${item.date}`}
                  className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4 last:border-b-0 last:pb-0"
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
                  <p className="text-sm text-slate-400">{item.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
