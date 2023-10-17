import { Controller, Scene } from 'react-scrollmagic';
import * as React from 'react';
import Sequence from './sequence/ImageSequence';

export default function Section2() {
  const sectionRef = React.useRef();
  const ref = React.useRef();
  return (
    <>
      <div className="w-full h-screen"></div>
      <section id="section-2" className="w-full h-screen" ref={sectionRef}>
        <Controller>
          <Scene duration="400%" triggerHook="onLeave" pin>
            {(progress) => {
              console.log(progress);
              return (
                <div style={{ height: '100vh', position: 'relative', opacity: progress * 20 }}>
                  <Sequence ref={ref} progress={progress} />
                </div>
              );
            }}
          </Scene>
        </Controller>
      </section>
    </>
  );
}
