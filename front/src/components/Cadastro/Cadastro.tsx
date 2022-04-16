import React, { useContext, useState } from "react";
import { Button, Input } from "reactstrap";
import Header from "../Header/Header";
import {
  CadastroStyleSection,
  CadastroStyleForm,
  DivError,
} from "./CadastroStyle";
import * as yup from "yup";
import { ForumContext } from "../../Context/ForumContext";

function Cadastro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errorForm, setErrorForm] = useState("");
  const { createUser } = useContext(ForumContext);

  const schema = yup.object().shape({
    name: yup.string().required("O campo name é obrigatório!"),
    email: yup
      .string()
      .email("Informe um email válido!")
      .required("O campo email é obrigatório!"),
    senha: yup
      .string()
      .required("O campo senha é obrigatório!")
      .min(6, "A senha deve ter no mínimo 6 caracteres!"),
  });

  async function enviaDados(event: React.FormEvent<HTMLFormElement>) {
    setErrorForm("");
    event.preventDefault();
    const valores = { name, email, senha };
    schema
      .validate(valores, { abortEarly: false })
      .then((valid) => {
        createUser(valores);
      })
      .catch((err) => {
        setErrorForm(err.errors[0]);
      });
  }

  return (
    <>
      <Header />
      <CadastroStyleSection>
        <CadastroStyleForm onSubmit={enviaDados}>
          <label htmlFor="name">Name</label>
          <Input
            value={name}
            onChange={({ target }) => setName(target.value)}
            id="name"
          />
          <label htmlFor="email">Email</label>
          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            id="email"
          />
          <label htmlFor="senha">Senha</label>
          <Input
            value={senha}
            onChange={({ target }) => setSenha(target.value)}
            id="senha"
          />
          <Button style={{ marginTop: "10px" }}>Cadastrar</Button>
          {errorForm && <DivError>{errorForm}</DivError>}
        </CadastroStyleForm>
      </CadastroStyleSection>
    </>
  );
}

export default Cadastro;
