import moment from 'moment/moment.js'
import { db } from '../connect.js'
import jwt from 'jsonwebtoken'

const getPosts = (req, res) => {
  const userId = req.query.userId
  const token = req.cookies.accessToken

  if (!token) return res.status(401).json({ message: 'Unauthorized' })

  jwt.verify(token, 'secretkey', (err, userInfo) => {
    if (err) return res.status(403).json({ message: 'Token is not valid' })

    const query =
      userId !== 'undefined'
        ? `SELECT p.*, u.id AS userId, u.name, u.profilePic 
    FROM posts AS p JOIN users AS u 
    ON u.id = p.userId 
    WHERE p.userId = ?
    ORDER BY p.createAt DESC
    `
        : `
    SELECT p.*, u.id AS userId, u.name, u.profilePic 
    FROM posts AS p JOIN users AS u 
    ON u.id = p.userId
    LEFT JOIN relationships AS r
    ON p.userId = r.followedUserId 
    WHERE r.followerUserId = ? OR p.userId = ?
    ORDER BY p.createAt DESC
    `

    const values = userId !== 'undefined' ? [userId] : [userInfo.id, userInfo.id]

    db.query(query, values, (err, data) => {
      if (err) return res.status(500).json({ message: err.message })
      return res.status(200).json(data)
    })
  })
}

const createPost = (req, res) => {
  const token = req.cookies.accessToken

  if (!token) return res.status(401).json({ message: 'Unauthorized' })

  jwt.verify(token, 'secretkey', (err, userInfo) => {
    if (err) return res.status(403).json({ message: 'Token is not valid' })

    const query = 'INSERT INTO posts (`desc`,`img`,`userId`, `createAt`) VALUES (?)'

    const values = [
      req.body.desc,
      req.body.img,
      userInfo.id,
      moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
    ]

    db.query(query, [values], (err, data) => {
      if (err) return res.status(500).json({ message: err.message })
      return res.status(200).json({ message: 'Post created successfully' })
    })
  })
}

export { getPosts, createPost }
