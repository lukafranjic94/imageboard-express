import mysql from "mysql";

export const connection = mysql.createPool({
  host: "localhost",
  user: "luka",
  password: "znojusimus22",
  database: "imageboard",
});
