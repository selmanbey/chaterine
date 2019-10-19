import React, { createContext, useState, useEffect } from 'react'
import socketIOClient from 'socket.io-client';


interface IChat {
    messages: IMessage[],
    setMessages: React.Dispatch<React.SetStateAction<any>>,
    users: string[],
    setUsers: React.Dispatch<React.SetStateAction<any>>,
    currentUser: string,
    setCurrentUser: React.Dispatch<React.SetStateAction<any>>,
    sendMessage: (arg1: IMessage) => void
}

interface IMessage {
    user: string,
    message: string,
    date: string
}

let socket = socketIOClient('http://localhost:8000');

const ChatContext = createContext({} as IChat);

export const ChatProvider = (props:any) => { 
    const [messages, setMessages] = useState<IMessage[]>([])
    const [users, setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState('')

    useEffect( ()=> {
        socket.on('receiveMessage', (newMsgObj:IMessage) => { 
            setMessages( prevMessages => [...prevMessages, newMsgObj ] )  
        });
    }, [])

    function sendMessage(msgObject:IMessage) {
        socket.emit("sendMessage", msgObject)
    }

    return (
        <ChatContext.Provider value={{ messages, setMessages, users, setUsers, currentUser, setCurrentUser, sendMessage }}>
            {props.children}
        </ChatContext.Provider>
    )
}

export const ChatConsumer = ChatContext.Consumer
export default ChatContext