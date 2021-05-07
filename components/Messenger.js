import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import useSWR from 'swr'
import Avatar from './Avatar'
import Message from './Message'

export default function Messenger({ activeChat, userId, setShouldShowDetails }) {
  const [value, setValue] = useState('')

  const { data: messages } = useSWR(
    userId && activeChat ? `/api/chat/${userId}/${activeChat.id}` : null,
    async (...args) => {
      const res = await fetch(args)
      return res.json()
    }
  )

  return (
    <div className="h-full w-2/3 bg-gray-lighter py-4">
      <div className="sticky overflow-hidden top-0 bg-gray-lighter flex flex-row px-6 p-2">
        <button onClick={() => setShouldShowDetails(true)} className="flex flex-row items-center">
          <Avatar name={activeChat.name} />
          <p className="font-bold text-sm ml-2">{activeChat.name}</p>
        </button>
      </div>
      <div className="overflow-y-scroll h-full row-start-1 row-end-3">
        <div className="max-h-screen">
          <div className="h-5/6 flex flex-col-reverse pb-40">
            {messages &&
              messages.map((message) => (
                <Message
                  key={message.id}
                  sentByYou={userId === message.from}
                  chatWith={activeChat}
                  {...message}
                />
              ))}
          </div>
        </div>
      </div>
      <form className="sticky bottom-10 bg-white flex flex-row justify-between items-center rounded-xl mx-4 px-8 py-6 border">
        <input
          className="w-full bg-white text-sm text-gray-500"
          placeholder={'Write your message here'}
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        <FontAwesomeIcon icon={faPaperPlane} color={'#0C55B4'} />
      </form>
    </div>
  )
}
