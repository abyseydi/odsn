

import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function EducationHome() {
  const iframeRef = useRef(null);
  const navigate = useNavigate();

  // Fonction pour passer en plein écran
  const handleFullScreen = () => {
    if (iframeRef.current) {
      if (iframeRef.current.requestFullscreen) {
        iframeRef.current.requestFullscreen();
      } else if (iframeRef.current.mozRequestFullScreen) {
        iframeRef.current.mozRequestFullScreen();
      } else if (iframeRef.current.webkitRequestFullscreen) {
        iframeRef.current.webkitRequestFullscreen();
      } else if (iframeRef.current.msRequestFullscreen) {
        iframeRef.current.msRequestFullscreen();
      }
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      {/* Barre d’actions */}
      <div className="flex justify-between items-center bg-gray-100 p-3 shadow-md">
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Retour à l’accueil
        </button>
        <button
          onClick={handleFullScreen}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Plein écran
        </button>
      </div>

      {/* Iframe */}
      <div className="flex-grow">
        <iframe
          ref={iframeRef}
          title="Rapport Power BI"
          src="https://bi-srmt-srmt.apps.origins.heritage.africa/Reports/powerbi/MEN_Performance_Scolaire?rs:Embed=true"
          frameBorder="0"
          allowFullScreen={true}
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
}