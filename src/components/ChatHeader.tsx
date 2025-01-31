import React from 'react';

interface ChatHeaderProps {
  participant: string;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ participant }) => {
  return (
    <div className="border-b border-gray-200 p-4 flex items-center sticky top-0 bg-white z-10">
      <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0" />
      <h1 className="ml-3 font-semibold">{participant}</h1>
    </div>
  );
};

export default ChatHeader;