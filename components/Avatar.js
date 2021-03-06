import React from 'react'

export default function Avatar({ name, scale = 1, children }) {
  const width = `w-${10 * scale}`
  const height = `h-${10 * scale}`

  return (
    <div
      className={`${width} ${height} relative flex rounded-full justify-center items-center bg-gray-200`}
    >
      {name && (
        <p className={`font-semibold ${scale <= 1 ? 'text-sm' : 'text-2xl'}`}>
          {name
            .split(' ')
            .map((n) => n[0])
            .filter((_, i) => i < 2)
            .join('')
            .toUpperCase()}
        </p>
      )}
      {children}
    </div>
  )
}
