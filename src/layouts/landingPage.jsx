
// // import React from "react";
// // import { FiSearch, FiMenu } from "react-icons/fi";

// // export default function LandingPage() {
// //   return (
// //     <div className="text-white font-sans">
// //       {/* NAV + HERO avec image de fond */}
// //       <div
// //         className="bg-cover bg-center min-h-[700px] flex flex-col justify-between"
// //         style={{ backgroundImage: "url('img/bg_1.png')" }}
// //       >
// //         {/* Navbar */}
// //         <nav className="flex justify-between items-center px-6 py-4">
// //           <img
// //             src="img/logo_accel.png"
// //             alt="Logo Accel"
// //             className="h-14 w-auto"
// //           />
// //           <div className="flex gap-4 items-center">
// //             <FiSearch className="text-white text-xl cursor-pointer" />
// //             <FiMenu className="text-white text-xl cursor-pointer" />
// //             <button className="bg-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
// //               CONTACTS
// //             </button>
// //           </div>
// //         </nav>

// //         {/* Hero Section */}
// //         <section className="min-h-[600px] flex items-center">
// //           <div className="w-full flex flex-col md:flex-row px-6 gap-8 items-center md:items-stretch">
// //             {/* Texte à gauche */}
// //             <div className="md:w-1/2 flex flex-col justify-center h-full">
// //               <div className="max-w-xl">
// //                 <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
// //                   Transformez Votre Organisation avec Nous
// //                 </h2>
// //                 <p className="text-gray-200 text-base md:text-lg mb-6">
// //                   Transformez les défis en opportunités grâce à nos solutions
// //                   avancées en Data & IA, conçues pour optimiser la prise de
// //                   décision et propulser la croissance.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </section>
// //       </div>

// //       {/* Cards Section - superposée au Hero */}
// //       <section className="-mt-24 relative z-20 px-4 sm:px-6 lg:px-10 pb-12">
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
// //           {[
// //             {
// //               title: "Stratégie Data",
// //               text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
// //             },
// //             {
// //               title: "Expertise Avancée",
// //               text: "Bénéficiez de notre connaissance approfondie des dernières technologies en IA et Big Data.",
// //             },
// //             {
// //               title: "Solutions Sur Mesure",
// //               text: "Des approches personnalisées pour s’adapter parfaitement à vos besoins spécifiques et uniques.",
// //             },
// //             {
// //               title: "Résultats Concrets",
// //               text: "Des projets axés sur le retour sur investissement, prouvant la valeur ajoutée de l’IA.",
// //             },
// //           ].map((card, index) => (
// //             <div
// //               key={index}
// //               className="bg-[#1e1446] text-white px-6 py-6 min-h-[200px] rounded-2xl shadow-xl border border-fuchsia-600 flex flex-col items-center text-center"
// //             >
// //               <h3 className="text-xl font-bold mb-2">{card.title}</h3>
// //               <div className="w-16 h-[3px] bg-fuchsia-500 mb-3 rounded-full"></div>
// //               <p className="text-sm text-gray-300">{card.text}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* Secteur privé */}
// //       <section className="bg-white text-center px-4 py-10">
// //         <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-6">
// //           Accélérez Votre Croissance dans le Secteur Privé
// //         </h2>
// //         <div className="w-full">
// //           <img
// //             src="img/secteur_prive.png"
// //             alt="Secteur privé"
// //             className="w-full h-auto max-w-[1280px] mx-auto"
// //           />
// //         </div>
// //       </section>
// //   <section className="bg-white px-4 py-10">
// //       <h2 className="text-2xl md:text-3xl font-bold text-purple-700 text-center mb-10">
// //         Accélérez Votre Croissance dans le Secteur Privé
// //       </h2>

// //       <div className="flex flex-col md:flex-row justify-center items-center gap-10">
// //         {/* Bloc de gauche simulant une carte */}
// //         <div className="rounded-[70%] bg-gradient-to-br from-purple-600 to-blue-500 p-2">
// //           <div className="h-[350px] w-[230px] bg-black rounded-[32%] flex items-center justify-center text-white text-center text-sm p-4">
// //             Carte Afrique<br />(placeholder)
// //           </div>
// //         </div>

