import {
  InterfaceQuestion,
  InterfaceUpdateNumberOfComments,
} from "./InterfaceQuestions";
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

  async takeNumberOfComments(idQuestion: number) {
    const conn = await connection();
    const sql = "SELECT * FROM answer WHERE idQuestion = ?";
    return await conn.query(sql, idQuestion);
  }

  async updateNumberOfComments(question: InterfaceUpdateNumberOfComments) {
    const conn = await connection();
    const sql = "UPDATE questions SET numberComments = ? WHERE id = ?";
    const values = [question.numberComments, question.idQuestion];
    return await conn.query(sql, values);
  }

  async getQuestions() {
    const conn = await connection();
    const sql = "SELECT * FROM questions";
    return await conn.query(sql);
  }

  async getAllUserLike(idUser: number) {
    const conn = await connection();
    const sql = "SELECT * FROM userinteraction WHERE idUser = ?";
    return await conn.query(sql, idUser);
  }

  async getAllQuestionsComments(idQuestion: number) {
    const conn = await connection();
    const sql = "SELECT * FROM answer WHERE idQuestion = ?";
    return await conn.query(sql, idQuestion);
  }
}

module.exports = new QuestionsModel();
