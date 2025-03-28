import React from "react";
import { TextAnimate } from "../ui/magicui/text-animate";
import * as motion from "motion/react-client";

const Landingpage = () => {
  return (
    <div className="h-[75vh] md:h-[90vh] w-full flex flex-col relative">
      <div className="flex justify-between items-center pt-6 w-full px-8 md:px-12">
        <h1 className="text-3xl md:text-2xl font-semibold">cuberto</h1>
        <h1 className="font-light-regular text-base pr-13 md:block hidden">
          menu
        </h1>
      </div>
      <div className="h-full md:mx-40 md:my-20 mx-4 flex flex-col justify-center text-5xl md:text-8xl">
        <TextAnimate
          animation="slideUp"
          by="word"
          className="font-regular"
          style={{ animationDelay: "0s" }} // Start immediately
        >
          We are a digital
        </TextAnimate>

        <div className="flex items-center mt-2 gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 1, bounce: 0 },
            }}
          >
            <video
              src="/assets/header.mp4"
              autoPlay
              muted
              loop
              className="rounded-full h-16 md:h-28"
            />
          </motion.div>
          <TextAnimate
            animation="slideUp"
            by="word"
            className="font-light-italic"
            delay={0.3}
          >
            design
          </TextAnimate>
          <TextAnimate
            animation="slideUp"
            by="word"
            className="font-regular"
            delay={0.6}
          >
            and
          </TextAnimate>
        </div>
        <TextAnimate
          animation="slideUp"
          by="word"
          className="font-regular"
          delay={0.9}
        >
          motion agency
        </TextAnimate>
      </div>
    </div>
  );
};

export default Landingpage;
