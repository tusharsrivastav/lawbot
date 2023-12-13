import React from 'react'
import './home.css'
import SideBar from '../../Components/sidebar'
import ChatBox from '../../Components/chatbox'

const Home = () => {
  return (
    <div className='app-container'>
      <SideBar />
      <ChatBox />
    </div>
  )
}

export default Home