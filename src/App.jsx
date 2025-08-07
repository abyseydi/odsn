
import { Routes, Route } from "react-router-dom";
import LandingPage from "./layouts/landingPage";
import ANSDHome from "./layouts/ANSDHome";
import GendarmerieHome from "./layouts/GendarmerieHome";
import GendarmerieAuth from "./layouts/GendarmerieAuth";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/ANSDHome" element={<ANSDHome />} />
            <Route path="/GendarmerieAuth" element={<GendarmerieAuth />} />

      <Route path="/GendarmerieHome" element={<GendarmerieHome />} />

    </Routes>
  );
}

export default App;
