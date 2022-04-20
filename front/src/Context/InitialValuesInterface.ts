import { UserInterfaceCadastro } from "../components/Cadastro/InterfaceCadastro";
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
  createUser: (user: UserInterfaceCadastro) => void;
  loginUser: (email: string, senha: string) => void;
  enviaResposta: (
    idQuestion: number,
    idUser: number,
    name: string,
    answer: string
  ) => void;

  enviaPergunta: (
    idUser: number,
    name: string,
    language: string,
    pergunta: string
  ) => void;
}
