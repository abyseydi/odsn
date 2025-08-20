

import React from "react";
import { useNavigate } from "react-router-dom";

export default function EducationHome() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("");
  };

  return (
    <div
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 gap-x-16 px-6 md:px-12"

    >
         <iframe id="rapport" src="https://bi-srmt-srmt.apps.origins.heritage.africa/Reports/powerbi/SRMT_PBReportServer%20-%20MFB?rs:Embed=true"></iframe>

    </div>
  );
}
