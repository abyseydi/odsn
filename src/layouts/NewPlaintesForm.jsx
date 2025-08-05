import React from "react";
import PlaignantIcon from "../../public/img/plaignant.png"; // Remplace par ton chemin réel
import DetailsIcon from "../../public/img/details.png";     // Remplace par ton chemin réel

export default function NewPlaintesForm() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Section Plaignant */}
        <div className="bg-gray-200 border-l-4 border-blue-500 rounded-lg p-6 relative shadow">
          {/* Titre + Icône */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-blue-700">Plaignant</h3>
            <img src={PlaignantIcon} alt="Plaignant" className="w-20 h-20" />
          </div>

          {/* Inputs */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input className="border rounded p-2" placeholder="Prénom *" />
            <input className="border rounded p-2" placeholder="Nom *" />
            <input className="border rounded p-2" placeholder="Téléphone" />
            <input className="border rounded p-2" placeholder="Région" />
            <input className="border rounded p-2" placeholder="Type de plaignant" />
            <input className="border rounded p-2" placeholder="Identifiant *" />
          </div>

          {/* Adresse */}
          <label className="block mb-2">Adresse complète</label>
          <textarea
            className="border rounded p-2 w-full"
            rows={3}
            placeholder=""
          />
        </div>

        {/* Section Détails */}
        <div className="bg-gray-200 rounded-lg p-6 relative shadow">
          {/* Titre + Icône */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-blue-700">Détails</h3>
            <img src={DetailsIcon} alt="Détails" className="w-20 h-20" />
          </div>

          <input
            className="border rounded p-2 w-full mb-4"
            placeholder="Objet de la plainte *"
          />
          <textarea
            className="border rounded p-2 w-full mb-4"
            rows={3}
            placeholder="Description de la plainte *"
          />

          {/* Infos complémentaires */}
          <div className="grid grid-cols-2 gap-4">
            <input className="border rounded p-2" placeholder="Lieu de l’incident" />
            <input
              className="border rounded p-2"
              type="date"
              placeholder="Date de l’incident"
            />
            <input className="border rounded p-2" placeholder="Canal de réception" />
            <input
              className="border rounded p-2"
              type="time"
              placeholder="Heure de l’incident"
            />
            <input className="border rounded p-2" placeholder="Niveau d’urgence" />
            <input className="border rounded p-2" placeholder="Moyen de contacts" />
          </div>
        </div>
      </div>

      {/* Boutons */}
      <div className="flex justify-end gap-8 mt-8">
        <button className="text-blue-600 font-semibold hover:underline">Annuler</button>
        <button className="text-green-600 font-semibold hover:underline">Soumettre</button>
      </div>
    </div>
  );
}
