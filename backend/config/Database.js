import { Sequelize } from "sequelize";

const db = new Sequelize("thrifthunt_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
