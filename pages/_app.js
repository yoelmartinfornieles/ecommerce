import '../styles/globals.css'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {

  // Fixing the SSR from materialui
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
