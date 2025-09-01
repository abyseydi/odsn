import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";
import UseCasePage from "./UseCasePage";
import { Link, useNavigate } from "react-router-dom";

export default function Catalog() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const NavLinks = ({ onClick }) => {
    const base =
      "relative group inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full text-sm md:text-[15px] font-semibold uppercase tracking-wide transition";
    const text =
      "text-[#1C2452] hover:text-[#26509e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#26509e]/50";
    const afterBar =
      "after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#26509e] after:transition-all after:duration-300 group-hover:after:w-3/4";
    const activeClass = "!text-[#26509e] after:w-3/4";

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
        >
          Catalogue
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
      {/* HEADER */}
      <header className="w-full h-[80px]">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">
          <div className="flex-shrink-0 flex items-center gap-4">
            <Link to="/">
              <img
                src="img/logo_accel.png"
                alt="Logo Accel"
                className="h-14 sm:h-16 w-auto"
              />
            </Link>
            {/* BOUTON RETOUR À L'ACCUEIL */}
            {/* <button
              onClick={() => navigate("/")}
              className="bg-[#26509e] text-white px-3 py-1 rounded-full text-sm font-semibold hover:bg-[#1c3a91]"
            >
              Retour à l'accueil
            </button> */}
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

        {/* MENU MOBILE */}
        {mobileOpen && (
          <div className="md:hidden fixed inset-0 z-40">
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setMobileOpen(false)}
            />
            <div className="absolute right-0 top-0 h-full w-[85vw] max-w-[360px] bg-white text-[#1C2452] p-6 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <img
                  src="img/logo_accel.png"
                  alt="Logo Accel"
                  className="h-12 w-auto"
                />
                <button
                  aria-label="Fermer le menu"
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-md hover:bg-gray-100"
                >
                  <FiX className="h-6 w-6" />
                </button>
              </div>

              <NavLinks onClick={() => setMobileOpen(false)} />

              {/* <button
                className="mt-6 w-full bg-[#1e1446] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#120b36]"
                onClick={() => navigate("/")}
              >
                Retour à l'accueil
              </button> */}

              <button className="mt-3 w-full bg-[#1e1446] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#120b36]">
                CONTACT
              </button>
            </div>
          </div>
        )}
      </header>

      {/* LE CATALOGUE */}
      <div className="mt-6">
        <UseCasePage />
      </div>

      {/* FOOTER */}
      <footer className="bg-[#1e1446] text-white px-4 sm:px-6 lg:px-10 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 text-sm">
          <div>
            <p className="text-lg font-bold mb-2">Powered By</p>
            <img
              src="img/accel_logo_light.png"
              alt="Accel Logo"
              className="h-16 sm:h-20"
            />
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
