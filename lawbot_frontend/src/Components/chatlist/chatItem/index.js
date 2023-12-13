import React from 'react'
import './chatItem.css'

const ChatItem = ({ chat }) => {
  return (
    <>
      <a className='chat-btn'>
        <i className='far fa-comment-alt chat-icon'></i>
        <div className='chat-title'>{chat.title}</div>
      </a>
    </>
  )
}

export default ChatItem