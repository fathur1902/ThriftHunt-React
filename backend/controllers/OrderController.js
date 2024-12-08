import  createOrder  from "../models/OrderModels";

export const createOrderController = async (req, res) => {
  const { userId, address, paymentMethod, products, totalAmount } = req.body;

  if (!userId || !address || !paymentMethod || !products || !totalAmount) {
    return res.status(400).json({ message: "Invalid input data" });
  }

  try {
    const result = await createOrder({
      userId,
      address,
      paymentMethod,
      products,
      totalAmount,
    });

    if (result.success) {
      return res.status(201).json({
        message: "Order created successfully",
        orderId: result.orderId,
      });
    }

    return res.status(500).json({
      message: "Failed to create order",
      error: result.error,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error", error });
  }
};
