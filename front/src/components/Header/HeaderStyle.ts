import styled from "styled-components";

const HeaderComponente = styled.header`
  width: 100%;
  height: auto;
  padding: 1rem 0;
`;

const NavHeader = styled.nav`
  width: 80%;
  height: auto;
  margin: 0 auto;
`;

const ListaHeader = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  gap: 1rem;
  height: 2rem;
`;

const ItemListaHeader = styled.li`
  font-weight: 500;
`;

const ItemLogoHeader = styled.li`
  font-size: 1.4rem;
  font-weight: bold;
  @media (max-width: 700px) {
    font-size: 1rem;
  }
`;

export {
  HeaderComponente,
  NavHeader,
  ListaHeader,
  ItemListaHeader,
  ItemLogoHeader,
};
