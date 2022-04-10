import { Request, Response } from "express";
import {
  InterfaceAnswersResult,
  InterfaceSaveAnswer,
} from "./InterfaceAnswerController";
const AnswersModel = require("../../models/Answers/Answers");
const { currentDate } = require("../../util/DataAtual");

class AnswersController {
  async saveAnswer(req: Request, res: Response) {
    const { idQuestion, idUser, name, answer } = req.body;
    const resultado: InterfaceSaveAnswer = await AnswersModel.saveAnswers({
      idQuestion,
      idUser,
      name,
      answer,
      data: currentDate(),
    });
    return res.json(resultado);
  }

  async removeAnswer(req: Request, res: Response) {
    const { idAnswer } = req.body;
    await AnswersModel.deleteAnswers(idAnswer);
    return res.json("Removido com sucesso");
  }

  async getAllAnswer(req: Request, res: Response) {
    const { idQuestion } = req.body;
    const resultado: Array<InterfaceAnswersResult> = await AnswersModel.getAnswers(
      idQuestion
    );
    return res.json(resultado[0]);
  }
}

module.exports = new AnswersController();
