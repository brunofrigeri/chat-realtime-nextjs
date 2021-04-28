/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import '../styles/globals.css'
import initAuth from '../utils/initAuth'

initAuth()

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
