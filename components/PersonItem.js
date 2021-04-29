import React from 'react'
import Avatar from './Avatar'
import Status from './Status'

export default function PersonItem({ name, status }) {
  return (
    <div className="flex flex-row items-center pb-2">
      <Avatar name={name} status={status} scale={0.6}>
        <Status status={status} scale={0.5} />
      </Avatar>
      <p className="ml-2 text-xs font-semibold">{name}</p>
    </div>
  )
}
