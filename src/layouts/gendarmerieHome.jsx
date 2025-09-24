
// import React, { useMemo, useState } from "react";
// import ComplaintDonutChart from "./complaintDonutChart";
// import ComplaintPriorityBarChart from "./complaintPriorityBarChart";
// import GendarmerieNavBar from "./gendarmerieNavBar";
// import { faker } from "@faker-js/faker";
// import CarteChaleur from "./CarteChaleur";
// import NewPlaintesForm from "./NewPlaintesForm";
// import Prediction from "./Prediction";
// import Effectifpred from "./Effectif";
// import CriticalComplaints from "./critical";
// import Navbar from "@/components/realnavbar";


// const STATUTS = ["Traitée", "En attente de traitement", "En cours de traitement", "Classée sans suite"];
// const PRIORITES = ["Critique", "Élevée", "Moyenne", "Faible"];
// const CATEGORIES = [
//   "Vol simple", "Vol avec violence", "Cambriolage", "Agression physique",
//   "Agression verbale", "Agression sexuelle", "Accident de la circulation",
//   "Accident domestique", "Escroquerie", "Fraude", "Conflit familial",
//   "Trouble à l'ordre public", "Corruption", "Autre"
// ];
// const REGIONS = [
//   "Dakar", "Diourbel", "Fatick", "Kaolack", "Kolda", "Kedougou", "Matam",
//   "Thies", "Saint Louis", "Ziguinchor", "Louga", "Sediou", "Tambacounda"
// ];
// const URGENCES = ["Immédiate", "Rapide", "Normale"];
// const CANAUX = ["Physique", "Téléphone", "Email"];
// const TYPES = ["Particulier", "Entreprise"];

// const generateComplaints = (count) =>
//   Array.from({ length: count }, (_, i) => ({
//     id: i + 1,
//     description: faker.lorem.sentence(),
//     statut: faker.helpers.arrayElement(STATUTS),
//     priorite: faker.helpers.arrayElement(PRIORITES),
//     categorie: faker.helpers.arrayElement(CATEGORIES),
//     region: faker.helpers.arrayElement(REGIONS),
//     urgence: faker.helpers.arrayElement(URGENCES),
//     canal: faker.helpers.arrayElement(CANAUX),
//     type: faker.helpers.arrayElement(TYPES),
//   }));

// const COLOR_MAP = {
//   "pink-500": "bg-pink-500",
//   "red-500": "bg-red-500",
//   "teal-400": "bg-teal-400",
//   "indigo-900": "bg-indigo-900",
// };

// export default function GendarmerieHome() {
//   const [activeSection, setActiveSection] = useState("dashboard");

//   const [selectedComplaint, setSelectedComplaint] = useState(null);
//   const [filters, setFilters] = useState({
//     statut: "",
//     priorite: "",
//     categorie: "",
//     region: "",
//     urgence: "",
//     canal: "",
//     type: "",
//     search: "",
//   });

//   const complaints = useMemo(() => generateComplaints(120), []);

//   const cardData = useMemo(() => ([
//     { color: "pink-500", title: "Total plaintes", value: complaints.length },
//     { color: "red-500", title: "En attente", value: complaints.filter(c => c.statut === "En attente de traitement").length },
//     { color: "teal-400", title: "Cas critiques", value: complaints.filter(c => c.priorite === "Critique").length },
//     { color: "indigo-900", title: "Traitées aujourd'hui", value: faker.number.int({ min: 10, max: 50 }) },
//   ]), [complaints]);

//   const filteredComplaints = useMemo(() => (
//     complaints.filter((c) =>
//       (!filters.statut || c.statut === filters.statut) &&
//       (!filters.priorite || c.priorite === filters.priorite) &&
//       (!filters.categorie || c.categorie === filters.categorie) &&
//       (!filters.region || c.region === filters.region) &&
//       (!filters.urgence || c.urgence === filters.urgence) &&
//       (!filters.canal || c.canal === filters.canal) &&
//       (!filters.type || c.type === filters.type) &&
//       (!filters.search || c.description.toLowerCase().includes(filters.search.toLowerCase()))
//     )
//   ), [complaints, filters]);

//   const renderSelect = (label, name, options) => (
//     <div className="w-[200px]">
//       <label className="block text-sm text-gray-600 mb-1">{label}</label>
//       <select
//         name={name}
//         value={filters[name]}
//         onChange={(e) => setFilters({ ...filters, [name]: e.target.value })}
//         className="w-full border px-2 py-1 rounded text-sm"
//       >
//         <option value="">Toutes</option>
//         {options.map((opt) => (
//           <option key={opt} value={opt}>{opt}</option>
//         ))}
//       </select>
//     </div>
//   );

