'use static'

import { useRef, useEffect } from 'react'
import ReactPlayer from 'react-player/lazy'

export default function Video({ video, poster, ...props }) {
  const ref = useRef()
  const scrollSectionRef = useRef()
  const playbackConst = 500
  let player
  function onLoadedVideo() {
    const duration = ref?.current.getDuration()
    player = ref?.current.getInternalPlayer()
    const scrollSection = scrollSectionRef.current
    if (ref?.current) {
      scrollSection.style.height = duration * playbackConst + 'px'
    }
  }
  useEffect(() => {
    function scrollPlay() {
      if (player) {
        const frameNumber = window.scrollY / playbackConst
        player.currentTime = frameNumber
      }
      window.requestAnimationFrame(scrollPlay)
    }
    window.requestAnimationFrame(scrollPlay)
  }, [player])
  return (
    <div className='relative z-10'>
      <div className='fixed left-0 top-0'>
        <ReactPlayer
          {...props}
          ref={ref}
          config={{ file: { attributes: { poster: poster } } }}
          url={video}
          onReady={onLoadedVideo}
          loop={props.loop || false}
          muted={props.muted || false}
        />
      </div>
      <div ref={scrollSectionRef} id='scrollSection' className='block'></div>
    </div>
  )
}

/* import { useEffect, useRef, useState } from "react";

export default function Video({ ...props }) {
  const videoRef = useRef(null);
  const scrollSectionRef = useRef(null);
  const [hasLoaded, setLoaded] = useState(false);
  const playbackConst = 500;

  function onLoadedVideo() {
    const { duration } = videoRef?.current;    
    const scrollSection = scrollSectionRef.current;
    if (videoRef?.current) {
      scrollSection.style.height =
        ((Math.floor(duration) * playbackConst) + playbackConst*2) + "px";
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
        <video ref={videoRef} id="v0" preload="preload" onLoadedMetadata={onLoadedVideo} playsInline muted={true}>
          <source
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
            src="tc_main_m.mp4" 
          />
        </video>
      </div>
        <div ref={scrollSectionRef} id="scrollSection" className="block"></div>
    </div>
  );
} */
