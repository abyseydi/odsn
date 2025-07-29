// import React from 'react';

// export default function GendarmerieHome() {
//   return (
//     <div className="flex h-screen bg-gray-100"> {/* Conteneur principal */}
//       {/* Barre Latérale */}
//       <aside className="w-64 bg-[#1A202C] text-white flex flex-col p-4 shadow-lg">
//         {/* Logo ou Titre de l'App */}
//         <div className="mb-8 mt-4 text-2xl font-bold text-center">
//           Mon Dashboard
//         </div>
//         {/* Navigation Latérale */}
//         <nav className="flex-1">
//           <ul>
//             <li className="mb-2">
//               <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition-colors">
//                 {/* Icône placeholder */}
//                 <span className="mr-3">📊</span> Dashboard
//               </a>
//             </li>
//             <li className="mb-2">
//               <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition-colors">
//                 {/* Icône placeholder */}
//                 <span className="mr-3">⚙️</span> Settings
//               </a>
//             </li>
//             <li className="mb-2">
//               <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition-colors">
//                 {/* Icône placeholder */}
//                 <span className="mr-3">💬</span> Support
//               </a>
//             </li>
//             {/* Ajoutez plus d'éléments de navigation ici */}
//           </ul>
//         </nav>
//         {/* Pied de page de la barre latérale (optionnel) */}
//         <div className="mt-auto text-sm text-gray-400 text-center">
//           Version 1.0
//         </div>
//       </aside>

//       {/* Contenu Principal */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* En-tête / Barre de Navigation Supérieure */}
//         <header className="flex items-center justify-between p-4 bg-white shadow-md z-10">
//           <h1 className="text-3xl font-bold text-gray-800">Aperçu Général</h1>
//           {/* Recherche ou Profil Utilisateur */}
//           <div className="flex items-center space-x-4">
//             <input
//               type="text"
//               placeholder="Rechercher..."
//               className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-semibold">
//               JD
//             </div>
//           </div>
//         </header>

//         {/* Zone de Contenu Défilante */}
//         <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
//           {/* Section des Petites Cartes d'Information */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
//             {/* Carte 1 */}
//             <div className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between min-h-[120px]">
//               <div className="h-4 w-12 rounded-full bg-fuchsia-600 mb-2"></div> {/* Accenteur couleur */}
//               <h3 className="text-lg font-semibold text-gray-800 mb-1">Titre Carte 1</h3>
//               <p className="text-gray-600">Donnée principale ici</p>
//               <span className="text-sm text-gray-500">Détail supplémentaire</span>
//             </div>
//             {/* Carte 2 */}
//             <div className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between min-h-[120px]">
//               <div className="h-4 w-12 rounded-full bg-red-500 mb-2"></div> {/* Accenteur couleur */}
//               <h3 className="text-lg font-semibold text-gray-800 mb-1">Titre Carte 2</h3>
//               <p className="text-gray-600">Donnée principale ici</p>
//               <span className="text-sm text-gray-500">Détail supplémentaire</span>
//             </div>
//             {/* Carte 3 */}
//             <div className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between min-h-[120px]">
//               <div className="h-4 w-12 rounded-full bg-teal-400 mb-2"></div> {/* Accenteur couleur */}
//               <h3 className="text-lg font-semibold text-gray-800 mb-1">Titre Carte 3</h3>
//               <p className="text-gray-600">Donnée principale ici</p>
//               <span className="text-sm text-gray-500">Détail supplémentaire</span>
//             </div>
//             {/* Carte 4 */}
//             <div className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between min-h-[120px]">
//               <div className="h-4 w-12 rounded-full bg-orange-400 mb-2"></div> {/* Accenteur couleur */}
//               <h3 className="text-lg font-semibold text-gray-800 mb-1">Titre Carte 4</h3>
//               <p className="text-gray-600">Donnée principale ici</p>
//               <span className="text-sm text-gray-500">Détail supplémentaire</span>
//             </div>
//           </div>

//           {/* Section des Grandes Cartes de Contenu */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             {/* Grande Carte 1 (Gauche) */}
//             <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6 min-h-[300px] flex items-center justify-center text-gray-500">
//               Contenu principal - Graphique / Tableau (Large)
//             </div>
//             {/* Grande Carte 2 (Droite) */}
//             <div className="bg-white rounded-xl shadow-md p-6 min-h-[300px] flex items-center justify-center text-gray-500">
//               Contenu latéral - Liste / Activité (Moyenne)
//             </div>
//           </div>

//           {/* Section de la Très Grande Carte en Bas */}
//           <div className="mt-6 bg-white rounded-xl shadow-md p-6 min-h-[250px] flex items-center justify-center text-gray-500">
//             Contenu bas de page - Tableau étendu / Détails
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }
import React from "react";

export default function GendarmerieHome() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* === SIDEBAR === */}
      <aside className="w-[170px] bg-white rounded-lg shadow-lg m-2"></aside>

      {/* === MAIN === */}
      <div className="flex-1 relative overflow-hidden">
        {/* === BACKGROUND BLEU FONCÉ AVEC ONDULATION === */}
        <div className="absolute top-0 left-0 w-full h-[55vh] bg-[#1e2454] z-0">
          <svg
            className="absolute bottom-0 left-0 w-full h-[120px]"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#f2f2f2"
              d="M0,128 C160,256 480,0 720,160 C960,320 1280,64 1440,192 L1440,320 L0,320 Z"
            />
          </svg>
        </div>

        {/* === CONTENU === */}
        <div className="relative z-10 p-6">
          {/* Champ de recherche */}
          <div className="flex justify-center mb-6">
            <input
              type="text"
              placeholder="Search..."
              className="px-6 py-2 rounded-full bg-white w-[40%] shadow"
            />
          </div>

          {/* === Cartes horizontales colorées === */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg shadow p-4 relative">
              <div className="absolute left-0 top-0 h-full w-1 bg-pink-500 rounded-l"></div>
            </div>
            <div className="bg-white rounded-lg shadow p-4 relative">
              <div className="absolute left-0 top-0 h-full w-1 bg-red-500 rounded-l"></div>
            </div>
            <div className="bg-white rounded-lg shadow p-4 relative">
              <div className="absolute left-0 top-0 h-full w-1 bg-teal-400 rounded-l"></div>
            </div>
            <div className="bg-white rounded-lg shadow p-4 relative">
              <div className="absolute left-0 top-0 h-full w-1 bg-indigo-900 rounded-l"></div>
            </div>
          </div>

          {/* === Grille des grandes cartes === */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-white rounded-lg shadow h-[180px]"></div>
            <div className="bg-white rounded-lg shadow h-[180px]"></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow h-[180px]"></div>
            <div className="bg-white rounded-lg shadow h-[180px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
