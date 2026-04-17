/** @format */

import AppCard from "./Components/UI/Appcard";
import friends from "../../public/friends.json";

const stats = [
  { value: friends.length, label: "Total Friends" },
  {
    value: friends.filter((friend) => friend.status === "on-track").length,
    label: "On Track",
  },
  {
    value: friends.filter((friend) => friend.status === "almost due").length,
    label: "Need Attention",
  },
  {
    value: friends.filter((friend) => friend.status === "overdue").length,
    label: "Overdue",
  },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10">
      <section className="mb-10 rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
          Friends to keep close in your life
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <button className="btn mt-6 bg-emerald-700 text-white hover:bg-emerald-800">
          + Add a Friend
        </button>
      </section>

      <section className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-slate-200 bg-white px-6 py-5 text-center shadow-sm"
          >
            <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
            <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold text-slate-900">Your Friends</h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {friends.map((friend) => (
            <AppCard key={friend.id} friend={friend} />
          ))}
        </div>
      </section>
    </main>
  );
}
