import React from 'react';
import ChatHeader from './ChatHeader';
import Message from './Message';

interface ChatMessage {
  sender_name: string;
  timestamp_ms: number;
  content: string;
  reactions?: Array<{ reaction: string; actor: string }>;
}

interface ChatContainerProps {
  messages: ChatMessage[];
  participants: Array<{ name: string }>;
}

const ChatContainer: React.FC<ChatContainerProps> = ({ messages, participants }) => {
  const currentUser = "Satyam"; // For demo purposes, we're setting Satyam as the current user
  
  return (
    <div className="chat-container">
      <ChatHeader participant={participants.find(p => p.name !== currentUser)?.name || ''} />
      <div className="messages-container">
        {messages.map((message, index) => (
          <Message
            key={index}
            content={message.content}
            timestamp={message.timestamp_ms}
            sender={message.sender_name}
            currentUser={currentUser}
            reactions={message.reactions}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatContainer;