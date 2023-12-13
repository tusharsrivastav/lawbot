import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import './chatbox.css'
import MessageList from './messageList'
import InputForm from './inputForm'


const baseUrl = 'http://127.0.0.1:8000/api'

const ChatBox = () => {

    const [messages, setMessages] = useState(null)
  
    useEffect(()=>{
      axios.get(baseUrl+'/message/').then((response)=>{
        setMessages(response.data)
      })
    }, [])

    // console.log(messages)


    const messageEl = useRef(null);

    useEffect(() => {
        document.title = 'Home | LawBot'
    })

    useEffect(() => {
    if (messageEl) {
        messageEl.current.addEventListener("DOMNodeInserted", event => {
        const { currentTarget: target } = event;
        target.scroll({ top : target.scrollHeight, behaviour : "smooth" });
        });
    }
    }, [])


  return (
    <div className='chatbox-wrapper'>
        <div className='chatbox-container'>
            <div className='messages-container' ref={messageEl}>
                <MessageList messages={messages}/>
            </div>
            <div className='chatbox-footer'>
                <InputForm />
            </div>
        </div>
    </div>
  )
}

export default ChatBox