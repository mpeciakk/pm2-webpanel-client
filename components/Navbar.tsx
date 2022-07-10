import { useState } from 'react'
import Modal from 'react-modal'
import HostsModal from './HostsModal'

const Navbar = () => {
    Modal.setAppElement('#__next')

    const [modalIsOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <nav className="border-gray-200 px-2 py-2.5 bg-gray-700">
            <div className="container flex justify-between items-center mx-auto">
                <span className="text-xl font-semibold text-white">PM2</span>

                <ul className="flex flex-row space-x-8 text-sm font-medium">
                    <li>
                        <a href="#" className="hover:text-gray-50 text-gray-400">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={openModal} className="hover:text-gray-50 text-gray-400">
                            Hosts
                        </a>
                    </li>
                </ul>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Hosts"
                style={{
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                    },
                }}
            >
                <HostsModal isOpen={modalIsOpen}></HostsModal>
            </Modal>
        </nav>
    )
}

export default Navbar
