import * as React from 'react';
import { ScrollTrigger } from 'react-gsap';
import { useStarsStore } from './states/starsStore';

export default function Section5() {
  const setProgress = useStarsStore((state) => state.setProgress);
  const setShowConstellations = useStarsStore((state) => state.setShowConstellations);

  return (
    <>
      <div id='section5' className='w-full h-[800vh] flex flex-col items-center relative z-10'>
        <ScrollTrigger
          start='top top'
          end='bottom bottom'
          id='section5scroll'
          /* markers={{ fontSize: '12px', startColor: 'white', endColor: 'white' }} */
          trigger={'#section5'}
          scrub
          onUpdate={(self) => {
            setProgress(self.progress);
            if (self.progress && self.progress < 1) {
              setShowConstellations(true);
            } else {
              setShowConstellations(false);
            }
          }}
        ></ScrollTrigger>
      </div>
    </>
  );
}
