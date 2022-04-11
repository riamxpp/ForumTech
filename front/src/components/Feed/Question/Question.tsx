import React from "react";
import {
  ButtonLike,
  ContainerInfoQuestions,
  ContainerLike,
  ContainerQuestion,
  ListaTags,
  FotoPerfil,
  Perfil,
  QuestionArticle,
  Tag,
  TituloQuestion,
  QuantidadeComentarios,
  ImageComments,
} from "./Question-style";
import avatar from "../../../assents/img/avatar-perfil.jpg";
import comments from "../../../assents/img/ico-comments.png";
import likeNoClicked from "../../../assents/img/like-no-clicked.png";
import likeClicked from "../../../assents/img/like-clicked.png";

const Question = () => {
  return (
    <QuestionArticle>
      <ContainerInfoQuestions>
        <Perfil>
          <FotoPerfil bkImage={avatar}></FotoPerfil>
        </Perfil>
        <ContainerQuestion>
          <TituloQuestion>
            Como fazer um aplicativo aplicativo aplicativo aplicativo aplicativo
            aplicativo em Next.js ?
          </TituloQuestion>
          <ListaTags>
            <Tag>Javasciprt</Tag>
            <Tag>Typescript</Tag>
            <Tag>JWT</Tag>
          </ListaTags>
          <QuantidadeComentarios>
            <ImageComments src={comments} />
            10{" "}
          </QuantidadeComentarios>
        </ContainerQuestion>
      </ContainerInfoQuestions>
      <ContainerLike>
        <ButtonLike bkImage={likeClicked}>10</ButtonLike>
      </ContainerLike>
    </QuestionArticle>
  );
};

export default Question;
