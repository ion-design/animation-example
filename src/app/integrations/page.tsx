'use client';

import ImageGallery from "@/components/ImageGallery";
import SettingsPage from "@/components/SettingsCard";
import SubscribeToContinueCard from "@/components/Subscribe";
import SideNavigation from "@/components/ion/SideNavigation";
import { motion } from 'framer-motion';

function TestPage() {
  return (
      <div className="w-screen h-screen flex">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          <SideNavigation />
        </motion.div>
        <div className="bg-container flex-1 h-full w-full flex justify-center items-center gap-5 p-10">
          <ImageGallery />
        </div>
    </div>
  );
}
export default TestPage;