import { AuthAction, useAuthUser, withAuthUser } from 'next-firebase-auth'
import React from 'react'
import useSWR from 'swr'
import Layout from '../../components/Chat'

function Chat() {
  const { id } = useAuthUser()

  const { data: chats } = useSWR(id ? `/api/chats/${id}` : null, async (...args) => {
    const res = await fetch(args)
    return res.json()
  })

  return <Layout chats={chats} userId={id} />
}

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  authPageURL: '/',
  appPageURL: '/auth',
})(Chat)