// //         {/* Blocs de droite */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
// //           <div className="rounded-full px-6 py-4 text-white font-semibold text-center bg-[#1c1c3c] border-4 border-transparent bg-clip-padding"
// //                style={{ borderImage: 'linear-gradient(to bottom right, #3b82f6, #ec4899) 1' }}>
// //             Banque et Finance
// //           </div>
// //           <div className="rounded-full px-6 py-4 text-white font-semibold text-center bg-[#1c1c3c] border-4 border-transparent bg-clip-padding"
// //                style={{ borderImage: 'linear-gradient(to bottom right, #3b82f6, #ec4899) 1' }}>
// //             Immobilier
// //           </div>
// //           <div className="rounded-full px-6 py-4 text-white font-semibold text-center bg-[#1c1c3c] border-4 border-transparent bg-clip-padding"
// //                style={{ borderImage: 'linear-gradient(to bottom right, #3b82f6, #ec4899) 1' }}>
// //             Agro, Industrie & Commerce
// //           </div>
// //           <div className="rounded-full px-6 py-4 text-white font-semibold text-center bg-[#1c1c3c] border-4 border-transparent bg-clip-padding"
// //                style={{ borderImage: 'linear-gradient(to bottom right, #3b82f6, #ec4899) 1' }}>
// //             BTP et Génie Civil
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //       {/* Secteur public */}
// //       <section className="bg-white text-center px-4 py-10">
// //         <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-6">
// //           Accompagner les Secteurs Publics pour l'Innovation
// //         </h2>
// //         <div className="w-full">
// //           <img
// //             src="img/secteur_public.png"
// //             alt="Secteur public"
// //             className="w-full h-auto max-w-[1280px] mx-auto"
// //           />
// //         </div>
// //       </section>


   
  

// //     <section className="bg-white px-4 py-10 text-center">
// //       {/* Titre */}
// //       <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-10">
// //         Accompagner les Secteurs Publics pour l’Innovation
// //       </h2>

// //       {/* Ligne réseau + énergie + transports */}
// //       <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-10">
// //         {/* Réseau */}
// //         <div className="w-full md:w-2/3 flex justify-center">
// //           <img
// //             src="/img/network.png"
// //             alt="Réseau"
// //             className="w-full max-w-xl object-contain"
// //           />
// //         </div>

// //         {/* Énergie + Transports côte à côte */}
// //         <div className="flex flex-col sm:flex-row gap-6">
// //           <div className="rounded-full h-24 w-24 sm:h-28 sm:w-28 bg-[#1c1c3c] border-4 flex items-center justify-center text-white font-semibold text-sm sm:text-base"
// //             style={{ borderImage: 'linear-gradient(to bottom right, #3b82f6, #ec4899) 1' }}>
// //             Énergie
// //           </div>
// //           <div className="rounded-full h-24 w-24 sm:h-28 sm:w-28 bg-[#1c1c3c] border-4 flex items-center justify-center text-white font-semibold text-sm sm:text-base"
// //             style={{ borderImage: 'linear-gradient(to bottom right, #3b82f6, #ec4899) 1' }}>
// //             Transports
// //           </div>
// //         </div>
// //       </div>

// //       {/* Bas : bouton + cercles + pictos */}
// //       <div className="flex flex-wrap justify-center items-center gap-8 mt-4">
// //         {/* Bouton Play */}
// //         <div className="flex flex-col gap-2">
// //           <img src="/img/play.png" alt="AI" className="h-30 opacity-70" />
        
// //         </div>

// //         {/* Cercles Sécurité / Assurances */}
// //         <div className="flex gap-6">
// //           <div className="rounded-full h-24 w-24 sm:h-28 sm:w-28 bg-[#1c1c3c] border-4 flex items-center justify-center text-white font-semibold text-sm sm:text-base"
// //             style={{ borderImage: 'linear-gradient(to bottom right, #3b82f6, #ec4899) 1' }}>
// //             Sécurité
// //           </div>
// //           <div className="rounded-full h-24 w-24 sm:h-28 sm:w-28 bg-[#1c1c3c] border-4 flex items-center justify-center text-white font-semibold text-sm sm:text-base"
// //             style={{ borderImage: 'linear-gradient(to bottom right, #3b82f6, #ec4899) 1' }}>
// //             Assurances
// //           </div>
// //         </div>

