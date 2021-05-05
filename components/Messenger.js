import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Avatar from './Avatar'
import Message from './Message'

export default function Messenger() {
  const messages = [
    {
      user: {
        id: 1,
        name: 'Joe Davidson',
      },
      id: 0,
      message: 'Morning everyone! How about finishing the sprint discussion today?',
      hour: '15:32',
    },
    {
      user: {
        id: 0,
        name: 'Joe Davidson',
      },
      id: 0,
      message: 'Morning everyone! How about finishing the sprint discussion today?',
      hour: '15:32',
    },
    {
      user: {
        id: 1,
        name: 'Joe Davidson',
      },
      id: 1,
      message: 'Morning everyone! How about finishing the sprint discussion today?',
      hour: '15:32',
    },
    {
      user: {
        id: 1,
        name: 'Joe Davidson',
      },
      id: 2,
      message: 'Morning everyone! How about finishing the sprint discussion today?',
      hour: '15:33',
    },
    {
      user: {
        id: 1,
        name: 'Joe Davidson',
      },
      id: 3,
      message: 'Morning everyone! How about finishing the sprint discussion today?',
      hour: '15:33',
    },
    {
      user: {
        id: 1,
        name: 'Joe Davidson',
      },
      id: 4,
      message: 'Morning everyone! How about finishing the sprint discussion today?',
      hour: '15:33',
    },
    {
      user: {
        id: 1,
        name: 'Joe Davidson',
      },
      id: 5,
      message: 'Morning everyone! How about finishing the sprint discussion today?',
      hour: '15:33',
    },
    {
      user: {
        id: 1,
        name: 'Joe Davidson',
      },
      id: 5,
      message: 'Morning everyone! How about finishing the sprint discussion today?',
      hour: '15:33',
    },
    {
      user: {
        id: 1,
        name: 'Joe Davidson',
      },
      id: 5,
      message: 'Morning everyone! How about finishing the sprint discussion today?',
      hour: '15:33',
    },
    {
      user: {
        id: 1,
        name: 'Joe Davidson',
      },
      id: 5,
      message: 'Morning everyone! How about finishing the sprint discussion today?',
      hour: '15:33',
    },
    {
      user: {
        id: 1,
        name: 'Joe Davidson',
      },
      id: 5,
      message: 'Morning everyone! How about finishing the sprint discussion today?',
      hour: '15:33',
    },
    {
      user: {
        id: 1,
        name: 'Joe Davidson',
      },
      id: 5,
      message: 'Morning everyone! How about finishing the sprint discussion today?',
      hour: '15:33',
    },
  ]

  return (
    <div className="relative h-full w-2/3 bg-gray-lighter py-4">
      <div className="sticky overflow-hidden top-0 bg-gray-lighter flex flex-row px-6 p-2">
        <div className="flex flex-row items-center">
          <Avatar name={'Lisa Price'} />
          <p className="font-bold text-sm ml-2">{'Lisa Price'}</p>
        </div>
      </div>
      <div className="overflow-y-scroll row-start-1 row-end-3">
        <div className="max-h-screen">
          <div className="h-5/6 flex flex-col-reverse pb-40">
            {messages && messages.map((message) => <Message key={message.id} {...message} />)}
          </div>
        </div>
      </div>
      <form className="sticky bg-white flex flex-row justify-between items-center bottom-5 w-auto rounded-xl mx-4 px-8 py-6 border">
        <input
          className="w-full bg-white text-sm text-gray-500"
          value={'Hey Lisa, was great chatting with you earlier.'}
        />
        <FontAwesomeIcon icon={faPaperPlane} color={'#0C55B4'} />
      </form>
    </div>
  )
}
