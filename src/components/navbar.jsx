

import React, { useState } from "react";

import { Link } from "react-router-dom";

const NavLinks = ({ onClick }) => {
  const base =
    "relative group inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full text-sm md:text-[15px] font-semibold uppercase tracking-wide transition";
  const text =
    "text-[#1C2452] hover:text-[#26509e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#26509e]/50";
  const afterBar =
    "after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#26509e] after:transition-all after:duration-300 group-hover:after:w-3/4";

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      if (onClick) {
        onClick();
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-5">
      <Link
        to="#section-services"
        onClick={(e) => handleScroll(e, "section-services")}
        className={`${base} ${text} ${afterBar}`}
      >
        Nos expertises
      </Link>

      <Link
        to="/catalog"
        className={`${base} ${text} ${afterBar}`}
      >
        CATALOGUE
      </Link>

      <Link
        to="#section-publications"
        onClick={(e) => handleScroll(e, "section-publications")}
        className={`${base} ${text} ${afterBar}`}
      >
        Publications
      </Link>

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

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );

  const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  return (
    <header className="relative min-h-[90svh]">
      <div className="bg-white absolute inset-0 -z-10 block md:hidden flex items-center justify-center bg-black">
        <img
          src="img/bg_mobile.png"
          alt="Arrière-plan"
          className="max-w-full max-h-full object-contain p-1"
        />
      </div>

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

      <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">
        <div className="flex-shrink-0">
          <a href="/">
            <img src="img/logo_accel.png" alt="Logo Accel" className="h-20 sm:h-25 w-auto" />
          </a>
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
            <MenuIcon />
          </button>
        </div>
      </nav>

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
                <CloseIcon />
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
  );
}
