import { createContext, useState } from "react";
import {
  ErrorInterface,
  ForumTech,
  ForumTechProps,
  QuestionInterface,
  RespostaInterface,
  User,
} from "./ForumIterface";
import initialValues from "./InitialValues";
import api from "../api";
import { UserInterfaceCadastro } from "../components/Cadastro/InterfaceCadastro";

export const ForumContext = createContext<ForumTech>(initialValues);

export const ForumStorage = ({ children }: ForumTechProps) => {
  const [questions, setQuestions] = useState<QuestionInterface[]>([
    initialValues.questions[0],
  ]);
  const [question, setQuestion] = useState<QuestionInterface>(
    initialValues.question
  );
  const [respostas, setRespostas] = useState<RespostaInterface[]>([
    initialValues.respostas[0],
  ]);
  const [loading, setLoading] = useState<boolean>(initialValues.loading);
  const [error, setError] = useState<ErrorInterface>(initialValues.error);
  const [user, setUser] = useState<User>(initialValues.user);

  const getQuestions = async () => {
    try {
      setLoading(true);
      setError({ currentError: false, nameError: "" });
      const resultado = await api.get<QuestionInterface[]>(
        "/get-all-questions"
      );
      setQuestions(resultado.data);
    } catch (err) {
      setLoading(false);
      setError({ currentError: true, nameError: "Error ao pegar questions!" });
    } finally {
      setLoading(false);
      return questions;
    }
  };

  const getRespostaDeUmaPergunta = async (idQuestion: number) => {
    try {
      setLoading(true);
      const resultado = await api.post("/pega-respostas", { idQuestion });
      setRespostas(resultado.data);
    } catch (err) {
      setLoading(false);
      setError({
        currentError: true,
        nameError: "Error ao pegar respostas da pergunta!",
      });
    } finally {
      setLoading(false);
    }
  };

  const createUser = (user: UserInterfaceCadastro) => {
    const name = user.name,
      email = user.email,
      senha = user.senha;
    api
      .post("/create-user", { name, email, senha })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        setError({
          currentError: true,
          nameError: "Error ao cadastrar usuário!",
        });
      });
  };

  const loginUser = async (email: string, senha: string) => {
    setError({
      currentError: false,
      nameError: "",
    });

    api
      .post("/login-user", { email, senha })
      .then((response) => {
        setUser(response.data.user);
      })
      .catch((err) => {
        setError({
          currentError: true,
          nameError: "Error ao fazer Login!",
        });
      });
  };

  const enviaResposta = (
    idQuestion: number,
    idUser: number,
    name: string,
    answer: string
  ) => {
    api
      .post("/adicionar-resposta", { idQuestion, idUser, name, answer })
      .then((response) => console.log(response))
      .catch((err) => {
        console.log(err);
      });
  };

  const enviaPergunta = (
    idUser: number,
    name: string,
    language: string,
    pergunta: string
  ) => {
    api
      .post("/save-question", { idUser, name, language, pergunta })
      .then((response) => console.log(response))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ForumContext.Provider
      value={{
        questions,
        setQuestions,
        respostas,
        setRespostas,
        question,
        setQuestion,
        loading,
        setLoading,
        error,
        setError,
        user,
        setUser,
        getQuestions,
        getRespostaDeUmaPergunta,
        createUser,
        loginUser,
        enviaResposta,
        enviaPergunta,
      }}
    >
      {children}
    </ForumContext.Provider>
  );
};
