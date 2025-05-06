import { motion } from "motion/react";

export const Title = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-4 text-center text-white">
      <motion.h1
        initial={{ opacity: 0, y: -50, transition: { duration: 0.5 } }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="text-4xl font-bold text-primary md:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h1>
      <p className="w-1/2 text-secondary">{description}</p>
    </div>
  );
};
