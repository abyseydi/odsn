import React, { useState, useRef, useCallback } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleLinear } from "d3-scale";
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

export default function CarteChaleur() {
  const wrapperRef = useRef(null);
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, content: "" });

  const handleMouseMove = useCallback((evt, regionName) => {
    const val = data[regionName] || 0;
    const rect = wrapperRef.current?.getBoundingClientRect();
    const x = rect ? evt.clientX - rect.left + 8 : evt.clientX + 8;
    const y = rect ? evt.clientY - rect.top + 8 : evt.clientY + 8;

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
    <div className="w-full">
      {/* Wrapper responsive : pas de débordement, hauteur réactive */}
      <div
        ref={wrapperRef}
        className="
          relative w-full overflow-hidden rounded-lg
          h-[160px] sm:h-[190px] md:h-[220px]
          lg:h-auto md:aspect-[3/2] lg:aspect-[16/9] xl:aspect-[4/3]
          max-h-[360px]
        "
      >
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ center: [-14.5, 14.5], scale: 3200 }}
          width={600}
          height={360}
          preserveAspectRatio="xMidYMid meet"
          style={{ width: "100%", height: "100%" }}
        >
          <Geographies geography={senegalGeoJson}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const regionName =
                  geo.properties.NAME_1 ||
                  geo.properties.name ||
                  geo.properties.NAME ||
                  "Inconnu";
                const val = data[regionName] || 0;

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={val ? colorScale(val) : "#f0f0f0"}
                    stroke="#d1d5db"
                    onMouseEnter={(evt) => handleMouseMove(evt, regionName)}
                    onMouseMove={(evt) => handleMouseMove(evt, regionName)}
                    onMouseLeave={handleMouseLeave}
                    style={{
                      default: { outline: "none", transition: "fill 0.15s ease" },
                      hover: { fill: "#1E2454", outline: "none", cursor: "pointer" },
                      pressed: { outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>

        {/* Tooltip compact, contraint au wrapper */}
        {tooltip.visible && (
          <div
            className="pointer-events-none absolute z-50 bg-white/95 border border-gray-200 rounded px-2 py-1 text-xs sm:text-[13px] shadow"
            style={{ left: tooltip.x, top: tooltip.y, minWidth: 100, transform: "translateY(-50%)" }}
          >
            <strong className="block text-gray-800">{tooltip.content}</strong>
          </div>
        )}
      </div>

      {/* Légende compacte, centrée et responsive */}
      <div className="mt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-[12px] leading-4">
        <LegendDot color="#fee5d9" label={`Faible (${min})`} />
        <LegendDot color="#fca59d" label="Moyenne" />
        <LegendDot color="#de2d26" label="Élevée" />
        <LegendDot color="#a50f15" label={`Critique (${max})`} />
      </div>
    </div>
  );
}

function LegendDot({ color, label }) {
  return (
    <div className="inline-flex items-center gap-2">
      <span
        className="inline-block w-2.5 h-2.5 rounded-full"
        style={{ backgroundColor: color }}
      />
      <span className="text-gray-700">{label}</span>
    </div>
  );
}
