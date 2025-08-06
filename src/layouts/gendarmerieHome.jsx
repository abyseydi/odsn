import React, { useState } from "react";
import ComplaintDonutChart from "./ComplaintDonutChart";
import ComplaintPriorityBarChart from "./ComplaintPriorityBarChart";
import GendarmerieNavBar from "./GendarmerieNavBar";
import NewPlaintesForm from "./NewPlaintesForm";
import Prediction from "./Prediction";
import Effectifpred from "./Effectif";
import { faker } from "@faker-js/faker";

const STATUTS = ["Traitée", "En attente de traitement", "En cours de traitement", "Classée sans suite"];
const PRIORITES = ["Critique", "Élevée", "Moyenne", "Faible"];
const CATEGORIES = [
  "Vol simple", "Vol avec violence", "Cambriolage", "Agression physique",
  "Agression verbale", "Agression sexuelle", "Accident de la circulation",
  "Accident domestique", "Escroquerie", "Fraude", "Conflit familial",
  "Trouble à l'ordre public", "Corruption", "Autre"
];
const REGIONS = [
  "Dakar", "Diourbel", "Fatick", "Kaolack", "Kolda", "Kedougou", "Matam",
  "Thies", "Saint Louis", "Ziguinchor", "Louga", "Sediou", "Tambacounda"
];
const URGENCES = ["Immédiate", "Rapide", "Normale"];
const CANAUX = ["Physique", "Téléphone", "Email"];
const TYPES = ["Particulier", "Entreprise"];

const generateComplaints = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    description: faker.lorem.sentence(),
    statut: faker.helpers.arrayElement(STATUTS),
    priorite: faker.helpers.arrayElement(PRIORITES),
    categorie: faker.helpers.arrayElement(CATEGORIES),
    region: faker.helpers.arrayElement(REGIONS),
    urgence: faker.helpers.arrayElement(URGENCES),
    canal: faker.helpers.arrayElement(CANAUX),
    type: faker.helpers.arrayElement(TYPES)
  }));
};

