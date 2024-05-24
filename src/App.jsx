import Navbar from "./components/Nabar/Navbar"
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard"
import Features from "./components/Features"
import Profile from "./components/Profile"
import './global.css'; 
import HomePage from "./components/Home/HomePage";
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/features" element={<Features/>} />
      </Routes>
      <HomePage/>
    </>
    
  )
}

export default App
