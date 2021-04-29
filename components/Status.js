import React from 'react'

export default function Status({ status, scale = 1 }) {
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
      className={`absolute flex bottom-0 right-0 w-${scale * 4} h-${
        scale * 4
      } bg-gray-50 items-center justify-center rounded-full`}
    >
      <div className={`${getStatusColor()} w-${scale * 2} h-${scale * 2} rounded-full`} />
    </div>
  )
}
