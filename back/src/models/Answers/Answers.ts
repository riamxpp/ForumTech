import { InterfaceSaveAnswers } from "./InterfaceAnswers";

const { connection } = require("../../database/index");

class AnswersModel {
  async saveAnswers(answer: InterfaceSaveAnswers) {
    const conn = await connection();
    const sql =
      "INSERT INTO answer (idQuestion, name, answer, data) VALUES (?, ?, ?, ?);";
    const values = [answer.idQuestion, answer.name, answer.answer, answer.data];
    return await conn.query(sql, values);
  }

  async deleteAnswers(idAnswer: number) {
    const conn = await connection();
    const sql = "DELETE FROM answer WHERE id = ?";

    const resultado = await conn.query(sql, idAnswer);
    if (resultado[0].affectedRows) {
      return true;
    }
    return false;
  }
}

module.exports = new AnswersModel();
