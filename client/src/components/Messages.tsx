import React, { useContext } from 'react'
import styled from 'styled-components'
import ChatContext from './../contexts/ChatContext';


interface Props {
    children?: React.ReactNode;
    messages: IMessage[];
}

interface IMessage {
    user: string,
    message: string,
    date: string
}

const MessageDisplay = styled.ul`
    position: fixed;
    bottom: 8%;
    list-style-type: none;
    margin: 0;
    padding: 0;
` 

const Line = styled.p`
    font-family: "Montserrat", sans-serif;
`

const UserName = styled.span`
    color: #49C6E5;
    font-weight: 700;
`;

const Date = styled.span`
    color: #8a8a8a;
`

const Message = styled.span`
    color: #4a4a4a;
`;


const Messages:React.FC<Props> = (props: Props) => {
    const chat = useContext(ChatContext)
    let messageBoxes:JSX.Element[] = []

    chat.messages.forEach( msg => {
        messageBoxes.push(<Line><UserName>{ msg.user }</UserName><Date>{` (${msg.date}) : `}</Date><Message>{msg.message}</Message></Line> )
    })

    return (
        <MessageDisplay>
            { messageBoxes } 
        </MessageDisplay>
    )
}

export default Messages