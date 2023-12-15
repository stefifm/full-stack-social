import { db } from '../connect.js'
const getPosts = (req, res) => {
  const query = `
  SELECT p.*, u.id AS userId, u.name, u.profilePic 
  FROM posts AS p JOIN users AS u 
  ON u.id = p.userId
  `

  db.query(query, (err, data) => {
    if (err) return res.status(500).json({ message: err.message })
    return res.status(200).json(data)
  })
}

export { getPosts }
