import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UsersModels.js";

const { DataTypes } = Sequelize;

const Checkout = db.define(
  "Checkout",
  {
    usersId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Users,
        key: "id",
      },
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    paymentMethod: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "Pending",
    },
  },
  {
    freezeTableName: true,
  }
);
Users.hasMany(Checkout, { foreignKey: "usersId" });
Checkout.belongsTo(Users, { foreignKey: "usersId" });
export default Checkout;

(async () => {
  await db.sync()
})();
