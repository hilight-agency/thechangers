import * as React from 'react';
import Preloader from '../videos/preload.mp4';
import PreloaderPoster from '../images/tc_main_m.jpg';
const PreloaderVideo = React.forwardRef((props, ref) => {
  return (
    <video
      ref={ref}
      id="main-video"
      data-filename=""
      className="object-cover object-center align-middle left-0 top-0 w-full h-screen fixed z-10"
      poster={PreloaderPoster}
      playsInline
      autoPlay
      muted
      loop
      src={Preloader}
    ></video>
  );
});
export default PreloaderVideo;
