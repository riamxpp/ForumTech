import styled from "styled-components";
import { colors } from "../../../../colors";
import { InterfaceSeguraRespostaImage } from "./SeguraRespostaInterface";

const SeguraRespostaContainerInfo = styled.article`
  border-bottom: 1px solid ${colors.tertiary};
  padding: 1rem 0;
`;

const SeguraRespostaContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 1rem;
`;

const SeguraRespostaImagem = styled.div<InterfaceSeguraRespostaImage>`
  width: 3rem;
  height: 3rem;
  background-image: url(${(props) => props.bkImage});
  background-size: cover;
  background-position: 50%;
  border-radius: 50%;
`;

const SeguraRespostaInfo = styled.div``;

const SeguraRespostaNome = styled.span``;

const SeguraRespostaData = styled.span`
  display: block;
  font-size: 0.9rem;
  color: ${colors.tertiary};
`;

const SeguraRespostaContent = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem 1rem 1rem 0;
`;

const SeguraRespostaTexto = styled.p``;

export {
  SeguraRespostaContainer,
  SeguraRespostaContainerInfo,
  SeguraRespostaImagem,
  SeguraRespostaInfo,
  SeguraRespostaNome,
  SeguraRespostaData,
  SeguraRespostaContent,
  SeguraRespostaTexto,
};
