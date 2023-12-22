import { db } from '../connect.js'
import jwt from 'jsonwebtoken'

const getRelationships = (req, res) => {
  const query = `
     SELECT followerUserId FROM relationships WHERE followedUserId = ?
    
    `

  db.query(query, [req.query.followedUserId], (err, data) => {
    if (err) return res.status(500).json({ message: err.message })
    return res.status(200).json(data.map((relationship) => relationship.followerUserId))
  })
}

const addRelationships = (req, res) => {
  const token = req.cookies.accessToken

  if (!token) return res.status(401).json({ message: 'Unauthorized' })

  jwt.verify(token, 'secretkey', (err, userInfo) => {
    if (err) return res.status(403).json({ message: 'Token is not valid' })

    const query = 'INSERT INTO relationships (`followerUserId`,`followedUserId`) VALUES (?)'

    const values = [userInfo.id, req.body.userId]

    db.query(query, [values], (err, data) => {
      if (err) return res.status(500).json({ message: err.message })
      return res.status(200).json({ message: 'Following' })
    })
  })
}

const deleteRelationships = (req, res) => {
  const token = req.cookies.accessToken

  if (!token) return res.status(401).json({ message: 'Unauthorized' })

  jwt.verify(token, 'secretkey', (err, userInfo) => {
    if (err) return res.status(403).json({ message: 'Token is not valid' })

    const query = 'DELETE FROM relationships WHERE `followerUserId` = ? AND `followedUserId` = ?'

    db.query(query, [userInfo.id, req.query.userId], (err, data) => {
      if (err) return res.status(500).json({ message: err.message })
      return res.status(200).json({ message: 'Unfollow' })
    })
  })
}

export { getRelationships, addRelationships, deleteRelationships }
