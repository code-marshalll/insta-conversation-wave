import React from 'react';
import ChatContainer from '../components/ChatContainer';

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

const conversationData = {
  participants: [
    {
      name: "Nitya Mishra 🌞"
    },
    {
      name: "Satyam"
    }
  ],
  messages: [
    {
      sender_name: "Satyam",
      timestamp_ms: 1738296215174,
      content: "You sent an attachment.",
      share: {
        link: "https://www.instagram.com/reel/DFSpvDmy6_y/?id=3554086609543213042_71209314746",
        share_text: "~Chlo mai sula dun🌹\n( Cover by : @no.ise07 )\nFollow for moreee 🤌🏽🌸\n.\n.\n.\n#tumhimeremandir #screamingviral #goinviral #views #cover #coversongs #love #lovesong #viral #fyp #viralreels #reelsinstagram #trendingreels #explorepage #singing #song #instareels #fyp #follow #followme #showsomelove  #reelitfeelit #relax #oldclassic #oldhindisong  #oldhindimusics",
        original_content_owner: "no.ise07"
      },
      is_geoblocked_for_viewer: false,
      is_unsent_image_by_messenger_kid_parent: false
    },
    {
      sender_name: "Satyam",
      timestamp_ms: 1738295960302,
      content: "You sent an attachment.",
      share: {
        link: "https://www.instagram.com/reel/DFaguRuP9iR/?id=3556298773376260241_2397016657",
        share_text: "Ye technique mardo ko pta nhi chalni chahiye 🤫",
        original_content_owner: "girlzfactsofficial"
      },
      is_geoblocked_for_viewer: false,
      is_unsent_image_by_messenger_kid_parent: false
    },
    {
      sender_name: "Nitya Mishra 🌞",
      timestamp_ms: 1738295818732,
      content: "अच्छा मुझसे बात मत कर 😜",
      is_geoblocked_for_viewer: false,
      is_unsent_image_by_messenger_kid_parent: false
    },
    {
      sender_name: "Satyam",
      timestamp_ms: 1738295795232,
      content: "Byeee babyyy 😘",
      reactions: [
        {
          reaction: "😘",
          actor: "Nitya Mishra 🌞"
        }
      ],
      is_geoblocked_for_viewer: false,
      is_unsent_image_by_messenger_kid_parent: false
    },
    {
      sender_name: "Nitya Mishra 🌞",
      timestamp_ms: 1738295787829,
      content: "Thkh hai bye bye😜😜😜",
      reactions: [
        {
          reaction: "✔️",
          actor: "Satyam",
          timestamp: 1738295797
        }
      ],
      is_geoblocked_for_viewer: false,
      is_unsent_image_by_messenger_kid_parent: false
    }
  ]
};

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