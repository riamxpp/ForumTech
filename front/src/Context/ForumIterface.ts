import { ReactNode } from "react";

export interface ForumTechProps {
  children: ReactNode;
}

export interface QuestionInterface {
  id: number;
  idUser: number;
  name: string;
  language: string;
  pergunta: string;
  numberComments: number;
  data: string;
}

export interface RespostaInterface {
  id: number;
  idQuestion: number;
  idUser: number;
  name: string;
  answer: string;
  data: string;
}

export interface ErrorInterface {
  currentError: boolean;
  nameError: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface ForumTech {
  questions: QuestionInterface[];
  setQuestions: (value: QuestionInterface[]) => void;
  respostas: RespostaInterface[];
  setRespostas: (value: RespostaInterface[]) => void;
  question: QuestionInterface;
  setQuestion: (value: QuestionInterface) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
  error: ErrorInterface;
  setError: (values: ErrorInterface) => void;
  user: User;
  setUser: (value: User) => void;
  getQuestions: () => Promise<QuestionInterface[]>;
  getRespostaDeUmaPergunta: (idQuestion: number) => void;
}
