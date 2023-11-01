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
            {/* <Timeline
              target={[
                <div
                  key='text9_datetitle'
                  className='opacity-0 flex flex-col items-center justify-center h-1/2'
                >
                  <h2 className='uppercase font-bold text-3xl text-center'>November 27-28</h2>
                </div>,
              ]}
            >
              <Tween from={{ y: '20%' }} to={{ opacity: 1, y: 0 }} target={0} />
              <div key='text9_block1' className='flex flex-col items-center h-1/2 gap-7'>
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
            </Timeline> */}
          </div>
        </ScrollTrigger>
      </div>
      <div className='h-[200vh]'></div>
    </React.Fragment>
  );
}