export default function GendarmerieHome() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [filters, setFilters] = useState({
    statut: "",
    priorite: "",
    categorie: "",
    region: "",
    urgence: "",
    canal: "",
    type: "",
    search: ""
  });

  const complaints = generateComplaints(50);

  const cardData = [
    { color: "pink-500", title: "Total plaintes", value: complaints.length },
    { color: "red-500", title: "En attente", value: complaints.filter(c => c.statut === "En attente de traitement").length },
    { color: "blue-500", title: "Cas critiques", value: complaints.filter(c => c.priorite === "Critique").length },
    { color: "green-500", title: "Traitées aujourd'hui", value: faker.number.int({ min: 10, max: 50 }) },
  ];

  const filteredComplaints = complaints.filter((c) =>
    (!filters.statut || c.statut === filters.statut) &&
    (!filters.priorite || c.priorite === filters.priorite) &&
    (!filters.categorie || c.categorie === filters.categorie) &&
    (!filters.region || c.region === filters.region) &&
    (!filters.urgence || c.urgence === filters.urgence) &&
    (!filters.canal || c.canal === filters.canal) &&
    (!filters.type || c.type === filters.type) &&
    (!filters.search || c.description.toLowerCase().includes(filters.search.toLowerCase()))
  );

  const renderSelect = (label, name, options) => (
    <div>
      <label className="block text-sm text-gray-600 mb-1">{label}</label>
      <select
        name={name}
        value={filters[name]}
        onChange={(e) => setFilters({ ...filters, [name]: e.target.value })}
        className="w-full border px-2 py-1 rounded text-sm"
      >
        <option value="">Toutes</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* NavBar latérale fixe */}
     
        <GendarmerieNavBar className="fixed top-0 left-0 h-screen w-[300px] z-20 bg-white shadow-lg" onSectionChange={setActiveSection} activeSection={activeSection} />
      

      {/* Contenu principal scrollable */}




       <div className="absolute top-0 left-0 w-full h-[50vh] bg-[#1e2454] z-0">
          <svg className="absolute bottom-0 left-0 w-full h-[150px]" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#f2f2f2" d="M0,224 C160,160 320,96 480,128 C640,160 800,256 960,240 C1120,224 1280,128 1440,160 L1440,320 L0,320 Z" />
          </svg>
        </div>
      <main className="ml-[300px] flex-1 overflow-y-auto h-screen px-4 pt-6 relative z-10">
       
        
      <div className="flex items-center justify-center mt-[60px] mb-16 space-x-4">
      {/* Logo gauche */}
      <img
        src="../../public/img/armee.png"
        alt="Logo gauche"
        className="w-20 h-35 object-contain"
      />

      {/* Texte principal */}
      <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
        GENDARMERIE NATIONALE DU SENEGAL
      </h2>

      {/* Logo droit */}
      <img
        src="../../public/img/gendarmerie.png"
        alt="Logo droit"
        className="w-20 h-25 object-contain"
      />
      </div>

        {activeSection === "dashboard" && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {cardData.map((card, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 h-[130px] relative flex flex-col justify-center items-center text-center">
              <div className={`absolute top-0 left-0 h-full w-[6px] rounded-l bg-${card.color}`} />
              <p className="text-2xl font-bold text-gray-900">{card.value}</p>
              <p className="text-sm font-medium text-gray-600 mt-2">{card.title}</p>
            </div>
            ))}
           </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white rounded-lg shadow-md h-[200px]">
                <ComplaintDonutChart />
              </div>
              <div className="bg-white rounded-lg shadow-md h-[200px]">
                <ComplaintPriorityBarChart />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg shadow-md h-[200px]" />
              <div className="bg-white rounded-lg shadow-md h-[200px]" />
            </div>

            {/* bloc en bas avec scroll horizontal si besoin */}
            <div className="w-full overflow-x-auto pb-6">
              <div className="flex gap-6 min-w-[900px]">
                <div className="bg-white rounded-lg shadow-md h-[180px] flex-1 min-w-[400px]" />
                
              </div>
            </div>


            {/* Blocs en bas avec scroll horizontal si besoin */}
            <div className="w-full overflow-x-auto pb-6">
              <div className="flex gap-6 min-w-[900px]">
                
                <div className="bg-white rounded-lg shadow-md h-[180px] flex-1 min-w-[400px]" />
              </div>
            </div>
         

         {/* Blocs en bas avec scroll horizontal si besoin */}
            <div className="w-full overflow-x-auto pb-6">
              <div className="flex gap-6 min-w-[900px]">
                
                <div className="bg-white rounded-lg shadow-md h-[180px] flex-1 min-w-[400px]" />
              </div>
            </div>

          </>
        )}
         
          {activeSection === "newplainte" && (
          <NewPlaintesForm />
        )}

        {activeSection === "prediction" && (
          <Prediction />
        )}

        {activeSection === "effectif" && (
          <Effectifpred />
        )}



        {activeSection === "plaintes" && (
          <>
            <div className="bg-gray-200 p-6 rounded-lg shadow mb-6 border-l-4 border-blue-500" >
              <h3 className="text-lg font-bold mb-4">Filtres</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {renderSelect("Statut", "statut", STATUTS)}
                {renderSelect("Priorité", "priorite", PRIORITES)}
                {renderSelect("Catégorie", "categorie", CATEGORIES)}
                {renderSelect("Région", "region", REGIONS)}
                {renderSelect("Urgence", "urgence", URGENCES)}
                {renderSelect("Canal", "canal", CANAUX)}
                {renderSelect("Type", "type", TYPES)}
                <input type="text" placeholder="Recherche" name="search" value={filters.search} onChange={(e) => setFilters({ ...filters, search: e.target.value })} className="col-span-2 border px-2 py-1 rounded text-sm" />
              </div>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow border-l-4 border-blue-500" >
              <h3 className="text-lg font-bold mb-4">Liste des plaintes</h3>
              <div className="max-h-[500px] overflow-y-auto">
                <table className="w-full text-sm">
                  <thead className="sticky top-0 bg-white z-10">
                    <tr className="text-left text-gray-600 border-b">
                      <th className="py-2">ID</th>
                      <th>Description</th>
                      <th>Statut</th>
                      <th>Priorité</th>
                      <th>Région</th>
                      <th>Urgence</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredComplaints.map((complaint) => (
                      <tr
                        key={complaint.id}
                        className="hover:bg-gray-100 cursor-pointer"
                        onClick={() => setSelectedComplaint(complaint)}
                      >
                        <td className="py-2">{complaint.id}</td>
                        <td>{complaint.description}</td>
                        <td>{complaint.statut}</td>
                        <td>{complaint.priorite}</td>
                        <td>{complaint.region}</td>
                        <td>{complaint.urgence}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {selectedComplaint && (
              <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-md w-[400px]">
                  <h4 className="text-lg font-semibold mb-4">Détails de la plainte #{selectedComplaint.id}</h4>
                  <p><strong>Description:</strong> {selectedComplaint.description}</p>
                  <p><strong>Statut:</strong> {selectedComplaint.statut}</p>
                  <p><strong>Priorité:</strong> {selectedComplaint.priorite}</p>
                  <p><strong>Catégorie:</strong> {selectedComplaint.categorie}</p>
                  <p><strong>Région:</strong> {selectedComplaint.region}</p>
                  <p><strong>Urgence:</strong> {selectedComplaint.urgence}</p>
                  <p><strong>Canal:</strong> {selectedComplaint.canal}</p>
                  <p><strong>Type de plaignant:</strong> {selectedComplaint.type}</p>
                  <button onClick={() => setSelectedComplaint(null)} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
                    Fermer
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}