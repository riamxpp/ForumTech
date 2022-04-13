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
      }}
    >
      {children}
    </ForumContext.Provider>
  );
};
