import React from 'react'
import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <div className='navs'>
      <div className="web_name">
        <h3>Portfolio</h3>
      </div>
      <div className="list">
        <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>Testimonials</li>
            <li>Social</li>
        </ul>
      </div>
    </div>
  )
}
