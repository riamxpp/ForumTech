import React, { useContext, useEffect } from "react";
import { ForumContext } from "../../../Context/ForumContext";
import Header from "../../Header/Header";
import DeixarResposta from "./DeixarResposta/DeixarResposta";
import { PerguntaSection, RespostasTitulo } from "./IndividualQuestionStyle";
import SeguraIndividualQuestion from "./SeguraIndividualQuestion/SeguraIndividualQuestion";
import SeguraResposta from "./SeguraResposta/SeguraResposta";

const IndividualQuestion = () => {
  const { question, getRespostaDeUmaPergunta, respostas } =
    useContext(ForumContext);

  useEffect(() => {
    async function takeDate() {
      await getRespostaDeUmaPergunta(question.id);
    }
    takeDate();
  }, []);

  return (
    <>
      <Header></Header>
      <PerguntaSection>
        <SeguraIndividualQuestion
          name={question.name}
          language={question.language}
          pergunta={question.pergunta}
          data={question.data}
        ></SeguraIndividualQuestion>
        <RespostasTitulo>Respostas: </RespostasTitulo>
        {respostas &&
          respostas.map((item) => (
            <SeguraResposta
              key={item.id}
              name={item.name}
              resposta={item.answer}
              data={item.data}
            ></SeguraResposta>
          ))}
        <DeixarResposta></DeixarResposta>
      </PerguntaSection>
    </>
  );
};
export default IndividualQuestion;
