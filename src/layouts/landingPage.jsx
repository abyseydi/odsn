

import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState("privé");
  const [mobileOpen, setMobileOpen] = useState(false);

  const tabs = {
    privé: [
      { title: "Banque et Finance", img: "/img/banque.png", link: "" },
      { title: "Agro, Industrie & Commerce", img: "/img/agro.png", link: "" },
      { title: "Immobilier", img: "/img/immo.png", link: "" },
      { title: "BTP et Génie Civil", img: "/img/btp.png", link: "" },
    ],
    public: [
            { title: "Santé & Protection sociale", img: "/img/sante.png", link: "" },
      { title: "Éducation & Formation", img: "/img/education.png", link: "educationHome" },

      { title: "Politique publique", img: "/img/politique_publique.png", link: "/PublicPolicyHome" },
      { title: "Sûreté & ordre", img: "/img/fds_icon.png", link: "/safetyOrderHome" },
      { title: "Économie, Finances & Budget", img: "/img/financement.png", link: "" },
      { title: "Énergie & Mines", img: "/img/energie.png", link: "" },
    ],
  };


const NavLinks = ({ onClick }) => {
  const base =
    "relative group inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full text-sm md:text-[15px] font-semibold uppercase tracking-wide transition";
  const text =
    "text-[#1C2452] hover:text-[#26509e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#26509e]/50";
  const afterBar =
    "after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#26509e] after:transition-all after:duration-300 group-hover:after:w-3/4";

  const activeClass =
    "!text-[#26509e] after:w-3/4"; // appliqué par react-scroll quand la section est active

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-5">
      <ScrollLink
        to="section-services"
        smooth
        duration={700}
        offset={-80}
        spy
        onClick={onClick}
        className={`${base} ${text} ${afterBar}`}
        activeClass={activeClass}
      >
        Nos expertises
      </ScrollLink>

      <ScrollLink
        to="section-cas-usage"
        smooth
        duration={700}
        offset={-80}
        spy
        onClick={onClick}
        className={`${base} ${text} ${afterBar}`}
        activeClass={activeClass}
      >CATALOGUE
      </ScrollLink>

      <ScrollLink
        to="section-publications"
        smooth
        duration={700}
        offset={-80}
        spy
        onClick={onClick}
        className={`${base} ${text} ${afterBar}`}
        activeClass={activeClass}
      >
        Publications
      </ScrollLink>

      <a
        href="https://www.accel-tech.net/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={`${base} ${text} ${afterBar}`}
      >
        Découvrez ACCEL Tech
      </a>
    </div>
  );
};

  return (
    <div className="text-white font-sans scroll-smooth">
   
 <header className="relative min-h-[90svh]">
  {/* Fond image (MOBILE/TABLET) */}
<div className=" bg-white absolute inset-0 -z-10 block md:hidden flex items-center justify-center bg-black">
  <img
    src="img/bg_mobile.png"
    alt="Background"
    className="max-w-full max-h-full object-contain p-1" 
  />
</div>


  {/* Fond vidéo (DESKTOP uniquement) */}
  <div className="absolute inset-0 -z-10 hidden md:block">
    <video
      className="w-full h-full object-cover"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src="img/intro.mp4" type="video/mp4" />
    </video>
  </div>

  {/* NAVBAR */}
  <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">
    <div className="flex-shrink-0">
      <img src="img/logo_accel.png" alt="Logo Accel" className="h-14 sm:h-16 w-auto" />
    </div>

    <div className="hidden md:flex flex-1 justify-center">
      <NavLinks />
    </div>

    <div className="flex items-center gap-3">
      <button className="hidden sm:inline-block bg-[#1e1446] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#120b36]">
        CONTACT
      </button>
      <button
        aria-label="Ouvrir le menu"
        className="md:hidden p-2 rounded-lg bg-white/90 text-[#1e1446]"
        onClick={() => setMobileOpen(true)}
      >
        <FiMenu className="h-6 w-6" />
      </button>
    </div>
  </nav>

  {/* MENU MOBILE (drawer) */}
  {mobileOpen && (
    <div className="md:hidden fixed inset-0 z-40">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => setMobileOpen(false)}
      />
      <div className="absolute right-0 top-0 h-full w-[85vw] max-w-[360px] bg-white text-[#1C2452] p-6 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <img src="img/logo_accel.png" alt="Logo Accel" className="h-12 w-auto" />
          <button
            aria-label="Fermer le menu"
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <FiX className="h-6 w-6" />
          </button>
        </div>
        <NavLinks onClick={() => setMobileOpen(false)} />
        <button className="mt-6 w-full bg-[#1e1446] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#120b36]">
          CONTACT
        </button>
      </div>
    </div>
  )}
