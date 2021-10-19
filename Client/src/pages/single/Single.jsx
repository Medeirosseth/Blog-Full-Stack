import React from 'react'
import SideBar from '../../components/Siderbar/SideBar'
import SinglePost from '../../components/SinglePost/SinglePost'
import './single.css'

export default function Single() {
  return (
    <div className='single'>
      <SinglePost/>
      <SideBar />
    </div>
  )
}
