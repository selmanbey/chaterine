import React, { useState, useContext, FormEvent } from 'react'
import styled from 'styled-components'
import ChatContext from '../contexts/ChatContext';


const LoginScreen = styled.dialog`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 0;
`

const AppName = styled.h1`
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  color: #49C6E5;
  margin-bottom: 3em;
`

const LoginForm = styled.form`
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    color: #4a4a4a;

    > h2 {
        font-weight: 700;
        margin-botton: 1em;
    }

    > input {
        display: block;
        margin: 0 auto;
        font-size: 0.9em;
        font-weight: 400;
        width: 20em;
        height: 3.5em;
        border-radius: 10px;
        border: 1px solid #979797;
        text-align: center;
        margin-bottom: 1em;
    }

    > button {
        font-size: 0.9em;
        font-weight: 600;
        width: 10em;
        height: 3.5em;
        border: 0;
        border-radius: 10px;
        background: #49C6E5;
        color: white;
    }
`;


const UserLogin:React.FC = () => {
    const [userName, setUserName] = useState('');
    const [isOpen, setIsOpen] = useState(true);
    const chat = useContext(ChatContext)

    function handleSubmit(e:FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if ( userName ) {
            chat.setUsers( (prevUsers: string[]) => [...prevUsers, userName])
            chat.setCurrentUser(userName)
            setIsOpen(false)
        }
    }

    return (
        <LoginScreen id="login-screen" open={ isOpen }>
            <AppName>CHATERINE</AppName>
            <LoginForm onSubmit={ handleSubmit }>
                <h2>LOGIN</h2>
                <input 
                    type="text" 
                    placeholder="Who Are You?" 
                    value={userName}
                    onChange={ e => setUserName(e.target.value) }/>
                <button>Submit</button>
            </LoginForm>
        </LoginScreen>
    )
}

export default UserLogin