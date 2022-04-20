import React, { useContext, useState } from "react";
import Header from "../Header/Header";
import {
  AdicionarPerguntaForm,
  AdicionarPerguntaSection,
} from "./AdicionarPerguntaStyle";
import { Input, Button } from "reactstrap";
import * as yup from "yup";
import { DivEnviado, DivError } from "../Cadastro/CadastroStyle";
import { ForumContext } from "../../Context/ForumContext";

const AdicionarPergunta = () => {
  const [linguagem, setLinguagem] = useState("");
  const [pergunta, setPergunta] = useState("");
  const [error, setError] = useState("");
  const [enviado, setEnviado] = useState("");
  const { enviaPergunta, user } = useContext(ForumContext);

  const schema = yup.object().shape({
    linguagem: yup.string().required("O campo linguagem é obrigatório."),
    pergunta: yup.string().required("O campo pergunta é obrigatório."),
  });

  function sendDados(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    schema
      .validate({ linguagem, pergunta }, { abortEarly: false })
      .then((valid) => {
        setEnviado("Pergunta enviada com sucesso!");
        enviaPergunta(user.id, user.name, linguagem, pergunta);
      })
      .catch((err) => {
        setError(err.errors[0]);
      });
  }

  return (
    <>
      <Header />
      <AdicionarPerguntaSection>
        <AdicionarPerguntaForm onClick={sendDados}>
          <label htmlFor="linguagem">
            Sobre qual lingaguem é sua pergunta ?
          </label>
          <Input
            value={linguagem}
            onChange={({ target }) => {
              setLinguagem(target.value);
              setError("");
              setEnviado("");
            }}
            id="lingaguem"
            name="lingaguem"
          />
          <label htmlFor="pergunta">Pergunta</label>
          <Input
            value={pergunta}
            onChange={({ target }) => {
              setPergunta(target.value);
              setError("");
              setEnviado("");
            }}
            style={{ marginBottom: "7px" }}
            id="pergunta"
            name="pergunta"
          />
          <Button>Enviar</Button>
          {error && <DivError>{error}</DivError>}
          {enviado && <DivEnviado>{enviado}</DivEnviado>}
        </AdicionarPerguntaForm>
      </AdicionarPerguntaSection>
    </>
  );
};

export default AdicionarPergunta;
