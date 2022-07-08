import type { NextPage } from 'next'
import Head from 'next/head'
import Host from '../components/Host'

const Home: NextPage = () => {
    return (
        <div className="w-full h-full">
            <Head>
                <title>pm2 webpanel</title>
            </Head>

            <main className="w-full h-full flex justify-center items-center">
                <div className="w-2/3">
                    <Host name="s1"></Host>
                </div>
            </main>
        </div>
    )
}

export default Home
