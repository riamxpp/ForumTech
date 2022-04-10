import { Connection } from "mysql";

const mysql = require("mysql2/promise");

export async function connection() {
  const connection: Connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "forumTech",
    port: 3312,
  });

  return connection;
}
