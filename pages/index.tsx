import Host from '../components/Host'
import Cookies from 'cookies'

export async function getServerSideProps({ req, res }) {
    const cookies = new Cookies(req, res)

    const response = await fetch(`http://localhost:3000/hosts`, {
        headers: {
            Authorization: `Bearer ${cookies.get('access_token')}`,
        },
    })
    const hosts = await response.json()

    if (hosts.statusCode === 401) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        }
    }

    return { props: { hosts } }
}

const Home = ({ hosts }) => {   
    return (
        <div className="w-full h-full">
            <main className="w-full h-full flex justify-center items-center">
                <div className="w-2/3">
                    {hosts.map(host => <Host key={host.id} name={host.name}></Host>)}
                </div>
            </main>
        </div>
    )
}

export default Home
