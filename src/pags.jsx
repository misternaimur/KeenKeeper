import React from 'react';
import AppCard from './app/Components/UI/Appcard';
import Link from 'next/link';


const Hero = async () => {
    const stats = [
        { value: 10, label: "Total Friends" },
        { value: 3, label: "On Track" },
        { value: 6, label: "Need Attention" },
        { value: 12, label: "Interactions This Month" },
    ];

    const res = await fetch('http://localhost:3000/friends.json');
    const friends = await res.json();

    return (
      <div>
        <div className=" p-10 text-center m-6">
          <h1 className="text-4xl font-bold mb-3">
            Friends to keep close in your life
          </h1>
          <p className="text-base-content/60 mb-6">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <button className="btn btn-success text-white">+ Add a Friend</button>
        </div>

        <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-6 ">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="card bg-base-100 shadow-md p-8 text-center"
            >
              <p className="text-4xl font-bold">{stat.value}</p>
              <p className="text-base-content/60 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div>
          <h1 className="text-xl font-bold">Your Friends</h1>
          <div className="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-5 mb-10 mt-10 mx-auto container">
            {friends.map((friend) => (
              <Link href={`/details/${friend.id}`} key={friend.id}>
                <div className="cursor-pointer">
                  <AppCard friend={friend}></AppCard>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
};

export default pags;