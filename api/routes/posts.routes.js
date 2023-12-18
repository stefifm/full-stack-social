import express from 'express'
import { createPost, getPosts } from '../controllers/posts.controllers.js'

const router = express.Router()

router.get('/api/posts', getPosts)
router.post('/api/posts', createPost)

export default router
