import express from 'express'
import { searchJobs } from '../controller/jobSearch.controller.js'
import verifyToken from '../middleware/verifyToken.js'

const router = express.Router()

router.post('/search', verifyToken, searchJobs)

export default router
