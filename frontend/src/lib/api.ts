// API client for newpod backend services

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://tim-8--vibevoice-v3-generate-audio.modal.run'

export interface GenerateAudioRequest {
  transcript: string
  speakers: string[]
  model_path?: string
}

export interface GenerateAudioResponse {
  audioUrl: string
  duration?: number
  size?: number
}

export class NewpodAPI {
  static async generateAudio(request: GenerateAudioRequest): Promise<Blob> {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        transcript: request.transcript,
        speakers: request.speakers,
        model_path: request.model_path || 'microsoft/VibeVoice-1.5B',
      }),
    })

    if (!response.ok) {
      throw new Error(`API call failed: ${response.status} ${response.statusText}`)
    }

    return response.blob()
  }

  static async generateFromURL(url: string, speakers: string[] = ['Host', 'Guest']): Promise<Blob> {
    // In a real implementation, this would:
    // 1. Fetch content from the URL
    // 2. Extract and parse the content
    // 3. Generate a conversation script
    // 4. Call generateAudio
    
    // For now, mock implementation
    const mockTranscript = `Host: Welcome to our AI-generated podcast about the content from ${url}. Guest: Thanks for having me! Let's dive into this fascinating topic.`
    
    return this.generateAudio({
      transcript: mockTranscript,
      speakers,
    })
  }

  static createAudioURL(blob: Blob): string {
    return URL.createObjectURL(blob)
  }

  static async downloadAudio(blob: Blob, filename: string = 'podcast.mp3') {
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }
}