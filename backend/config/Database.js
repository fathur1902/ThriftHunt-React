import { Sequelize } from "sequelize";

const db = new Sequelize("thrifthunt_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: console.log,
});
(async () => {
  try {
    await db.authenticate();
    console.log("Koneksi ke database berhasil!");
  } catch (error) {
    console.error("Koneksi ke database gagal:", error.message);
  }
})();

export default db;
