import styled from "styled-components";
import { colors } from "../../../../colors";
import { InterfaceSeguraIndividualImage } from "./InterfaceSeguraIndividualQuestion";

const SeguraIndividualQuestionContainer = styled.div`
  margin-bottom: 4rem;
`;

const SeguraIndividualQuestionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SeguraIndividualQuestionImage = styled.div<InterfaceSeguraIndividualImage>`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-image: url(${(props) => props.bkImage});
  background-size: cover;
  background-position: 50%;
`;

const SeguraIndividualQuestionInfo = styled.div``;

const SeguraIndividualQuestionNome = styled.span`
  font-size: 1.1rem;
`;

const SeguraIndividualQuestionData = styled.span`
  font-size: 0.8rem;
  color: ${colors.tertiary};
  display: block;
`;

const SeguraIndividualQuestionQuestion = styled.h1`
  font-size: 2rem;
`;

export {
  SeguraIndividualQuestionContainer,
  SeguraIndividualQuestionWrapper,
  SeguraIndividualQuestionImage,
  SeguraIndividualQuestionInfo,
  SeguraIndividualQuestionNome,
  SeguraIndividualQuestionData,
  SeguraIndividualQuestionQuestion,
};
