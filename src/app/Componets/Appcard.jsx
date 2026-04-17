/** @format */

import Image from "next/image";

const Appcard = ({ friend }) => {
  const badgeClass =
    friend.status === "overdue"
      ? "badge badge-error badge-outline"
      : friend.status === "almost due"
        ? "badge badge-warning badge-outline"
        : "badge badge-success badge-outline";

  return (
    <article className="card h-full border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="card-body p-5">
        <div className="flex items-center gap-3">
          <Image
            src={friend.picture}
            alt={friend.name}
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-slate-900">{friend.name}</h3>
            <p className="text-xs text-slate-500">{friend.email}</p>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className={badgeClass}>{friend.status}</span>
          <span className="text-xs text-slate-500">
            {friend.days_since_contact} days ago
          </span>
        </div>

        <p className="mt-2 line-clamp-3 text-sm text-slate-600">{friend.bio}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {friend.tags.map((tag) => (
            <span key={tag} className="badge badge-ghost badge-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Appcard;
