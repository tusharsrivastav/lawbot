import React, { useState } from 'react'
import axios from 'axios'
import './inputForm.css'
import Data from '../../../data/user_query_response_template.json'

const baseUrl='http://127.0.0.1:8000/api/message/'

const InputForm = () => {
    const [messages, setMessages] = useState({
        'text': '',
        'sender': '',
        'relatedChat': '',
    })

    const handleChange=(e) => {
        setMessages({
            ...messages,
            [e.target.name]: e.target.value
        })
    }

    // const submitForm = () => {
    //     // e.preventDefault();

    //     if (messages.text !== "") {
    //         updateChats('user', messages.text)
    //         let reply = generateResponse()
    //         updateChats('lawbot', reply)
    //     }
    //     // console.log(reply)
    // }
    
    
    const updateChats =(e) => {
        e.preventDefault();

        const messageFormData = new FormData();
        messageFormData.append('text', messages.text)
        messageFormData.append('sender', 'user')
        messageFormData.append('relatedChat', 1)

        let reply = generateResponse()
        
        const replyFormData = new FormData()
        replyFormData.append('text', reply)
        replyFormData.append('sender', 'lawbot')
        replyFormData.append('relatedChat', 1)

        // const messageData = {'text': messages.text, 'sender': 'user', 'relatedChat': 1}
        // const replyData = {'text': reply, 'sender': 'lawbot', 'relatedChat': 1}
        
        axios.post(baseUrl, messageFormData)
        .then((response)=>console.log(response))
        .catch((error)=>{
            console.log(error)
        })
        
        setTimeout(()=>{
            axios.post(baseUrl, replyFormData)
            .then((response)=>{window.location.reload(false)})
        }, 500)
        

        // const data = [ messageFormData, replyFormData]

    }

    const generateResponse=() => {
        let reply = ""
        const input = messages.text.toString().toLowerCase()
        
        for (let i = 0; i < Data.length; i++) {
            if (input === Data[i].user_query.toLowerCase()) {
                // console.log(input, Data[i].response)
                reply = Data[i].response
                break
            } else {
                // console.log("Sorry")
                reply = "Sorry, I don't know about this."
            }
        }
        return reply
    }

    // const handleSubmit=(e)=>{
    //     e.preventDefault();
    //     const reply = generateResponse()
    //     const data = {
    //             'text': messages.text,
    //             'sender': 'user',
    //             'relatedChat': 1,
    //         }
        

    //     axios.post(baseUrl, data)
    //     .then((response)=>{
    //         setMessages({
    //             'text': '',
    //             'sender': '',
    //             'relatedChat': '',
    //         })
    //     })
    //     .catch((error)=>{
    //         console.log(error)
    //     })
    // }

  return (
    <form className='form'>
        <input onChange={handleChange} value={messages.text} name='text' type='text' placeholder='Send a message' className='textbox' />
        <button onClick={updateChats} type='submit' className='btn submit-btn'>
            <i className='far fa-paper-plane'></i>
        </button>
        <a href='' className='btn email-btn absolute-center'>
            <i className='far fa-envelope-open'></i>
        </a>
    </form>
  )
}

export default InputForm