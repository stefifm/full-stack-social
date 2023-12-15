import { Link } from 'react-router-dom'
import './register.scss'
import { useState } from 'react'
import axios from 'axios'
const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    name: ''
  })
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async (e) => {
    e.preventDefault()

    try {
      await axios.post('http://localhost:8000/api/auth/register', inputs)
    } catch (err) {
      setError(err.response.data.message)
    }
  }

  return (
    <div className='register'>
      <div className='card'>
        {/* LEFT SIDE - LOGIN */}
        <div className='left'>
          <h1>Purple Social</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum. Molestias
            inventore quaerat tenetur obcaecati reiciendis ducimus dicta minima animi?
          </p>
          <span>Do you have an account?</span>
          <Link to={'/login'}>
            <button>Login</button>
          </Link>
        </div>
        {/* RIGHT SIDE - REGISTER */}
        <div className='right'>
          <h1>Register</h1>
          <form>
            <input
              type='text'
              placeholder='Username'
              name='username'
              onChange={handleChange}
            />
            <input
              type='email'
              placeholder='Email'
              name='email'
              onChange={handleChange}
            />
            <input
              type='password'
              placeholder='Password'
              name='password'
              onChange={handleChange}
            />
            <input
              type='text'
              placeholder='Name'
              name='name'
              onChange={handleChange}
            />
            {error && <span>{error}</span>}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
