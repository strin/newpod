import React from 'react'
import { AudioGenerator } from '@/components/AudioGenerator'
import { FiArrowLeft } from 'react-icons/fi'
import Link from 'next/link'

export default function Demo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-900 to-secondary-800">
      {/* Simple Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-secondary-300 hover:text-white transition-colors">
          <FiArrowLeft />
          Back to Home
        </Link>
      </div>

      {/* Demo Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Try newpod Live
          </h1>
          <p className="text-xl text-secondary-300 max-w-2xl mx-auto">
            Generate a podcast from your transcript using our AI-powered voice synthesis
          </p>
        </div>

        <AudioGenerator />

        <div className="mt-12 text-center text-secondary-400">
          <p>This is a demo using mock audio generation.</p>
          <p>Full voice synthesis coming soon!</p>
        </div>
      </div>
    </div>
  )
}