import React, { useState,useContext } from "react";
import { TextField, Button, Typography } from "@material-ui/core";

import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";



function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erros, setErros] = useState({ senha: { valido: true, texto: "" } });

  const validacoes = useContext(ValidacoesCadastro);

  function validarCampos(event) {
    console.log(validacoes);
    const { name, value } = event.target;
    const isValid = validacoes[name](value);
    console.log("isvalid", isValid);
    const newErros = { ...erros };
    console.log("newErros", newErros);
    newErros[name] = isValid;
    console.log("newErros2", newErros);
    setErros(newErros);
  }

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
