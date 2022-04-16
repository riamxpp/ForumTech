import styled from "styled-components";
import { colors } from "../../colors";

const CadastroStyleSection = styled.section`
  width: 60rem;
  height: auto;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
`;

const CadastroStyleForm = styled.form`
  width: 35rem;
  height: auto;
  padding: 3rem 2rem;
  background: ${colors.primary};
  box-shadow: 1px 4px 7px 1px rgb(0 0 0 / 70%);
`;

const DivError = styled.div`
  width: 100%;
  min-height: 15px;
  max-height: auto;
  color: ${colors.errorColor};
`;

export { CadastroStyleSection, CadastroStyleForm, DivError };
