import * as React from 'react';
import data from '../speakers.json';
import SpeakerItem from './speakerItem';
/* import { useSpeakersStore } from './states/speakersStore'; */
export default function Section8() {
  /* const opened = useSpeakersStore((state) => state.opened); */
  return (
    <React.Fragment>
      <div className={`speakerslayer w-full p-5 flex flex-col gap-5`}>
        {data.items.map((element) => (
          <SpeakerItem key={element.id + 'speaker'} element={element} />
        ))}
      </div>
    </React.Fragment>
  );
}
