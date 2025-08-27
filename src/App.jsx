
import { Routes, Route } from "react-router-dom";
import LandingPage from "./layouts/landingPage";
import ANSDHome from "./layouts/ANSDHome";
import GendarmerieHome from "./layouts/gendarmerieHome";
import GendarmerieAuth from "./layouts/gendarmerieAuth";
import SafetyOrderHome from "./layouts/safetyOrderHome";
import EducationHome from "./layouts/educationHome";
import PublicPolicyHome from "./layouts/publicPolicyHome";
import UseCasePage from "./layouts/UseCasePage";
import SureteAuth from "./components/SureteAuth";
import Catalogue from "./layouts/catalogue";
import SanteHome from "./layouts/santeHome";
import DashboardPage from "./layouts/ANSDHomeprime";
import Perantal from "./layouts/perantal";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/ANSDHome" element={<ANSDHome/>} />
      <Route path="/GendarmerieAuth" element={<GendarmerieAuth />} />
      <Route path="/safetyOrderHome" element={<SafetyOrderHome />} />
      <Route path="/GendarmerieHome" element={<GendarmerieHome />} />
      <Route path="/EducationHome" element={<EducationHome />} />
      <Route path="/Catalogue" element={<Catalogue />} />
      <Route path="/PublicPolicyHome" element={<PublicPolicyHome />} />
      <Route path="/ANSDHomeprime" element={<DashboardPage />} />

      <Route path="/sureteAuth" element={<SureteAuth />} />
      <Route path="/SanteHome" element={<SanteHome />} />
      <Route path="/Perantal" element={<Perantal />} />

      <Route path="/UseCasePage" element={<UseCasePage />} />
    </Routes>
  );
}

export default App;
