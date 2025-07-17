import React, { useState } from "react";
import { FiSearch, FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom"; 
import { Dashboard } from "@/layouts";

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState("privé");
 const tabs = {
    privé: [
      {
        title: "Banque et Finance",
        link: "/secteur-prive/banque",
      },
      {
        title: "Agro, Industrie & Commerce",
        link: "/secteur-prive/agro",
      },
      {
        title: "Immobilier",
        link: "/secteur-prive/immobilier",
      },
      {
        title: "BTP et Génie Civil",
        link: "/secteur-prive/btp",
      },
    ],
    public: [
      {
        title: "Éducation & Formation",
        link: "/secteur-public/education",
      },
      {
        title: "Santé & Protection sociale",
        link: "/secteur-public/sante",
      },
      {
        title: "Financement",
        link: "/secteur-public/financement",
      },
      {
        title: "Politique publique",
        link: "/ANSDHome"
      },
          {
        title: " Energie – Mines",
        link: ""
      },
    ],
  };

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
            <button className="bg-[#1e1446] text-white px-4 py-1 rounded-full text-sm font-semibold">
              CONTACT
            </button>
          </div>
        </nav>

        <section className="min-h-[600px] flex items-center">
          <div className="w-full flex flex-col md:flex-row px-6 gap-8 items-center md:items-stretch">
            <div className="md:w-1/2 flex flex-col justify-center h-full">
              <div className="max-w-xl">
                      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-purple-400 leading-tight">
Shirik'IA          </h1>
                <h4 className="text-3xl md:text-2xl font-bold mb-6 leading-tight">
                Libérez le potentiel de vos données avec l'IA souveraine.
                </h4>
            
              </div>
            </div>
          </div>
        </section>
      </div>

 
      <section className="-mt-24 relative z-20 px-4 sm:px-6 lg:px-10 pb-12">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
    {[
      {
        title: "Stratégie, Gouvernance et Ingénierie",
        picto: "/img/strategy.png",
        text: "Nous bénéficions d'une triple expertise en Data Stratégie, Gouvernance & Architecture issue des nombreuses missions réalisées dans le cadre d'accompagnement de CDO et dans la structuration de Data Office.",
      },
      {
        title: "Valorisation Data & IA ",
        picto: "/img/competence.png",
        text: "Nous croyons fortement que les cas d'usage métiers sont le point de départ pour maximiser la valeur apportée et décliner les principales dimensions du plan d'opérationnalisation Data & AI.",
      },
      {
        title: "Nos accélérateurs",
        picto: "/img/accelerateur.png",
        text: "Une approche Data, un questionnaire de maturité, des Frameworks, des guides d'ateliers et des méthodologies éprouvées  pour accélérer votre  démarche.",
      },
      {
        title: "Openshift AI",
        picto: "/img/diamond.png",
        text: "OpenShift® AI permet de gérer le cycle de vie des modèles d'IA générative et prédictive, à grande échelle, dans les environnements de cloud hybride sécurisés. Il offre des fonctionnalités fiables et cohérentes pour faire des expériences, déployer des modèles et distribuer des applications innovantes.",
      },
    ].map((card, index) => (
      <div
        key={index}
        className="bg-[#1e1446] text-white px-6 py-6 min-h-[380px] rounded-2xl shadow-xl border border-fuchsia-600 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
      >
        {/* Titre avec hauteur fixe */}
        <div className="h-[80px] flex items-center justify-center mb-4">
          <h3 className="text-xl font-bold text-blue-200 leading-tight">
            {card.title}
          </h3>
        </div>

        {/* Icône */}
        <div className="flex justify-center items-center mb-6">
          <img
            src={card.picto}
            alt={card.title}
            className="w-12 object-contain"
          />
        </div>

        {/* Ligne de séparation */}
        <div className="w-16 h-[3px] bg-fuchsia-500 mb-3 rounded-full"></div>

        {/* Texte */}
        <p className="text-sm text-gray-300">{card.text}</p>
      </div>
    ))}
  </div>
</section>


<section className="bg-white px-4 py-20">
  <h1 className="text-3xl md:text-6xl font-bold text-[#bb2fd3] text-center mb-12">
    Cas d'usage Data & IA
  </h1>

  <h2 className="text-3xl md:text-2xl font-bold-500 text-[#bb2fd3] text-center mb-12">
    Nos solutions Data & IA sont spécifiquement adaptées aux besoins dynamiques des secteurs privé et public, offrant des avantages concurrentiels et une efficacité opérationnelle.
  </h2>

  {/* Onglets switch */}
  <div className="flex justify-center mb-10 space-x-4">
    <button
      onClick={() => setActiveTab("privé")}
      className={`px-6 py-2 font-semibold rounded-full border-2 text-sm md:text-base transition-all duration-300 ${
        activeTab === "privé"
          ? "bg-gradient-to-r from-[#1e1446] to-[#96cbbe] text-white border-transparent shadow-lg"
          : "bg-white text-[#1e1446] border-[#1e1446] hover:bg-[#f3f3f3]"
      }`}
    >
      Secteur Privé
    </button>
    <button
      onClick={() => setActiveTab("public")}
      className={`px-6 py-2 font-semibold rounded-full border-2 text-sm md:text-base transition-all duration-300 ${
        activeTab === "public"
          ? "bg-gradient-to-r from-[#1e1446] to-[#96cbbe] text-white border-transparent shadow-lg"
          : "bg-white text-[#1e1446] border-[#1e1446] hover:bg-[#f3f3f3]"
      }`}
    >
      Secteur Public
    </button>
  </div>

  {/* Cartes animées */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4">
  {tabs[activeTab].map((item, idx) => (
    <Link
      to={item.link}
      key={idx}
      className="relative rounded-3xl border-2 border-[#1e1446] bg-white text-[#1e1446] font-semibold text-left px-6 py-16 min-h-[220px] shadow-md transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-br hover:from-[#1e1446] hover:to-[#96cbbe] hover:text-white flex items-center"
    >
      <div className="w-full pr-6">
        <p className="text-md md:text-lg leading-snug">{item.title}</p>
      </div>
      <span className="absolute right-6 top-1/2 -translate-y-1/2 text-2xl font-bold">
        &gt;
      </span>
    </Link>
  ))}
</div>


  {/* Lien vers toutes les données */}
  <div className="text-center mt-10">
    <a
      href="/toutes-les-donnees"
      className="text-[#1e1446] font-semibold hover:underline text-sm md:text-base"
    >
      Voir toutes nos réalisations &gt;
    </a>
  </div>
</section>



<section className="bg-[#eef8f5] px-4 py-20 text-white font-sans w-full">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1e1446] mb-12">
   Nos produits
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-4">
    {[
      {
        title: "IMMO SN : cartographie du parc locatif sénégalais",
        image: "/img/senegal.png",
        link: "/tableaux/cnsa-depenses",
      },
      {
        title: "Suivi des recettes de l’Etat pour les décideurs",
        image: "/img/dgid.png",
        link: "/tableaux/aide-cnsa",
      },
      {
        title: "Fond souverain : exploitation d'états financiers pour aide à la prise de décision",
        image: "/img/fonsis.png",
        link: "/tableaux/habitats-inclusifs",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="bg-white text-[#1e1446] rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between hover:shadow-xl transition duration-300 min-h-[420px]"
      >
        <div>
          <h3 className="text-lg md:text-xl font-bold px-6 py-4">{item.title}</h3>
          <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
        </div>
        <div className="px-6 py-4">
          <a
            href={item.link}
            className="bg-[#1e1446] hover:bg-[#0f0a2b] text-white text-sm font-semibold px-5 py-2 rounded-full transition"
          >
            Voir le tableau de bord
          </a>
        </div>
      </div>
    ))}
  </div>
</section>


<section className="bg-white py-12 text-center">
  <h2 className="text-2xl md:text-3xl font-bold text-[#1e1446] mb-6">
    Les technologies les plus innovantes au service de notre expertise.
  </h2>

  <div className="flex justify-center gap-8 flex-wrap">
    {["redhat", "redhat", "pytorch", "tensorflow", "scikit-learn"].map((logo, i) => (
      <div
        key={i}
        className="w-[140px] h-[140px] md:w-[160px] md:h-[160px] bg-gray-200 rounded-full overflow-hidden flex items-center justify-center shadow-md hover:scale-105 transition"
      >
        <img
          src={`img/${logo}.png`}
          alt={logo}
          className="w-full h-full object-cover"
        />
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
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">📞 
+221 33 820 83 83 </li>
              <li className="flex items-center gap-2">✉️ 
info@accel-tech.net</li>
              <li className="flex items-center gap-2">
165 virage, Route de l'aéroport

Dakar, Sénégal</li>
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
