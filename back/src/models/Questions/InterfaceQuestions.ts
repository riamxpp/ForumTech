export interface InterfaceQuestion {
  idUser: number;
  name: string;
  language: string;
  pergunta: string;
  date: Date;
}

export interface InterfaceUpdateNumberOfComments {
  numberComments: number;
  idQuestion: number;
}
