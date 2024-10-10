'use client';

import { motion } from 'framer-motion';
import SubscribeToContinueCard from "@/components/Subscribe";
import WeatherCard from "@/components/WeatherCard";
import SideNavigation from "@/components/ion/SideNavigation";

function TestPage() {
  return (
    <div className="w-screen h-screen flex">
      <SideNavigation />
      <motion.div
        className="bg-container flex-1 h-full w-full flex justify-center items-center gap-5 p-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <WeatherCard />
      </motion.div>
    </div>
  );
}

export default TestPage;