//   return (
//     <div>
//       <Navbar />
//       <div className=" pt-[90px] relative h-screen overflow-hidden bg-gray-100">
//         <div className="absolute top-0 left-0 w-full h-[25vh] bg-[#1e2454] z-0">
//           <svg
//             className="absolute bottom-0 left-0 w-full h-[70px]"
//             viewBox="0 0 1440 320"
//             preserveAspectRatio="none"
//           >
//             <path
//               fill="#f2f2f2"
//               d="M0,224 C160,160 320,96 480,128 C640,160 800,256 960,240 C1120,224 1280,128 1440,160 L1440,320 L0,320 Z"
//             />
//           </svg>
//         </div>

//         <GendarmerieNavBar
//           onSectionChange={setActiveSection}
//           activeSection={activeSection}
//         />

//         <main className="relative z-10 h-full md:pl-[280px] overflow-hidden">
//           <div className="flex flex-col h-full">
//             <header className="px-3 pt-2 shrink-0">
//               <div className="flex flex-col items-center text-center">
//                 <div className="flex items-center justify-center gap-3 mb-2">
//                   <img
//                     src="/img/senegal1.png"
//                     alt="Logo gauche"
//                     className="w-[44px] h-[44px] md:w-[52px] md:h-[52px]"
//                   />
//                   <h2 className="text-lg md:text-2xl font-bold text-white">
//                     GENDARMERIE NATIONALE DU SENEGAL
//                   </h2>
//                   <img
//                     src="/img/gendarmerie.png"
//                     alt="Logo droit"
//                     className="w-[44px] h-[44px] md:w-[52px] md:h-[52px]"
//                   />
//                 </div>

//                 <p className="text-white max-w-2xl text-sm md:text-base leading-relaxed px-4 mb-4">
//                   Solution d’IA pour la classification automatique des plaintes et
//                   l’optimisation stratégique du déploiement des Forces De l’Ordre
//                 </p>
//               </div>

//               <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-2">
//                 {cardData.map((card, index) => (
//                   <div
//                     key={index}
//                     className="bg-white rounded-lg shadow p-2 h-[70px] flex flex-col justify-center items-center text-center relative"
//                   >
//                     <div className={`absolute top-0 left-0 h-full w-[5px] rounded-l ${COLOR_MAP[card.color]}`} />
//                     <p className="text-base md:text-lg font-bold text-gray-900">{card.value}</p>
//                     <p className="text-[11px] font-medium text-gray-600">{card.title}</p>
//                   </div>
//                 ))}
//               </div>

//             </header>


//             <section className="flex-1 min-h-0 px-3 pb-3 overflow-y-auto">
//               {activeSection === "dashboard" && (
//                 <div className="mx-auto w-full max-w-7xl space-y-3">
//                   <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
//                     <div className="bg-white rounded-lg shadow p-2">
//                       <p className="text-xs font-semibold mb-1">
//                         Répartition régionale des plaintes (2025)
//                       </p>
//                       <CarteChaleur />
//                     </div>

//                     <div className="bg-white rounded-lg shadow p-2">
//                       <p className="text-xs font-semibold mb-1">
//                         Répartition des plaintes par catégorie (2025)
//                       </p>
//                       <ComplaintDonutChart />
//                     </div>

//                     <div className="bg-white rounded-lg shadow p-2">
//                       <p className="text-xs font-semibold mb-1">Répartition des plaintes selon le niveau de gravité (2025)</p>
//                       <ComplaintPriorityBarChart />
//                     </div>
//                   </div>

//                   <div className="bg-white rounded-lg shadow p-2">
//                     <p className="text-xs font-semibold mb-1">
//                       Plaintes critiques récentes (2025)
//                     </p>
//                     <CriticalComplaints />
//                   </div>
//                 </div>
//               )}


//               {activeSection === "newplainte" && <NewPlaintesForm />}
//               {activeSection === "prediction" && <Prediction />}
//               {activeSection === "effectif" && <Effectifpred />}

