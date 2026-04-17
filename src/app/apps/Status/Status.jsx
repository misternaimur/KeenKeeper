/** @format */

"use client";

import { useEffect, useMemo, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const storageKey = "keenkeeper_timeline";

const types = ["Call", "Text", "Video"];

const colors = ["#0e3b00", "#0aff4b", "#cc00ff"];

const Stats = () => {
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

  const chartData = useMemo(() => {
    return types.map((type, index) => {
      const count = entries.filter((entry) => entry.type === type).length;

      return {
        name: type,
        value: count,
        color: colors[index],
      };
    });
  }, [entries]);

  const total = chartData.reduce((sum, item) => sum + item.value, 0);

  return (
    <section>
      <h1 className="mb-4 text-3xl font-bold text-black">
        Friendship Analytics
      </h1>

      <div className="rounded-md border border-black/10 bg-white p-5">
        <p className="mb-4 text-sm text-black">By Interaction Type</p>

        {total === 0 ? (
          <div className="flex h-45 items-center justify-center rounded-md border border-dashed border-black/15 text-sm text-black/60">
            No history yet. Add a Call, Text, or Video entry first.
          </div>
        ) : (
          <div className="mx-auto h-45 w-full max-w-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  innerRadius={44}
                  outerRadius={72}
                  paddingAngle={4}
                  stroke="#ffffff"
                  strokeWidth={3}
                >
                  {chartData.map((item) => (
                    <Cell key={item.name} fill={item.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value, name) => [
                    `${Math.round((value / total) * 100)}%`,
                    name,
                  ]}
                  contentStyle={{
                    border: "1px solid rgba(0,0,0,0.12)",
                    borderRadius: "8px",
                    color: "#000",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}

        <div className="mt-2 flex flex-wrap items-center justify-center gap-5 text-xs text-black">
          {chartData.map((item) => (
            <div key={item.name} className="flex items-center gap-1">
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
