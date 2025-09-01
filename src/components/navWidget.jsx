// components/NavWidget.js

import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const NavWidget = ({ onClick }) => {
  const base =
    "relative group inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full text-sm md:text-[15px] font-semibold uppercase tracking-wide transition";
  const text =
    "text-[#1C2452] hover:text-[#26509e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#26509e]/50";
  const afterBar =
    "after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#26509e] after:transition-all after:duration-300 group-hover:after:w-3/4";

  const activeClass = "!text-[#26509e] after:w-3/4";

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-5">
      <ScrollLink
        to="section-services"
        smooth
        duration={700}
        offset={-80}
        spy
        onClick={onClick}
        className={`${base} ${text} ${afterBar}`}
        activeClass={activeClass}
      >
        Nos expertises
      </ScrollLink>

      <RouterLink
        to="/catalog"
        className={`${base} ${text} ${afterBar}`}
        onClick={onClick}
      >
        CATALOGUE
      </RouterLink>

      <ScrollLink
        to="section-publications"
        smooth
        duration={700}
        offset={-80}
        spy
        onClick={onClick}
        className={`${base} ${text} ${afterBar}`}
        activeClass={activeClass}
      >
        Publications
      </ScrollLink>

      <a
        href="https://www.accel-tech.net/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={`${base} ${text} ${afterBar}`}
      >
        Découvrez ACCEL Tech
      </a>
    </div>
  );
};

export default NavWidget;
