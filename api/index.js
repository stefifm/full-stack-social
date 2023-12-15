import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth.routes.js'
import usersRoutes from './routes/users.routes.js'
import postsRoutes from './routes/posts.routes.js'
import commentsRoutes from './routes/comments.routes.js'
import likesRoutes from './routes/likes.routes.js'

const app = express()

// middlewares
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true)
  next()
})
app.use(express.json())
app.use(
  cors({
    origin: '*'
  })
)
app.use(cookieParser())

// ROUTES

app.use(authRoutes)
app.use(usersRoutes)
app.use(postsRoutes)
app.use(commentsRoutes)
app.use(likesRoutes)

app.listen(8000, () => {
  console.log('Server is running on port 8000')
})
