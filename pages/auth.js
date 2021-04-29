import { AuthAction, useAuthUser, withAuthUser } from 'next-firebase-auth'
import React from 'react'
import useSWR from 'swr'

const AuthenticatedPage = () => {
  const AuthUser = useAuthUser()

  const { data } = useSWR(AuthUser.id ? `/api/user/${AuthUser.id}` : null, async (...args) => {
    const res = await fetch(args)
    return res.json()
  })

  const onSignOutPress = async () => {
    await AuthUser.signOut()
  }

  if (!data) {
    return <h1>Loading</h1>
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <span>
        Welcome <span className="text-blue-400">{data.name}</span>, your email is{' '}
        <span className="text-green-400">{data.email}</span>
      </span>
      <button onClick={onSignOutPress}>Sign out</button>
    </div>
  )
}

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  authPageURL: '/',
})(AuthenticatedPage)
