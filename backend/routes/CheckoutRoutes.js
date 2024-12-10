import express from "express";
import { authenticateJWT } from "../controllers/UserController.js";
import { getCheckoutData, createOrder } from "../controllers/CheckoutController.js";

const router = express.Router();

router.get("/checkout", authenticateJWT, getCheckoutData); 
router.post("/checkout", authenticateJWT, createOrder); 

export default router;
