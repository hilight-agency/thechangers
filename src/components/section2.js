import * as React from 'react';
import { ScrollTrigger, Timeline, Tween } from 'react-gsap';

export default function Section2() {
  return (
    <div id='section2' className='w-full h-screen flex flex-col items-center'>
      <ScrollTrigger
        start='center bottom'
        end='bottom center'
        scrub
        markers
        id='section2scroll'
        pin={'#section2'}
        pinSpacing={false}
        trigger={'#section2'}
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
            duration={10}
          />
          <Tween to={{ scaleX: 0.9, scaleY: 0.9 }} duration={30} />
          <Tween to={{ scaleX: 100, scaleY: 100, color: 'black' }} duration={20} />
          <Tween to={{ scaleX: 1, scaleY: 1 }} duration={0} />
        </Timeline>
      </ScrollTrigger>
    </div>
  );
}
