import React from 'react'
import './sidebar.css'
import logo from '../../Images/logo.png'
import ChatList from '../chatlist'

const SideBar = () => {
  return (
    <div className='sidebar-container'>

        <div className='sidebar-header'>
            <div className='sidebar-logo-wrapper'>
                <img src={logo} alt='logo' className='sidebar-logo' />
                <div className='sidebar-logo-text'>LawBot</div>
            </div>
            <a href="#" className='sidebar-collapse-btn'>
                <i className='fa fa-angle-double-left'></i>
            </a>
        </div>

        <div className='sidebar-content'>
            
            <div className='profile-wrapper'>
                <div className='user-wrapper'>
                    <i className='fas fa-user-circle user-pic'></i>
                    <div className='username'>John</div>
                </div>
                <a href="#" className='profile-menu-btn'>
                    <i className='fas fa-ellipsis-v'></i>
                </a>
            </div>

            <a className='new-chat-btn'>
                <i className='far fa-plus'></i>
                <div className='new-chat-btn-text'>New Chat</div>
            </a>

            <div className='chat-list'>
                <ChatList />
            </div>

        </div>

        <div className='sidebar-footer'>
            <a href="#" className='settings-btn'>
                <i className='fas fa-cog'></i>
            </a>
        </div>

    </div>
  )
}

export default SideBar