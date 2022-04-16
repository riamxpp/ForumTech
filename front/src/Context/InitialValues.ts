import { InitialValuesInterface } from "./InitialValuesInterface";

const initialValues: InitialValuesInterface = {
  questions: [
    {
      id: 0,
      idUser: 0,
      name: "",
      language: "",
      pergunta: "",
      numberComments: 0,
      data: "",
    },
  ],
  setQuestions: () => {},
  respostas: [
    {
      id: 0,
      idQuestion: 0,
      idUser: 0,
      name: "",
      answer: "",
      data: "",
    },
  ],
  setRespostas: () => {},
  question: {
    id: 0,
    idUser: 0,
    name: "",
    language: "",
    pergunta: "",
    numberComments: 0,
    data: "",
  },
  setQuestion: () => {},
  loading: false,
  setLoading: () => {},
  error: { currentError: false, nameError: "" },
  setError: () => {},
  user: { id: 0, name: "", email: "" },
  setUser: () => {},
  getQuestions: () => {},
  getRespostaDeUmaPergunta: () => {},
  createUser: () => {},
  loginUser: (email: string, senha: string) => {},
};
export default initialValues;
