# newpod - Product Requirements Document

## Executive Summary

newpod is an AI-powered content engine that automatically transforms written content (blogs, newsletters, articles) into engaging short-form podcast episodes optimized for social media distribution. The platform leverages advanced text-to-speech technology to create multi-speaker audio dialogues that can be further enhanced with video generation for platforms like TikTok, YouTube Shorts, and Instagram Reels.

## Product Vision

To democratize podcast creation by enabling anyone to convert their written content into professional-quality, shareable audio and video podcasts without technical expertise or expensive equipment.

## Core Features

### 1. Content Sourcing & Ingestion
- **URL Import**: Direct import from blog posts, Medium articles, Substack newsletters
- **File Upload**: Support for PDF, DOCX, TXT, Markdown files
- **API Integration**: Webhooks for automatic content ingestion from CMS platforms
- **RSS Feed Support**: Monitor and auto-convert new posts from RSS feeds
- **Content Parsing**: Intelligent extraction of main content, filtering ads/navigation

### 2. Content-to-Audio Conversion
- **Script Generation**: AI-powered conversion of prose into conversational dialogue
  - Multi-speaker dialogue creation (host + guest format)
  - Natural conversation flow with questions, answers, and transitions
  - Customizable tone and style (casual, professional, educational)
- **Voice Synthesis**: 
  - Multiple voice options (gender, age, accent variations)
  - Emotion and intonation control
  - Speaker consistency throughout episodes
- **Audio Enhancement**:
  - Background music library
  - Sound effects and transitions
  - Audio normalization and mastering

### 3. Audio-to-Video Generation
- **Visual Templates**: Pre-designed templates for different social platforms
- **Dynamic Visuals**:
  - Animated waveforms synced to audio
  - Speaker avatars or profile images
  - Text overlays for key points
  - Automatic subtitle generation
- **Branding Options**:
  - Custom logos and watermarks
  - Brand color schemes
  - Intro/outro animations

### 4. Publishing & Distribution
- **Direct Publishing**: One-click publishing to major platforms
  - TikTok, Instagram Reels, YouTube Shorts
  - Spotify, Apple Podcasts (for audio-only)
  - LinkedIn, Twitter/X
- **Scheduling**: Queue and schedule posts for optimal engagement times
- **Multi-format Export**: 
  - Vertical video (9:16) for TikTok/Reels
  - Square video (1:1) for Instagram feed
  - Horizontal video (16:9) for YouTube
  - Audio-only formats (MP3, M4A)

### 5. Analytics & Optimization
- **Performance Tracking**: Cross-platform analytics dashboard
- **A/B Testing**: Test different voices, scripts, or visuals
- **Content Recommendations**: AI suggestions for improving engagement
- **Audience Insights**: Demographics and engagement patterns

## Technical Architecture

### Backend Services
- **Content Processing Service**: Handles ingestion and parsing
- **Script Generation Service**: LLM-based dialogue creation
- **Audio Generation Service**: TTS synthesis using VibeVoice
- **Video Rendering Service**: Combines audio with visuals
- **Distribution Service**: Platform API integrations

### Infrastructure
- **Modal**: Serverless compute for AI workloads
- **Storage**: Cloud storage for media assets
- **CDN**: Global content delivery for generated media
- **Queue System**: Asynchronous job processing

## User Workflows

### Basic Workflow
1. User pastes blog URL or uploads document
2. System generates conversational script
3. User reviews/edits script and selects voices
4. System generates audio podcast
5. User adds video template and branding
6. System renders final video
7. User publishes to selected platforms

### Automated Workflow
1. User connects RSS feed or CMS
2. System monitors for new content
3. Automatic conversion using preset preferences
4. Auto-publishing based on schedule
5. Performance reports sent weekly

## Success Metrics
- **Conversion Rate**: % of content successfully converted to podcasts
- **Publishing Rate**: % of generated content published
- **Engagement Rate**: Average views/listens per generated podcast
- **User Retention**: Monthly active users and churn rate
- **Time Saved**: Average time saved vs. manual podcast creation

## MVP Scope
1. Single URL/file import
2. Basic two-speaker dialogue generation
3. VibeVoice TTS integration
4. Simple waveform video generation
5. Manual download of audio/video files
6. Basic script editing interface

## Future Enhancements
- Live content monitoring and auto-conversion
- Custom voice cloning
- Multi-language support
- Collaborative editing features
- Podcast series management
- Monetization tools (sponsorship insertion)
- API for third-party integrations

## Installation

```bash
# Install dependencies
pip3 install -r requirements.txt

# Set up Modal
python3 setup_modal.py

# Run the application
python3 -m modal run vibevoice_inference.py
```

## Usage

```bash
# Deploy to Modal cloud
python3 -m modal deploy vibevoice_inference.py

# Test locally
python3 vibeboice_test.py
```

## Contributing

We welcome contributions! Please see our contributing guidelines for more details.

## License

This project is licensed under the MIT License - see the LICENSE file for details.