import React from 'react'

export default function AuthLayout({ title, description, children }) {
    return (
        <div className="flex flex-col w-96 p-10 rounded-xl justify-center self-center items-center bg-gray-50">
            {title && <h1 className="font-bold text-2xl pb-2">{title}</h1>}
            {description && <h2>{description}</h2>}
            <div className="flex flex-col w-full">
                {children}
            </div>
        </div>
    )
}