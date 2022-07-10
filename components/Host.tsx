import { useEffect, useState } from 'react'
import { BsCpu } from 'react-icons/bs'
import { FaMemory } from 'react-icons/fa'
import { FiHardDrive } from 'react-icons/fi'
import Collapsible from './Collapsible'
import cookieCutter from 'cookie-cutter'

const Host = ({ name }) => {
    interface Process {
        pid: number
        name: string
        id: number
        status: string
        memory: number
        cpu: number
    }

    interface HostStatistics {
        memory: number
        maxMemory: number
        cpu: number
        disk: number
    }

    const [processes, setProcesses] = useState<Process[]>(null)
    const [stats, setStats] = useState<HostStatistics>(null)

    const update = () => {
        fetch(`http://localhost:3000/hosts/${name}/processes`, {
            headers: {
                Authorization: `Bearer ${cookieCutter.get('access_token')}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setProcesses(data)
            })

        fetch(`http://localhost:3000/hosts/${name}/stats`, {
            headers: {
                Authorization: `Bearer ${cookieCutter.get('access_token')}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setStats(data)
            })
    }

    useEffect(() => {
        update()

        setInterval(update, 5000)
    }, [])

    return (
        processes &&
        stats && (
            <Collapsible
                title={
                    <div className="flex w-full font-medium text-xl">
                        <h6>{name}</h6>

                        <div className="self-end ml-auto mr-5 flex items-center justify-around w-2/6">
                            <FaMemory /> {Math.floor(stats.memory / 1024 / 1024)}MB/
                            {Math.floor(stats.maxMemory / 1024 / 1024)}MB <BsCpu /> {stats.cpu}% <FiHardDrive />{' '}
                            {stats.disk}%
                        </div>
                    </div>
                }
                content={
                    <div className="flex">
                        <table className="table-auto w-full text-center">
                            <thead>
                                <tr className="h-10 border-b">
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Memory</th>
                                    <th>CPU</th>
                                    <th>PID</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {processes &&
                                    processes.map((process) => (
                                        <tr
                                            key={process.id}
                                            className={`h-10 border-b ${process.status === 'stopped' && 'bg-red-600'}`}
                                        >
                                            <th>{process.id}</th>
                                            <td>{process.name}</td>
                                            <td>{Math.round(process.memory / 1024 / 1024)}MB</td>
                                            <td>{process.cpu}</td>
                                            <td>{process.pid}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                }
            />
        )
    )
}

export default Host
