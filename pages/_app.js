import '../styles/globals.css'
import Header from '../Components/Header/Header'
import { Provider } from 'react-redux'
import Store from '../Redux/Store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { ToastContainer} from 'react-toastify';
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  let persistor = persistStore(Store)
  return (
    <>
      <Provider store={Store}>
        <PersistGate persistor={persistor}>
          <Header {...pageProps}/>
          <ToastContainer />
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  )
}

export default MyApp



