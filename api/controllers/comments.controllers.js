import { db } from '../connect.js'
import jwt from 'jsonwebtoken'
import moment from 'moment'

const getComments = (req, res) => {
  const query = `
    SELECT c.*, u.id AS userId, u.name, u.profilePic 
    FROM comments AS c JOIN users AS u 
    ON u.id = c.userId
    WHERE c.postId = ?
    ORDER BY c.createdAt DESC
    `

  db.query(query, [req.query.postId], (err, data) => {
    if (err) return res.status(500).json({ message: err.message })
    return res.status(200).json(data)
  })
}

const addComment = (req, res) => {
  const token = req.cookies.accessToken

  if (!token) return res.status(401).json({ message: 'Unauthorized' })

  jwt.verify(token, 'secretkey', (err, userInfo) => {
    if (err) return res.status(403).json({ message: 'Token is not valid' })

    const query = 'INSERT INTO comments (`desc`,`createdAt`,`userId`, `postId`) VALUES (?)'

    const values = [
      req.body.desc,
      moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
      userInfo.id,
      req.body.postId
    ]

    db.query(query, [values], (err, data) => {
      if (err) return res.status(500).json({ message: err.message })
      return res.status(200).json({ message: 'Comment created successfully' })
    })
  })
}

export { getComments, addComment }
