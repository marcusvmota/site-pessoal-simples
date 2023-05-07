import React from "react"
import "./Curriculo.css"
import data from "../Curriculo/Curriculo.json"

function Curriculo() {
  return (
    <>
      <section>
        <h2>Resum</h2>
        <p>{data.resumo}</p>
      </section>

      <section>
        <h2>Acadêmico</h2>
        <ul>
          {data.experienciaAcademica.map((item, index) => (
            <li key={index}>
              <b>
                ({item.dataInicio} -{item.dataFim})
              </b>
              {item.titulo}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Profissional</h2>
        <ul>
          {data.experienciaProfissional.map((item, index) => (
            <li key={index}>
              <b>
                ({item.dataInicio} -{item.dataFim})
              </b>
              {item.titulo}
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Curriculo
