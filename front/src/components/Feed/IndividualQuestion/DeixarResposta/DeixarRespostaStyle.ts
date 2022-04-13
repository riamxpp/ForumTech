import styled from "styled-components";
import { colors } from "../../../../colors";

const DeixarRespostaForm = styled.form`
  width: 100%;
  height: auto;
  margin-top: 1rem;
`;

const DeixarRespostaText = styled.textarea`
  width: 35rem;
  height: 10rem;
  display: block;
  border: 1px solid ${colors.tertiary};
  border-radius: 2px;
  &:focus {
    border: none;
    outline: 2px solid ${colors.bkColor};
  }
`;

const DeixarRespostaButton = styled.button`
  padding: 0.5rem 0.7rem;
  background: ${colors.bkColor};
  color: ${colors.primary};
  border: none;
  margin-top: 1rem;
  border-radius: 2px;
  cursor: pointer;
`;

export { DeixarRespostaForm, DeixarRespostaText, DeixarRespostaButton };