//               {activeSection === "plaintes" && (
//                 <>
//                   <div className="bg-gray-200 p-6 rounded-lg shadow mb-6 border-l-4 border-blue-500">
//                     <h3 className="text-lg font-bold mb-4">Filtres</h3>
//                     <div className="flex gap-4 flex-wrap">
//                       {renderSelect("Statut", "statut", STATUTS)}
//                       {renderSelect("Priorité", "priorite", PRIORITES)}
//                       {renderSelect("Catégorie", "categorie", CATEGORIES)}
//                       {renderSelect("Région", "region", REGIONS)}
//                       {renderSelect("Urgence", "urgence", URGENCES)}
//                       {renderSelect("Canal", "canal", CANAUX)}
//                       {renderSelect("Type", "type", TYPES)}
//                       <div className="w-[220px]">
//                         <label className="block text-sm text-gray-600 mb-1">Recherche</label>
//                         <input
//                           type="text"
//                           placeholder="Texte libre"
//                           name="search"
//                           value={filters.search}
//                           onChange={(e) => setFilters({ ...filters, search: e.target.value })}
//                           className="w-full border px-2 py-1 rounded text-sm"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="bg-gray-200 p-6 rounded-lg shadow border-l-4 border-blue-500">
//                     <h3 className="text-lg font-bold mb-4">Liste des plaintes (2025)</h3>
//                     <div className="max-h-[520px] overflow-y-auto bg-white rounded">

//                       <div className="w-full max-h-[300px] overflow-y-auto border rounded-lg">
//                         <table className="w-full text-sm">
//                           <thead className="sticky top-0 bg-white z-10 shadow-sm">
//                             <tr className="text-left text-gray-600 border-b">
//                               <th className="py-2 px-3">ID</th>
//                               <th className="px-3">Description</th>
//                               <th className="px-3">Statut</th>
//                               <th className="px-3">Priorité</th>
//                               <th className="px-3">Catégorie</th>
//                               <th className="px-3">Région</th>
//                               <th className="px-3">Urgence</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             {filteredComplaints.map((complaint) => (
//                               <tr
//                                 key={complaint.id}
//                                 className="hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
//                                 onClick={() => setSelectedComplaint(complaint)}
//                               >
//                                 <td className="py-2 px-3">{complaint.id}</td>
//                                 <td className="px-3">{complaint.description}</td>
//                                 <td className="px-3">{complaint.statut}</td>
//                                 <td className="px-3">{complaint.priorite}</td>
//                                 <td className="px-3">{complaint.categorie}</td>
//                                 <td className="px-3">{complaint.region}</td>
//                                 <td className="px-3">{complaint.urgence}</td>
//                               </tr>
//                             ))}
//                             {filteredComplaints.length === 0 && (
//                               <tr>
//                                 <td className="py-6 px-3 text-center text-gray-500" colSpan={7}>
//                                   Aucun résultat pour ces filtres.
//                                 </td>
//                               </tr>
//                             )}
//                           </tbody>
//                         </table>
//                       </div>

//                     </div>
//                   </div>

//                   {selectedComplaint && (
//                     <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//                       <div className="bg-white p-6 rounded-lg shadow-md w-[90vw] max-w-[520px]">
//                         <h4 className="text-lg font-semibold mb-4">
//                           Détails de la plainte #{selectedComplaint.id}
//                         </h4>
//                         <div className="space-y-1 text-sm">
//                           <p><strong>Description:</strong> {selectedComplaint.description}</p>
//                           <p><strong>Statut:</strong> {selectedComplaint.statut}</p>
//                           <p><strong>Priorité:</strong> {selectedComplaint.priorite}</p>
//                           <p><strong>Catégorie:</strong> {selectedComplaint.categorie}</p>
//                           <p><strong>Région:</strong> {selectedComplaint.region}</p>
//                           <p><strong>Urgence:</strong> {selectedComplaint.urgence}</p>
//                           <p><strong>Canal:</strong> {selectedComplaint.canal}</p>
//                           <p><strong>Type de plaignant:</strong> {selectedComplaint.type}</p>
//                         </div>
//                         <button
//                           onClick={() => setSelectedComplaint(null)}
//                           className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
//                         >
//                           Fermer
//                         </button>
//                       </div>
//                     </div>
//                   )}
//                 </>
//               )}
//             </section>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }





// GendarmerieHome.jsx
import React, { useMemo, useState, useEffect, useRef } from "react";
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

// ----------------- Constantes & listes -----------------
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

const COLOR_MAP = {
  "pink-500": "bg-pink-500",
  "red-500": "bg-red-500",
  "teal-400": "bg-teal-400",
  "indigo-900": "bg-indigo-900",
};