// //         {/* Icônes tech */}
// //         <div className="flex flex-col gap-2">
// //           <img src="/img/ai.png" alt="AI" className="h-50 opacity-70" />
        
// //         </div>
// //       </div>
// //     </section>



// // <section className="bg-white py-12 text-center">
// //      <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-6">
// //     Les technologies les plus innovantes au service de notre expertise.
// //   </h2>

// //   <div className="flex justify-center gap-8 flex-wrap">
// //     {[
// //       "img/logo1.png",
// //       "img/logo2.png",
// //       "img/logo3.png",
// //       "img/logo4.png",
// //       "img/logo5.png",
// //     ].map((src, index) => (
// //       <div
// //         key={index}
// //         className="w-[100px] h-[100px] md:w-[110px] md:h-[110px] bg-gray-200 rounded-full overflow-hidden flex items-center justify-center shadow-md hover:scale-105 transition"
// //       >
// //         <img src={src} alt={`Tech ${index + 1}`} className="w-[60%] h-[60%] object-contain" />
// //       </div>
// //     ))}
// //   </div>
// // </section>
// // {/* Footer Section */}
// // {/* Footer Section */}
// // <footer className="bg-[#1e1446] text-white px-6 py-10 font-sans">
// //   <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">

// //     {/* Bloc "Powered By" */}
// //     <div className="flex flex-col items-start">
// //       <p className="text-lg font-bold mb-2">Powered By</p>
// //       <img src="img/logo_accel.png" alt="Accel Logo" className="h-10" />
// //     </div>

// //     {/* Liens utiles */}
// //     <div>
// //       <h3 className="font-bold mb-4">Liens utiles</h3>
// //       <ul className="space-y-3">
// //         <li className="flex items-center gap-2">
// //           <span>🔗</span> Red Hat Enterprise Linux
// //         </li>
// //         <li className="flex items-center gap-2">
// //           <span>🔗</span> Openshift AI
// //         </li>
// //         <li className="flex items-center gap-2">
// //           <span>🔗</span> Heritage Cloud
// //         </li>
// //       </ul>
// //     </div>

// //     {/* Contacts */}
// //     <div>
// //       <h3 className="font-bold mb-4">Contacts</h3>
// //       <ul className="space-y-3">
// //         <li className="flex items-center gap-2">
// //           📞 <span>33 000 00 00</span>
// //         </li>
// //         <li className="flex items-center gap-2">
// //           ✉️ <span>xxx@example.com</span>
// //         </li>
// //         <li className="flex items-center gap-2">
// //           🌐 <span>www.example.com</span>
// //         </li>
// //       </ul>
// //     </div>

// //     {/* Réseaux sociaux */}
// //     <div className="flex items-end justify-start md:justify-center space-x-6 text-fuchsia-500 text-2xl mt-4 md:mt-0">
// //       <i className="fab fa-facebook-f"></i>
// //       <i className="fab fa-linkedin-in"></i>
// //       <i className="fab fa-youtube"></i>
// //     </div>
// //   </div>
// // </footer>


// //     </div>
    
    
// //   );
// // }




// import React from "react";
// import { FiSearch, FiMenu } from "react-icons/fi";

// export default function LandingPage() {
//   return (
//     <div className="text-white font-sans">
//       {/* NAV + HERO avec image de fond */}
//       <div
//         className="bg-cover bg-center min-h-[700px] flex flex-col justify-between"
//         style={{ backgroundImage: "url('img/bg_1.png')" }}
//       >
//         {/* Navbar */}
//         <nav className="flex justify-between items-center px-6 py-4">
//           <img src="img/logo_accel.png" alt="Logo Accel" className="h-14 w-auto" />
//           <div className="flex gap-4 items-center">
//             <FiSearch className="text-white text-xl cursor-pointer" />
//             <FiMenu className="text-white text-xl cursor-pointer" />
//             <button className="bg-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
//               CONTACTS
//             </button>
//           </div>
//         </nav>

//         {/* Hero Section */}
//         <section className="min-h-[600px] flex items-center">
//           <div className="w-full flex flex-col md:flex-row px-6 gap-8 items-center md:items-stretch">
//             <div className="md:w-1/2 flex flex-col justify-center h-full">
//               <div className="max-w-xl">
//                 <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
//                   Transformez Votre Organisation avec Nous
//                 </h2>
//                 <p className="text-gray-200 text-base md:text-lg mb-6">
//                   Transformez les défis en opportunités grâce à nos solutions
//                   avancées en Data & IA, conçues pour optimiser la prise de
//                   décision et propulser la croissance.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>

