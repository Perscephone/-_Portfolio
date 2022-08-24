
import React from "react"
import ReactDOM from "react-dom/client"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import"./style/sass/main.scss"
import Welcome from "./pages/Welcome.jsx"
import Skills from "./pages/Skills.jsx"
import Specialties from "./pages/Specialties.jsx"
import Portfolio from "./pages/Portfolio.jsx"
import Formations from "./pages/Formations.jsx"
import Contact from "./pages/Contact.jsx"


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/specialties" element={<Specialties />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/formations" element={<Formations />} />
        <Route path="/contact" element={<Contact />} />

        {/* path="*" turn if url don't match with the same above*/}
        <Route path="*" element={<Welcome />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)