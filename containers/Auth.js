import React from 'react'

const Auth = ({ children }) => {
    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-500">
            {children}
        </div>
    )
}

export default Auth