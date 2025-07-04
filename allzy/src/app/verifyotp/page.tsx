'use client'

import { useState } from 'react'

export default function VerifyOtpPage() {
  const [otp, setOtp] = useState(Array(6).fill(''))

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto focus next
    const next = document.getElementById(`otp-${index + 1}`)
    if (value && next) {
      (next as HTMLInputElement).focus()
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const finalOtp = otp.join('')
    console.log('Entered OTP:', finalOtp)
    // Verify OTP logic here
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fefae0] px-4 py-8">
      <div className="w-full max-w-md bg-white shadow-md rounded-xl p-6 text-center space-y-4">
        <h2 className="text-2xl font-bold text-orange-600">Verify OTP</h2>
        <p className="text-sm text-gray-500">Enter the 6-digit code sent to your email</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center gap-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                className="w-12 h-12 text-xl text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  )
}
