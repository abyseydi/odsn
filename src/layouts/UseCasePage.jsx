import React, { useState } from 'react';

const data = [
  // Terminés
  {
    "Domaine": "Santé & Démographie",
    "UseCase": "Prédiction de la couverture sanitaire corrélée à l'évolution de la population",
    "Objectif": "Mettre en place, grâce à l'IA, un système permettant d'avoir une vue sur l'évolution jusqu'en 2030 de la couverture sanitaire et la position du Sénégal par rapport aux normes OMS",
    "Impact": "Avoir une vue claire sur la couverture sanitaire\nAider à la planification de construction de structures sanitaires",
    "Status": "Terminé"
  },
  {
    "Domaine": "Sûreté et Ordre",
    "UseCase": "PLAINTE-IA: Classification automatique des plaintes",
    "Objectif": "Mettre en place un système simple d’intelligence artificielle capable de classer automatiquement les plaintes selon leur nature",
    "Impact": "Gagner du temps lors de la saisie des plaintes\nPrioriser les cas urgents\nFaciliter la création de rapports statistiques",
    "Status": "Terminé"
  },
  {
    "Domaine": "Éducation et Formation",
    "UseCase": "Observatoire prédictif des statistiques scolaires",
    "Objectif": "Utiliser des données historiques et des modèles prédictifs pour Analyser les performances scolaires",
    "Impact": "Mise en place de politiques ciblées d’intervention\nRéduction du taux de décrochage\nAmélioration du suivi pédagogique",
    "Status": "Terminé" 
  },

  // En cours
  {
    "Domaine": "Contrôle Routier",
    "UseCase": "Lecture automatique de plaques pour alerte véhicules suspects",
    "Objectif": "Lire automatiquement les plaques d’immatriculation de véhicules à partir d’images\nComparer ces plaques à une liste noire\nAlerter immédiatement les forces de l’ordre si un véhicule suspect est détecté",
    "Impact": "Renforcement du contrôle routier\nRéduction de la criminalité liée aux véhicules",
    "Status": "Actif"
  },
  {
    "Domaine": "Agriculture",
    "UseCase": "Prévision des rendements agricoles avec IA",
    "Objectif": "Prédire les rendements agricoles en fonction des conditions climatiques, du sol et de l’utilisation d’engrais",
    "Impact": "Optimisation de la production\nAide à la décision pour les agriculteurs\nRéduction des pertes",
    "Status": "Actif"
  },
  {
    "Domaine": "Technologies de l'information",
    "UseCase": "Monitoring et autoscaling des systèmes d'information",
    "Objectif": "Mettre en place un système intelligent de surveillance continue et d’ajustement automatique des ressources des systèmes d'information à l’aide de l’intelligence artificielle.",
    "Impact": "Optimisation des performances,\nRéduction des coûts d’infrastructure,\nAmélioration de la résilience des systèmes,\nRéduction du temps d'intervention humaine.",
    "Status": "Actif"
  }, 

  // À lancer
  {
    "Domaine": "Environnement",
    "UseCase": "Détection des zones à risque d'inondation par satellite",
    "Objectif": "Utiliser l’imagerie satellite et l’analyse géospatiale pour anticiper les zones inondables",
    "Impact": "Prévention des catastrophes naturelles\nMeilleure préparation des secours\nPlanification urbaine adaptée",
    "Status": "Planifié"
  },
  {
    "Domaine": "Environnement",
    "UseCase": "Détection des décharges sauvages",
    "Objectif": "Exploiter l’imagerie satellite et l’analyse géospatiale pour identifier, surveiller et anticiper la prolifération des décharges sauvages.",
    "Impact": "Réduction des risques environnementaux,\nPrévention des catastrophes naturelles,\nOptimisation de la planification urbaine,\nAmélioration de la réactivité des services de secours.",
    "Status": "Planifié"
  },
  {
    "Domaine": "Business Intelligence et Intelligence Artificielle",
    "UseCase": "Analyse prédictive et visualisation intelligente des données",
    "Objectif": "Utiliser l’intelligence artificielle pour enrichir les analyses BI, automatiser l’extraction d’insights et faciliter la prise de décision stratégique.",
    "Impact": "Amélioration de la précision des prévisions,\nGain de temps dans l’analyse des données,\nDécisions plus éclairées,\nAugmentation de la compétitivité de l’entreprise.",
    "Status": "Planifié"
  }
];

const renderImpact = (impactText) =>
  impactText.split('\n').map((line, idx) => (
    <li key={idx} className="text-sm text-gray-700">{line}</li>
  ));

export default function UseCasePage() {
  const [statusFilter, setStatusFilter] = useState('Tous');

  const filteredData =
    statusFilter === 'Tous'
      ? data
      : data.filter((item) => item.Status === statusFilter);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="text-black max-w-7xl mx-auto bg-white rounded-3xl shadow-lg p-8">
        <h1 className="text-black text-4xl font-bold text-center mb-6">
          Cas d’usage IA
        </h1>

        {/* Filtre */}
        <div className="mb-6 flex justify-end">
          <label htmlFor="statusFilter" className="mr-3 font-semibold text-black">
            Filtrer par statut :
          </label>
          <select
            id="statusFilter"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="text-black border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="Tous">Tous</option>
            <option value="Terminé">Terminé</option>
            <option value="Actif">Actif</option>
            <option value="Planifié">Planifié</option>
          </select>
        </div>

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
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="p-3 font-medium text-indigo-800">{item.Domaine}</td>
                    <td className="p-3 font-semibold">{item.UseCase}</td>
                    <td className="p-3 text-sm leading-relaxed">{item.Objectif}</td>
                    <td className="p-3">
                      <ul className="list-disc list-inside space-y-1">
                        {renderImpact(item.Impact)}
                      </ul>
                    </td>
                    <td className="p-8">
                      <span
                        className={`inline-block px-3 py-1 text-sm font-medium rounded-full
                        ${
                          item.Status === "Terminé"
                            ? "bg-green-100 text-green-700"
                            : item.Status === "Actif"
                            ? "bg-yellow-100 text-yellow-700"
                            : item.Status === "Planifié"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100 text-gray-700"
                        }
                        `}
                      >
                        {item.Status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center p-6 text-gray-500">
                    Aucun cas d’usage trouvé pour ce statut.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
