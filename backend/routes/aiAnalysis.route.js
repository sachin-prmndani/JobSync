import express from "express"
import verifyToken from "../middleware/verifyToken.js"
import upload from "../middleware/upload.js"
import { analyzeResume } from '../controller/aiAnalysis.controller.js'

const router = express.Router()

router.use(verifyToken)

router.post("/analyze", upload.single('resume'), analyzeResume)

export default router