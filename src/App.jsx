// import { Routes, Route, Navigate } from "react-router-dom";
// import { Dashboard, Auth } from "@/layouts";

// function App() {
//   return (
//     <Routes>
//       <Route path="/dashboard/*" element={<Dashboard />} />
//       <Route path="/auth/*" element={<Auth />} />
//       {/* <Route path="*" element={<Navigate to="/dashboard/home" replace />} /> */}
//       <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
//     </Routes>
//   );
// }

// export default App;


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { LandingPage, ANSDHome } from "@/layouts";
// // import LandingPage from "./layouts/LandingPage";
// // import ANSDHome from "./layouts/ANSDHome";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/ansd_home" element={<ANSDHome />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import LandingPage from "./layouts/LandingPage";

// import ANSDHome from "./layouts/ANSDHome";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/ansd_home" element={<ANSDHome />} />
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import ANSDHome from "./layouts/ANSDHome";

function App() {
  return <ANSDHome />;
}
export default App;

