import React from 'react'
import { Link } from 'react-router-dom'
import './NavStyle.css'
import { BiSearchAlt } from "react-icons/bi";

function Nav() {
  return (
    <section id ='Nav'>
      <div className='-brand'>
        <div className='-logo'>
          <img src="https://via.placeholder.com/24x24" alt=""/>
        </div>
      </div>
          
      <div className='-center'>
        <div className="-menu">
          <Link to='/'>Home</Link>
          <Link to='/style'>Style</Link>
          <Link to='/product'>Product</Link>
          <Link to='/contact'>Contact</Link>
        </div>
        <div className='-search'>
          <div className='-search-box'>
            <input type='text' className='-search-input' />
          </div>
          <div className='-btn'><BiSearchAlt className='-icon'/></div>
        </div>
      </div>

      <div className='-end'>

        <div className='-end-item1'>
          <Link to='/login'>Log in</Link>
        </div>

        <div className='-end-item2'>
          <Link to='/signup'>Sign up</Link>
        </div>

      </div>
    </section>
  );
}

export default Nav