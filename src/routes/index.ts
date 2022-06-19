import express, { Request, Response } from "express";
import { requireAuth, NotFoundError } from "@kbhhtickets/common";
import { Order } from "../models/order";

const router = express.Router();

router.get("api/orders", requireAuth, async (req: Request, res: Response) => {
  const orders = Order.find({ userId: req.currentUser!.id }).populate("ticket");
  res.send(orders);
});

export { router as indexOrderRouter };
