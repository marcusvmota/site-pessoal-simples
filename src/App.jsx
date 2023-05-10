import React from "react"
import api from "./api"
import "./App.css"
import Footer from "./components/Footer/Footer"
import NavBar from "./components/NavBar/NavBar"

import Header from "./components/Header/Header"
import Curriculo from "./components/Curriculo/Curriculo"
import Portfolio from "./components/Portfolio/Portfolio"
import Contato from "./components/Contato/Contato"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  const [informacoes, setInformacoes] = React.useState({})
  const [curriculo, setCurriculo] = React.useState({})
  const [portfolio, setPortfolio] = React.useState([])

  const fetchDados = async () => {
    try {
      const informacao = await api.get("/informacoes/1")
      setInformacoes({
        foto: informacao.data.foto,
        nome: informacao.data.nome,
        cargo: informacao.data.cargo,
      })

      const experienciaAcademica = await api.get("/experiencias?tipo=academico")
      const experienciaProfissional = await api.get(
        "/experiencias?tipo=profissional"
      )

      setCurriculo({
        resumo: informacao.data.resumo,
        experienciaAcademica: experienciaAcademica.data,
        experienciaProfissional: experienciaProfissional.data,
      })

      const portfolio = await api.get("/portfolio")
      setPortfolio(portfolio.data)
    } catch (error) {
      console.log("erro ao buscar dados", error)
    }
  }

  React.useEffect(() => {
    fetchDados()
  }, [])

  return (
    <>
      <Header informacoes={informacoes} />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Curriculo curriculo={curriculo} />} />
          <Route
            path="/portfolio"
            element={<Portfolio portfolio={portfolio} />}
          />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  )
}

export default App
