import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const data = [
  {
    Domaine: "Santé & Démographie",
    UseCase: "Prédiction de la couverture sanitaire corrélée à l'évolution de la population",
    Objectif: "Mettre en place, grâce à l'IA, un système permettant d'avoir une vue sur l'évolution jusqu'en 2030 de la couverture sanitaire et la position du Sénégal par rapport aux normes OMS",
    Impact: "Avoir une vue claire sur la couverture sanitaire\n\nAider à la planification de construction de structures sanitaires",
    Status: "Terminé",
  },
  {
    Domaine: "Sûreté et Ordre",
    UseCase: "PLAINTE-IA: Classification automatique des plaintes",
    Objectif: "Mettre en place un système simple d’intelligence artificielle capable de classer automatiquement les plaintes selon leur nature",
    Impact: "Gagner du temps lors de la saisie des plaintes\n\nPrioriser les cas urgents\n\nFaciliter la création de rapports statistiques",
    Status: "Terminé",
  },
  {
    Domaine: "Contrôle Routier",
    UseCase: "Lecture automatique de plaques pour alerte véhicules suspects",
    Objectif: "Lire automatiquement les plaques d’immatriculation de véhicules à partir d’images\n\nComparer ces plaques à une liste noire\n\nAlerter immédiatement les forces de l’ordre si un véhicule suspect est détecté",
    Impact: "Renforcement du contrôle routier\n\nRéduction de la criminalité liée aux véhicules",
    Status: "Terminé",
  },
];

export default function UseCasePage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = data[selectedIndex];
  const navigate = useNavigate();

  const renderList = (text) =>
    text.split("\n").map((line, i) => <li key={i}>{line}</li>);

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-blue-50 to-blue-200 overflow-hidden">
      {/* Image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100"
        style={{ backgroundImage: "url('/img/gb_cata5.png')" }}
      />

      {/* Contenu */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
        

        {/* Carte principale */}
        <div className="w-full max-w-6xl bg-white bg-opacity-80 rounded-2xl shadow-2xl p-6 backdrop-blur-md">
          
          {/* Boutons Domaines */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {data.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 shadow ${
                  selectedIndex === index
                    ? "bg-blue-600 text-white shadow-lg scale-105"
                    : "bg-gray-200 text-gray-800 hover:bg-blue-100"
                }`}
              >
                {item.Domaine}
              </button>
            ))}
          </div>

          {/* Section sélectionnée */}
          <div className="space-y-6">
            <div className="text-center text-2xl font-bold text-blue-900">
              {selected.Domaine}
            </div>

            {/* Tableau Use Case */}
            <div className="grid grid-cols-1 md:grid-cols-3 text-center rounded-lg overflow-hidden shadow-md">
              <div className="bg-blue-700 text-white py-3 font-semibold">Use Case</div>
              <div className="bg-blue-700 text-white py-3 font-semibold">Objectif</div>
              <div className="bg-blue-700 text-white py-3 font-semibold">Status</div>

              <div className="bg-blue-100 py-3 px-2 text-black">{selected.UseCase}</div>
              <div className="bg-blue-100 py-3 px-2 text-black">{selected.Objectif}</div>
              <div className="bg-blue-100 py-3 px-2 font-medium text-green-800">{selected.Status}</div>
            </div>

            {/* Impacts Concrets */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1].map((col) => (
                <div key={col} className="bg-white rounded-xl shadow-lg p-4">
                  <h3 className="text-blue-700 text-lg font-semibold mb-2">Impacts Concrets</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    {renderList(selected.Impact).slice(
                      col * Math.ceil(renderList(selected.Impact).length / 2),
                      (col + 1) * Math.ceil(renderList(selected.Impact).length / 2)
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
}
