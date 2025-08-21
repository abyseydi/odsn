import React, { useEffect, useState, useMemo } from "react";
import {
  LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from "recharts";

const API_BASE_URL = window.location.hostname === 'localhost' 
  ? '${API_BASE_URL}' 
  : 'https://odsnback-ansd-app.apps.origins.heritage.africa/api';

export function ANSDHome() {
  const [activeTab, setActiveTab] = useState("tableaux");
  const [region, setRegion] = useState("DAKAR");
  const [regions, setRegions] = useState([]);
  const [populationData, setPopulationData] = useState([]); 
  const [couvertureData, setCouvertureData] = useState([]); 
  const [regionalPopulationBreakdown, setRegionalPopulationBreakdown] = useState([]);
  const  [couvertureRegion, setCouvertureRegion] = useState([]);

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    fetch(`${API_BASE_URL}/regions`)
      .then(res => res.json())
      .then(data => setRegions(["ALL", ...data]))
      .catch(err => console.error("Erreur chargement des régions :", err));
  }, []);

  useEffect(() => {
    const url =
      region === "ALL"
        ? `${API_BASE_URL}/population`
        : `${API_BASE_URL}/population?region=${encodeURIComponent(region)}`;

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

  // Charge les données de couverture sanitaire
  useEffect(() => {
    const url =
      region === "ALL"
        ? `${API_BASE_URL}/couverture`
        : `${API_BASE_URL}/couverture?region=${encodeURIComponent(region)}`;

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


 // Couverture par région

  useEffect(() => {
    // const url =
    //     region === "ALL"
    //         ? "http://localhost:5000/api/couverture/by_region"
    //         : `http://localhost:5000/api/couverture/by_region?region=${encodeURIComponent(region)}`;

    const url = `${API_BASE_URL}/couverture/by_region`

    fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log("couvertureRegion",data);
          const parsed = data.map(d => ({
            //year: d.annee.toString(),
            nb_str: d.nb_str,
            couv_san: d.couv_san,
            norm_oms: d.norm_oms,
            ajouter: d.ajouter,
            region: d.region
          }));
          setCouvertureRegion(parsed);


        })
        .catch(err => console.error("Erreur de chargement des données couverture :", err));
  }, []);



  // Charge les données de population par région pour le tableau de répartition
  useEffect(() => {
    // Cette partie ne s'exécute que si "Tout le Sénégal" est sélectionné
    if (region === "ALL" && regions.length > 1) { // regions.length > 1 pour s'assurer que les régions sont chargées
      const fetchRegionalData = async () => {
        const latestYear = populationData.length > 0 ? populationData.at(-1).year : null;
        if (!latestYear) return;

        const breakdown = [];
        // Filtrer "ALL" de la liste des régions pour les requêtes individuelles
        const individualRegions = regions.filter(r => r !== "ALL");

        for (const r of individualRegions) {
          try {
            const res = await fetch(`${API_BASE_URL}/population?region=${encodeURIComponent(r)}`);
            const data = await res.json();
            // Trouver la population pour la dernière année dans les données de cette région
            const latestRegionalPop = data.find(d => d.annee.toString() === latestYear);
            if (latestRegionalPop) {
              breakdown.push({
                region: r,
                population: latestRegionalPop.pop_value,
              });
            }
          } catch (err) {
            console.error(`Erreur de chargement des données pour la région ${r}:`, err);
          }
        }
        setRegionalPopulationBreakdown(breakdown.sort((a, b) => b.population - a.population)); // Tri par population décroissante
      };
      fetchRegionalData();
    } else {
      setRegionalPopulationBreakdown([]); 
    }
  }, [region, regions, populationData]); 

  // --- Calcul des KPIs ---
  const kpi = useMemo(() => {
    const latestPopulation = populationData.length ? populationData.at(-1).population : 0;
    const population2030 = populationData.find(d => d.year === "2030")?.population || 0;
    const population_current_year = populationData.find(d => d.year === currentYear.toString())?.population ;

    // Taux de croissance annuelle moyeene (Structure Sanitaire)

    let structGrowthrate = 0;
    if (couvertureData.length >= 2) {
      const current_year_nbre_struct = couvertureData.at(-1).nb_str;
      const previous_year_nbre_struct = couvertureData.at(-2).nb_str;
      if (previous_year_nbre_struct > 0) {
        structGrowthrate = ((current_year_nbre_struct - previous_year_nbre_struct) / previous_year_nbre_struct) * 100;
      }
    }

    // Taux de croissance annuelle moyeene (Couverture Sanitaire)

    let couvGrowthrate = 0;
    if (couvertureData.length >= 2) {
      const current_year_couv = couvertureData.at(-1).couv_san;
      const previous_year_couv = couvertureData.at(-2).couv_san;
      if (previous_year_couv > 0) {
        couvGrowthrate = ((current_year_couv - previous_year_couv) / previous_year_couv) * 100;
      }
    }


//
    let growthRate = 0;
    if (populationData.length >= 2) {
      const currentYearPop = populationData.at(-1).population;
      const previousYearPop = populationData.at(-2).population;
      if (previousYearPop > 0) {
        growthRate = ((currentYearPop - previousYearPop) / previousYearPop) * 100;
      }
    }




    const nbStructures = couvertureData.length ? couvertureData.at(-1).nb_str : 0;
    const couvertureSan = couvertureData.length ? couvertureData.at(-1).couv_san : 0;
    const normOms = couvertureData.length ? couvertureData.at(-1).norm_oms : 0;
    const ajouter = couvertureData.length ? couvertureData.at(-1).ajouter : 0;
    const nbre_structure_current= couvertureData.find(d => d.year === currentYear.toString())?.nb_str;
    const couverture_current = couvertureData.find(d => d.year === currentYear.toString())?.couv_san ;


    return {
      population: latestPopulation,
      population2030: population2030,
      growthRate: growthRate,
      nb_structures: nbStructures,
      couverture: couvertureSan,
      norme_oms: normOms,
      ajouter: ajouter,
      population_current_year: population_current_year,
      nbre_structure_current: nbre_structure_current,
      couverture_current: couverture_current,
      structGrowthrate: Number(structGrowthrate.toFixed(3)),
      couvGrowthrate: Number(couvGrowthrate.toFixed(3))

    };
  }, [populationData, couvertureData]);

  const tabs = [
    {
      label: "Démographie et population",
      value: "tableaux",
      content: (
        <div className="flex flex-col lg:flex-row gap-6 h-[600px]">
          {/* Graphique de population */}
          <div className="flex-1 min-h-[300px] lg:min-h-full">
            <h3 className="text-lg font-semibold text-[#1e1446] mb-2">
              Démographie et population : évolution au Sénégal de {populationData[0]?.year || 'N/A'} à {populationData.at(-1)?.year || 'N/A'}, avec projections jusqu’en 2030
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

          {/* Tableau de répartition par région */}
          {region === "ALL" && regionalPopulationBreakdown.length > 0 && (
            <div className="w-full lg:w-1/3 min-h-[300px] lg:min-h-full overflow-y-auto bg-white p-4 rounded-xl shadow">
              <h3 className="text-lg font-semibold text-[#1e1446] mb-2">
                Répartition de la population par région ({populationData.length ? populationData.at(-1).year : 'N/A'})
              </h3>
              <table className="min-w-full text-sm text-left border border-gray-300 rounded">
                <thead className="bg-[#f3f4f6] text-gray-700 font-medium sticky top-0">
                  <tr>
                    <th className="px-4 py-2 border">Région</th>
                    <th className="px-4 py-2 border text-right">Population</th>
                  </tr>
                </thead>
                <tbody>
                  {regionalPopulationBreakdown.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-4 py-2 border">{row.region}</td>
                      <td className="px-4 py-2 border text-right">{row.population.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ),
    },
    {
      label: "Structures sanitaires (hôpitaux publics)",
      value: "indicateurs",
      content: (

          <div className="flex flex-col lg:flex-row gap-6 h-[600px]">
            <div className="flex-1 min-h-[300px] lg:min-h-full">
          <h3 className="text-lg font-semibold text-[#1e1446] mb-2">
            Évolution du nombre de structures sanitaires au Sénégal : 2018–2025 et perspectives jusqu’en 2030
          </h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={couvertureData}>
              <CartesianGrid strokeDasharray="33" />
              <XAxis dataKey="year" />
              <YAxis yAxisId="left" label={{ value: "Structures", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) =>
                name === "nb_str" ? [`${value} structures`, "Structures"] : [`${value}%`, "Couverture"]
              } />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="nb_str"
                stroke="#e84041"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>


            {region === "ALL" && couvertureData.length > 0 && (
                <div className="w-full lg:w-1/3 min-h-[300px] lg:min-h-full overflow-y-auto bg-white p-4 rounded-xl shadow">
                  <h3 className="text-lg font-semibold text-[#1e1446] mb-2">
                    Structures Sanitaires ({populationData.length ? populationData.at(-1).year : 'N/A'})
                  </h3>
                  <table className="min-w-full text-sm text-left border border-gray-300 rounded">
                    <thead className="bg-[#f3f4f6] text-gray-700 font-medium sticky top-0">
                    <tr>
                      <th className="px-4 py-2 border">Région</th>
                      <th className="px-4 py-2 border text-right">Structures</th>
                    </tr>
                    </thead>
                    <tbody>
                    {couvertureRegion.map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                          <td className="px-4 py-2 border">{row.region}</td>
                          <td className="px-4 py-2 border text-right">{row.nb_str.toLocaleString()}</td>
                        </tr>
                    ))}
                    </tbody>
                  </table>
                </div>
            )}


          </div>


      ),
    },
    {
      label: "Couverture sanitaire",
      value: "rapports",
      content: (
        //<div className="h-[600px]">
          <div className="flex flex-col lg:flex-row gap-6 h-[600px]">
            <div className="flex-1 min-h-[300px] lg:min-h-full">
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


            {region === "ALL" && couvertureData.length > 0 && (
                <div className="w-full lg:w-1/3 min-h-[300px] lg:min-h-full overflow-y-auto bg-white p-4 rounded-xl shadow">
                  <h3 className="text-lg font-semibold text-[#1e1446] mb-2">
                    Structures Sanitaires ({populationData.length ? populationData.at(-1).year : 'N/A'})
                  </h3>
                  <table className="min-w-full text-sm text-left border border-gray-300 rounded">
                    <thead className="bg-[#f3f4f6] text-gray-700 font-medium sticky top-0">
                    <tr>
                      <th className="px-4 py-2 border">Région</th>
                      <th className="px-4 py-2 border text-right">Couverture</th>
                    </tr>
                    </thead>
                    <tbody>
                    {couvertureRegion.map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                          <td className="px-4 py-2 border">{row.region}</td>
                          <td className="px-4 py-2 border text-right">{row.couv_san.toLocaleString()}</td>
                        </tr>
                    ))}
                    </tbody>
                  </table>
                </div>
            )}

          </div>

      ),
    },
    {
      label: "Recommandations OMS",
      value: "professionnels",
      content: (() => {
        const filteredData = couvertureData.filter((row) => row.year >= 2025 && row.year <= 2030);

        return (
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
                <LineChart data={filteredData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis label={{ value: "Norme OMS (structures)", angle: -90, position: "insideLeft" }} />
                  <Tooltip formatter={(value) => `${value} structures / 10.000 hab`} />
                  <Line type="monotone" dataKey="norm_oms" stroke="#1e1446" strokeWidth={3} name="Norme OMS" />
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
                  {filteredData
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
        );
      })(),
    }
  ];

  const renderKpiCards = () => {
    switch (activeTab) {
      case "tableaux": // Démographie et population
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h4 className="text-sm font-medium text-gray-600">Année Courante ({currentYear})</h4>
              <p className="text-2xl font-bold text-[#1e1446]">
                {/*{kpi.population.toLocaleString()} hab*/}

                {kpi.population_current_year} hab
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h4 className="text-sm font-medium text-gray-600">Population (2030)</h4>
              <p className="text-2xl font-bold text-[#1e1446]">
                {kpi.population2030 ? kpi.population2030.toLocaleString() + ' hab' : 'N/A'}
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h4 className="text-sm font-medium text-gray-600">Taux de croissance annuelle moyenne</h4>
              <p className="text-2xl font-bold text-[#1e1446]">
                {kpi.growthRate.toFixed(2)} %
              </p>
            </div>
          </div>
        );
      case "indicateurs": // Structures sanitaires (hôpitaux publics)
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h4 className="text-sm font-medium text-gray-600">Structures Sanitaires(Année Courante)</h4>
              <p className="text-2xl font-bold text-[#1e1446]">
                {kpi.nbre_structure_current}
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h4 className="text-sm font-medium text-gray-600">Structures Sanitaires(2030)</h4>
              <p className="text-2xl font-bold text-[#1e1446]">
                {kpi.nb_structures}
              </p>
            </div>


            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h4 className="text-sm font-medium text-gray-600">Taux de croissance annuelle moyenne</h4>
              <p className="text-2xl font-bold text-[#1e1446]">
                 {kpi.structGrowthrate} %
              </p>
            </div>
          </div>
        );
      case "rapports": // Couverture sanitaire
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h4 className="text-sm font-medium text-gray-600">Couverture Sanitaire(Année Courante)</h4>
              <p className="text-2xl font-bold text-[#1e1446]">
                {kpi.couverture_current}
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h4 className="text-sm font-medium text-gray-600">Couverture Sanitaire(2030)</h4>
              <p className="text-2xl font-bold text-[#1e1446]">
                {kpi.couverture}
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h4 className="text-sm font-medium text-gray-600">Taux de croissance annuelle moyenne(2030)</h4>
              <p className="text-2xl font-bold text-[#1e1446]">
                {kpi.couvGrowthrate} %
              </p>
            </div>
          </div>
        );
      case "professionnels": // Recommandations OMS
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h4 className="text-sm font-medium text-gray-600">Norme OMS</h4>
              <p className="text-2xl font-bold text-[#1e1446]">
                {Math.round(kpi.norme_oms)}
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h4 className="text-sm font-medium text-gray-600">À ajouter (structures)</h4>
              <p className="text-2xl font-bold text-[#1e1446] text-red-600">
                {Math.round(kpi.ajouter)}
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full lg:w-[18%] bg-[#1e1446] text-white p-6 flex flex-col justify-between shadow-lg">
        <div>
          {/* Replaced Link from react-router-dom with a simple div for logo */}
          <div className="cursor-pointer">
            <img src="/img/accel_logo_light.png" alt="Logo Accel" className="h-14 mb-4" />
          </div>
          <h2 className="text-lg font-semibold mb-6">Régions</h2>
          <div className="space-y-6">
            {/* Replaced Material Tailwind Select with standard HTML select */}
            <div className="relative w-full min-w-[200px] h-10">
              <select
                className="peer w-full h-full bg-white text-gray-700 font-sans font-normal text-left outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              >
                {regions.map((r) => (
                  <option key={r} value={r}>
                    {r === "ALL" ? "Tout le Sénégal" : r}
                  </option>
                ))}
              </select>
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t peer-focus:before:border-l peer-focus:before:border-blue-500 before:pointer-events-none before:transition-all after:content[' '] after:block after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t peer-focus:after:border-r peer-focus:after:border-blue-500 after:pointer-events-none after:transition-all !text-blue-gray-400 peer-focus:text-blue-500">

              </label>
            </div>
          </div>
        </div>

     <div className="flex flex-col items-center mt-auto space-y-4">
    <a
      href="/" 
      className="px-5 py-2 rounded-lg bg-white text-[#1e1446] font-semibold text-sm shadow hover:bg-gray-100 transition-all"
    >
      Retour à l’accueil
    </a>
    <p className="text-xs text-gray-300">© Accel Technologies</p>
  </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center bg-white shadow px-6 py-4">
          <h1 className="text-xl md:text-2xl font-bold text-[#1e1446] max-w-5xl leading-tight">
            ANSD – Planification : vers une meilleure couverture sanitaire au Sénégal – État des lieux & perspectives 2030
          </h1>
   
        </div>

        {/* Main content area with KPIs and Tabs */}
        <div className="flex-1 p-6 overflow-auto">
          {/* KPI Cards - Rendu dynamique basé sur le tab actif */}
          {renderKpiCards()}

          {/* Replaced Material Tailwind Tabs with standard HTML div elements */}
          <div className="bg-white shadow rounded-xl mb-6">
            <div className="flex items-center justify-start p-1 rounded-xl bg-gray-100">
              {tabs.map(({ label, value }) => (
                <button
                  key={value}
                  className={`flex-1 h-14 py-3 text-lg rounded-lg transition-colors duration-300
                    ${activeTab === value ? "bg-[#1e1446] text-white shadow-md" : "text-[#1e1446] hover:bg-gray-200"}`}
                  onClick={() => setActiveTab(value)}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="p-6">
              {tabs.map(({ value, content }) => (
                <div key={value} className={`${activeTab === value ? "" : "hidden"}`}>
                  {content}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ANSDHome;
