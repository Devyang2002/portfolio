import React,{useState} from 'react'
import '../styles/Navbar.css'
// import { smoothScrollTo } from './smoothScroller'
import {HashLink as Link} from 'react-router-hash-link'

export default function Navbar() {
const [isOpen, setIsOpen] = useState(false);

const handletoggle = () => {
  setIsOpen(!isOpen);
};

const handleNavbarClick = () => {
  setIsOpen(false); 
};
  
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
        <div className='toggle_btn' onClick={handletoggle}>
        <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"} ></i>
        </div>
      </div>
      {isOpen && (
      <div className="dropdown_menu">
      <li><Link to='#home' smooth onClick={handleNavbarClick}>Home</Link></li>
            <li><Link to='#service' smooth onClick={handleNavbarClick}>Services</Link></li>
            <li><Link to='#project' smooth onClick={handleNavbarClick}>Projects</Link></li>
            <li><Link to='#skill' smooth onClick={handleNavbarClick}>Skills</Link></li>
            <li><Link to='#testimonial' smooth onClick={handleNavbarClick}>Testimonials</Link></li> 
      </div>
      )}
    </div>
  )
}


            