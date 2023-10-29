import * as React from 'react';
import AbudhabiPhoto from '../images/abudhabi.webp';
import SharjahPhoto from '../images/sharjah.webp';
import RasAlKhaimahPhoto from '../images/ras_al_khaimah.webp';
import DubaiiPhoto from '../images/dubai.webp';
import { ScrollTrigger, Timeline, Tween } from 'react-gsap';

export default function Section6() {
  const Img0 = React.forwardRef((props, ref) => (
    <img
      ref={ref}
      className='h-screen w-full relative object-cover z-10'
      src={AbudhabiPhoto}
      {...props}
    />
  ));
  const Img1 = React.forwardRef((props, ref) => (
    <img
      ref={ref}
      className='h-screen w-full absolute top-0 object-cover z-20'
      src={SharjahPhoto}
      {...props}
    />
  ));
  const Img2 = React.forwardRef((props, ref) => (
    <img
      ref={ref}
      className='h-screen w-full absolute top-0 object-cover z-30'
      src={RasAlKhaimahPhoto}
      {...props}
    />
  ));
  const Img3 = React.forwardRef((props, ref) => (
    <img
      ref={ref}
      className='h-screen w-full absolute top-0 object-cover z-40'
      src={DubaiiPhoto}
      {...props}
    />
  ));

  return (
    <React.Fragment>
      <div id='section6text' className='w-full h-screen flex flex-col items-center relative z-40'>
        <ScrollTrigger
          start='top bottom'
          end='bottom top'
          id='section5scroll'
          markers={{ fontSize: '12px', startColor: 'white', endColor: 'white' }}
          trigger={'#section6text'}
          scrub
        >
          <Timeline>
            <div
              className='w-full h-screen flex flex-col items-center justify-center gap-[52px] fixed top-0'
              key='text screen'
            >
              <Timeline
                target={[
                  <h2 key='datetitle' className='opacity-0'>
                    November 25-26
                  </h2>,
                  <p key='p1' className='opacity-0'>
                    A trip is planned to meet with representatives of governments, members of the
                    Emirates chambers of Commerce and investors from regional government
                    organizations.
                  </p>,
                  <p key='p2' className='opacity-0'>
                    This is an opportunity for everyone to discuss the relationship and business
                    development in these 4 emirates.
                  </p>,
                ]}
              >
                <Tween from={{ y: '20%' }} to={{ opacity: 1, y: '0%' }} target={0}></Tween>
                <Tween from={{ y: '20%' }} to={{ opacity: 1, y: '0%' }} target={1}></Tween>
                <Tween from={{ y: '20%' }} to={{ opacity: 1, y: '0%' }} target={2}></Tween>
                <Tween to={{ opacity: 0, y: '-20%' }} target={0}></Tween>
                <Tween to={{ opacity: 0, y: '-20%' }} target={1}></Tween>
                <Tween to={{ opacity: 0, y: '-20%' }} target={2}></Tween>
              </Timeline>
            </div>
          </Timeline>
        </ScrollTrigger>
      </div>
      <div id='section6images' className='w-full relative z-40'>
        <ScrollTrigger
          start='top top'
          end='+=400%'
          id='section6scroll'
          pin
          trigger='#section6images'
          markers={{ fontSize: '12px', startColor: 'green', endColor: 'green' }}
          scrub
        >
          <div className='flex flex-col'>
            <Timeline>
              <Tween from={{ y: '100%' }} to={{ y: '0' }} duration={2}>
                <Img0 />
              </Tween>
              <Tween duration={1}>{null}</Tween>
              <Tween from={{ y: '100%' }} to={{ y: '0' }} duration={2}>
                <Img1 />
              </Tween>
              <Tween duration={1}>{null}</Tween>
              <Tween from={{ y: '100%' }} to={{ y: '0' }} duration={2}>
                <Img2 />
              </Tween>
              <Tween duration={1}>{null}</Tween>
              <Tween from={{ y: '100%' }} to={{ y: '0' }} duration={2}>
                <Img3 />
              </Tween>
              <Tween duration={1}>{null}</Tween>
            </Timeline>
          </div>
          {/*           <Timeline target={targets}>
            <Tween from={{ y: '20%' }} to={{ opacity: 1, y: '0%' }} target={0}></Tween>
            <Tween from={{ y: '20%' }} to={{ opacity: 1, y: '0%' }} target={1}></Tween>
            <Tween from={{ y: '20%' }} to={{ opacity: 1, y: '0%' }} target={2}></Tween>
            <Tween from={{ y: '20%' }} to={{ opacity: 1, y: '0%' }} target={3}></Tween>
          </Timeline> */}
        </ScrollTrigger>
      </div>
    </React.Fragment>
  );
}
