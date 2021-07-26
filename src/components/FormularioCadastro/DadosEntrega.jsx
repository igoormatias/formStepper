import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function DadosEntrega({ comeBack, aoEnviar }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [num, setNum] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ cep, endereco, num, estado, cidade });
      }}
    >
      <TextField
        onChange={(event) => {
          setCep(event.target.value);
        }}
        value={cep}
        id="cep"
        label="CEP"
        variant="outlined"
        margin="normal"
        type="number"
      />
      <TextField
        onChange={(event) => {
          setEndereco(event.target.value);
        }}
        value={endereco}
        id="endereco"
        label="Endereço"
        variant="outlined"
        margin="normal"
        type="text"
        fullWidth
      />
      <TextField
        onChange={(event) => {
          setNum(event.target.value);
        }}
        value={num}
        id="numero"
        label="Número"
        variant="outlined"
        margin="normal"
        type="number"
      />
      <TextField
        onChange={(event) => {
          setEstado(event.target.value);
        }}
        value={estado}
        id="estado"
        label="Estado"
        variant="outlined"
        margin="normal"
        type="text"
      />
      <TextField
        onChange={(event) => {
          setCidade(event.target.value);
        }}
        value={cidade}
        id="cidade"
        label="Cidade"
        variant="outlined"
        margin="normal"
        type="text"
        fullWidth
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
      <Button
        type="button"
        onClick={comeBack}
        variant="contained"
        color="primary"
      >
        Volta
      </Button>
    </form>
  );
}

export default DadosEntrega;
