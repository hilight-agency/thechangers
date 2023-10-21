import * as React from 'react';
import { ScrollTrigger, Timeline, Tween } from 'react-gsap';

export default function Section3() {
  const texts = [
    {
      text: '"The Changers" is a unique event that gathers investors, decision makers, and celebrities from all over the world at the Meydan Hotel. It provides opportunities for entrepreneurs, companies and influencers, including access to politicians and entertainment stars.',
      class: 'text-left',
    },
    {
      text: 'Venture capitalists and investors are also present, ready to support innovation. The participation of the royal families adds status to the event, making it a platform for contacts and partnerships.',
      class: 'text-right',
    },
    {
      text: '"The Changers" is a catalyst for change and an opportunity to establish the future of trade and influence.',
      class: 'text-center',
    },
  ];
  return (
    <React.Fragment>
      <div id='section3' className='w-full h-screen flex flex-col items-center'>
        <ScrollTrigger
          start='center bottom'
          end='bottom center'
          markers
          id='section3scroll'
          pin={'#section3'}
          pinSpacing={false}
          endTrigger={'#section3trigger'}
          trigger={'#section3'}
          scrub
        >
          <Timeline
            playState='pause'
            target={texts.map((item, inx) => (
              <p key={inx} className={`${item.class} uppercase text-xl`}>
                {item.text}
              </p>
            ))}
          >
            {texts.map((...params) => (
              <>
                <Tween
                  from={{ opacity: 0, y: '50%' }}
                  to={{ opacity: 1, y: '5%' }}
                  duration={10}
                  target={params[1]}
                />
                <Tween to={{ y: '-50%' }} duration={30} target={params[1]} />
                <Tween to={{ opacity: 0, y: '-100%' }} duration={10} target={params[1]} />
                <Tween to={{ display: 'none' }} duration={0} target={params[1]} />
              </>
            ))}
          </Timeline>
        </ScrollTrigger>
      </div>
      <div id='section3trigger' className='w-full h-[300vh]'></div>
    </React.Fragment>
  );
}
