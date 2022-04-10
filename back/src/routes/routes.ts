const { Router } = require("express");
const routes = new Router();

const Questions = require("../controllers/QuestionController/QuestionController");
const Answers = require("../controllers/AnswersController/AnswersController");
const User = require("../controllers/UserController/UserController");

routes.post("/save-question", Questions.saveQuestion);
routes.post("/remove-question", Questions.removeQuestion);

routes.post("/adicionar-resposta", Answers.saveAnswer);
routes.post("/remover-resposta", Answers.removeAnswer);
routes.get("/pega-respostas", Answers.getAllAnswer);

routes.post("/create-user", User.saveUser);
routes.delete("/delete-user", User.removeUser);
routes.post("/login-user", User.loginUser);

module.exports = routes;
