// import React from "react";

// export default function GendarmerieAuth() {
//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* SECTION GAUCHE */}
//       <div className="w-1/2 flex flex-col items-center justify-center text-center p-10 bg-gray-100 relative z-10">
//         <p className="text-sm text-gray-700 mb-2">Lorem ipsum dolor sit amet.</p>
//         <h1 className="text-4xl font-bold text-blue-600 tracking-wider mb-2">LOREM IPSUP</h1>
//         <div className="w-16 h-[2px] bg-blue-500 mb-6"></div>
//         <img
//           src="/img/accel_logo_light.png"
//           alt="Logo"
//           className="h-14 mx-auto mb-4"
//         />
//         <p className="text-sm text-gray-700 leading-relaxed max-w-sm">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//           tempor incididunt ut labore
//         </p>
//       </div>

//       {/* SECTION DROITE */}
//       <div className="w-1/2 relative bg-[#1e2454] overflow-hidden flex items-center justify-center">
//         {/* Form Container */}
//         <div className="bg-white rounded-2xl shadow-xl p-10 w-[350px]">
//           <h2 className="text-xl font-bold text-center text-blue-600 mb-8">
//             Login Account
//           </h2>

//           <form>
//             <div className="mb-5">
//               <label className="block text-sm text-gray-600 mb-1">Email</label>
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full px-4 py-2 border-b-2 border-blue-600 outline-none focus:ring-0 focus:border-blue-600 bg-gray-100 rounded"
//               />
//             </div>

//             <div className="mb-5">
//               <label className="block text-sm text-gray-600 mb-1">Mots de passe</label>
//               <input
//                 type="password"
//                 placeholder="Mots de passe"
//                 className="w-full px-4 py-2 border-b-2 border-blue-600 outline-none focus:ring-0 focus:border-blue-600 bg-gray-100 rounded"
//               />
//             </div>

//             <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
//               <label className="flex items-center gap-1">
//                 <input type="checkbox" className="form-checkbox" />
//                 <span>Se souvenir de moi</span>
//               </label>
//               <a href="#" className="text-blue-600 hover:underline">
//                 Crée un compte
//               </a>
//             </div>

//             <button
//               type="submit"
//               className="w-full py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition"
//             >
//               Se connecter
//             </button>
//           </form>
//         </div>

//         {/* Courbe décorative en haut */}
//         <div className="absolute top-0 right-0 w-full h-full z-0">
//           <svg
//             className="w-full h-full"
//             viewBox="0 0 800 600"
//             preserveAspectRatio="none"
//           >
//             <path
//               d="M800,0 C600,200 600,400 800,600 L800,0 Z"
//               fill="#f2f2f2"
//             />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import { useNavigate } from "react-router-dom";

export default function GendarmerieAuth() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'authentification ici (si nécessaire)
    navigate("/GendarmerieHome");
  };

  return (
    <div className="relative flex min-h-screen overflow-hidden">
      {/* === SECTION GAUCHE === */}
      <div className="w-1/2 bg-gray-100 flex flex-col items-center justify-center text-center p-10 z-10">
        <p className="text-sm text-gray-700 mb-2">Lorem ipsum dolor sit amet.</p>
        <h1 className="text-4xl font-bold text-blue-600 tracking-wider mb-2">
          LOREM IPSUP
        </h1>
        <div className="w-16 h-[2px] bg-blue-500 mb-6"></div>
        <img
          src="/img/accel_logo_light.png"
          alt="Logo"
          className="h-14 mx-auto mb-4"
        />
        <p className="text-sm text-gray-700 leading-relaxed max-w-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore
        </p>
      </div>

      {/* === SVG COURBE CENTRALE === */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-20 h-full w-20 pointer-events-none">
        <svg
          className="h-full w-full"
          viewBox="0 0 100 600"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 C80,150 80,450 0,600 L100,600 L100,0 Z"
            fill="#f2f2f2"
          />
        </svg>
      </div>

      {/* === SECTION DROITE === */}
      <div className="w-1/2 bg-[#1e2454] flex items-center justify-center z-10">
        <div className="bg-white rounded-2xl shadow-xl p-10 w-[350px] relative z-30">
          <h2 className="text-xl font-bold text-center text-blue-600 mb-8">
            Login Account
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border-b-2 border-blue-600 outline-none bg-gray-100 rounded"
              />
            </div>

            <div className="mb-5">
              <label className="block text-sm text-gray-600 mb-1">Mots de passe</label>
              <input
                type="password"
                placeholder="Mots de passe"
                className="w-full px-4 py-2 border-b-2 border-blue-600 outline-none bg-gray-100 rounded"
              />
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
              <label className="flex items-center gap-1">
                <input type="checkbox" className="form-checkbox" />
                <span>Se souvenir de moi</span>
              </label>
              <a href="#" className="text-blue-600 hover:underline">
                Crée un compte
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
    </div>
  );
}
