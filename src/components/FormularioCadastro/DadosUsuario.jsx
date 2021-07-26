import React, { useState, useContext } from "react";
import { TextField, Button, Typography } from "@material-ui/core";

import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";


function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos] = useErros(validacoes);


  function sendFormData(event) {
    event.preventDefault();
    for (let campo in erros) {
      if (erros[campo].valido) {
        aoEnviar({ email, password });
        return true;
      } else {
        return false;
      }
    }
  }

  return (
    <form onSubmit={sendFormData}>
      {erros.senha.valido === false && (
        <Typography variant="h3">
          Dados inválidos por favor, verifique.
        </Typography>
      )}
      <TextField
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        id="email"
        name="email"
        label="Email"
        variant="outlined"
        margin="normal"
        type="email"
        fullWidth
        required
      />
      <TextField
        onChange={(event) => setPassword(event.target.value)}
        onBlur={validarCampos}
        value={password}
        id="password"
        name="senha"
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        label="Senha"
        variant="outlined"
        margin="normal"
        type="password"
        fullWidth
        required
      />

      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
