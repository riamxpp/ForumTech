// import express from "express";
const express = require("express");
const routesGlobal = require("./routes/routes");
const app = express();
const port = 3333;
const cors = require("cors");

app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(routesGlobal);

app.listen(port, () => {
  console.log("Servidor iniciado!");
});