//       {/* Cards Section */}
//       <section className="-mt-24 relative z-20 px-4 sm:px-6 lg:px-10 pb-12">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
//           {[
//             {
//               title: "Stratégie Data",
//               text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
//             },
//             {
//               title: "Expertise Avancée",
//               text: "Bénéficiez de notre connaissance approfondie des dernières technologies en IA et Big Data.",
//             },
//             {
//               title: "Solutions Sur Mesure",
//               text: "Des approches personnalisées pour s’adapter parfaitement à vos besoins spécifiques et uniques.",
//             },
//             {
//               title: "Résultats Concrets",
//               text: "Des projets axés sur le retour sur investissement, prouvant la valeur ajoutée de l’IA.",
//             },
//           ].map((card, index) => (
//             <div
//               key={index}
//               className="bg-[#1e1446] text-white px-6 py-6 min-h-[200px] rounded-2xl shadow-xl border border-fuchsia-600 flex flex-col items-center text-center"
//             >
//               <h3 className="text-xl font-bold mb-2">{card.title}</h3>
//               <div className="w-16 h-[3px] bg-fuchsia-500 mb-3 rounded-full"></div>
//               <p className="text-sm text-gray-300">{card.text}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Secteur privé */}
//       <section className="bg-white px-4 py-10">
//         <h2 className="text-2xl md:text-3xl font-bold text-purple-700 text-center mb-10">
//           Accélérez Votre Croissance dans le Secteur Privé
//         </h2>

//         <div className="flex flex-col md:flex-row justify-center items-center gap-10">
//           {/* Carte Afrique */}
//           <div className="rounded-[70%] bg-gradient-to-br from-purple-600 to-blue-500 p-2">
//             <div className="h-[350px] w-[230px] bg-black rounded-[32%] flex items-center justify-center text-white text-center text-sm p-4">
//               Carte Afrique<br />(placeholder)
//             </div>
//           </div>

//           {/* Boutons Secteurs */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {["Banque et Finance", "Immobilier", "Agro, Industrie & Commerce", "BTP et Génie Civil"].map((label, i) => (
//               <div
//                 key={i}
//                 className="rounded-full px-6 py-4 text-white font-semibold text-center bg-[#1c1c3c] border-4 border-transparent bg-clip-padding"
//                 style={{ borderImage: 'linear-gradient(to bottom right, #3b82f6, #ec4899) 1' }}
//               >
//                 {label}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Secteur public */}
//       <section className="bg-white px-4 py-10 text-center">
//         <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-10">
//           Accompagner les Secteurs Publics pour l’Innovation
//         </h2>

//         {/* Réseau + énergie / transports */}
//         <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-10">
//           <div className="w-full md:w-2/3 flex justify-center">
//             <img src="img/network.png" alt="Réseau" className="w-full max-w-xl object-contain" />
//           </div>

//           <div className="flex flex-col sm:flex-row gap-6">
//             {["Énergie", "Transports"].map((label, i) => (
//               <div
//                 key={i}
//                 className="rounded-full h-32 w-32 sm:h-40 sm:w-40 bg-[#1c1c3c] border-4 flex items-center justify-center text-white font-semibold text-base sm:text-lg"
//                 style={{ borderImage: 'linear-gradient(to bottom right, #3b82f6, #ec4899) 1' }}
//               >
//                 {label}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Bas : play + sécurité/assurances + tech */}
//         <div className="flex flex-wrap justify-center items-center gap-8 mt-4">
//           <div className="flex flex-col gap-2">
//             <img src="img/play.png" alt="Play" className="h-12 opacity-70" />
//           </div>

//           <div className="flex gap-6">
//             {["Sécurité", "Assurances"].map((label, i) => (
//               <div
//                 key={i}
//                 className="rounded-full h-32 w-32 sm:h-40 sm:w-40 bg-[#1c1c3c] border-4 flex items-center justify-center text-white font-semibold text-base sm:text-lg "
//                 style={{ borderImage: 'linear-gradient(to bottom right, #3b82f6, #ec4899) 1' }}
//               >
//                 {label}
//               </div>
//             ))}
//           </div>

