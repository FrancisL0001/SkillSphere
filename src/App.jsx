import { Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import Explore from "./pages/Explore.jsx";


const App = () => {
  return (
    <div data-theme="light" className="relative min-h-screen w-screen mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </div>
  );
};

export default App;