</header>




      {/* ==== EXPERTISES ==== */}
      <section
        id="section-services"
        className="relative z-10 px-4 sm:px-6 lg:px-10 py-10 sm:py-12 md:py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-[#1e1446] text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10">
            Nos expertises
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
            {[
              {
                title: "Stratégie, Gouvernance et Ingénierie",
                picto: "/img/strategy.png",
                text:
                  "Expertise en Data Stratégie, Gouvernance & Architecture issue de nombreuses missions d’accompagnement de CDO et structuration de Data Office.",
              },
              {
                title: "Valorisation Data & IA",
                picto: "/img/valorisation.png",
                text:
                  "Les cas d’usage métiers sont le point de départ pour maximiser la valeur et décliner les dimensions d’un plan Data & AI.",
              },
              {
                title: "Nos accélérateurs",
                picto: "/img/accelerateur.png",
                text:
                  "Approche Data, questionnaire de maturité, frameworks, guides d’ateliers et méthodes éprouvées.",
              },
              {
                title: "Openshift AI",
                picto: "/img/rhoai.png",
                text:
                  "OpenShift® AI permet de gérer les modèles IA à grande échelle dans des environnements sécurisés hybrides.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-[#1e1446] text-white px-6 py-6 min-h-[340px] rounded-2xl shadow-xl border border-fuchsia-600 flex flex-col items-center text-center transition duration-300 hover:scale-[1.02]"
              >
                <div className="min-h-[64px] flex items-center justify-center mb-4">
                  <h3 className="text-lg sm:text-xl font-bold leading-tight">{card.title}</h3>
                </div>
                <div className="flex justify-center items-center mb-5">
                  <img src={card.picto} alt={card.title} className="w-16 sm:w-20 object-contain" />
                </div>
                <div className="w-16 h-[3px] bg-fuchsia-500 mb-3 rounded-full" />
                <p className="text-sm sm:text-[15px] text-gray-200">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Texte transition */}
      <div className="px-4 sm:px-6 lg:px-10 py-6">
        <p className="text-[#26509e] text-center text-base sm:text-lg md:text-xl font-bold max-w-4xl mx-auto">
          Nos solutions Data & AI sont spécifiques et adaptées aux besoins dynamiques des secteurs privé et public,
          offrant des avantages concurrentiels et une efficacité opérationnelle.
        </p>
        <div className="flex justify-center mt-3">
          <img src="/img/ai_blue.png" alt="AI Logo" className="h-16 w-16 sm:h-20 sm:w-20" />
        </div>
      </div>

      {/* ===== USE CASES ===== */}
      <section id="section-cas-usage" className="bg-[#1e1446] py-10 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          {/* Onglets */}
          <div className="text-white text-center mb-8 sm:mb-10">
            <div className="inline-flex gap-3 sm:gap-4">
              <button
                onClick={() => setActiveTab("public")}
                className={`px-5 sm:px-6 py-2 font-semibold rounded-full border-2 transition-all duration-300 ${
                  activeTab === "public"
                    ? "bg-[#26509e] text-white border-[#26509e]"
                    : "bg-transparent text-white hover:bg-white hover:text-[#1E1446] border-white/70"
                }`}
              >
                Secteur Public
              </button>
              <button
                onClick={() => setActiveTab("privé")}
                className={`px-5 sm:px-6 py-2 font-semibold rounded-full border-2 transition-all duration-300 ${
                  activeTab === "privé"
                    ? "bg-[#26509e] text-white border-[#26509e]"
                    : "bg-transparent text-white hover:bg-white hover:text-[#1E1446] border-white/70"
                }`}
              >
                Secteur Privé
              </button>
            </div>
          </div>

          {/* Cartes */}
 
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
  {tabs[activeTab].map((item, idx) =>
    item.link ? (
      <RouterLink
        to={item.link}
        key={idx}
        className="relative rounded-3xl bg-white text-[#26509e] font-semibold px-6 py-12 min-h-[200px] shadow-md transition-all duration-300 hover:scale-[1.02] hover:text-white hover:bg-gradient-to-br hover:from-[#26509e] hover:to-[#1e1446] flex items-center justify-center text-center"
      >
        {/* Badge CONFIDENTIEL */}
        {(item.title === "Sûreté & ordre" || item.title === "Économie") && (
          <span className="absolute top-3 right-3 bg-red-600 text-white text-xs sm:text-sm font-bold px-2 py-1 rounded-full shadow">
            Confidentiel
          </span>
        )}

        <div className="w-full">
          <div className="flex justify-center mb-4">
            <img src={item.img} alt={item.title} className="h-14 w-16 sm:h-16 sm:w-20 object-contain" />
          </div>
          <p className="text-lg sm:text-xl md:text-2xl font-bold leading-snug">{item.title}</p>
        </div>
      </RouterLink>
    ) : (
      <div
        key={idx}
        className="relative rounded-3xl bg-white text-[#26509e] font-semibold px-6 py-12 min-h-[200px] shadow-md flex items-center justify-center text-center"
      >
        {/* Badge CONFIDENTIEL */}
        {(item.title === "Sûreté & ordre" || item.title === "Économie, Finances & Budget") && (
          <span className="absolute top-3 right-3 bg-red-600 text-white text-xs sm:text-sm font-bold px-2 py-1 rounded-full shadow">
            Confidentiel
          </span>
        )}

        <div className="w-full">
          <div className="flex justify-center mb-4">
            <img src={item.img} alt={item.title} className="h-14 w-16 sm:h-16 sm:w-20 object-contain" />
          </div>
          <p className="text-lg sm:text-xl md:text-2xl font-bold leading-snug">{item.title}</p>
        </div>
      </div>
    )
  )}
</div>

          <div className="text-center mt-8 sm:mt-10">
            <RouterLink
              to="/catalogue"
              className="text-white underline underline-offset-4 decoration-white/60 hover:decoration-white text-sm sm:text-base"
            >
              Voir toutes nos réalisations &gt;
            </RouterLink>
          </div>
        </div>
      </section>


{/* ===== PRODUITS ===== */}
<section id="section-produits" className="bg-[#f9f9fb] px-6 py-16">
  <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#1e1446] mb-10">
    Nos Réalisations
  </h2>

  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        title: "Cartographie du parc locatif sénégalais",
        desc: "Analyse des logements non fiscalisés sur Airbnb & Booking.",
        image: "/img/senegal.png",
        link: "/tableaux/cnsa-depenses",
      },
      {
        title: "Suivi des recettes de l’État",
        desc: "Visualisation en temps réel des recettes fiscales.",
        image: "/img/dgid.png",
        link: "https://bi-srmt-srmt.apps.origins.heritage.africa/Reports",
      },
      {
        title: "Fond souverain & décisions",
        desc: "Outils de pilotage stratégique pour le FONSIS.",
        image: "/img/fonsis.png",
        link: "/tableaux/habitats-inclusifs",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="relative group rounded-2xl overflow-hidden shadow-xl cursor-pointer"
      >
        {/* Image */}
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Couche bleue transparente */}
        <div className="absolute inset-0 bg-[#1e1446]/40" />

        {/* Contenu (toujours visible) */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          <h3 className="text-lg sm:text-xl font-bold mb-2">{item.title}</h3>
          <p className="text-gray-100 text-sm mb-3">{item.desc}</p>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-4 py-2 rounded-full text-sm"
          >
            Voir →
          </a>
        </div>
      </div>
    ))}
  </div>