// Stabilise les données mock (utile en dev)
faker.seed(2211);

// ----------------- Lieux & helpers description -----------------
const LIEUX_PAR_REGION = {
  "Dakar": ["Plateau", "Yoff", "Parcelles Assainies", "Guédiawaye", "Grand-Yoff", "HLM", "Colobane"],
  "Thies": ["Keur Issa", "Grand Standing", "Cité Lamy", "Mbour 3"],
  "Saint Louis": ["Sor", "Île Nord", "Île Sud", "Gokhou Mbathie", "Bango"],
  "Ziguinchor": ["Lyndiane", "Kénia", "Boutoute"],
  "Kaolack": ["Léona", "Ndorong", "Kasnack"],
  "Diourbel": ["Ndoumane", "Nguinth"],
  "Fatick": ["Fatick centre", "Thiadiaye"],
  "Kolda": ["Sare Moussa", "Sare Keita"],
  "Kedougou": ["Bandafassi", "Kedougou centre"],
  "Matam": ["Ourossogui", "Thilogne"],
  "Louga": ["Keur Serigne Louga", "Léona Louga"],
  "Sediou": ["Sédhiou centre", "Bounkiling"],
  "Tambacounda": ["Diallobougou", "Sassyl"],
};

const pickLieu = (region) =>
(LIEUX_PAR_REGION[region]?.length
  ? faker.helpers.arrayElement(LIEUX_PAR_REGION[region])
  : "Centre-ville");

const montantFCFA = (min = 20000, max = 2500000) =>
  `${faker.number.int({ min, max }).toLocaleString("fr-FR")} F CFA`;

const plaque = () => `${faker.string.alpha({ length: 2, casing: "upper" })}-${faker.number.int({ min: 1000, max: 9999 })}-${faker.string.alpha({ length: 2, casing: "upper" })}`;
const vehicule = () => faker.helpers.arrayElement(["taxi", "voiture particulière", "car rapide", "moto", "camion"]);
const objetsVoles = () => faker.helpers.arrayElements(
  ["téléphone", "ordinateur portable", "téléviseur", "bijoux", "sac à main", "espèces", "documents"],
  { min: 1, max: 3 }
).join(", ");

function buildResume({ categorie, region, urgence }) {
  const lieu = pickLieu(region);
  const h1 = faker.number.int({ min: 6, max: 22 });
  const h2 = Math.min(23, h1 + faker.number.int({ min: 1, max: 2 }));
  const blesses = faker.number.int({ min: 0, max: 2 });
  const temoin = faker.number.int({ min: 0, max: 3 });

  switch (categorie) {
    case "Vol simple":
      return `Vol de ${objetsVoles()} au ${lieu} (${region}); auteur en fuite. Valeur estimée ${montantFCFA(50000, 800000)}. Urgence: ${urgence}.`;
    case "Vol avec violence":
      return `Vol avec violences près de ${lieu} (${region}), victime légèrement blessée; ${temoin} témoin(s). Urgence: ${urgence}.`;
    case "Cambriolage":
      return `Cambriolage à ${lieu} (${region}) entre ${h1}h–${h2}h; effraction constatée, objets volés: ${objetsVoles()}. Caméra: ${faker.helpers.arrayElement(["oui", "non"])}.`;
    case "Agression physique":
      return `Agression physique devant ${lieu} (${region}); ${blesses} blessé(s) léger(s) pris en charge. Auteur présumé identifié.`;
    case "Agression verbale":
      return `Menaces et injures répétées signalées à ${lieu} (${region}); médiation demandée.`;
    case "Agression sexuelle":
      return `Signalement d'agression sexuelle à ${lieu} (${region}); prise en charge discrète de la victime et orientation médicale.`;
    case "Accident de la circulation":
      return `Collision ${vehicule()} / ${vehicule()} à ${lieu} (${region}) vers ${h1}h${faker.number.int({ min: 0, max: 59 }).toString().padStart(2, "0")}; ${blesses} blessé(s) léger(s). Plaque relevée: ${plaque()}.`;
    case "Accident domestique":
      return `Accident domestique (probable court-circuit) à ${lieu} (${region}); dégâts matériels, pas de blessés.`;
    case "Escroquerie":
      return `Escroquerie mobile money signalée à ${lieu} (${region}); montant ${montantFCFA(20000, 350000)}. Auteur inconnu.`;
    case "Fraude":
      return `Suspicion de fraude sur transactions à ${lieu} (${region}); pièces justificatives en cours de collecte.`;
    case "Conflit familial":
      return `Conflit familial à ${lieu} (${region}); tapage nocturne, mise à distance temporaire et rappel à l’ordre.`;
    case "Trouble à l'ordre public":
      return `Attroupement non autorisé à ${lieu} (${region}); dispersion progressive sans incident majeur.`;
    case "Corruption":
      return `Allégation de corruption (sollicitation de ${montantFCFA(50000, 300000)}) à ${lieu} (${region}); enquête préliminaire ouverte.`;
    default:
      return `Signalement à ${lieu} (${region}); vérifications en cours par la brigade territoriale.`;
  }
}

