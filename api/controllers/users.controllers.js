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

const updateUser = (req, res) => {
  const token = req.cookies.accessToken

  if (!token) return res.status(401).json({ message: 'Unauthorized' })

  jwt.verify(token, 'secretkey', (err, userInfo) => {
    if (err) return res.status(403).json({ message: 'Token is not valid' })

    const query =
      'UPDATE users SET `name`=?, `city`=?, `website`=?, `coverPic`=?, `profilePic`=? WHERE id = ?'

    const values = [
      req.body.name,
      req.body.city,
      req.body.website,
      req.body.coverPic,
      req.body.profilePic,
      userInfo.id
    ]

    db.query(query, values, (err, data) => {
      if (err) return res.status(500).json({ message: err.message })
      if (data.affectedRows > 0) return res.status(200).json({ message: 'Updated!' })
      return res.status(403).json({ message: 'You can update only your post!' })
    })
  })
}

export { getUser, updateUser }
