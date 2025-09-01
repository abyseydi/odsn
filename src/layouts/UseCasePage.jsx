import React from 'react';

const data = [
  {
    Domaine: "Santé & Démographie",
    UseCase: "Prédiction de la couverture sanitaire corrélée à l'évolution de la population",
    Objectif: "Mettre en place, grâce à l'IA, un système permettant d'avoir une vue sur l'évolution jusqu'en 2030 de la couverture sanitaire et la position du Sénégal par rapport aux normes OMS",
    Impact: "Avoir une vue claire sur la couverture sanitaire\nAider à la planification de construction de structures sanitaires",
    Status: "Terminé",
  },
  {
    Domaine: "Sûreté et Ordre",
    UseCase: "PLAINTE-IA: Classification automatique des plaintes",
    Objectif: "Mettre en place un système simple d’intelligence artificielle capable de classer automatiquement les plaintes selon leur nature",
    Impact: "Gagner du temps lors de la saisie des plaintes\nPrioriser les cas urgents\nFaciliter la création de rapports statistiques",
    Status: "Terminé",
  },
  {
    Domaine: "Contrôle Routier",
    UseCase: "Lecture automatique de plaques pour alerte véhicules suspects",
    Objectif: "Lire automatiquement les plaques d’immatriculation de véhicules à partir d’images\nComparer ces plaques à une liste noire\nAlerter immédiatement les forces de l’ordre si un véhicule suspect est détecté",
    Impact: "Renforcement du contrôle routier\nRéduction de la criminalité liée aux véhicules",
    Status: "Terminé",
  },
];

const renderImpact = (impactText) =>
  impactText.split('\n').map((line, idx) => (
    <li key={idx} className="text-sm text-gray-700">{line}</li>
  ));

export default function UseCasePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Cas d’usage de l’IA
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-[#1E1446] text-white text-sm uppercase tracking-wider">
                <th className="text-left p-6">Domaine</th>
                <th className="text-left p-6">Use Case</th>
                <th className="text-left p-6">Objectif</th>
                <th className="text-left p-6">Impact Concret</th>
                <th className="text-left p-6">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-gray-800">
              {data.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="p-8 font-medium text-indigo-800">{item.Domaine}</td>
                  <td className="p-8 font-semibold">{item.UseCase}</td>
                  <td className="p-8 text-sm leading-relaxed">{item.Objectif}</td>
                  <td className="p-8">
                    <ul className="list-disc list-inside space-y-1">
                      {renderImpact(item.Impact)}
                    </ul>
                  </td>
                  <td className="p-8">
                    <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-700">
                      {item.Status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
