import { db } from '../connect.js'
import jwt from 'jsonwebtoken'

const getUser = (req, res) => {
  const userId = req.params.userId
  const query = 'SELECT * FROM users WHERE id = ?'

  db.query(query, [userId], (err, data) => {
    if (err) return res.status(500).json({ message: err.message })
    const { password, ...info } = data[0]
    return res.status(200).json(info)
  })
}

export { getUser }
