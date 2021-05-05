import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faComments } from '@fortawesome/free-solid-svg-icons'
import Avatar from './Avatar'
import Status from './Status'
import useSWR from 'swr'

export default function Sidebar({ id, signOut, router }) {
  const { data } = useSWR(id ? `/api/user/${id}` : null, async (...args) => {
    const res = await fetch(args)
    return res.json()
  })

  const options = [
    {
      id: 'comments',
      route: '/auth',
      icon: faComments,
    },
  ]

  const HeaderComponent = data ? (
    <div className="flex flex-row items-center">
      <Avatar name={data.name}>
        <Status status={'online'} />
      </Avatar>
    </div>
  ) : null

  const OptionsComponent =
    options.length > 0 ? (
      <div className="flex flex-col w-full">
        {options.map((option) => (
          <div
            key={option.id}
            className={`flex px-4 py-2 justify-center ${
              router.pathname.startsWith(option.route) ? 'border-r-4 rounded-t-sm border-blue' : ''
            }`}
          >
            <FontAwesomeIcon icon={option.icon} size={'1x'} color={'#0C55B4'} />
          </div>
        ))}
      </div>
    ) : null

  return (
    <div className="min-h-screen h-full flex flex-col justify-between py-4 border-r border-gray-50 w-20">
      <div className="flex flex-col items-center w-full">
        <div>{HeaderComponent}</div>
        <div className="w-full py-6">{OptionsComponent}</div>
      </div>
      <div className="py-6 flex flex-col items-center">
        <button className="flex flex-row items-center" onClick={signOut}>
          <FontAwesomeIcon icon={faSignOutAlt} size={'lg'} color={'#000'} />
        </button>
      </div>
    </div>
  )
}
