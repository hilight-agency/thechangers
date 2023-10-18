import * as React from 'react';
import { Controller, Scene } from 'react-scrollmagic';

export default function Section2() {
  const ref = React.useRef();
  return (
    <>
      <section
        id="section-3"
        className="w-full h-screen relative z-40 flex items-center justify-center"
        ref={ref}
      >
        <Controller>
          <Scene duration="50%" triggerHook="onEnter" triggerElement={ref?.current}>
            {(progress) => {
              return (
                <div
                  style={{
                    transform: `translate3d(0,${progress * 50}vh,0)`,
                    opacity: progress,
                  }}
                >
                  Place where ideas transform Tomorrow
                </div>
              );
            }}
          </Scene>
        </Controller>
      </section>
      <div className="w-full h-screen"></div>
    </>
  );
}
