import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  ClipboardDocumentListIcon,
  ClockIcon,
  ShieldExclamationIcon,
  UserGroupIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const sidebarRoutes = [
  { name: "Accueil", key: "dashboard", icon: HomeIcon },
  { name: "Nouvelle plainte", key: "newplainte", icon: ClockIcon },
  { name: "Liste des Plaintes", key: "plaintes", icon: ClipboardDocumentListIcon },
  { name: "Prediction plaintes", key: "prediction", icon: ShieldExclamationIcon },
  { name: "Scénario de déploiement des Forces De l'Ordre", key: "effectif", icon: UserGroupIcon },
];

export default function GendarmerieNavBar({ onSectionChange, activeSection }) {
  const [open, setOpen] = useState(false);

  const MenuList = () => (
    <>
      <div>
        <ul className="space-y-2">
          {sidebarRoutes.map(({ name, key, icon: Icon }) => {
            const isActive = activeSection === key;
            return (
              <li key={key}>
                <button
                  onClick={() => {
                    onSectionChange(key);
                    setOpen(false);
                  }}
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

      {/* Logo + Baseline + Bouton Retour */}
      {/* <div className="text-center mt-10">
        <img
          src="/img/accel_logo_light.png"
          alt="Logo Accel"
          className="h-16 mx-auto mb-3"
        />
        <p className="text-xs font-semibold text-gray-500 mb-4">
          Modernize. Innovate.
        </p>
        <Link
          to="/"
          className="inline-block px-4 py-2 text-sm font-medium text-white bg-[#1e2454] rounded-lg shadow hover:bg-[#0f1633] transition-all"
        >
          Retour à l’accueil
        </Link>
      </div> */}
    </>
  );

  return (
    <>
      {/* ===== Desktop ===== */}
      <aside
        className="
          
          hidden md:flex flex-col justify-between
          absolute top-1/2 -translate-y-1/2 left-0
          w-[250px] h-[85%] bg-white rounded-2xl shadow-xl z-20 m-4 p-6
        "
      >
        <MenuList />
      </aside>

      {/* ===== Mobile : bouton burger en bas à droite ===== */}
      <button
        type="button"
        aria-label="Ouvrir le menu"
        onClick={() => setOpen(true)}
        className="md:hidden fixed bottom-6 right-6 z-30 rounded-full bg-white/95 shadow-lg p-3 border border-gray-200"
      >
        <Bars3Icon className="h-7 w-7 text-[#1e2454]" />
      </button>

      {/* ===== Mobile Drawer ===== */}
      {open && (
        <div className="md:hidden fixed inset-0 z-40">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setOpen(false)}
          />
          <div
            className="
              absolute left-0 top-0
              w-[85vw] max-w-[320px] sm:max-w-[360px]
              my-4 mx-4 bg-white rounded-2xl shadow-xl p-6
              flex flex-col justify-between
              h-[85%]
            "
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-[#1e2454] tracking-wide">
                KAARANGUE
              </h2>
              <button
                aria-label="Fermer le menu"
                onClick={() => setOpen(false)}
                className="rounded-md p-1 hover:bg-gray-100"
              >
                <XMarkIcon className="h-6 w-6 text-gray-700" />
              </button>
            </div>
            <MenuList />
          </div>
        </div>
      )}
    </>
  );
}
