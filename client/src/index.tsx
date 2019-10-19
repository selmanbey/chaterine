import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChatProvider } from './contexts/ChatContext'

ReactDOM.render(
    <ChatProvider>
       <App />
    </ChatProvider>
, document.getElementById('root'));