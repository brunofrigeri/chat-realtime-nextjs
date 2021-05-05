import React from 'react'

export default function Status({ status }) {
  const getStatusColor = () => {
    switch (status) {
      case 'online':
        return 'bg-green-400'
      case 'offline':
        return 'bg-gray-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <div
      className={`w-4 h-4 absolute flex bottom-0 right-0 bg-gray-50 items-center justify-center rounded-full`}
    >
      <div className={`${getStatusColor()} w-2 h-2 rounded-full`} />
    </div>
  )
}
