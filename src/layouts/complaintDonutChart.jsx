

import React, { useEffect, useRef, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Fraude et corruption", value: 3044 },
  { name: "Autre infraction", value: 1274 },
  { name: "Vol et cambriolage", value: 3997 },
  { name: "Agression et violence", value: 155 },
  { name: "Cyber", value: 451 },
];

const COLORS = ["#6B150F", "#99D0BE", "#1E2454", "#26509E", "#706969ff"];

const renderPercentOutside = ({ cx, cy, midAngle, outerRadius, percent }) => {
  const RADIAN = Math.PI / 180;
  const r = (outerRadius || 0) + 14; 
  const x = cx + r * Math.cos(-midAngle * RADIAN);
  const y = cy + r * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#111827"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={11}
      fontWeight={600}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function CompactLegend({ payload, fontSize = 12, iconSize = 8 }) {
  if (!payload) return null;
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "8px 14px",
        lineHeight: "14px",
        fontSize,
        marginTop: 4,
      }}
    >
      {payload.map((entry, i) => (
        <div key={`legend-${i}`} style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
          <span
            style={{
              width: iconSize,
              height: iconSize,
              borderRadius: "50%",
              backgroundColor: entry.color,
              display: "inline-block",
            }}
          />
          <span>{entry.value}</span>
        </div>
      ))}
    </div>
  );
}

export default function ComplaintDonutChart() {
  const wrapRef = useRef(null);
  const [w, setW] = useState(0);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const rect = entries[0].contentRect;
      setW(rect.width);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const legendFont = w < 280 ? 11 : 12;
  const legendIcon = w < 280 ? 7 : 8;

  return (
    <div ref={wrapRef} className="w-full h-[200px] sm:h-[220px] md:h-[240px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius="50%"
            outerRadius="72%"
            paddingAngle={2}
            labelLine={false}
            label={renderPercentOutside} 
            isAnimationActive={false}
          >
            {data.map((entry, i) => (
              <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip
            formatter={(value, name) => [value, name]}
            contentStyle={{ fontSize: 12, padding: "6px 8px" }}
          />

          <Legend
            verticalAlign="bottom"
            align="center"
            content={<CompactLegend fontSize={legendFont} iconSize={legendIcon} />}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
