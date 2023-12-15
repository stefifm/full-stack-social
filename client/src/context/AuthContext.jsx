import { createContext, useEffect, useState } from 'react'
import propTypes from 'prop-types'
import axios from 'axios'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null)

  const login = async (inputs) => {
    const response = await axios.post('http://localhost:8000/api/auth/login', inputs)

    console.log(response)

    setCurrentUser(response.data)
  }

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser))
  }, [currentUser])

  return <AuthContext.Provider value={{ currentUser, login }}>{children}</AuthContext.Provider>
}

AuthProvider.propTypes = {
  children: propTypes.node.isRequired
}
