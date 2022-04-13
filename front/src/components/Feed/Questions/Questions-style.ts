import styled from "styled-components";
import { colors } from "../../../colors";
import { FotoBackgroundInterface } from "./InterfaceQuestion";

const QuestionArticle = styled.article`
  width: 100%;
  height: 8rem;
  background-color: ${colors.primary};
  /* flex-shrink: 0; */
  border-bottom: 0.1px solid ${colors.secondary};
  /* display: flex; */
  cursor: pointer;
`;

const ContainerInfoQuestions = styled.div`
  width: 95%;
  height: 100%;
  padding: 1rem;
  display: flex;
`;

const Perfil = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FotoPerfil = styled.div<FotoBackgroundInterface>`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-image: url(${(props) => props.bkImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: 50%;
`;

const ContainerQuestion = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const TituloQuestion = styled.h2`
  font-size: 1.1rem;
  color: ${colors.textColor};
`;

const ListaTags = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
`;

const Tag = styled.li`
  background-color: yellow;
  padding: 0.1rem 0.5rem;
  border-radius: 20px;
  font-size: 1rem;
`;

const QuantidadeComentarios = styled.div`
  display: flex;
  align-items: center;
`;

const ImageComments = styled.img`
  width: 1rem;
  height: 1rem;
`;

const ContainerLike = styled.div`
  width: 5%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ButtonLike = styled.button<FotoBackgroundInterface>`
  height: 4.5rem;
  margin: 0 1rem;
  background-image: url(${(props) => props.bkImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: transparent;
  background-size: 1.5rem;
  background-position: 50% 5%;
  border: none;
  cursor: pointer;
`;

export {
  QuestionArticle,
  ContainerInfoQuestions,
  Perfil,
  FotoPerfil,
  ContainerQuestion,
  TituloQuestion,
  ListaTags,
  Tag,
  QuantidadeComentarios,
  ImageComments,
  ContainerLike,
  ButtonLike,
};
