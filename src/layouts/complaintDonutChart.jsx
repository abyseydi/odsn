// import React from "react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   Legend,
//   ResponsiveContainer
// } from "recharts";

// // Données des catégories de plaintes (valeurs fictives à ajuster)
// const data = [
//   { name: "Escroquerie et fraude", value: 320 },
//   { name: "Disparition", value: 150 },
//   { name: "Autre infraction", value: 100 },
//   { name: "Accident", value: 80 },
//   { name: "Vol et cambriolage", value: 210 },
//   { name: "Agression et violence", value: 130 },
//   { name: "Trouble à l'ordre public", value: 90 }
// ];

// // Couleurs (autant que les catégories)
// const COLORS = [
//   "#8884d8",
//   "#82ca9d",
//   "#ffc658",
//   "#ff8042",
//   "#00C49F",
//   "#FFBB28",
//   "#0088FE"
// ];

// export default function ComplaintDonutChart() {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-6">
//       <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
//         Répartition des catégories de plaintes
//       </h3>
//       <div className="w-full h-[300px]">
//         <ResponsiveContainer>
//           <PieChart>
//             <Pie
//               data={data}
//               innerRadius={80}
//               outerRadius={120}
//               paddingAngle={3}
//               dataKey="value"
//             >
//               {data.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//               ))}
//             </Pie>
//             <Tooltip />
//             <Legend layout="vertical" align="right" verticalAlign="middle" />
//           </PieChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   Legend,
//   ResponsiveContainer
// } from "recharts";

// const data = [
//   { name: "Escroquerie et fraude", value: 320 },
//   { name: "Autre infraction", value: 100 },
//   { name: "Vol et cambriolage", value: 210 },
//   { name: "Agression et violence", value: 130 },
//   { name: "Trouble à l'ordre public", value: 90 }
// ];

// const COLORS = [
//   "#6b150f",
//   "#99d0be",
//   "#e1e1e1",
//   "#26509e",
//   "#303131",
//   "#26509e",
//   "#e74242"
// ];

// // Label personnalisé : % arrondi
// const renderCustomizedLabel = ({ percent }) =>
//   `${(percent * 100).toFixed(0)}%`;

// export default function ComplaintDonutChart() {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-6">
//       <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
//         Répartition des catégories de plaintes
//       </h3>
//       <div className="w-full h-[300px] ">
//         <ResponsiveContainer>
//           <PieChart align="right">
//             <Pie
              
//               data={data}
//               innerRadius={80}
//               outerRadius={120}
//               paddingAngle={3}
//               dataKey="value"
//               label={renderCustomizedLabel}
//               labelLine={false}
//             >
//               {data.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//               ))}
//             </Pie>
//             <Tooltip />
//             <Legend layout="vertical" align="right" verticalAlign="top" />
//           </PieChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }


import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Escroquerie et fraude", value: 320 },
  { name: "Autre infraction", value: 100 },
  { name: "Vol et cambriolage", value: 210 },
  { name: "Agression et violence", value: 130 },
  { name: "Trouble à l'ordre public", value: 90 }
];

const COLORS = [
  "#6b150f",
  "#99d0be",
  "#e1e1e1",
  "#26509e",
  "#303131"
];

// Label personnalisé : placé à l’extérieur
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius + 10;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  // Ne pas afficher les très petites parts (ex : < 3%)
  if (percent < 0.03) return null;

  return (
    <text
      x={x}
      y={y}
      fill={COLORS[index % COLORS.length]}
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={14}
      fontWeight="bold"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function ComplaintDonutChart() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        Répartition des catégories de plaintes
      </h3>
      <div className="w-[475px] h-[300px]">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              innerRadius={80}
              outerRadius={120}
              paddingAngle={3}
              dataKey="value"
              label={renderCustomizedLabel}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              layout="vertical"
              align="right"
              verticalAlign="top"
              iconType="circle"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
