import * as React from 'react';
import { ScrollTrigger, Timeline, Tween } from 'react-gsap';
import { useSequenceProgressStore } from './states/sequencesStore';
import { gsap } from 'gsap';

export default function Section4() {
  React.useEffect(() => {
    gsap.to('#section4 .coloredtext', {
      keyframes: {
        color: ['#fcf1a6', '#fad3a1', '#fcf1a6', '#fcd3ac', '#c1786b'],
      },
      repeat: -1,
      yoyo: true,
      duration: 3,
    });
  });
  const setProgress = useSequenceProgressStore((state) => state.setAstronautSq2);

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
      text: (
        <span>
          15 Funds &<br /> Investors hubs
        </span>
      ),
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
          onUpdate={(self) => setProgress(self.progress)}
        >
          <Timeline
            playState='pause'
            target={
              <div
                className={`uppercase text-2xl font-semibold p-2 relative top-[25%] text-center w-full`}
                style={{ opacity: 0 }}
              >
                THERE WILL BE
                <br /> more than
              </div>
            }
          >
            <Tween to={{ opacity: 1, y: '-50%' }} duration={40} target={0} />
            <div className='relative text-2xl w-full text-center coloredtext top-[25%]'>
              <Timeline
                target={texts.map((item, index) => (
                  <p
                    key={item.key}
                    className={`uppercase w-full text-2xl font-semibold p-2 ${
                      index !== 0 ? 'absolute' : 'relative'
                    }`}
                    style={{ opacity: 0, top: '-100%' }}
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
            <Tween to={{ opacity: 0 }} duration={100} target={0} />
          </Timeline>
        </ScrollTrigger>
      </div>
      <div id='section4trigger' className='w-full h-[200vh]'></div>
    </React.Fragment>
  );
}
