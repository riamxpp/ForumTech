import { Request, Response } from "express";
import { InterfaceSaveQuestion } from "./InterfaceQuestionController";
const QuestionModel = require("../../models/Questions/Questions");
const { currentDate } = require("../../util/DataAtual");

class QuestionController {
  async saveQuestion(req: Request, res: Response) {
    const { idUser, name, language, pergunta } = req.body;
    const objectQuestionCompleted: InterfaceSaveQuestion = {
      idUser,
      name,
      language,
      pergunta,
      date: currentDate(),
    };

    const value = await QuestionModel.createQuestion(objectQuestionCompleted);
    return res.json(value);
  }

  async removeQuestion(req: Request, res: Response) {
    const { idQuestion } = req.body;
    await QuestionModel.deleteQuestion(idQuestion);
    return res.json("Removido com sucesso!");
  }

  async numberOfQuestion(idQuestion: number) {
    const resultado = await QuestionModel.takeNumberOfComments(idQuestion);
    return resultado[0].length;
  }

  async updateNumberOfQuestion(idQuestion: number) {
    const numberComments = await this.numberOfQuestion(idQuestion);
    const resultado = await QuestionModel.updateNumberOfComments({
      numberComments,
      idQuestion,
    });
    return resultado;
  }

  async numberOfCommented(req: Request, res: Response) {
    const { idQuestion } = req.body;
    const resultado = await QuestionModel.getAllQuestionsComments(idQuestion);
    return res.json(resultado[0].length);
  }
}

module.exports = new QuestionController();
