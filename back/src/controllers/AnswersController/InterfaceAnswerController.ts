export interface InterfaceSaveAnswer {
  idQuestion: number;
  idUser: number;
  name: string;
  answer: string;
  data: Date;
}

export interface InterfaceAnswersResult {
  id: number;
  idQuestion: number;
  name: string;
  answer: string;
  data: Date;
}
