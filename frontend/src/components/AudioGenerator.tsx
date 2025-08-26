import React, { useState } from 'react'
import { FiMic, FiDownload, FiLoader } from 'react-icons/fi'
import { NewpodAPI } from '@/lib/api'

export const AudioGenerator: React.FC = () => {
  const [transcript, setTranscript] = useState('')
  const [speakers, setSpeakers] = useState('Alice, Bob')
  const [isGenerating, setIsGenerating] = useState(false)
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null)
  const [error, setError] = useState('')

  const handleGenerate = async () => {
    if (!transcript.trim()) {
      setError('Please enter a transcript')
      return
    }

    setIsGenerating(true)
    setError('')
    setAudioBlob(null)

    try {
      const speakerList = speakers.split(',').map(s => s.trim()).filter(Boolean)
      
      const blob = await NewpodAPI.generateAudio({
        transcript,
        speakers: speakerList,
      })

      setAudioBlob(blob)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate audio')
    } finally {
      setIsGenerating(false)
    }
  }

  const handleDownload = () => {
    if (audioBlob) {
      NewpodAPI.downloadAudio(audioBlob, 'newpod-audio.mp3')
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-secondary-800/50 backdrop-blur-sm border border-secondary-700 rounded-xl">
      <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
        <FiMic className="text-primary-400" />
        Generate Audio
      </h2>

      <div className="space-y-4">
        {/* Speakers Input */}
        <div>
          <label className="block text-sm font-medium text-secondary-300 mb-1">
            Speakers (comma-separated)
          </label>
          <input
            type="text"
            value={speakers}
            onChange={(e) => setSpeakers(e.target.value)}
            className="w-full px-4 py-2 bg-secondary-900 border border-secondary-600 rounded-lg text-white placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Alice, Bob"
          />
        </div>

        {/* Transcript Input */}
        <div>
          <label className="block text-sm font-medium text-secondary-300 mb-1">
            Transcript
          </label>
          <textarea
            value={transcript}
            onChange={(e) => setTranscript(e.target.value)}
            className="w-full px-4 py-3 bg-secondary-900 border border-secondary-600 rounded-lg text-white placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 h-32"
            placeholder="Alice: Welcome to the show! Bob: Thanks for having me..."
          />
        </div>

        {/* Error Display */}
        {error && (
          <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
            {error}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleGenerate}
            disabled={isGenerating || !transcript.trim()}
            className="flex-1 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-700 disabled:opacity-50 text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
          >
            {isGenerating ? (
              <>
                <FiLoader className="animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <FiMic />
                Generate Audio
              </>
            )}
          </button>

          {audioBlob && (
            <button
              onClick={handleDownload}
              className="bg-secondary-600 hover:bg-secondary-500 text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2"
            >
              <FiDownload />
              Download
            </button>
          )}
        </div>

        {/* Audio Player */}
        {audioBlob && (
          <div className="mt-4">
            <audio
              controls
              className="w-full"
              src={NewpodAPI.createAudioURL(audioBlob)}
            />
          </div>
        )}
      </div>
    </div>
  )
}