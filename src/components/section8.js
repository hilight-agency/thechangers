import * as React from 'react';
import data from '../speakers.json';
import SpeakerItem from './speakerItem';
import useScrollLock from '../hooks/useScrollLock';
export default function Section8() {
  const [opened, setOpened] = React.useState(false);
  const [lockScroll, unlockScroll] = useScrollLock();
  return (
    <React.Fragment>
      <div className='w-full p-5 flex flex-col gap-5'>
        {data.items.map((element) => (
          <SpeakerItem
            key={element.id + 'speaker'}
            isOpened={opened}
            element={element}
            onClick={() =>
              setOpened((current) => {
                if (element.id != current) {
                  lockScroll();
                  return element.id;
                } else {
                  unlockScroll();
                  return false;
                }
              })
            }
          />
        ))}
      </div>
    </React.Fragment>
  );
}
