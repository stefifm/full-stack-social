import express from 'express'
import usersRoutes from './routes/users.routes.js'

const app = express()

// ROUTES

app.use(usersRoutes)

app.listen(8000, () => {
  console.log('Server is running on port 8000')
})
