import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import './chatlist.css'
import ChatItem from './chatItem'


const baseUrl = 'http://127.0.0.1:8000/api'


const ChatList = () => {

  const [chats, setChats] = useState(null)

  useEffect(()=>{
    axios.get(baseUrl+'/chat/').then((response)=>{
      setChats(response.data)
    })
  }, [])

  // console.log(chats)

  return (
    <>
        {chats && chats.map((chat) => {
            return <ChatItem key={ chat.id } chat={chat}/>
        })}
    </>
  )
}

export default ChatList