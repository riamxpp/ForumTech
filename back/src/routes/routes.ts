const { Router } = require("express");
const routes = new Router();

const Questions = require("../controllers/QuestionController");
const Answers = require("../controllers/AnswersController");

routes.post("/save-question", Questions.saveQuestion);
routes.post("/remove-question", Questions.removeQuestion);

routes.post("/adicionar-resposta", Answers.saveAnswer);
routes.post("/remover-resposta", Answers.removeAnswer);

module.exports = routes;
