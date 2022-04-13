export interface FotoBackgroundInterface {
  bkImage: string;
}

export interface PropsQuestionsInterface {
  name: string;
  pergunta: string;
  language: string;
  numberComments: number;
  data: string;
  onClick: () => void;
}
