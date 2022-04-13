import {
  ErrorInterface,
  QuestionInterface,
  RespostaInterface,
  User,
} from "./ForumIterface";

export interface InitialValuesInterface {
  questions: QuestionInterface[];
  setQuestions: () => void;
  respostas: RespostaInterface[];
  setRespostas: () => void;
  question: QuestionInterface;
  setQuestion: () => void;
  loading: boolean;
  setLoading: () => void;
  error: ErrorInterface;
  setError: () => void;
  user: User;
  setUser: () => void;
  getQuestions: () => any;
  getRespostaDeUmaPergunta: (idQuestion: number) => void;
}
