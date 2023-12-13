import React from 'react'
import './messageList.css'
import logo from '../../../Images/logo.png'
import MessageItem from './messageItem';



const MessageList = ({ messages }) => {

  // let sortedMessages = messages

  // if (messages) {
  //   sortedMessages = messages.sort((a,b)=>
  //   a.datetime.localeCompare(b.datetime))
  // }
  
  const messageList = []
  
  for (const i in messages) {
    
    const message = messages[i]
    // console.log(messages)
    
    messageList.push(<MessageItem key={ message.id } message={message} />)
  }

  return (
    messageList
  )
}

export default MessageList