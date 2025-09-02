import Navbar from "@/components/realnavbar";
import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend
} from "recharts";

// Images - CHEMINS CORRIGÉS pour production
const IconStats = '/img/public.png';
const IconHospital = '/img/health-structure.png';
const IconHeart = '/img/healt_cover.png';
const IconWorld = '/img/world-health.png';
const DoctorIllustration = '/img/doctor.png';

// Configuration API - CORRIGÉE
const API_BASE_URL = window.location.hostname === 'localhost' 
  ? 'http://localhost:8000/api' // URL locale pour développement
  : 'https://odsnback-ansd-app.apps.origins.heritage.africa/api';

// Composant d'icône de la sidebar
const SidebarIcon = ({ src, alt, label, onClick }) => (
  <button
    className="group relative my-4 md:my-6 w-10 h-12 md:w-12 md:h-14 flex items-center justify-center focus:outline-none"
    onClick={onClick}
  >
    <img src={src} alt={alt} className="w-full h-full object-contain" />
    <span className="absolute left-full top-1/2 transform -translate-y-1/2 ml-3 whitespace-nowrap bg-white text-black text-2xl font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 shadow-md hidden md:block">
      {label}
    </span>
  </button>
);

// Composant pour les petites boîtes d'indicateurs
const BoxBorder = ({ color, label, value }) => {
  const colorMap = {
    green: 'border-green-600',
    yellow: 'border-yellow-400',
    red: 'border-red-500',
  };
  return (
    <div className={`flex flex-col items-center justify-center flex-1 min-w-[80px] h-20 md:h-32 bg-white rounded-lg md:rounded-xl border-l-4 ${colorMap[color]} shadow-md p-2`}>
      <span className="text-xs md:text-base font-bold text-gray-700">{label}</span>
      <span className="text-lg md:text-xl font-semibold text-[#1C2241]">{value}</span>
    </div>
  );
};

