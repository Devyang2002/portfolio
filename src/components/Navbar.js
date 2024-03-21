import React from 'react'
import '../styles/Navbar.css'
// import { smoothScrollTo } from './smoothScroller'
import {HashLink as Link} from 'react-router-hash-link'

export default function Navbar() {
  
  
  return (
    <div className='navs'>
      <div className="web_name">
        <h3 data-aos="fade-right">Portfolio</h3>
      </div>
      <div className="list">
        <ul>
            <li><Link to='#home' smooth>Home</Link></li>
            <li><Link to='#service' smooth>Services</Link></li>
            <li><Link to='#project' smooth>Projects</Link></li>
            <li><Link to='#skill' smooth>Skills</Link></li>
            <li><Link to='#testimonial' smooth>Testimonials</Link></li>
        </ul>
      </div>
    </div>
  )
}

            