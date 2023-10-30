import * as React from 'react';
import AbudhabiPhoto from '../images/abudhabi.webp';
import SharjahPhoto from '../images/sharjah.webp';
import RasAlKhaimahPhoto from '../images/ras_al_khaimah.webp';
import DubaiiPhoto from '../images/dubai.webp';
import { ScrollTrigger, Timeline, Tween } from 'react-gsap';
import { useStarsStore } from './states/starsStore';

export default function Section6() {
  const setMovey = useStarsStore((state) => state.setMovey);

  function moveStarsDown() {
    if (typeof window !== 'undefined' && window.innerHeight && this.ratio != 1)
      setMovey(this.ratio * window.innerHeight);
  }
  function moveStarsUp() {
    if (typeof window !== 'undefined' && window.innerHeight && this.ratio != 1)
      setMovey(Math.abs(1 - this.ratio * 0.5 - (this.vars.mypart ? 0.5 : 0)) * window.innerHeight);
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
          className='h-screen w-full relative object-cover z-10'
          src={AbudhabiPhoto}
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
  const Img1 = React.forwardRef((props, ref) => (
    <Timeline>
      <Tween duration={3} from={{ x: '100%' }} to={{ x: '0' }}>
        <img
          ref={ref}
          className='h-screen w-full absolute top-0 object-cover z-20'
          src={SharjahPhoto}
          {...props}
        />
      </Tween>
      <Timeline
        target={
          <div
            className='uppercase w-[290px] text-[70px] leading-tight text-center absolute z-30 bottom-[5%] left-[50%] translate-x-[-50%] opacity-0'
            style={{
              textShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            SHAR
            <br />
            JAH
          </div>
        }
      >
        <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={1} />
        <Tween to={{ opacity: 1 }} duration={2} />
        <Tween from={{ opacity: 1 }} to={{ opacity: 0 }} duration={1} />
      </Timeline>
    </Timeline>
  ));
  const Img2 = React.forwardRef((props, ref) => (
    <Timeline>
      <Tween duration={3} from={{ x: '-100%' }} to={{ x: '0' }}>
        <img
          ref={ref}
          className='h-screen w-full absolute top-0 object-cover z-30'
          src={RasAlKhaimahPhoto}
          {...props}
        />
      </Tween>
      <Timeline
        target={
          <div
            className='uppercase w-[320px] text-[70px] leading-tight text-center absolute z-40 bottom-[5%] left-[50%] translate-x-[-50%] opacity-0'
            style={{
              textShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            RAS AL
            <br />
            KHAIMAH
          </div>
        }
      >
        <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={1} />
        <Tween to={{ opacity: 1 }} duration={1} />
        <Tween from={{ opacity: 1 }} to={{ opacity: 0 }} duration={1} />
      </Timeline>
    </Timeline>
  ));
  const Img3 = React.forwardRef((props, ref) => (
    <Timeline>
      <Tween duration={3} from={{ x: '100%' }} to={{ x: '0' }}>
        <img
          ref={ref}
          className='h-screen w-full absolute top-0 object-cover z-40'
          src={DubaiiPhoto}
          {...props}
        />
      </Tween>
      <Timeline
        target={
          <div
            className='uppercase w-[290px] text-[70px] leading-tight text-center absolute z-50 bottom-[5%] left-[50%] translate-x-[-50%] opacity-0'
            style={{
              textShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            DUBAI
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
      <div id='section6text' className='w-full h-screen flex flex-col items-center relative z-40'>
        <ScrollTrigger
          start='top bottom'
          end='bottom top'
          id='section5scroll'
          /* markers={{ fontSize: '12px', startColor: 'white', endColor: 'white' }} */
          trigger={'#section6text'}
          scrub
        >
          <Timeline>
            <div
              className='w-full h-screen flex flex-col items-center justify-center gap-[52px] fixed top-0 px-3'
              key='text screen'
            >
              <Timeline
                target={[
                  <h2
                    key='datetitle'
                    className='opacity-0 uppercase font-bold text-3xl text-center'
                  >
                    November 25-26
                  </h2>,
                  <p key='p1' className='opacity-0 uppercase text-2xl text-center'>
                    A trip is planned to meet with representatives of governments, members of the
                    Emirates chambers of Commerce and investors from regional government
                    organizations.
                  </p>,
                  <p key='p2' className='opacity-0 uppercase text-2xl text-center'>
                    This is an opportunity for everyone to discuss the relationship and business
                    development in these 4 emirates.
                  </p>,
                ]}
              >
                <Tween from={{ y: '20%' }} to={{ opacity: 1, y: '0%' }} target={0} />
                <Tween from={{ y: '20%' }} to={{ opacity: 1, y: '0%' }} target={1} />
                <Tween from={{ y: '20%' }} to={{ opacity: 1, y: '0%' }} target={2} />
                <Tween to={{ opacity: 0, y: '-20%' }} target={0} />
                <Tween to={{ opacity: 0, y: '-20%' }} target={1} />
                <Tween to={{ opacity: 0, y: '-20%' }} target={2} />
                <Tween to={{ opacity: 0 }} duration={2} />
              </Timeline>
            </div>
          </Timeline>
        </ScrollTrigger>
      </div>
      <div id='section6images' className='w-full relative z-40'>
        <ScrollTrigger
          start='top top'
          end='+=500%'
          id='section6scroll'
          pin
          trigger='#section6images'
          markers={{ fontSize: '12px', startColor: 'green', endColor: 'green' }}
          scrub
        >
          <Timeline
            target={
              <div className='flex flex-col w-screen'>
                <Img0 />
                <Img1 />
                <Img2 />
                <Img3 />
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
