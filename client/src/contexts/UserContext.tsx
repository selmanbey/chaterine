import React, { createContext, useState } from 'react'

interface IChat {
    messages: string[],
    setMessages: React.Dispatch<React.SetStateAction<any>>
}

const ChatContext = createContext({} as IChat);

export const ChatProvider = (props:any) => {
    const [messages, setMessages] = useState([])

    return (
        <ChatContext.Provider value={{ messages, setMessages }}>
            {props.children}
        </ChatContext.Provider>
    )
}

export const ChatConsumer = ChatContext.Consumer
export default ChatContext