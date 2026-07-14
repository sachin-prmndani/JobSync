import express from "express"
import verifyToken from "../middleware/verifyToken.js"
import upload from "../middleware/upload.js"
import { analyzeResume } from '../controller/aiAnalysis.controller.js'

const router = express.Router()

router.use(verifyToken)

const handleResumeUpload = (req, res, next) => {
    upload.single('resume')(req, res, (error) => {
        if (error) {
            return res.status(400).json({ message: error.message })
        }

        next()
    })
}

router.post("/analyze", handleResumeUpload, analyzeResume)

export default router
