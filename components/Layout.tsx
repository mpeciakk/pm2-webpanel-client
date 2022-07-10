import Head from 'next/head'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>pm2 webpanel</title>
            </Head>

            <Navbar />
            <main className="w-full h-full">{children}</main>
        </>
    )
}

export default Layout
