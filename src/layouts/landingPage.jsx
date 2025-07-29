

// import React, { useState } from "react";
// import { FiSearch, FiMenu } from "react-icons/fi";
// import { Link } from "react-scroll";

// export default function LandingPage() {
//   const [activeTab, setActiveTab] = useState("privé");

//   const tabs = {
//     privé: [
//       { title: "Banque et Finance", img: "/img/banque.png", link: "" },
//       { title: "Agro, Industrie & Commerce", img: "/img/agro.png", link: "" },
//       { title: "Immobilier",img: "/img/immo.png", link: "" },
//       { title: "BTP et Génie Civil", img: "/img/btp.png",link: "" },
//     ],
//     public: [
//       { title: "Politique publique",img: "/img/politique_publique.png", link: "/ANSDHome" },
//       { title: "Sûreté et ordre", img: "/img/education.png",link: "/GendarmerieLogin" },
//       { title: "Éducation & Formation", img: "/img/education.png",link: "" },
//       { title: "Santé & Protection sociale", img: "/img/sante.png",link: "" },
//       { title: "Financement", img: "/img/financement.png",link: "" },
//       { title: "Energie – Mines",img: "/img/energie.png", link: "" },
//     ],
//   };

//   return (
//     <div className="text-white font-sans scroll-smooth">

// <div className="relative min-h-[700px] flex flex-col justify-between overflow-hidden">


//   {/* Contenu par-dessus la vidéo */}
//   <div className="relative z-10 w-full h-full flex flex-col justify-between">
//     {/* ... ton contenu (textes, boutons, etc.) ici ... */}
//     <nav className="flex items-center justify-between px-6 py-4">
//   {/* Logo à gauche */}
//   <div className="flex-shrink-0">
//     <img src="img/logo_accel.png" alt="Logo Accel" className="h-20 w-auto" />
//   </div>

//   {/* Liens centrés */}
//   <div className="flex-1 flex justify-center gap-10 items-center text-[#1C2452] font-semibold">
//     <Link to="section-services" smooth duration={700} offset={-70} className="cursor-pointer hover:text-[#26509e]">
//       Nos expertises
//     </Link>
//     <Link to="cas-usage" smooth duration={700} offset={-70} className="cursor-pointer hover:text-[#26509e]">
//  Use Cases IA
//     </Link>
//     <Link to="section-produits" smooth duration={700} offset={-70} className="cursor-pointer hover:text-[#26509e]">
//       Publications
//     </Link>
//     <Link to="" smooth duration={700} offset={-70} className="cursor-pointer hover:text-[#26509e]">
//       Actualités IA
//     </Link>

// <a
//   href="https://www.accel-tech.net/"
//   target="_blank"
//   rel="noopener noreferrer"
//   className="cursor-pointer hover:text-[#26509e]"
// >
//   Découvrez ACCEL Tech
// </a>

//   </div>

//   {/* Bouton à droite */}
//   <div className="flex-shrink-0">
//     <button className="bg-[#1e1446] text-white px-4 py-1 rounded-full text-sm font-semibold">
//       CONTACT
//     </button>
//   </div>
// </nav>
//   </div>

//   <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-0" />



//       </div>

  
// <section
//   id="section-services"
//   className="relative z-20 px-4 sm:px-6 lg:px-10 pb-12 mt-8 sm:mt-12 md:mt-16 lg:mt-14"
// >

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
//           {[
//             {
//               title: "Stratégie, Gouvernance et Ingénierie",
//               picto: "/img/strategy.png",
//               text: "Expertise en Data Stratégie, Gouvernance & Architecture issue de nombreuses missions d’accompagnement de CDO et structuration de Data Office.",
//             },
//             {
//               title: "Valorisation Data & IA",
//               picto: "/img/valorisation.png",
//               text: "Les cas d’usage métiers sont le point de départ pour maximiser la valeur et décliner les dimensions d’un plan Data & AI.",
//             },
//             {
//               title: "Nos accélérateurs",
//               picto: "/img/accelerateur.png",
//               text: "Approche Data, questionnaire de maturité, frameworks, guides d’ateliers et méthodes éprouvées.",
//             },
//             {
//               title: "Openshift AI",
//               picto: "/img/rhoai.png",
//               text: "OpenShift® AI permet de gérer les modèles IA à grande échelle dans des environnements sécurisés hybrides.",
//             },
//           ].map((card, index) => (
//             <div
//               key={index}
//               className="bg-[#1e1446] text-white px-6 py-6 min-h-[380px] rounded-2xl shadow-xl border border-fuchsia-600 flex flex-col items-center text-center transition duration-300 hover:scale-105"
//             >
//               <div className="h-[80px] flex items-center justify-center mb-4">
//                                 <h1 className="text-xl font-bold text-white leading-tight">{card.title}</h1>

