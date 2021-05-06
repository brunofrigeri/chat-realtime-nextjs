import { AuthAction, withAuthUser } from 'next-firebase-auth'
import React from 'react'

const AuthenticatedPage = () => {
  return (
    <div className="flex flex-row">
      <h1>OLA MUNDAO</h1>
    </div>
  )
}

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  authPageURL: '/',
  appPageURL: '/auth',
})(AuthenticatedPage)
