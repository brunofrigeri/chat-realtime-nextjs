import React, { useState } from 'react'
import Auth from '../containers/Auth'
import AuthLayout from '../components/AuthLayout'
import firebase from 'firebase-admin'

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState('')

  const onSignUpPress = async () => {
    // try {
    //   await firebase.auth()
    // } catch (err) {

    // }
  }

  return (
    <Auth>
      <AuthLayout title={'Create an Account'} description={'Welcome, create your account!'}>
        <form onSubmit={onSignUpPress} className="flex my-6 flex-col">
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
          <button type="submit" className="mt-8 p-2 rounded-lg text-white font-bold bg-blue-600">
            Sign in
          </button>
        </form>
      </AuthLayout>
    </Auth>
  )
}

export default SignUp