import Cart from "../models/CartModels.js";
import Product from "../models/ProductModels.js";

export const getCart = async (req, res) => {
  try {
    const usersId = req.user?.id;
    const cart = await Cart.findAll({
      where: { usersId },
      include: {
        model: Product,
        attributes: ["name", "description", "price", "sizes", "image"],
      },
    });
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  // console.log(req.body)
  const usersId = req.user?.id; // Ambil userId dari session atau token
  try {
    const product = await Product.findByPk(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    const existingCartItem = await Cart.findOne({
      where: { productId, usersId },
    });

    if (existingCartItem) {
      existingCartItem.quantity += quantity;
      await existingCartItem.save();
    } else {
      await Cart.create({ usersId, productId, quantity, selected: true });
    }

    res.status(201).json({ message: "Product added to cart" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateCart = async (req, res) => {
  const { id } = req.params;
  const { quantity, selected } = req.body;
  const usersId = req.user?.id;

  try {
    const cartItem = await Cart.findOne({ where: { id, usersId } });

    if (!cartItem)
      return res.status(404).json({ error: "Cart item not found" });

    if (quantity !== undefined) cartItem.quantity = quantity;
    if (selected !== undefined) cartItem.selected = selected;

    await cartItem.save();
    res.status(200).json({ message: "Cart updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const removeFromCart = async (req, res) => {
  const { id } = req.params;
  const usersId = req.user?.id; // Ambil userId dari session atau token

  try {
    const cartItem = await Cart.findOne({ where: { id, usersId } });
    if (!cartItem)
      return res.status(404).json({ error: "Cart item not found" });

    await cartItem.destroy();
    res.status(200).json({ message: "Product removed from cart" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
