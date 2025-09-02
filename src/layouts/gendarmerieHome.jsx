
import React, { useMemo, useState } from "react";
import ComplaintDonutChart from "./complaintDonutChart";
import ComplaintPriorityBarChart from "./complaintPriorityBarChart";
import GendarmerieNavBar from "./gendarmerieNavBar";
import { faker } from "@faker-js/faker";
import CarteChaleur from "./CarteChaleur";
import NewPlaintesForm from "./NewPlaintesForm";
import Prediction from "./Prediction";
import Effectifpred from "./Effectif";
import CriticalComplaints from "./critical";
import Navbar from "@/components/realnavbar";


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

const generateComplaints = (count) =>
  Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    description: faker.lorem.sentence(),
    statut: faker.helpers.arrayElement(STATUTS),
    priorite: faker.helpers.arrayElement(PRIORITES),
    categorie: faker.helpers.arrayElement(CATEGORIES),
    region: faker.helpers.arrayElement(REGIONS),
    urgence: faker.helpers.arrayElement(URGENCES),
    canal: faker.helpers.arrayElement(CANAUX),
    type: faker.helpers.arrayElement(TYPES),
  }));

const COLOR_MAP = {
  "pink-500": "bg-pink-500",
  "red-500": "bg-red-500",
  "teal-400": "bg-teal-400",
  "indigo-900": "bg-indigo-900",
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
    search: "",
  });

  const complaints = useMemo(() => generateComplaints(120), []);

  const cardData = useMemo(() => ([
    { color: "pink-500",   title: "Total plaintes",        value: complaints.length },
    { color: "red-500",    title: "En attente",            value: complaints.filter(c => c.statut === "En attente de traitement").length },
    { color: "teal-400",   title: "Cas critiques",         value: complaints.filter(c => c.priorite === "Critique").length },
    { color: "indigo-900", title: "Traitées aujourd'hui",  value: faker.number.int({ min: 10, max: 50 }) },
  ]), [complaints]);

  const filteredComplaints = useMemo(() => (
    complaints.filter((c) =>
      (!filters.statut   || c.statut   === filters.statut)   &&
      (!filters.priorite || c.priorite === filters.priorite) &&
      (!filters.categorie|| c.categorie=== filters.categorie)&&
      (!filters.region   || c.region   === filters.region)   &&
      (!filters.urgence  || c.urgence  === filters.urgence)  &&
      (!filters.canal    || c.canal    === filters.canal)    &&
      (!filters.type     || c.type     === filters.type)     &&
      (!filters.search   || c.description.toLowerCase().includes(filters.search.toLowerCase()))
    )
  ), [complaints, filters]);

  const renderSelect = (label, name, options) => (
    <div className="w-[200px]">
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
    <div>
      <Navbar />
    <div className=" pt-[90px] relative h-screen overflow-hidden bg-gray-100">
      <div className="absolute top-0 left-0 w-full h-[25vh] bg-[#1e2454] z-0">
        <svg 
          className="absolute bottom-0 left-0 w-full h-[70px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#f2f2f2"
            d="M0,224 C160,160 320,96 480,128 C640,160 800,256 960,240 C1120,224 1280,128 1440,160 L1440,320 L0,320 Z"
          />
        </svg>
      </div>
      
      <GendarmerieNavBar
        onSectionChange={setActiveSection}
        activeSection={activeSection}
      />

      <main className="relative z-10 h-full md:pl-[280px] overflow-hidden">
        <div className="flex flex-col h-full">
          <header className="px-3 pt-2 shrink-0">
           <div className="flex flex-col items-center text-center">
  <div className="flex items-center justify-center gap-3 mb-2">
    <img
      src="/img/senegal1.png"
      alt="Logo gauche"
      className="w-[44px] h-[44px] md:w-[52px] md:h-[52px]"
    />
    <h2 className="text-lg md:text-2xl font-bold text-white">
      GENDARMERIE NATIONALE DU SENEGAL
    </h2>
    <img
      src="/img/gendarmerie.png"
      alt="Logo droit"
      className="w-[44px] h-[44px] md:w-[52px] md:h-[52px]"
    />
  </div>

  <p className="text-white max-w-2xl text-sm md:text-base leading-relaxed px-4 mb-4">
    Solution d’IA pour la classification automatique des plaintes et
    l’optimisation stratégique du déploiement des Forces De l’Ordre
  </p>
</div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-2">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow p-2 h-[70px] flex flex-col justify-center items-center text-center relative"
                >
                  <div className={`absolute top-0 left-0 h-full w-[5px] rounded-l ${COLOR_MAP[card.color]}`} />
                  <p className="text-base md:text-lg font-bold text-gray-900">{card.value}</p>
                  <p className="text-[11px] font-medium text-gray-600">{card.title}</p>
                </div>
              ))}
            </div>
            
          </header>


          <section className="flex-1 min-h-0 px-3 pb-3 overflow-y-auto">
{activeSection === "dashboard" && (
  <div className="mx-auto w-full max-w-7xl space-y-3">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
      <div className="bg-white rounded-lg shadow p-2">
        <p className="text-xs font-semibold mb-1">
     Répartion régionale des plaintes (2025)
        </p>
        <CarteChaleur />
      </div>

      <div className="bg-white rounded-lg shadow p-2">
        <p className="text-xs font-semibold mb-1">
          Répartition des plaintes par catégorie (2025)
        </p>
        <ComplaintDonutChart />
      </div>

      <div className="bg-white rounded-lg shadow p-2">
        <p className="text-xs font-semibold mb-1">Répartition des plaintes selon le niveau de gravité (2025)</p>
        <ComplaintPriorityBarChart />
      </div>
    </div>

    <div className="bg-white rounded-lg shadow p-2">
      <p className="text-xs font-semibold mb-1">
      Plaintes critiques récentes (2025)
      </p>
      <CriticalComplaints />
    </div>
  </div>
)}


            {activeSection === "newplainte" && <NewPlaintesForm />}
            {activeSection === "prediction" && <Prediction />}
            {activeSection === "effectif" && <Effectifpred />}

            {activeSection === "plaintes" && (
              <>
                <div className="bg-gray-200 p-6 rounded-lg shadow mb-6 border-l-4 border-blue-500">
                  <h3 className="text-lg font-bold mb-4">Filtres</h3>
                  <div className="flex gap-4 flex-wrap">
                    {renderSelect("Statut", "statut", STATUTS)}
                    {renderSelect("Priorité", "priorite", PRIORITES)}
                    {renderSelect("Catégorie", "categorie", CATEGORIES)}
                    {renderSelect("Région", "region", REGIONS)}
                    {renderSelect("Urgence", "urgence", URGENCES)}
                    {renderSelect("Canal", "canal", CANAUX)}
                    {renderSelect("Type", "type", TYPES)}
                    <div className="w-[220px]">
                      <label className="block text-sm text-gray-600 mb-1">Recherche</label>
                      <input
                        type="text"
                        placeholder="Texte libre"
                        name="search"
                        value={filters.search}
                        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                        className="w-full border px-2 py-1 rounded text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-gray-200 p-6 rounded-lg shadow border-l-4 border-blue-500">
                  <h3 className="text-lg font-bold mb-4">Liste des plaintes (2025)</h3>
                  <div className="max-h-[520px] overflow-y-auto bg-white rounded">
              
                    <div className="w-full max-h-[300px] overflow-y-auto border rounded-lg">
  <table className="w-full text-sm">
    <thead className="sticky top-0 bg-white z-10 shadow-sm">
      <tr className="text-left text-gray-600 border-b">
        <th className="py-2 px-3">ID</th>
        <th className="px-3">Description</th>
        <th className="px-3">Statut</th>
        <th className="px-3">Priorité</th>
        <th className="px-3">Catégorie</th>
        <th className="px-3">Région</th>
        <th className="px-3">Urgence</th>
      </tr>
    </thead>
    <tbody>
      {filteredComplaints.map((complaint) => (
        <tr
          key={complaint.id}
          className="hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
          onClick={() => setSelectedComplaint(complaint)}
        >
          <td className="py-2 px-3">{complaint.id}</td>
          <td className="px-3">{complaint.description}</td>
          <td className="px-3">{complaint.statut}</td>
          <td className="px-3">{complaint.priorite}</td>
          <td className="px-3">{complaint.categorie}</td>
          <td className="px-3">{complaint.region}</td>
          <td className="px-3">{complaint.urgence}</td>
        </tr>
      ))}
      {filteredComplaints.length === 0 && (
        <tr>
          <td className="py-6 px-3 text-center text-gray-500" colSpan={7}>
            Aucun résultat pour ces filtres.
          </td>
        </tr>
      )}
    </tbody>
  </table>
</div>

                  </div>
                </div>

                {selectedComplaint && (
                  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-md w-[90vw] max-w-[520px]">
                      <h4 className="text-lg font-semibold mb-4">
                        Détails de la plainte #{selectedComplaint.id}
                      </h4>
                      <div className="space-y-1 text-sm">
                        <p><strong>Description:</strong> {selectedComplaint.description}</p>
                        <p><strong>Statut:</strong> {selectedComplaint.statut}</p>
                        <p><strong>Priorité:</strong> {selectedComplaint.priorite}</p>
                        <p><strong>Catégorie:</strong> {selectedComplaint.categorie}</p>
                        <p><strong>Région:</strong> {selectedComplaint.region}</p>
                        <p><strong>Urgence:</strong> {selectedComplaint.urgence}</p>
                        <p><strong>Canal:</strong> {selectedComplaint.canal}</p>
                        <p><strong>Type de plaignant:</strong> {selectedComplaint.type}</p>
                      </div>
                      <button
                        onClick={() => setSelectedComplaint(null)}
                        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
                      >
                        Fermer
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </section>
        </div>
      </main>
    </div>
    </div>
  );
}