</section>
{/* ===== PUBLICATIONS ===== */}
<section id="section-publications" className="bg-[#f9f9fb] px-6 py-16">
  <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#1e1446] mb-10">
    Nos Publications
  </h2>

  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        title: "L’IA au service de la fiscalité",
        desc: "Comment l’intelligence artificielle transforme la collecte et l’analyse des données fiscales.",
        image: "/img/iaia.jpeg",
        link: "#",
      },
      {
        title: "Big Data & Énergie",
        desc: "Optimiser la production et la distribution énergétique grâce à la data science.",
        image: "/img/iaia.jpeg",
        link: "#",
      },
      {
        title: "Open Data pour le développement",
        desc: "Pourquoi l’ouverture des données est un levier stratégique pour les gouvernements africains.",
        image: "/img/iaia.jpeg",

        link: "#",
      },
    ].map((pub, i) => (
      <div
        key={i}
        className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02] flex flex-col"
      >
        {/* Image */}
        <img
          src={pub.image}
          alt={pub.title}
          className="w-full h-48 object-cover"
        />

        {/* Contenu */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-lg sm:text-xl font-bold text-[#1e1446] mb-3">
            {pub.title}
          </h3>
          <p className="text-sm text-gray-600 flex-1">{pub.desc}</p>

          <a
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-[#26509e] hover:bg-[#1e1446] text-white px-4 py-2 rounded-full text-sm font-semibold text-center"
          >
            Lire →
          </a>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* ===== TECHNOLOGIES ===== */}
  {/* <section className="relative py-16 bg-gradient-to-br from-[#94cbbd]  to-[#26509e] text-center overflow-hidden"> */}
<section className="relative py-12 bg-[#f9f9fb] text-center overflow-hidden">
  {/* Décor avec cercles flous */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute w-60 h-60 bg-fuchsia-500/20 rounded-full blur-3xl top-10 left-10" />
    <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl bottom-0 right-10" />
  </div>

  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-10">
    Les technologies les plus innovantes au cœur de notre expertise
  </h2>

  <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 px-4">
    {[
      { name: "Red Hat", logo: "redhat" },
      { name: "PyTorch", logo: "pytorch" },
      { name: "TensorFlow", logo: "tensorflow" },
      { name: "Scikit-learn", logo: "scikit-learn" },
      { name: "Kubernetes", logo: "kubernetes" },
    ].map((tech, i) => (
      <div
        key={i}
        className="relative group bg-white/10 backdrop-blur-md rounded-xl shadow-md border border-white/20 overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-fuchsia-400/40"
      >
        {/* Image réduit */}
        <img
          src={`img/${tech.logo}.png`}
          alt={tech.name}
          className="w-full h-28 sm:h-36 object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Bandeau nom en bas plus compact */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#1e1446]/70 text-white py-1 text-xs sm:text-sm font-semibold text-center">
          {tech.name}
        </div>

        {/* Glow effet au hover */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-fuchsia-500/20 to-blue-500/20 blur-xl -z-10" />
      </div>
    ))}
  </div>
</section>




      {/* <section className="bg-white py-10 sm:py-12 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl text-[#1e1446] mb-6">
          Les technologies les plus innovantes au service de notre expertise.
        </h2>
        <div className="flex justify-center gap-6 sm:gap-8 flex-wrap">
          {["redhat", "redhat", "pytorch", "tensorflow", "scikit-learn"].map((logo, i) => (
            <div
              key={i}
              className="w-[110px] h-[110px] sm:w-[140px] sm:h-[140px] bg-gray-200 rounded-full overflow-hidden flex items-center justify-center shadow-md hover:scale-105 transition"
            >
              <img src={`img/${logo}.png`} alt={logo} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section> */}
  
   
      {/* ===== FOOTER ===== */}
      <footer className="bg-[#1e1446] text-white px-4 sm:px-6 lg:px-10 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 text-sm">
          <div>
            <p className="text-lg font-bold mb-2">Powered By</p>
            <img src="img/accel_logo_light.png" alt="Accel Logo" className="h-16 sm:h-20" />
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
          <div className="flex items-end md:items-center justify-start md:justify-center gap-6 text-fuchsia-500 text-2xl">
            <i className="fab fa-facebook-f" aria-label="Facebook" />
            <i className="fab fa-linkedin-in" aria-label="LinkedIn" />
            <i className="fab fa-youtube" aria-label="YouTube" />
          </div>
        </div>
      </footer>
    </div>
  );
}
