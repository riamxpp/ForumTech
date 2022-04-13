import React from "react";
import {
  SeguraRespostaContent,
  SeguraRespostaContainerInfo,
  SeguraRespostaContainer,
  SeguraRespostaData,
  SeguraRespostaImagem,
  SeguraRespostaInfo,
  SeguraRespostaNome,
  SeguraRespostaTexto,
} from "./SeguraRespostaStyle";
import Perfil from "../../../../assents/img/avatar-perfil.jpg";
import { InterfacePropsSeguraResposta } from "./SeguraRespostaInterface";

const SeguraResposta = (props: InterfacePropsSeguraResposta) => {
  return (
    <>
      <SeguraRespostaContainerInfo>
        <SeguraRespostaContainer>
          <SeguraRespostaImagem bkImage={Perfil}></SeguraRespostaImagem>
          <SeguraRespostaInfo>
            <SeguraRespostaNome>{props.name}</SeguraRespostaNome>
            <SeguraRespostaData>{props.data}</SeguraRespostaData>
          </SeguraRespostaInfo>
        </SeguraRespostaContainer>
        <SeguraRespostaContent>
          <SeguraRespostaTexto>{props.resposta}</SeguraRespostaTexto>
        </SeguraRespostaContent>
      </SeguraRespostaContainerInfo>
    </>
  );
};

export default SeguraResposta;
