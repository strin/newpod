import React from 'react'
import { FiMic, FiVideo, FiShare2, FiZap, FiHeadphones, FiTrendingUp } from 'react-icons/fi'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-900 to-secondary-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-secondary-900/80 backdrop-blur-sm border-b border-secondary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <FiMic className="h-8 w-8 text-primary-400" />
                <span className="text-2xl font-bold text-white">newpod</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-secondary-300 hover:text-white px-3 py-2 text-sm font-medium">
                Features
              </button>
              <button className="text-secondary-300 hover:text-white px-3 py-2 text-sm font-medium">
                Pricing
              </button>
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Transform Content into
              <span className="text-primary-400 block mt-2">Viral Podcasts</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-secondary-300 mb-8">
              AI-powered engine that converts your blogs, newsletters, and articles into engaging short-form podcasts 
              perfect for TikTok, Instagram Reels, and YouTube Shorts.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-secondary-600 hover:border-secondary-500 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Everything You Need to Create Viral Podcasts
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<FiZap className="h-8 w-8" />}
              title="AI Script Generation"
              description="Convert any written content into natural, engaging dialogue between multiple speakers"
            />
            <FeatureCard
              icon={<FiHeadphones className="h-8 w-8" />}
              title="Premium Voice Synthesis"
              description="Choose from diverse, realistic voices with emotion and intonation control"
            />
            <FeatureCard
              icon={<FiVideo className="h-8 w-8" />}
              title="Auto Video Creation"
              description="Generate eye-catching videos with animated waveforms, subtitles, and branding"
            />
            <FeatureCard
              icon={<FiShare2 className="h-8 w-8" />}
              title="One-Click Publishing"
              description="Publish directly to TikTok, Instagram Reels, YouTube Shorts, and podcast platforms"
            />
            <FeatureCard
              icon={<FiTrendingUp className="h-8 w-8" />}
              title="Analytics Dashboard"
              description="Track performance across platforms with detailed engagement metrics"
            />
            <FeatureCard
              icon={<FiMic className="h-8 w-8" />}
              title="Multi-Format Export"
              description="Export in any format: vertical for TikTok, square for Instagram, or audio-only"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            From Blog to Podcast in 3 Simple Steps
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              number="1"
              title="Import Your Content"
              description="Paste a URL or upload a document. We support blogs, newsletters, PDFs, and more."
            />
            <StepCard
              number="2"
              title="Customize & Generate"
              description="Choose voices, edit the script, select templates, and let our AI create your podcast."
            />
            <StepCard
              number="3"
              title="Publish Everywhere"
              description="One-click publishing to all major social platforms or download for manual posting."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Content?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of content creators using newpod to reach new audiences
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="w-full sm:w-auto bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors">
              Start Free Trial
            </button>
          </div>
          <p className="text-sm text-primary-100 mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary-900 border-t border-secondary-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <FiMic className="h-6 w-6 text-primary-400" />
              <span className="text-xl font-bold text-white">newpod</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-secondary-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-secondary-500">
            © 2024 newpod. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-secondary-800/50 backdrop-blur-sm border border-secondary-700 rounded-xl p-6 hover:bg-secondary-800 transition-all">
      <div className="text-primary-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-secondary-300">{description}</p>
    </div>
  )
}

interface StepCardProps {
  number: string
  title: string
  description: string
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description }) => {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-500 text-white text-2xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-secondary-300">{description}</p>
    </div>
  )
}

export default App