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

// Données
const regions = [
  "Dakar", "Thiès", "Saint-Louis", "Kaolack", "Fatick", "Diourbel", "Louga",
  "Tambacounda", "Matam", "Kédougou", "Kolda", "Sédhiou", "Ziguinchor", "Podor",
];
const annees = Array.from({ length: 2030 - 2015 + 1 }, (_, i) => 2015 + i);
const trimestres = ["1er trimestre", "2em trimestre", "3em trimestre", "4em trimestre"];
const categories = [
  "VOL ET CAMBRIOLAGE",
  "AGRESSION ET VIOLENCE",
  "FRAUDE, ESCROQUERIE ET CORRUPTION",
  "Cyber",
  "Autre infraction",
];

const getColorFromValue = (value, min, max) => {
  const ratio = (value - min) / (max - min);
  const blue = Math.round(150 + ratio * 100);
  return `rgba(30, 36, ${blue}, 0.85)`;
};

export default function Prediction() {
  const [formData, setFormData] = useState({
    region: regions[0],
    annee: 2025,
    trimestre: "1er trimestre",
    categorie: "",
  });

  const [prediction, setPrediction] = useState([]);

  useEffect(() => {
    const initialPrediction = generatePrediction();
    setTimeout(() => setPrediction(initialPrediction), 800);
  }, []);

  const generatePrediction = () => {
    return categories.map((cat) => ({
      categorie: cat,
      nombre: Math.floor(Math.random() * 100 + 10),
    }));
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePredict = () => {
    const simulated = generatePrediction();
    setPrediction([]);
    setTimeout(() => setPrediction(simulated), 500);
  };

  const filteredPrediction = formData.categorie
    ? prediction.filter((p) => p.categorie === formData.categorie)
    : prediction;

  const values = filteredPrediction.map((p) => p.nombre);
  const min = Math.min(...values);
  const max = Math.max(...values);

  const chartData = {
    labels: filteredPrediction.map((p) => p.categorie),
    datasets: [
      {
        label: "Nombre prédit",
        data: values,
        backgroundColor: values.map((val) => getColorFromValue(val, min, max)),
        borderRadius: 10,
        barThickness: 30,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "Nombre de plaintes par catégorie",
        color: "#1e2454",
        font: { size: 16, weight: "bold" },
      },
      tooltip: {
        backgroundColor: "#1e2454",
        callbacks: {
          label: (context) => `${context.raw} plaintes`,
        },
      },
    },
    scales: {
      y: { beginAtZero: true, ticks: { font: { size: 11 }, color: "#444" } },
      x: { ticks: { font: { size: 11 }, color: "#444" } },
    },
  };

  return (
    <div className="h-[700px] w-[1000px] p-6 overflow-hidden">
      <div className="grid grid-cols-2 grid-rows-[60%_40%] gap-4 h-full">
        {/* Formulaire */}
        <div className="bg-gray-200 border-l-4 border-blue-500 text-black rounded-xl shadow-md p-4 overflow-auto">
          <h2 className="text-xl font-semibold mb-4"> Paramètres</h2>
          <div className="space-y-3 text-sm">
            <SelectInput label="Région" name="region" options={regions} onChange={handleChange} />
            <SelectInput label="Année" name="annee" options={annees} onChange={handleChange} />
            <SelectInput label="Trimestre" name="trimestre" options={trimestres} onChange={handleChange} />
            <SelectInput
              label="Catégorie"
              name="categorie"
              options={["Toutes les catégories", ...categories]}
              onChange={handleChange}
              value={formData.categorie}
              defaultValue=""
            />
          </div>
          <button
            onClick={handlePredict}
            className="mt-4 w-full bg-white text-[#1e2454] font-bold py-2 rounded-md hover:bg-gray-100"
          >
             Générer
          </button>
        </div>

        {/* Tableau */}
        <div className="bg-white rounded-xl shadow-md p-4 overflow-auto" >
          <h2 className="text-xl font-semibold text-[#1e2454] mb-4"> Résultats</h2>
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

        {/* Graphe */}
        <div className="col-span-2 bg-white rounded-xl shadow-md p-4">
          {filteredPrediction.length === 0 ? (
            <p className="text-gray-500 text-center">Chargement du graphique...</p>
          ) : (
            <div className="w-full h-full">
              <Bar data={chartData} options={chartOptions} height={100} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Composant Select
function SelectInput({ label, name, options, onChange, value, defaultValue }) {
  return (
    <div>
      <label className="block text-xs font-medium mb-1">{label}</label>
      <select
        name={name}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        className="w-full border border-gray-300 rounded-md p-2 text-sm"
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
