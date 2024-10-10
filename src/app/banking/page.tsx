'use client';

import { motion } from 'framer-motion';
import SubscribeToContinueCard from "@/components/Subscribe";
import SideNavigation from "@/components/ion/SideNavigation";

const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function TestPage() {
  return (
    <motion.div
      className="w-screen h-screen flex"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <SideNavigation />
      <div className="bg-container flex-1 h-full w-full flex justify-center items-center gap-5 p-10">
        <SubscribeToContinueCard />
      </div>
    </motion.div>
  );
}
export default TestPage;