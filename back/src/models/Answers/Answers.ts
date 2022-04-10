import { Connection } from "mysql";
import { InterfaceSaveAnswers } from "./InterfaceAnswers";

const { connection } = require("../../database/index");

class AnswersModel {
  async saveAnswers(answer: InterfaceSaveAnswers) {
    const conn: Connection = await connection();
    const sql =
      "INSERT INTO answer (idQuestion, idUser, name, answer, data) VALUES (?, ?, ?, ?, ?);";
    const values = [
      answer.idQuestion,
      answer.idUser,
      answer.name,
      answer.answer,
      answer.data,
    ];
    return await conn.query(sql, values);
  }

  async deleteAnswers(idAnswer: number) {
    const conn: Connection = await connection();
    const sql = "DELETE FROM answer WHERE id = ?";

    return await conn.query(sql, idAnswer);
  }

  async getAnswers(idQuestion: number) {
    const conn: Connection = await connection();
    const sql = "SELECT * FROM answer WHERE idQuestion = ?";
    return await conn.query(sql, idQuestion);
  }
}

module.exports = new AnswersModel();
