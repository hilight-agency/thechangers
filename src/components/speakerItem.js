import React from 'react';
import { useInView } from 'react-intersection-observer';

const RoundRight = (num) => Math.round((num + Number.EPSILON) * 100) / 100;

export default function SpeakerItem({ element }) {
  const [prog, setProg] = React.useState(0.1);
  const thresholdArr = Array.from({ length: 100 }, (_, i) => RoundRight(i / 100));
  const { ...inview } = useInView({
    threshold: thresholdArr,
    onChange: (...attr) => {
      setProg(RoundRight(attr[1]?.intersectionRatio * 2 - 1 || 0));
    },
  });
  return (
    <div
      ref={inview.ref}
      className='w-full h-28 max-h-28 flex flex-row gap-5 px-3 py-1'
      style={{
        background: 'rgba(217, 217, 217, 0.20)',
        opacity: prog,
        transform: `scale(${0.25 + prog * 0.75})`,
      }}
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