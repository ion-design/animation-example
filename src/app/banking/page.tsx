'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SubscribeToContinueCard from "@/components/Subscribe";
import SideNavigation from "@/components/ion/SideNavigation";

function TestPage() {
  return (
    <motion.div 
      className="w-screen h-screen flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SideNavigation />
      <div className="bg-container flex-1 h-full w-full flex justify-center items-center gap-5 p-10">
        <SubscribeToContinueCard />
      </div>
    </motion.div>
  );
}

export default TestPage;