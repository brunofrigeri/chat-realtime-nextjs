import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Avatar from './Avatar'

export default function Details({ setShouldShowDetails }) {
  return (
    <div className="flex flex-col w-1/3 p-4">
      <div className="flex flex-row justify-between items-center mb-8">
        <p className="font-bold text-xl">Details</p>
        <FontAwesomeIcon
          className="cursor-pointer"
          icon={faTimes}
          color={'gray'}
          onClick={() => setShouldShowDetails(false)}
        />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col items-center mb-4">
          <Avatar name={'Lisa Price'} scale={4} />
        </div>
        <p className="font-semibold text-lg p-6">Lisa Price</p>
      </div>
    </div>
  )
}
