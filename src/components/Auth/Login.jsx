import React, { useState } from 'react'
import { Mail, Lock } from "lucide-react"   // icons (lucide-react is already included if you use shadcn/ui)

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail("")
    setPassword("")
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-xl border border-white/20">
        <h1 className="text-3xl font-semibold text-white text-center mb-6">
          Welcome Back 👋
        </h1>
        <p className="text-gray-300 text-center mb-8">
          Please login to continue
        </p>

        <form onSubmit={submitHandler} className="flex flex-col space-y-5">
          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 text-gray-400" size={20} />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-900/70 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3.5 text-gray-400" size={20} />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-900/70 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 transition-all py-3 rounded-xl text-lg font-medium text-white shadow-md"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
