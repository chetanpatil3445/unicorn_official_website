import React, { useState, useEffect, useRef } from 'react'
import Header from './HomePage/Header'
import Footer from './HomePage/Footer'
import video1 from '../../assets/image/video/video1.mp4'
import video2 from '../../assets/image/video/video2.mp4'
import video3 from '../../assets/image/video/video3.mp4'

const videos = [
  {
    id: 1,
    title: 'Unicorn Software – Quick Overview',
    desc: 'A short introduction video to understand Unicorn Software’s interface, features, and basic navigation.',
    video: video1,
  },
  {
    id: 2,
    title: 'Jewellery Store Display & Management Guide',
    desc: 'Learn how to professionally manage your jewellery showroom display, product arrangement, and customer-ready presentation.',
    video: video2,
  },
  {
    id: 3,
    title: 'Easy GST Billing Tutorial',
    desc: 'A simple guide to help you generate GST-compliant bills quickly and accurately for your jewellery business.',
    video: video3,
  },
]

const Videos = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [playingVideo, setPlayingVideo] = useState(null)
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [videoThumbnails, setVideoThumbnails] = useState({})
  const videoRefs = useRef({})
  const modalVideoRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    // Auto play video when modal opens
    if (selectedVideo && modalVideoRef.current) {
      modalVideoRef.current.play()
    }
  }, [selectedVideo])

  const handlePlay = (videoId) => {
    // Pause all other videos
    Object.keys(videoRefs.current).forEach((id) => {
      if (id !== videoId.toString() && videoRefs.current[id]) {
        videoRefs.current[id].pause()
      }
    })
    setPlayingVideo(videoId)
  }

  const handlePause = () => {
    setPlayingVideo(null)
  }

  const handleVideoClick = (videoId) => {
    const video = videoRefs.current[videoId]
    if (video) {
      if (video.paused) {
        video.play()
      } else {
        video.pause()
      }
    }
  }

  const handleWatchClick = (video) => {
    // Pause all videos in grid
    Object.keys(videoRefs.current).forEach((id) => {
      if (videoRefs.current[id]) {
        videoRefs.current[id].pause()
      }
    })
    setPlayingVideo(null)
    setSelectedVideo(video)
  }

  const handleCloseModal = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause()
    }
    setSelectedVideo(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#fff8ef] to-[#fff8ef]">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-20">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#1c918a]/10 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#0f2d55]/5 blur-3xl" />
        
        <div className="relative mx-auto max-w-4xl text-center">
        <div className={`transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100 animate-pulse' : '-translate-y-4 opacity-0'}`}>
          <span className="inline-flex items-center gap-3 rounded-full border border-[#1c918a]/40 bg-white px-7 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.5em] text-[#1c918a] shadow-[0_10px_28px_rgba(15,45,85,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e6f7f5] hover:shadow-[0_14px_34px_rgba(15,45,85,0.22)]">
              <span className="h-2 w-2 rounded-full bg-[#1c918a] shadow-[0_0_0_4px_rgba(28,145,138,0.18)]" />
              <span>Video Tutorials</span>
            </span>
          </div>
          
          <h1 className={`mt-12 text-4xl font-bold text-[#0f2d55] transition-all duration-700 delay-150 lg:text-5xl ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
            Learn How to Use{' '}
            <span className="bg-gradient-to-r from-[#1c918a] to-[#0f2d55] bg-clip-text text-transparent">
              Our Software
            </span> 
          </h1>
          
          <p className={`mx-auto mt-4 max-w-xl text-slate-600 transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
            Watch step-by-step tutorials to master every feature of our jewellery software.
          </p>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {videos.map((video, idx) => {
            const isPlaying = playingVideo === video.id
            return (
              <div
                key={video.id}
                className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                } ${isPlaying ? 'ring-2 ring-[#1c918a] ring-offset-2' : ''}`}
                style={{ transitionDelay: `${400 + idx * 100}ms` }}
              >
                {/* Video Player Container */}
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-[#0f2d55] to-[#1c918a]">
                  {/* Video Player */}
                  <video
                    ref={(el) => (videoRefs.current[video.id] = el)}
                    src={video.video}
                    className="h-full w-full object-cover"
                    controls={isPlaying}
                    onPlay={() => handlePlay(video.id)}
                    onPause={handlePause}
                    onClick={() => handleVideoClick(video.id)}
                    playsInline
                    preload="metadata"
                  >
                    Your browser does not support the video tag.
                  </video>

                  {/* Custom Play Button Overlay (when not playing) */}
                  {!isPlaying && (
                    <div
                      onClick={() => handleVideoClick(video.id)}
                      className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 via-black/20 to-transparent cursor-pointer group/play"
                    >
                      <div className="flex flex-col items-center gap-3">
                        <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white/95 backdrop-blur-sm shadow-2xl transition-all duration-300 group-hover/play:scale-110 group-hover/play:bg-[#1c918a]">
                          <svg 
                            className="ml-1 h-7 w-7 sm:h-8 sm:w-8 text-[#1c918a] transition-colors group-hover/play:text-white" 
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                        <span className="text-white text-xs sm:text-sm font-semibold bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                          Click to Play
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1c918a] px-3 py-1 text-xs font-semibold text-white shadow-lg">
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      Tutorial
                    </span>
                  </div>

                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-white/20 pointer-events-none" />
                </div>

                {/* Content Section */}
                <div className="p-5 sm:p-6 bg-gradient-to-b from-white to-slate-50/50">
                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#0f2d55] transition-colors duration-300 group-hover:text-[#1c918a] line-clamp-2">
                    {video.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                    {video.desc}
                  </p>

                  {/* Bottom Info Bar */}
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
                      <svg className="h-4 w-4 text-[#1c918a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span>Video Guide</span>
                    </div>
                    <button
                      onClick={() => handleWatchClick(video)}
                      className="flex items-center gap-1 text-xs font-medium text-[#1c918a] hover:text-[#0f2d55] group-hover:gap-2 transition-all duration-300 cursor-pointer"
                    >
                      <span>Watch</span>
                      <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0f2d55] via-[#1c918a] to-[#0f2d55] rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10" />
              </div>
            )
          })}
        </div>
      </section>

      {/* Video Modal/Popup */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={handleCloseModal}
          />
          
          {/* Modal Content */}
          <div className="relative w-full max-w-5xl animate-modalSlide">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute -top-12 right-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-110"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video Container */}
            <div className="relative overflow-hidden rounded-2xl bg-black shadow-2xl">
              {/* Video Player */}
              <div className="relative aspect-video">
                <video
                  ref={modalVideoRef}
                  src={selectedVideo.video}
                  className="h-full w-full object-contain"
                  controls
                  autoPlay
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Video Info */}
              <div className="bg-gradient-to-br from-[#0f2d55] to-[#1c918a] p-6 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  {selectedVideo.title}
                </h3>
                <p className="text-sm sm:text-base text-white/80">
                  {selectedVideo.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Animation Styles */}
      <style>{`
        @keyframes modalSlide {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-modalSlide {
          animation: modalSlide 0.3s ease-out;
        }
      `}</style>

      <Footer />
    </div>
  )
}

export default Videos
