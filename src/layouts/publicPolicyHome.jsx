import React from "react";
import { useNavigate } from "react-router-dom";

function PolicyCard({ logo, alt, title, onClick }) {
  return (
    <div
      className="
        relative w-full 
        max-w-[420px] sm:max-w-[480px] md:max-w-[520px]
        rounded-3xl bg-white border border-blue-200
        p-6 md:p-8 flex flex-col items-center
        shadow-[0_10px_0_0_rgba(60,90,200,0.20),0_24px_40px_-12px_rgba(0,0,0,0.15)]
        transition-transform duration-200 hover:-translate-y-1
      "
      role="region"
      aria-label={alt}
    >
      {/* Logo */}
      <div
        className="
          mx-auto mb-4 flex h-28 w-28 items-center justify-center
          rounded-2xl border border-blue-100 bg-white
          shadow-[0_6px_18px_-6px_rgba(0,0,0,0.15)]
        "
      >
        <img src={logo} alt={alt} className="h-20 w-20 object-contain" />
      </div>

      {/* Titre ergonomique */}
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
        {title}
      </h3>

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

export default function PublicPolicyHome() {
  const navigate = useNavigate();

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4"
      aria-label="Accueil Forces de Défense et de Sécurité"
    >
      {/* Image de fond */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/img/fds.png"
          alt="Forces de Défense"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay léger */}
      <div className="absolute inset-0 -z-10 bg-black/40" />

      {/* Contenu central */}
      <div className="relative z-10 w-full max-w-7xl">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Titre */}
          <h1
            className="
              text-center text-white drop-shadow-lg font-bold
              text-2xl sm:text-3xl md:text-5xl
              mb-10
            "
          >
            Politique Publique
          </h1>

          {/* Grille des cartes */}
          <div
            className="
              grid justify-items-center
              grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
              gap-8 sm:gap-10 md:gap-12
              w-full
            "
          >
            <PolicyCard
              logo="/img/ansd.png"
              alt="Démographie - ANSD"
              title="Démographie & Statistiques (ANSD)"
              onClick={() => navigate("/ANSDHomeprime")}
            />
            <PolicyCard
              logo="/img/senegal-flag.png"
              alt="Ministères"
              title="Ministères & Institutions"
              onClick={() => navigate("")}
            />
              <PolicyCard
              logo="/img/senegal-flag.png"
              alt="Institutions"
              title="Institutions"
              onClick={() => navigate("")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
