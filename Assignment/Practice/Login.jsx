import React from 'react'
import {Link} from 'react-router-dom'

function Login() {
  return (
    <div>
      <label>UserName:</label>
      <input type='text'/> <br></br>
      <label>Password:</label>
      <input type='password'/>
      <button><Link to="/Home">Login</Link></button>
      <p>New User?<Link to="/Signup">Signup</Link></p>
    </div>
  )
}

export default Login
