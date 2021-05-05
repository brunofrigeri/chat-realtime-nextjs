import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Conversations from './Conversations'

export default function ChatSide() {
  return (
    <div className="w-1/3 h-full py-4 px-8">
      <div className="relative">
        <div className="flex flex-row items-center pb-8">
          <p className="text-xl font-semibold mr-4">My Messages</p>
          <FontAwesomeIcon icon={faChevronDown} color={'black'} />
        </div>
        <div className="flex flex-row items-center rounded-lg bg-gray-100 p-3">
          <FontAwesomeIcon icon={faSearch} color={'gray'} />
          <input
            className="w-full bg-gray-100 rounded-lg ml-4 text-xs"
            placeholder={'Search in Messages'}
          />
        </div>
      </div>
      <Conversations activeId={3} />
    </div>
  )
}
