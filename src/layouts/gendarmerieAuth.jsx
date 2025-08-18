



import React from "react";
import { useNavigate } from "react-router-dom";

export default function GendarmerieAuth() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/GendarmerieHome");
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-gray-100"
      style={{
        backgroundImage: "url('/img/gend_login_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Bloc texte à gauche */}
      <div className="absolute left-20 top-1/2 transform -translate-y-1/2 max-w-md bg-transparent bg-opacity-70 rounded-xl p-8 ">
        <h1 className="text-3xl font-bold text-blue-600 tracking-wide mb-3">
          GENDARMERIE NATIONALE DU SENEGAL
        </h1>
        <div className="w-16 h-[2px] bg-blue-500 mb-4"></div>
        <img
          src="/img/accel_logo_light.png"
          alt="Logo"
          className="h-[120px] mb-6"
        />
        <p className="text-sm text-gray-800">
          Ce cas d’usage développé pour les Forces de Défense et de Sécurité contient des données sensibles et confidentielles. L’accès à cette démonstration est strictement réservé aux utilisateurs autorisés. Veuillez vous connecter à l’aide de vos identifiants personnels pour accéder à l’environnement sécurisé.
        </p>
      </div>

      {/* Formulaire centré */}
      <div className="relative  z-10 bg-white rounded-2xl shadow-xl p-10 w-[400px] h-[450px] right-130">
        <h2 className="text-lg font-bold text-center text-blue-600 mb-8">
          Connexion
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 bg-gray-100 border-l-4 border-blue-600 rounded focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">Mot de passe</label>
            <input
              type="password"
              placeholder="Mot de passe"
              className="w-full px-4 py-2 bg-gray-100 border-l-4 border-blue-600 rounded focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
            <label className="flex items-center gap-1">
              <input type="checkbox" className="form-checkbox" />
              <span>Se souvenir de moi</span>
            </label>
            <a href="#" className="text-blue-600 hover:underline">
              Créer un compte
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}
