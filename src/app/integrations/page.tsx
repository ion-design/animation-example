'use client';

import { motion } from 'framer-motion';
import ImageGallery from "@/components/ImageGallery";
import SideNavigation from "@/components/ion/SideNavigation";

function TestPage() {
  return (
    <motion.div
      className="w-screen h-screen flex"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <SideNavigation />
      <motion.div
        className="bg-container flex-1 h-full w-full flex justify-center items-center gap-5 p-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
      >
        <ImageGallery />
      </motion.div>
    </motion.div>
  );
}

export default TestPage;