import { Request, Response } from "express";
const AnswersModel = require("../models/Answers/Answers");
const { currentDate } = require("../util/DataAtual");

class AnswersController {
  async saveAnswer(req: Request, res: Response) {
    const { idQuestion, name, answer } = req.body;
    const resultado = await AnswersModel.saveAnswers({
      idQuestion,
      name,
      answer,
      data: currentDate(),
    });
    return res.json(resultado);
  }

  async removeAnswer(req: Request, res: Response) {
    const { idAnswer } = req.body;
    const resultado = await AnswersModel.deleteAnswers(idAnswer);
    if (resultado) return res.json("Removido com sucesso");
    return res
      .status(404)
      .json({ error: new Error("Error ao remover pergunta") });
  }
}

module.exports = new AnswersController();
