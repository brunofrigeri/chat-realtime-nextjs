import React from 'react'

const Auth = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
      {children}
    </div>
  )
}

export default Auth
