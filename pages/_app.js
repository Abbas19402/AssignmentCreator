import '../styles/globals.css'
import Header from '../Components/Header/Header'
import { Provider } from 'react-redux'
import Store from '../Redux/Store'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={Store}>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
