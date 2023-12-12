import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'
import propTypes from 'prop-types'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Navbar from './components/Navbar/Navbar'
import LeftBar from './components/LeftBar/LeftBar'
import RightBar from './components/RightBar/RightBar'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import './app.scss'
import { useContext } from 'react'
import { DarkModeContext } from './context/DarkModeContext'

function App() {
  const currentUser = true
  const { darkMode } = useContext(DarkModeContext)
  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    )
  }

  const ProtectedRoutes = ({ children }) => {
    if (!currentUser) {
      return <Navigate to='/login' />
    }

    return children
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoutes>
          <Layout />
        </ProtectedRoutes>
      ),
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/profile/:id',
          element: <Profile />
        }
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

App.propTypes = {
  children: propTypes.node
}
