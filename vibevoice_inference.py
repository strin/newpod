from modal import Image, App, web_endpoint
from fastapi import FastAPI, HTTPException, Response
from pydantic import BaseModel
import os
import tempfile
from pathlib import Path

# Define the Modal app
app = App("vibevoice-inference")

# Custom Docker image for VibeVoice
image = (
    Image.from_registry("nvcr.io/nvidia/pytorch:24.07-py3")
    .apt_install("ffmpeg", "git")
    .pip_install(
        "huggingface-hub==0.25.1",  # Install this first
        "flash-attn==2.6.3",
        "fastapi==0.115.0",
        "uvicorn==0.30.6",
        "pydantic==2.9.2",
        "requests==2.32.3",
    )
    .run_commands(
        "git clone https://github.com/microsoft/VibeVoice.git /app/vibevoice",
        "cd /app/vibevoice && pip install -e .",
    )
)

# FastAPI app for inference
fastapi_app = FastAPI()


class InferenceRequest(BaseModel):
    transcript: str  # e.g., "Alice: Welcome to newpod! Bob: Today we discuss..."
    speakers: list[str]  # e.g., ["Alice", "Bob"]
    model_path: str = "microsoft/VibeVoice-1.5B"  # Default model


# Mock run_inference (adapt from VibeVoice's demo/inference_from_file.py)
def run_inference(model_path: str, txt_path: str, speaker_names: str) -> str:
    # This is a placeholder implementation
    # In a real implementation, this would:
    # 1. Load the VibeVoice model
    # 2. Process the transcript
    # 3. Generate audio for each speaker
    # 4. Combine and return the audio
    
    # For now, create a mock audio file
    output_path = "/tmp/output.mp3"
    
    # Create a simple mock audio file (empty file for testing)
    with open(output_path, "wb") as f:
        # Write a minimal MP3 header for testing
        f.write(b"ID3")  # Simple ID3 tag
        f.write(b"\x00" * 1024)  # Mock audio data
    
    print(f"Mock audio generated for speakers: {speaker_names}")
    print(f"Transcript: {txt_path}")
    print(f"Model: {model_path}")
    
    return output_path


@app.function(
    image=image,
    gpu="A100",  # Use A100 for VibeVoice; can switch to T4 for cost savings
    timeout=1800,  # 30 min for large transcripts
    scaledown_window=300,  # Scale to zero after 5 min idle
)
@web_endpoint(method="POST")
async def generate_audio(request: InferenceRequest):
    try:
        # Import inside function to ensure it runs in container context
        from huggingface_hub import snapshot_download

        # Create temp file for transcript
        with tempfile.NamedTemporaryFile(
            delete=False, suffix=".txt", dir="/tmp"
        ) as tmp_txt:
            tmp_txt.write(request.transcript.encode())
            txt_path = tmp_txt.name

        # Download entire model repository (Modal caches this)
        model_path = snapshot_download(
            repo_id=request.model_path,
            cache_dir="/tmp/models"
        )

        # Run inference
        output_audio_path = run_inference(
            model_path=model_path,
            txt_path=txt_path,
            speaker_names=" ".join(request.speakers),
        )

        # Read audio file
        with open(output_audio_path, "rb") as audio_file:
            audio_bytes = audio_file.read()

        # Clean up
        os.unlink(txt_path)
        if os.path.exists(output_audio_path):
            os.unlink(output_audio_path)

        # Return audio file
        return Response(
            content=audio_bytes,
            media_type="audio/mp3",
            headers={"Content-Disposition": "attachment; filename=output.mp3"},
        )

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.local_entrypoint()
async def main():
    # Local test: Run a sample inference
    sample_request = {
        "transcript": "Alice: Welcome to newpod! Bob: Today we discuss AI.",
        "speakers": ["Alice", "Bob"],
    }
    response = await generate_audio.local(InferenceRequest(**sample_request))
    with open("output.mp3", "wb") as f:
        f.write(response.body)
    print("Sample audio saved as output.mp3")
