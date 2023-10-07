'use client'

import { useEffect, useRef, useState } from "react";

export default function Video({ ...props }) {
  const videoRef = useRef(null);
  const scrollSectionRef = useRef(null);
  const [hasLoaded, setLoaded] = useState(false);
  const playbackConst = 1000;

  function onLoadedVideo() {
    const { duration } = videoRef?.current;    
    const scrollSection = scrollSectionRef.current;
    if (videoRef?.current) {
      scrollSection.style.height =
        Math.floor(duration) * playbackConst + "px";
    }
  }

  useEffect(() => {
    setLoaded(true);
    function scrollPlay() {
      if (videoRef.current) {
        const frameNumber = window.scrollY / playbackConst;
        videoRef.current.currentTime = frameNumber;
      }
      window.requestAnimationFrame(scrollPlay);
    }
    window.requestAnimationFrame(scrollPlay);
  }, []);

  return (
    <div>
      <div className="video-container">
        <video ref={videoRef} id="v0" preload="preload" onLoadedMetadata={onLoadedVideo}>
          <source
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
            src="tc_main_m.mp4" 
          />
        </video>
      </div>
        <div ref={scrollSectionRef} id="scrollSection" className="block"></div>
    </div>
  );
}