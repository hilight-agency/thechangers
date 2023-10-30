import * as React from 'react';
/* import AbudhabiPhoto from '../images/abudhabi.webp'; */
import { ScrollTrigger, Timeline, Tween } from 'react-gsap';

export default function Section7() {
  return (
    <React.Fragment>
      <div id='section7text' className='w-full h-screen relative z-40'>
        <ScrollTrigger
          start='top bottom'
          end='bottom top'
          id='section7scroll'
          markers={{ fontSize: '12px', startColor: 'white', endColor: 'white' }}
          trigger={'#section7text'}
          scrub
        >
          <div
            className='w-full h-screen flex flex-col items-center  gap-[52px] fixed top-0 px-3'
            key='text7_screen'
          >
            <Timeline
              target={[
                <div
                  key='text7_datetitle'
                  className='opacity-0 flex flex-col items-center justify-center h-1/3'
                >
                  <h2 className='uppercase font-bold text-3xl text-center'>November 27-28</h2>
                </div>,
                <div
                  key='text7_block1'
                  className='opacity-0 flex flex-col items-center h-2/3 gap-7'
                >
                  <p key='p1' className='uppercase text-2xl text-center'>
                    &quot;The Changers&quot; summit at the Meydan Hotel.
                  </p>
                  <p key='p2' className='uppercase text-2xl text-center'>
                    2 full days with a special vip gala dinner with a limited number of seats,
                    including media representatives.
                  </p>
                </div>,
                <div
                  key='text7_block2'
                  className='hidden opacity-0 flex-col items-center h-2/3 gap-7'
                >
                  <p key='p3' className='uppercase text-2xl text-center'>
                    Meydan is a visionary concept of His Highness Sheikh Mohammed Bin Rashid Al
                    Maktoum, Vice President of the UAE, Prime Minister and Ruler of Dubai.
                  </p>
                  <p key='p4' className='uppercase text-2xl text-center'>
                    Since its grand opening in 2010, Meydan has attracted the attention of the whole
                    world. We can also find this hotel in films such as Star Trek Beyond.
                  </p>
                </div>,
              ]}
            >
              <Tween to={{ opacity: 1 }} target={0} />
              <Tween to={{ opacity: 1 }} target={1} />
              <Tween to={{ opacity: 0 }} target={1} />
              <Tween to={{ display: 'none' }} target={1} duration={0} />
              <Tween to={{ display: 'flex' }} target={2} duration={0} />
              <Tween to={{ opacity: 1 }} target={2} />
              <Tween to={{ opacity: 0 }} target={2} />
            </Timeline>
          </div>
        </ScrollTrigger>
      </div>
    </React.Fragment>
  );
}
