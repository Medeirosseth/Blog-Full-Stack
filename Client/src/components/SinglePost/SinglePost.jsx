import React from 'react'
import { useEffect, useState} from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './singlepost.css'

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({})

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path)
      setPost(res.data)
    }; 
    getPost()
  }, [path]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && ( 
            <img
              className="singlePostImage"
              src={post.photo}
              alt="guitar"
            />
          )}
        <h1 className="singlePostTitle"> 
          {post.title}
          <div className="singlePostEdit"> 
            <i className="editIcon fas fa-edit"></i>
            <i className="editIcon fas fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <Link to={`/?user=${post.username}`} className="link">
            <span className="singlePostAuthor">Author: 
              <b>{post.username}</b> 
            </span>
          </Link>
          <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDescription">
          {post.desc}
        </p>
      </div>
    </div>
  )
}