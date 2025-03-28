import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface ICardLink {
  imageUrl: string;
  href: string;
  title: string;
  icon?: ReactNode;
}

// eslint-disable-next-line
export const CardLink = ({ imageUrl, href, title, icon }: ICardLink) => {
  return (
    <div className="flex flex-col gap-6 aspect-video w-108 md:w-120 rounded-4xl">
      <motion.div
        className="flex flex-col gap-6"
        whileHover={{ scale: 0.98 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <img
          src={`${imageUrl}`}
          alt={`${imageUrl}`}
          className="rounded-4xl md:rounded-3xl object-cover"
        />
      </motion.div>
      <h1 className=" font-medium text-xl md:text-lg text-white">
        {icon} {title}
      </h1>
    </div>
  );
};

// eslint-disable-next-line
export const CardLink1 = ({ imageUrl, href, title, icon }: ICardLink) => {
  return (
    <div className="flex flex-col gap-4 w-80 md:w-76">
      <motion.div
        className="flex flex-col"
        whileHover={{ scale: 0.98 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <img
          src={`${imageUrl}`}
          alt={`${imageUrl}`}
          className="rounded-3xl md:rounded-2xl object-cover w-80 md:w-76 h-60 md:h-56"
        />
      </motion.div>
      <h1 className="flex items-center gap-2 md:gap-0 font-light-regular text-lg md:text-sm">
        {icon} {title}
      </h1>
    </div>
  );
};
