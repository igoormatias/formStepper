import{ useState } from "react";

function useErros(validacoes) {
  const [erros, setErros] = useState({ senha: { valido: true, texto: "" } });

  function validarCampos(event) {
    const { name, value } = event.target;
    const newErros = { ...erros };
    const isValid = validacoes[name](value);
    newErros[name] = isValid;
    setErros(newErros);
  }

  return [erros, validarCampos];
}

export default useErros;
