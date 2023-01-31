import '../styles/globals.css'
import { Toaster } from 'react-hot-toast'
import { Layout } from '../components'
import { StateContext } from '../context/StateContext'
import { AuthContext } from '../context/AuthContext'
import { useEffect } from 'react'
import AOS from 'aos'

import 'aos/dist/aos.css'
export default function App({ Component, pageProps }) {
  /* initial aos effect */
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    })
  }, [])

  /* layout handle */
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (
    <AuthContext>
      <StateContext>
        <Layout>
          <Toaster />
          <Component {...pageProps} />;
        </Layout>
      </StateContext>
    </AuthContext>
  )
}
