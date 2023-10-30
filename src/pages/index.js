import * as React from 'react';
import Header from '../components/header';
import Stars from '../components/stars';
import Section1 from '../components/section1';
import Section2 from '../components/section2';
import Section3 from '../components/section3';
import Section4 from '../components/section4';
import Section5 from '../components/section5';
import Section6 from '../components/section6';

const IndexPage = () => {
  return (
    <div id='wrapper' className='w-full relative z-20 text-white'>
      <Stars />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <div className='h-screen'></div>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
