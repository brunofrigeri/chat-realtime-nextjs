import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import PersonItem from './PersonItem'

export default function Sidebar({ HeaderComponent, conversations = [], signOut, onPersonPress }) {
  return (
    <div className="min-h-screen flex flex-col items-stretch p-6 w-60 bg-gray-50 border-r">
      <div>{HeaderComponent}</div>
      <div className="flex-1 py-6 flex flex-col justify-between">
        <div>
          {conversations.length > 0 &&
            conversations.map(({ title, people }, index) => (
              <div key={index}>
                <p className="font-semibold text-sm text-gray-500">{title}</p>
                <div className="py-6">
                  {people.length > 0 &&
                    people.map((person, idx) => (
                      <PersonItem
                        key={idx}
                        {...person.data}
                        onClick={() => onPersonPress(person.data.id)}
                        status={'online'}
                      />
                    ))}
                </div>
              </div>
            ))}
        </div>
        <div className="flex flex-row items-center">
          <FontAwesomeIcon icon={faSignOutAlt} />
          <button className="ml-2" onClick={signOut}>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  )
}
