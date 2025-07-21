
import { Link } from "react-router-dom";
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
  const [region, setRegion] = useState("DAKAR"); 
  const [regions, setRegions] = useState([]);
  const [populationData, setPopulationData] = useState([]);
  const [couvertureData, setCouvertureData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/regions")
      .then(res => res.json())
      .then(data => setRegions(["ALL", ...data]))
      .catch(err => console.error("Erreur chargement des régions :", err));
  }, []);

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
          norm_oms: d.norm_oms,
          ajouter: d.ajouter,
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
          <h3 className="text-lg font-semibold text-[#1e1446] mb-2">
            Démographie et population : évolution au Sénégal de 2012 à 2025, avec projections jusqu’en 2030
          </h3>
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
                dot={false}
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
          <h3 className="text-lg font-semibold text-[#1e1446] mb-2">
            Évolution du nombre de structures sanitaires au Sénégal : 2018–2025 et perspectives jusqu’en 2030
          </h3>
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
      content: (
        <div className="h-[600px]">
          <h3 className="text-lg font-semibold text-[#1e1446] mb-2">
            Couverture sanitaires : tendances de 2018 à 2025 et projections à l’horizon 2030
          </h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={couvertureData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis domain={[0, 100]} label={{ value: "Couverture sanitaire", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value) => [`${value}`, "Couverture"]} />
              <Line type="monotone" dataKey="couv_san" stroke="#3182ce" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      ),
    },
    {
      label: "Recommandations OMS",
      value: "professionnels",
      content: (
        <div className="h-[600px] flex flex-col gap-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-[#1e1446] mb-1">
              Normes de couverture sanitaire : recommandations de l’OMS à atteindre à partir de 2025
            </h3>
            <p className="text-sm text-[#1e1446]">
              Méthode : Recommandation OMS = 1 hôpital pour 150 000 habitants
            </p>
          </div>

          <div className="h-[60%]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={couvertureData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis label={{ value: "Norme OMS (structures)", angle: -90, position: "insideLeft" }} />
                <Tooltip formatter={(value) => `${value} structures / 10.000 hab`} />
                <Line type="monotone" dataKey="norm_oms" stroke="#d97706" strokeWidth={3} name="Norme OMS" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="overflow-x-auto max-h-[35%]">
            <table className="min-w-full text-sm text-left border border-gray-300 rounded">
              <thead className="bg-[#f3f4f6] text-gray-700 font-medium sticky top-0">
                <tr>
                  <th className="px-4 py-2 border">Année</th>
                  <th className="px-4 py-2 border">Norme OMS</th>
                  <th className="px-4 py-2 border">Structures existantes</th>
                  <th className="px-4 py-2 border">À ajouter</th>
                </tr>
              </thead>
           
                  <tbody>
          {couvertureData
            .filter(
              (row) =>
                row.norm_oms !== null &&
                row.nb_str !== null &&
                row.ajouter !== null &&
                (row.norm_oms !== 0 || row.nb_str !== 0 || row.ajouter !== 0)
            )
            .map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-4 py-2 border text-center">{row.year}</td>
                <td className="px-4 py-2 border text-center">{Math.round(row.norm_oms)}</td>
                <td className="px-4 py-2 border text-center">{Math.round(row.nb_str)}</td>
                <td className="px-4 py-2 border text-center text-red-600 font-semibold">
                  {Math.round(row.ajouter)}
                </td>
              </tr>
            ))}
        </tbody>
            </table>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-full lg:w-[18%] bg-[#1e1446] text-white p-6 flex flex-col justify-between shadow-lg">
        <div>
          <Link to="/">
            <img src="/img/logo_accel.png" alt="Logo Accel" className="h-14 mb-4 cursor-pointer" />
          </Link>
          <h2 className="text-lg font-semibold mb-6">Régions</h2>
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

      <main className="flex-1 flex flex-col">
        <div className="flex justify-between items-center bg-white shadow px-6 py-4">
          <h1 className="text-xl md:text-2xl font-bold text-[#1e1446] max-w-5xl leading-tight">
            ANSD – Planification : vers une meilleure couverture sanitaire au Sénégal – État des lieux & perspectives 2030
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
              indicatorProps={{ className: "bg-[#1e1446] text-white shadow-md" }}
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
                <TabPanel key={value} value={value} className="bg-white p-6 rounded-xl shadow">
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
