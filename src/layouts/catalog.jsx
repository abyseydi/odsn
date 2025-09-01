import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";
import UseCasePage from "./UseCasePage";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/realnavbar";

export default function Catalog() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      {/* HEADER */}
      <Navbar />

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
