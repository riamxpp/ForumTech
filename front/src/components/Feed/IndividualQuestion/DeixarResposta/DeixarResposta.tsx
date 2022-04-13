import React, { useState } from "react";
import {
  DeixarRespostaButton,
  DeixarRespostaForm,
  DeixarRespostaText,
} from "./DeixarRespostaStyle";

const DeixarResposta = () => {
  const [userResposta, setUserResposta] = useState("");

  function mandaDados(event: React.MouseEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <DeixarRespostaForm onSubmit={mandaDados}>
      {userResposta}
      <DeixarRespostaText
        value={userResposta}
        onChange={({ target }) => setUserResposta(target.value)}
      >
        {" "}
      </DeixarRespostaText>
      <DeixarRespostaButton>Responder</DeixarRespostaButton>
    </DeixarRespostaForm>
  );
};

export default DeixarResposta;
