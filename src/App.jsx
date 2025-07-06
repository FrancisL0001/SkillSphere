import { Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import Explore from "./pages/Explore.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ChangePassword from "./pages/ChangePassword.jsx";


const App = () => {
  return (
    <div data-theme="light" className="relative min-h-screen w-screen mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/change-password" element={<ChangePassword/>}/>
      </Routes>
    </div>
  );
};

export default App;