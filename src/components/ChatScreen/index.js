import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';

import './styles.css';

function ChatScreen(){
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Ellen',
            image: 'https://i.pinimg.com/originals/8f/46/3c/8f463cf57a94b78a7050fd6b83fa1804.jpg',
            message: 'whats up'
        },
        {
            name: 'Ellen',
            image: 'https://i.pinimg.com/originals/8f/46/3c/8f463cf57a94b78a7050fd6b83fa1804.jpg',
            message: 'How its going'
        },
        {
            message: 'Hey'
        }
    ]);

    const handleSendFunction = (e) =>{
        e.preventDefault();

        setMessages([...messages, { message: input }]);
        setInput('');
    }

    return (
        <div className="chat-screen">
            <p className="chat-screen-timestamp">YOU MATCHED WITH ANA ON 10/08/20</p>
            {messages.map(message => (
                message.name ? (
                    <div className="chat-screen-message">
                        <Avatar 
                            className="chat-image" 
                            alt={message.name} 
                            src={message.image}
                        />
                        <p className="chat-screen-text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chat-screen-message">
                        <p className="chat-screen-text-user">{message.message}</p>
                    </div>
                )
            ))}

           
            <form className="chat-screen-input">
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className="chat-screen-input-field" 
                    type="text" 
                    placeholder="Type a message"
                />
                <button onClick={handleSendFunction} className="input-button">SEND</button>
            </form>
        </div>
    );
}

export default ChatScreen;