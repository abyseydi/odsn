


import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const regions = [
  "Dakar", "Thiès", "Saint-Louis", "Kaolack", "Fatick", "Diourbel", "Louga",
  "Tambacounda", "Matam", "Kédougou", "Kolda", "Sédhiou", "Ziguinchor", "Podor",
];
const annees = Array.from({ length: 2030 - 2025 + 1 }, (_, i) => 2025 + i);
const trimestres = ["1er trimestre", "2em trimestre", "3em trimestre", "4em trimestre"];
const categories = [
  "VOL ET CAMBRIOLAGE",
  "AGRESSION ET VIOLENCE",
  "FRAUDE, ESCROQUERIE ET CORRUPTION",
  "CYBERCRIMINALITE",
  "AUTRES INFRACTIONS",
];


const BAR_COLORS = ["#6B150F", "#99D0BE", "#1E2454", "#26509E", "#706969ff"];

export default function Prediction() {
  const [formData, setFormData] = useState({
    region: regions[0],
    annee: 2025,
    trimestre: "1er trimestre",
    categorie: "",
  });
  const [prediction, setPrediction] = useState([]);

  useEffect(() => {
    const newPrediction = generatePrediction();
    setPrediction([]);
    const timeout = setTimeout(() => {
      setPrediction(newPrediction);
    }, 500);
    return () => clearTimeout(timeout);
  }, [formData.region, formData.annee, formData.trimestre]);

  const generatePrediction = () =>
    categories.map((cat) => ({
      categorie: cat,
      nombre: Math.floor(Math.random() * 1000 + 10),
    }));

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const filteredPrediction = formData.categorie
    ? prediction.filter((p) => p.categorie === formData.categorie)
    : [...prediction].sort((a, b) => a.nombre - b.nombre);

  const values = filteredPrediction.map((p) => p.nombre);

  const chartData = {
    labels: filteredPrediction.map((p) => p.categorie),
    datasets: [
      {
        label: "Nombre prédit",
        data: values,
        backgroundColor: filteredPrediction.map((_, i) => BAR_COLORS[i % BAR_COLORS.length]),
        borderRadius: 10,
        barThickness: 30,
      },
    ],
  };

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      labels: {
        color: "#1e2454",
        font: { size: 12, weight: "bold" },
        padding: 12,
        boxWidth: 18,
        generateLabels: (chart) => {
          const ds = chart.data.datasets[0];
          const labels = chart.data.labels || [];
          return labels.map((lbl, i) => ({
            text: lbl,
            fillStyle: Array.isArray(ds.backgroundColor)
              ? ds.backgroundColor[i % ds.backgroundColor.length]
              : ds.backgroundColor,
            strokeStyle: "transparent",
            lineWidth: 0,
            hidden: false,
            index: i,
          }));
        },
      },
    },
    title: {
      display: true,
      text: "Nombre de plaintes par catégorie",
      color: "#1e2454",
      font: { size: 16, weight: "bold" },
    },
    tooltip: {
      backgroundColor: "#1e2454",
      callbacks: { label: (ctx) => `${ctx.raw} plaintes` },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: "Nombre de plaintes", 
        font: { size: 13, weight: "bold" },
      },
      ticks: { font: { size: 11 }, color: "#444" },
    },
    x: {
      title: {
        display: true,
        text: "Catégories",
        color: "#1e2454",
        font: { size: 13, weight: "bold" },
      },
      ticks: { display: false },
      grid: { drawTicks: false },
    },
  },
};


  const getCurrentQuarter = () => {
    const month = new Date().getMonth() + 1;
    return Math.floor((month - 1) / 3) + 1;
  };
  const currentYear = new Date().getFullYear();
  const currentQuarter = getCurrentQuarter();
  const nextQuarter = currentQuarter === 4 ? 1 : currentQuarter + 1;
  const nextQuarterYear = currentQuarter === 4 ? currentYear + 1 : currentYear;

  const getAvailableTrimestres = (selectedYear) => {
    if (selectedYear > nextQuarterYear) return trimestres;
    if (selectedYear < nextQuarterYear) return [];
    return trimestres.slice(nextQuarter - 1);
  };

  return (
    <div className="w-full p-4">
      <div className="flex flex-col md:flex-row md:items-end md:space-x-4 space-y-3 md:space-y-0 mb-6">
        <SelectInput label="Région" name="region" options={regions} onChange={handleChange} value={formData.region} />
        <SelectInput label="Année" name="annee" options={annees} onChange={handleChange} value={formData.annee} />
        <SelectInput
          label="Trimestre"
          name="trimestre"
          options={getAvailableTrimestres(formData.annee)}
          onChange={handleChange}
          value={formData.trimestre}
        />
       
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-4 overflow-auto">
          <h2 className="text-lg font-semibold text-[#1e2454] mb-4">Résultats</h2>
          {filteredPrediction.length === 0 ? (
            <p className="text-gray-500">Chargement des données...</p>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#f3f4f6]">
                  <th className="p-2 text-left text-[#1e2454] font-semibold">Catégorie</th>
                  <th className="p-2 text-left text-[#1e2454] font-semibold">Plaintes</th>
                </tr>
              </thead>
              <tbody>
                {filteredPrediction.map((p) => (
                  <tr key={p.categorie} className="hover:bg-gray-100">
                    <td className="p-2">{p.categorie}</td>
                    <td className="p-2 font-medium">{p.nombre}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-md p-4">
          <p className="text-sm text-gray-600 text-center mb-2">
            Région : <strong>{formData.region}</strong> | Année : <strong>{formData.annee}</strong> | Trimestre : <strong>{formData.trimestre}</strong>
          </p>
          {filteredPrediction.length === 0 ? (
            <p className="text-gray-500 text-center">Chargement du graphique...</p>
          ) : (
            <div className="w-full h-[220px] md:h-[300px]">
              <Bar data={chartData} options={chartOptions} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function SelectInput({ label, name, options, onChange, value }) {
  return (
    <div className="flex flex-col w-full md:w-auto">
      <label className="block text-xs font-medium mb-1">{label}</label>
      <select
        name={name}
        onChange={onChange}
        value={value}
        className="border border-gray-300 rounded-md p-2 text-sm"
      >
        {options.map((opt, idx) => (
          <option key={idx} value={opt === "Toutes les catégories" ? "" : opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
