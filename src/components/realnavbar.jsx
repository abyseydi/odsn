import { useState } from "react";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const MenuIcon = () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );

  const CloseIcon = () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md h-[90px]">
      {/* Arrière-plan mobile */}
      {/* <div className="bg-white absolute inset-0 -z-10 block md:hidden flex items-center justify-center">
        <img src="img/bg_mobile.png" alt="Arrière-plan" className="max-w-full max-h-full object-contain p-1" />
      </div> */}

      {/* Arrière-plan desktop (vidéo) */}
      {/* <div className="absolute inset-0 -z-10 hidden md:block">
        <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
          <source src="img/intro3.mp4" type="video/mp4" />
        </video>
      </div> */}

      {/* Navigation */}
      <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img src="img/logo_accel.png" alt="Logo Accel" className="h-20 sm:h-25 w-auto" />
        </a>

        {/* Liens desktop */}
        <div className="hidden md:flex flex-1 justify-center">
          <NavLinks />
        </div>

        {/* Boutons */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-block bg-[#1e1446] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#120b36]">
            CONTACT
          </button>
          <button onClick={() => setMobileOpen(true)} className="md:hidden p-2 rounded-lg bg-white/90 text-[#1e1446]">
            <MenuIcon />
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[85vw] max-w-[360px] bg-white text-[#1C2452] p-6 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <img src="img/logo_accel.png" alt="Logo Accel" className="h-12 w-auto" />
              <button onClick={() => setMobileOpen(false)} className="p-2 rounded-md hover:bg-gray-100">
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
};

export default Navbar;
