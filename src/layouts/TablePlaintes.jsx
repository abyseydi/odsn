import React from "react";
import { FiBarChart } from "react-icons/fi";

const data = [
  { id: "Dakar", value: 1379 },
  { id: "Thiès", value: 1074 },
  { id: "Saint‑Louis", value: 995 },
  { id: "Kaolack", value: 972 },
  { id: "Matam", value: 910 },
  { id: "Fatick", value: 910 },
  { id: "Diourbel", value: 905 },
  { id: "Kaffrine", value: 897 },
  { id: "Louga", value: 896 },
  { id: "Ziguinchor", value: 888 },
  { id: "Sédhiou", value: 873 },
  { id: "Tambacounda", value: 870 },
  { id: "Kolda", value: 712 },
  { id: "Kédougou", value: 597 },
];

const maxValue = Math.max(...data.map((d) => d.value));

const getBarColor = (percentage) => {
  if (percentage > 80) return "bg-red-600";
  if (percentage > 65) return "bg-orange-500";
  if (percentage > 50) return "bg-yellow-400";
  return "bg-green-400";
};

const TablePlaintes = () => (
  <div className="rounded-xl shadow-md p-6 h-[500px] bg-white">
    <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-gray-800">
      <FiBarChart className="text-blue-600 text-xl" />
      Statistiques des plaintes critiques par région
    </h2>

    <div className="overflow-auto max-h-[400px]">
      <table className="w-full text-sm text-left border-separate border-spacing-y-2">
        <thead>
          <tr className="text-gray-600 text-sm uppercase tracking-wide">
            <th className="px-4 py-2 bg-gray-100 rounded-l-lg">Région</th>
            <th className="px-4 py-2 bg-gray-100 rounded-r-lg">Plaintes</th>
          </tr>
        </thead>
        <tbody>
          {data
            .sort((a, b) => b.value - a.value)
            .map((reg, idx) => {
              const percent = (reg.value / maxValue) * 100;
              return (
                <tr
                  key={reg.id}
                  className={`transition ${
                    idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-blue-50`}
                >
                  <td className="px-4 py-3 font-medium text-gray-800">{reg.id}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full ${getBarColor(percent)}`}
                          style={{ width: `${percent}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-700 w-12 text-right">
                        {reg.value.toLocaleString()}
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  </div>
);

export default TablePlaintes;
