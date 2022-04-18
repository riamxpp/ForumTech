import React, { useContext, useState } from "react";
import { ForumContext } from "../../../../Context/ForumContext";
import {
  DeixarRespostaButton,
  DeixarRespostaForm,
  DeixarRespostaText,
  TituloComentar,
} from "./DeixarRespostaStyle";

const DeixarResposta = () => {
  const [userResposta, setUserResposta] = useState("");
  const { user, question, enviaResposta, getRespostaDeUmaPergunta } =
    useContext(ForumContext);

  function mandaDados(event: React.MouseEvent<HTMLFormElement>) {
    event.preventDefault();
    enviaResposta(question.id, user.id, user.name, userResposta);
    getRespostaDeUmaPergunta(question.id);
  }

  return (
    <DeixarRespostaForm onSubmit={mandaDados}>
      <TituloComentar>Deixar resposta.</TituloComentar>
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
