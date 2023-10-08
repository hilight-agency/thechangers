import ReactPlayer from 'react-player/lazy'

export default function Video ({ video, poster, ...props }) {
  return (
    <ReactPlayer {...props}
      config={{ file: { attributes: { poster: poster } } }}
      url={video}
      loop={props.loop || false}
      muted={props.muted || false}
    />
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