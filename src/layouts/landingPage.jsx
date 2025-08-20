

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
      { title: "Politique publique", img: "/img/politique_publique.png", link: "/ANSDHome" },
      { title: "Sûreté & ordre", img: "/img/fds_icon.png", link: "/safetyOrderHome" },
      { title: "Éducation & Formation", img: "/img/education.png", link: "" },
      { title: "Santé & Protection sociale", img: "/img/sante.png", link: "" },
      { title: "Économie, Finances & Budget", img: "/img/financement.png", link: "" },
      { title: "Énergie & Mines", img: "/img/energie.png", link: "" },
    ],
  };

  const NavLinks = ({ onClick }) => (
    <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 text-[#1C2452] font-semibold">
      <ScrollLink to="section-services" smooth duration={700} offset={-80} className="cursor-pointer hover:text-[#26509e]" onClick={onClick}>
        Nos expertises
      </ScrollLink>
      <ScrollLink to="section-cas-usage" smooth duration={700} offset={-80} className="cursor-pointer hover:text-[#26509e]" onClick={onClick}>
        Use Cases IA
      </ScrollLink>
      <ScrollLink to="section-produits" smooth duration={700} offset={-80} className="cursor-pointer hover:text-[#26509e]" onClick={onClick}>
        Publications
      </ScrollLink>
      <a
        href="https://www.accel-tech.net/"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer hover:text-[#26509e]"
        onClick={onClick}
      >
        Découvrez ACCEL Tech
      </a>
    </div>
  );

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
    {/* Logo */}
    <div className="flex-shrink-0">
      <img src="img/logo_accel.png" alt="Logo Accel" className="h-14 sm:h-16 w-auto" />
    </div>

    {/* Liens (desktop) */}
    <div className="hidden md:flex flex-1 justify-center">
      <NavLinks />
    </div>

    {/* CTA + Burger */}
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




      {/* ===== EXPERTISES ===== */}
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
              to="/toutes-les-donnees"
              className="text-white underline underline-offset-4 decoration-white/60 hover:decoration-white text-sm sm:text-base"
            >
              Voir toutes nos réalisations &gt;
            </RouterLink>
          </div>
        </div>
      </section>

      {/* ===== PRODUITS ===== */}
      <section id="section-produits" className="bg-white px-4 sm:px-6 lg:px-10 py-12 md:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#1e1446] mb-8 sm:mb-12">
          Nos réalisations
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "Cartographie du parc locatif sénégalais",
              image: "/img/senegal.png",
              link: "/tableaux/cnsa-depenses",
            },
            {
              title: "Suivi des recettes de l’État",
              image: "/img/dgid.png",
              link: "https://bi-srmt-srmt.apps.origins.heritage.africa/Reports",
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
                <img src={item.image} alt={item.title} className="w-full h-56 sm:h-64 object-cover" />
              </div>
              <div className="px-6 py-4 mt-auto">
                {item.link && item.link.startsWith("/") ? (
                  <RouterLink
                    to={item.link}
                    className="inline-block bg-[#1e1446] hover:bg-[#0f0a2b] text-white px-5 py-2 rounded-full transition text-sm sm:text-base"
                  >
                    Voir le tableau de bord
                  </RouterLink>
                ) : (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#1e1446] hover:bg-[#0f0a2b] text-white px-5 py-2 rounded-full transition text-sm sm:text-base"
                  >
                    Voir le tableau de bord
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TECHNOLOGIES ===== */}
      <section className="bg-white py-10 sm:py-12 text-center">
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
      </section>

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
