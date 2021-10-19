import React from 'react'
import './header.css'

export default function Header() {
  return (
    <div className='header'>
      <div className='headerTitle'>
        <span className='titleSm'>React & Node </span>
        <span className='titleLrg'>Blog </span>
      </div>
      <img className='headerImg' src="https://mil-mgmt.com/wp-content/uploads/2014/12/Music-equipment-microphone-dj-music-1920x1080-Widescreen-High-Resolution-1080p-HD-Desktop-Wallpaper-Mr-HD-Wallpapers.jpg" alt='trees' />
    </div>
  )
}
