import React from 'react'
import './settings.css'
import SideBar from '../../components/Siderbar/SideBar'

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper"></div>
        <div className="settingsTitle">
          <spa className="settingsUpdateTitle">update your account</spa>
          <spa className="settingsDeleteTitle">delete your account</spa>
        </div>
        <form className="settingsForm">
          <label> Profile Picture </label>
          <div className="settingsPP">
            <img
              className="profilePicture"
              src="https://gardenofthegodsclub.clubhouseonline-e3.com/getattachment/fa6316bf-5ef5-4f6e-b3a7-cd5291df0aab/Kim-Medeiros.aspx"
              alt="profile"
            />
            <label htmlFor="fileInput">
              <i className=" settingsPPIcon fas fa-users"></i>
            </label>
            <input type="file" id="fileInput" style={{display: 'none'}}></input>
          </div>
          <label>UserName</label>
          <input type='text' placeholder='Seth' />
          <label>Email</label>
          <input type='text' placeholder='Medeirosseth@gmail.com' />
          <label>Password</label>
          <input type='password'/>
          <button className="settingsSunmit">Update</button>
        </form>
      <SideBar />
    </div>
  )
}

