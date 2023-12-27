import express from 'express'
import { getUser, updateUser } from '../controllers/users.controllers.js'

const router = express.Router()

router.get('/api/users/find/:userId', getUser)
router.put('/api/users', updateUser)

export default router
