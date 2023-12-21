import express from 'express'
import { addLike, deleteLike, getLikes } from '../controllers/likes.controllers.js'

const router = express.Router()

router.get('/api/likes', getLikes)
router.post('/api/likes', addLike)
router.delete('/api/likes', deleteLike)

export default router