//               </div>
//               <div className="flex justify-center items-center mb-6">
//                 <img src={card.picto} alt={card.title} className="w-20 object-contain" />
//               </div>
//               <div className="w-16 h-[3px] bg-fuchsia-500 mb-3 rounded-full"></div>
//               <h3 className="text-sm  text-white-500">{card.text}</h3>
//             </div>
//           ))}
//         </div>
//       </section>
//   <p className="text-[#26509e] text-lg md:text-xl font-bold mb-4 leading-snug max-w-3xl mx-auto text-center">
//   Nos solutions Data & AI sont spécifiques et adaptées aux besoins dynamiques des secteurs privé et public, offrant des avantages concurrentiels et une efficacité opérationnelle.
// </p>
//       <div className="flex justify-center mb-4">
//       <img src="/img/ai_blue.png" alt="AI Logo" className="h-20 w-20"/>
//     </div>
//       <section id="cas-usage" className="bg-[#1e1446] px-4 ">
// <section id="cas-usage" className="bg-[#1e1446] px-4 h-22" >
//   <section className="text-white py-10 px-4 text-center">
//     <div className="flex justify-center space-x-4">
//       <button
//         onClick={() => setActiveTab("public")}
//         className={`px-6 py-2 font-semibold rounded-full border-2 transition-all duration-300 ${
//           activeTab === "public"
//             ? "bg-[#26509e] text-white"
//             : "bg-transparent text-white hover:bg-white hover:text-[#1E1446]"
//         }`}
//       >
//         Secteur Public
//       </button>
//       <button
//         onClick={() => setActiveTab("privé")}
//         className={`px-6 py-2 font-semibold rounded-full border-2 transition-all duration-300 ${
//           activeTab === "privé"
//             ? "bg-[#26509e] text-white"
//             : "bg-transparent text-white hover:bg-white hover:text-[#1E1446]"
//         }`}
//       >
//         Secteur Privé
//       </button>
//     </div>
//   </section>
// </section>




// <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4">
//   {tabs[activeTab].map((item, idx) => (
//     <a
//       href={item.link}
//       key={idx}
//       className="relative rounded-3xl bg-white text-[#26509e] font-semibold px-6 py-16 min-h-[220px] shadow-md transition-all duration-300 hover:scale-105 hover:text-white hover:bg-gradient-to-br hover:from-[#26509e] hover:to-white flex items-center justify-center text-center"
//     >
//       <div className="w-full">
//             <div className="flex justify-center mb-4">

//       <img src=   {item.img} alt="AI Logo" className="h-15 w-20" />
//     </div>
//         <p className="text-xl md:text-2xl font-bold leading-snug">
//           {item.title}
//         </p>
//       </div>
//     </a>
//   ))}
// </div>



//         <div className="text-center mt-10">
//           <a href="/toutes-les-donnees" className="text-[#1e1446] font-semibold hover:underline">
//             Voir toutes nos réalisations &gt;
//           </a>
//         </div>
//       </section>

