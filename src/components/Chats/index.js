import React from 'react';

import Chat from '../Chat';

import './styles.css';

function Chats(){
    return(
        <div className="chats">  
            <Chat 
                name="Mark"
                message="Yo good"
                timeStamp="40 seconds ago"
                profilePic="..."
            />
            <Chat 
                name="Maia"
                message="Fala felas"
                timeStamp="50 seconds ago"
                profilePic="..."
            />
            <Chat 
                name="Iza"
                message="Yo bro"
                timeStamp="2 hours ago"
                profilePic="..."
            />
        </div>
    );
}

export default Chats;