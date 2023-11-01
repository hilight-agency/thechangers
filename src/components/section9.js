import * as React from 'react';
import { ScrollTrigger, Timeline, Tween } from 'react-gsap';

export default function Section9() {
  return (
    <React.Fragment>
      <div id='section9text' className='w-full h-screen relative z-40'>
        <ScrollTrigger
          start='top top'
          end='+=200%'
          id='section9scroll'
          markers={{ fontSize: '12px', startColor: 'red', endColor: 'red' }}
          trigger={'#section9text'}
          scrub
        >
          <div
            className='w-full h-screen flex flex-col items-center fixed top-0'
            key='text9_screen'
          >
            <div className='h-1/2 flex flex-col items-center'>
              <Timeline
                target={[
                  <img
                    src='/team/kobantsev.webp'
                    width={'100%'}
                    key='team_image1'
                    className='opacity-0'
                  />,
                  <div
                    key='team_heading1'
                    className='text-[#FCED9F] text-[29px] font-bold uppercase text-center opacity-0'
                  >
                    Mr. Kabantsev
                  </div>,
                ]}
              >
                <Tween to={{ opacity: 1 }} target={0} duration={1} />
                <Tween to={{ opacity: 1 }} target={1} duration={1} />
                <div className='h-1/2 flex flex-col items-center relative'>
                  <Timeline
                    target={[
                      <div
                        key='team1_text1'
                        className='text-[24px] uppercase text-center opacity-0'
                      >
                        is an entrepreneur and businessman with more than 15 years of experience in
                        the high-tech industry, investments, politics and events. Experience in
                        creating companies, managing breakthrough projects and creating cutting-edge
                        solutions.
                      </div>,
                      <div
                        key='team1_text2'
                        className='text-[24px] uppercase text-center absolute top-0 opacity-0'
                      >
                        He is a consultant to entrepreneurs and companies specializing in early
                        stage investments and strategic alliances. He has worked with leading
                        businessmen and politicians. Owner of an IT company and a commercial
                        business.
                      </div>,
                    ]}
                  >
                    <Tween to={{ opacity: 1 }} target={0} duration={1} />
                    <Tween to={{ opacity: 1 }} target={0} duration={2} />
                    <Tween to={{ opacity: 0 }} target={0} duration={1} />
                    <Tween to={{ opacity: 1 }} target={1} duration={1} />
                    <Tween to={{ opacity: 1 }} target={1} duration={2} />
                    <Tween to={{ opacity: 0 }} target={1} duration={1} />
                  </Timeline>
                </div>
                <Tween to={{ opacity: 0 }} duration={1} />
              </Timeline>
            </div>
          </div>
        </ScrollTrigger>
      </div>
      <div className='h-[200vh]'></div>
    </React.Fragment>
  );
}
