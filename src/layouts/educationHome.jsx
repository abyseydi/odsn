import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/realnavbar";

export default function EducationHome() {
  const iframeRef = useRef(null);
  const navigate = useNavigate();

  // Plein écran sur l'iframe
  const handleFullScreen = () => {
    const el = iframeRef.current;
    if (!el) return;
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.mozRequestFullScreen) el.mozRequestFullScreen();
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    else if (el.msRequestFullscreen) el.msRequestFullscreen();
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      {/* Navbar */}
      <div className="h-16">
        <Navbar />
      </div>

      {/* Espace entre navbar et iframe */}
      <div className="h-4"></div>

      {/* Conteneur iframe + bouton */}
      <div className="relative flex-grow">
        {/* Bouton flottant en bas à droite */}
        <button
          onClick={handleFullScreen}
          aria-label="Passer en plein écran"
          className="
            absolute bottom-3 right-3 z-10
            p-2 rounded-full shadow
            bg-white/80 hover:bg-white
            backdrop-blur-sm
            focus:outline-none focus:ring-2 focus:ring-blue-500
          "
        >
          {/* Icône plein écran */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 3h6v6" />
            <path d="M21 3l-7 7" />
            <path d="M9 21H3v-6" />
            <path d="M3 21l7-7" />
          </svg>
        </button>

        {/* Iframe */}
        <iframe
          ref={iframeRef}
          title="Rapport Power BI"
          src="https://bi-srmt-srmt.apps.origins.heritage.africa/Reports/powerbi/MEN_Performance_Scolaire?rs:Embed=true"
          frameBorder="0"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
