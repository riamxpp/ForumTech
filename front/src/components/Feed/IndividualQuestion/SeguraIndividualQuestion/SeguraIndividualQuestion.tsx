import React from "react";
import {
  SeguraIndividualQuestionContainer,
  SeguraIndividualQuestionImage,
  SeguraIndividualQuestionNome,
  SeguraIndividualQuestionInfo,
  SeguraIndividualQuestionWrapper,
  SeguraIndividualQuestionData,
  SeguraIndividualQuestionQuestion,
} from "./SeguraIndividualQuestionStyle";
import Perfil from "../../../../assents/img/avatar-perfil.jpg";
import { InterfaceSeugraIndividualQuestion } from "./InterfaceSeguraIndividualQuestion";

const SeguraIndividualQuestion = (props: InterfaceSeugraIndividualQuestion) => {
  return (
    <SeguraIndividualQuestionContainer>
      <SeguraIndividualQuestionWrapper>
        <SeguraIndividualQuestionImage bkImage={Perfil} />
        <SeguraIndividualQuestionInfo>
          <SeguraIndividualQuestionNome>
            {props.name}
          </SeguraIndividualQuestionNome>
          <SeguraIndividualQuestionData>
            {props.data}
          </SeguraIndividualQuestionData>
        </SeguraIndividualQuestionInfo>
      </SeguraIndividualQuestionWrapper>
      <SeguraIndividualQuestionQuestion>
        {props.pergunta}
      </SeguraIndividualQuestionQuestion>
    </SeguraIndividualQuestionContainer>
  );
};

export default SeguraIndividualQuestion;
