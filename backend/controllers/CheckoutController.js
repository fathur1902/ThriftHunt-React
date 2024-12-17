import Cart from "../models/CartModels.js";
import Product from "../models/ProductModels.js";
import Users from "../models/UsersModels.js";
import Checkout from "../models/CheckoutModels.js";

export const getCheckoutData = async (req, res) => {
  const usersId = req.user?.id;
  try {
    const user = await Users.findByPk(usersId, {
      attributes: [
        "id",
        "name",
        "address",
        "phone",
        "city",
        "province",
        "postalCode",
        "country",
      ],
    });

    if (!user) return res.status(404).json({ error: "User not found" });

    const cartItems = await Cart.findAll({
      where: { usersId, selected: true },
      include: {
        model: Product,
        attributes: ["name", "price", "sizes", "image"],
      },
    });
    cartItems.forEach((item) => {
      console.log(item.Product?.price, item.quantity);
    });

    const subtotal = cartItems.reduce((total, item) => {
      if (item?.Product?.price && item.quantity) {
        return total + item.Product.price * item.quantity;
      } else {
        console.error("Data item tidak valid:", item);
        return total;
      }
    }, 0);

    console.log(cartItems);
    console.log(subtotal);

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
    if (!paymentMethod) {
      return res.status(400).json({ error: "Payment method is required" });
    }

    const cartItems = await Cart.findAll({
      where: { usersId, selected: true, status: "pending" },
      include: {
        model: Product,
        attributes: ["name", "price", "sizes", "image"],
      },
    });

    if (!cartItems.length) {
      return res.status(400).json({ error: "No items selected in cart" });
    }

    const subtotal = cartItems.reduce(
      (total, item) => total + (item.Product.price || 0) * item.quantity,
      0
    );

    const discount = 10000;
    const total = subtotal - discount;

    // Buat order baru
    const order = await Checkout.create({
      usersId,
      total,
      paymentMethod,
    });

    // Update status item menjadi "checked_out"
    await Cart.update(
      { status: "checked_out" },
      { where: { usersId, selected: true, status: "pending" } }
    );

    console.log("Order berhasil dibuat:", order);

    res.status(201).json({
      message: "Order created successfully",
      orderId: order.id,
      total,
    });
  } catch (err) {
    console.error("Error di createOrder:", err.message);
    res.status(500).json({ error: err.message });
  }
};

export const getAllCheckoutData = async (req, res) => {
  try {
    const orders = await Cart.findAll({
      where: { selected: true },
      include: [
        {
          model: Users,
          as: "user",
          required: false,
          attributes: [
            "name",
            "address",
            "phone",
            "city",
            "province",
            "postalCode",
            "country",
          ],
        },
        {
          model: Product,
          required: false,
          attributes: ["name", "price", "sizes", "image"],
        },
      ],
    });
    console.log("Debug Orders:", JSON.stringify(orders, null, 2));

    if (!orders || orders.length === 0) {
      return res.status(404).json({ error: "Tidak ada pesanan ditemukan." });
    }

    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const isAdmin = (req, res, next) => {
  if (req.user?.role === "admin") {
    next();
  } else {
    res.status(403).json({ error: "Akses ditolak. Hanya untuk admin." });
  }
};

export const updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    if (!status) {
      return res.status(400).json({ error: "Status is required" });
    }

    const order = await Cart.findByPk(id);

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    order.status = status;
    await order.save();

    console.log(`Order ID ${id} status updated to: ${status}`);
    res
      .status(200)
      .json({ message: "Order status updated successfully", order });
  } catch (err) {
    console.error("Error updating order status:", err.message);
    res.status(500).json({ error: err.message });
  }
};
