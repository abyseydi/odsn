

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";

const data = [
  { priority: "Faible", value: 3164 },
  { priority: "Moyenne", value: 3314 },
  { priority: "Élevée", value: 3219 },
  { priority: "Critique", value: 3182 },
];

const PRIORITY_COLORS = {
  Faible: "#1E2454",
  Moyenne: "#98CFBD",
  Élevée: "#26509D",
  Critique: "#E84141",
};

export default function ComplaintPriorityBarChart() {
  return (
    <div className="w-full h-[180px] sm:h-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 5, right: 20, left: 8, bottom: 0 }}
          barCategoryGap="20%"
        >
          <XAxis type="number" hide />

          <YAxis
            type="category"
            dataKey="priority"
            tick={{ fill: "#4b5563", fontSize: 11 }}
            width={70}
          />

          <Tooltip
            wrapperClassName="rounded-md shadow text-xs"
            contentStyle={{ backgroundColor: "#f9fafb", border: "none", fontSize: 12 }}
            itemStyle={{ color: "#374151", fontSize: 12 }}
            labelStyle={{ color: "#4b5563", fontWeight: 600 }}
          />

          <Bar
            dataKey="value"
            radius={[6, 6, 6, 6]}
            barSize={16}
            isAnimationActive={false}
          >
            {data.map((entry, idx) => (
              <Cell key={`cell-${idx}`} fill={PRIORITY_COLORS[entry.priority]} />
            ))}
            <LabelList
              dataKey="value"
              position="right"
              style={{ fill: "#374151", fontSize: 11, fontWeight: 600 }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

