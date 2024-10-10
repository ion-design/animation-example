'use client';

import ImageGallery from "@/components/ImageGallery";
import SettingsPage from "@/components/SettingsCard";
import SubscribeToContinueCard from "@/components/Subscribe";
import SideNavigation from "@/components/ion/SideNavigation";
import { motion } from "framer-motion";

function TestPage() {
  return (
    <div className="w-screen h-screen flex">
      <SideNavigation />
      <motion.div
        className="bg-container flex-1 h-full w-full flex justify-center items-center gap-5 p-10"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ImageGallery />
      </motion.div>
    </div>
  );
}

export default TestPage;