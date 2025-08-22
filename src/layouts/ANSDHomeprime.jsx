import React from 'react';

// Images (adapte les chemins selon ton projet)
import IconStats from '../../public/img/public.png';
import IconHospital from '../../public/img/health-structure.png';
import IconHeart from '../../public/img/healt_cover.png';
import IconWorld from '../../public/img/world-health.png';
import DoctorIllustration from '../../public/img/doctor.png';

// Composant icône avec tooltip
const SidebarIcon = ({ src, alt, label }) => (
  <button className="group relative my-4 md:my-6 w-10 h-12 md:w-12 md:h-14 flex items-center justify-center focus:outline-none">
    <img src={src} alt={alt} className="w-full h-full object-contain" />
    <span className="absolute left-full top-1/2 transform -translate-y-1/2 ml-3 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 shadow-md hidden md:block">
      {label}
    </span>
  </button>
);

// Boîte colorée
const BoxBorder = ({ color }) => {
  const colorMap = {
    green: 'border-green-600',
    yellow: 'border-yellow-400',
    red: 'border-red-500',
  };
  return (
    <div
      className={`flex-1 min-w-[80px] h-20 md:h-32 bg-white rounded-lg md:rounded-xl border-l-4 ${colorMap[color]} shadow-md`}
    />
  );
};

const DashboardPage = () => {
  return (
    <div
      className="flex flex-col md:flex-row min-h-screen font-sans"
      style={{
        backgroundImage: "url('../../public/img/background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Sidebar */}
      <div className="w-full md:w-20 bg-[#1C2241] flex flex-row md:flex-col justify-around md:justify-start items-center py-4 md:py-10 rounded-b-4xl md:rounded-r-[3rem] shadow-lg">
        <SidebarIcon src={IconStats} alt="Statistiques" label="Démographie et population" />
        <SidebarIcon src={IconHospital} alt="Structures de santé" label="Structure Sanitaires (hôpitaux publics)" />
        <SidebarIcon src={IconHeart} alt="Couverture santé" label="Couverture santé" />
        <SidebarIcon src={IconWorld} alt="Santé mondiale" label="Recommandations OMS" />
      </div>

      {/* Contenu principal */}
      <div className="flex-1 p-4 md:p-8">
        {/* En-tête */}
        <div className="w-full max-w-7xl mx-auto mb-6">
          <div className="bg-white px-4 py-3 md:px-6 md:py-4 rounded-xl shadow text-sm md:text-lg font-semibold text-[#1C2241] text-center">
            Planification : vers une meilleure couverture sanitaire au Sénégal – État des lieux & perspectives 2030
          </div>
        </div>

        {/* Section principale */}
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start max-w-7xl mx-auto">
          {/* Illustration */}
          <div className="w-48 md:w-80 flex-shrink-0">
            <img
              src={DoctorIllustration}
              alt="Docteure"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Contenu à droite */}
          <div className="flex-1 w-full">
            {/* Petits blocs colorés */}
            <div className="flex flex-wrap justify-between gap-4 mb-6">
              <BoxBorder color="green" />
              <BoxBorder color="yellow" />
              <BoxBorder color="red" />
            </div>

            {/* Grand bloc de contenu */}
            <div className="border-l-4 border-blue-500 w-full bg-white rounded-xl shadow-md p-6 md:p-8 min-h-[300px] md:min-h-[400px]">
              {/* Contenu à insérer ici */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
