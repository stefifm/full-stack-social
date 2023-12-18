import { db } from '../connect.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const register = (req, res) => {
  // FIRTS: CHECK IF USER EXISTS

  const query = 'SELECT * FROM users WHERE username = ?'

  db.query(query, [req.body.username], (err, data) => {
    if (err) return res.status(500).json({ message: err })

    if (data.length) return res.status(409).json({ message: 'Username already exists' })
    // IF NOT, CREATE USER
    // hash password
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(req.body.password, salt)

    const query = 'INSERT INTO users (username, email, password, name) VALUES (?)'

    const values = [req.body.username, req.body.email, hashedPassword, req.body.name]

    db.query(query, [values], (err, data) => {
      if (err) return res.status(500).json({ message: err })

      return res.status(200).json({ message: 'User created' })
    })
  })
}

const login = (req, res) => {
  // CHECK IF USER EXISTS

  const query = 'SELECT * FROM users WHERE username = ?'

  db.query(query, [req.body.username], (err, data) => {
    if (err) return res.status(500).json({ message: err })

    if (data.length === 0) return res.status(404).json({ message: 'User not found' })

    const checkPassword = bcrypt.compareSync(req.body.password, data[0].password)

    if (!checkPassword) return res.status(400).json({ message: 'Wrong password or username!' })

    const token = jwt.sign({ id: data[0].id }, 'secretkey')

    const { password, ...others } = data[0]

    res
      .cookie('accessToken', token, { httpOnly: true, sameSite: 'none', secure: true })
      .status(200)
      .json(others)
  })
}

const logout = (req, res) => {
  res
    .clearCookie('accessToken', {
      sameSite: 'none',
      secure: true
    })
    .status(200)
    .json({ message: 'User logged out' })
}

export { login, register, logout }
