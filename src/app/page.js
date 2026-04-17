/** @format */

import Link from "next/link";
import Appcard from "./Componets/Appcard";
import Footer from "./Componets/Shared/Footer";
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
    value: friends.reduce((sum, friend) => sum + friend.days_since_contact, 0),
    label: "Interactions This Month",
  },
];

export default function Home() {
  return (
    <main>
      

      <section className="mx-auto w-full max-w-6xl px-4 pb-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-slate-200 bg-white px-6 py-5 text-center shadow-sm"
            >
              <p className="text-3xl font-bold text-slate-800">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-10 text-xl font-bold text-slate-900">Your Friends</h2>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {friends.map((friend) => (
            <Link href="/status" key={friend.id} className="block">
              <Appcard friend={friend} />
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
