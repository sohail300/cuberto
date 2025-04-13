import React from "react";
import { VelocityScroll } from "../ui/magicui/scroll-based-velocity";
import CircularPing from "../ui/CircularPing";
import { ArrowUpRight } from "lucide-react";
import SocialLinkRibbon from "./SocialLinkRibbon";
import { TextAnimate } from "../ui/magicui/text-animate";
import Button from "../ui/Button";

const socials = [
  {
    key: "1",
    platform: "Instagram",
    link: "https://www.instagram.com",
    icon: <ArrowUpRight className="h-12 w-12" />,
  },
  {
    key: "2",
    platform: "LinkedIn",
    link: "https://www.linkedin.com",
    icon: <ArrowUpRight className="h-12 w-12" />,
  },
  {
    key: "3",
    platform: "Dribbble",
    link: "https://www.dribbble.com",
    icon: <ArrowUpRight className="h-12 w-12" />,
  },
  {
    key: "4",
    platform: "GitHub",
    link: "https://www.github.com",
    icon: <ArrowUpRight className="h-12 w-12" />,
  },
  {
    key: "5",
    platform: "YouTube",
    link: "https://www.youtube.com",
    icon: <ArrowUpRight className="h-12 w-12" />,
  },
  {
    key: "6",
    platform: "Behance",
    link: "https://www.behance.com",
    icon: <ArrowUpRight className="h-12 w-12" />,
  },
  {
    key: "7",
    platform: "X",
    link: "https://www.x.com",
    icon: <ArrowUpRight className="h-12 w-12" />,
  },
];

const Socials = () => {
  return (
    <div className="w-full min-h-screen bg-black pt-20 md:pt-32">
      <VelocityScroll numRows={1} defaultVelocity={100}>
        <h1 className="text-8xl md:text-[12rem] text-white font-regular px-10 tracking-tighter mb-16">
          Follow Us
        </h1>
        <CircularPing />
      </VelocityScroll>

      <div className="w-full">
        <h1 className="uppercase text-lg md:text-sm text-white font-light-regular px-6 md:px-28 pt-16 pb-8 md:py-12 border-b-1 border-white/20">
          Social media and contacts
        </h1>

        {socials.map((social) => {
          return (
            <SocialLinkRibbon
              key={social.key}
              platform={social.platform}
              link={social.link}
              icon={social.icon}
            />
          );
        })}
      </div>

      <div className="w-full px-4 md:px-20 flex flex-col md:flex-row relative z-10 bg-black py-24">
        <div className="w-full md:w-1/2 flex flex-col text-light-regular">
          <div className="flex items-center gap-8 md:gap-4">
            <TextAnimate className="text-white text-lg md:text-xs items-center uppercase">
              Main Office
            </TextAnimate>
            <TextAnimate className="text-white text-3xl md:text-2xl">
              901 N Pitt Street
            </TextAnimate>
          </div>
          <TextAnimate className="text-white text-3xl md:text-2xl">
            Alexandria VA, 22314
          </TextAnimate>
          <Button
            className="border-1 border-white rounded-4xl w-fit text-white font-light-regular text-2xl md:text-2xl mt-8 hover:invert"
            padding="pt-4 pb-2 md:py-2 px-6 md:px-4 uppercase"
          >
            Info@cuberto.com
          </Button>
        </div>

        <div className="w-full md:w-1/2 flex flex-col text-light-regular py-32 md:py-0">
          <div className="flex items-center gap-8 md:gap-4">
            <TextAnimate className="text-white text-lg md:text-xs items-center uppercase">
              Second Office
            </TextAnimate>
            <TextAnimate className="text-white text-3xl md:text-2xl">
              901 N Pitt Street
            </TextAnimate>
          </div>
          <TextAnimate className="text-white text-3xl md:text-2xl">
            342/1, 11000 Prague
          </TextAnimate>
          <Button
            className="border-1 border-white rounded-4xl w-fit text-white font-light-regular text-2xl mt-8 hover:invert"
            padding="pt-4 pb-2 md:py-2 px-6 md:px-4 uppercase"
          >
            +1 301 549 9309
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Socials;
