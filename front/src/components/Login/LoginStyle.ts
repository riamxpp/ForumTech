import styled from "styled-components";
import { colors } from "../../colors";

const LoginSection = styled.section`
  width: 65rem;
  margin: 5rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginForm = styled.form`
  width: 35rem;
  height: auto;
  padding: 3rem 2rem;
  background: ${colors.primary};
  box-shadow: 1px 4px 7px 1px rgb(0 0 0 / 70%);
`;

const TituloLogin = styled.h1`
  text-align: center;
`;

export { LoginSection, LoginForm, TituloLogin };
