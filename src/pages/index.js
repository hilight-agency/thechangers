import * as React from 'react';
import PreloaderVideo from '../components/preloadervideo';
import { Controller, Scene } from 'react-scrollmagic';
import Lottie from 'lottie-react';
import ScrollDownLottie from '../lottie/white_stripes_down.json';
import Timer from '../components/timer';
import Section2 from '../components/section2';
import Section3 from '../components/section3';
import Sequence from '../components/sequence/ImageSequence';
import { MainSqArray } from '../components/sequence/ImageArray';

const IndexPage = () => {
  const mainsqArr = MainSqArray();
  const ref = React.useRef();
  const seqref = React.useRef();
  return (
    <>
      <Controller>
        <div id='wrapper' className='w-full relative z-20 text-white'>
          <PreloaderVideo ref={ref} />
          <Scene duration='100%' triggerHook='onLeave'>
            {(progress) => {
              if (ref.current) ref.current.style.display = progress > 0 ? 'none' : 'block';
              return (
                <>
                  <div
                    className={`w-full h-screen fixed top-0 left-0 ${
                      progress > 0 ? ` block` : ` hidden`
                    }`}
                    style={{ opacity: progress < 0.85 ? 1 : 5 + 1 - (progress + 0.2) / 0.2 }}
                  >
                    <Sequence ref={seqref} progress={progress} array={mainsqArr} />
                  </div>

                  <div className='w-full h-[200vh]'></div>
                  <section
                    id='section-1'
                    className={`w-full h-screen flex flex-col justify-end items-center pb-3 fixed top-0 left-0 z-40 ${
                      progress >= 1 ? ` hidden` : ` block`
                    }`}
                  >
                    <div
                      className='flex items-center flex-col gap-1'
                      style={{ opacity: 1.2 - progress * 5 }}
                    >
                      <Timer
                        deadline={new Date(Date.now() + 43 * 24 * 60 * 60 * 1000).toString()}
                      />
                      <Lottie animationData={ScrollDownLottie} loop autoPlay className='w-20' />
                    </div>
                  </section>
                </>
              );
            }}
          </Scene>
          <Section2 />
          <Section3 />
          <div className='h-screen'></div>
        </div>
      </Controller>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
