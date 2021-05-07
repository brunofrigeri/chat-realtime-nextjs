import React from 'react'
import { formatChatDate } from '../utils/formatDate'
import Avatar from './Avatar'

export default function Conversations({ chats, activeChat, setActiveChat }) {
  return (
    <div className="overflow-auto pb-20 h-full">
      {chats &&
        chats.length > 0 &&
        chats.map(({ data, lastMessage }) => (
          <button
            onClick={() => setActiveChat(data)}
            className={`flex flex-row ${
              activeChat && activeChat.id === data.id ? 'bg-blue-100' : 'bg-gray-lighter'
            } my-4 rounded-lg w-full p-6`}
            key={data.id}
          >
            <div>
              <Avatar name={data.name} />
            </div>
            <div className="flex flex-col ml-2 w-full">
              <div className="flex flex-row justify-between">
                <p className="font-semibold text-base">{data.name}</p>
                {lastMessage.createdAt && (
                  <p className="text-xs text-gray-500">{formatChatDate(lastMessage.createdAt)}</p>
                )}
              </div>
              {lastMessage.message && (
                <p className="text-xs text-gray-500 text-left	">{lastMessage.message}</p>
              )}
            </div>
          </button>
        ))}
    </div>
  )
}
