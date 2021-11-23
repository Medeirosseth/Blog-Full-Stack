import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'

export default function SideBar() {
  const [ cats, setCats] = useState([]);

  useEffect(()=> {
    const getCats = async () => {
      const res = await axios.get("/categories")
      setCats(res.data)
    };
      getCats()
  },[])
  return (
    <div className="sideBar">
      <div className="sideBarItem">
        <span className="sideBarTitle">ABOUT ME</span>
        <img className="sideBarImage" 
          src="https://cdn11.bigcommerce.com/s-jmzfi5zcr2/images/stencil/1280x1280/products/1360/7108/Bright_Lights_Yellow_African_Daisy_Flowers__15419.1611263627.jpg?c=2" 
          alt="flowers" />
        <p>
          Cillum id officia sunt id officia quis mollit proident exercitation reprehenderit. 
        </p>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">CATEGORIES</span>
        <ul className="sideBarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li> {c.name} </li>
            </Link>
            ))}
        </ul>
      </div>
      <div className="sideBarItem">
      <span className="sideBarTitle"> FOLLOW US</span>
      </div>
      <div className="sideBarSocial">
      <i class="sideBarIcons fab fa-facebook-square"></i>
      <i class="sideBarIcons fab fa-instagram-square"></i>
      <i class="sideBarIcons fab fa-twitter-square"></i>
      <i class="sideBarIcons fab fa-pinterest-square"></i>
      </div>
    </div>
  )
}