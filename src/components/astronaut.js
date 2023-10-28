import * as React from 'react';
import Sequence from './sequence/ImageSequence';
import { useSequenceProgressStore } from './states/sequencesStore';
import { CosmoSqArray } from './sequence/ImageArray';
import { Timeline, PlayState } from 'react-gsap';
export default function Astronaut() {
  const cosmosqArr = CosmoSqArray();
  const seqref = React.useRef();
  const progress1 = useSequenceProgressStore((state) => state.astronautSq1);
  const progress2 = useSequenceProgressStore((state) => state.astronautSq2);

  return (
    <Timeline
      totalProgress={progress2}
      playState={PlayState.pause}
      target={
        <div
          className={`w-full h-full fixed bottom-0 z-30 ${progress1 ? 'block' : 'hidden'}`}
          style={{
            opacity: progress1 < 1 ? progress1 * 10 : 1,
          }}
        >
          {progress1 * 0.85 + progress2 * 0.15 < 1 && (
            <Sequence
              ref={seqref}
              progress={progress1 * 0.85 + progress2 * 0.15}
              array={cosmosqArr}
              className={'h-full w-full bg-contain bg-bottom bg-no-repeat'}
            />
          )}
        </div>
      }
    ></Timeline>
  );
}
