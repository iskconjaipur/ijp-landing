"use client";

import { Architects_Daughter, Dancing_Script } from "next/font/google";
import { recentEvents } from "./recentEventsData";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const architects = Architects_Daughter({
  subsets: ["latin"],
  weight: "400",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
});

const HomeRecentEvents = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-800 pb-16 pt-8">
      <div className={`pt-16 pb-12 text-center ${architects.className}`}>
        <h1 className="text-6xl font-[400] text-[#d17a29] mb-4">Recent Events</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d17a29] to-transparent mx-auto"></div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-screen-2xl m-auto gap-8 px-4">
          {recentEvents.map((event, i) => (
            <EventVideoCard key={i} index={i} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

const EventVideoCard = ({ index, event }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showYoutubeEmbed, setShowYoutubeEmbed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const videoRef = useRef(null);
  const modalVideoRef = useRef(null);
  const [youtubeEmbedUrl, setYoutubeEmbedUrl] = useState("");

  // Convert YouTube URL to embed URL
  useEffect(() => {
    if (event.videoType === "youtube" && event.videoSource) {
      const videoId = extractYouTubeId(event.videoSource);
      if (videoId) {
        setYoutubeEmbedUrl(`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&mute=1`);
      }
    }
  }, [event.videoSource, event.videoType]);

  const extractYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (event.videoType === "local" && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Handle autoplay restrictions
      });
      setIsPlaying(true);
    } else if (event.videoType === "youtube") {
      setShowYoutubeEmbed(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (event.videoType === "local" && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    } else if (event.videoType === "youtube") {
      setShowYoutubeEmbed(false);
    }
  };

  const handleClick = () => {
    if (event.videoType === "youtube" && event.videoSource) {
      window.open(event.videoSource, "_blank");
    } else if (event.videoType === "local") {
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.currentTime = 0;
    }
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && showModal) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [showModal]);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: inView ? index * 0.15 : 0 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          onClick={handleClick}
          className={`cursor-pointer group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
            event.videoType === "youtube" ? "cursor-pointer" : ""
          }`}
        >
        {/* Video Container */}
        <div className="relative h-[280px] overflow-hidden">
          {event.videoType === "local" ? (
            <>
              {/* Local Video */}
              <video
                ref={videoRef}
                src={event.videoSource}
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
                preload="metadata"
              />
              {/* Play Overlay for Local Video */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300">
                  <motion.div
                    className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: isHovered ? 1.1 : 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      className="w-8 h-8 text-[#d17a29] ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </motion.div>
                </div>
              )}
            </>
          ) : (
            <>
              {/* YouTube Video - Show embed on hover, thumbnail by default */}
              {showYoutubeEmbed && youtubeEmbedUrl ? (
                <iframe
                  src={youtubeEmbedUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={event.eventName}
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
                  <img
                    src={event.thumbnail || "/Home/commhall.jpg"}
                    alt={event.eventName}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 group-hover:bg-black/20">
                    <motion.div
                      className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      animate={{ scale: isHovered ? 1.1 : 1 }}
                    >
                      <svg
                        className="w-8 h-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              )}
            </>
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#d17a29]/20 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#d17a29]/20 to-transparent pointer-events-none"></div>
        </div>

        {/* Content Section */}
        <div className="p-6 relative">
          {/* Event Name */}
          <h2 className={`text-center text-2xl font-bold text-[#d17a29] ${dancing.className} transition-colors duration-300 group-hover:text-[#b8651f]`}>
            {event.eventName}
          </h2>

          {/* Decorative Bottom Border */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d17a29] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Shine Effect on Hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
        </div>
      </div>
    </motion.div>

    {/* Video Modal for Local Videos */}
    {showModal && event.videoType === "local" && (
      <VideoModal
        videoSource={event.videoSource}
        eventName={event.eventName}
        onClose={closeModal}
        videoRef={modalVideoRef}
      />
    )}
    </>
  );
};

// Video Modal Component
const VideoModal = ({ videoSource, eventName, onClose, videoRef }) => {
  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
    // Auto-play video when modal opens
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Handle autoplay restrictions
      });
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [videoRef]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative w-full h-full max-w-7xl max-h-[90vh] mx-4 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300 backdrop-blur-sm"
          aria-label="Close video"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Video Container */}
        <div className="relative w-full h-full flex items-center justify-center">
          <video
            ref={videoRef}
            src={videoSource}
            className="w-full h-full max-h-[90vh] object-contain"
            controls
            autoPlay
            loop
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Event Name Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
          <h3 className={`text-white text-2xl font-bold text-center ${dancing.className}`}>
            {eventName}
          </h3>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HomeRecentEvents;

