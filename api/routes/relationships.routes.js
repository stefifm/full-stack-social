import express from 'express'
import {
  addRelationships,
  deleteRelationships,
  getRelationships
} from '../controllers/relationships.controllers.js'

const router = express.Router()

router.get('/api/relationships', getRelationships)
router.post('/api/relationships', addRelationships)
router.delete('/api/relationships', deleteRelationships)

export default router
