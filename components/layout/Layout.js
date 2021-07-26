import Header from '../header/Header'
import Footer from '../footer/Footer'

export default function Layout({ children }) {
    return (
        <div id="main_container">
            <Header />
            {children}
            <Footer />
        </div>
    )
}
