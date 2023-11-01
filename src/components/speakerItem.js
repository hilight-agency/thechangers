import React from 'react';
import { useInView } from 'react-intersection-observer';
import useScrollLock from '../hooks/useScrollLock';
import { useSpeakersStore } from './states/speakersStore';
import { Flip } from 'gsap/Flip';
import { gsap } from 'gsap';
gsap.registerPlugin(Flip);

export default function SpeakerItem({ element }) {
  const opened = useSpeakersStore((state) => state.opened);
  const setOpened = useSpeakersStore((state) => state.setOpened);
  /*const currentitem = useSpeakersStore((state) => state.currentitem);
  const setCurrentItem = useSpeakersStore((state) => state.setCurrentItem);*/
  const [lockScroll, unlockScroll] = useScrollLock();
  const toggleCSSclasses = (el, ...cls) => cls.map((cl) => el.classList.toggle(cl));
  const [prog, setProg] = React.useState(0);
  const thresholdArr = Array.from({ length: 100 }, (_, i) => i / 100);
  const { ...inview } = useInView({
    threshold: thresholdArr,
    onChange: (...attr) => {
      setProg(() => attr[1]?.intersectionRatio * 2 - 1 || 0);
    },
  });
  React.useEffect(() => {
    if (inview && inview[2]) {
      inview[2].target.style.opacity = opened ? 1 : prog;
      inview[2].target.style.transform = opened ? `` : `scale(${0.75 + prog * 0.25})`;
    }
  }, [prog, opened]);
  const handleAnimation = () => {
    setOpened();
    const speakerslayer = document.querySelector('.speakerslayer');
    const speakeritem = document.querySelector('.speakeritem');
    const state = Flip.getState('.speakerslayer, .speakeritem');
    // toggle the flex direction
    if (opened) {
      speakerslayer.classList.replace('flex-row', 'flex-col');
    } else {
      speakerslayer.classList.replace('flex-col', 'flex-row');
    }

    Flip.from(state, {
      nested: true,
      simple: true,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power1.inOut',
      onStart: () => {
        gsap &&
          window &&
          document &&
          gsap.to(window, {
            scrollTo:
              speakerslayer.getBoundingClientRect().top -
              document.body.getBoundingClientRect().top -
              40,
            duration: 0.5,
            ease: 'power2.inOut',
          });
        if (!opened) lockScroll();
      },
      onComplete: () => {
        if (opened) unlockScroll();
      },
      // you can use any other tweening properties here too, like onComplete, onUpdate, delay, etc.
    });
  };
  return (
    <div
      ref={inview.ref}
      className={`speakeritem w-full h-28 max-h-28 flex flex-row gap-5 px-3 py-1 relative z-40`}
      style={{
        background: 'rgba(217, 217, 217, 0.20)',
      }}
      onClick={handleAnimation}
    >
      <div className='flex flex-col items-center justify-center min-w-[78px] min-h-[78px]'>
        <img src={`/speakers/${element.img}.png`} width={78} height={78} />
      </div>
      <div className='flex flex-col items-start justify-center'>
        <div className='text-[#FCED9F] uppercase text-xl font-extrabold'>{element.title}</div>
        <div className='uppercase text-xl font-extrabold'>{element.name}</div>
      </div>
    </div>
  );
}
