import React from 'react';
import ChatContainer from '../components/ChatContainer';
import conversationData from '../data/conversation.json';

interface Share {
  link: string;
  share_text: string;
  original_content_owner: string;
}

interface Reaction {
  reaction: string;
  actor: string;
  timestamp?: number;
}

interface Message {
  sender_name: string;
  timestamp_ms: number;
  content: string;
  share?: Share;
  reactions?: Reaction[];
  is_geoblocked_for_viewer: boolean;
  is_unsent_image_by_messenger_kid_parent: boolean;
}

interface Participant {
  name: string;
}

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-4">
        <ChatContainer 
          messages={conversationData.messages}
          participants={conversationData.participants}
        />
      </div>
    </div>
  );
};

export default Index;