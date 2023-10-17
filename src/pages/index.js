import * as React from 'react';
import PreloaderVideo from '../components/preloadervideo';
import Section1 from '../components/section1';
import Section2 from '../components/section2';
const IndexPage = () => {
  return (
    <>
      <PreloaderVideo />
      <div id="wrapper" className="w-full relative z-20 text-white">
        <Section1 />
        <Section2 />
      </div>
      {/* </div> */}
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
