'use client';

import { motion } from 'framer-motion';
import SubscribeToContinueCard from "@/components/Subscribe";
import WeatherCard from "@/components/WeatherCard";
import SideNavigation from "@/components/ion/SideNavigation";

const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const pageTransition = {
  duration: 0.6,
  ease: 'easeOut',
};

function TestPage() {
  return (
    <motion.div
      className="w-screen h-screen flex"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      transition={pageTransition}
    >
      <SideNavigation />
      <div className="bg-container flex-1 h-full w-full flex justify-center items-center gap-5 p-10">
        <WeatherCard />
      </div>
    </motion.div>
  );
}

export default TestPage;