import express from "express";
import { authenticateJWT } from "../controllers/UserController.js";
import {
  getCheckoutData,
  createOrder,
  isAdmin,
  getAllCheckoutData,
} from "../controllers/CheckoutController.js";

const router = express.Router();

router.get("/checkout", authenticateJWT, getCheckoutData);
router.post("/order", authenticateJWT, createOrder);
router.get("/admin/checkout", authenticateJWT,  getAllCheckoutData);

export default router;
