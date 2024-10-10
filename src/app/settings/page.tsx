'use client';

import { motion } from 'framer-motion';
import SettingsPage from "@/components/SettingsCard";
import SubscribeToContinueCard from "@/components/Subscribe";
import SideNavigation from "@/components/ion/SideNavigation";

function TestPage() {
  return (
    <div className="w-screen h-screen flex">
      <SideNavigation />
      <div className="bg-container flex-1 h-full w-full flex justify-center items-center gap-5 p-10">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <SettingsPage />
        </motion.div>
      </div>
    </div>
  );
}
export default TestPage;