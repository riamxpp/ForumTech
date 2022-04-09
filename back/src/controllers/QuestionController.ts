import { Request, Response } from "express";
const QuestionModel = require("../models/Questions/Questions");
const { currentDate } = require("../util/DataAtual");

class QuestionController {
  async saveQuestion(req: Request, res: Response) {
    const { name, language, pergunta } = req.body;
    const objectQuestionCompleted = {
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
}

module.exports = new QuestionController();
