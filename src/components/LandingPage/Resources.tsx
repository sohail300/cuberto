import React, { useRef, useEffect, useState } from "react";
import { TextAnimate } from "../ui/magicui/text-animate";
import { CardLink } from "../ui/CardLink";
import * as motion from "motion/react-client";
import Button from "../ui/Button";

const cards = [
  {
    imageUrl: "/assets/cover.png",
    href: "/image",
    title: "How to Make UI/UX Website // HTML and CSS development",
  },
  {
    imageUrl: "/assets/cover.png",
    href: "/image",
    title: "How to Make UI/UX Website // HTML and CSS development",
  },
  {
    imageUrl: "/assets/cover.png",
    href: "/image",
    title: "How to Make UI/UX Website // HTML and CSS development",
  },
  {
    imageUrl: "/assets/cover.png",
    href: "/image",
    title: "How to Make UI/UX Website // HTML and CSS development",
  },
  {
    imageUrl: "/assets/cover.png",
    href: "/image",
    title: "How to Make UI/UX Website // HTML and CSS development",
  },
  {
    imageUrl: "/assets/cover.png",
    href: "/image",
    title: "How to Make UI/UX Website // HTML and CSS development",
  },
];

const Resources = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

  // Calculate drag constraints based on content and container width
  useEffect(() => {
    const calculateConstraints = () => {
      if (containerRef.current && cardsContainerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        const cardsWidth = cardsContainerRef.current.scrollWidth;

        // Only allow dragging if content is wider than container
        const leftConstraint = containerWidth - cardsWidth;

        setDragConstraints({
          left: Math.min(leftConstraint, 0), // Negative value, but never positive
          right: 0, // Right constraint is always 0
        });
      }
    };

    // Calculate on mount
    calculateConstraints();

    // Recalculate on window resize
    window.addEventListener("resize", calculateConstraints);
    return () => window.removeEventListener("resize", calculateConstraints);
  }, []); // Recalculate when cards array changes

  return (
    <div className="min-h-screen bg-black/95 md:rounded-t-[5rem] relative -top-40">
      {/* Animated Title */}
      <div className="text-6xl md:text-9xl flex flex-col leading-16 md:leading-28 tracking-tighter text-white px-6 pt-20 pb-24 md:px-40 md:pt-56 md:pb-40">
        <TextAnimate
          by="word"
          animation="slideUp"
          className="font-regular top-0 relative"
        >
          Development
        </TextAnimate>
        <TextAnimate
          by="word"
          animation="slideUp"
          className="font-regular top-0 relative"
        >
          and design
        </TextAnimate>
        <TextAnimate
          by="word"
          animation="slideUp"
          className="font-light-italic"
        >
          resources
        </TextAnimate>
      </div>

      {/* Draggable Cards Section */}
      <div className="overflow-hidden" ref={containerRef}>
        <motion.div
          className="flex gap-4 md:gap-10 cursor-grab active:cursor-grabbing pl-6 md:pl-40"
          drag="x"
          transition={{ stiffness: 30, damping: 30, ease: "easeInOut" }}
          dragConstraints={dragConstraints}
          whileTap={{ cursor: "grabbing" }}
          ref={cardsContainerRef}
        >
          {cards.map((card, index) => (
            <motion.div key={index}>
              <CardLink {...card} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="w-full md:py-40 border-white flex">
        <div className="w-full md:w-1/2 md:block hidden"></div>
        <div className="flex flex-col w-full md:w-1/2 gap-10 py-32 md:py-0 mx-6 md:pr-68">
          <h1 className="text-2xl md:text-xl font-regular text-white">
            We regularly release design courses, offer advice to newbie
            designers, walk you through creating awesome effects, and share
            source files.
          </h1>
          <Button
            className="border-1 border-white w-fit text-white rounded-full text-lg md:text-2xl hover:invert"
            padding="py-2 px-6 md:px-4 uppercase"
          >
            View all resources
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Resources;
