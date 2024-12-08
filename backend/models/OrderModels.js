import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import User from "./UsersModels.js";

const { DataTypes } = Sequelize;

const Order = db.define(
  "Order",
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    paymentMethod: {
      type: DataTypes.ENUM("bank", "cod"),
      allowNull: false,
    },
    totalAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("pending", "completed", "cancelled"),
      defaultValue: "pending",
    },
  },
  {
    freezeTableName: true,
  }
);

User.hasMany(Order, { foreignKey: "userId" });
Order.belongsTo(User, { foreignKey: "userId" });

export default Order;

(async () => {
  await db.sync();
})();
