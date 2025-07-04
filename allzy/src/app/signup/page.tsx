'use client'
import { useRouter } from 'next/navigation'


import { useState } from 'react'
import { FaGoogle, FaFacebookF } from 'react-icons/fa'

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
    const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!')
      return
    }

   console.log('Signup data:', formData)

    // ✅ Navigate to OTP page after signup
    router.push('/verify-otp')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f1ecca] px-4 sm:px-6 lg:px-8 py-8">
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-6">
        {/* Branding */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-orange-500">Allzy</h2>
        </div>

        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">Sign Up</h1>
          <p className="text-sm text-gray-500 mt-1">
            Enter your details to create an account.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              autoComplete="off"
              required
              className="w-full px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              autoComplete="off"
              required
              className="w-full px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              autoComplete="new-password"
              required
              className="w-full px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter your password"
              autoComplete="new-password"
              required
              className="w-full px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition duration-300 text-sm sm:text-base"
          >
            Create Account
          </button>
        </form>

        {/* Optional: Social sign up */}
        <div className="text-center space-y-4">
          <p className="text-sm text-gray-500">or sign up with</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-sm w-full sm:w-auto">
              <FaGoogle className="text-red-500" />
              Google
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-sm w-full sm:w-auto">
              <FaFacebookF className="text-blue-600" />
              Facebook
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/signin" className="text-orange-500 hover:underline">
            Sign In
          </a>
        </div>
      </div>
    </div>
  )
}
