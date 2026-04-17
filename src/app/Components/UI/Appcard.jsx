/** @format */

import Image from "next/image";
import React from "react";

const AppCard = ({ friend }) => {
  const getStatusStyles = (status) => {
    const s = status.toLowerCase();
    if (s === "overdue") {
      return "bg-[#EF4444] text-white";
    } else if (s === "on-track") {
      return "bg-[#1F4D36] text-white";
    } else if (s === "almost due") {
      return "bg-[#F0AD4E] text-white";
    }
  };

  return (
    <div className="h-full">
      <div className="card h-full w-full bg-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl">
        <figure className="pt-8">
          <div className="avatar">
            <div className="w-24 h-24 rounded-full shadow-amber-950-">
              <Image
                src={friend.picture}
                alt={friend.name}
                width={96}
                height={96}
              />
            </div>
          </div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-black">{friend.name}</h2>
          <p className="text-black text-sm mb-2">
            {friend.days_since_contact}d ago
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-1">
            {friend.tags.map((tag, index) => (
              <span
                key={index}
                className="badge bg-[#D1FAE5] text-[#065F46] border-none font-bold px-4 py-3 text-[10px] uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-2">
            <span
              className={`badge border-none font-bold px-5 py-4 text-sm rounded-full capitalize ${getStatusStyles(friend.status)}`}
            >
              {friend.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
