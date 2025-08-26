#!/usr/bin/env python3
"""Test the deployed VibeVoice API endpoint"""

import requests
import json

# The deployed API endpoint
API_ENDPOINT = "https://tim-8--vibevoice-inference-generate-audio.modal.run"

def test_api():
    # Test payload
    payload = {
        "transcript": "Alice: Welcome to newpod! Bob: Thanks for having me. Alice: Today we'll discuss AI podcasts.",
        "speakers": ["Alice", "Bob"],
        "model_path": "microsoft/VibeVoice-1.5B"
    }
    
    print(f"🔗 Testing API endpoint: {API_ENDPOINT}")
    print(f"📝 Payload: {json.dumps(payload, indent=2)}")
    
    try:
        # Make POST request
        response = requests.post(API_ENDPOINT, json=payload)
        
        if response.status_code == 200:
            print("✅ API call successful!")
            
            # Save the audio file
            with open("api_test_output.mp3", "wb") as f:
                f.write(response.content)
            
            print(f"💾 Audio saved as api_test_output.mp3")
            print(f"📊 File size: {len(response.content) / 1024:.1f} KB")
        else:
            print(f"❌ API call failed with status {response.status_code}")
            print(f"Error: {response.text}")
            
    except Exception as e:
        print(f"❌ Error calling API: {e}")

if __name__ == "__main__":
    test_api()