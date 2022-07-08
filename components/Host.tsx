import { BsCpu } from 'react-icons/bs'
import { FaMemory } from 'react-icons/fa'
import { FiHardDrive } from 'react-icons/fi'
import Collapsible from './Collapsible'

const Host = ({ name }) => {
    interface Process {
        pid: number
        name: string
        id: number
        memory: number
        cpu: number
    }

    let processes = [
        {
            pid: 1,
            name: 'test',
            id: 0,
            memory: 100,
            cpu: 3,
        },
        {
            pid: 1,
            name: 'test',
            id: 0,
            memory: 100,
            cpu: 3,
        },
        {
            pid: 1,
            name: 'test',
            id: 0,
            memory: 100,
            cpu: 3,
        },
    ] as Process[]

    return (
        <Collapsible
            title={
                <div className="flex w-full font-medium text-xl">
                    <h6>{name}</h6>

                    <div className="self-end ml-auto mr-5 flex items-center justify-around w-1/4">
                        <FaMemory /> 100MB/1000MB <BsCpu /> 42% <FiHardDrive /> 83%
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
                            {processes.map((process) => (
                                <tr className="h-10 border-b">
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
}

export default Host
