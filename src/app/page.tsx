import CountdownTimer from "../components/CountdownTimer";
// import VideoPlayer from "../components/VideoPlayer";
import SecureYouTubePlayer from "../components/SecureYouTubePlayer";

export const metadata = {
  title: "Webinar Event",
  description: "Join our upcoming webinar.",
  openGraph: {
    title: "Webinar Event",
    description: "Don’t miss our upcoming webinar!",
    url: "https://example.com/webinar",
    siteName: "Webinar Platform",
    images: [
      {
        url: "https://example.com/image.jpg",
        width: 800,
        height: 600,
        alt: "Webinar Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webinar Event",
    description: "Join our upcoming webinar!",
    images: ["https://example.com/image.jpg"],
  },
};

export default function Home() {
  const eventTime = "2024-12-31T23:59:59"; // Set the event date and time

  return (
    <div className="flex flex-col items-center justify-center">
      <header className="w-full">
        <div className="bg-black h-[100px]"></div>

        <div
          className="bg-blue-500 border-t border-b border-white h-fit pt-4 text-white p-5 "
          style={{
            borderTopWidth: "4px",
            borderBottomWidth: "4px",
            borderStyle: "dashed",
          }}
        >
          <div className="flex items-start justify-between max-w-[1050px] m-auto container">
            <div>
              <CountdownTimer eventTime={eventTime} />
            </div>

            <div className="text-center text-sm md:text-base">
              Day 5 Will Expire Soon... <br />
              Get Your &quot;All Access Pass&quot; Now
            </div>
            <button className="bg-green-500 w-[80px] md:w-[100px] h-20 hover:bg-green-600 rounded-md px-5">
              Join Now!
            </button>
          </div>
        </div>
      </header>

      <main className="flex flex-col items-center mt-10 px-4 text-center">
        <h1 className="text-3xl font-bold capitalize">
          Welcome to day 5 of the recruiting challenge
        </h1>
        <p className="text-lg  mb-8">
          All strategies shared today will be in the video below
        </p>

        <div className="w-full">
          {/* <VideoPlayer src="https://your-cdn-url.com/video.mp4" /> */}
          <SecureYouTubePlayer videoUrl="https://www.youtube.com/embed/jPxnJ-VJAAk?si=w7rpiRyEVk1fe0f4" />
        </div>

        <div className="text-white flex flex-col items-center gap-2  my-10">
          <button className="bg-green-500 capitalize w-fit p-2 rounded-md hover:bg-green-600">
            get the recruiting challenge all access pass now
          </button>

          <button className="bg-red-500 capitalize w-fit p-2 rounded-md hover:bg-red-600">
            join the 30 day recruiting run now
          </button>
        </div>
      </main>
    </div>
  );
}
