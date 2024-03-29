import React from 'react'
import './SignupStyle.css'
import { Link } from 'react-router-dom'
import { BiSolidUser, BiSolidLockAlt } from "react-icons/bi";

const Signup =() => {
  return (
        <div className='-sign'>
                <form action="">
                    <h1>Sign up</h1>
                    <div className="input-box">
                        <input type="text"
                        placeholder='Username' required />
                        <BiSolidUser className='icon'/>
                    </div>
                    <div className="input-box">
                        <input type="password"
                        placeholder='Password' required />
                        <BiSolidLockAlt className='icon'/>
                    </div>
                    <div className="input-box">
                        <input type="password"
                        placeholder='Comfirm Password' required />
                        <BiSolidLockAlt className='icon'/>
                    </div> 
  
                    <Link to='/'><button type="submit">Sign up</button></Link>
    
                </form>
            </div>
  )
}

export default Signup