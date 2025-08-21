import React, { useState } from "react";
import { motion } from "framer-motion";

export default function CatalogueBook() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center my-12 px-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-10 text-[#1e1446]">
        Explorez nos secteurs
      </h2>

      {/* Livre */}
      <div
        className="relative w-[320px] sm:w-[520px] h-[420px] sm:h-[520px] cursor-pointer perspective"
        onClick={() => setOpen(!open)}
      >
        {/* === COUVERTURE === */}
        <motion.div
          initial={{ rotateY: 0 }}
          animate={{ rotateY: open ? -180 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-[#1e1446] to-[#0f0a2b] 
                     rounded-lg shadow-2xl flex items-center justify-center 
                     backface-hidden border-r-4 border-gray-800"
          style={{ transformOrigin: "left center" }}
        >
          <h3 className="text-3xl font-bold tracking-wider text-white drop-shadow-lg">
            Catalogue
          </h3>

          {/* Effet tranche gauche */}
          <div className="absolute left-0 top-0 h-full w-[12px] bg-gradient-to-r from-black/40 to-transparent rounded-l-md" />
        </motion.div>

        {/* === PAGE SECTEUR PUBLIC === */}
        <motion.div
          initial={{ rotateY: 180 }}
          animate={{ rotateY: open ? 0 : 180 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[#fdfcf9] rounded-lg shadow-inner 
                     flex flex-col items-center justify-center p-8 
                     backface-hidden border-l-2 border-gray-300"
          style={{ transformOrigin: "left center" }}
        >
          <h3 className="text-xl font-bold text-fuchsia-600 mb-4 underline">
            Secteur Public
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 font-medium">
            <li>📊 Suivi des recettes de l’État</li>
            <li>🏛️ Fond souverain & décisions</li>
            <li>🛰️ Cartographie fiscale</li>
          </ul>

          {/* Effet de pages fines */}
          <div className="absolute right-0 top-0 h-full w-[8px] bg-gradient-to-l from-gray-200 to-transparent rounded-r-md" />
        </motion.div>

        {/* === PAGE SECTEUR PRIVÉ === */}
        <motion.div
          initial={{ rotateY: -180 }}
          animate={{ rotateY: open ? 0 : -180 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[#fdfcf9] rounded-lg shadow-inner 
                     flex flex-col items-center justify-center p-8 
                     backface-hidden border-r-2 border-gray-300"
          style={{ transformOrigin: "right center" }}
        >
          <h3 className="text-xl font-bold text-blue-600 mb-4 underline">
            Secteur Privé
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 font-medium">
            <li>🏦 Banque & Finance</li>
            <li>🏢 Immobilier & BTP</li>
            <li>🌾 Agro-industrie</li>
          </ul>

          {/* Effet tranche droite */}
          <div className="absolute left-0 top-0 h-full w-[8px] bg-gradient-to-r from-gray-200 to-transparent rounded-l-md" />
        </motion.div>
      </div>

      <p className="mt-6 text-sm text-gray-500 italic">
        Cliquez sur le livre pour {open ? "le fermer" : "l’ouvrir"} 📖
      </p>
    </div>
  );
}
