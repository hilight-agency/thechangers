import React from 'react';
export default function SpeakerItem({ element }) {
  return (
    <div
      className='w-full h-28 flex flex-row gap-5 px-3 py-1'
      style={{ background: 'rgba(217, 217, 217, 0.20)' }}
    >
      <div className='flex flex-col items-center justify-center min-w-[78px] min-h-[78px]'>
        <img src={`/speakers/${element.img}.png`} width={78} height={78} />
      </div>
      <div className='flex flex-col items-start justify-center'>
        <div className='text-[#FCED9F] uppercase text-xl'>{element.title}</div>
        <div className='uppercase text-xl'>{element.name}</div>
      </div>
    </div>
  );
}
