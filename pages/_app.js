import '../styles/globals.css'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { Provider } from 'react-redux'
import Store from '../Redux/Store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { ToastContainer} from 'react-toastify';
import Router from 'next/router'
import Nprogress from 'nprogress'
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react'
import Head from 'next/head'
import LoaderCSS from '../public/Assets/NProgress/nProgress.css'
import LoaderJS from '../public/Assets/NProgress/nProgress'

function MyApp({ Component, pageProps }) {
  let persistor = persistStore(Store)
  useEffect(() => {
    Router.events.on("routeChangeStart", (url)=>{
      Nprogress.start()
    })
    Router.events.on("routeChangeError", (url) =>{
      Nprogress.done(false)
    });
    Router.events.on("routeChangeComplete", (url)=>{
      Nprogress.done(false)
    });
  })
  return (
    <>
      <Head>
        <script src={LoaderJS}></script>
        <link rel='stylesheet' href={LoaderCSS}/> 
      </Head>
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





