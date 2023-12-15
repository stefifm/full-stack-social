import mysql from 'mysql'

export const db = mysql.createConnection({
  host: 'localhost',
  user: 'admin01',
  password: 'admin01',
  database: 'social'
})
