import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          videoRef.current.muted = true;
          await videoRef.current.play();
        } catch (error) {
          console.log("Video play error:", error);
          setVideoError(true);
        }
      }
    };

    playVideo();
  }, []);

  const handleVideoError = () => {
    console.error("Video failed to load");
    setVideoError(true);
  };

  return (
    <section className="relative w-full overflow-hidden bg-black">
      <motion.div
        className="w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="relative flex justify-center items-center w-full aspect-video md:aspect-[21/9]">
          {videoError ? (
            <div className="text-white text-center">Video loading failed</div>
          ) : (
            <video
              ref={videoRef}
              className="w-[500%] h-full object-contain rounded-[40px]"
              autoPlay
              loop
              playsInline
              muted
              onError={handleVideoError}
              controls
            >
              <source src="/OmPortfolio.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}

          {/* Subtle overlay to blend with surrounding sections */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-gray-900 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </section>
  );
};

export default VideoSection;