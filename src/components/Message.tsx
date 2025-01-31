import React from 'react';
import { format } from 'date-fns';

interface MessageProps {
  content: string;
  timestamp: number;
  sender: string;
  currentUser: string;
  reactions?: Array<{ reaction: string; actor: string }>;
}

const Message: React.FC<MessageProps> = ({
  content,
  timestamp,
  sender,
  currentUser,
  reactions
}) => {
  const isSentByMe = sender === currentUser;
  
  return (
    <div className={`flex flex-col ${isSentByMe ? 'items-end' : 'items-start'}`}>
      <div className={`message-bubble ${isSentByMe ? 'message-sent' : 'message-received'}`}>
        {content}
      </div>
      {reactions && reactions.length > 0 && (
        <div className="reaction mt-1">
          {reactions.map((reaction, index) => (
            <span key={index}>{reaction.reaction}</span>
          ))}
        </div>
      )}
      <div className="timestamp">
        {format(timestamp, 'h:mm a')}
      </div>
    </div>
  );
};

export default Message;