import * as React from 'react';
import PreloaderVideo from '../components/preloadervideo';

import Section1 from '../components/section1';
import Section2 from '../components/section2';
const IndexPage = () => {
  const ref = React.useRef();
  return (
    <>
      <PreloaderVideo ref={ref} />
      <div id="wrapper" className="w-full relative z-20 text-white">
        <Section1 videoref={ref} />
        <Section2 />
      </div>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
