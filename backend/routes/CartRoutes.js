import express from "express";
import {
  getCart,
  addToCart,
  updateCart,
  removeFromCart,
} from "../controllers/CartController.js";
import { authenticateJWT } from "../controllers/UserController.js";

const router = express.Router();

router.get("/",authenticateJWT, getCart);
router.post("/",authenticateJWT, addToCart);
router.put("/:id",authenticateJWT, updateCart);
router.delete("/:id",authenticateJWT, removeFromCart);

export default router;
