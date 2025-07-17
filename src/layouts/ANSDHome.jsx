

// import React, { useEffect, useState } from "react";
// import {
//   Tabs, TabsHeader, TabsBody, Tab, TabPanel,
//   IconButton, Select, Option
// } from "@material-tailwind/react";
// import { Cog6ToothIcon } from "@heroicons/react/24/solid";
// import {
//   useMaterialTailwindController,
//   setOpenConfigurator,
// } from "@/context";
// import {
//   LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer,
// } from "recharts";

// export function ANSDHome() {
//   const [controller, dispatch] = useMaterialTailwindController();
//   const [activeTab, setActiveTab] = useState("tableaux");
//   const [region, setRegion] = useState("ALL"); // par défaut tout le Sénégal
//   const [regions, setRegions] = useState([]);
//   const [populationData, setPopulationData] = useState([]);

//   // Charger toutes les régions dynamiquement
//   useEffect(() => {
//     fetch("http://localhost:5000/api/regions")
//       .then(res => res.json())
//       .then(data => setRegions(["ALL", ...data])) // Ajouter option ALL
//       .catch(err => console.error("Erreur chargement des régions :", err));
//   }, []);

//   // Charger les données en fonction de la région sélectionnée
//   useEffect(() => {
//     const url =
//       region === "ALL"
//         ? "http://localhost:5000/api/population"
//         : `http://localhost:5000/api/population?region=${encodeURIComponent(region)}`;

//     fetch(url)
//       .then(res => res.json())
//       .then(data => {
//         const parsed = data.map(d => ({
//           year: d.annee.toString(),
//           population: d.pop_value,
//         }));
//         setPopulationData(parsed);
//       })
//       .catch(err => console.error("Erreur de chargement des données :", err));
//   }, [region]);

//   const tabs = [
//     {
//       label: "Démographie et population",
//       value: "tableaux",
//       content: (
//         <div className="h-[600px]">
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart data={populationData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="year" />
//               <YAxis tickFormatter={(value) => `${(value / 1_000_000).toFixed(1)}M`} />
//               <Tooltip formatter={(value) => `${value.toLocaleString()} hab`} />
//               <Line
//                 type="monotone"
//                 dataKey="population"
//                 stroke="#1e1446"
//                 strokeWidth={3}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       ),
//     },
//     {
//       label: "Couverture sanitaire",
//       value: "indicateurs",
//       content: <div>📈 Indicateurs</div>,
//     },
//     {
//       label: "Structures sanitaires",
//       value: "rapports",
//       content: <div>🏥 Rapports</div>,
//     },
//     {
//       label: "Recommandations OMS",
//       value: "professionnels",
//       content: <div>🩺 Effectifs & répartition</div>,
//     },
//   ];

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* FILTRES À GAUCHE */}
//       <aside className="w-full lg:w-[18%] bg-[#1e1446] text-white p-6 flex flex-col justify-between shadow-lg">
//         <div>
//           <img src="/img/logo_accel.png" alt="Logo Accel" className="h-14 mb-4" />
//           <h2 className="text-lg font-semibold mb-6">Filtres</h2>
//           <div className="space-y-6">
//             <Select
//               label="Région"
//               className="text-black bg-white rounded"
//               value={region}
//               onChange={setRegion}
//             >
//               {regions.map((r) => (
//                 <Option key={r} value={r}>
//                   {r === "ALL" ? "Tout le Sénégal" : r}
//                 </Option>
//               ))}
//             </Select>
//           </div>
//         </div>
//         <p className="text-xs text-gray-300 mt-10">© Accel Technologies</p>
//       </aside>

//       {/* CONTENU PRINCIPAL */}
//       <main className="flex-1 flex flex-col">
//         <div className="flex justify-between items-center bg-white shadow px-6 py-4">
//           <h1 className="text-xl md:text-2xl font-bold text-[#1e1446] max-w-5xl leading-tight">
//             ANSD – Vers une meilleure couverture sanitaire au Sénégal – État des lieux & perspectives 2030
//           </h1>
//           <IconButton
//             size="lg"
//             color="white"
//             className="rounded-full shadow-md"
//             ripple={false}
//             onClick={() => setOpenConfigurator(dispatch, true)}
//           >
//             <Cog6ToothIcon className="h-5 w-5 text-blue-gray-600" />
//           </IconButton>
//         </div>

