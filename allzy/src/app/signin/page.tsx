'use client';

import { FaGoogle, FaFacebookF } from 'react-icons/fa';

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f1ecca] px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-6">
        {/* Top branding */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-orange-500">Allzy</h2>
        </div>

        {/* Sign in header */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">Sign In</h1>
          <p className="text-sm text-gray-500 mt-1">
            Enter your email and password to access admin panel.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-sm text-orange-500 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition duration-300 text-sm sm:text-base"
          >
            Sign In
          </button>
        </form>

        {/* Sign in with */}
        <div className="text-center space-y-4">
          <p className="text-sm text-gray-500">or sign in with</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
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
          Don&apos;t have an account?{' '}
          <a href="/signup" className="text-orange-500 hover:underline">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
