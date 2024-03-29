import {
  InterfaceAddLikeOnProject,
  InterfaceMessagesUser,
  InterfaceUserModel,
  User,
} from "./InterfaceUserModel";
const { connection } = require("../../database/index");

class UserModel {
  async createUser(user: InterfaceUserModel) {
    const informacoes: InterfaceMessagesUser = { message: "", error: false };
    const conn = await connection();
    const sql = "INSERT INTO user (name, email, senha) VALUES (?, ?, ?)";
    const sqlVerificaEmail = "SELECT email FROM user WHERE email = ?";
    const values = [user.name, user.email, user.senha];

    const resultVerificaEmail = await conn.query(sqlVerificaEmail, user.email);

    if (resultVerificaEmail[0][0]) {
      informacoes.message = "Email já cadastrado";
      informacoes.error = true;
    } else {
      await conn.query(sql, values);
      informacoes.message = "Usuário cadastrado com sucesso!";
      informacoes.error = false;
    }
    return informacoes;
  }

  async deleteUser(idUser: number) {
    const conn = await connection();
    const sqlDeleteUser = "DELETE FROM user WHERE id = ?";
    const sqlDeleteQuestion = "DELETE FROM questions WHERE idUser = ?";
    const sqlDeleteAnswer = "DELETE FROM answer WHERE idUser = ?";
    // Apaga o usuario e todas as perguntas e respostas do usuairo;
    await conn.query(sqlDeleteUser, idUser);
    await conn.query(sqlDeleteQuestion, idUser);
    await conn.query(sqlDeleteAnswer, idUser);
  }

  async loginUser(email: string, senha: string) {
    const informacoes: InterfaceMessagesUser = { message: "", error: false };
    const conn = await connection();
    const sqlEmail = "SELECT id, name, email FROM user WHERE email = ?";
    const sqlSenha = "SELECT senha FROM user WHERE senha = ?";
    const resultEmail = await conn.query(sqlEmail, email);
    const resultSenha = await conn.query(sqlSenha, senha);

    if (resultEmail[0][0] && resultSenha[0][0]) {
      informacoes.error = false;
      informacoes.message = "Usuário logado com sucesso!";
      informacoes.user = resultEmail[0][0];
    } else {
      informacoes.error = true;
      informacoes.message = "Nenhum usuário encontrado!";
      informacoes.user = { id: 0, name: "", email: "" };
    }
    return informacoes;
  }
}

module.exports = new UserModel();