// ----------------- Génération des données -----------------
const generateComplaints = (count) =>
  Array.from({ length: count }, (_, i) => {
    const statut = faker.helpers.arrayElement(STATUTS);
    const priorite = faker.helpers.arrayElement(PRIORITES);
    const categorie = faker.helpers.arrayElement(CATEGORIES);
    const region = faker.helpers.arrayElement(REGIONS);
    const urgence = faker.helpers.arrayElement(URGENCES);
    const canal = faker.helpers.arrayElement(CANAUX);
    const type = faker.helpers.arrayElement(TYPES);

    const resume = buildResume({ categorie, region, urgence });

    return {
      id: i + 1,
      description: resume, // <-- contenu significatif
      statut,
      priorite,
      categorie,
      region,
      urgence,
      canal,
      type,
      reference: `GN-${faker.number.int({ min: 100000, max: 999999 })}`,
      date: faker.date.recent({ days: 20 }).toISOString(),
      lieu: pickLieu(region),
    };
  });

// ----------------- UI utils -----------------
const statusColor = (s) => ({
  "Traitée": "bg-green-100 text-green-700 border-green-300",
  "En attente de traitement": "bg-yellow-100 text-yellow-800 border-yellow-300",
  "En cours de traitement": "bg-blue-100 text-blue-800 border-blue-300",
  "Classée sans suite": "bg-gray-100 text-gray-700 border-gray-300",
}[s] || "bg-gray-100 text-gray-700 border-gray-300");

const priorityColor = (p) => ({
  "Critique": "bg-red-100 text-red-700 border-red-300",
  "Élevée": "bg-orange-100 text-orange-700 border-orange-300",
  "Moyenne": "bg-amber-100 text-amber-800 border-amber-300",
  "Faible": "bg-slate-100 text-slate-700 border-slate-300",
}[p] || "bg-slate-100 text-slate-700 border-slate-300");

// Debounce hook
function useDebouncedValue(value, delay = 300) {
  const [v, setV] = useState(value);
  const t = useRef(null);
  useEffect(() => {
    clearTimeout(t.current);
    t.current = setTimeout(() => setV(value), delay);
    return () => clearTimeout(t.current);
  }, [value, delay]);
  return v;
}

// En-tête triable
const Th = ({ children, k, sort, toggleSort }) => (
  <th className="px-3 py-2 text-left text-gray-600 border-b">
    <button onClick={() => toggleSort(k)} className="flex items-center gap-1 hover:underline">
      {children}
      {sort.key === k && <span className="text-xs">{sort.dir === "asc" ? "▲" : "▼"}</span>}
    </button>
  </th>
);

