

import React from "react";
import {
  HomeIcon,
  ClipboardDocumentListIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  CheckBadgeIcon,
  ShieldExclamationIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const sidebarRoutes = [
  { name: "Accueil", key: "dashboard", icon: HomeIcon },
  { name: "Nouvelle plainte", key: "newplainte", icon: ClockIcon },
  { name: "Liste des Plaintes", key: "plaintes", icon: ClipboardDocumentListIcon },
  { name: "Prediction plaintes", key: "prediction", icon: ShieldExclamationIcon },
  { name: "Scénario déploiement Forces De l'Ordre", key: "effectif", icon: UserGroupIcon },
 
  ];

export default function GendarmerieNavBar({ onSectionChange, activeSection }) {
  return (
    <aside className="hidden md:flex flex-col justify-between absolute top-1/2 -translate-y-1/2 left-0 w-[250px] h-[85%] bg-white rounded-2xl shadow-xl z-20 m-4 p-6">
      {/* Titre Menu */}
      <div>
        <h2 className="text-xl font-semibold text-[#1e2454] mb-6 tracking-wide">
          KAARANGUE
        </h2>

        {/* Liens de navigation */}
        <ul className="space-y-2">
          {sidebarRoutes.map(({ name, key, icon: Icon }) => {
            const isActive = activeSection === key;

            return (
              <li key={key}>
                <button
                  onClick={() => onSectionChange(key)}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg w-full text-left transition-all duration-200 ${
                    isActive
                      ? "bg-[#1e2454] text-white shadow"
                      : "text-gray-800 hover:bg-[#1e2454] hover:text-white"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-sm font-medium">{name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Logo + Baseline */}
      <div className="text-center mt-6">
        <img
          src="/img/accel_logo_light.png"
          alt="Logo Accel"
          className="h-16 mx-auto mb-3"
        />
        <p className="text-xs font-semibold text-gray-500">
          Modernize. Innovate.
        </p>
      </div>
    </aside>
  );
}
