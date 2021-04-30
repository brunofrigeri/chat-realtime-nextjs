import React from 'react'
import Avatar from './Avatar'
import Status from './Status'

export default function PersonItem({ name, status, onClick }) {
  return (
    <button onClick={onClick} className="flex flex-row items-center pb-2">
      <Avatar name={name} status={status}>
        <Status status={status} />
      </Avatar>
      <p className="ml-2 text-xs font-semibold">{name}</p>
    </button>
  )
}
