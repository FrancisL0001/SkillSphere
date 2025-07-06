import { Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import Explore from "./pages/Explore.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";


const App = () => {
  return (
    <div data-theme="light" className="relative min-h-screen w-screen mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
      </Routes>
    </div>
  );
};

export default App;