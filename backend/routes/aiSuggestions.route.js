import express from 'express'
import verifyToken from '../middleware/verifyToken.js'
import { improveContent, improveSummaryText } from '../controller/aiSuggestion.controller.js'

const router = express.Router()

router.use(verifyToken)

router.post('/improve-content', improveContent)
router.post('/improve-summary', improveSummaryText)

export default router
