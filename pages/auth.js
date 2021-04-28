import { AuthAction, useAuthUser, withAuthUser } from 'next-firebase-auth'
import React from 'react'

const AuthenticatedPage = () => {
    const AuthUser = useAuthUser()

    const onSignOutPress = async () => {
        await AuthUser.signOut()
    }

    return (
        <div>
            <h1>Welcome {AuthUser.email}</h1>
            <a onClick={onSignOutPress} >Sign out</a>
        </div>
    )
}

export default withAuthUser({
    whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
    authPageURL: '/'
})(AuthenticatedPage)