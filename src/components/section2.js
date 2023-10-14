import { Controller, Scene } from "react-scrollmagic";
import * as React from "react"
export default function Section2 () {
    const sectionRef = React.useRef()
  return (
<>
<div className="wfull h-screen"></div>
    <section id="section-2" className="w-full h-[200vh] flex flex-col justify-end items-center pb-3" ref={sectionRef}>
      <Controller>
        <Scene duration="200%" triggerHook="onEnter" triggerElement={sectionRef} pin>
          {progress => (
            <div className="w-full h-screen">
              <img src="mainsq/mainsq000.webp" style={{opacity:progress*5}} width={'100%'} height={'100%'} className="object-cover"/>
            </div>
          )}
        </Scene>
      </Controller>
    </section>
    </>
)
  }