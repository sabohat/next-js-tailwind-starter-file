import '../styles/globals.css'
import NProgress from 'nprogress'
import Router from 'next/router'
import { Provider } from 'react-redux'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { StylesProvider } from '@material-ui/core/styles'
import { useEffect } from 'react'
import Layout from 'components/layout/Layout'
import { useStore } from '../store/store'
import { appWithTranslation } from '../i18n'
import theme from '../theme.'

// Global styles
const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
`

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
                <StylesProvider injectFirst>
                    <GlobalStyle />
                    <ThemeProvider theme={theme}>
                        <PersistGate loading={null} persistor={persistor}>
                            <Layout>
                                <Component {...pageProps} />
                            </Layout>
                        </PersistGate>
                    </ThemeProvider>
                </StylesProvider>
            </Provider>
        </>
    )
}

export default appWithTranslation(MyApp)
