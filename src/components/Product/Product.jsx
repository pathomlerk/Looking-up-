import React from 'react'
import Nav from '../Nav/Nav'
import './ProductStyle.css'
import { Link } from 'react-router-dom'
import { BiSearchAlt } from "react-icons/bi";

function Product() {
  return (
  <>
    {/*<Nav/>*/}
    <div>Product</div>
      <div className='search'>
        <div className="search-box2">
          <input type='text' className='Search in Looking Up' />
        </div>
        <div className='-btn'><BiSearchAlt className='-icon'/></div>
      </div>

      <div>

      </div>
  </>
  )
}

export default Product