import React, { useState } from "react";
import {
  FaExclamationTriangle,
  FaUser,
  FaCalendar,
  FaMapMarkerAlt,
  FaBullseye,
  FaFileAlt,
} from "react-icons/fa";

const plaintesSimulees = [
  {
    id: "PL1754479040",
    titre: "Agression suivi de mort",
    plaignant: "Niang Baye Gorgoumack",
    date: "2025-08-06T11:17:20.623810",
    lieu: "Pikine",
    priorite: "ELEVEE",
    statut: "NOUVEAU",
  },
  {
    id: "PL20241223282189",
    titre: "Vol avec agression physique",
    plaignant: "Fall Mamadou",
    date: "2024-12-23T00:00:00",
    lieu: "Gueule Tapée, Saint-Louis",
    priorite: "ELEVEE",
    statut: "EN_COURS",
  },
  {
    id: "PL20241223167127",
    titre: "Attouchements ou agression sexuelle",
    plaignant: "Sow Fatou",
    date: "2024-12-23T00:00:00",
    lieu: "Almadies, Fatick",
    priorite: "CRITIQUE",
    statut: "EN_ATTENTE",
  },
  {
    id: "PL20250806123812",
    titre: "Tentative d'enlèvement",
    plaignant: "Diallo Ousmane",
    date: "2025-08-01T10:00:00",
    lieu: "Dakar Plateau",
    priorite: "CRITIQUE",
    statut: "EN_COURS",
  },
  {
    id: "PL20250115104522",
    titre: "Agression armée dans une bijouterie",
    plaignant: "Ndoye Khady",
    date: "2025-01-15T10:45:00",
    lieu: "Mermoz, Dakar",
    priorite: "ELEVEE",
    statut: "NOUVEAU",
  },
];

const CriticalComplaints = () => {
  const [nbAfficher, setNbAfficher] = useState(3); // ✅ Par défaut à 3
  const [modeAffichage, setModeAffichage] = useState("detaille"); // ✅ Mode par défaut à "detaille"

  const renderStatutBadge = (statut) => {
    const base = "text-xs font-semibold px-3 py-1 rounded-full";
    const styles = {
      NOUVEAU: "bg-gray-100 text-gray-800 border border-gray-300",
      EN_COURS: "bg-blue-100 text-blue-800 border border-blue-300",
      EN_ATTENTE: "bg-orange-100 text-orange-800 border border-orange-300",
    };
    return <span className={`${base} ${styles[statut]}`}>{statut}</span>;
  };

  const filtered = plaintesSimulees.slice(0, nbAfficher);

  return (
    <div className="p-5">

      <div className="flex flex-wrap gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nombre à afficher
          </label>
          <select
            value={nbAfficher}
            onChange={(e) => setNbAfficher(parseInt(e.target.value))}
            className="border border-gray-300 px-3 py-2 rounded-lg text-sm"
          >
            {[1, 2, 3, 5].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mode d'affichage
          </label>
          <select
            value={modeAffichage}
            onChange={(e) => setModeAffichage(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded-lg text-sm"
          >
            <option value="simple">Liste simple</option>
            <option value="compact">Compact</option>
            <option value="detaille">Détaillé</option>
          </select>
        </div>
      </div>

      <div
        className={`grid ${
          modeAffichage === "simple"
            ? "gap-4"
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        }`}
      >
        {filtered.map((pl) => (
          <div
            key={pl.id}
            className={`rounded-xl p-5 border bg-white shadow-sm hover:shadow-md transition duration-200 ease-in-out ${
              modeAffichage !== "simple" ? "border-red-100 bg-red-100" : ""
            }`}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2 text-red-600 font-medium text-sm">
                <FaFileAlt />
                <span>{modeAffichage === "compact" ? pl.id.slice(2) : pl.id}</span>
              </div>
              {renderStatutBadge(pl.statut)}
            </div>

            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              {pl.titre}
            </h4>

            {modeAffichage !== "simple" && (
              <>
                <p className="flex items-center gap-2 text-sm text-gray-700 mb-1">
                  <FaUser className="text-purple-500" /> {pl.plaignant}
                </p>
                <p className="flex items-center gap-2 text-sm text-gray-700 mb-1">
                  <FaCalendar className="text-blue-500" /> {pl.date.split("T")[0]}
                </p>
              </>
            )}

            {modeAffichage === "detaille" && (
              <>
                <p className="flex items-center gap-2 text-sm text-gray-700 mb-1">
                  <FaMapMarkerAlt className="text-pink-500" /> {pl.lieu}
                </p>
                <p className="flex items-center gap-2 text-sm text-gray-700 mb-1">
                  <FaBullseye className="text-red-500" /> Priorité: {pl.priorite}
                </p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CriticalComplaints;
