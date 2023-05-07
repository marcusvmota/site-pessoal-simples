import React from "react"
import "./App.css"
import Footer from "./components/Footer/Footer"
import NavBar from "./components/NavBar/NavBar"

import Header from "./components/Header/Header"
import Curriculo from "./components/Curriculo/Curriculo"
import Portfolio from "./components/Portfolio/Portfolio"
import Contato from "./components/Contato/Contato"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Curriculo />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  )
}

export default App
