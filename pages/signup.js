import React, { useState } from 'react'
import Auth from '../containers/Auth'
import AuthLayout from '../components/AuthLayout'
import firebase from 'firebase'
import Link from 'next/link'
import { AuthAction, withAuthUser } from 'next-firebase-auth'

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState('')

  const onSignUpPress = async (e) => {
    e.preventDefault()
    try {
      const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
      firebase
        .database()
        .ref('users')
        .child(user.user.uid)
        .set({
          data: {
            id: user.user.uid,
            name,
            email: user.user.email,
          },
        })
      await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <Auth>
      <AuthLayout title={'Create an Account'} description={'Welcome, create your account!'}>
        <form onSubmit={onSignUpPress} className="flex my-6 flex-col">
          <input
            className="my-3 p-2 rounded-lg bg-gray-100 focus:shadow-2xl focus:bg-white focus:ring-2"
            value={name}
            onChange={(e) => {
              setName(e.currentTarget.value)
              setError('')
            }}
            placeholder={'Name'}
          />
          <input
            className="my-3 p-2 rounded-lg bg-gray-100 focus:shadow-2xl focus:bg-white focus:ring-2"
            value={email}
            onChange={(e) => {
              setEmail(e.currentTarget.value)
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
          Already have an account?{' '}
          <Link href="/">
            <span className="cursor-pointer text-sm underline text-blue-500">Click here.</span>
          </Link>
        </p>
      </AuthLayout>
    </Auth>
  )
}

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
})(SignUp)
