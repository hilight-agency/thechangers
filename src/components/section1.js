import * as React from "react"
import Lottie from "lottie-react";
import ScrollDownLottie from "../lottie/animation_lnqazmry.json";
export default function Section1 () {
  return (
    <section id="section-1" className="wfull h-screen flex flex-col justify-end items-center pb-3">
    <div className="flex items-center flex-col text-white gap-1">
      <Lottie animationData={ScrollDownLottie} 
        loop autoPlay
        className="w-10"
      />
      Scroll down
    </div>
  </section>
)
  }