import React, { useState } from "react";
import PlaignantIcon from "../../public/img/plaignant.png"; // Remplace avec le bon chemin
import DetailsIcon from "../../public/img/details.png";     // Remplace avec le bon chemin

const initialFormData = {
  prenom: "",
  nom: "",
  telephone: "",
  region: "",
  typePlaignant: "",
  identifiant: "",
  adresse: "",
  langue: "",
  objet: "",
  description: "",
  lieu: "",
  date: "",
  canal: "",
  heure: "",
  urgence: "",
  moyenContact: "",
};

export default function NewPlaintesForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [popup, setPopup] = useState({ show: false, message: "", isError: false });

  const regionsSenegal = [
    "Dakar", "Thiès", "Diourbel", "Saint-Louis", "Tambacounda", "Kaolack", "Fatick",
    "Kolda", "Ziguinchor", "Louga", "Matam", "Sédhiou", "Kédougou", "Kaffrine"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const requiredFields = [
      "prenom", "nom", "identifiant", "typePlaignant", "objet", "description"
    ];

    const isValid = requiredFields.every((field) => formData[field]);

    if (!isValid) {
      setPopup({
        show: true,
        message: "Veuillez remplir tous les champs obligatoires (*)",
        isError: true,
      });
      return;
    }

    setPopup({
      show: true,
      message: "Information ajoutée avec succès !",
      isError: false,
    });

    // Tu peux aussi envoyer les données ici à une API plus tard
  };

  const handleReset = () => {
    setFormData(initialFormData);
  };

  return (
    <div className="p-6 relative h-[700px] w-[1100px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Section Plaignant */}
        <div className="bg-gray-200 border-l-4 border-blue-500 rounded-lg p-6 shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-blue-700">Plaignant</h3>
            <img src={PlaignantIcon} alt="Plaignant" className="w-20 h-20" />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <input className="border rounded p-2" name="prenom" placeholder="Prénom *" value={formData.prenom} onChange={handleChange} />
            <input className="border rounded p-2" name="nom" placeholder="Nom *" value={formData.nom} onChange={handleChange} />
            <input className="border rounded p-2" name="telephone" placeholder="Téléphone" value={formData.telephone} onChange={handleChange} />

            <select className="border rounded p-2" name="region" value={formData.region} onChange={handleChange}>
              <option value="">-- Région --</option>
              {regionsSenegal.map((region) => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>

            <select className="border rounded p-2" name="typePlaignant" value={formData.typePlaignant} onChange={handleChange}>
              <option value="">-- Type de plaignant * --</option>
              <option value="PARTICULIER">PARTICULIER</option>
              <option value="ENTREPRISE">ENTREPRISE</option>
              <option value="ASSOCIATION">ASSOCIATION</option>
              <option value="MINEUR">MINEUR</option>
            </select>

            <input className="border rounded p-2" name="identifiant" placeholder="Identifiant *" value={formData.identifiant} onChange={handleChange} />
          </div>

          <label className="block mb-2">Adresse complète</label>
          <textarea
            className="border rounded p-2 w-full mb-4"
            rows={3}
            name="adresse"
            value={formData.adresse}
            onChange={handleChange}
          />

          <label className="block mb-2">Langue préférée</label>
          <select className="border rounded p-2 w-full" name="langue" value={formData.langue} onChange={handleChange}>
            <option value="">-- Sélectionner --</option>
            <option value="Français">Français</option>
            <option value="Wolof">Wolof</option>
            <option value="Pular">Pular</option>
          </select>
        </div>

        {/* Section Détails */}
        <div className="bg-gray-200 rounded-lg p-6 shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-blue-700">Détails</h3>
            <img src={DetailsIcon} alt="Détails" className="w-20 h-20" />
          </div>

          <input
            className="border rounded p-2 w-full mb-4"
            name="objet"
            placeholder="Objet de la plainte *"
            value={formData.objet}
            onChange={handleChange}
          />
          <textarea
            className="border rounded p-2 w-full mb-4"
            name="description"
            rows={3}
            placeholder="Description de la plainte *"
            value={formData.description}
            onChange={handleChange}
          />

          <div className="grid grid-cols-2 gap-4">
            <input className="border rounded p-2" name="lieu" placeholder="Lieu de l’incident" value={formData.lieu} onChange={handleChange} />
            <input className="border rounded p-2" type="date" name="date" value={formData.date} onChange={handleChange} />

            <select className="border rounded p-2" name="canal" value={formData.canal} onChange={handleChange}>
              <option value="">-- Canal de réception --</option>
              <option value="PHYSIQUE">PHYSIQUE</option>
              <option value="TELEPHONE">TELEPHONE</option>
              <option value="EMAIL">EMAIL</option>
              <option value="INTERNET">INTERNET</option>
            </select>

            <input className="border rounded p-2" type="time" name="heure" value={formData.heure} onChange={handleChange} />

            <select className="border rounded p-2" name="urgence" value={formData.urgence} onChange={handleChange}>
              <option value="">-- Niveau d’urgence --</option>
              <option value="NORMALE">NORMALE</option>
              <option value="RAPIDE">RAPIDE</option>
              <option value="IMMEDIATE">IMMÉDIATE</option>
            </select>

            <select className="border rounded p-2" name="moyenContact" value={formData.moyenContact} onChange={handleChange}>
              <option value="">-- Moyen de contacts --</option>
              <option value="TELEPHONE">TELEPHONE</option>
              <option value="EMAIL">EMAIL</option>
              <option value="COURRIER">COURRIER</option>
              <option value="VISITE">VISITE</option>
              <option value="SMS">SMS</option>
            </select>
          </div>
        </div>
      </div>

      {/* Boutons */}
      <div className="flex justify-end gap-8 mt-8">
        <button
          className="text-blue-600 font-semibold hover:underline"
          onClick={handleReset}
        >
          Annuler
        </button>
        <button
          className="text-green-600 font-semibold hover:underline"
          onClick={handleSubmit}
        >
          Soumettre
        </button>
      </div>

      {/* Popup */}
      {popup.show && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-30">
          <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-lg text-center">
            <p className={`text-lg ${popup.isError ? "text-red-600" : "text-green-600"}`}>
              {popup.message}
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => setPopup({ show: false, message: "", isError: false })}
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}