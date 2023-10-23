import * as React from 'react';
import Sequence from './sequence/ImageSequence';
import { useSequenceProgressStore } from './states/sequencesStore';
import { CosmoSqArray } from './sequence/ImageArray';

export default function Astronaut() {
  const cosmosqArr = CosmoSqArray();
  const seqref = React.useRef();
  const progress = useSequenceProgressStore((state) => state.astronautSq1);

  return (
    <div
      className={`w-full h-full fixed bottom-0 z-30 ${progress ? 'block' : 'hidden'}`}
      style={{ opacity: progress < 1 ? progress * 10 : 1 }}
    >
      <Sequence
        ref={seqref}
        progress={progress}
        array={cosmosqArr}
        className={'h-full w-full bg-contain bg-bottom bg-no-repeat'}
      />
    </div>
  );
}