const DashboardPage = () => {
  const navigate = useNavigate();
  const [populationData, setPopulationData] = useState([]);
  const [structuresData, setStructuresData] = useState([]);
  const [coverageData, setCoverageData] = useState([]);
  const [regions, setRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [indicators, setIndicators] = useState({ current: 0, future: 0, growth: 0 });
  const [view, setView] = useState("population");

  // Chargement des régions depuis l'API
  useEffect(() => {
    fetch(`${API_BASE_URL}/regions`)
      .then(res => res.json())
      .then(data => setRegions(data))
      .catch(err => console.error("Erreur chargement des régions :", err));
  }, []);

  // Chargement des données de population depuis l'API
  useEffect(() => {
    const url = selectedRegion === "" || !selectedRegion
      ? `${API_BASE_URL}/population`
      : `${API_BASE_URL}/population?region=${encodeURIComponent(selectedRegion)}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        const parsed = data.map(d => ({
          annee: d.annee,
          pop_value: d.pop_value,
          region: d.region
        }));
        setPopulationData(parsed);
      })
      .catch(err => console.error("Erreur de chargement des données population :", err));
  }, [selectedRegion]);

  // Chargement des données de couverture depuis l'API
  useEffect(() => {
    const url = selectedRegion === "" || !selectedRegion
      ? `${API_BASE_URL}/couverture`
      : `${API_BASE_URL}/couverture?region=${encodeURIComponent(selectedRegion)}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        const parsed = data.map(d => ({
          annee: d.annee,
          nb_str: d.nb_str,
          couv_san: d.couv_san,
          norm_oms: d.norm_oms,
          ajouter: d.ajouter,
          region: d.region
        }));
        setStructuresData(parsed);
        setCoverageData(parsed);
      })
      .catch(err => console.error("Erreur de chargement des données couverture :", err));
  }, [selectedRegion]);

  // Choix des données selon la vue active
  const data = useMemo(() => {
    if (view === "population") return populationData;
    if (view === "structures") return structuresData;
    if (view === "coverage") return coverageData;
    if (view === "oms") return coverageData;
    return [];
  }, [view, populationData, structuresData, coverageData]);

  // Filtrage et agrégation selon la vue - LOGIQUE CORRIGÉE
  const filteredData = useMemo(() => {
    // Si une région est sélectionnée, les données sont déjà filtrées par l'API
    // Si aucune région n'est sélectionnée, on agrège toutes les données par année
    let relevantData = data;

    if (view === "population") {
      if (selectedRegion === "" || !selectedRegion) {
        // Agrégation par année pour toutes les régions
        const yearMap = {};
        relevantData.forEach(d => {
          if (!yearMap[d.annee]) yearMap[d.annee] = { annee: d.annee, pop_value: 0 };
          yearMap[d.annee].pop_value += d.pop_value;
        });
        return Object.values(yearMap);
      }
      return relevantData;
    }

    if (view === "structures" || view === "oms") {
      if (selectedRegion === "" || !selectedRegion) {
        // Agrégation par année pour toutes les régions
        const yearMap = {};
        relevantData.forEach(d => {
          if (!yearMap[d.annee]) yearMap[d.annee] = { annee: d.annee, nb_str: 0, norm_oms: 0, ajouter: 0 };
          yearMap[d.annee].nb_str += d.nb_str || 0;
          yearMap[d.annee].norm_oms += d.norm_oms || 0;
          yearMap[d.annee].ajouter += d.ajouter || 0;
        });
        return Object.values(yearMap);
      }
      return relevantData;
    }

    if (view === "coverage") {
      if (selectedRegion === "" || !selectedRegion) {
        // Agrégation par année pour toutes les régions
        const yearMap = {};
        relevantData.forEach(d => {
          if (!yearMap[d.annee]) yearMap[d.annee] = { annee: d.annee, couv_san: 0 };
          yearMap[d.annee].couv_san += Number(d.couv_san);
        });
        return Object.values(yearMap);
      }
      return relevantData;
    }

    return [];
  }, [data, selectedRegion, view]);

  const sortedData = useMemo(() => [...filteredData].sort((a, b) => a.annee - b.annee), [filteredData]);

  // Calcul des indicateurs
  useEffect(() => {
    if (!sortedData.length) return;
    const currentYear = 2025;
    const futureYear = 2030;

    if (view === "population" || view === "structures" || view === "coverage") {
      let currentValue = 0;
      let futureValue = 0;
      let growthRate = 0;

      if (view === "population") {
        const currentData = sortedData.find(d => d.annee === currentYear);
        const futureData = sortedData.find(d => d.annee === futureYear);
        const firstYear = sortedData[0]?.annee;
        const firstPop = sortedData[0]?.pop_value;
        const lastPop = futureData?.pop_value;
        currentValue = currentData?.pop_value || "N/A";
        futureValue = futureData?.pop_value || "N/A";
        if (firstYear && lastPop && firstPop) growthRate = (((lastPop / firstPop) ** (1 / (futureYear - firstYear))) - 1) * 100;
      }

      if (view === "structures") {
        const currentData = sortedData.find(d => d.annee === currentYear);
        const futureData = sortedData.find(d => d.annee === futureYear);
        const firstYear = sortedData[0]?.annee;
        const firstStr = sortedData[0]?.nb_str;
        const lastStr = futureData?.nb_str;
        currentValue = currentData?.nb_str || "N/A";
        futureValue = futureData?.nb_str || "N/A";
        if (firstYear && lastStr && firstStr) growthRate = (((lastStr / firstStr) ** (1 / (futureYear - firstYear))) - 1) * 100;
      }

      if (view === "coverage") {
        const currentData = sortedData.find(d => d.annee === currentYear);
        const futureData = sortedData.find(d => d.annee === futureYear);
        const firstYear = sortedData[0]?.annee;
        const firstCouv = Number(sortedData[0]?.couv_san);
        const lastCouv = Number(futureData?.couv_san);
        currentValue = currentData?.couv_san || "N/A";
        futureValue = futureData?.couv_san || "N/A";
        if (firstYear && lastCouv && firstCouv) growthRate = (((lastCouv / firstCouv) ** (1 / (futureYear - firstYear))) - 1) * 100;
      }

      setIndicators({ current: currentValue, future: futureValue, growth: growthRate ? growthRate.toFixed(2) + "%" : "N/A" });
    }

    if (view === "oms") {
      const futureData = sortedData.find(d => d.annee === futureYear);
      const normeOms = futureData?.norm_oms || "N/A";
      const ajouter = futureData?.ajouter || "N/A";
      const existant = futureData?.nb_str || 0;
      const manquant = normeOms !== "N/A" && existant !== "N/A" ? (normeOms - existant) : "N/A";
      setIndicators({ current: normeOms, future: ajouter, growth: manquant });
    }
  }, [sortedData, view]);

  // États pour les données par région
  const [regionalData, setRegionalData] = useState([]);

  // Chargement des données par région quand "Toutes les régions" est sélectionné
  useEffect(() => {
    if ((selectedRegion === "" || !selectedRegion) && regions.length > 0) {
      const fetchRegionalData = async () => {
        const breakdown = [];

        for (const r of regions) {
          try {
            // Charger les données de population pour cette région
            const popRes = await fetch(`${API_BASE_URL}/population?region=${encodeURIComponent(r)}`);
            const popData = await popRes.json();
            
            // Charger les données de couverture pour cette région
            const couvRes = await fetch(`${API_BASE_URL}/couverture?region=${encodeURIComponent(r)}`);
            const couvData = await couvRes.json();

            // Trouver les données pour 2030
            const pop2030 = popData.find(d => d.annee === 2030);
            const couv2030 = couvData.find(d => d.annee === 2030);

            if (pop2030 && couv2030) {
              breakdown.push({
                region: r,
                pop_value: pop2030.pop_value,
                nb_str: couv2030.nb_str,
                couv_san: couv2030.couv_san,
                norm_oms: couv2030.norm_oms
              });
            }
          } catch (err) {
            console.error(`Erreur de chargement des données pour la région ${r}:`, err);
          }
        }
        setRegionalData(breakdown);
      };
      fetchRegionalData();
    } else {
      setRegionalData([]);
    }
  }, [selectedRegion, regions]);

  // Données 2030 par région
  const data2030ByRegion = useMemo(() => {
    if (regionalData.length > 0) {
      if (view === "population") return regionalData.sort((a, b) => b.pop_value - a.pop_value);
      if (view === "structures") return regionalData.sort((a, b) => b.nb_str - a.nb_str);
      if (view === "coverage") return regionalData.sort((a, b) => Number(b.couv_san) - Number(a.couv_san));
      if (view === "oms") return regionalData.sort((a, b) => b.norm_oms - a.norm_oms);
    }
    
    // Fallback sur les données existantes
    const year2030 = data.filter(d => d.annee === 2030);
    if (view === "population") return year2030.sort((a, b) => b.pop_value - a.pop_value);
    if (view === "structures") return year2030.sort((a, b) => b.nb_str - a.nb_str);
    if (view === "coverage") return year2030.sort((a, b) => Number(b.couv_san) - Number(a.couv_san));
    if (view === "oms") return year2030.sort((a, b) => b.norm_oms - a.norm_oms);
    return [];
  }, [data, view, regionalData]);

  // Définition des plages et titres selon la vue
  const getChartConfig = () => {
    switch (view) {
      case "population":
        return { title: "Démographie et population : évolution au Sénégal de 2013 à 2030, avec projections jusqu'en 2030", xMin: 2013, xMax: 2030 };
      case "structures":
        return { title: "Évolution du nombre de structures sanitaires au Sénégal : 2018–2025 et perspectives jusqu'en 2030", xMin: 2020, xMax: 2030 };
      case "coverage":
        return { title: "Couverture sanitaires : tendances de 2018 à 2025 et projections à l'horizon 2030", xMin: 2020, xMax: 2030 };
      case "oms":
        return { title: "Normes de couverture sanitaire : recommandations de l'OMS à atteindre à partir de 2025", xMin: 2025, xMax: 2030 };
      default:
        return { title: "", xMin: 2013, xMax: 2030 };
    }
  };

  const { title: chartTitle, xMin, xMax } = getChartConfig();
   
  return (
    <div>
      <div>
      <Navbar />
    </div>
    <div className="pt-[90px] flex flex-col md:flex-row min-h-screen font-sans" style={{ backgroundImage: "url('/img/background.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Sidebar */}
      <div className="w-full md:w-20 bg-[#1C2241] flex flex-row md:flex-col justify-around md:justify-between items-center py-4 md:py-10 rounded-b-4xl md:rounded-r-[3rem] shadow-lg">
        {/* Section des icônes */}
        <div className="flex flex-row md:flex-col justify-around md:justify-center items-center flex-1">
          <SidebarIcon src={IconStats} alt="Statistiques" label="Démographie et population" onClick={() => setView("population")} />
          <SidebarIcon src={IconHospital} alt="Structures de santé" label="Structures Sanitaires" onClick={() => setView("structures")} />
          <SidebarIcon src={IconHeart} alt="Couverture santé" label="Couverture santé" onClick={() => setView("coverage")} />
          <SidebarIcon src={IconWorld} alt="Santé mondiale" label="Recommandations OMS" onClick={() => setView("oms")} />
        </div>

        {/* Logo et bouton de retour - uniquement visible sur desktop */}
        {/* <div className="hidden md:flex flex-col items-center mt-auto space-y-4">
          <img
            src="/img/accel_logo_light.png"
            alt="Logo Accel"
            className="h-12"
          />
          <button
            onClick={() => navigate("/")}
            className="px-3 py-2 rounded-lg bg-white text-[#1C2241] font-semibold text-xs shadow hover:bg-gray-100 transition-all text-center"
          >
            Retour à l'accueil
          </button>
          <p className="text-xs text-gray-300">© Accel Technologies</p>
        </div> */}
      </div>
            {/* Contenu principal */}
      <div className="flex-1 p-4 md:p-8">
        <div className="w-full max-w-7xl mx-auto mb-6">
          <div className="bg-white px-4 py-3 md:px-6 md:py-4 rounded-xl shadow text-3xl font-semibold text-[#1C2241] text-center">
            {view === "population" && "Planification : vers une meilleure couverture sanitaire au Sénégal."}
            {view === "structures" && "Évolution des Structures Sanitaires au Sénégal"}
            {view === "coverage" && "Évolution de la Couverture Sanitaire au Sénégal"}
            {view === "oms" && "Évolution des Recommandations OMS pour le Sénégal"}
            <p>État des lieux & perspectives</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start max-w-7xl mx-auto">
          {/* Filtre des régions */}
          <div className="w-48 md:w-80 flex-shrink-0 mt-1 -ml-12">
            <div className="w-full md:w-80 mt-10">
              <select
                value={selectedRegion}
                onChange={e => setSelectedRegion(e.target.value)}
                className="w-full p-2 rounded-lg bg-white text-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Toutes les régions</option>
                {regions.map((r, i) => <option key={i} value={r}>{r}</option>)}
              </select>
            </div>
            <img src={DoctorIllustration} alt="Docteure" className="w-full h-full object-contain" />
          </div>

          {/* Contenu droit */}
          <div className="flex-1 w-full mt-10">
            {/* Boîtes d'indicateurs */}
            <div className="flex flex-wrap justify-between gap-4 mb-6">
              {view !== "oms" ? (
                <>
                  <BoxBorder color="green" label={
                    view === "population" ? "Année courante (2025) [hab]" :
                      view === "structures" ? "Structures Sanitaires (Année Courante)" :
                        "Couverture Sanitaire (Année Courante)"
                  } value={indicators.current} />
                  <BoxBorder color="yellow" label={
                    view === "population" ? "Population 2030 [hab]" :
                      view === "structures" ? "Structures Sanitaires (2030)" :
                        "Couverture Sanitaire (2030)"
                  } value={indicators.future} />
                  <BoxBorder color="red" label={
                    view === "population" ? "Taux de croissance annuel moyen" :
                      view === "structures" ? "Taux de croissance annuel moyen" :
                        "Taux de croissance annuelle moyenne (2030)"
                  } value={indicators.growth} />
                </>
              ) : (
                <>
                  <BoxBorder color="green" label="Norme OMS (2030)" value={indicators.current} />
                  <BoxBorder color="yellow" label="Nombre de structures" value={indicators.future} />
                  <BoxBorder color="red" label="A ajouter (structure)" value={indicators.current - indicators.future} />
                </>
              )}
            </div>

            {/* Bloc contenu principal */}
            <div className="flex flex-col md:flex-row gap-6 border-l-4 border-blue-500 w-full bg-white rounded-xl shadow-md p-6 md:p-8 min-h-[300px] md:min-h-[400px]">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-center mb-3">{chartTitle}</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={sortedData.filter(d => d.annee >= xMin && d.annee <= xMax)}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                    <XAxis dataKey="annee" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip contentStyle={{ backgroundColor: '#fff', borderRadius: '10px', padding: '5px' }} />
                    <Legend verticalAlign="top" height={36} />
                    {view === "population" && <Line name="population" type="monotone" dataKey="pop_value" stroke="#2563eb" strokeWidth={3} dot={{ r: 5, stroke: "#1C2241", strokeWidth: 2, fill: "#2563eb" }} activeDot={{ r: 8 }} animationDuration={1500} />}
                    {view === "structures" && <Line name="nombre de structure" type="monotone" dataKey="nb_str" stroke="#2563eb" strokeWidth={3} dot={{ r: 5, stroke: "#1C2241", strokeWidth: 2, fill: "#2563eb" }} activeDot={{ r: 8 }} animationDuration={1500} />}
                    {view === "coverage" && <Line name="couverture sanitaire" type="monotone" dataKey="couv_san" stroke="#2563eb" strokeWidth={3} dot={{ r: 5, stroke: "#1C2241", strokeWidth: 2, fill: "#2563eb" }} activeDot={{ r: 8 }} animationDuration={1500} />}
                    {view === "oms" && <Line name="norme OMS" type="monotone" dataKey="norm_oms" stroke="#e11d48" strokeWidth={3} dot={{ r: 5, stroke: "#1C2241", strokeWidth: 2, fill: "#e11d48" }} activeDot={{ r: 8 }} animationDuration={1500} />}
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Tableau : affiché uniquement si TOUTES les régions sont sélectionnées OU si vue=oms */}
              {(selectedRegion === "" || view === "oms") && (
                <div className="w-full md:w-1/3">
                  {view !== "oms" ? (
                    <>
                      <h3 className="text-lg font-semibold text-center mb-3">
                        {view === "population" ? "Répartition de la population par région (2030)" :
                          view === "structures" ? "Structures Sanitaires (2030)" :
                            "Couverture sanitaire 2030"}
                      </h3>
                      <table className="w-full text-sm border border-gray-200">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="px-2 py-1 border">Région</th>
                            <th className="px-2 py-1 border">{view === "population" ? "Population" : view === "structures" ? "Nombre Structures" : "Couverture Sanitaire"}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data2030ByRegion.map((r, idx) => (
                            <tr key={idx} className="text-center">
                              <td className="border px-2 py-1">{r.region}</td>
                              <td className="border px-2 py-1">
                                {view === "population" ? r.pop_value : view === "structures" ? r.nb_str : r.couv_san}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </>
                  ) : (
                    <>
                      <h3 className="text-lg font-semibold text-center mb-3">Norme OMS & Ajouts (2025–2030)</h3>
                      <table className="w-full text-sm border border-gray-200">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="px-2 py-1 border">Année</th>
                            <th className="px-2 py-1 border">Norme OMS</th>
                            <th className="px-2 py-1 border">Structures existantes</th>
                            <th className="px-2 py-1 border">À ajouter</th>
                          </tr>
                        </thead>
                        <tbody>
                          {sortedData.filter(d => d.annee >= 2025 && d.annee <= 2030).map((d, idx) => (
                            <tr key={idx} className="text-center">
                              <td className="border px-2 py-1">{d.annee}</td>
                              <td className="border px-2 py-1">{d.norm_oms}</td>
                              <td className="border px-2 py-1">{d.nb_str}</td>
                              <td className="border px-2 py-1">{d.ajouter}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DashboardPage;