//       {/* PRODUITS */}
//       <section id="section-produits" className="bg-white px-4 py-12 text-white w-full">
//         <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1e1446] mb-12">Nos réalisations</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-4">
//           {[
//             {
//               title: "Cartographie du parc locatif sénégalais",
//               image: "/img/senegal.png",
//               link: "/tableaux/cnsa-depenses",
//             },
//             {
//               title: "Suivi des recettes de l’État",
//               image: "/img/dgid.png",
//               link: "/https://bi-srmt-srmt.apps.origins.heritage.africa/Reports",
//             },
//             {
//               title: "Fond souverain & décisions",
//               image: "/img/fonsis.png",
//               link: "/tableaux/habitats-inclusifs",
//             },
//           ].map((item, i) => (
//             <div key={i} className="bg-white text-[#1e1446] rounded-2xl shadow-lg flex flex-col min-h-[420px]">
//               <div>
//                 <h3 className="text-lg md:text-xl font-bold px-6 py-4">{item.title}</h3>
//                 <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
//               </div>
//               <div className="px-6 py-4">
//                 <a href={item.link} className="bg-[#1e1446] hover:bg-[#0f0a2b] text-white px-5 py-2 rounded-full transition">
//                   Voir le tableau de bord
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* TECHNOLOGIES */}
//       <section className="bg-white py-12 text-center">
//         <h2 className="text-1xl md:text-3xl text-[#1e1446] mb-6">
//           Les technologies les plus innovantes au service de notre expertise.
//         </h2>
//         {/* <div className="flex justify-center mb-6">
//           <img src="/img/tech.png" alt="Tech Icon" className="h-16 w-16" />
//         </div> */}
//         <div className="flex justify-center gap-8 flex-wrap">
//           {["redhat", "redhat", "pytorch", "tensorflow", "scikit-learn"].map((logo, i) => (
//             <div key={i} className="w-[140px] h-[140px] bg-gray-200 rounded-full overflow-hidden flex items-center justify-center shadow-md hover:scale-105 transition">
//               <img src={`img/${logo}.png`} alt={logo} className="w-full h-full object-cover" />
//             </div>
//           ))}
//         </div>
//       </section>
//   <video
//     className="absolute top-0 left-0 w-full h-1000px object-cover"
//     autoPlay
//     muted
//     loop
//     playsInline
//   >
//     <source src="img/intro.mp4" type="video/mp4" />
//     {/* Ton navigateur ne supporte pas la vidéo HTML5. */}
//   </video>
//       {/* FOOTER */}
//       <footer className="bg-[#1e1446] text-white px-6 py-10">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
//           <div>
//             <p className="text-lg font-bold mb-2">Powered By</p>
//             <img src="img/accel_logo_light.png" alt="Accel Logo" className="h-20" />
//           </div>
//           <div>
//             <h3 className="font-bold mb-4">Liens utiles</h3>
//             <ul className="space-y-3">
//               <li>🔗 Red Hat Enterprise Linux</li>
//               <li>🔗 Openshift AI</li>
//               <li>🔗 Heritage Cloud</li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="font-bold mb-4">Contact</h3>
//             <ul className="space-y-3">
//               <li>+221 33 820 83 83</li>
//               <li>info@accel-tech.net</li>
//               <li>165 virage, Route de l'aéroport, Dakar, Sénégal</li>
//             </ul>
//           </div>
//           <div className="flex items-end justify-start md:justify-center space-x-6 text-fuchsia-500 text-2xl">
//             <i className="fab fa-facebook-f"></i>
//             <i className="fab fa-linkedin-in"></i>
//             <i className="fab fa-youtube"></i>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }


