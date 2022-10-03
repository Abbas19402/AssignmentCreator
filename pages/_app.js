import '../styles/globals.css'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
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
          <div className='sticky top-0 left-0 z-50'>
            <Header {...pageProps}/>
          </div>
          <ToastContainer />
          <Component {...pageProps} />
          <div className='sticky -bottom-[100%] left-0 z-10'>
            <Footer/>
          </div>
        </PersistGate>
      </Provider>
    </>
  )
}

export default MyApp



