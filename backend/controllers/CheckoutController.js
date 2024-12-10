import Cart from "../models/CartModels.js";
import Product from "../models/ProductModels.js";
import Users from "../models/UsersModels.js";
import Checkout from "../models/CheckoutModels.js";

export const getCheckoutData = async (req, res) => {
  const usersId = req.user?.id;
  try {
    const user = await Users.findByPk(usersId, {
      attributes: ["name", "address", "phone"],
    });

    if (!user) return res.status(404).json({ error: "User not found" });

    const cartItems = await Cart.findAll({
      where: { usersId, selected: true },
      include: {
        model: Product,
        attributes: ["name", "price", "sizes", "image"],
      },
    });

    const subtotal = cartItems.reduce(
      (total, item) => total + item.Product.price * item.quantity,
      0
    );

    res.status(200).json({
      user,
      cartItems,
      subtotal,
      shipping: 0,
      discount: 10000, 
      total: subtotal - 10000,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createOrder = async (req, res) => {
  const usersId = req.user?.id;
  const { paymentMethod } = req.body;

  try {
    const cartItems = await Cart.findAll({
      where: { usersId, selected: true },
    });

    if (!cartItems.length)
      return res.status(400).json({ error: "No items selected in cart" });

    const subtotal = cartItems.reduce(
      (total, item) => total + item.Product.price * item.quantity,
      0
    );

    const discount = 10000; 
    const total = subtotal - discount;
    const order = await Checkout.create({
      usersId,
      total,
      paymentMethod,
    });

    // Hapus item dari keranjang
    await Cart.destroy({ where: { usersId, selected: true } });

    res.status(201).json({
      message: "Order created successfully",
      orderId: order.id,
      total,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
