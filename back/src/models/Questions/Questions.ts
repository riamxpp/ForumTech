import { InterfaceQuestion } from "./InterfaceQuestions";
import { connection } from "../../database";

class QuestionsModel {
  async createQuestion(question: InterfaceQuestion) {
    const conn = await connection();
    const sql =
      "INSERT INTO questions (idUser, name, language, pergunta, data) VALUES (?, ?, ?, ?, ?);";
    const values = [
      question.idUser,
      question.name,
      question.language,
      question.pergunta,
      question.date,
    ];

    return await conn.query(sql, values);
  }

  async deleteQuestion(idQuestion: number) {
    const conn = await connection();
    const sql = "DELETE FROM questions WHERE id = ?";
    const sql2 = "DELETE FROM answer WHERE idQuestion = ?";
    await conn.query(sql, idQuestion);
    await conn.query(sql2, idQuestion);
  }
}

module.exports = new QuestionsModel();
