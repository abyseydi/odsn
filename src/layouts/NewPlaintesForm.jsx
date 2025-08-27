// import React, { useState } from "react";
// import PlaignantIcon from "../../public/img/plaignant.png"; 
// import DetailsIcon from "../../public/img/details.png";     
// const initialFormData = {
//   prenom: "",
//   nom: "",
//   telephone: "",
//   region: "",
//   sexe: "",
//   age: "",
//   identifiant: "",
//   adresse: "",
//   langue: "",
//   objet: "",
//   description: "",
//   lieu: "",
//   date: "",
//   canal: "",
//   heure: "",
//   urgence: "",
//   moyenContact: "",
// };

// export default function NewPlaintesForm() {
//   const [formData, setFormData] = useState(initialFormData);
//   const [popup, setPopup] = useState({ show: false, message: "", isError: false });

//   const regionsSenegal = [
//     "Dakar", "Thiès", "Diourbel", "Saint-Louis", "Tambacounda", "Kaolack", "Fatick",
//     "Kolda", "Ziguinchor", "Louga", "Matam", "Sédhiou", "Kédougou", "Kaffrine"
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = () => {
//     const requiredFields = [
//       "prenom", "nom", "identifiant", "typePlaignant", "objet", "description"
//     ];

//     const isValid = requiredFields.every((field) => formData[field]);

//     if (!isValid) {
//       setPopup({
//         show: true,
//         message: "Veuillez remplir tous les champs obligatoires (*)",
//         isError: true,
//       });
//       return;
//     }

//     setPopup({
//       show: true,
//       message: "Information ajoutée avec succès !",
//       isError: false,
//     });

//     // Tu peux aussi envoyer les données ici à une API plus tard
//   };

//   const handleReset = () => {
//     setFormData(initialFormData);
//   };

//   return (
//     <div className="p-6 relative h-[700px] w-[1100px]">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Section Plaignant */}
//         <div className="bg-gray-200 border-l-4 border-blue-500 rounded-lg p-6 shadow">
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-xl font-bold text-blue-700">Plaignant</h3>
//             <img src={PlaignantIcon} alt="Plaignant" className="w-20 h-20" />
//           </div>

//           <div className="grid grid-cols-2 gap-4 mb-4">
//             <input className="border rounded p-2" name="prenom" placeholder="Prénom *" value={formData.prenom} onChange={handleChange} />
//             <input className="border rounded p-2" name="nom" placeholder="Nom *" value={formData.nom} onChange={handleChange} />
//             <input className="border rounded p-2" name="telephone" placeholder="Téléphone" value={formData.telephone} onChange={handleChange} />

//             <select className="border rounded p-2" name="region" value={formData.region} onChange={handleChange}>
//               <option value="">-- Région --</option>
//               {regionsSenegal.map((region) => (
//                 <option key={region} value={region}>{region}</option>
//               ))}
//             </select>

//             <select className="border rounded p-2" name="typePlaignant" value={formData.typePlaignant} onChange={handleChange}>
//               <option value="">-- Type de plaignant * --</option>
//               <option value="PARTICULIER">PARTICULIER</option>
//               <option value="ENTREPRISE">ENTREPRISE</option>
//               <option value="ASSOCIATION">ASSOCIATION</option>
//             </select>

//             <input className="border rounded p-2" name="identifiant" placeholder="N° CNI*" value={formData.identifiant} onChange={handleChange} />


//             <input className="border rounded p-2" name="age" placeholder="Âge" type="int" value={formData.age} onChange={handleChange} />
             
//              <select className="border rounded p-2" name="sexe" value={formData.sexe} onChange={handleChange}>
//               <option value="">Sexe</option>
//               <option value="M">M</option>
//               <option value="F">F</option>
//             </select>

//           </div>

//           <label className="block mb-2">Adresse complète</label>
//           <textarea
//             className="border rounded p-2 w-full mb-4"
//             rows={3}
//             name="adresse"
//             value={formData.adresse}
//             onChange={handleChange}
//           />

//           <label className="block mb-2">Langue parlée</label>
//           <select className="border rounded p-2 w-full" name="langue" value={formData.langue} onChange={handleChange}>
//             <option value="">-- Sélectionner --</option>
//             <option value="Français">Français</option>
//             <option value="Wolof">Wolof</option>
//             <option value="Pular">Pular</option>
//           </select>

//         </div>

        

//         {/* Section Détails */}
//         <div className="bg-gray-200 rounded-lg p-6 shadow">
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-xl font-bold text-blue-700">Détails</h3>
//             <img src={DetailsIcon} alt="Détails" className="w-20 h-20" />
//           </div>

//           <input
//             className="border rounded p-2 w-full mb-4"
//             name="objet"
//             placeholder="Objet de la plainte *"
//             value={formData.objet}
//             onChange={handleChange}
//           />
//           <textarea
//             className="border rounded p-2 w-full mb-4"
//             name="description"
//             rows={3}
//             placeholder="Description de la plainte *"
//             value={formData.description}
//             onChange={handleChange}
//           />

//           <div className="grid grid-cols-2 gap-4">
//             <input className="border rounded p-2" name="lieu" placeholder="Lieu de l’incident" value={formData.lieu} onChange={handleChange} />
//             <input className="border rounded p-2" type="date" name="date" value={formData.date} onChange={handleChange} />

//             <input className="border rounded p-2" type="input" placeholder="Heure de l'incident" name="heure" value={formData.heure} onChange={handleChange} />

//             <select className="border rounded p-2" name="urgence" value={formData.urgence} onChange={handleChange}>
//               <option value="">-- Niveau d’urgence --</option>
//               <option value="NORMALE">NORMALE</option>
//               <option value="RAPIDE">RAPIDE</option>
//               <option value="IMMEDIATE">IMMÉDIATE</option>
//             </select>

//           </div><br></br>

//           <select className="border rounded p-2 w-full" name="moyenContact" value={formData.moyenContact} onChange={handleChange}>
//               <option value="">-- Moyen de contacts --</option>
//               <option value="TELEPHONE">TELEPHONE</option>
//               <option value="EMAIL">EMAIL</option>
//               <option value="COURRIER">COURRIER</option>
//               <option value="VISITE">VISITE</option>
//               <option value="SMS">SMS</option>
//             </select>
//         </div>
//       </div>

//       {/* Boutons */}
//       <div className="flex justify-end gap-8 mt-8">
//         <button
//           className="text-blue-600 font-semibold hover:underline"
//           onClick={handleReset}
//         >
//           Annuler
//         </button>
//         <button
//           className="text-green-600 font-semibold hover:underline"
//           onClick={handleSubmit}
//         >
//           Soumettre
//         </button>
//       </div>

//       {/* Popup */}
//       {popup.show && (
//         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-30">
//           <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-lg text-center">
//             <p className={`text-lg ${popup.isError ? "text-red-600" : "text-green-600"}`}>
//               {popup.message}
//             </p>
//             <button
//               className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//               onClick={() => setPopup({ show: false, message: "", isError: false })}
//             >
//               Fermer
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }






