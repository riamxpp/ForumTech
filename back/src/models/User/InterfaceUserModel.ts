export interface InterfaceUserModel {
  name: string;
  email: string;
  senha: string;
}

export interface InterfaceMessagesUser {
  message: string;
  error: boolean;
  user?: User;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Questions {
  idUser: number;
  name: string;
  language: string;
  pergunta: string;
  numberComments: number;
  data?: Date;
}

export interface InterfaceAddLikeOnProject {
  idUser: number;
  likedPost: boolean;
  commentedPost: boolean;
}
