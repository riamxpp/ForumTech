import React from "react";
import {
  ButtonSearch,
  ContainerSearch,
  InputSearch,
  SearchSection,
  TextPosTitulo,
  TituloSearch,
} from "./SearchStyle";

const Search = () => {
  return (
    <SearchSection>
      <TituloSearch>Forum Tech</TituloSearch>
      <TextPosTitulo>Tire todas as suas dúvidas tech aqui</TextPosTitulo>
      <ContainerSearch>
        <InputSearch />
        <ButtonSearch>Search </ButtonSearch>
      </ContainerSearch>
    </SearchSection>
  );
};

export default Search;
