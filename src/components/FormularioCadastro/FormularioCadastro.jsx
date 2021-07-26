import React, { useEffect, useState } from "react";

import { Typography, Stepper, StepLabel, Step } from "@material-ui/core";

import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";

function FormularioCadastro({ aoEnviar, validacoes }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [formData, setFormData] = useState({});

  

  useEffect(() => {
    if (etapaAtual === formularios.length - 1) {
      aoEnviar(formData);
    }
  });

  const formularios = [
    <DadosUsuario aoEnviar={getData} validacoes={validacoes} name="Login" />,
    <DadosPessoais
      aoEnviar={getData}
      comeBack={backStep}
      validacoes={validacoes}
      name="Pessoal"
    />,
    <DadosEntrega aoEnviar={getData} comeBack={backStep} validacoes={validacoes} name="Entrega" />,
    <Typography variant="h5"> Obrigado por se cadastrado </Typography>,
  ];
 

  function getData(dados) {
    setFormData({ ...formData, ...dados });
    nextStep();
    console.log("dados", dados);
    console.log("form data", formData);
  }

  function nextStep() {
    setEtapaAtual(etapaAtual + 1);
  }
  function backStep() {
    setEtapaAtual(etapaAtual - 1);
  }

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        {formularios.slice(0, 3).map((item) => {
          return (
            <Step key={item.length}>
              <StepLabel>{item.props.name}</StepLabel>
            </Step>
          );
        })}
        <Step>
        </Step>
        <StepLabel>Finalização</StepLabel>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  );
}
export default FormularioCadastro;
