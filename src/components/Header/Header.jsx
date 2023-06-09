import React from "react"
import "./Header.css"

function Header(props) {
  const { nome, cargo, foto } = props.informacoes

  return (
    <header>
      <img src={foto} alt="Foto de rosto de Vinicius" />
      <h1 id="nome-perfil">{nome}</h1>
      <h3 id="eventoSubtitulo">{cargo}</h3>
    </header>
  )
}

export default Header