import React, { useState } from "react";
// Si tu utilises Vite/CRA et que tes images sont dans /public/img,
// tu peux directement utiliser src="/img/plaignant.png" sans import.
// Sinon, garde ces imports en pointant vers le bon dossier assets.
import PlaignantIcon from "../../public/img/plaignant.png";
import DetailsIcon from "../../public/img/details.png";
import {API_ODSN_SERVICE} from "@/BASE_API/HttpBase";

const initialFormData = {
  // Plaignant
  prenom: "",
  nom: "",
  telephone: "",
  region: "",
  sexe: "",
  age: "",
  typePlaignant: "",       // ✅ manquante dans ton code original
  identifiant: "",
  adresse: "",
  langue: "",
  // Détails
  objet: "",
  description: "",
  lieu: "",
  date: "",
  heure: "",
  urgence: "",
  moyenContact: "",
  canal: "",
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
    const requiredFields = ["prenom", "nom", "identifiant", "typePlaignant", "objet", "description"];
    const isValid = requiredFields.every((field) => formData[field]);

    if (!isValid) {
      setPopup({
        show: true,
        message: "Veuillez remplir tous les champs obligatoires (*)",
        isError: true,
      });
      return;




    // TODO: envoi API
  };



  fetch(API_ODSN_SERVICE+'odsn/plaintes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  }).then((response) => {
    if (response.ok) {
      setPopup({
        show: true,
        message: "plainte enregistré avec success",
        isError: false,
      });
      setFormData(initialFormData);
    }
    return response.json();
  }).catch((error) => {
    let message = "Une erreur est survenue !";

    if (error.message === "SERVER_ERROR") {
      message = "Le serveur a répondu avec une erreur !";
    } else if (error.message.includes("Failed to fetch") ||
        error.message.includes("ERR_CONNECTION_REFUSED")) {
      message = "Impossible de se connecter au serveur.";
    } else {
      message = "Vérifiez les informations saisies.";
    }

    setPopup({
      show: true,
      message,
      isError: true,
    });
  });
};