//         <div className="flex-1 p-6 overflow-auto">
//           <Tabs value={activeTab}>
//             <TabsHeader
//               className="bg-white shadow rounded-xl mb-6"
//               indicatorProps={{
//                 className: "bg-[#1e1446] text-white shadow-md",
//               }}
//             >
//               {tabs.map(({ label, value }) => (
//                 <Tab
//                   key={value}
//                   value={value}
//                   onClick={() => setActiveTab(value)}
//                   className={`h-14 py-3 text-lg ${activeTab === value ? "text-white" : "text-[#1e1446]"}`}
//                 >
//                   {label}
//                 </Tab>
//               ))}
//             </TabsHeader>

//             <TabsBody>
//               {tabs.map(({ value, content }) => (
//                 <TabPanel
//                   key={value}
//                   value={value}
//                   className="bg-white p-6 rounded-xl shadow"
//                 >
//                   {content}
//                 </TabPanel>
//               ))}
//             </TabsBody>
//           </Tabs>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default ANSDHome;




import React, { useEffect, useState } from "react";
import {
  Tabs, TabsHeader, TabsBody, Tab, TabPanel,
  IconButton, Select, Option
} from "@material-tailwind/react";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import {
  useMaterialTailwindController,
  setOpenConfigurator,
} from "@/context";
import {
  LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from "recharts";

export function ANSDHome() {
  const [controller, dispatch] = useMaterialTailwindController();
  const [activeTab, setActiveTab] = useState("tableaux");
  const [region, setRegion] = useState("ALL");
  const [regions, setRegions] = useState([]);
  const [populationData, setPopulationData] = useState([]);
  const [couvertureData, setCouvertureData] = useState([]);

  // Charger toutes les régions dynamiquement
  useEffect(() => {
    fetch("http://localhost:5000/api/regions")
      .then(res => res.json())
      .then(data => setRegions(["ALL", ...data]))
      .catch(err => console.error("Erreur chargement des régions :", err));
  }, []);

  // Charger les données population
  useEffect(() => {
    const url =
      region === "ALL"
        ? "http://localhost:5000/api/population"
        : `http://localhost:5000/api/population?region=${encodeURIComponent(region)}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        const parsed = data.map(d => ({
          year: d.annee.toString(),
          population: d.pop_value,
        }));
        setPopulationData(parsed);
      })
      .catch(err => console.error("Erreur de chargement des données population :", err));
  }, [region]);

  // Charger les données couverture sanitaire
  useEffect(() => {
    const url =
      region === "ALL"
        ? "http://localhost:5000/api/couverture"
        : `http://localhost:5000/api/couverture?region=${encodeURIComponent(region)}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        const parsed = data.map(d => ({
          year: d.annee.toString(),
          nb_str: d.nb_str,
          couv_san: d.couv_san,
        }));
        setCouvertureData(parsed);
      })
      .catch(err => console.error("Erreur de chargement des données couverture :", err));
  }, [region]);

  const tabs = [
    {
      label: "Démographie et population",
      value: "tableaux",
      content: (
        <div className="h-[600px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={populationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis tickFormatter={(value) => `${(value / 1_000_000).toFixed(1)}M`} />
              <Tooltip formatter={(value) => `${value.toLocaleString()} hab`} />
              <Line
                type="monotone"
                dataKey="population"
                stroke="#1e1446"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      ),
    },
    {
      label: "Structures sanitaires",
      value: "indicateurs",
      content: (
        <div className="h-[600px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={couvertureData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis yAxisId="left" label={{ value: "Structures", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) =>
                name === "nb_str" ? [`${value} structures`, "Structures"] : [`${value}%`, "Couverture"]
              } />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="nb_str"
                stroke="#2f855a"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      ),
    },
    {
      label: "Couverture sanitaire",
      value: "rapports",
      content: <div>🏥 Rapports</div>,
    },
    {
      label: "Recommandations OMS",
      value: "professionnels",
      content: <div>🩺 Effectifs & répartition</div>,
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
            <Select
              label="Région"
              className="text-black bg-white rounded"
              value={region}
              onChange={setRegion}
            >
              {regions.map((r) => (
                <Option key={r} value={r}>
                  {r === "ALL" ? "Tout le Sénégal" : r}
                </Option>
              ))}
            </Select>
          </div>
        </div>
        <p className="text-xs text-gray-300 mt-10">© Accel Technologies</p>
      </aside>

      {/* CONTENU PRINCIPAL */}
      <main className="flex-1 flex flex-col">
        <div className="flex justify-between items-center bg-white shadow px-6 py-4">
          <h1 className="text-xl md:text-2xl font-bold text-[#1e1446] max-w-5xl leading-tight">
            ANSD – Vers une meilleure couverture sanitaire au Sénégal – État des lieux & perspectives 2030
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
                  className={`h-14 py-3 text-lg ${activeTab === value ? "text-white" : "text-[#1e1446]"}`}
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
