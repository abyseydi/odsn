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
const annees = Array.from({ length: 2030 - 2025 + 1 }, (_, i) => 2025 + i);
const trimestres = ["1er trimestre", "2em trimestre", "3em trimestre", "4em trimestre"];
const categories = [
  "VOL ET CAMBRIOLAGE",
  "AGRESSION ET VIOLENCE",
  "FRAUDE, ESCROQUERIE ET CORRUPTION",
  "Cyber",
  "Autre infraction",
];

// Fonction de couleur dynamique
const getColorFromValue = (value, min, max) => {
  const ratio = (value - min) / (max - min || 1);
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

  // Met à jour automatiquement les prédictions lors d’un changement
  useEffect(() => {
    const newPrediction = generatePrediction();
    setPrediction([]);
    const timeout = setTimeout(() => {
      setPrediction(newPrediction);
    }, 500);

    return () => clearTimeout(timeout);
  }, [formData.region, formData.annee, formData.trimestre]);

  const generatePrediction = () => {
    return categories.map((cat) => ({
      categorie: cat,
      nombre: Math.floor(Math.random() * 1000 + 10),
    }));
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const filteredPrediction = formData.categorie
  ? prediction.filter((p) => p.categorie === formData.categorie)
  : [...prediction].sort((a, b) => a.nombre - b.nombre); 

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




  // Déterminer trimestre et année actuels
const getCurrentQuarter = () => {
  const month = new Date().getMonth() + 1; // Janvier = 1
  return Math.floor((month - 1) / 3) + 1;
};

const currentYear = new Date().getFullYear();
const currentQuarter = getCurrentQuarter();

// Calculer trimestre suivant
const nextQuarter = currentQuarter === 4 ? 1 : currentQuarter + 1;
const nextQuarterYear = currentQuarter === 4 ? currentYear + 1 : currentYear;

// Fonction pour filtrer les trimestres disponibles
const getAvailableTrimestres = (selectedYear) => {
  if (selectedYear > nextQuarterYear) return trimestres;
  if (selectedYear < nextQuarterYear) return []; // Aucun trimestre possible dans le passé
  return trimestres.slice(nextQuarter - 1); // Garde seulement du trimestre suivant à la fin
};


  return (
    <div className="h-[700px] w-[1300px] p-6 overflow-hidden">
      <div className="grid grid-cols-2 grid-rows-[60%_40%] gap-4 h-full">
        {/* Formulaire de filtres */}
        <div className="bg-gray-200 border-l-4 border-blue-500 text-black rounded-xl shadow-md p-4 overflow-auto">
          <h2 className="text-xl font-semibold mb-4">Paramètres</h2>
          <div className="space-y-3 text-sm">
            <SelectInput label="Région" name="region" options={regions} onChange={handleChange} value={formData.region} />
            <SelectInput label="Année" name="annee" options={annees} onChange={handleChange} value={formData.annee} />
            <SelectInput
  label="Trimestre"
  name="trimestre"
  options={getAvailableTrimestres(formData.annee)}
  onChange={handleChange}
  value={formData.trimestre}
/>

            <SelectInput
              label="Catégorie"
              name="categorie"
              options={["Toutes les catégories", ...categories]}
              onChange={handleChange}
              value={formData.categorie}
            />
          </div>
        </div>

        {/* Tableau des prédictions */}
        <div className="bg-white rounded-xl shadow-md p-4 overflow-auto">
          <h2 className="text-xl font-semibold text-[#1e2454] mb-4">Résultats</h2>
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

        {/* Graphique */}
        <div className="col-span-2 bg-white rounded-xl shadow-md p-4">
          <p className="text-sm text-gray-600 text-center mb-2">
            Région : <strong>{formData.region}</strong> | Année : <strong>{formData.annee}</strong> | Trimestre : <strong>{formData.trimestre}</strong>
          </p>

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

// Composant de sélection générique
function SelectInput({ label, name, options, onChange, value }) {
  return (
    <div>
      <label className="block text-xs font-medium mb-1">{label}</label>
      <select
        name={name}
        onChange={onChange}
        value={value}
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
