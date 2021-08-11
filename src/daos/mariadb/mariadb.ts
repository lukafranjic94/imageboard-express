import mysql from "mysql";
import fs from "fs";
import AppRootDir from "app-root-dir";
import path from "path";

const rawData: string = fs
  .readFileSync(path.resolve(AppRootDir.get(), "config.json"))
  .toString();

const config = JSON.parse(rawData);
const databaseConfig = config.database;

export const connection = mysql.createPool({
  host: databaseConfig.host,
  user: databaseConfig.user,
  password: databaseConfig.password,
  database: databaseConfig.database,
});
