import { db } from '../connect.js'
import jwt from 'jsonwebtoken'

const getLikes = (req, res) => {
  const query = `
     SELECT userId FROM likes WHERE postId = ?
    
    `

  db.query(query, [req.query.postId], (err, data) => {
    if (err) return res.status(500).json({ message: err.message })
    return res.status(200).json(data.map((like) => like.userId))
  })
}

const addLike = (req, res) => {
  const token = req.cookies.accessToken

  if (!token) return res.status(401).json({ message: 'Unauthorized' })

  jwt.verify(token, 'secretkey', (err, userInfo) => {
    if (err) return res.status(403).json({ message: 'Token is not valid' })

    const query = 'INSERT INTO likes (`userId`,`postId`) VALUES (?)'

    const values = [userInfo.id, req.body.postId]

    db.query(query, [values], (err, data) => {
      if (err) return res.status(500).json({ message: err.message })
      return res.status(200).json({ message: 'Post has been liked' })
    })
  })
}

const deleteLike = (req, res) => {
  const token = req.cookies.accessToken

  if (!token) return res.status(401).json({ message: 'Unauthorized' })

  jwt.verify(token, 'secretkey', (err, userInfo) => {
    if (err) return res.status(403).json({ message: 'Token is not valid' })

    const query = 'DELETE FROM likes WHERE `userId` = ? AND `postId` = ?'

    db.query(query, [userInfo.id, req.query.postId], (err, data) => {
      if (err) return res.status(500).json({ message: err.message })
      return res.status(200).json({ message: 'Post has been disliked' })
    })
  })
}

export { getLikes, addLike, deleteLike }
