
import { Routes, Route } from "react-router-dom";
import LandingPage from "./layouts/LandingPage";
import ANSDHome from "./layouts/ANSDHome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/ANSDHome" element={<ANSDHome />} />
    </Routes>
  );
}

export default App;
