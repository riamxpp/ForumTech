import React from "react";
import {
  ButtonLike,
  ContainerInfoQuestions,
  ContainerLike,
  ContainerQuestion,
  FotoPerfil,
  Perfil,
  QuestionArticle,
  Tag,
  TituloQuestion,
  QuantidadeComentarios,
  ImageComments,
  ContainerTag,
} from "./Questions-style";
import avatar from "../../../assents/img/avatar-perfil.jpg";
import comments from "../../../assents/img/ico-comments.png";
// import likeNoClicked from "../../../assents/img/like-no-clicked.png";
import likeClicked from "../../../assents/img/like-clicked.png";
import { PropsQuestionsInterface } from "./InterfaceQuestion";
import { Link } from "react-router-dom";
import "./link.css";

const Question = (props: PropsQuestionsInterface) => {
  return (
    <QuestionArticle onClick={props.onClick}>
      <Link className="linkQuestion" to={`/${props.name}/${props.language}`}>
        {" "}
        <ContainerInfoQuestions>
          <Perfil>
            <FotoPerfil bkImage={avatar}></FotoPerfil>
          </Perfil>
          <ContainerQuestion>
            <TituloQuestion>{props.pergunta}</TituloQuestion>
            <ContainerTag>
              <Tag>{props.language}</Tag>
            </ContainerTag>
            <QuantidadeComentarios>
              <ImageComments src={comments} />
              {props.numberComments}
              {"  "}
            </QuantidadeComentarios>
          </ContainerQuestion>
        </ContainerInfoQuestions>
      </Link>
    </QuestionArticle>
  );
};

export default Question;
