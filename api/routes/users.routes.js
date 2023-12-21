import express from 'express'
import { getUser } from '../controllers/users.controllers.js'

const router = express.Router()

router.get('/api/users/find/:userId', getUser)

export default router
