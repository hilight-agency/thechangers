'use static'

import { useRef, useEffect, useCallback, useState } from 'react'
import ReactPlayer from 'react-player/file'

export default function Video({ shortUrl, poster }) {
  const ref = useRef()
  const scrollSectionRef = useRef()
  const playbackConst = 500
  const [player, setPlayer] = useState()
  const debouncedScrollPlay = useCallback(() => {
    const frameNumber = window.pageYOffset / playbackConst
    if (player) {
      player.currentTime = frameNumber
    }
  }, [player])
  function onLoadedVideo() {
    const tempref = ref?.current.getInternalPlayer()
    if (tempref) {
      const { duration, style } = tempref
      style.width = '100vw'
      style.height = '100vh'
      style.objectFit = 'cover'
      const scrollSection = scrollSectionRef.current
      scrollSection.style.height =
        Math.floor(duration) * playbackConst + playbackConst + tempref.getBoundingClientRect().height + 'px'
      setPlayer(() => tempref)
    }
  }
  useEffect(() => {
    // Attach the debouncedScrollPlay function to the scroll event
    window.addEventListener('scroll', debouncedScrollPlay)
    return () => {
      // Cleanup: Remove the event listener on unmount
      window.removeEventListener('scroll', debouncedScrollPlay)
    }
  }, [debouncedScrollPlay])

  return (
    <div className='relative z-10'>
      <div className='fixed left-0 top-0 w-full'>
        <ReactPlayer
          ref={ref}
          config={{ file: { attributes: { poster: poster } } }}
          width={'100vw'}
          height={'100vh'}
          url={shortUrl}
          onReady={onLoadedVideo}
          playing={false}
          playsinline
          loop={true}
          muted={true}
          alt={``}
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
