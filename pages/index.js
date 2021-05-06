import React, { useState } from 'react'
import { AuthAction, withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth'
import firebase from 'firebase'
import Link from 'next/link'
import AuthLayout from '../components/AuthLayout'
import Auth from '../containers/Auth'

const Home = () => {
  const [emailValue, setEmailValue] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState('')

  const signIn = async (e) => {
    e.preventDefault()
    try {
      await firebase.auth().signInWithEmailAndPassword(emailValue, password)
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <Auth>
      <AuthLayout title={'Login'} description={'Welcome, login with your account!'}>
        <form onSubmit={signIn} className="flex my-6 flex-col">
          <input
            className="my-3 p-2 rounded-lg bg-gray-100 focus:shadow-2xl focus:bg-white focus:ring-2"
            value={emailValue}
            onChange={(e) => {
              setEmailValue(e.currentTarget.value)
              setError('')
            }}
            placeholder={'Email'}
          />
          <input
            className="my-3 p-2 rounded-lg bg-gray-100 focus:shadow-2xl focus:bg-white focus:ring-2"
            value={password}
            onChange={(e) => {
              setPassword(e.currentTarget.value)
              setError('')
            }}
            type={'password'}
            placeholder={'Password'}
          />
          {!!error && <span className="self-center text-sm text-red-500">{error}</span>}
          <button type="submit" className="mt-8 p-2 rounded-lg text-white font-bold bg-blue">
            Sign in
          </button>
        </form>
        <p className="self-center text-sm">
          Haven't an account yet?{' '}
          <Link href="/signup">
            <span className="cursor-pointer text-sm underline text-blue-500">Create here.</span>
          </Link>
        </p>
      </AuthLayout>
    </Auth>
  )
}

export const getServerSideProps = withAuthUserTokenSSR()()

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  appPageURL: '/auth',
})(Home)
