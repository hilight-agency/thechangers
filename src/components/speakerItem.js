import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function SpeakerItem({ element, onClick, isOpened }) {
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
      inview[2].target.style.opacity = prog;
      inview[2].target.style.transform = `scale(${0.75 + prog * 0.25})`;
    }
  }, [prog]);
  return (
    <div
      ref={inview.ref}
      className={`w-full ${
        isOpened === element.id ? 'h-screen max-h-screen' : 'h-28 max-h-28'
      } flex flex-row gap-5 px-3 py-1 relative z-40`}
      style={{
        background: 'rgba(217, 217, 217, 0.20)',
      }}
      onClick={onClick}
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
