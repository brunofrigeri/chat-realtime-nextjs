/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { AuthAction, useAuthUser, withAuthUser } from 'next-firebase-auth'
import Sidebar from '../components/Sidebar'
import '../styles/globals.css'
import initAuth from '../utils/initAuth'

initAuth()

function MyLoader() {
  return <div>Loading...</div>
}

function MyApp({ Component, pageProps, router }) {
  const { id, signOut } = useAuthUser()

  if (id) {
    return (
      <div className="flex flex-row">
        <Sidebar id={id} signOut={signOut} router={router} />
        <Component {...pageProps} />
      </div>
    )
  }

  return <Component {...pageProps} />
}

export default withAuthUser({
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  LoaderComponent: MyLoader,
  authPageURL: '/',
  appPageURL: '/auth',
})(MyApp)
