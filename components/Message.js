import React from 'react'

export default function Message({ message, user, hour }) {
  const isYou = user.id === 1

  return (
    <div className={`flex ${isYou ? 'justify-end' : 'justify-start'} m-4`}>
      <p className={`${isYou ? 'bg-gray-light' : 'bg-white'} flex flex-col rounded-lg text-sm p-4`}>
        <div className="flex flex-row justify-between mb-2">
          <p className="font-bold">{isYou ? 'You' : user.name}</p>
          <p className="font-semibold text-gray-500 text-xs">{hour}</p>
        </div>
        <p>{message}</p>
      </p>
    </div>
  )
}
