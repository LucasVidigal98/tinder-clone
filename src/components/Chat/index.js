import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

import './styles.css';

function Chat({name, message, profilePic, timeStamp}){
    return(
        <Link to={`/chat/${name}`}>
            <div className="chat">
                <Avatar 
                    className="chat-image" 
                    alt={name} 
                    src={profilePic}
                />

                <div className="chat-details">
                    <h2>{name}</h2>
                    <p>{message}</p>
                </div>

                <p className="chat-timestamp">{timeStamp}</p>
            </div>
        </Link>
    );
}

export default Chat;