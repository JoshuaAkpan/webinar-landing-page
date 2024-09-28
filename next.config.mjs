/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/path-to-your-video-file.mp4", // Replace with your video file path
        headers: [
          {
            key: "Content-Disposition",
            value: "inline", // Ensures the video is displayed in the browser, not downloaded
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff", // Prevents browsers from MIME type sniffing
          },
        ],
      },
    ];
  },
};

export default nextConfig;
