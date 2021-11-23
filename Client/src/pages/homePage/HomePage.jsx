import React from 'react'
import { useState, useEffect, } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Posts from '../../components/posts/Posts'
import SideBar from '../../components/Siderbar/SideBar'
import './homepage.css'
import axios from "axios"

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();



  useEffect(() => {
    const fetchPosts = async ()=>{
      const res = await axios.get("/posts"+search)
      console.log(res.data)
      setPosts(res.data)
    }
    fetchPosts()
  }, [search])

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
