import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;
const Product = db.define(
  "Product",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    sizes: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [["S", "M", "L", "XL", "XXL"]],
          msg: "Size must be one of: S, M, L, XL, XXL",
        },
      },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    category:{
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    freezeTableName: true,
  }
);

export default Product;
(async () => {
  await db.sync({alter: true});
})();
