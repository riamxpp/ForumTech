import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Input, Button } from "reactstrap";
import { LoginSection, LoginForm, TituloLogin } from "./LoginStyle";
import Header from "../Header/Header";
import { DivError } from "../Cadastro/CadastroStyle";
import * as yup from "yup";
import { ForumContext } from "../../Context/ForumContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errorLogin, setErrorLogin] = useState("");
  const { loginUser, error, setError, user } = useContext(ForumContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.id) {
      navigate("/");
    }
  }, [user, navigate]);

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("O campo Email é obrigatório!")
      .email("Passe um email válido!"),
    senha: yup
      .string()
      .required("O campo senha é obrigatório!")
      .min(6, "A tem no mínimo 6 caracteres!"),
  });

  function sendDados(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorLogin("");
    schema
      .validate({ email, senha }, { abortEarly: false })
      .then((valid) => {
        loginUser(valid.email, valid.senha);
      })
      .catch((err) => {
        setErrorLogin(err.errors[0]);
      });
  }

  return (
    <>
      <Header />
      <LoginSection>
        <LoginForm onSubmit={sendDados}>
          <TituloLogin>Faça login</TituloLogin>
          <label htmlFor="email">Email</label>
          <Input
            value={email}
            onChange={({ target }) => {
              setEmail(target.value);
              setErrorLogin("");
              setError({ currentError: false, nameError: "" });
            }}
            id="email"
          />
          <label htmlFor="email">Senha</label>
          <Input
            value={senha}
            onChange={({ target }) => {
              setSenha(target.value);
              setErrorLogin("");
              setError({ currentError: false, nameError: "" });
            }}
            id="senha"
          />
          <Button color="primary" style={{ marginTop: "10px" }}>
            Enviar
          </Button>
          {errorLogin && <DivError>{errorLogin}</DivError>}
          {error.currentError && <DivError>{error.nameError}</DivError>}
        </LoginForm>
      </LoginSection>
    </>
  );
};

export default Login;
