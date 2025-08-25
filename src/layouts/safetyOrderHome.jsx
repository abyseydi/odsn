

import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardPage from "./ANSDHomeprime";


function ForceCard({ logo, alt, onClick }) {
  return (
    <div
      className="
        relative w-full 
        max-w-[460px] sm:max-w-[560px] md:max-w-[640px]
        rounded-3xl bg-white border border-blue-200
        p-6 md:p-8
        shadow-[0_10px_0_0_rgba(60,90,200,0.20),0_24px_40px_-12px_rgba(0,0,0,0.15)]
        transition-transform duration-200 hover:-translate-y-1
      "
      role="region"
      aria-label={alt}
    >
      {/* Logo */}
      <div
        className="
          mx-auto mb-5 flex h-28 w-28 items-center justify-center
          rounded-2xl border border-blue-100 bg-white
          shadow-[0_6px_18px_-6px_rgba(0,0,0,0.15)]
        "
      >
        <img src={logo} alt={alt} className="h-20 w-20 object-contain" />
      </div>

      {/* Bouton */}
      <button
        onClick={onClick}
        className="
          w-full sm:w-auto mx-auto block rounded-full px-8 py-3
          font-semibold text-white text-base sm:text-lg
          bg-blue-600 hover:bg-blue-700 active:bg-blue-800
          focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400
          shadow-[0_6px_0_0_rgba(60,90,200,0.30)]
          transition-colors
        "
      >
        Accéder
      </button>
    </div>
  );
}


export default function SafetyOrderHome() {
  const navigate = useNavigate();

  return (
    <section
      className="relative flex h-screen items-center justify-center overflow-hidden"
      aria-label="Accueil Forces de Défense et de Sécurité"
    >
      {/* Image de fond */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/img/fds.png"
          alt=""
          className="w-full h-full object-contain md:object-cover md:object-center"
        />
      </div>

      {/* Overlay léger */}
      <div className="absolute inset-0 -z-10 bg-white/10 md:bg-white/0" />

      {/* Contenu central (titre + cartes) */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col items-center justify-center">
          {/* Titre : marge réduite pour tenir dans l'écran */}
          <h1
            className="
              text-center text-white drop-shadow-lg font-semibold
              text-2xl sm:text-3xl md:text-4xl
              mb-6 sm:mb-8
            "
          >
            Forces de Défense et de Sécurité
          </h1>

          {/* Grille des 3 cartes : gaps modérés */}
          <div className="mx-auto max-w-8xl">
            <div
              className="
                grid place-items-center
                grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                gap-6 sm:gap-7 md:gap-8
              "
            >
              <ForceCard
                logo="/img/logo_police.png"
                alt="Police Nationale"
                onClick={() => navigate("/police")}
              />
              <ForceCard
                logo="/img/logo_gend.jpg"
                alt="Gendarmerie Nationale"
                onClick={() => navigate("/GendarmerieAuth")}
              />
              <ForceCard
                logo="/img/logo_armee.jpg"
                alt="Forces Armées"
                onClick={() => navigate("/ANSDhomeprime")}
              />
            </div>
          </div>
        </div>
      </div>

      {/* WARNING fixé en bas (ne pousse pas le contenu) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-3xl px-4 sm:px-6">
        <div className="text-center backdrop-blur-sm rounded-xl px-3 py-3 sm:py-4">
          <img
            src="/img/warning.png"
            alt="Avertissement"
            className="mx-auto mb-2 h-8 w-auto sm:h-10 md:h-12"
          />
          <p className="text-gray-800 text-xs sm:text-sm md:text-base leading-relaxed">
            Ce module développé pour les Forces de Défense et de Sécurité contient des
            données sensibles et confidentielles. L’accès à son contenu est strictement
            réservé aux utilisateurs autorisés.
          </p>
        </div>
      </div>
    </section>
  );
}

