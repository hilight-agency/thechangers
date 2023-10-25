import * as React from 'react';
import { ScrollTrigger } from 'react-gsap';
import { useStarsStore } from './states/starsStore';

export default function Section5() {
  const setProgress = useStarsStore((state) => state.setProgress);

  return (
    <div id='section5' className='w-full h-[300vh] flex flex-col items-center relative z-40'>
      <ScrollTrigger
        start='top top'
        end='bottom top'
        id='section5scroll'
        markers={{ fontSize: '12px', startColor: 'white', endColor: 'white' }}
        trigger={'#section5'}
        scrub
        onUpdate={(self) => setProgress(self.progress)}
      ></ScrollTrigger>
    </div>
  );
}
