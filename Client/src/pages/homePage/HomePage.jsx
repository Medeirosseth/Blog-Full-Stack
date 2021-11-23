import React from 'react'
import { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import Posts from '../../components/posts/Posts'
import SideBar from '../../components/Siderbar/SideBar'
import './homepage.css'
import axios from "axios"

export default function HomePage() {
  const [posts, setPosts] = useState([])


  useEffect(() => {
    const fetchPosts = async ()=>{
      const res = axios.get("/posts")
      setPosts(res.data)
    }
    fetchPosts()
  }, [])

  return (
    <>
      <Header/>
      <div className='homePage'> 
        <Posts posts={posts}/>
        <SideBar/>
      </div>
    </>
  )
}
