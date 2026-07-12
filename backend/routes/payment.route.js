import express from "express"
import { createOrder, verifyPayment, getPaymentStatus, getTotalPayments } from "../controller/payment.controller.js"
import verifyToken from "../middleware/verifyToken.js"

const router = express.Router()

router.post("/create-order", verifyToken, createOrder)
router.post("/verify", verifyToken, verifyPayment)
router.get("/status", verifyToken, getPaymentStatus)
router.get("/total", verifyToken, getTotalPayments)

export default router