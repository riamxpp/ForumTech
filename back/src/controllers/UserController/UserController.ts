import { Request, Response } from "express";
import { UserDataController } from "./InterfaceUserController";
const userModel = require("../../models/User/User");

class UserController {
  async saveUser(req: Request, res: Response) {
    const { name, email, senha } = req.body;
    const dados = await userModel.createUser({
      name,
      email,
      senha,
    });

    if (dados.error) {
      return res.json(dados.message);
    } else {
      return res.json("Usuário criado com sucesso!");
    }
  }

  async removeUser(req: Request, res: Response) {
    const { idUser } = req.body;
    const resultado = await userModel.deleteUser(idUser);
    return res.json(resultado);
  }

  async loginUser(req: Request, res: Response) {
    const { email, senha } = req.body;
    const resultado = await userModel.loginUser(email, senha);
    if (resultado.error) {
      return res.status(404).json(resultado);
    }
    return res.json(resultado);
  }
}

module.exports = new UserController();
