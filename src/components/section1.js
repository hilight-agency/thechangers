import * as React from "react"
import Lottie from "lottie-react";
import ScrollDownLottie from "../lottie/white_stripes_down.json";
import Timer from "./timer";
export default function Section1 () {
  return (
    <section id="section-1" className="w-full h-screen flex flex-col justify-end items-center pb-3 fixed">
    <div className="flex items-center flex-col gap-1">
      <Timer deadline={new Date(Date.now()+43*24*60*60*1000).toString()}/>
      <Lottie animationData={ScrollDownLottie} 
        loop autoPlay
        className="w-20"
      />
    </div>
  </section>
)
  }