import React from 'react'
import Avatar from './Avatar'

export default function Conversations({ activeId }) {
  const users = [
    {
      id: 0,
      user: {
        id: 1,
        name: 'Eric Burgess',
      },
      lastMessage: 'I just wanted to confirm that it is...',
      date: 'Fri',
    },
    {
      id: 1,
      user: {
        id: 2,
        name: 'Group Chat',
      },
      lastMessage: 'Soo this is it! If everyone agress on i...',
      date: '11:23 AM',
    },
    {
      id: 2,
      user: {
        id: 3,
        name: 'Ivan Baldwin',
      },
      lastMessage: 'Great! See you later',
      date: 'Sat',
    },
    {
      id: 3,
      user: {
        id: 4,
        name: 'Estelle Martin',
      },
      lastMessage: 'I will call u back in an hour',
      date: 'Wed',
    },
    {
      id: 4,
      user: {
        id: 5,
        name: 'Estelle Martin',
      },
      lastMessage: 'I will call u back in an hour',
      date: 'Wed',
    },
    {
      id: 5,
      user: {
        id: 6,
        name: 'Estelle Martin',
      },
      lastMessage: 'I will call u back in an hour',
      date: 'Wed',
    },
    {
      id: 6,
      user: {
        id: 7,
        name: 'Estelle Martin',
      },
      lastMessage: 'I will call u back in an hour',
      date: 'Wed',
    },
  ]

  return (
    <div className="overflow-auto pb-20 h-full">
      {users.length > 0 &&
        users.map(({ id, user, lastMessage, date }) => (
          <div
            className={`flex flex-row ${
              activeId === id ? 'bg-blue-100' : 'bg-gray-lighter'
            } my-4 rounded-lg w-full p-6`}
            key={id}
          >
            <div>
              <Avatar name={user.name} />
            </div>
            <div className="flex flex-col ml-2 w-full">
              <div className="flex flex-row justify-between">
                <p className="font-semibold text-base">{user.name}</p>
                <p className="text-xs text-gray-500">{date}</p>
              </div>
              <p className="text-xs text-gray-500">{lastMessage}</p>
            </div>
          </div>
        ))}
    </div>
  )
}
