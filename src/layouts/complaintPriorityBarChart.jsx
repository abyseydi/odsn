
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
    <div className="w-full h-[220px] flex justify-center items-center">
      <ResponsiveContainer width="90%" height="100%">
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 10, right: 40, left: 40, bottom: 10 }} // ⚖️ équilibre gauche/droite
          barCategoryGap="20%"
        >
          {/* Axe X caché */}
          <XAxis type="number" hide />

          {/* Axe Y plus compact */}
          <YAxis
            type="category"
            dataKey="priority"
            tick={{ fill: "#4b5563", fontSize: 12, fontWeight: 600 }}
            width={60} // réduit la place prise
          />

          {/* Infobulle */}
          <Tooltip
            wrapperClassName="rounded-md shadow text-xs"
            contentStyle={{ backgroundColor: "#f9fafb", border: "none", fontSize: 12 }}
            itemStyle={{ color: "#374151", fontSize: 12 }}
            labelStyle={{ color: "#4b5563", fontWeight: 600 }}
          />

          {/* Barres */}
          <Bar
            dataKey="value"
            radius={[6, 6, 6, 6]}
            barSize={18}
            isAnimationActive={false}
          >
            {data.map((entry, idx) => (
              <Cell key={`cell-${idx}`} fill={PRIORITY_COLORS[entry.priority]} />
            ))}
            {/* Valeurs au bout des barres */}
            <LabelList
              dataKey="value"
              position="right"
              style={{ fill: "#374151", fontSize: 12, fontWeight: 600 }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
