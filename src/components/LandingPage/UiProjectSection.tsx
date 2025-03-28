import React, { useRef, useEffect, useState } from "react";
import { VelocityScroll } from "../ui/magicui/scroll-based-velocity";
import { CardLink1 } from "../ui/CardLink";
import { motion } from "framer-motion"; // Changed to match CardLink import
import { Dribbble } from "lucide-react";

const cards = [
  {
    imageUrl: "/assets/cover.png",
    href: "/image",
    title: "cuberto",
    icon: <Dribbble className="h-6 md:h-4" />,
  },
  {
    imageUrl: "/assets/cover.png",
    href: "/image",
    title: "cuberto",
    icon: <Dribbble className="h-6 md:h-4" />,
  },
  {
    imageUrl: "/assets/cover.png",
    href: "/image",
    title: "cuberto",
    icon: <Dribbble className="h-6 md:h-4" />,
  },
  {
    imageUrl: "/assets/cover.png",
    href: "/image",
    title: "cuberto",
    icon: <Dribbble className="h-6 md:h-4" />,
  },
  {
    imageUrl: "/assets/cover.png",
    href: "/image",
    title: "cuberto",
    icon: <Dribbble className="h-6 md:h-4" />,
  },
  {
    imageUrl: "/assets/cover.png",
    href: "/image",
    title: "cuberto",
    icon: <Dribbble className="h-6 md:h-4" />,
  },
];

interface UiProjectSectionProps {
  setCursorState: React.Dispatch<
    React.SetStateAction<{
      isHoveringOnVideo: boolean;
      isVideoPlaying: boolean;
    }>
  >;
}

const UiProjectSection: React.FC<UiProjectSectionProps> = ({
  setCursorState,
}) => {
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
  }, [cards]); //

  // Example usage of setCursorState
  const handleMouseEnter = () => {
    setCursorState({ isHoveringOnVideo: true, isVideoPlaying: false });
  };

  const handleMouseLeave = () => {
    setCursorState({ isHoveringOnVideo: false, isVideoPlaying: false });
  };

  return (
    <div
      className="relative flex w-full flex-col items-center justify-center overflow-hidden -top-20 md:mb-20"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <VelocityScroll numRows={1} defaultVelocity={100}>
        <h1 className="text-[8rem] md:text-[12rem] font-regular ml-48 md:ml-64">
          New Day -
        </h1>
        <h1 className="text-[8rem] md:text-[12rem] font-light-italic">
          New Inspo
        </h1>
        <video
          src="/assets/header3.mp4"
          autoPlay
          muted
          loop
          className="rounded-full h-32 md:h-40"
        />
      </VelocityScroll>

      <div className="overflow-hidden pt-40 w-full" ref={containerRef}>
        <motion.div
          className="flex gap-3 md:gap-6 cursor-grab active:cursor-grabbing pl-6 md:pl-20"
          drag="x"
          transition={{ stiffness: 30, damping: 30, ease: "easeInOut" }}
          dragConstraints={dragConstraints}
          whileTap={{ cursor: "grabbing" }}
          ref={cardsContainerRef}
        >
          {cards.map((card, index) => (
            <motion.div key={index}>
              <CardLink1 {...card} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default UiProjectSection;
