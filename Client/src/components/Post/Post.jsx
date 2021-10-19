import React from 'react'
import './post.css'

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImage"
        src="https://www.vintageguitar.com/wp-content/uploads/01A-DUMBLE-OD-SPECIAL.jpg"
        alt="amp"/>
      <div className="postInfo">
        <div className="postCategory">
          <span className="postCat">Music</span>
          <span className="postCat">life</span>
        </div>
        <span className="postTitle">
          Duis commodo esse qui minim aliquip et incididunt.
        </span>
        <hr/>
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDescription">
        Incididunt tempor velit aliqua aliquip enim nisi ex labore velit consectetur 
        eiusmod. Sunt aute sit minim consequat consequat consectetur irure irure ad 
        sint adipisicing. Aliquip ex laboris laboris nulla consectetur ullamco enim sint. 
        Minim mollit officia anim proident velit dolor consectetur minim amet consequat 
        reprehenderit magna. Excepteur irure adipisicing adipisicing dolore 
        anim exercitation aute duis aute.
        Incididunt tempor velit aliqua aliquip enim nisi ex labore velit consectetur 
        eiusmod. Sunt aute sit minim consequat consequat consectetur irure irure ad 
        sint adipisicing. Aliquip ex laboris laboris nulla consectetur ullamco enim sint. 
        Minim mollit officia anim proident velit dolor consectetur minim amet consequat 
        reprehenderit magna. Excepteur irure adipisicing adipisicing dolore 
        anim exercitation aute duis aute.
        Incididunt tempor velit aliqua aliquip enim nisi ex labore velit consectetur 
        eiusmod. Sunt aute sit minim consequat consequat consectetur irure irure ad 
        sint adipisicing. Aliquip ex laboris laboris nulla consectetur ullamco enim sint. 
        Minim mollit officia anim proident velit dolor consectetur minim amet consequat 
        reprehenderit magna. Excepteur irure adipisicing adipisicing dolore 
        anim exercitation aute duis aute.
      </p>
    </div>
  )
}
