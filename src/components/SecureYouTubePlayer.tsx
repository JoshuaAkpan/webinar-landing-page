"use client";
import React from "react";

interface SecureYouTubePlayerProps {
  videoUrl: string;
}

const SecureYouTubePlayer: React.FC<SecureYouTubePlayerProps> = ({
  videoUrl,
}) => {
  return (
    <div
      className="youtube-container"
      onContextMenu={(e) => e.preventDefault()} // Disables right-click context menu
    >
      <iframe
        width="100%"
        height="500px"
        src={`${videoUrl}?controls=1&modestbranding=1&rel=0&disablekb=1`}
        title="YouTube Video Player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default SecureYouTubePlayer;
