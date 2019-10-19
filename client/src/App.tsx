import React, { useState, useContext, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import ChatContext from './contexts/ChatContext';
import UserLogin from './components/UserLogin';
import Messages from './components/Messages';

createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap'); 
  * { 
    margin: 0; 
    padding: 0; }
  html, body { 
    overflow: hidden;
  }
  h1, h2, h3, p, form, input, button {
    font-family: 'Montserrat', sans-serif;
  }
`

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  box-sizing: border-box;
`

const Form = styled.form`
  box-sizing: border-box;
  position: fixed;
  bottom: 1%;
  width: 100%;
`
const Input = styled.input`
  box-sizing: border-box;
  display: inline-block;
  font-size: 0.9em;
  font-weight: 400;
  width: 75%;
  margin-right: 1%;
  height: 3.5em;
  border-radius: 10px;
  border: 1px solid #979797;
  padding: 0 2%;
`

const Button = styled.button`
  box-sizing: border-box;
  display: inline-block;
  font-size: 0.9em;
  font-weight: 600;
  width: 23%;
  height: 3.5em;
  border: 0;
  border-radius: 10px;
  padding: 0 5%;
  background: #49C6E5;
  color: white;
`

interface IMessage {
  user: string,
  message: string,
  date: string
}

const App:React.FC = () => {
  const [message, setMessage] = useState('')
  const chat = useContext(ChatContext)
  
  function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if( message ) {
      let msgObject = { 
        "user": chat.currentUser, 
        "message": message, 
        "date": new Date().toLocaleTimeString()
      }
      chat.sendMessage(msgObject)
      setMessage('')
    }
  }

  return (
    <Wrapper>
      { chat.currentUser ? 
          <>
          <Messages messages={ chat.messages }/>
          <Form onSubmit={ handleSubmit }>
            <Input value={ message } onChange={ e => setMessage(e.target.value) } />
            <Button>Send</Button>
          </Form>
          </>
        :
        <UserLogin />
      }
    </Wrapper>
  );
}

export default App;
