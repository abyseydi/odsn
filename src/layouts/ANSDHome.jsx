// import React from "react";

// export default function ANSDHome() {
//   return (
//     <div className="bg-white text-[#1e1446] font-sans min-h-screen px-4 py-20">
//       <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
//         Politique Publique - ANSD
//       </h1>
//       <p className="max-w-4xl mx-auto text-center text-lg text-gray-700 mb-12">
//         Cette section met en lumière l'utilisation de la donnée dans l'élaboration, le suivi et l'évaluation des politiques publiques au Sénégal. À travers une approche centrée sur la donnée, l'ANSD permet une meilleure transparence et efficacité dans la prise de décision publique.
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {[1, 2, 3].map((el) => (
//           <div
//             key={el}
//             className="bg-[#eef8f5] rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300"
//           >
//             <h3 className="text-xl font-semibold mb-3">Projet {el}</h3>
//             <p className="text-sm text-gray-600">
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
//               consequatur laudantium molestias veritatis similique!
//             </p>
//           </div>
//         ))}
//       </div>

//       <div className="text-center mt-12">
//         <a
//           href="/tableaux/politique-publique"
//           className="inline-block bg-[#1e1446] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#0f0a2b] transition"
//         >
//           Voir les Tableaux de Suivi
//         </a>
//       </div>
//     </div>
//   );
// }


// import { Routes, Route } from "react-router-dom";
// import { Cog6ToothIcon } from "@heroicons/react/24/solid";
// import { IconButton } from "@material-tailwind/react";

// import {
//   Sidenav,
//   DashboardNavbar,
//   Configurator,
//   Footer,
// } from "@/widgets/layout";
// import routes from "@/routes";
// import { useMaterialTailwindController, setOpenConfigurator } from "@/context";

// export function ANSDHome() {
//   const [controller, dispatch] = useMaterialTailwindController();
//   const { sidenavType } = controller;

//   return (
//     <div className="min-h-screen bg-blue-gray-50/50">
//       <Sidenav
//         routes={routes}
//         brandImg={
//           sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct-dark.png"
//         }
//       />
//       <div className="p-4 xl:ml-80">
//         <DashboardNavbar />
//         <Configurator />
//         <IconButton
//           size="lg"
//           color="white"
//           className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
//           ripple={false}
//           onClick={() => setOpenConfigurator(dispatch, true)}
//         >
//           <Cog6ToothIcon className="h-5 w-5" />
//         </IconButton>
//         <Routes>
//           {routes.map(
//             ({ layout, pages }) =>
//               layout === "dashboard" &&
//               pages.map(({ path, element }) => (
//                 <Route exact path={path} element={element} key={path} />
//               ))
//           )}
//         </Routes>
//         <div className="text-blue-gray-600">
//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// }

// ANSDHome.displayName = "/src/layouts/ANSDHome.jsx";

// export default ANSDHome;
import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  IconButton,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import {
  useMaterialTailwindController,
  setOpenConfigurator,
} from "@/context";

export function ANSDHome() {
  const [controller, dispatch] = useMaterialTailwindController();
  const [activeTab, setActiveTab] = useState("tableaux");

  const tabs = [
    {
      label: "Démographie et population",
      value: "tableaux",
      content: <div> Données Tableau</div>,
    },
    {
      label: "Couverture sanitaire",
      value: "indicateurs",
      content: <div> Indicateurs</div>,
    },
    {
      label: "Structures sanitaires",
      value: "rapports",
      content: <div> Rapports</div>,
    },
    {
      label: "Recommandations OMS",
      value: "professionnels",
      content: <div> Effectifs & répartition</div>,
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* FILTRES À GAUCHE */}
      <aside className="w-full lg:w-[18%] bg-[#1e1446] text-white p-6 flex flex-col justify-between shadow-lg">
        <div>
          <img src="/img/logo_accel.png" alt="Logo Accel" className="h-14 mb-4" />
          <h2 className="text-lg font-semibold mb-6">Filtres</h2>
          <div className="space-y-6">
            <Select label="Année" className="text-black bg-white rounded">
              <Option>2020</Option>
              <Option>2021</Option>
              <Option>2022</Option>
              <Option>2023</Option>
            </Select>
            <Select label="Région" className="text-black bg-white rounded">
              <Option>Dakar</Option>
              <Option>Thiès</Option>
              <Option>Kaolack</Option>
              <Option>Tamba</Option>
            </Select>
            <Input label="Mot-clé" className="text-black bg-white rounded" />
            <button className="w-full mt-2 bg-[#e30613] hover:bg-red-800 text-white py-2 rounded-lg font-semibold transition">
              Appliquer
            </button>
          </div>
        </div>
        <p className="text-xs text-gray-300 mt-10">© Accel Technologies</p>
      </aside>

      {/* CONTENU PRINCIPAL */}
      <main className="flex-1 flex flex-col">
        {/* HEADER */}
        <div className="flex justify-between items-center bg-white shadow px-6 py-4">
          <h1 className="text-xl md:text-2xl font-bold text-[#1e1446] max-w-5xl leading-tight">
            ANSD – Application de planification : Vers une meilleure couverture sanitaire au Sénégal – État des lieux & perspectives à l’horizon 2030
          </h1>
          <IconButton
            size="lg"
            color="white"
            className="rounded-full shadow-md"
            ripple={false}
            onClick={() => setOpenConfigurator(dispatch, true)}
          >
            <Cog6ToothIcon className="h-5 w-5 text-blue-gray-600" />
          </IconButton>
        </div>

        {/* TABS */}
        <div className="flex-1 p-6 overflow-auto">
          <Tabs value={activeTab}>
            <TabsHeader
              className="bg-white shadow rounded-xl mb-6"
              indicatorProps={{
                className: "bg-[#1e1446] text-white shadow-md",
              }}
            >
              {tabs.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => setActiveTab(value)}
                  className={`h-14 py-3 text-lg ${
                    activeTab === value ? "text-white" : "text-[#1e1446]"
                  }`}
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>

            <TabsBody>
              {tabs.map(({ value, content }) => (
                <TabPanel
                  key={value}
                  value={value}
                  className="bg-white p-6 rounded-xl shadow"
                >
                  {content}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
      </main>
    </div>
  );
}

export default ANSDHome;
