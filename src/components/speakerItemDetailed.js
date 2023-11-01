import React from 'react';

export default function SpeakerItemDetailed({ element }) {
  return (
    <div
      className={`w-full h-[calc(100vh-64px)] bg-[#d9d9d933] bg-clip-content py-15 px-5 bg-contain bg-no-repeat bg-bottom`}
      style={{ backgroundImage: `url('/speakers/${element.img}/detail.png')` }}
    >
      <div className='flex flex-col items-start justify-center p-5 text-left gap-1'>
        <div className='text-[#FCED9F] uppercase text-xl font-extrabold'>{element.title}</div>
        <div className='uppercase text-xl font-extrabold'>{element.name}</div>
        {element.fulldescr.map((item, i) => (
          <>
            <div
              key={`${element.id}_descr_${i}`}
              className='uppercase text-base flex-grow flex-shrink-0'
            >
              {item.descr}
            </div>
            <div className='max-h-10 h-10 flex flex-row gap-2'>
              {item.logos.map((logo, j) => (
                <img
                  className='max-h-10 h-10'
                  src={`/speakers/${element.img}/logo${logo}.png`}
                  key={`${element.id}_descr_${i}_logo_${j}`}
                />
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
