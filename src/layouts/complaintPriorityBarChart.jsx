import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

// Données fictives (à adapter dynamiquement si besoin)
const data = [
  { priority: "Faible", value: 80 },
  { priority: "Moyenne", value: 160 },
  { priority: "Élevée", value: 240 },
  { priority: "Critique", value: 120 },
];

// Couleurs modernes pour chaque niveau de priorité
const PRIORITY_COLORS = {
  Faible: "#1e2454",     // blue-300
  Moyenne: "#98cfbd",    // yellow-400
  Élevée: "#26509d",     // orange-400
  Critique: "#e84141",   // red-500
};

export default function ComplaintPriorityBarChart() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        Répartition des plaintes par niveau de priorité
      </h3>
      <div className="w-full h-[300px]">
        <ResponsiveContainer>
          <BarChart
            layout="vertical"
            data={data}
            margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
          >
            <XAxis type="number" hide />
            <YAxis
              type="category"
              dataKey="priority"
              tick={{ fill: "#4b5563", fontSize: 14 }}
              width={100}
            />
            <Tooltip
              wrapperClassName="rounded-md shadow text-sm"
              contentStyle={{ backgroundColor: "#f9fafb", border: "none" }}
              itemStyle={{ color: "#374151" }}
              labelStyle={{ color: "#4b5563", fontWeight: 500 }}
            />
            <Bar dataKey="value" radius={[10, 10, 10, 10]}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={PRIORITY_COLORS[entry.priority]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
