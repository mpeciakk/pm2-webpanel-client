import { useRef } from 'react'
import Router from 'next/router'
import cookieCutter from 'cookie-cutter'

const Login = () => {
    const usernameRef = useRef<HTMLInputElement>()
    const passwordRef = useRef<HTMLInputElement>()

    const login = (event) => {
        event.preventDefault()

        fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: usernameRef.current.value,
                password: passwordRef.current.value,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                cookieCutter.set('access_token', data.access_token)

                Router.push('/')
            })
    }

    return (
        <div className="w-full h-full">
            <main className="w-full h-full flex justify-center items-center">
                <form className="bg-white shadow-md rounded p-8 py-12">
                    <div className="mb-6 font-bold text-3xl text-gray-700 w-full text-center">PM2 Webpanel</div>

                    <div className="mb-6">
                        <label htmlFor="username" className="text-gray-700 text-sm font-bold mb-2">
                            Username
                        </label>

                        <input
                            type="text"
                            id="username"
                            placeholder="Username"
                            ref={usernameRef}
                            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>

                        <input
                            type="text"
                            id="password"
                            placeholder="Password"
                            ref={passwordRef}
                            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                        />
                    </div>

                    <button
                        className="bg-gray-700 w-full py-2 px-4 rounded text-white font-bold focus:outline-none"
                        onClick={login}
                    >
                        Log in
                    </button>
                </form>
            </main>
        </div>
    )
}

export default Login
