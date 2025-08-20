import React from "react";

export default function EducationHome() {
  return (
    // Conteneur plein écran + safe areas iOS/Android
    <main
      className="fixed inset-0 bg-gray-50"
      style={{
        paddingTop: "env(safe-area-inset-top)",
        paddingBottom: "env(safe-area-inset-bottom)",
        paddingLeft: "env(safe-area-inset-left)",
        paddingRight: "env(safe-area-inset-right)",
      }}
    >
     <section className="bg-white py-10 sm:py-12 text-center">
       <iframe
        title="Rapport Power BI"
 src="https://bi-srmt-srmt.apps.origins.heritage.africa/Reports/powerbi/MEN_Performance_Scolaire?rs:Embed=true"        frameBorder="0"
        allowFullScreen={true}
        className="w-full h-full"
      ></iframe>
      </section>
    </main>
  );
}
