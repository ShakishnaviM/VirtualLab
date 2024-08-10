import Chatbot from '../ChatCom/chatbot';
import { useState } from 'react';
import './ChatButton.css';

function ChatButton() {
    const [showChatbot, setShowChatbot] = useState(false);

    const handleToggleChatbot = () => {
        setShowChatbot(!showChatbot);
    };

    return (
        <>
            <button className="openChat" onClick={handleToggleChatbot}>
                
            </button>
            {showChatbot && <Chatbot />}
        </>
    );
}

export default ChatButton;
