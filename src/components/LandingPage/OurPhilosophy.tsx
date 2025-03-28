import React from "react";
import { TextAnimate } from "../ui/magicui/text-animate";

const OurPhilosophy = () => {
  return (
    <div className="min-h-screen bg-white -top-20 relative md:rounded-t-[5rem] px-4 pt-20 md:px-40 md:pt-48 md:pb-64">
      <div className="text-7xl md:text-[9rem] flex flex-col leading-20 md:leading-30 tracking-tighter">
        <TextAnimate
          by="word"
          animation="slideUp"
          className="font-regular top-0 relative"
        >
          Our
        </TextAnimate>
        <TextAnimate
          by="word"
          animation="slideUp"
          className="font-light-italic"
        >
          philosophy
        </TextAnimate>
      </div>

      <div className="flex items-center mt-20 md:mt-32">
        <video
          src="/assets/2.mp4"
          autoPlay
          muted
          loop
          className="w-1/2 md:block hidden"
        />
        <h1 className="px-2 md:pr-32 text-2xl md:text-xl font-regular leading-7 md:leading-6">
          In our team, developers work alongside designers, strategists and
          analysts. Cuberto doesn&apos;t do cookie-cutter solutions and we build
          products exactly as they were during the design phase, no short cuts
          or simplifications. <br />
          <br />
          We&apos;re driven by user‑centered design that drives productivity and
          increases revenue. Our expertise and ingenuity are remarkable, yet we
          always strive to outdo and outperform our previous achievements.
        </h1>
      </div>
    </div>
  );
};

export default OurPhilosophy;
