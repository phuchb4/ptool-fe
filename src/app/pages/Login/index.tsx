"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import useAuth from '@/app/hooks/useAuth';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showpass, setShowpass] = useState(false);

    const { loginUser } = useAuth();

    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            router.replace('/pages/Dashboard');
        }
    }, [router])

    const validateInputs = () => {
        if (!email.trim()) {
            alert("Email is required!");
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Email is invalid");
            return false;
        }
        return true;
    }

    const handleLogin = async () => {
        if (!validateInputs) return;
        try {
            const response = await loginUser({ email, password });
            const token = response.data.token;
            if (token) {
                localStorage.setItem('token', token);
            }
        }
        catch (error) {
            console.error("Login failed!", error);
        }
    }

    return (
        <div 
            className="min-h-screen flex items-center justify-center bg-gray-300 bg-center bg-cover"
            style = {{
                backgroundImage: "url('/bg.jpg')",
            }}    
        >
            <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-center text-black mb-6">
                    Login
                </h2>

                <div className="space-y-4">
                    <input 
                        type="text" 
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border rounded text-black focus:outline-none"  
                    />

                    <input 
                        type={showpass ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded text-black focus:outline-none"    
                    />

                    <div className="flex items-center space-x-2">
                        <input 
                            type="checkbox"
                            id="showpass"
                            checked={showpass}
                            onChange={() => setShowpass(!showpass)}
                            className="cursor-pointer form-checkbox"    
                        />
                        <label 
                            htmlFor="showpass"
                            className="text-sm text-gray-700"
                        >
                            Show Password
                        </label>
                    </div>

                    <button
                        onClick={handleLogin}
                        className="w-1/3 mx-auto flex justify-center bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200 cursor-pointer"
                    >   
                        Login
                    </button>

                    <p>
                        Dont{'\''}t have an account?&nbsp;
                        <Link 
                            href="/pages/Register"
                            className="text-blue-500 hover:underline"    
                        >
                            Register here!
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );

}