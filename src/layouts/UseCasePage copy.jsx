import React, { useState } from 'react';

const data = [
  {
    "Domaine": "Santé & Démographie",
    "UseCase": "Prédiction de la couverture sanitaire corrélée à l'évolution de la population",
    "Objectif": "Mettre en place, grâce à l'IA, un système permettant d'avoir une vue sur l'évolution jusqu'en 2030 de la couverture sanitaire et la position du Sénégal par rapport aux normes OMS",
    "Impact": "Avoir une vue claire sur la couverture sanitaire\n\nAider à la planification de construction de structures sanitaires",
    "Status": "Terminé"
  },
  {
    "Domaine": "sûreté et Ordre",
    "UseCase": "PLAINTE-IA: Classification automatique des plaintes",
    "Objectif": "Mettre en place un système simple d’intelligence artificielle capable de classer automatiquement les plaintes selon leur nature",
    "Impact": "Gagner du temps lors de la saisie des plaintes\n\nPrioriser les cas urgents\n\nFaciliter la création de rapports statistiques",
    "Status": "Terminé"
  },
  {
    "Domaine": "Contrôle Routier",
    "UseCase": "Lecture automatique de plaques pour alerte véhicules suspects",
    "Objectif": "Lire automatiquement les plaques d’immatriculation de véhicules à partir d’images\n\nComparer ces plaques à une liste noire\n\nAlerter immédiatement les forces de l’ordre si un véhicule suspect est détecté",
    "Impact": "Renforcement du contrôle routier\n\nRéduction de la criminalité liée aux véhicules",
    "Status": "Terminé"
  }
];

export default function UseCasePage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = data[selectedIndex];

  const renderList = (text) => {
    return text.split('\n').map((line, i) => <li key={i}>{line}</li>);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* IMAGE EN BACKGROUND */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/img/gb_cata5.png')" }}
      />

      {/* CONTENU */}
      <div className="relative z-20 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-6xl h-auto justify-center bg-white bg-opacity-10 p-4 sm:p-6 rounded-lg shadow-lg flex flex-col">
          
          {/* Boutons */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {data.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`py-2 px-4 rounded-md font-medium transition-colors duration-300 ${
                  selectedIndex === index
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-blue-100'
                }`}
              >
                {item.Domaine}
              </button>
            ))}
          </div>

          {/* Contenu sélectionné */}
          <div className="flex-1">
            <div className="bg-blue-900 text-white text-center py-2 rounded-md text-lg font-bold mb-4 shadow-md">
              Cible : {selected.Domaine ?? 'Non défini'}
            </div>

            {/* Tableau UseCase */}
            <div className="grid grid-cols-1 md:grid-cols-3 bg-blue-900 text-white rounded-t-md shadow-md">
              <div className="text-center py-2 font-semibold">Use Case</div>
              <div className="text-center py-2 font-semibold">Objectif</div>
              <div className="text-center py-2 font-semibold">Status</div>
            </div>
            <div className="bg-blue-500 grid grid-cols-1 md:grid-cols-3 text-white rounded-b-md mb-4 shadow-md bg-opacity-60">
              <div className="text-center py-2 px-2 break-words">{selected.UseCase}</div>
              <div className="text-center py-2 px-2 break-words">{selected.Objectif}</div>
              <div className="text-center py-2 px-2 break-words">{selected.Status}</div>
            </div>

            {/* Impacts Concrets */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[0, 1].map((col) => (
                <div key={col} className="bg-blue-500 rounded-t-lg shadow-md p-4 bg-opacity-60">
                  <div className="bg-blue-900 text-white text-center py-2 font-semibold rounded-t-lg">
                    Impacts Concret
                  </div>
                  <ul className="mt-2 text-white list-disc list-inside">
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