//           <div className="flex flex-col gap-2">
//             <img src="img/ai.png" alt="AI" className="h-12 opacity-70" />
//           </div>
//         </div>
//       </section>

//       {/* Logos partenaires */}
//       <section className="bg-white py-12 text-center">
//         <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-6">
//           Les technologies les plus innovantes au service de notre expertise.
//         </h2>

//         <div className="flex justify-center gap-8 flex-wrap">
//           {["logo1", "logo2", "logo3", "logo4", "logo5"].map((logo, i) => (
//             <div
//               key={i}
//               className="w-[100px] h-[100px] md:w-[110px] md:h-[110px] bg-gray-200 rounded-full overflow-hidden flex items-center justify-center shadow-md hover:scale-105 transition"
//             >
//               <img src={`img/${logo}.png`} alt={logo} className="w-[60%] h-[60%] object-contain" />
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-[#1e1446] text-white px-6 py-10 font-sans">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
//           <div className="flex flex-col items-start">
//             <p className="text-lg font-bold mb-2">Powered By</p>
//             <img src="img/logo_accel.png" alt="Accel Logo" className="h-10" />
//           </div>

//           <div>
//             <h3 className="font-bold mb-4">Liens utiles</h3>
//             <ul className="space-y-3">
//               <li className="flex items-center gap-2">🔗 Red Hat Enterprise Linux</li>
//               <li className="flex items-center gap-2">🔗 Openshift AI</li>
//               <li className="flex items-center gap-2">🔗 Heritage Cloud</li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-bold mb-4">Contacts</h3>
//             <ul className="space-y-3">
//               <li className="flex items-center gap-2">📞 33 000 00 00</li>
//               <li className="flex items-center gap-2">✉️ xxx@example.com</li>
//               <li className="flex items-center gap-2">🌐 www.example.com</li>
//             </ul>
//           </div>

//           <div className="flex items-end justify-start md:justify-center space-x-6 text-fuchsia-500 text-2xl mt-4 md:mt-0">
//             <i className="fab fa-facebook-f"></i>
//             <i className="fab fa-linkedin-in"></i>
//             <i className="fab fa-youtube"></i>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }


import React from "react";
import { FiSearch, FiMenu } from "react-icons/fi";

export default function LandingPage() {
  return (
    <div className="text-white font-sans">
      {/* NAV + HERO */}
      <div
        className="bg-cover bg-center min-h-[700px] flex flex-col justify-between"
        style={{ backgroundImage: "url('img/bg_1.png')" }}
      >
        <nav className="flex justify-between items-center px-6 py-4">
          <img src="img/logo_accel.png" alt="Logo Accel" className="h-14 w-auto" />
          <div className="flex gap-4 items-center">
            <FiSearch className="text-white text-xl cursor-pointer" />
            {/* <FiMenu className="text-white text-xl cursor-pointer" /> */}
            <button className="bg-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              CONTACTS
            </button>
          </div>
        </nav>

        <section className="min-h-[600px] flex items-center">
          <div className="w-full flex flex-col md:flex-row px-6 gap-8 items-center md:items-stretch">
            <div className="md:w-1/2 flex flex-col justify-center h-full">
              <div className="max-w-xl">
                      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-purple-400 leading-tight">
DEM'Oya!           </h1>
                <h4 className="text-3xl md:text-2xl font-bold mb-6 leading-tight">
                Libérez le potentiel de vos données avec l'IA souveraine.
                </h4>
                <p className="text-gray-200 text-base md:text-lg mb-6">
                  Transformez les défis en opportunités grâce à nos solutions avancées en Data & IA,
                  conçues pour optimiser la prise de décision et propulser la croissance.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CARDS */}
      <section className="-mt-24 relative z-20 px-4 sm:px-6 lg:px-10 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {[
            {
              title: "Stratégie Data",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
            },
            {
              title: "Expertise Avancée",
              text: "Bénéficiez de notre connaissance approfondie des dernières technologies en IA et Big Data.",
            },
            {
              title: "Solutions Sur Mesure",
              text: "Des approches personnalisées pour s’adapter parfaitement à vos besoins spécifiques et uniques.",
            },
            {
              title: "Résultats Concrets",
              text: "Des projets axés sur le retour sur investissement, prouvant la valeur ajoutée de l’IA.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-[#1e1446] text-white px-6 py-6 min-h-[200px] rounded-2xl shadow-xl border border-fuchsia-600 flex flex-col items-center text-center"
            >
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <div className="w-16 h-[3px] bg-fuchsia-500 mb-3 rounded-full"></div>
              <p className="text-sm text-gray-300">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTEUR PRIVE */}
      {/* <section className="bg-white px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-700 text-center mb-10">
          Accélérez Votre Croissance dans le Secteur Privé
        </h2>

 
             <div className="flex flex-col md:flex-row justify-center items-center gap-2 mb-10">
             <img src="img/secteur_prive.png" alt="Réseau" className="w-full max-w-xl object-contain" />
           </div>
      </section> */}
<section className="bg-white px-4 py-20">
    <h1 className="text-3xl md:text-4xl font-bold text-purple-700 text-center mb-12">
    Accélérez Votre Croissance dans le Secteur Privé
  </h1>
  <h2 className="text-3xl md:text-2xl font-bold text-purple-300 text-center mb-12">
    Nos solutions Data & IA sont spécifiquement adaptées aux besoins dynamiques du secteur privé, offrant des avantages concurrentiels et une efficacité opérationnelle. </h2>

  <div className="flex flex-col md:flex-row justify-center items-center gap-3">
    <img
      src="img/secteur_prive.png"
      alt="Secteur privé"
      className="w-full max-w-[1280px] object-contain"
    />
  </div>
</section>

      {/* SECTEUR PUBLIC */}
      <section className="bg-white px-4 py-10 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-500 mb-10">
          Accompagner les Secteurs Publics pour l’Innovation
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-2 mb-10">
          <div className="w-full md:w-2/3 flex justify-center">
            <img src="img/network.png" alt="Réseau" className="w-full max-w-xl object-contain" />
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            {["Énergie", "Transports"].map((label, i) => (
              <div key={i} className="h-60 w-60 rounded-full p-[13px] bg-gradient-to-br from-blue-500 to-pink-500">
                <div className="flex items-center justify-center h-full w-full bg-[#1c1c3c] rounded-full text-white font-semibold text-sm text-center px-2">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 mt-4">
          <div className="flex flex-col gap-2">
            <img src="img/play.png" alt="Play" className="h-12 opacity-70" />
          </div>

          <div className="flex gap-16">
            {["Sécurité", "Assurances"].map((label, i) => (
              <div key={i} className="h-60 w-60 rounded-full p-[13px] bg-gradient-to-br from-blue-500 to-pink-500">
                <div className="flex items-center justify-center h-full w-full bg-[#1c1c3c] rounded-full text-white font-semibold text-sm text-center px-2">
                  {label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <img src="img/ai.png" alt="AI" className="h-50 opacity-70" />
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="bg-white py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-6">
          Les technologies les plus innovantes au service de notre expertise.
        </h2>

        <div className="flex justify-center gap-8 flex-wrap">
          {["redhat", "redhat", "pytorch", "tensorflow", "scikit-learn"].map((logo, i) => (
            <div
              key={i}
              className="w-[100px] h-[100px] md:w-[110px] md:h-[110px] bg-gray-200 rounded-full overflow-hidden flex items-center justify-center shadow-md hover:scale-105 transition"
            >
              <img src={`img/${logo}.png`} alt={logo} className="w-[60%] h-[60%] object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1e1446] text-white px-6 py-10 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
          <div className="flex flex-col items-start">
            <p className="text-lg font-bold mb-2">Powered By</p>
            <img src="img/logo_accel.png" alt="Accel Logo" className="h-20" />
          </div>

          <div>
            <h3 className="font-bold mb-4">Liens utiles</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">🔗 Red Hat Enterprise Linux</li>
              <li className="flex items-center gap-2">🔗 Openshift AI</li>
              <li className="flex items-center gap-2">🔗 Heritage Cloud</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contacts</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">📞 33 000 00 00</li>
              <li className="flex items-center gap-2">✉️ xxx@example.com</li>
              <li className="flex items-center gap-2">🌐 www.example.com</li>
            </ul>
          </div>

          <div className="flex items-end justify-start md:justify-center space-x-6 text-fuchsia-500 text-2xl mt-4 md:mt-0">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </footer>
    </div>
  );
}
