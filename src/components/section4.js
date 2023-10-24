import * as React from 'react';
import { ScrollTrigger, Timeline, Tween } from 'react-gsap';

export default function Section4() {
  const texts = [
    {
      key: 'attendees',
      text: '2000 Attendees',
    },
    {
      key: 'speakers',
      text: '200 speakers',
    },
    {
      key: 'companies',
      text: '120 companies',
    },
    {
      key: 'funds-investors',
      text: '15 Funds & Investors hubs',
    },
  ];

  return (
    <React.Fragment>
      <div id='section4' className='w-full h-screen flex flex-col items-center relative z-40'>
        <ScrollTrigger
          start='top top'
          end='bottom top'
          id='section4scroll'
          pin
          /* markers={{ fontSize: '12px', startColor: 'white', endColor: 'white' }} */
          pinSpacing={false}
          endTrigger={'#section4trigger'}
          trigger={'#section4'}
          scrub
        >
          <Timeline
            playState='pause'
            target={
              <h1
                className={`uppercase text-2xl font-semibold p-2 relative top-[25%]`}
                style={{ opacity: 0 }}
              >
                THERE WILL BE more than
              </h1>
            }
          >
            <>
              <Tween to={{ opacity: 1 }} duration={10} target={0} />
              <div className='relative w-full text-center top-[25%]'>
                <Timeline
                  target={texts.map((item, index) => (
                    <p
                      key={item.key}
                      className={`uppercase w-full text-xl font-semibold p-2 ${
                        index !== 0 ? 'absolute' : 'relative'
                      }`}
                      style={{ opacity: 0, top: 0 }}
                    >
                      {item.text}
                    </p>
                  ))}
                >
                  {texts.map((...params) => {
                    return (
                      <React.Fragment key={params[0]?.key}>
                        <Tween to={{ opacity: 1 }} duration={10} target={params[1]} />
                        <Tween to={{ opacity: 1 }} duration={30} target={params[1]} />
                        <Tween to={{ opacity: 0 }} duration={10} target={params[1]} />
                      </React.Fragment>
                    );
                  })}
                </Timeline>
              </div>
              <Tween to={{ opacity: 0 }} duration={10} target={0} />
            </>
          </Timeline>
        </ScrollTrigger>
      </div>
      <div id='section4trigger' className='w-full h-[200vh]'></div>
    </React.Fragment>
  );
}
