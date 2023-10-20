import * as React from 'react';
import PreloaderVideo from '../components/preloadervideo';
import { Controller, Scene } from 'react-scrollmagic';
import Lottie from 'lottie-react';
import ScrollDownLottie from '../lottie/white_stripes_down.json';
import Timer from '../components/timer';
import Sequence from '../components/sequence/ImageSequence';
import { ScrollTrigger, Timeline, Tween } from 'react-gsap';

const IndexPage = () => {
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
                    <Sequence ref={seqref} progress={progress} />
                  </div>

                  <div className='w-full h-[200vh]'></div>
                  <section
                    id='section-1'
                    className='w-full h-screen flex flex-col justify-end items-center pb-3 fixed top-0 left-0 z-40'
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
          <div id='triggerstart' className='w-full h-100vh flex flex-col items-center'>
            <ScrollTrigger
              start='top center'
              end='bottom center'
              markers
              scrub
              pin='#triggerstart'
              trigger='#triggerstart'
            >
              <Timeline
                playState='pause'
                target={[
                  <div
                    key='0'
                    className={`uppercase text-5xl font-bold tracking-[3.552px] opacity-0 text-center`}
                  >
                    Place where ideas transform Tomorrow0
                  </div>,
                  <div
                    key='1'
                    className={`uppercase text-5xl font-bold tracking-[3.552px] opacity-0 text-center`}
                  >
                    Place where ideas transform Tomorrow1
                  </div>,
                ]}
              >
                <Tween
                  from={{ opacity: 0, display: 'none', y: '100%' }}
                  to={{ opacity: 1, display: 'block', y: '-50%' }}
                  target={0}
                />
                <Tween
                  from={{ opacity: 1, display: 'block', y: '-50%' }}
                  to={{ opacity: 0, display: 'none', y: '-100%' }}
                  target={0}
                />
                <Tween
                  from={{ opacity: 0, display: 'none', y: '100%' }}
                  to={{ opacity: 1, display: 'block', y: '-50%' }}
                  target={1}
                />
                <Tween
                  from={{ opacity: 1, display: 'block', y: '-50%' }}
                  to={{ opacity: 0.5, display: 'none', y: '-100%' }}
                  target={1}
                />
              </Timeline>
            </ScrollTrigger>
          </div>

          <div id='triggerend' className='w-full h-[200vh]'></div>
        </div>
      </Controller>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
