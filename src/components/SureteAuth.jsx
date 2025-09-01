import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/realnavbar";

export default function SureteAuth() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Identifiants hardcodés pour Sûreté & Ordre
  const SURETE_CREDENTIALS = {
    email: "surete@ordre.gouv.sn",
    password: "Surete2024@Ordre"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    // Simulation d'un délai de vérification
    setTimeout(() => {
      if (email === SURETE_CREDENTIALS.email && password === SURETE_CREDENTIALS.password) {
        setLoading(false);
        // Redirige vers votre vraie page Sûreté & Ordre existante
        navigate("/safetyOrderHome"); // Changez vers votre vraie route
      } else {
        setLoading(false);
        setError("Accès non autorisé. Identifiants incorrects.");
      }
    }, 1000);
  };

  return (
    <div>
      <Navbar />

      <div
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 gap-x-16 px-6 md:px-12"
      style={{
        backgroundImage: "url('/img/surete_bg.png')", // Changez selon votre image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Bloc texte à gauche */}
      <div className="max-w-md mb-10 md:mb-0 bg-white bg-opacity-80 rounded-xl p-6 text-center md:text-left shadow-lg">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-600 tracking-wide mb-3">
          SÛRETÉ & ORDRE PUBLIC
        </h1>
        <div className="w-16 h-[2px] bg-blue-500 mb-4 mx-auto md:mx-0"></div>
        <img
          src="/img/accel_logo_light.png"
          alt="Logo"
          className="h-[100px] md:h-[120px] mb-6 mx-auto md:mx-0"
        />
        <h1 className="text-2xl md:text-3xl font-bold text-blue-600 tracking-wide mb-3">
          ACCÈS SÉCURISÉ
        </h1>
        <p className="text-sm text-gray-800 leading-relaxed">
          Plateforme intégrée des forces de l'ordre. Accès aux systèmes 
          Gendarmerie, Police et autres services de sécurité.
        </p>
        
        {/* Informations de sécurité */}
        <div className="mt-4 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
          <p className="text-xs text-blue-800 font-semibold">Données Sensibles</p>
          <p className="text-xs text-blue-700">Personnel autorisé uniquement</p>
        </div>
      </div>

      {/* Formulaire à droite */}
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-[400px]">
        <h2 className="text-lg font-bold text-center text-blue-600 mb-8">
          Authentification Requise
        </h2>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-600 font-medium">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email professionnel"
              className="w-full px-4 py-2 bg-gray-100 border-l-4 border-blue-600 rounded focus:outline-none focus:bg-white"
              required
              disabled={loading}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">
              Mot de passe
            </label>
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              className="w-full px-4 py-2 bg-gray-100 border-l-4 border-blue-600 rounded focus:outline-none focus:bg-white"
              required
              disabled={loading}
            />
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
            <label className="flex items-center gap-1">
              <input type="checkbox" className="form-checkbox" disabled={loading} />
              <span>Se souvenir</span>
            </label>
            <span className="text-blue-600">Support</span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 font-semibold rounded-full transition ${
              loading 
                ? "bg-gray-400 text-gray-200 cursor-not-allowed" 
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {loading ? "Vérification..." : "Accéder"}
          </button>
        </form>

        {/* Bouton retour */}
        {/* <div className="text-center mt-6">
          <button
            onClick={() => navigate("/")}
            className="text-gray-600 hover:text-blue-600 text-sm underline"
            disabled={loading}
          >
            ← Retour à l'accueil
          </button>
        </div> */}
      </div>
    </div>
    </div> 
  );
}