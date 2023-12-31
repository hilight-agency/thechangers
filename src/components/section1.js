import * as React from 'react';
import { ScrollTrigger } from 'react-gsap';
import PreloaderVideo from './preloadervideo';
import Lottie from 'lottie-react';
import ScrollDownLottie from '../lottie/white_stripes_down.json';
import Timer from './timer';
import Sequence from './sequence/ImageSequence';
import { MainSqArray } from './sequence/ImageArray';
import { useSequenceProgressStore } from './states/sequencesStore';

export default function Section1() {
  const mainsqArr = MainSqArray();
  const ref = React.useRef();
  const seqref = React.useRef();
  const progress = useSequenceProgressStore((state) => state.mainSq);
  const setProgress = useSequenceProgressStore((state) => state.setMainSq);
  return (
    <React.Fragment>
      <PreloaderVideo ref={ref} />
      <div
        className={`w-full h-screen fixed top-0 left-0`}
        style={{ opacity: progress < 0.85 ? 1 : 5 - progress / 0.2 }}
      >
        {progress < 1 && <Sequence ref={seqref} progress={progress} array={mainsqArr} />}
      </div>
      <div id='section1trigger' className='w-full h-[200vh]'></div>
      <section
        id='section-1'
        className={`w-full h-screen flex flex-col justify-end items-center pb-15 fixed top-0 left-0 z-40 ${
          progress >= 1 ? ` hidden` : ` block`
        }`}
      >
        <div className='flex items-center flex-col gap-1' style={{ opacity: 1.2 - progress * 5 }}>
          <Timer deadline={new Date('2023-11-27T05:00:00Z')} />
          <Lottie animationData={ScrollDownLottie} loop autoPlay className='w-20' />
        </div>
      </section>
      <ScrollTrigger
        start='center bottom'
        end='bottom center'
        scrub
        id='sectiontestscroll'
        trigger={'#section1trigger'}
        pinSpacing={false}
        onUpdate={(self) => {
          if (ref.current) ref.current.style.display = self.progress > 0.001 ? 'none' : 'block';
          setProgress(self.progress);
        }}
      ></ScrollTrigger>
    </React.Fragment>
  );
}
