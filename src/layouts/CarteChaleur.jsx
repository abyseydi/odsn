import React, { useState, useRef, useCallback } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import { FiMapPin } from "react-icons/fi";
import senegalGeoJson from "../data/regions_senegal.json";

const data = {
  Dakar: 1379,
  "Thiès": 1074,
  "Saint-Louis": 995,
  Kaolack: 972,
  Matam: 910,
  Fatick: 910,
  Diourbel: 905,
  Kaffrine: 897,
  Louga: 896,
  Ziguinchor: 888,
  Sédhiou: 873,
  Tambacounda: 870,
  Kolda: 712,
  Kédougou: 597,
};

const min = Math.min(...Object.values(data));
const max = Math.max(...Object.values(data));
const colorScale = scaleLinear().domain([min, max]).range(["#fee5d9", "#a50f15"]);

// Composant principal
export default function CarteChaleur() {
  const wrapperRef = useRef(null);
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, content: "" });

  const handleMouseMove = useCallback((evt, regionName) => {
    const val = data[regionName] || 0;
    // position relative au conteneur pour un tooltip mieux placé
    const rect = wrapperRef.current?.getBoundingClientRect();
    const x = rect ? evt.clientX - rect.left + 12 : evt.clientX + 12;
    const y = rect ? evt.clientY - rect.top + 12 : evt.clientY + 12;

    setTooltip({
      visible: true,
      x,
      y,
      content: `${regionName} — ${val.toLocaleString()}`,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTooltip((t) => ({ ...t, visible: false }));
  }, []);

  return (
    <div className="bg-gray-200 rounded-2xl shadow-lg p-8 w-full max-w-[1500px] max-h-[679px] mx-auto">
      <h2 className="text-2xl font-extrabold mb-6 flex-1 items-center gap-3 text-gray-900">
        <FiMapPin className="text-red-600 text-3xl" />
        Carte de chaleur des plaintes critiques par région
      </h2>
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Carte large */}
        <div ref={wrapperRef} className="pt-2 flex-1 h-[500px] md:h-[500px] relative">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ center: [-14.5, 14.5], scale:5000 }}
            width={800}
            height={400}
          >
            <Geographies geography={senegalGeoJson}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const regionName = geo.properties.NAME_1 || geo.properties.name || geo.properties.NAME || "Inconnu";
                  const val = data[regionName] || 0;

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={val ? colorScale(val) : "#f0f0f0"}
                      stroke="#ccc"
                      onMouseEnter={(evt) => handleMouseMove(evt, regionName)}
                      onMouseMove={(evt) => handleMouseMove(evt, regionName)}
                      onMouseLeave={handleMouseLeave}
                      style={{
                        default: { outline: "none", transition: "fill 0.2s ease" },
                        hover: { fill: "#1E2454", outline: "none", cursor: "pointer" },
                        pressed: { outline: "none" },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>

          {/* Tooltip */}
          {tooltip.visible && (
            <div
              className="pointer-events-none absolute z-50 transform -translate-y-1/2 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-md px-3 py-1 text-sm shadow-md"
              style={{ left: tooltip.x, top: tooltip.y, minWidth: 120 }}
            >
              <strong className="block text-sm text-gray-800">{tooltip.content}</strong>
            </div>
          )}
        </div>

        {/* Légende verticale alignée */}
        <aside className="w-full md:w-[250px] flex flex-col gap-5 mt-4 md:mt-0 bg-gray-50 rounded-xl p-5 shadow-inner">
          <h3 className="text-lg font-semibold text-gray-700 border-b border-gray-300 pb-2">Légende</h3>
          <LegendItem color="#fee5d9" label={`Faible (${min})`} />
          <LegendItem color="#fca59d" label="Moyenne" />
          <LegendItem color="#de2d26" label="Élevée" />
          <LegendItem color="#a50f15" label={`Critique (${max})`} />
        </aside>
      </div>
    </div>
  );
}

const LegendItem = ({ color, label }) => (
  <div className="flex items-center gap-4">
    <span className="w-8 h-6 rounded-lg border" style={{ backgroundColor: color }} />
    <span className="text-base text-gray-700 font-medium">{label}</span>
  </div>
);
