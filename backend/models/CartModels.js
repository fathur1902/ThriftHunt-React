import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Product from "./ProductModels.js";
import Users from "./UsersModels.js";

const { DataTypes } = Sequelize;

const Cart = db.define(
  "Cart",
  {
    usersId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Users,
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Product,
        key: "id",
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false,
    },
    selected: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    freezeTableName: true,
  }
);

Cart.associate = (models) => {
  Cart.belongsTo(models.Users, {
    foreignKey: "usersId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
};

Product.hasMany(Cart, { foreignKey: "productId" });
Cart.belongsTo(Product, { foreignKey: "productId" });

export default Cart;

(async () => {
  await db.sync();
})();
