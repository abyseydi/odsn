

import React, { useState, useMemo } from "react";

export default function Effectifpred() {
  // ------------------ États ------------------
  const [typeEvent, setTypeEvent] = useState("Football");
  const [zone, setZone] = useState("Dakar");
  const [risk, setRisk] = useState("Faible");
  // Affluence par défaut à 1000
  const [affluence, setAffluence] = useState(1000);
  const [date, setDate] = useState("2025-08-05");

  // ------------------ Pondération régionale ------------------
  const REGION_WEIGHTS = useMemo(
    () => ({
      "Dakar": 1.50,
      "Thiès": 1.30,
      "Saint-Louis": 1.15,
      "Kaolack": 1.15,
      "Ziguinchor": 1.10,
      "Louga": 1.05,
      "Fatick": 1.00,
      "Diourbel": 1.00,
      "Matam": 0.95,
      "Kolda": 0.90,
      "Tambacounda": 0.90,
      "Sédhiou": 0.75,
      "Kédougou": 0.75,
      "Kaffrine": 0.95,
    }),
    []
  );

  // ------------------ Coefficients métier ------------------
  const EVENT_COEF = { "Football": 1.0, "Lutte": 1.35 };
  const RISK_BONUS = { "Faible": 0, "Moyen": 100, "Élevé": 200, "Très élevé": 300 };

  function affluenceBonus(n) {
    if (n <= 1000) return 0;
    if (n <= 5000) return Math.floor(n / 25);
    return Math.floor(n / 15);
  }

  // ------------------ Prédiction ------------------
  const effectif = useMemo(() => {
    let base = 10;
    base += RISK_BONUS[risk] ?? 0;
    base += affluenceBonus(affluence);
    base *= EVENT_COEF[typeEvent] ?? 1.0;
    base *= REGION_WEIGHTS[zone] ?? 1.0;
    return Math.max(10, Math.round(base / 5) * 5);
  }, [typeEvent, zone, risk, affluence, REGION_WEIGHTS]);

  // ------------------ UI ------------------
  const REGIONS = [
    "Dakar", "Thiès", "Saint-Louis", "Kaolack", "Diourbel", "Fatick", "Kaffrine",
    "Kédougou", "Kolda", "Louga", "Matam", "Sédhiou", "Tambacounda", "Ziguinchor",
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Formulaire */}
        <div className="lg:col-span-2 bg-gray-200 border-l-4 border-blue-500 rounded-xl shadow-lg p-5 sm:p-6 space-y-6">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 text-center">
            Scénario de déploiement des forces de l'ordre
          </h1>

          {/* Localisation & Type */}
          <section>
            <h2 className="text-base sm:text-lg font-semibold mb-3 text-gray-700">
              Localisation et Type d'Événement
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Type d'événement</label>
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
                <label className="block text-sm font-medium mb-1">Zone géographique</label>
                <select
                  value={zone}
                  onChange={(e) => setZone(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                >
                  {REGIONS.map((region) => (
                    <option key={region}>{region}</option>
                  ))}
                </select>
              </div>
            </div>
          </section>

          {/* Risque & Affluence */}
          <section>
            <h2 className="text-base sm:text-lg font-semibold mb-3 text-gray-700">
              Évaluation des Risques et Affluence
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Niveau de risque</label>
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
                <label className="block text-sm font-medium mb-1">Affluence prévue</label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setAffluence(Math.max(1000, affluence - 100))}
                    className="px-3 py-1 bg-red-200 hover:bg-red-300 text-red-800 font-bold rounded"
                  >
                    -
                  </button>

                  <input
                    type="number"
                    min={1000}
                    value={affluence}
                    onChange={(e) => setAffluence(Math.max(1000, Number(e.target.value)))}
                    className="w-28 p-2 text-center border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                  />

                  <button
                    type="button"
                    onClick={() => setAffluence(affluence + 100)}
                    className="px-3 py-1 bg-green-200 hover:bg-green-300 text-green-800 font-bold rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Planification */}
          <section>
            <h2 className="text-base sm:text-lg font-semibold mb-3 text-gray-700">
              Planification
            </h2>
            <label className="block text-sm font-medium mb-1">Date de l'événement</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
            />
          </section>
        </div>

        {/* Résultat */}
        <div className="bg-[#1e2454] text-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center">
          <h2 className="text-lg sm:text-xl font-bold mb-4 text-center">Résultat de la Prédiction</h2>
          <div className="text-green-400 text-5xl sm:text-6xl md:text-7xl font-bold mb-6">{effectif}</div>
          <ul className="text-sm sm:text-base space-y-1 list-disc list-inside w-full">
            <li><strong>Type :</strong> {typeEvent}</li>
            <li><strong>Zone :</strong> {zone}</li>
            <li><strong>Date :</strong> {new Date(date).toLocaleDateString("fr-FR")}</li>
            <li><strong>Niveau de risque :</strong> {risk}</li>
            <li><strong>Affluence :</strong> {affluence} personnes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}













































