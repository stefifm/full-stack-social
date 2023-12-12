import { createContext, useEffect, useState } from 'react'
import propTypes from 'prop-types'

export const DarkModeContext = createContext()

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) || false)

  const toggle = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode) || false
  }, [darkMode])

  return (
    <DarkModeContext.Provider value={{ darkMode, toggle }}>{children}</DarkModeContext.Provider>
  )
}

DarkModeProvider.propTypes = {
  children: propTypes.node.isRequired
}
