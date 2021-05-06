import { AuthAction, withAuthUser } from 'next-firebase-auth'
import React from 'react'
import Layout from '../../components/Chat'

function Chat() {
  return <Layout />
}

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  authPageURL: '/',
  appPageURL: '/auth',
})(Chat)
