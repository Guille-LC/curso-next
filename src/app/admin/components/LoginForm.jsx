"use client"
import { useState } from "react"
import { useAuthContext } from "@/src/components/context/AuthContext";
import { handleChange } from "@/src/utils/handleChange";

export default function LoginForm() {
    const {login,register,loginWithGoogle} = useAuthContext()
    const [values,setValues] = useState({
        email:"",password:""
    });

    const handleSubmit = e => {
        e.preventDefault()
    }

    return(
        <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" name="email" id="email" value={values.email} onChange={(e) => handleChange({ e, setValues, values })} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
        </div>
        <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" name="password" id="password" value={values.password} onChange={(e) => handleChange({ e, setValues, values })} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" onClick={() => login(values.email, values.password)}><img src="/login.png" alt="login" className="inline-block mr-2 w-8 h-8"/>Login</button>
        <button type="button" className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2" onClick={() => register(values.email, values.password)}><img src="/register.png" alt="register" className="inline-block mr-2 w-6 h-6"/>Register</button>
        <button type="button" className="w-full bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2" onClick={() => loginWithGoogle()}>
            <img src="/google.png" alt="Google Logo" className="inline-block mr-2 w-5 h-5"/>Login With Google</button>
        </form>
    )
}