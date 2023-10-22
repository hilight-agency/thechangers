import * as React from 'react';
import { ScrollTrigger, Timeline, Tween } from 'react-gsap';
import { ExpoScaleEase } from 'gsap/EasePack';
import { gsap } from 'gsap';
gsap.registerPlugin(ExpoScaleEase);
export default function Section2() {
  return (
    <React.Fragment>
      <div id='section2' className='w-full h-screen flex flex-col items-center'>
        <ScrollTrigger
          start='center bottom'
          end='bottom center'
          scrub
          id='section2scroll'
          pin={'#section2'}
          pinSpacing={false}
          trigger={'#section2'}
          endTrigger={'#section2trigger'}
        >
          <Timeline
            playState='pause'
            target={
              <div
                className={`uppercase text-5xl font-bold tracking-[3.552px] opacity-0 text-center`}
              >
                Place where ideas transform Tomorrow
              </div>
            }
          >
            <Tween
              from={{ opacity: 0, scaleX: 0.0001, scaleY: 0.0001, y: '-50%' }}
              to={{ opacity: 1, scaleX: 0.8, scaleY: 0.8 }}
              duration={20}
            />
            <Tween to={{ scaleX: 0.9, scaleY: 0.9 }} duration={30} />
            <Tween
              to={{ scaleX: 200, scaleY: 200, color: 'black' }}
              duration={30}
              ease='expoScale(0.5,100,power1.in)'
            />
            <Tween to={{ scaleX: 1, scaleY: 1 }} duration={0} />
          </Timeline>
        </ScrollTrigger>
      </div>
      <div id='section2trigger' className='w-full h-[200vh]'></div>
    </React.Fragment>
  );
}
