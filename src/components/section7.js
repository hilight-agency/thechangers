import * as React from 'react';
import Hotel from '../images/hotel.webp';
import { ScrollTrigger, Timeline, Tween } from 'react-gsap';
import { useStarsStore } from './states/starsStore';

export default function Section7() {
  const setMovey = useStarsStore((state) => state.setMovey);

  function moveStarsDown() {
    if (typeof window !== 'undefined' && this.ratio != 1) setMovey(this.ratio * 1024);
  }
  function moveStarsUp() {
    if (typeof window !== 'undefined' && this.ratio != 1)
      setMovey(Math.abs(1 - this.ratio * 0.5 - (this.vars.mypart ? 0.5 : 0)) * 1024);
  }
  const Img0 = React.forwardRef((props, ref) => (
    <Timeline>
      <Tween
        duration={3}
        from={{ y: '100%' }}
        to={{ y: '0' }}
        onUpdate={moveStarsDown}
        ease='linear'
      >
        <img
          ref={ref}
          className='h-screen w-full relative object-cover z-10 object-top'
          src={Hotel}
          {...props}
        />
      </Tween>

      <Timeline
        target={
          <div
            className='uppercase w-[290px] text-[70px] leading-tight text-center absolute z-20 bottom-[5%] left-[50%] translate-x-[-50%] opacity-0'
            style={{
              textShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            Abu
            <br />
            dhabi
          </div>
        }
      >
        <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={1} />
        <Tween to={{ opacity: 1 }} duration={2} />
        <Tween from={{ opacity: 1 }} to={{ opacity: 0 }} duration={1} />
      </Timeline>
    </Timeline>
  ));
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
              ]}
            >
              <Tween from={{ y: '20%' }} to={{ opacity: 1, y: 0 }} target={0} />
              <div key='text7_block1' className='flex flex-col items-center h-2/3 gap-7'>
                <Timeline
                  target={[
                    <p key='p1' className='uppercase text-2xl text-center opacity-0'>
                      &quot;The Changers&quot; summit at the Meydan Hotel.
                    </p>,
                    <p key='p2' className='uppercase text-2xl text-center opacity-0'>
                      2 full days with a special vip gala dinner with a limited number of seats,
                      including media representatives.
                    </p>,
                    <p key='p3' className='uppercase text-2xl text-center hidden opacity-0'>
                      Meydan is a visionary concept of His Highness Sheikh Mohammed Bin Rashid Al
                      Maktoum, Vice President of the UAE, Prime Minister and Ruler of Dubai.
                    </p>,
                    <p key='p4' className='uppercase text-2xl text-center hidden opacity-0'>
                      Since its grand opening in 2010, Meydan has attracted the attention of the
                      whole world. We can also find this hotel in films such as Star Trek Beyond.
                    </p>,
                  ]}
                >
                  <Tween from={{ y: '20%' }} to={{ opacity: 1, y: 0 }} target={0} />
                  <Tween from={{ y: '20%' }} to={{ opacity: 1, y: 0 }} target={1} />
                  <Tween to={{ opacity: 0, y: '-20%' }} target={0} />
                  <Tween to={{ opacity: 0, y: '-20%' }} target={1} />
                  <Tween to={{ display: 'none' }} target={0} duration={0} />
                  <Tween to={{ display: 'none' }} target={1} duration={0} />
                  <Tween to={{ display: 'block' }} target={2} duration={0} />
                  <Tween to={{ display: 'block' }} target={3} duration={0} />
                  <Tween from={{ y: '20%' }} to={{ opacity: 1, y: 0 }} target={2} />
                  <Tween from={{ y: '20%' }} to={{ opacity: 1, y: 0 }} target={3} />
                  <Tween to={{ opacity: 0, y: '-20%' }} target={2} />
                  <Tween to={{ opacity: 0, y: '-20%' }} target={3} />
                </Timeline>
              </div>
              <Tween to={{ opacity: 0, y: '-20%' }} target={0} />
            </Timeline>
          </div>
        </ScrollTrigger>
      </div>
      <div id='section7images' className='w-full relative z-40'>
        <ScrollTrigger
          start='top top'
          end='+=500%'
          id='section7scrollimages'
          pin
          trigger='#section7images'
          scrub
        >
          <Timeline
            target={
              <div className='flex flex-col w-screen'>
                <Img0 />
              </div>
            }
          >
            <Tween
              duration={2}
              from={{ y: '0' }}
              to={{ y: '50%' }}
              onUpdate={moveStarsUp}
              ease='linear'
            />
            <Tween
              ease='linear'
              mypart
              onUpdate={moveStarsUp}
              duration={2}
              from={{ y: '50%', opacity: '1' }}
              to={{ y: '100%', opacity: '0' }}
            />
          </Timeline>
        </ScrollTrigger>
      </div>
    </React.Fragment>
  );
}
