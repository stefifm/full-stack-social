import express from 'express'

const router = express.Router()

router.get('/api/users', (req, res) => res.send('Hello world!'))

export default router
