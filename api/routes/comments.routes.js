import express from 'express'
import { addComment, getComments } from '../controllers/comments.controllers.js'

const router = express.Router()

router.get('/api/comments', getComments)

router.post('/api/comments', addComment)

export default router
