import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import MainPage from "./components/MainPage/MainPage.jsx";
import RegistrationPage from "./components/RegistrationPage/RegisterPage.jsx";
import FinalPage from "./components/FinalPage/FinalPage.jsx";

function App() { 
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="register" element={<RegistrationPage />} />
        <Route path="finalpage" element={<FinalPage />} />
      </Routes>
    </Router>
  );
}

export default App;
