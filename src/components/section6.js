import * as React from 'react';
import AbudhabiPhoto from '../images/abudhabi.webp';
import SharjahPhoto from '../images/sharjah.webp';
import RasAlKhaimahPhoto from '../images/ras_al_khaimah.webp';
import DubaiiPhoto from '../images/dubai.webp';
import { ScrollTrigger, Timeline, Tween } from 'react-gsap';

export default function Section6() {
  const targets = [
    <div
      className='w-full h-screen flex flex-col items-center justify-center gap-[52px]'
      key='text screen'
    >
      <Timeline
        target={[
          <h2 key='datetitle' className='opacity-0'>
            November 25-26
          </h2>,
          <p key='p1' className='opacity-0'>
            A trip is planned to meet with representatives of governments, members of the Emirates
            chambers of Commerce and investors from regional government organizations.
          </p>,
          <p key='p2' className='opacity-0'>
            This is an opportunity for everyone to discuss the relationship and business development
            in these 4 emirates.
          </p>,
        ]}
      >
        <Tween to={{ opacity: 1, y: '50%' }} target={0}></Tween>
        <Tween to={{ opacity: 1, y: '50%' }} target={1}></Tween>
        <Tween to={{ opacity: 1, y: '50%' }} target={2}></Tween>
      </Timeline>
    </div>,
    <img
      width={'100%'}
      src={AbudhabiPhoto}
      key='AbudhabiPhoto'
      className='relative z-10 opacity-0'
    />,
    <img
      width={'100%'}
      src={SharjahPhoto}
      key='SharjahPhoto'
      className='absolute top-full z-20 opacity-0'
    />,
    <img
      width={'100%'}
      src={RasAlKhaimahPhoto}
      key='RasAlKhaimahPhoto'
      className='absolute top-0 z-30 opacity-0'
    />,
    <img
      width={'100%'}
      src={DubaiiPhoto}
      key='DubaiiPhoto'
      className='absolute top-0 z-40 opacity-0'
    />,
  ];
  return (
    <React.Fragment>
      <div id='section6text' className='w-full h-screen flex flex-col items-center relative z-40'>
        <ScrollTrigger
          start='top top'
          pin
          end='+=600%'
          id='section5scroll'
          markers={{ fontSize: '12px', startColor: 'white', endColor: 'white' }}
          trigger={'#section6text'}
          scrub
        >
          <Timeline playState='pause' target={targets}>
            <Tween to={{ opacity: 1, y: '50%' }} target={0} position={0}></Tween>
            <Tween to={{ opacity: 0, y: '100%' }} target={0} position={1}></Tween>
            <Tween to={{ opacity: 1, y: '50%' }} target={1} position={2}></Tween>
            <Tween to={{ opacity: 0, y: '100%' }} target={1} position={3}></Tween>
            <Tween to={{ opacity: 1, y: '50%' }} target={2} position={3}></Tween>
            <Tween to={{ opacity: 0, y: '100%' }} target={2} position={4}></Tween>
            <Tween to={{ opacity: 1, y: '50%' }} target={3} position={4}></Tween>
            <Tween to={{ opacity: 0, y: '100%' }} target={3} position={5}></Tween>
            <Tween to={{ opacity: 1, y: '50%' }} target={4} position={5}></Tween>
            <Tween to={{ opacity: 0, y: '100%' }} target={4} position={3}></Tween>
          </Timeline>
        </ScrollTrigger>
      </div>
    </React.Fragment>
  );
}
