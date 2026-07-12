import express from 'express'
import verifyToken from '../middleware/verifyToken.js'
import { generateEmail } from '../controller/aiEmail.controller.js'

const router = express.Router()

router.post('/generate', verifyToken, generateEmail)

export default router
