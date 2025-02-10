export function Video(): HTMLElement {
  // Create video container
  const videoContainer = document.createElement("div");
  videoContainer.className = "video-container";

  // Create video element
  const video = document.createElement("video");
  video.src = "/you_and_me.mov";
  video.autoplay = true;
  video.loop = true;
  video.muted = true;
  video.playsInline = true;
  video.className = "main-video";

  // Add video controls for better UX
  video.controls = true;

  // Add loading state
  const loadingText = document.createElement("div");
  loadingText.className = "loading-text";
  loadingText.textContent = "Loading video...";
  videoContainer.appendChild(loadingText);

  // Handle video load
  video.addEventListener('loadeddata', () => {
    loadingText.remove();
  });

  // Handle video error
  video.addEventListener('error', () => {
    loadingText.textContent = "Failed to load video";
    loadingText.style.color = "#ff0000";
  });

  // Fullscreen functionality
  video.addEventListener("click", () => {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if ((video as any).webkitRequestFullscreen) {
      (video as any).webkitRequestFullscreen();
    } else if ((video as any).msRequestFullscreen) {
      (video as any).msRequestFullscreen();
    }
  });

  // Add video to container
  videoContainer.appendChild(video);

  // Add styles
  const style = document.createElement('style');
  style.textContent = `
    .video-container {
      width: 100%;
      max-width: 300px; /* Constrain width for vertical layout */
      margin: 10px 0; /* Reduced margin for tighter spacing */
      position: relative;
      z-index: 2;
      aspect-ratio: 9/16; /* Vertical aspect ratio (9:16) */
    }

    .main-video {
      width: 100%;
      height: 100%; /* Fill the container */
      border: 3px solid rgba(255, 255, 255, 0.2);
      border-radius: 10px;
      box-sizing: border-box;
      object-fit: cover; /* Fill the container without letterboxing */
      background: #000;
      transition: all 0.3s ease;
    }

    .main-video:hover {
      border-color: rgba(255, 255, 255, 0.5);
      transform: scale(1.02);
    }

    .loading-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 1.2rem;
      z-index: 1;
    }

    @media (max-width: 768px) {
      .video-container {
        max-width: 280px; /* Slightly smaller on tablets */
      }

      .main-video {
        border-width: 2px;
      }
    }

    @media (max-width: 480px) {
      .video-container {
        max-width: 250px; /* Smaller on mobile */
      }

      .loading-text {
        font-size: 1rem;
      }
    }
  `;
  document.head.appendChild(style);

  return videoContainer;
}