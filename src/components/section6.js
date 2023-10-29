import * as React from 'react';
import AbudhabiPhoto from '../images/abudhabi.webp';
import SharjahPhoto from '../images/sharjah.webp';
import RasAlKhaimahPhoto from '../images/ras_al_khaimah.webp';
import DubaiiPhoto from '../images/dubai.webp';
export default function Section6() {
  return (
    <div id='section6' className='w-full flex flex-col items-center relative z-40'>
      <img width={'100%'} src={AbudhabiPhoto} />
      <img width={'100%'} src={SharjahPhoto} />
      <img width={'100%'} src={RasAlKhaimahPhoto} />
      <img width={'100%'} src={DubaiiPhoto} />
    </div>
  );
}
