import React from 'react'
import Nav from '../Nav/Nav'
import './HomeStyle.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <Nav/>
    <section id='home'>
              <h2>Find your own skin color</h2>
          <div>
          <Link to='/quiz' className='-tap'>Tap to start</Link>
        </div>
    </section>
    </>
  )
}

export default Home