const handleReset = () => {
    setFormData(initialFormData);
  };

  return (
    <div className="w-full">
      {/* Conteneur centré et fluide */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        {/* Grille responsive 1→2 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* ====== Carte Plaignant ====== */}
          <section className="bg-gray-100 border-l-4 border-blue-500 rounded-xl p-5 sm:p-6 shadow">
            <header className="flex items-center justify-between mb-4">
              <h3 className="text-lg sm:text-xl font-bold text-blue-700">Plaignant</h3>
              <img
                src={PlaignantIcon}
                alt="Plaignant"
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
              />
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                className="border rounded p-2 w-full"
                name="prenom"
                placeholder="Prénom *"
                value={formData.prenom}
                onChange={handleChange}
              />
              <input
                className="border rounded p-2 w-full"
                name="nom"
                placeholder="Nom *"
                value={formData.nom}
                onChange={handleChange}
              />
              <input
                className="border rounded p-2 w-full"
                name="telephone"
                placeholder="Téléphone"
                value={formData.telephone}
                onChange={handleChange}
              />

              <select
                className="border rounded p-2 w-full"
                name="region"
                value={formData.region}
                onChange={handleChange}
              >
                <option value="">-- Région --</option>
                {regionsSenegal.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>

              <select
                className="border rounded p-2 w-full"
                name="typePlaignant"
                value={formData.typePlaignant}
                onChange={handleChange}
              >
                <option value="">-- Type de plaignant * --</option>
                <option value="PARTICULIER">PARTICULIER</option>
                <option value="ENTREPRISE">ENTREPRISE</option>
                <option value="ASSOCIATION">ASSOCIATION</option>
              </select>

              <input
                className="border rounded p-2 w-full"
                name="identifiant"
                placeholder="N° CNI *"
                value={formData.identifiant}
                onChange={handleChange}
              />

              <input
                className="border rounded p-2 w-full"
                name="age"
                type="number"
                min="0"
                placeholder="Âge"
                value={formData.age}
                onChange={handleChange}
              />

              <select
                className="border rounded p-2 w-full"
                name="sexe"
                value={formData.sexe}
                onChange={handleChange}
              >
                <option value="">Sexe</option>
                <option value="M">M</option>
                <option value="F">F</option>
              </select>
            </div>

            <div className="mt-4">
              <label className="block mb-2 text-sm text-gray-700">Adresse complète</label>
              <textarea
                className="border rounded p-2 w-full"
                rows={3}
                name="adresse"
                value={formData.adresse}
                onChange={handleChange}
              />
            </div>

            <div className="mt-4">
              <label className="block mb-2 text-sm text-gray-700">Langue parlée</label>
              <select
                className="border rounded p-2 w-full"
                name="langue"
                value={formData.langue}
                onChange={handleChange}
              >
                <option value="">-- Sélectionner --</option>
                <option value="Français">Français</option>
                <option value="Wolof">Wolof</option>
                <option value="Pular">Pular</option>
              </select>
            </div>
          </section>

          {/* ====== Carte Détails ====== */}
          <section className="bg-gray-100 rounded-xl p-5 sm:p-6 shadow">
            <header className="flex items-center justify-between mb-4">
              <h3 className="text-lg sm:text-xl font-bold text-blue-700">Détails</h3>
              <img
                src={DetailsIcon}
                alt="Détails"
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
              />
            </header>

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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                className="border rounded p-2 w-full"
                name="lieu"
                placeholder="Lieu de l’incident"
                value={formData.lieu}
                onChange={handleChange}
              />
              <input
                className="border rounded p-2 w-full"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />

              <input
                className="border rounded p-2 w-full"
                type="time"
                name="heure"
                value={formData.heure}
                onChange={handleChange}
              />

              <select
                className="border rounded p-2 w-full"
                name="urgence"
                value={formData.urgence}
                onChange={handleChange}
              >
                <option value="">-- Niveau d’urgence --</option>
                <option value="NORMALE">NORMALE</option>
                <option value="RAPIDE">RAPIDE</option>
                <option value="IMMEDIATE">IMMÉDIATE</option>
              </select>
            </div>

            <div className="mt-4">
              <select
                className="border rounded p-2 w-full"
                name="moyenContact"
                value={formData.moyenContact}
                onChange={handleChange}
              >
                <option value="">-- Moyen de contact --</option>
                <option value="TELEPHONE">TÉLÉPHONE</option>
                <option value="EMAIL">EMAIL</option>
                <option value="COURRIER">COURRIER</option>
                <option value="VISITE">VISITE</option>
                <option value="SMS">SMS</option>
              </select>
            </div>
          </section>
        </div>

        {/* Boutons */}
        <div className="flex flex-col sm:flex-row justify-end gap-4 sm:gap-6 mt-6">
          <button
            className="text-blue-600 font-semibold hover:underline"
            onClick={handleReset}
          >
            Annuler
          </button>
          <button
            className="px-4 py-2 rounded bg-green-600 text-white font-semibold hover:bg-green-700"
            onClick={handleSubmit}
          >
            Soumettre
          </button>
        </div>
      </div>

      {/* Popup */}
      {popup.show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4">
          <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-lg max-w-md w-full text-center">
            <p className={`text-base sm:text-lg ${popup.isError ? "text-red-600" : "text-green-600"}`}>
              {popup.message}
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
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
