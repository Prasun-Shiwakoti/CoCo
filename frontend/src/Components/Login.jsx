import React, { useEffect, useState } from 'react'

const Login = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);
        try {
            const res = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })
            const data = await res.json()

        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    }


    return (
        <div className='bg-sky-50 h-[100vh] w-[100vw] flex items-center justify-center'>
            <div className='bg-sky-50 p-10 rounded-md shadow-md w-[500px]'>
                <h3 className='text-center text-blue-900 font-bold text-lg'>COCO</h3>
                <h1 className='font-bold text-center mb-5 text-blue-900 text-4xl'>Login</h1>
                <form className='space-y-4 flex flex-col gap-3' onSubmit={handleSubmit}>
                    <div className='flex flex-col space-y-2'>
                        <label className='text-lg'>Email</label>
                        <input type='email' required className='p-2 border border-gray-300 rounded-md' value={formData.username} onChange={(e) => setFormData({ ...formData, [e.target.id]: e.target.value })} id='username' />
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <label className='text-lg'>Password</label>
                        <input type='email' required className='p-2 border border-gray-300 rounded-md' value={formData.password} onChange={(e) => setFormData({ ...formData, [e.target.id]: e.target.value })} id='password' />
                    </div>
                    <button className='bg-blue-600 w-full py-3 mt-10 rounded-full text-white hover:shadow-xl hover:shadow-blue-100' disabled={loading}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login