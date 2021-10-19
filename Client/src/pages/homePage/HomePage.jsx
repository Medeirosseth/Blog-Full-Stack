import React from 'react'
import Header from '../../components/Header/Header'
import Posts from '../../components/posts/Posts'
import SideBar from '../../components/Siderbar/SideBar'
import './homepage.css'

export default function HomePage() {
  return (
    <>
      <Header/>
      <div className='homePage'> 
        <Posts/>
        <SideBar/>
      </div>
    </>
  )
}
