import React from 'react' 
import { Link } from 'react-router-dom';
import './navbar.css'

export default function NavBar() {
  const user = false
  return(
    <div className="navbar">
      <div className="left">
        <i class="navIcons fab fa-facebook-square"></i>
        <i class="navIcons fab fa-instagram-square"></i>
        <i class="navIcons fab fa-twitter-square"></i>
        <i class="navIcons fab fa-pinterest-square"></i>
      </div>
      <div className="center">
        <ul className='navItems'>
          <li className="items"> <Link className='link' to='/'>Home</Link></li>
          <li className="items"> <Link className='link' to='/'>About</Link> </li>
          <li className="items"> <Link className='link' to='/write'>Write</Link> </li>
          <li className="items"> 
            { user && "Logout" }</li>
        </ul>
      </div>
      <div className="right">
      { 
        user ? (
          <img className="navImage" src="https://www.buddywynkoop.com/static/45964685fa30697c003307793441f05c/ae6ae/Band.jpg" alt="buddy wynkoop" />
          ) : (
            <ul className="navItems">
              <li className="items">
                <Link className='link' to='/login'>Login</Link>
              </li>
              <li className="items">
                <Link className='link' to='/register'>Register</Link> 
              </li>
            </ul>
            )
          }
          <i class=" search fas fa-search-plus"></i>
      </div>
    </div>
  )
}