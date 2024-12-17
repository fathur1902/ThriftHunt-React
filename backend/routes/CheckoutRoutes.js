import express from "express";
import { authenticateJWT } from "../controllers/UserController.js";
import {
  getCheckoutData,
  createOrder,
  isAdmin,
  getAllCheckoutData,
  updateOrderStatus,
} from "../controllers/CheckoutController.js";

const router = express.Router();

router.get("/checkout", authenticateJWT, getCheckoutData);
router.post("/order", authenticateJWT, createOrder);
router.get("/admin/checkout", authenticateJWT, getAllCheckoutData);
router.patch("/checkout/:id", authenticateJWT, updateOrderStatus);



export default router;
