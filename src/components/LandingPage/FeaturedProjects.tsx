import React from "react";
import * as motion from "motion/react-client";

import ProjectCard from "../ui/ProjectCard";

interface FeaturedProjectsProps {
  setCursorState: React.Dispatch<
    React.SetStateAction<{
      isHoveringOnVideo: boolean;
      isVideoPlaying: boolean;
    }>
  >;
}

const projects = [
  {
    imageSrc: "/assets/pp-frame.jpeg",
    videoSrc: "/assets/pp-cover.mp4",
    name: "Punto Pago",
    description: "The First Super-App in Latin America",
  },
  {
    imageSrc: "/assets/kz-frame.jpeg",
    videoSrc: "/assets/kz-cover.mp4",
    name: "Kelvin Zero",
    description: "A digital product for password-less authentication",
  },
  {
    imageSrc: "/assets/dw-frame.jpeg",
    videoSrc: "/assets/dw-cover.mp4",
    name: "DaoWay",
    description: "Astrology planner app - plan, achieve, thrive",
  },
  {
    imageSrc: "/assets/ma-frame.jpeg",
    videoSrc: "/assets/ma-cover.mp4",
    name: "Magma",
    description: "The ultimate tool for building in the Web3 era",
  },
  {
    imageSrc: "/assets/ri-frame.jpeg",
    videoSrc: "/assets/ri-cover.mp4",
    name: "Riyadh",
    description: "Official website of Riyadh, Saudi Arabia's capital",
  },
];

// eslint-disable-next-line
const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  setCursorState,
}) => {
  return (
    <div className="min-h-screen bg-black/90 md:rounded-t-[5rem] px-4 pt-20 pb-56 md:px-40 md:pt-32 md:pb-64">
      <h1 className="text-white font-regular text-7xl md:text-9xl">Featured</h1>
      <div className="flex items-center mt-2 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", bounce: 0 },
          }}
        >
          <video
            src="/assets/header2.mp4"
            autoPlay
            muted
            loop
            className="rounded-full h-20 md:h-32"
          />
        </motion.div>
        <h1 className="text-7xl md:text-9xl font-light-italic text-white">
          projects
        </h1>
      </div>

      {/* Grid for Projects */}
      <div className="h-full w-full md:w-8/10 mt-16 md:mt-48 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16">
        <div className="col-span-1 flex flex-col gap-16 md:gap-24">
          {projects
            .filter((_, index) => index % 2 === 0)
            .map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
        </div>
        <div className="col-span-1 flex flex-col gap-24 mt-16 md:mt-64">
          {projects
            .filter((_, index) => index % 2 !== 0)
            .map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
