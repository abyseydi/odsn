import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  ClipboardDocumentListIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

const sidebarRoutes = [
  { name: "Accueil", path: "/", icon: HomeIcon },
  { name: "Plaintes", path: "/total", icon: ClipboardDocumentListIcon },
  { name: "Périodes et tendances", path: "/en-attente", icon: ClockIcon },
  // { name: "Cas Critiques", path: "/critiques", icon: ExclamationTriangleIcon },
  // { name: "Traitées Aujourd'hui", path: "/traitees", icon: CheckBadgeIcon },
];

export default function GendarmerieNavbar() {
  const location = useLocation();

  return (
    <aside className="hidden md:flex flex-col justify-between absolute top-1/2 -translate-y-1/2 left-0 w-[250px] h-[85%] bg-white rounded-2xl shadow-xl z-20 m-4 p-6">
      {/* Menu */}
      <div>
        <h2 className="text-xl font-semibold text-[#1e2454] mb-6 tracking-wide">
          DASHBOARD
        </h2>
        <ul className="space-y-2">
          {sidebarRoutes.map(({ name, path, icon: Icon }) => {
            const isActive = location.pathname === path;

            return (
              <li key={name}>
                <Link
                  to={path}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-[#1e2454] text-white shadow"
                      : "text-gray-800 hover:bg-[#1e2454] hover:text-white"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-sm font-medium">{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Logo + baseline */}
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
