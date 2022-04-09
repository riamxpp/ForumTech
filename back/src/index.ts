// import express from "express";
const express = require("express");
import routes from "./routes/routes";
const app = express();
const port = 3333;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(routes);

app.listen(port, () => {
  console.log("Servidor iniciado!");
});
