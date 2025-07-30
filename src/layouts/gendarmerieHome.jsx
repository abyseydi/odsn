import React from "react";
import ComplaintDonutChart from "./ComplaintDonutChart";
import ComplaintPriorityBarChart from "./ComplaintPriorityBarChart";
import GendarmerieNavBar from "./GendarmerieNavBar"; // chemin adapté

export default function GendarmerieHome() {
  const cardData = [
    { color: "pink-500", title: "Total plaintes", value: "1 245" },
    { color: "red-500", title: "En attente", value: "312" },
    { color: "teal-400", title: "Cas critiques", value: "47" },
    { color: "indigo-900", title: "Traitées aujourd'hui", value: "189" },
  ];

  return (
    <div className="relative min-h-screen bg-gray-100 overflow-x-hidden">
      {/* === BACKGROUND BLEU AVEC ONDULATION === */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-[#1e2454] z-0">
        <svg
          className="absolute bottom-0 left-0 w-full h-[150px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#f2f2f2"
            d="M0,224 C160,160 320,96 480,128 C640,160 800,256 960,240 C1120,224 1280,128 1440,160 L1440,320 L0,320 Z"
          />
        </svg>
      </div>

      {/* === SIDEBAR FLOTANTE (plus large) === */}
      {/* <aside className="hidden md:flex flex-col justify-between absolute top-1/2 -translate-y-1/2 left-0 w-[250px] h-[85%] bg-white rounded-lg shadow-lg z-20 m-2 p-4">
        <div>
          <h2 className="flex items-center gap-2 font-medium text-lg mb-4">
            DASHBOARD
          </h2>
          <ul className="space-y-2 text-sm text-gray-800">
            <li><a href="#" className="flex items-center gap-2 hover:underline">Accueil</a></li>
            <li><a href="#" className="flex items-center gap-2">Total Plaintes</a></li>
            <li><a href="#" className="flex items-center gap-2">En Attente</a></li>
            <li><a href="#" className="flex items-center gap-2">Cas Critiques</a></li>
            <li><a href="#" className="flex items-center gap-2">Traitées Aujourd'hui</a></li>
          </ul>
        </div>

        <div className="text-center">
          <img
            src="/img/accel_logo_light.png"
            alt="Logo Accel"
            className="h-20 mb-4 mx-auto"
          />
          <p className="text-xs font-bold text-gray-700 leading-snug">
            Modernize. Innovate.
          </p>
        </div>
      </aside> */}
  <GendarmerieNavBar />
  {/* ... reste de ta page */}
      {/* === CONTENU PRINCIPAL === */}
      <main className="relative z-10 md:pl-[300px] px-4 pt-6">
        {/* Titre centré */}
        <div className="flex justify-center mt-[60px] mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
            GENDARMERIE NATIONALE DU SENEGAL
          </h2>
        </div>

        {/* CARTES COULEUR EN HAUT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 h-[130px] relative flex flex-col justify-center items-center text-center"
            >
              <div
                className={`absolute top-0 left-0 h-full w-[6px] rounded-l bg-${card.color}`}
              ></div>
              <p className="text-2xl font-bold text-gray-900">{card.value}</p>
              <p className="text-sm font-medium text-gray-600 mt-2">{card.title}</p>
            </div>
          ))}
        </div>

        {/* GRAPHIQUES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md h-[200px]">
            <ComplaintDonutChart />
          </div>
          <div className="bg-white rounded-lg shadow-md h-[200px]">
            <ComplaintPriorityBarChart />
          </div>
        </div>

        {/* BLOCS SUPPLÉMENTAIRES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-md h-[200px]"></div>
          <div className="bg-white rounded-lg shadow-md h-[200px]"></div>
        </div>
      </main>
    </div>
  );
}
