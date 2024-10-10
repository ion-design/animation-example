'use client';

import { motion } from 'framer-motion';
import SubscribeToContinueCard from "@/components/Subscribe";
import SideNavigation from "@/components/ion/SideNavigation";


function TestPage() {
  return (
      <div className="w-screen h-screen flex">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <SideNavigation />
        </motion.div>
        <div className="bg-container flex-1 h-full w-full flex justify-center items-center gap-5 p-10">
          <SubscribeToContinueCard />
        </div>
    </div>
  );
}
export default TestPage;