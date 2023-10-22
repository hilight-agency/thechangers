import * as React from 'react';
import Section1 from '../components/section1';
import Section2 from '../components/section2';
import Section3 from '../components/section3';

const IndexPage = () => {
  return (
    <div id='wrapper' className='w-full relative z-20 text-white'>
      <Section1 />
      <Section2 />
      <Section3 />
      <div className='h-screen'></div>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
