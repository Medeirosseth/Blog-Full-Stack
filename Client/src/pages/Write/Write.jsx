import React from 'react'
import './write.css'

export default function Write() {
  return (
    <div className="write">
    <img 
      className="writeImage"
      src="https://images.unsplash.com/photo-1590596970100-b515e4ba8734?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8eWVsbG93JTIwZGFpc3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
      alt="stuff"
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
          <i class="fas fa-plus"></i>
          </label>
          <input type='file' id="fileInput" style={{display: 'none'}}/>
          <input type='text' placeholder="title" className='writeInput' autoFocus={true}/>
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="spill the tea.."
            type='text'
            className='writeInput writeText'></textarea>
        </div>
        <button className="writeSubmit">Publish</button>

      </form>
    </div>
  )
}
