import { AuthAction, useAuthUser, withAuthUser } from 'next-firebase-auth'
import React, { useMemo } from 'react'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import Avatar from '../components/Avatar'
import Sidebar from '../components/Sidebar'
import Status from '../components/Status'

const AuthenticatedPage = () => {
  const AuthUser = useAuthUser()
  const router = useRouter()

  const { data } = useSWR(AuthUser.id ? `/api/user/${AuthUser.id}` : null, async (...args) => {
    const res = await fetch(args)
    return res.json()
  })

  const { data: users } = useSWR(AuthUser.id ? `/api/users` : null, async (...args) => {
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
      people: users && users.data ? users.data.filter((u) => u.data.id !== AuthUser.id) : [],
    })

    return topicsArray
  }, [users, AuthUser.id])

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
        onPersonPress={(id) =>
          router.push({
            pathname: '/auth/conversation/[id]',
            query: { id },
          })
        }
      />
    </div>
  )
}

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  authPageURL: '/',
})(AuthenticatedPage)
