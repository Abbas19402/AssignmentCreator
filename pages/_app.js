import '../styles/globals.css'
import Header from '../Components/Header/Header'
import { Provider } from 'react-redux'
import Store from '../Redux/Store'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={Store}>
        <Header />
        <ToastContainer />
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
