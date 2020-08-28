import React from 'react';
import './Chats.css';
import Chat from './Chat';

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Mark"
                message="Yooooooo"
                timestamp="40 seconds ago"
                profilePic="https://www.pinclipart.com/picdir/middle/84-841840_svg-royalty-free-library-icon-svg-profile-profile.png"
            />
            <Chat
                name="Benget"
                message="Dimans lau nih?"
                timestamp="3 days ago"
                profilePic="https://www.pinclipart.com/picdir/middle/84-841840_svg-royalty-free-library-icon-svg-profile-profile.png"
            />
            <Chat
                name="Bastian"
                message="Ada situ?"
                timestamp="10 minutes ago"
                profilePic="https://www.pinclipart.com/picdir/middle/84-841840_svg-royalty-free-library-icon-svg-profile-profile.png"
            />
            <Chat
                name="Kael"
                message="Ayoooo tuak "
                timestamp="12 minutes ago"
                profilePic="https://www.pinclipart.com/picdir/middle/84-841840_svg-royalty-free-library-icon-svg-profile-profile.png"
            />        
        </div>
    );
    
}

export default Chats