import React, { useState } from "react";
import { FiSearch, FiMenu } from "react-icons/fi";
// Importez Link de react-scroll et renommez-le pour les ancres internes
import { Link as ScrollLink } from "react-scroll";
// Importez Link de react-router-dom et renommez-le pour la navigation entre pages
import { Link as RouterLink } from "react-router-dom";

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState("privé");

  const tabs = {
    privé: [
      { title: "Banque et Finance", img: "/img/banque.png", link: "" },
      { title: "Agro, Industrie & Commerce", img: "/img/agro.png", link: "" },
      { title: "Immobilier", img: "/img/immo.png", link: "" },
      { title: "BTP et Génie Civil", img: "/img/btp.png", link: "" },
    ],
    public: [
      { title: "Politique publique", img: "/img/politique_publique.png", link: "/ANSDHome" },
      { title: "Sûreté et ordre", img: "/img/education.png", link: "/GendarmerieHome" },
      { title: "Éducation & Formation", img: "/img/education.png", link: "" },
      { title: "Santé & Protection sociale", img: "/img/sante.png", link: "" },
      { title: "Financement", img: "/img/financement.png", link: "" },
      { title: "Energie – Mines", img: "/img/energie.png", link: "" },
    ],
  };

  return (
    <div className="text-white font-sans scroll-smooth">
      <div className="relative min-h-[700px] flex flex-col justify-between overflow-hidden">
        {/* Contenu par-dessus la vidéo */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between">
          <nav className="flex items-center justify-between px-6 py-4">
            {/* Logo à gauche */}
            <div className="flex-shrink-0">
              <img src="img/logo_accel.png" alt="Logo Accel" className="h-20 w-auto" />
            </div>

            {/* Liens centrés */}
            <div className="flex-1 flex justify-center gap-10 items-center text-[#1C2452] font-semibold">
              <ScrollLink to="section-services" smooth duration={700} offset={-70} className="cursor-pointer hover:text-[#26509e]">
                Nos expertises
              </ScrollLink>
              <ScrollLink to="cas-usage" smooth duration={700} offset={-70} className="cursor-pointer hover:text-[#26509e]">
                Use Cases IA
              </ScrollLink>
              <ScrollLink to="section-produits" smooth duration={700} offset={-70} className="cursor-pointer hover:text-[#26509e]">
                Publications
              </ScrollLink>
              {/* Note: Ce lien était vide, donc il ne fait rien. Si c'est une section, utilisez ScrollLink. Si c'est une page, utilisez RouterLink et donnez-lui un chemin. */}
              <ScrollLink to="" smooth duration={700} offset={-70} className="cursor-pointer hover:text-[#26509e]">
                Actualités IA
              </ScrollLink>

              <a
                href="https://www.accel-tech.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-[#26509e]"
              >
                Découvrez ACCEL Tech
              </a>
            </div>

            {/* Bouton à droite */}
            <div className="flex-shrink-0">
              <button className="bg-[#1e1446] text-white px-4 py-1 rounded-full text-sm font-semibold">
                CONTACT
              </button>
            </div>
          </nav>
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-0" />
      </div>

      <section
        id="section-services"
        className="relative z-20 px-4 sm:px-6 lg:px-10 pb-12 mt-8 sm:mt-12 md:mt-16 lg:mt-14"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {[
            {
              title: "Stratégie, Gouvernance et Ingénierie",
              picto: "/img/strategy.png",
              text: "Expertise en Data Stratégie, Gouvernance & Architecture issue de nombreuses missions d’accompagnement de CDO et structuration de Data Office.",
            },
            {
              title: "Valorisation Data & IA",
              picto: "/img/valorisation.png",
              text: "Les cas d’usage métiers sont le point de départ pour maximiser la valeur et décliner les dimensions d’un plan Data & AI.",
            },
            {
              title: "Nos accélérateurs",
              picto: "/img/accelerateur.png",
              text: "Approche Data, questionnaire de maturité, frameworks, guides d’ateliers et méthodes éprouvées.",
            },
            {
              title: "Openshift AI",
              picto: "/img/rhoai.png",
              text: "OpenShift® AI permet de gérer les modèles IA à grande échelle dans des environnements sécurisés hybrides.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-[#1e1446] text-white px-6 py-6 min-h-[380px] rounded-2xl shadow-xl border border-fuchsia-600 flex flex-col items-center text-center transition duration-300 hover:scale-105"
            >
              <div className="h-[80px] flex items-center justify-center mb-4">
                <h1 className="text-xl font-bold text-white leading-tight">{card.title}</h1>
              </div>
              <div className="flex justify-center items-center mb-6">
                <img src={card.picto} alt={card.title} className="w-20 object-contain" />
              </div>
              <div className="w-16 h-[3px] bg-fuchsia-500 mb-3 rounded-full"></div>
              <h3 className="text-sm text-white-500">{card.text}</h3>
            </div>
          ))}
        </div>
      </section>

      <p className="text-[#26509e] text-lg md:text-xl font-bold mb-4 leading-snug max-w-3xl mx-auto text-center">
        Nos solutions Data & AI sont spécifiques et adaptées aux besoins dynamiques des secteurs privé et public, offrant des avantages concurrentiels et une efficacité opérationnelle.
      </p>
      <div className="flex justify-center mb-4">
        <img src="/img/ai_blue.png" alt="AI Logo" className="h-20 w-20" />
      </div>

      <section id="cas-usage" className="bg-[#1e1446] px-4 ">
        <section id="cas-usage" className="bg-[#1e1446] px-4 h-22" >
          <section className="text-white py-10 px-4 text-center">
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setActiveTab("public")}
                className={`px-6 py-2 font-semibold rounded-full border-2 transition-all duration-300 ${
                  activeTab === "public"
                    ? "bg-[#26509e] text-white"
                    : "bg-transparent text-white hover:bg-white hover:text-[#1E1446]"
                }`}
              >
                Secteur Public
              </button>
              <button
                onClick={() => setActiveTab("privé")}
                className={`px-6 py-2 font-semibold rounded-full border-2 transition-all duration-300 ${
                  activeTab === "privé"
                    ? "bg-[#26509e] text-white"
                    : "bg-transparent text-white hover:bg-white hover:text-[#1E1446]"
                }`}
              >
                Secteur Privé
              </button>
            </div>
          </section>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4">
          {tabs[activeTab].map((item, idx) => (
            // Utiliser RouterLink pour la navigation entre pages
            // Vérifier si le lien existe avant de le rendre comme RouterLink
            item.link ? (
              <RouterLink
                to={item.link}
                key={idx}
                className="relative rounded-3xl bg-white text-[#26509e] font-semibold px-6 py-16 min-h-[220px] shadow-md transition-all duration-300 hover:scale-105 hover:text-white hover:bg-gradient-to-br hover:from-[#26509e] hover:to-white flex items-center justify-center text-center"
              >
                <div className="w-full">
                  <div className="flex justify-center mb-4">
                    <img src={item.img} alt="AI Logo" className="h-15 w-20" />
                  </div>
                  <p className="text-xl md:text-2xl font-bold leading-snug">
                    {item.title}
                  </p>
                </div>
              </RouterLink>
            ) : (
              // Si le lien est vide, ne pas le rendre comme un lien cliquable
              <div
                key={idx}
                className="relative rounded-3xl bg-white text-[#26509e] font-semibold px-6 py-16 min-h-[220px] shadow-md flex items-center justify-center text-center"
              >
                <div className="w-full">
                  <div className="flex justify-center mb-4">
                    <img src={item.img} alt="AI Logo" className="h-15 w-20" />
                  </div>
                  <p className="text-xl md:text-2xl font-bold leading-snug">
                    {item.title}
                  </p>
                </div>
              </div>
            )
          ))}
        </div>

        <div className="text-center mt-10">
          <RouterLink to="/toutes-les-donnees" className="text-[#1e1446] font-semibold hover:underline">
            Voir toutes nos réalisations &gt;
          </RouterLink>
        </div>
      </section>

      {/* PRODUITS */}
      <section id="section-produits" className="bg-white px-4 py-12 text-white w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1e1446] mb-12">Nos réalisations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-4">
          {[
            {
              title: "Cartographie du parc locatif sénégalais",
              image: "/img/senegal.png",
              link: "/tableaux/cnsa-depenses",
            },
            {
              title: "Suivi des recettes de l’État",
              image: "/img/dgid.png",
              link: "https://bi-srmt-srmt.apps.origins.heritage.africa/Reports", // Lien externe
            },
            {
              title: "Fond souverain & décisions",
              image: "/img/fonsis.png",
              link: "/tableaux/habitats-inclusifs",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white text-[#1e1446] rounded-2xl shadow-lg flex flex-col min-h-[420px]">
              <div>
                <h3 className="text-lg md:text-xl font-bold px-6 py-4">{item.title}</h3>
                <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
              </div>
              <div className="px-6 py-4">
                {/* Condition pour utiliser RouterLink pour les liens internes ou <a> pour les liens externes */}
                {item.link && item.link.startsWith('/') ? (
                  <RouterLink to={item.link} className="bg-[#1e1446] hover:bg-[#0f0a2b] text-white px-5 py-2 rounded-full transition">
                    Voir le tableau de bord
                  </RouterLink>
                ) : (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="bg-[#1e1446] hover:bg-[#0f0a2b] text-white px-5 py-2 rounded-full transition">
                    Voir le tableau de bord
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="bg-white py-12 text-center">
        <h2 className="text-1xl md:text-3xl text-[#1e1446] mb-6">
          Les technologies les plus innovantes au service de notre expertise.
        </h2>
        <div className="flex justify-center gap-8 flex-wrap">
          {["redhat", "redhat", "pytorch", "tensorflow", "scikit-learn"].map((logo, i) => (
            <div key={i} className="w-[140px] h-[140px] bg-gray-200 rounded-full overflow-hidden flex items-center justify-center shadow-md hover:scale-105 transition">
              <img src={`img/${logo}.png`} alt={logo} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>
      
      <video
        className="absolute top-0 left-0 w-full h-1000px object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="img/intro.mp4" type="video/mp4" />
        {/* Ton navigateur ne supporte pas la vidéo HTML5. */}
      </video>

      {/* FOOTER */}
      <footer className="bg-[#1e1446] text-white px-6 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
          <div>
            <p className="text-lg font-bold mb-2">Powered By</p>
            <img src="img/accel_logo_light.png" alt="Accel Logo" className="h-20" />
          </div>
          <div>
            <h3 className="font-bold mb-4">Liens utiles</h3>
            <ul className="space-y-3">
              <li>🔗 Red Hat Enterprise Linux</li>
              <li>🔗 Openshift AI</li>
              <li>🔗 Heritage Cloud</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>+221 33 820 83 83</li>
              <li>info@accel-tech.net</li>
              <li>165 virage, Route de l'aéroport, Dakar, Sénégal</li>
            </ul>
          </div>
          <div className="flex items-end justify-start md:justify-center space-x-6 text-fuchsia-500 text-2xl">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </footer>
    </div>
  );
}