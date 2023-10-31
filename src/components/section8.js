import * as React from 'react';
import { ScrollTrigger, Timeline, Tween } from 'react-gsap';
import data from '../speakers.json';
import SpeakerItem from './speakerItem';
export default function Section8() {
  return (
    <React.Fragment>
      <ScrollTrigger>
        <Timeline>
          <Tween></Tween>
        </Timeline>
      </ScrollTrigger>
      <div className='w-full p-5 flex flex-col gap-5'>
        {data.items.map((element) => (
          <SpeakerItem key={element.id + 'speaker'} element={element} />
        ))}
      </div>
    </React.Fragment>
  );
}
