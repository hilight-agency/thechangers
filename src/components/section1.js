import * as React from 'react';
import Lottie from 'lottie-react';
import ScrollDownLottie from '../lottie/white_stripes_down.json';
import Timer from './timer';
import Sequence from './sequence/ImageSequence';
import { Controller, Scene } from 'react-scrollmagic';

export default function Section1({ videoref }) {
  const [progressstate, setProgress] = React.useState(0.0);
  const sectionRef = React.useRef();
  const ref = React.useRef();
  return (
    <>
      <section
        id="section-1"
        className="w-full h-screen flex flex-col justify-end items-center pb-3 fixed z-30"
      >
        <div
          className="flex items-center flex-col gap-1"
          style={{ opacity: 1.2 - progressstate * 5 }}
        >
          <Timer deadline={new Date(Date.now() + 43 * 24 * 60 * 60 * 1000).toString()} />
          <Lottie animationData={ScrollDownLottie} loop autoPlay className="w-20" />
        </div>
      </section>
      <section id="section-2" className="w-full h-[200vh] relative z-20" ref={sectionRef}>
        <Controller>
          <Scene duration="200%" triggerHook="onLeave" pin>
            {(progress) => {
              setProgress(progress);
              if (videoref.current)
                videoref.current.style.display = progress > 0.5 ? 'none' : 'block';

              console.log(videoref.current?.style.opacity);

              return (
                <div
                  className={'h-screen relative'}
                  style={{
                    opacity: progress < 0.87 ? progress * 20 : 5 + 1 - (progress + 0.22) / 0.2,
                  }}
                >
                  <Sequence ref={ref} progress={progress} />
                </div>
              );
            }}
          </Scene>
        </Controller>
      </section>
    </>
  );
}
