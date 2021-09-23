import '../styles/globals.scss'
import NProgress from 'nprogress'
import Router from 'next/router'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { useEffect } from 'react'
import Layout from 'components/layout/Layout'
import { useStore } from '../store/store'
import { appWithTranslation } from '../i18n'

// Global styles

// NProgress events
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => {
    NProgress.done()
})
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
    const store = useStore(pageProps.initialReduxState)
    const persistor = persistStore(store)
    useEffect(() => {
        // To remove the server-side injected CSS.
        if (window) {
            const jssStyles = document.querySelector('#jss-server-side')
            if (jssStyles) {
                jssStyles.parentElement.removeChild(jssStyles)
            }
        }
    }, [])
    return (
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </PersistGate>
            </Provider>
        </>
    )
}

export default appWithTranslation(MyApp)
