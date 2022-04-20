import React, { useContext } from "react";
import {
  HeaderComponente,
  ListaHeader,
  NavHeader,
  ItemListaHeader,
  ItemLogoHeader,
} from "./HeaderStyle";
import { Link } from "react-router-dom";
import { ForumContext } from "../../Context/ForumContext";

const Header = () => {
  const { user } = useContext(ForumContext);
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
          {user.id ? (
            <>
              <ItemListaHeader>
                <Link className="link" to="/">
                  {user.name}
                </Link>
              </ItemListaHeader>
              <ItemListaHeader>
                <Link className="link" to="/adicionar-pergunta">
                  Add pergunta
                </Link>
              </ItemListaHeader>
            </>
          ) : (
            <>
              <ItemListaHeader>
                <Link className="link" to="/login">
                  Login
                </Link>
              </ItemListaHeader>
              <ItemListaHeader>
                <Link className="link" to="/register">
                  Register
                </Link>
              </ItemListaHeader>
            </>
          )}
        </ListaHeader>
      </NavHeader>
    </HeaderComponente>
  );
};

export default Header;

// <ItemListaHeader>
//             <Link className="link" to="/login">
//               Login
//             </Link>
//           </ItemListaHeader>
//           <ItemListaHeader>
//             <Link className="link" to="/register">
//               Register
//             </Link>
//           </ItemListaHeader>
