import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Collapsible from '../components/Collapsible'

const Home: NextPage = () => {
    return (
        <div className="flex min-h-screen">
            <Head>
                <title>pm2 webpanel</title>
            </Head>

            <main className="w-full">
                <Collapsible>test</Collapsible>
                <Collapsible>test</Collapsible>
                <Collapsible>test</Collapsible>
            </main>
        </div>
    )
}

export default Home
