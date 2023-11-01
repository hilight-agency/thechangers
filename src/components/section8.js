import * as React from 'react';
import data from '../speakers.json';
import SpeakerItem from './speakerItem';
import useScrollLock from '../hooks/useScrollLock';
import SpeakerItemDetailed from './speakerItemDetailed';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default function Section8() {
  const [opened, setOpened] = React.useState(false);
  const [lockScroll, unlockScroll] = useScrollLock();
  return (
    <React.Fragment>
      <div
        className={`w-full p-5 flex flex-col gap-5 ${
          opened ? `opacity-0` : `opacity-100`
        } transition-opacity duration-200`}
      >
        {data.items.map((element) => (
          <SpeakerItem
            key={element.id + 'speaker'}
            element={element}
            onClick={() =>
              setOpened(() => {
                lockScroll();
                return element.id;
              })
            }
          />
        ))}
      </div>
      <div
        className={`p-5 h-screen w-full fixed top-8 ${
          opened ? `opacity-100 z-50` : `opacity-0`
        } transition-opacity duration-200`}
      >
        {opened && (
          <Carousel
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            onClickItem={() =>
              setOpened(() => {
                unlockScroll();
                return false;
              })
            }
            selectedItem={opened || 0}
          >
            {data.items.map((element) => (
              <SpeakerItemDetailed key={element.id + 'speakerdetail'} element={element} />
            ))}
          </Carousel>
        )}
      </div>
    </React.Fragment>
  );
}
