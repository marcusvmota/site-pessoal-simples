import React from "react"
import viniciusAvatar from "../../assets/foto elipse.png"
import "./Header.css"

function Header() {
  return (
    <header>
      <img src={viniciusAvatar} alt="Foto de rosto de Vinicius" />
      <h1 id="nome-perfil">Marcus Vinicius</h1>
      <h3 id="eventoSubtitulo">Desenvolvedor de Software</h3>
    </header>
  )
}

export default Header
