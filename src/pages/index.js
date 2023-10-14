import * as React from "react"
import PreloaderVideo from "../components/preloadervideo";
import Section1 from "../components/section1";
const IndexPage = () => {
  return (
<>
    <PreloaderVideo/>
      <div id="wrapper" className="w-full relative z-20">
        <Section1/>
      </div>
      {/* </div> */}
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
