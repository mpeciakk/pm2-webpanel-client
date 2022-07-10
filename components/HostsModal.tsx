import cookieCutter from 'cookie-cutter'
import { useEffect, useRef, useState } from 'react'

const HostsModal = ({ isOpen }) => {
    const [hosts, setHosts] = useState(null)
    const hostNameRef = useRef<HTMLInputElement>()
    const hostUrlRef = useRef<HTMLInputElement>()
    const hostSecretRef = useRef<HTMLInputElement>()

    useEffect(() => {
        fetch(`http://localhost:3000/hosts`, {
            headers: {
                Authorization: `Bearer ${cookieCutter.get('access_token')}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setHosts(data)
            })
    }, [isOpen])

    const addHost = () => {
        fetch(`http://localhost:3000/hosts/add`, {
            headers: {
                Authorization: `Bearer ${cookieCutter.get('access_token')}`,
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                name: hostNameRef.current.value,
                url: hostUrlRef.current.value,
                secret: hostSecretRef.current.value,
            }),
        })
            .then(console.log)
    }

    const removeHost = (id: number) => {
        fetch(`http://localhost:3000/hosts/delete`, {
            headers: {
                Authorization: `Bearer ${cookieCutter.get('access_token')}`,
                'Content-Type': 'application/json',
            },
            method: 'DELETE',
            body: JSON.stringify({
                id: id,
            }),
        })
    }

    return (
        <div className="flex justify-center items-center w-full h-full">
            <div>
                <input
                    type="text"
                    name="Host"
                    className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    ref={hostNameRef}
                    placeholder="Host name"
                />
                <input
                    type="text"
                    name="Host"
                    className="shadow border rounded ml-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    ref={hostUrlRef}
                    placeholder="Host url"
                />
                <input
                    type="text"
                    name="Host"
                    className="shadow border rounded ml-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    ref={hostSecretRef}
                    placeholder="Host url"
                />
                <button
                    className="bg-gray-700 ml-4 py-2 px-3 rounded text-white font-bold focus:outline-none"
                    onClick={addHost}
                >
                    Add
                </button>

                <ul>
                    {hosts &&
                        hosts.map((host) => (
                            <li key={host.id} onClick={removeHost.bind(this, host.id)}>
                                {host.name}
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    )
}

export default HostsModal
