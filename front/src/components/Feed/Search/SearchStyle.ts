import styled from "styled-components";
import { colors } from "../../../colors";

const SearchSection = styled.section`
  width: 100%;
  height: 15rem;
  background: ${colors.bkColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${colors.primary};
`;

const TituloSearch = styled.h1`
  font-weight: bold;
  font-size: 2rem;
`;

const TextPosTitulo = styled.span`
  font-weight: 400;
  font-size: 1.2rem;
`;

const ContainerSearch = styled.div`
  width: auto;
  height: auto;
  padding: 1rem 0;
  display: flex;
  gap: 0.4rem;
`;

const InputSearch = styled.input`
  width: 30rem;
  padding: 0.5rem;
  border-radius: 2px;
  border: 2px solid transparent;
  &:focus {
    border: 2px solid ${colors.primary};
    outline: 1px solid ${colors.primary};
  }
`;

const ButtonSearch = styled.button`
  background: ${colors.secondary};
  border: none;
  padding: 0 0.7rem;
  border-radius: 2px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
`;

export {
  SearchSection,
  TituloSearch,
  TextPosTitulo,
  ContainerSearch,
  InputSearch,
  ButtonSearch,
};
