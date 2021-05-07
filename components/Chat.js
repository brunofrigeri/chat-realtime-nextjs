import React, { useState } from 'react'
import ChatSide from './ChatSide'
import Details from './Details'
import Messenger from './Messenger'

export default function Chat({ chats, userId }) {
  const [activeChat, setActiveChat] = useState(null)
  const [shouldShowDetails, setShouldShowDetails] = useState(false)

  return (
    <div className="flex flex-row w-full max-h-screen border-r border-gray-50 overflow-hidden">
      {/* ChatSidebar with different conversations */}
      <ChatSide chats={chats} activeChat={activeChat} setActiveChat={setActiveChat} />

      {/* Messenger with someone */}
      <Messenger
        activeChat={activeChat}
        userId={userId}
        setShouldShowDetails={setShouldShowDetails}
      />

      {/* Details about someone or some group */}
      {shouldShowDetails && <Details setShouldShowDetails={setShouldShowDetails} />}
    </div>
  )
}
