
import { Routes, Route } from "react-router-dom";
import LandingPage from "./layouts/landingPage";
import ANSDHome from "./layouts/ANSDHome";
import GendarmerieHome from "./layouts/gendarmerieHome";
import GendarmerieAuth from "./layouts/gendarmerieAuth";
import SafetyOrderHome from "./layouts/safetyOrderHome";
import EducationHome from "./layouts/educationHome";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/ANSDHome" element={<ANSDHome />} />
      <Route path="/GendarmerieAuth" element={<GendarmerieAuth />} />
      <Route path="/safetyOrderHome" element={<SafetyOrderHome />} />
      <Route path="/GendarmerieHome" element={<GendarmerieHome />} />
      <Route path="/GendarmerieHome" element={<EducationHome />} />

    </Routes>
  );
}

export default App;