// ----------------- Composant principal -----------------
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
  const debouncedSearch = useDebouncedValue(filters.search, 300);

  const cardData = useMemo(() => ([
    { color: "pink-500", title: "Total plaintes", value: complaints.length },
    { color: "red-500", title: "En attente", value: complaints.filter(c => c.statut === "En attente de traitement").length },
    { color: "teal-400", title: "Cas critiques", value: complaints.filter(c => c.priorite === "Critique").length },
    { color: "indigo-900", title: "Traitées aujourd'hui", value: faker.number.int({ min: 10, max: 50 }) },
  ]), [complaints]);

  // Tri & pagination
  const [sort, setSort] = useState({ key: "id", dir: "asc" });
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 12;
  const toggleSort = (key) => {
    setSort((s) => s.key === key ? { key, dir: s.dir === "asc" ? "desc" : "asc" } : { key, dir: "asc" });
    setPage(1);
  };

  const filteredComplaints = useMemo(() => {
    const base = complaints.filter((c) =>
      (!filters.statut || c.statut === filters.statut) &&
      (!filters.priorite || c.priorite === filters.priorite) &&
      (!filters.categorie || c.categorie === filters.categorie) &&
      (!filters.region || c.region === filters.region) &&
      (!filters.urgence || c.urgence === filters.urgence) &&
      (!filters.canal || c.canal === filters.canal) &&
      (!filters.type || c.type === filters.type) &&
      (!debouncedSearch || c.description.toLowerCase().includes(debouncedSearch.toLowerCase()))
    );
    const sorted = [...base].sort((a, b) => {
      const k = sort.key;
      const av = (a[k] ?? "").toString().toLowerCase();
      const bv = (b[k] ?? "").toString().toLowerCase();
      if (av < bv) return sort.dir === "asc" ? -1 : 1;
      if (av > bv) return sort.dir === "asc" ? 1 : -1;
      return 0;
    });
    return sorted;
  }, [complaints, filters, debouncedSearch, sort]);

  const pagedComplaints = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredComplaints.slice(start, start + PAGE_SIZE);
  }, [filteredComplaints, page]);

  const totalPages = Math.max(1, Math.ceil(filteredComplaints.length / PAGE_SIZE));

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
                        Répartition régionale des plaintes (2025)
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

                    <div className="w-full max-h-[520px] overflow-y-auto bg-white rounded border">
                      <table className="w-full text-sm">
                        <thead className="sticky top-0 bg-white z-10 shadow-sm">
                          <tr>
                            {/* <Th k="id" sort={sort} toggleSort={toggleSort}>ID</Th> */}
                            <Th k="description" sort={sort} toggleSort={toggleSort}>Description</Th>
                            <Th k="statut" sort={sort} toggleSort={toggleSort}>Statut</Th>
                            <Th k="priorite" sort={sort} toggleSort={toggleSort}>Priorité</Th>
                            <Th k="categorie" sort={sort} toggleSort={toggleSort}>Catégorie</Th>
                            <Th k="region" sort={sort} toggleSort={toggleSort}>Région</Th>
                            <Th k="urgence" sort={sort} toggleSort={toggleSort}>Urgence</Th>
                          </tr>
                        </thead>
                        <tbody>
                          {pagedComplaints.map((c) => (
                            <tr
                              key={c.id}
                              className="hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                              onClick={() => setSelectedComplaint(c)}
                            >
                              {/* <td className="py-2 px-3">{c.id}</td> */}
                              <td className="px-3">{c.description}</td>
                              <td className="px-3">
                                <span className={`inline-flex items-center px-2 py-0.5 rounded border text-xs ${statusColor(c.statut)}`}>
                                  {c.statut}
                                </span>
                              </td>
                              <td className="px-3">
                                <span className={`inline-flex items-center px-2 py-0.5 rounded border text-xs ${priorityColor(c.priorite)}`}>
                                  {c.priorite}
                                </span>
                              </td>
                              <td className="px-3">{c.categorie}</td>
                              <td className="px-3">{c.region}</td>
                              <td className="px-3">{c.urgence}</td>
                            </tr>
                          ))}
                          {pagedComplaints.length === 0 && (
                            <tr>
                              <td className="py-6 px-3 text-center text-gray-500" colSpan={7}>
                                Aucun résultat pour ces filtres.
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>

                    <div className="flex items-center justify-between gap-2 mt-3">
                      <p className="text-xs text-gray-600">
                        {filteredComplaints.length} résultat(s) • Page {page}/{totalPages}
                      </p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setPage((p) => Math.max(1, p - 1))}
                          disabled={page === 1}
                          className="px-3 py-1 text-sm rounded border bg-white disabled:opacity-50"
                        >
                          Précédent
                        </button>
                        <button
                          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                          disabled={page === totalPages}
                          className="px-3 py-1 text-sm rounded border bg-white disabled:opacity-50"
                        >
                          Suivant
                        </button>
                      </div>
                    </div>
                  </div>

                  {selectedComplaint && (
                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                      <div className="bg-white p-6 rounded-lg shadow-md w-[90vw] max-w-[540px]">
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
                          <p><strong>Référence:</strong> {selectedComplaint.reference}</p>
                          <p><strong>Lieu:</strong> {selectedComplaint.lieu}</p>
                          <p><strong>Déclarée le:</strong> {new Date(selectedComplaint.date).toLocaleString("fr-FR")}</p>
                        </div>
                        <div className="mt-4 flex justify-end">
                          <button
                            onClick={() => setSelectedComplaint(null)}
                            className="px-4 py-2 bg-blue-600 text-white rounded"
                          >
                            Fermer
                          </button>
                        </div>
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
