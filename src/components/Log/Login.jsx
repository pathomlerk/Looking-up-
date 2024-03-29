import React from 'react'
import './LoginStyle.css'
import { Link } from 'react-router-dom'
import { BiSolidUser, BiSolidLockAlt } from "react-icons/bi";

const Login =() => {
  return (
    <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className="input-box-log">
                    <input type="text"
                    placeholder='Username' required />
                    <BiSolidUser className='icon'/>
                </div>
                <div className="input-box-log">
                    <input type="password"
                    placeholder='Password' required />
                    <BiSolidLockAlt className='icon'/>
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>

                <Link to='/'><button type="submit">Login</button></Link>

                <div className="register-link">
                    <p>Don't have an account? <Link to='/signup'>SignUp</Link></p>
                </div>
            </form>
        </div>
  )
}

export default Login