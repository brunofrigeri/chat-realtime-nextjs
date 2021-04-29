import React from 'react'

export default function Avatar({ name, scale = 1, children }) {
  return (
    <div
      className={`relative flex w-${10 * scale} h-${
        10 * scale
      } rounded-full justify-center items-center bg-gray-200`}
    >
      <p className={scale < 1 ? 'text-xs' : 'text-sm'}>
        {name
          .split(' ')
          .map((n) => n[0])
          .filter((_, i) => i < 2)
          .join('')
          .toUpperCase()}
      </p>
      {children}
    </div>
  )
}
