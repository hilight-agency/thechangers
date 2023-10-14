import * as React from "react"
import Lottie from "lottie-react";
import Preloader from "../videos/preload.mp4"
import ScrollDownLottie from "../lottie/animation_lnqazmry.json"
import PreloaderPoster from "../images/tc_main_m.jpg"
const IndexPage = () => {
  const videoref=React.useRef()
  return (
<>
      <video 
      ref={videoref}
        id="main-video" 
        data-filename=""
        className="object-cover object-center align-middle left-0 top-0 w-full h-screen fixed z-10" 
        poster={PreloaderPoster}
        playsInline 
        autoPlay 
        muted
        loop 
        src={Preloader}>
      </video>
      <div id="wrapper" className="w-full relative z-20">
        <section id="section-1" className="wfull h-screen flex flex-col justify-end items-center pb-3">
          <div className="flex items-center flex-col text-white gap-1">
            <Lottie animationData={ScrollDownLottie} 
              loop autoPlay
              className="w-10"
            />
            Scroll down
          </div>
        </section>
      </div>
      {/* </div> */}
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
