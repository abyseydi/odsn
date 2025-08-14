import React, { useState } from "react";

export default function Effectifpred() {
  const [typeEvent, setTypeEvent] = useState("Football");
  const [zone, setZone] = useState("Dakar");
  const [risk, setRisk] = useState("Faible");
  const [affluence, setAffluence] = useState(0);
  const [date, setDate] = useState("2025-08-05");

  const predictEffectif = () => {
    let base = 10;
    if (typeEvent === "Lutte") base += 5;
    if (risk === "Moyen") base += 10;
    if (risk === "Élevé") base += 20;
    if (risk === "Très élevé") base += 30;
    if (affluence > 1000) base += 50;
    return base;
  };

  const effectif = predictEffectif();

  return (
    <div className="min-h-screen p-6 p-8 flex flex-col md:flex-row gap-8 items-start justify-center h-[700px] w-[1375px]">
      {/* Form Section */}
      <div className="bg-gray-200 border-l-4 border-blue-500 rounded-xl shadow-lg w-full md:w-[650px] p-8 space-y-8">
        <h1 className="text-2xl font-semibold text-gray-800 text-center">
          Prédiction des Effectifs
        </h1>

        {/* Section 1: Localisation */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-gray-700">
            Localisation et Type d'Événement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Type d'événement
              </label>
              <select
                value={typeEvent}
                onChange={(e) => setTypeEvent(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              >
                <option>Football</option>
                <option>Lutte</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Zone géographique
              </label>
              <select
                value={zone}
                onChange={(e) => setZone(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              >
                {[
                  "Dakar",
                  "Thiès",
                  "Saint-Louis",
                  "Kaolack",
                  "Diourbel",
                  "Fatick",
                  "Kaffrine",
                  "Kédougou",
                  "Kolda",
                  "Louga",
                  "Matam",
                  "Sédhiou",
                  "Tambacounda",
                  "Ziguinchor",
                ].map((region) => (
                  <option key={region}>{region}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Section 2: Risque & Affluence */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-gray-700">
            Évaluation des Risques et Affluence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Niveau de risque
              </label>
              <select
                value={risk}
                onChange={(e) => setRisk(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              >
                <option>Faible</option>
                <option>Moyen</option>
                <option>Élevé</option>
                <option>Très élevé</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Affluence prévue
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setAffluence(Math.max(0, affluence - 100))}
                  className="px-3 py-1 bg-red-200 hover:bg-red-300 text-red-800 font-bold rounded"
                >
                  -
                </button>

                {/* Saisie directe */}
                <input
                  type="number"
                  value={affluence}
                  onChange={(e) =>
                    setAffluence(Math.max(0, Number(e.target.value)))
                  }
                  className="w-24 p-2 text-center border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                />

                <button
                  onClick={() => setAffluence(affluence + 100)}
                  className="px-3 py-1 bg-green-200 hover:bg-green-300 text-green-800 font-bold rounded"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Planification */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-gray-700">
            Planification
          </h2>
          <label className="block text-sm font-medium mb-1">
            Date de l'événement
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
          />
        </div>
      </div>

      {/* Prediction Panel */}
      <div className="bg-[#1e2454] text-white border border-white rounded-xl shadow-lg w-full md:w-[350px] h-[500px] p-6 flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold mb-4">Résultat de la Prédiction</h2>
        <div className="text-green-400 text-7xl font-bold mb-6">{effectif}</div>

        <div className="text-left w-full">
          <h3 className="text-lg font-semibold mb-2">Récapitulatif</h3>
          <ul className="text-sm space-y-1 list-disc list-inside">
            <li>
              <strong>Type:</strong> {typeEvent}
            </li>
            <li>
              <strong>Zone:</strong> {zone}
            </li>
            <li>
              <strong>Date:</strong>{" "}
              {new Date(date).toLocaleDateString("fr-FR")}
            </li>
            <li>
              <strong>Niveau de risque:</strong> {risk}
            </li>
            <li>
              <strong>Affluence:</strong> {affluence} personnes
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
