import React from 'react'
import ChatSide from './ChatSide'
import Messenger from './Messenger'

export default function Chat() {
  return (
    <div className="flex flex-row w-full max-h-screen border-r border-gray-50 overflow-hidden">
      {/* ChatSidebar with diffrent conversations */}
      <ChatSide />

      {/* Messenger with someone */}
      <Messenger />

      {/* Details about someone or some group */}
      {/* <Details /> */}
    </div>
  )
}
