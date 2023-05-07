import React from "react"
import "./Contato.css"

const Contato = () => {
  return (
    <>
      <form onSubmit="event.preventDefault()">
        <fieldset>
          <label htmlFor="input-nome">Nome</label>
          <input
            type="text"
            name="input-nome"
            id="input-nome"
            required
            minLength="2"
          />
        </fieldset>

        <fieldset>
          <label htmlFor="input-email">E-mail</label>
          <input type="email" name="input-email" id="input-email" required />
        </fieldset>

        <fieldset>
          <label htmlFor="input-tel">Telefone</label>
          <input
            type="tel"
            name="input-tel"
            id="input-tel"
            placeholder="(99) 99999-9999"
            required
            pattern="^\(\d{2}\) \d{5}-\d{4}$"
            maxLength="15"
          />
        </fieldset>

        <fieldset>
          <label htmlFor="input-msg">Mensagem</label>
          <textarea
            name="input-msg"
            id="input-msg"
            cols="30"
            rows="10"
          ></textarea>
        </fieldset>

        <center>
          <input
            type="submit"
            value="ENVIAR"
            className="button"
            onClick="enviarhtmlFormulario()"
          />
        </center>
      </form>
    </>
  )
}

export default Contato
