import React, { useState } from 'react'
import firebase from 'firebase'

const Header = ({ email, signOut }) => {
    const [emailValue, setEmailValue] = useState('')
    const [password, setPassword] = useState('')

    const signIn = async () => {
        await firebase.auth().signInWithEmailAndPassword(emailValue, password)
    }

    return (
        <div>
            {email ? (
            <>
                <p>You are signed with {email}.</p>
                <a onClick={signOut}>Sign Out</a>
            </>
            ) : (
                <>
                    <form className="flex flex-col">
                        <input value={emailValue} onChange={(e) => setEmailValue(e.currentTarget.value)} placeholder={'Email'} />
                        <input value={password} onChange={(e) => setPassword(e.currentTarget.value)} type={'password'} placeholder={'Password'} />
                    </form>
                    <a onClick={signIn}>Sign In</a>
                </>
            )}
        </div>
    )
}

export default Header