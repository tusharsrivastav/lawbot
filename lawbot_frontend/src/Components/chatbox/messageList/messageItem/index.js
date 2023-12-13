import React from 'react'
import './messageItem.css'
import logo from '../../../../Images/logo.png'

const MessageItem = ({ message }) => {
  return (
    <div className={`message-container ${message.sender==='lawbot' ? "incoming" : "outgoing"}`}>
        <div className='message-text'>
            {/* { message.id } */}
            { message.text }
        </div>
        <div className='message-user-img'>
            
            {message.sender==='user' ? 
              <i className='fas fa-user-circle user-pic'></i> : 
              <img src={logo} className='message-logo' />}
        </div>
    </div>
  )
}

export default MessageItem