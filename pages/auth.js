import { AuthAction, useAuthUser, withAuthUser } from 'next-firebase-auth'
import React, { useMemo } from 'react'
import useSWR from 'swr'
import Avatar from '../components/Avatar'
import Sidebar from '../components/Sidebar'
import Status from '../components/Status'

const AuthenticatedPage = () => {
  const AuthUser = useAuthUser()

  const { data } = useSWR(AuthUser.id ? `/api/user/${AuthUser.id}` : null, async (...args) => {
    const res = await fetch(args)
    return res.json()
  })

  const onSignOutPress = async () => {
    await AuthUser.signOut()
  }

  const conversations = useMemo(() => {
    let topicsArray = []

    topicsArray.push({
      title: 'Conversations',
      people: [
        {
          id: 0,
          name: 'Vivian Carolino',
          email: 'v@gmail.com',
          status: 'online',
        },
        {
          id: 1,
          name: 'Viviane Frigeri',
          email: 'v1@gmail.com',
          status: 'offline',
        },
      ],
    })

    return topicsArray
  }, [])

  if (!data) {
    return <h1>Loading</h1>
  }

  return (
    <div className="flex flex-col justify-center">
      <Sidebar
        HeaderComponent={
          <div className="flex flex-row items-center">
            <Avatar name={data.name}>
              <Status status={'online'} />
            </Avatar>
            <p className="font-bold text-sm ml-2">{data.name}</p>
          </div>
        }
        conversations={conversations}
        signOut={onSignOutPress}
      />
    </div>
  )
}

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  authPageURL: '/',
})(AuthenticatedPage)
