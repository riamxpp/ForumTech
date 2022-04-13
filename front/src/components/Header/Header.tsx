import React from "react";
import {
  HeaderComponente,
  ListaHeader,
  NavHeader,
  ItemListaHeader,
  ItemLogoHeader,
} from "./HeaderStyle";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderComponente>
      <NavHeader>
        <ListaHeader>
          <ItemLogoHeader>
            <Link className="link" to="/feed">
              ForumTech
            </Link>
          </ItemLogoHeader>
          <ItemListaHeader>
            <Link className="link" to="/feed">
              Feed
            </Link>
          </ItemListaHeader>
          <ItemListaHeader>
            <Link className="link" to="/about">
              About
            </Link>
          </ItemListaHeader>
        </ListaHeader>
      </NavHeader>
    </HeaderComponente>
  );
};

export default Header;
